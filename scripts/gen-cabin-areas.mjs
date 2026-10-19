#!/usr/bin/env node
/**
 * gen-cabin-areas.mjs — Lomarengas product feed → per-area cabin data + crawlable text.
 *
 * WHY (Vesa 16.9.2026: "tarvitset sitä että sisältö vastaa hakuja"). OpenSEO measured the
 * Finnish demand this site never answered: levi majoitus 8 100/mo, ruka mökit 3 600,
 * ylläs majoitus 3 600, saariselkä majoitus 3 600, levi mökit 1 900, mökki levi 1 600,
 * ylläs mökit 1 600, mökki rovaniemi 590, luosto mökki 320 — keyword difficulty 0–12.
 * The site's only real inventory (Lomarengas, 1 645 Lapland cabins) was fetched in the
 * browser, so Google never saw a single cabin. This script turns the feed dump into
 *
 *   src/data/cabins/<area>.json          — cards for the /cabins/<area> page (lazy chunk)
 *   src/data/cabins/areas.json           — area + place + count, for the /cabins hub index
 *   src/data/cabinAreas.gen.<lang>.ts    — harvestRecord source for the prerender: one
 *                                           sentence per cabin so the crawlable body of
 *                                           /<lang>/cabins/<area> lists real cabins
 *
 * INPUT: ../_affiliate/lomarengas-lapland.json (monorepo root, written by
 * scripts/sync_lomarengas_feed.mjs from the Adtraction product feed, programId 1071150664).
 * The outputs are COMMITTED — CI builds the standalone repo and has no access to the root.
 * Refresh: `node ../scripts/sync_lomarengas_feed.mjs && node scripts/fetch-cabin-geo.mjs && node scripts/gen-cabin-areas.mjs`
 * (or `--src <dump>` on both for a dump written outside the monorepo). fetch-cabin-geo reads the
 * coordinates of new cabins; this script refuses to write when a cabin is missing them. Areas,
 * municipality allowlists and distance points: scripts/cabin-areas.config.mjs + src/data/cabins/refs.json.
 *
 * 🔴 The photo URLs in these files rot. Channable re-issues every templated image: measured
 * 17.10.2026, 1 259 / 1 259 photos of a run made 16.9. answered 404, and 30 cabins had left the
 * feed. The page therefore takes each card's photo from the Worker's daily index
 * (/_cabins?ids=) and uses the one stored here only for cabins the Worker does not list
 * (Kuusamo outside Ruka village). Re-run this script monthly all the same: the crawlable body
 * and the cabin count come from here.
 *
 * `--text-only` rewrites only the crawlable text files (src/data/cabinAreas.gen.<lang>.ts) from the
 * committed area files, without the feed dump and without the network: use it after a copy change in
 * TPL / NAME below (19.10.2026, nine languages added). A full run writes the same text files.
 *
 * 🔴 No prices in these files on purpose. Weekly prices in the dump are a snapshot that
 * goes stale with every week (Vesa removed "from" prices from this site 22.8.2026 for that
 * reason). The page overlays LIVE prices at runtime from the Worker's daily /_cabins feed
 * for the cabins it covers; everything else says "price and availability on Lomarengas".
 *
 * 🔴 The feed's `place` grouping is not clean: "Pyhä-Luosto" contains cabins from
 * Pyhäjärvi, Pyhäjoki, Pyhäranta and Pyhäntä (not Lapland at all). Each area therefore has
 * an ALLOWLIST of municipality slugs, read from the product URL (kunta-kylä-nimi-id).
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { AREAS, MUNI, REFS, slugOf, idOf, nearestRef } from './cabin-areas.config.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const SITE = resolve(HERE, '..');
// `--src <dump>` reads a dump written elsewhere (a copy of sync_lomarengas_feed.mjs run outside
// the monorepo); default is the monorepo's committed dump.
const srcArg = process.argv.indexOf('--src');
const SRC = srcArg > 0 ? resolve(process.argv[srcArg + 1]) : resolve(SITE, '..', '_affiliate', 'lomarengas-lapland.json');
const TEXT_ONLY = process.argv.includes('--text-only');
if (!TEXT_ONLY && !existsSync(SRC)) {
  console.error(`✗ ${SRC} puuttuu — aja ensin node scripts/sync_lomarengas_feed.mjs monorepon juuressa`);
  process.exit(1);
}
const dump = TEXT_ONLY ? { cottages: [] } : JSON.parse(readFileSync(SRC, 'utf8'));
const all = dump.cottages || [];

/** Name without a trailing unit marker: "Porukka 2" → "porukka", "Nilikuru a 2" → "nilikuru". */
function stemOf(name) {
  let n = name.toLowerCase().trim();
  for (let i = 0; i < 2; i++) n = n.replace(/[\s-]+([a-d]|\d{1,3}|[a-d]\s?\d{1,3})$/i, '').trim();
  return n;
}
/** Greedy re-order: the next card must not share a photo or a name stem with the previous WIN cards. */
function diversify(rows, WIN = 6) {
  const out = [];
  const pool = rows.slice();
  while (pool.length) {
    const recent = out.slice(-WIN);
    let i = pool.findIndex((c) => !recent.some((r) => r.img === c.img || stemOf(r.name) === stemOf(c.name)));
    if (i < 0) i = 0;
    out.push(pool.splice(i, 1)[0]);
  }
  return out;
}

