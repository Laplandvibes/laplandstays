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
 *   src/data/cabinAreas.gen.<lang>.ts    — harvestRecord source for the prerender: one
 *                                           sentence per cabin so the crawlable body of
 *                                           /<lang>/cabins/<area> lists real cabins
 *
 * INPUT: ../_affiliate/lomarengas-lapland.json (monorepo root, written by
 * scripts/sync_lomarengas_feed.mjs from the Adtraction product feed, programId 1071150664).
 * The outputs are COMMITTED — CI builds the standalone repo and has no access to the root.
 * Refresh: `node ../scripts/sync_lomarengas_feed.mjs && node scripts/gen-cabin-areas.mjs`.
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

const HERE = dirname(fileURLToPath(import.meta.url));
const SITE = resolve(HERE, '..');
const SRC = resolve(SITE, '..', '_affiliate', 'lomarengas-lapland.json');
if (!existsSync(SRC)) {
  console.error(`✗ ${SRC} puuttuu — aja ensin node scripts/sync_lomarengas_feed.mjs monorepon juuressa`);
  process.exit(1);
}
const dump = JSON.parse(readFileSync(SRC, 'utf8'));
const all = dump.cottages || [];

const MUNI = {
  kittila: 'Kittilä', kolari: 'Kolari', kuusamo: 'Kuusamo', inari: 'Inari', sodankyla: 'Sodankylä',
  pelkosenniemi: 'Pelkosenniemi', kemijarvi: 'Kemijärvi', rovaniemi: 'Rovaniemi', salla: 'Salla',
  akaslompolo: 'Kolari', yllasjarvi: 'Kolari', rukatunturi: 'Kuusamo', saariselka: 'Inari',
};

/** area slug → feed `place` + municipality allowlist (slug prefix). */
const AREAS = {
  levi: { place: 'Levi', munis: ['kittila'] },
  yllas: { place: 'Ylläs', munis: ['kolari', 'kittila', 'akaslompolo', 'yllasjarvi'] },
  ruka: { place: 'Ruka', munis: ['kuusamo', 'rukatunturi'] },
  saariselka: { place: 'Saariselkä', munis: ['inari', 'sodankyla', 'saariselka'] },
  'pyha-luosto': { place: 'Pyhä-Luosto', munis: ['pelkosenniemi', 'sodankyla', 'kemijarvi'] },
  rovaniemi: { place: 'Rovaniemi', munis: ['rovaniemi'] },
};

const slugOf = (c) => (c.productUrl.split('/mokit/')[1] || '').trim();
const idOf = (slug) => slug.split('-').pop();

// Crawlable line templates. Only numbers that exist in the data (number gate).
const LINE = {
  fi: (c) => `${c.name}, ${c.place} (${c.muni}): ${c.guests} vierasta, ${c.br} makuuhuonetta, ${c.sqm} m², ${c.stars} tähteä.`,
  en: (c) => `${c.name}, ${c.place} (${c.muni}): sleeps ${c.guests}, ${c.br} bedrooms, ${c.sqm} m², ${c.stars} stars.`,
  de: (c) => `${c.name}, ${c.place} (${c.muni}): ${c.guests} Personen, ${c.br} Schlafzimmer, ${c.sqm} m², ${c.stars} Sterne.`,
};
const HEAD = {
  fi: (name, n) => `${name}: ${n} vuokramökkiä Lomarenkaan valikoimassa. Jokaisesta mökistä henkilömäärä, makuuhuoneet, koko ja tähtiluokitus; viikkohinnat ja vapaat viikot Lomarenkaalla.`,
  en: (name, n) => `${name}: ${n} rental cabins in the Lomarengas listings. Guests, bedrooms, size and star rating for every cabin; weekly prices and free weeks on Lomarengas.`,
  de: (name, n) => `${name}: ${n} Ferienhäuser im Lomarengas-Angebot. Personenzahl, Schlafzimmer, Größe und Sterne für jede Hütte; Wochenpreise und freie Wochen bei Lomarengas.`,
};
const NAME = {
  levi: { fi: 'Levin mökit', en: 'Cabins in Levi', de: 'Ferienhäuser in Levi' },
  yllas: { fi: 'Ylläksen mökit', en: 'Cabins in Ylläs', de: 'Ferienhäuser in Ylläs' },
  ruka: { fi: 'Rukan mökit', en: 'Cabins in Ruka', de: 'Ferienhäuser in Ruka' },
  saariselka: { fi: 'Saariselän mökit', en: 'Cabins in Saariselkä', de: 'Ferienhäuser in Saariselkä' },
  'pyha-luosto': { fi: 'Pyhän ja Luoston mökit', en: 'Cabins in Pyhä and Luosto', de: 'Ferienhäuser in Pyhä und Luosto' },
  rovaniemi: { fi: 'Rovaniemen mökit', en: 'Cabins in Rovaniemi', de: 'Ferienhäuser in Rovaniemi' },
};

