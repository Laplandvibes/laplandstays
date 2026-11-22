#!/usr/bin/env node
/**
 * refresh-cabins.mjs — mökkisivujen data Lomarenkaan nykyisestä syötteestä, yhdellä komennolla.
 *
 *   npm run cabins:refresh                       hae syöte → vartijat → koordinaatit uusille → src/data/cabins/ uudelleen
 *   node scripts/refresh-cabins.mjs --check      sama haku ja vartijat, EI kirjoita mitään (näyttää poistuneet ja uudet)
 *   node scripts/refresh-cabins.mjs --feed <xml> syöte tiedostosta verkon sijaan (testit, käsin tallennettu syöte)
 *   … --raportti=<json>                          tulos koneluettavana (ajastettu ajo lukee tämän)
 *
 * Exit-koodit: 0 = kirjoitettu (tai --check ok) · 2 = syöte näyttää rikkinäiseltä, mitään ei kirjoitettu ·
 * 3 = aluesivujen osiojako muuttuisi (tekstit pitää päivittää ensin), mitään ei kirjoitettu · 1 = muu virhe.
 *
 * Vaiheet:
 *  1. syöte (natiivi XML, scripts/cabins-feed.mjs) → jäsennys
 *  2. vartijat ENNEN kirjoitusta (cabins-feed.mjs LIMITS): Workerin mökkinäyteikkunan rajat + äkillinen pudotus
 *     (yli 15 % kaikista tai yli 35 % yhden alueen mökeistä katoaisi kerralla)
 *  3. fetch-cabin-geo.mjs: koordinaatit uusille mökeille Lomarenkaan mökkisivulta (vain puuttuville)
 *  4. gen-cabin-areas.mjs: kuvien tarkistus (yli 15 % kuolleita alueella ⇒ ei kirjoiteta), osiojako, tiedostot
 *  5. ero ennen/jälkeen tulosteeseen ja raporttiin
 *
 * Säännöt jotka pysyvät (gen-cabin-areas.mjs): ei hintoja (LV-CABINS-NOPRICE, Vesa 26.9.2026), kuva on syötteen
 * oma osoite Lomarenkaan logoineen (ei rajata), nimet ovat dataa eikä niitä käännetä, etäisyysrivit jokaisessa
 * kortissa. Linkit rakentaa sivu Workerin /go/lomarengas-reitin kautta.
 */