// Distance to the nearest village or resort of the area, on every card (Vesa 17.10.2026: Ruka
// first, "Kortteihin etäisyys Rukalle", then "onko tämä tehty nyt joka paikkakunnalle?"). The feed's
// `place` is a regex on the product URL, so it holds a whole municipality (Ruka = all of Kuusamo:
// 65 of 306 cabins more than 10 km from Ruka, the farthest 72 km), and URL villages are wide
// ("rukatunturi": 70 of 227 cabins 3–10 km from Ruka). Coordinates come from each cabin's own
// Lomarengas page (fetch-cabin-geo.mjs). Cabins more than NEAR_KM from every point form a second
// section; the page names it per area.
const NEAR_KM = 10;
const MIN_SECTION = 3;
const PLACE_KM = 5;
// Areas whose copy (src/pages/CabinArea.copy.*.ts) has section headings and an intro with {near}/{far}.
// If a refresh changes which areas split, the copy must follow: the run says so.
const SPLIT_COPY = ['yllas', 'ruka', 'saariselka', 'rovaniemi', 'enontekio', 'inari', 'utsjoki', 'salla', 'kemijarvi', 'posio', 'kittila', 'muonio'];
const GEO_PATH = resolve(SITE, 'src', 'data', 'cabins', 'geo.json');
const GEO = existsSync(GEO_PATH) ? JSON.parse(readFileSync(GEO_PATH, 'utf8')) : {};

