// Jokaisessa uutisjutussa on rungossa nappi, joka vie lukijan loogiseen seuraavaan tekoon.
//
//   node scripts/check-news-action.mjs
//
// Vesa 25.11.2026, hubin HiihtoHelvetti-uutisesta, joka nimesi lipunmyyjän eikä linkannut sinne:
// "jokaisessa artikkelissa jos suinkin vaan mahdollista tulisi olla jokin nappi joka loogisesti
// ohjaa". Hubin portti on laplandvibes/scripts/check-blog-action.mjs; tämä on sama uutisosion
// lohkomallille, ja tiedosto on sama kaikilla uutisosion sivustoilla (26.11.2026).
//
// Juttu (src/news/articles/<slug>/) läpäisee, kun sen englanninkielisessä rungossa on upotus,
// jonka meta.json-asetus on toimintakortti:
//   type 'action'     src/news/actionEmbed.tsx (Workerin linkki tai sivuston oma polku)
//   type 'flightCta'  laplandflightsin lentohaku lähtökaupungeittain
//   id 'carRental'    laplandtransportin vuokra-autokortti
// Jos nappi ei sovi aiheeseen, syy kirjataan tiedostoon scripts/news-action-exceptions.json
// ({ "<slug>": "syy, vähintään 20 merkkiä" }). Tyhjä syy ja poistuneen jutun rivi kaatavat.
// Lisäksi 'action'-asetus tarkistetaan: Workerin linkki vaatii sid-parametrin, eikä raakaa
// kumppanin osoitetta hyväksytä. Muistin sääntö: _claude/feedback_artikkelissa_toimintanappi.md.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const juuri = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const kansio = path.join(juuri, 'src/news/articles');
const poikkeustiedosto = path.join(juuri, 'scripts/news-action-exceptions.json');
const poikkeukset = fs.existsSync(poikkeustiedosto) ? JSON.parse(fs.readFileSync(poikkeustiedosto, 'utf8')) : {};
const GO = 'https://go.laplandvibes.com/go/';

const jutut = fs.existsSync(kansio)
  ? fs.readdirSync(kansio).filter((s) => fs.existsSync(path.join(kansio, s, 'meta.json')))
  : [];
if (jutut.length === 0) {
  console.error('check-news-action: 0 juttua luettu, polku väärä?');
  process.exit(1);
}

const virheet = [];
function tarkistaLinkki(slug, id, kentta, href) {
  if (typeof href !== 'string' || href.length === 0) return virheet.push(`${slug}: upotus "${id}" ${kentta} puuttuu`);
  if (href.startsWith('/')) return;
  if (!href.startsWith(GO)) return virheet.push(`${slug}: upotus "${id}" ${kentta} ei ole Workerin linkki eikä sivuston polku: ${href}`);
  const url = new URL(href);
  if (!url.searchParams.get('sid')) virheet.push(`${slug}: upotus "${id}" ${kentta} ilman sid-parametria: ${href}`);
}

let poikkeuksia = 0;
for (const slug of jutut) {
  const meta = JSON.parse(fs.readFileSync(path.join(kansio, slug, 'meta.json'), 'utf8'));
  const en = JSON.parse(fs.readFileSync(path.join(kansio, slug, 'en.json'), 'utf8'));
  const embeds = meta.embeds || {};
  let nappi = false;
  for (const b of en.body || []) {
    if (b.t !== 'embed') continue;
    const cfg = embeds[b.id] || {};
    if (cfg.type === 'action') {
      tarkistaLinkki(slug, b.id, 'href', cfg.href);
      if (cfg.secondaryHref !== undefined) tarkistaLinkki(slug, b.id, 'secondaryHref', cfg.secondaryHref);
      if (!Array.isArray(b.items) || !b.items[0]) virheet.push(`${slug}: upotus "${b.id}" ilman napin tekstiä (items[0])`);
      if (cfg.secondaryHref && !(b.items || [])[1]) virheet.push(`${slug}: upotus "${b.id}" secondaryHref ilman tekstiä (items[1])`);
      nappi = true;
    } else if (cfg.type === 'flightCta' || b.id === 'carRental') {
      nappi = true;
    }
  }
  if (nappi) continue;
  const syy = poikkeukset[slug];
  if (typeof syy === 'string' && syy.trim().length >= 20) { poikkeuksia += 1; continue; }
  virheet.push(`${slug}: ei toimintanappia rungossa eikä kirjattua syytä (upotus type "action" tai syy tiedostoon scripts/news-action-exceptions.json)`);
}
for (const s of Object.keys(poikkeukset)) {
  if (!s.startsWith('_') && !jutut.includes(s)) virheet.push(`scripts/news-action-exceptions.json: "${s}" ei ole enää juttu, poista rivi`);
}

if (virheet.length) {
  for (const v of virheet) console.error(`❌ ${v}`);
  process.exit(1);
}
console.log(`✅ check-news-action: ${jutut.length} juttua, ${jutut.length - poikkeuksia} napillista, ${poikkeuksia} kirjatulla syyllä`);