import { readFileSync, writeFileSync, mkdtempSync, rmSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { AREAS } from './cabin-areas.config.mjs';
import { parseFeed, selectAreas, feedProblems, diffAreas, fetchFeed } from './cabins-feed.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const SITE = resolve(HERE, '..');
const DATA = resolve(SITE, 'src', 'data', 'cabins');
const argv = process.argv.slice(2);
const has = (f) => argv.includes(f);
const val = (name) => {
  const i = argv.indexOf(`--${name}`);
  if (i >= 0) return argv[i + 1];
  const eq = argv.find((a) => a.startsWith(`--${name}=`));
  return eq ? eq.slice(name.length + 3) : null;
};
const CHECK = has('--check');
const FEED_FILE = val('feed');
const REPORT = val('raportti');
const today = new Date().toISOString().slice(0, 10);

const readCurrent = () => Object.fromEntries(Object.keys(AREAS).map((a) => [a, JSON.parse(readFileSync(resolve(DATA, `${a}.json`), 'utf8')).cabins]));
const report = { date: today, mode: CHECK ? 'check' : 'write', result: null, problems: [], areas: {}, totals: {} };
function finish(result, code) {
  report.result = result;
  if (REPORT) writeFileSync(REPORT, JSON.stringify(report, null, 1));
  process.exitCode = code;
}
function printDiff(diff, title) {
  console.log(`\n${title}`);
  console.log(`${'alue'.padEnd(12)} ${'ennen'.padStart(6)} ${'nyt'.padStart(6)} ${'pois'.padStart(5)} ${'uusia'.padStart(6)}`);
  let a = 0, b = 0, r = 0, n = 0;
  for (const [area, d] of Object.entries(diff)) {
    console.log(`${area.padEnd(12)} ${String(d.site).padStart(6)} ${String(d.feed).padStart(6)} ${String(d.removed.length).padStart(5)} ${String(d.added.length).padStart(6)}`);
    a += d.site; b += d.feed; r += d.removed.length; n += d.added.length;
  }
  console.log(`${'YHTEENSÄ'.padEnd(12)} ${String(a).padStart(6)} ${String(b).padStart(6)} ${String(r).padStart(5)} ${String(n).padStart(6)}`);
  return { before: a, after: b, removed: r, added: n };
}
const node = (script, args) => spawnSync(process.execPath, [resolve(HERE, script), ...args], { cwd: SITE, stdio: 'inherit' }).status;

async function main() {
  const xml = FEED_FILE ? readFileSync(resolve(FEED_FILE), 'utf8') : await fetchFeed();
  const feed = parseFeed(xml);
  const current = readCurrent();
  const selected = selectAreas(feed.cottages);
  const plan = diffAreas(current, selected);
  console.log(`syöte: ${feed.products} tuotetta, Lapin rivejä ${feed.cottages.length}${FEED_FILE ? ` (tiedosto ${FEED_FILE})` : ''}`);
  report.totals.feedPlan = printDiff(plan, 'Syöte verrattuna sivun nykyiseen dataan (ennen kuvien tarkistusta):');
  report.plan = plan;

  report.problems = feedProblems(feed, current);
  if (report.problems.length) {
    console.error(`\n✗ Syöte hylätty, mitään ei kirjoitettu:\n  - ${report.problems.join('\n  - ')}`);
    return finish('hylätty', 2);
  }
  console.log('\n✓ vartijat ok');
  if (CHECK) return finish('check ok', 0);

  const tmp = mkdtempSync(join(tmpdir(), 'lv-cabins-'));
  try {
    const dump = join(tmp, 'lomarengas-lapland.json');
    writeFileSync(dump, JSON.stringify({ generated: today, source: 'Adtraction product feed, Lomarengas programId 1071150664', count: feed.cottages.length, cottages: feed.cottages }));
    console.log('\nkoordinaatit uusille mökeille …');
    const geo = node('fetch-cabin-geo.mjs', ['--src', dump]);
    if (geo !== 0) { report.problems.push('koordinaattia ei saatu kaikille uusille mökeille (fetch-cabin-geo.mjs)'); return finish('virhe: koordinaatit', 1); }
    console.log('\naluetiedostot (kuvien tarkistus, osiojako) …');
    const gen = node('gen-cabin-areas.mjs', ['--src', dump]);
    if (gen === 2) { report.problems.push('liian moni kuva ei vastannut (verkko-ongelma?), mitään ei kirjoitettu'); return finish('hylätty: kuvat', 2); }
    if (gen === 3) { report.problems.push('aluesivujen osiojako muuttuisi: CabinArea.copy.*.ts ja SPLIT_COPY päivitettävä ensin'); return finish('hylätty: osiojako', 3); }
    if (gen !== 0) { report.problems.push(`gen-cabin-areas.mjs päättyi koodilla ${gen}`); return finish('virhe: gen', 1); }
  } finally {
    rmSync(tmp, { recursive: true, force: true });
  }

  const written = readCurrent();
  const final = diffAreas(current, written);
  report.totals.written = printDiff(final, 'Kirjoitettu (kuvien tarkistuksen jälkeen):');
  report.areas = final;
  for (const [area, d] of Object.entries(final)) {
    for (const c of d.removed) console.log(`  − ${area}: ${c.name} (${c.id})`);
    for (const c of d.added) console.log(`  + ${area}: ${c.name} (${c.id})`);
  }
  finish('kirjoitettu', 0);
}

main().catch((e) => {
  console.error('✗ ' + e.message);
  report.problems.push(e.message);
  finish('virhe', 1);
});