// Crawlable line templates. Only numbers that exist in the data (number gate).
const where = (c) => (c.place === c.muni ? c.place : `${c.place} (${c.muni})`);
const DIST = {
  fi: (c) => (c.km < 1 ? `, alle 1 km ${REFS[c.ref].fi}` : `, noin ${c.km} km ${REFS[c.ref].fi}`),
  en: (c) => (c.km < 1 ? `, under 1 km ${REFS[c.ref].en}` : `, about ${c.km} km ${REFS[c.ref].en}`),
  de: (c) => (c.km < 1 ? `, unter 1 km ${REFS[c.ref].de}` : `, etwa ${c.km} km ${REFS[c.ref].de}`),
};
// Singular and plural by the language's own rule (Intl.PluralRules): 462 of 1 580 cabins have one
// bedroom and 44 one star, so a fixed plural printed "1 bedrooms" / "1 makuuhuonetta" on ~30 % of the
// lines (measured 19.10.2026). `n(lang, x, one, other)`: `#` in the form is the number.
const PLURAL_LOCALE = { ptBR: 'pt-BR', zhCN: 'zh-TW' };
const plural = (lang, x, one, other) => (new Intl.PluralRules(PLURAL_LOCALE[lang] || lang).select(x) === 'one' ? one : other).replace('#', String(x));
// A cabin with no bedroom count (studio, 229 of 1 580), no star rating (7) or no size (1) says nothing
// about it, as on the card: "0 bedrooms" / "0 stars" / "0 m²" read as a defect (measured 19.10.2026).
const opt = (x, text) => (x > 0 ? text : '');
const LINE = {
  fi: (c) => `${c.name}, ${where(c)}${DIST.fi(c)}: ${plural('fi', c.guests, '# vieras', '# vierasta')}${opt(c.br, `, ${plural('fi', c.br, '# makuuhuone', '# makuuhuonetta')}`)}${opt(c.sqm, `, ${c.sqm} m²`)}${opt(c.stars, `, ${plural('fi', c.stars, '# tähti', '# tähteä')}`)}.`,
  en: (c) => `${c.name}, ${where(c)}${DIST.en(c)}: sleeps ${c.guests}${opt(c.br, `, ${plural('en', c.br, '# bedroom', '# bedrooms')}`)}${opt(c.sqm, `, ${c.sqm} m²`)}${opt(c.stars, `, ${plural('en', c.stars, '# star', '# stars')}`)}.`,
  de: (c) => `${c.name}, ${where(c)}${DIST.de(c)}: ${plural('de', c.guests, '# Person', '# Personen')}${opt(c.br, `, ${c.br} Schlafzimmer`)}${opt(c.sqm, `, ${c.sqm} m²`)}${opt(c.stars, `, ${plural('de', c.stars, '# Stern', '# Sterne')}`)}.`,
};
const HEAD = {
  fi: (name, n) => `${name}: ${n} vuokramökkiä Lomarenkaan valikoimassa. Jokaisesta mökistä etäisyys lähimpään kylään tai keskukseen, henkilömäärä, makuuhuoneet, koko ja tähtiluokitus; viikkohinnat ja vapaat viikot Lomarenkaalla.`,
  en: (name, n) => `${name}: ${n} rental cabins in the Lomarengas listings. Distance to the nearest village or resort, guests, bedrooms, size and star rating for every cabin; weekly prices and free weeks on Lomarengas.`,
  de: (name, n) => `${name}: ${n} Ferienhäuser im Lomarengas-Angebot. Entfernung zum nächsten Ort oder Skigebiet, Personenzahl, Schlafzimmer, Größe und Sterne für jedes Ferienhaus; Wochenpreise und freie Wochen bei Lomarengas.`,
};
const HEAD_AREA = {
  ruka: {
    fi: (name, near, far) => `${name}: Lomarenkaan valikoimassa ${near} vuokramökkiä Rukalla ja enintään ${NEAR_KM} km:n päässä Rukan kylästä sekä ${far} mökkiä kauempana Kuusamon järviseudulla. Jokaisesta mökistä etäisyys Rukalle, henkilömäärä, makuuhuoneet, koko ja tähtiluokitus; viikkohinnat ja vapaat viikot Lomarenkaalla.`,
    en: (name, near, far) => `${name}: ${near} Lomarengas rental cabins in Ruka and up to ${NEAR_KM} km from Ruka village, and ${far} more further out in the Kuusamo lake country. Distance to Ruka, guests, bedrooms, size and star rating for every cabin; weekly prices and free weeks on Lomarengas.`,
    de: (name, near, far) => `${name}: Lomarengas bietet ${near} Ferienhäuser in Ruka und bis zu ${NEAR_KM} km vom Ort Ruka entfernt sowie ${far} weitere in der Seenlandschaft von Kuusamo. Entfernung nach Ruka, Personenzahl, Schlafzimmer, Größe und Sterne für jedes Ferienhaus; Wochenpreise und freie Wochen bei Lomarengas.`,
  },
};
const NAME = {
  levi: { fi: 'Levin mökit', en: 'Cabins in Levi', de: 'Ferienhäuser in Levi' },
  yllas: { fi: 'Ylläksen mökit', en: 'Cabins in Ylläs', de: 'Ferienhäuser in Ylläs' },
  ruka: { fi: 'Rukan mökit', en: 'Cabins in Ruka', de: 'Ferienhäuser in Ruka' },
  saariselka: { fi: 'Saariselän mökit', en: 'Cabins in Saariselkä', de: 'Ferienhäuser in Saariselkä' },
  'pyha-luosto': { fi: 'Pyhän ja Luoston mökit', en: 'Cabins in Pyhä and Luosto', de: 'Ferienhäuser in Pyhä und Luosto' },
  rovaniemi: { fi: 'Rovaniemen mökit', en: 'Cabins in Rovaniemi', de: 'Ferienhäuser in Rovaniemi' },
  enontekio: { fi: 'Enontekiön mökit', en: 'Cabins in Enontekiö', de: 'Ferienhäuser in Enontekiö' },
  inari: { fi: 'Inarin mökit', en: 'Cabins in Inari', de: 'Ferienhäuser in Inari' },
  utsjoki: { fi: 'Utsjoen mökit', en: 'Cabins in Utsjoki', de: 'Ferienhäuser in Utsjoki' },
  salla: { fi: 'Sallan mökit', en: 'Cabins in Salla', de: 'Ferienhäuser in Salla' },
  kemijarvi: { fi: 'Kemijärven mökit', en: 'Cabins in Kemijärvi', de: 'Ferienhäuser in Kemijärvi' },
  posio: { fi: 'Posion mökit', en: 'Cabins in Posio', de: 'Ferienhäuser in Posio' },
  kittila: { fi: 'Kittilän mökit', en: 'Cabins in Kittilä', de: 'Ferienhäuser in Kittilä' },
  pello: { fi: 'Pellon mökit', en: 'Cabins in Pello', de: 'Ferienhäuser in Pello' },
  sodankyla: { fi: 'Sodankylän mökit', en: 'Cabins in Sodankylä', de: 'Ferienhäuser in Sodankylä' },
  muonio: { fi: 'Muonion mökit', en: 'Cabins in Muonio', de: 'Ferienhäuser in Muonio' },
};

