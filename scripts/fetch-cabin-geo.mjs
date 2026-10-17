#!/usr/bin/env node
/**
 * fetch-cabin-geo.mjs — coordinates of the Ruka-page cabins from Lomarenkaan own cabin pages.
 *
 * WHY (Vesa 17.10.2026, after the measurement): the /cabins/ruka page listed every Lomarengas
 * cabin in the municipality of Kuusamo as "Ruka, Kuusamo". The feed's `place` is a regex on the
 * product URL (/kuusamo|ruka/ in sync_lomarengas_feed.mjs), and 79 of 306 URLs carry no village
 * (kuusamo-<name>-<id>) or another village. Measured from each cabin page's JSON-LD `geo`: 14 of
 * them within 10 km of Ruka, 53 at 10–30 km, 12 at 31–72 km. Vesa: "Tee kaksi osiota: Ruka ja
 * lähialue alle 10 km, ja erikseen Kuusamon järviseudun mökit. Kortteihin etäisyys Rukalle."
 *
 * The product feed has no coordinates, so they are read once per cabin from the public cabin
 * page (schema.org GeoCoordinates) and kept in src/data/cabins/geo.json. Only cabins missing from
 * that table are fetched: one request per second, so a monthly refresh asks for a handful.
 *
 *   node scripts/fetch-cabin-geo.mjs [--src <dump>]   then   node scripts/gen-cabin-areas.mjs [--src <dump>]
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const srcArg = process.argv.indexOf('--src');
const SRC = srcArg > 0 ? resolve(process.argv[srcArg + 1]) : resolve(SITE, '..', '_affiliate', 'lomarengas-lapland.json');
const GEO = resolve(SITE, 'src', 'data', 'cabins', 'geo.json');
if (!existsSync(SRC)) { console.error(`✗ ${SRC} puuttuu`); process.exit(1); }

const dump = JSON.parse(readFileSync(SRC, 'utf8'));
const geo = existsSync(GEO) ? JSON.parse(readFileSync(GEO, 'utf8')) : {};
// Same selection as gen-cabin-areas.mjs AREAS.ruka (place Ruka, municipality kuusamo / rukatunturi).
const slugOf = (c) => (c.productUrl.split('/mokit/')[1] || '').trim();
const want = dump.cottages
  .filter((c) => c.place === 'Ruka' && ['kuusamo', 'rukatunturi'].includes(slugOf(c).split('-')[0]))
  .map((c) => ({ id: slugOf(c).split('-').pop(), slug: slugOf(c) }))
  .filter((c) => !geo[c.id]);
console.log(`${want.length} mökiltä puuttuu koordinaatti (taulussa ${Object.keys(geo).length})`);

let got = 0, failed = 0;
for (const c of want) {
  let html = '';
  for (let a = 0; a < 3 && !html; a++) {
    try {
      const r = await fetch(`https://www.lomarengas.fi/mokit/${c.slug}`, {
        headers: { 'User-Agent': 'Mozilla/5.0 (compatible; LaplandStays cabin-geo; +https://laplandstays.com)' },
        signal: AbortSignal.timeout(20000),
      });
      if (r.ok) html = await r.text();
    } catch { /* retry */ }
    await new Promise((s) => setTimeout(s, 1000));
  }
  const g = /"geo":\{"@type":"GeoCoordinates","latitude":([\d.]+),"longitude":([\d.]+)\}/.exec(html);
  if (g) { geo[c.id] = [+(+g[1]).toFixed(5), +(+g[2]).toFixed(5)]; got++; }
  else { failed++; console.log(`  ✗ ${c.slug}: ei koordinaattia`); }
}
const sorted = Object.fromEntries(Object.entries(geo).sort(([a], [b]) => Number(a) - Number(b)));
writeFileSync(GEO, JSON.stringify(sorted, null, 0).replace(/\],"/g, '],\n"').replace(/^\{/, '{\n').replace(/\}$/, '\n}') + '\n');
console.log(`✓ haettu ${got}, epäonnistui ${failed} → src/data/cabins/geo.json (${Object.keys(sorted).length} mökkiä)`);
if (failed) process.exit(1);