// Image validation: the dump is a snapshot and Channable purges creatives of delisted cabins.
// A card with a broken photo fails the image-frame gate and sells nothing, so every image is
// HEAD-checked here and cabins whose photo is gone are dropped (measured 16.9.2026: 1 of 24 on Levi).
async function imageAlive(url) {
  try {
    const r = await fetch(url, { method: 'HEAD', redirect: 'follow', signal: AbortSignal.timeout(8000) });
    return r.ok && /image/.test(r.headers.get('content-type') || '');
  } catch { return false; }
}
async function filterAlive(rows) {
  const out = []; let i = 0; const N = 24;
  await Promise.all(Array.from({ length: N }, async () => {
    while (i < rows.length) { const c = rows[i++]; if (await imageAlive(c.img)) out.push(c); }
  }));
  return out;
}

const outDir = resolve(SITE, 'src', 'data', 'cabins');
mkdirSync(outDir, { recursive: true });
const gen = { fi: {}, en: {}, de: {} };
const summary = [];
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
  // Bigger and better-rated first — the first 60 lines are what the crawlable body prints.
  rows.sort((a, b) => (b.stars - a.stars) || (b.guests - a.guests) || a.name.localeCompare(b.name, 'fi'));
  writeFileSync(resolve(outDir, `${area}.json`), JSON.stringify({ area, place: def.place, count: rows.length, generated: dump.generated || null, cabins: rows }));
  for (const lang of ['fi', 'en', 'de']) {
    gen[lang][area] = {
      title: NAME[area][lang],
      intro: HEAD[lang](NAME[area][lang], rows.length),
      lines: rows.slice(0, 60).map((c) => LINE[lang](c)),
    };
  }
  summary.push(`${area.padEnd(12)} ${String(rows.length).padStart(4)} mökkiä (pudotettu ${dropped}, kuva kuollut ${deadImages})`);
}
for (const lang of ['fi', 'en', 'de']) {
  const body = `// GENEROITU — älä muokkaa käsin. scripts/gen-cabin-areas.mjs lukee Lomarenkaan
// tuotesyötteen (_affiliate/lomarengas-lapland.json) ja kirjoittaa tämän prerenderin
// harvestRecord-lähteeksi: /cabins/<alue> -sivun ryömittävä runko listaa oikeat mökit.
// Kieli: ${lang}. Ei hintoja (viikkohinta vanhenee; live-hinta tulee Workerin syötteestä).
export const cabinAreas = ${JSON.stringify(gen[lang], null, 2)} as const;
`;
  writeFileSync(resolve(SITE, 'src', 'data', `cabinAreas.gen.${lang}.ts`), body);
}
console.log(summary.join('\n'));
console.log(`✓ src/data/cabins/*.json + src/data/cabinAreas.gen.{fi,en,de}.ts (lähde ${dump.count} mökkiä)`);