// The other nine site languages (19.10.2026): templates and names in scripts/cabin-areas.i18n.json,
// keyed by the copy-file ident (ptBR, zhCN). Placeholders: {name} {where} {dist} {guests} {br} {sqm}
// {stars} in `line`; {place} {muni} in `where`; {km} {from} in `dist`/`distUnder1`; {name} {n} in
// `head`; {name} {near} {nearKm} {far} in `headRuka`. `from` is the phrase of refs.json in that language.
const I18N_PATH = resolve(SITE, 'scripts', 'cabin-areas.i18n.json');
const I18N = existsSync(I18N_PATH) ? JSON.parse(readFileSync(I18N_PATH, 'utf8')) : {};
// `{br}` = the value; `{br|# camera|# camere}` = singular/plural form by the language's rule;
// `[[br|, …]]` = the part inside only when the value is above 0 (no "0 bedrooms" / "0 stars").
const fill = (t, v, lang) => t.replace(/\[\[(\w+)\|([\s\S]*?)\]\]/g, (m, k, inner) => (k in v ? (Number(v[k]) > 0 ? inner : '') : m)).replace(/\{(\w+)(?:\|([^|}]*)\|([^}]*))?\}/g, (m, k, one, other) =>
  !(k in v) ? m : one !== undefined ? plural(lang, v[k], one, other) : String(v[k]));
for (const [lang, t] of Object.entries(I18N)) {
  for (const area of Object.keys(NAME)) {
    if (!t.name?.[area]) { console.error(`✗ cabin-areas.i18n.json ${lang}: name.${area} puuttuu`); process.exit(1); }
    NAME[area][lang] = t.name[area];
  }
  for (const key of Object.keys(REFS).filter((k) => k !== '_')) {
    if (!REFS[key][lang]) { console.error(`✗ src/data/cabins/refs.json ${key}: ${lang} puuttuu`); process.exit(1); }
  }
  const whereT = (c) => (c.place === c.muni ? c.place : fill(t.where, { place: c.place, muni: c.muni }, lang));
  DIST[lang] = (c) => fill(c.km < 1 ? t.distUnder1 : t.dist, { km: c.km, from: REFS[c.ref][lang] }, lang);
  LINE[lang] = (c) => fill(t.line, { name: c.name, where: whereT(c), dist: DIST[lang](c), guests: c.guests, br: c.br, sqm: c.sqm, stars: c.stars }, lang);
  HEAD[lang] = (name, n) => fill(t.head, { name, n }, lang);
  HEAD_AREA.ruka[lang] = (name, near, far) => fill(t.headRuka, { name, near, far, nearKm: NEAR_KM }, lang);
}
const LANGS = ['fi', 'en', 'de', ...Object.keys(I18N)];

// Image validation: the dump is a snapshot and Channable purges creatives of delisted cabins.
// A card with a broken photo fails the image-frame gate and sells nothing, so every image is
// HEAD-checked here and cabins whose photo is gone are dropped (measured 16.9.2026: 1 of 24 on Levi).
// 🔴 Measured 17.9.2026: one HEAD with 24-way concurrency and an 8 s timeout reported 316/1 645
// images dead in a single day; every sampled one answered 200 image/png on a retry. A network
// flake is not a dead image. Three attempts (HEAD, then GET), and only 404/410 is definitive.
async function imageAlive(url) {
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const r = await fetch(url, { method: attempt === 0 ? 'HEAD' : 'GET', redirect: 'follow', signal: AbortSignal.timeout(15000) });
      if (r.ok && /image/.test(r.headers.get('content-type') || '')) return true;
      if (r.status === 404 || r.status === 410) return false;
    } catch { /* retry */ }
    await new Promise((res) => setTimeout(res, 500 * (attempt + 1)));
  }
  return false;
}
async function filterAlive(rows) {
  const out = []; let i = 0; const N = 8;
  await Promise.all(Array.from({ length: N }, async () => {
    while (i < rows.length) { const c = rows[i++]; if (await imageAlive(c.img)) out.push(c); }
  }));
  return out;
}

const outDir = resolve(SITE, 'src', 'data', 'cabins');
mkdirSync(outDir, { recursive: true });
const gen = Object.fromEntries(LANGS.map((l) => [l, {}]));
const textFor = (area, rows, split) => {
  for (const lang of LANGS) {
    gen[lang][area] = {
      title: NAME[area][lang],
      intro: split && HEAD_AREA[area] ? HEAD_AREA[area][lang](NAME[area][lang], split.near, split.far) : HEAD[lang](NAME[area][lang], rows.length),
      lines: rows.slice(0, 60).map((c) => LINE[lang](c)),
    };
  }
};
const writeText = () => {
  for (const lang of LANGS) {
    const body = `// GENEROITU, älä muokkaa käsin. scripts/gen-cabin-areas.mjs lukee Lomarenkaan
// tuotesyötteen (_affiliate/lomarengas-lapland.json) ja kirjoittaa tämän prerenderin
// harvestRecord-lähteeksi: /cabins/<alue> -sivun ryömittävä runko listaa oikeat mökit.
// Kieli: ${lang}. Ei hintoja (viikkohinta vanhenee; live-hinta tulee Workerin syötteestä).
export const cabinAreas = ${JSON.stringify(gen[lang], null, 2)} as const;
`;
    writeFileSync(resolve(SITE, 'src', 'data', `cabinAreas.gen.${lang}.ts`), body);
  }
};
if (TEXT_ONLY) {
  for (const area of Object.keys(AREAS)) {
    const d = JSON.parse(readFileSync(resolve(outDir, `${area}.json`), 'utf8'));
    textFor(area, d.cabins, d.split || null);
  }
  writeText();
  console.log(`✓ --text-only: src/data/cabinAreas.gen.{${LANGS.join(',')}}.ts ${Object.keys(AREAS).length} alueesta (ei syötettä, ei verkkoa)`);
  process.exit(0);
}
const summary = [];
// Every area first, then write: a missing coordinate must not leave half the pages regenerated.
const results = [];
for (const [area, def] of Object.entries(AREAS)) {
  let rows = [];
  let dropped = 0;
  for (const c of all) {
    if (c.place !== def.place) continue;
    const slug = slugOf(c);
    const pre = slug.split('-')[0];
    if (!slug || !def.munis.includes(pre)) { dropped++; continue; }
    rows.push({
      id: idOf(slug),
      name: c.name,
      slug,
      place: c.place,
      muni: MUNI[pre] || pre,
      guests: c.guests,
      sqm: Math.round(c.areaM2),
      br: c.bedrooms,
      stars: c.stars || 0,
      img: c.image,
    });
  }
  const before = rows.length;
  rows = await filterAlive(rows);
  const deadImages = before - rows.length;
  // Guard: more than 15 % "dead" in one run is a network problem, not a feed change. Abort
  // before writing anything (yesterday's real purge rate was 106/1 645 = 6.4 %).
  if (before >= 20 && deadImages / before > 0.15) {
    console.error(`✗ ${area}: ${deadImages}/${before} kuvaa "kuollut" yhdellä ajolla — verkko-ongelma, ei syötemuutos. Ei kirjoitettu mitään.`);
    process.exit(2);
  }
  const noGeo = rows.filter((c) => !GEO[c.id]);
  if (noGeo.length) {
    console.error(`✗ ${area}: ${noGeo.length} mökiltä puuttuu koordinaatti (${noGeo.slice(0, 5).map((c) => c.slug).join(', ')} …) — aja ensin node scripts/fetch-cabin-geo.mjs. Ei kirjoitettu mitään.`);
    process.exit(1);
  }
  for (const c of rows) {
    const n = nearestRef(def, GEO[c.id]);
    c.km = n.km < 1 ? +n.km.toFixed(1) : Math.round(n.km);
    c.ref = n.key;
    c.section = n.km <= NEAR_KM ? 'near' : 'far';
    // The village or resort name only within PLACE_KM of it; otherwise the municipality, and the
    // distance line says how far the nearest point is. 3 km (first Ruka cut) was too tight for a
    // resort: the Levi Star West slope apartments are 3 km from the Levi point and read "Kittilä".
    c.place = n.km <= PLACE_KM ? REFS[n.key].place : c.muni;
  }
  // Bigger and better-rated first — the first 60 lines are what the crawlable body prints.
  rows.sort((a, b) => (b.stars - a.stars) || (b.guests - a.guests) || a.name.localeCompare(b.name, 'fi'));
  // Then spread siblings apart (Vesa 17.9.2026: "onko liikaa samantyyppisiä?"). Sister units of
  // one complex ("Porukka 1" / "Porukka 2", "Levi Star West A" / "B", four Nilikuru flats) share
  // a photo and a name and sorted next to each other: measured 3–5 lookalike pairs in the first
  // 24 cards of Levi, Ruka, Saariselkä and Rovaniemi. Same rank order otherwise.
  const near = diversify(rows.filter((c) => c.section === 'near'));
  // Far cabins nearest first: that is what a reader of this page weighs.
  const far = diversify(rows.filter((c) => c.section === 'far').sort((a, b) => (a.km - b.km) || a.name.localeCompare(b.name, 'fi')));
  rows = [...near, ...far];
  // Two sections only when both hold at least MIN_SECTION cabins: a heading over one cabin is noise
  // (Pello 1 + 11, Kittilä 2 + 19 measured 17.10.2026); those pages list everything with the distance.
  const split = near.length >= MIN_SECTION && far.length >= MIN_SECTION ? { near: near.length, far: far.length, nearKm: NEAR_KM } : null;
  results.push({ area, def, rows, split, dropped, deadImages });
}
for (const { area, def, rows, split, dropped, deadImages } of results) {
  // The sync script leaves `generated` null on purpose ("stamp it at run time"): this run
  // HEAD-checked every photo today, so today is the date the data was last known good.
  writeFileSync(resolve(outDir, `${area}.json`), JSON.stringify({ area, place: def.place, count: rows.length, generated: dump.generated || new Date().toISOString().slice(0, 10), ...(split ? { split } : {}), cabins: rows }));
  textFor(area, rows, split);
  summary.push(`${area.padEnd(12)} ${String(rows.length).padStart(4)} mökkiä${split ? ` (lähellä ${split.near}, kauempana ${split.far})` : ''} (pudotettu ${dropped}, kuva kuollut ${deadImages})`);
}
writeText();
// Index for the /cabins hub (Cabins.tsx "cabins by area"): one row per area page, so the hub
// links every area with its count without importing the 1 580-cabin data files (18.10.2026:
// the hub linked 4 of 16 area pages).
writeFileSync(resolve(outDir, 'areas.json'), JSON.stringify(results.map(({ area, def, rows }) => ({ area, place: def.place, count: rows.length }))));
console.log(summary.join('\n'));
const splitNow = results.filter((r) => r.split).map((r) => r.area);
const drift = [...splitNow.filter((a) => !SPLIT_COPY.includes(a)), ...SPLIT_COPY.filter((a) => !splitNow.includes(a))];
if (drift.length) console.warn(`⚠️ osiojako muuttui (${drift.join(', ')}): päivitä CabinArea.copy.*.ts split + intro ja SPLIT_COPY`);
console.log(`✓ src/data/cabins/*.json + src/data/cabinAreas.gen.{${LANGS.join(',')}}.ts (lähde ${dump.count} mökkiä)`);
