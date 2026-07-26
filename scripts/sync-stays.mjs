#!/usr/bin/env node
/**
 * sync-stays.mjs — pull REAL Google review data for every named property in
 * the canonical registry (`src/data/properties.ts`).
 *
 * Re-sync:
 *   cd laplandstays-new && node scripts/sync-stays.mjs
 *
 * Cost: Places API (New) Text Search, **Pro** SKU (rating + userRatingCount are
 * Pro fields) = $0.032 / request. One request per registry property, so a full
 * run of the current registry is well under a dollar against Google's
 * $200/month Maps free credit. The field mask below is deliberately minimal —
 * every extra field class (reviews, opening hours, websiteUri, priceLevel)
 * would push the request into the Enterprise SKU and multiply the bill for
 * data this site does not display.
 *
 * Writes exactly one file:
 *   src/data/generated/stays-from-maps.json   (gitted, keyed by registry key)
 *
 * It NEVER writes src/data/properties.ts. That file is the hand-maintained
 * editorial layer (real-world names + the affiliate search strings the site
 * already uses) and the two layers are merged at module load. Re-running this
 * script can therefore never clobber editorial work.
 *
 * ── FAIL CLOSED ──────────────────────────────────────────────────────────────
 * A review score pasted onto the WRONG property is worse than no score at all:
 * it is a fabricated recommendation, and it is invisible to us because it looks
 * exactly like a correct one. This site has already shipped that class of bug
 * once — the Ylläs page once showed a hotel at Iso-Syöte, 200 km away — so a
 * candidate is accepted only when ALL THREE gates pass:
 *
 *   1. NAME  — normalised (diacritics folded, punctuation dropped) WHOLE-WORD
 *              containment, or Dice-bigram similarity >= 0.72 with the
 *              chain-sibling guard. Both refinements were forced by real wrong
 *              matches on this site's first run — see `nameGate` /
 *              `chainSiblingGate` / `boundaryContains` below. Five of the
 *              properties here belong to one hotel chain, so "looks similar"
 *              is not evidence of "is the same".
 *   2. PLACE — the returned `formattedAddress` contains one of the localities
 *              we expect for that property (municipality / resort / postal
 *              locality, e.g. Levi => levi | sirkka | kittila).
 *   3. BBOX  — the returned coordinate sits inside the Finnish Lapland
 *              bounding box. A geographic sanity check that needs no
 *              hand-typed per-property coordinates (which would themselves be
 *              unverifiable invented data).
 *
 * Anything that does not clear all three is dropped and listed under
 * "UNMATCHED" in the output. The site then simply shows no rating for that
 * property — never a guess. Do NOT loosen a gate to force a match.
 *
 * The API key is read from .env.local (gitignored) and is never printed, never
 * written to any output file, and never committed.
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const PLACES_BASE = 'https://places.googleapis.com/v1';

// ── API key ────────────────────────────────────────────────────────────────
async function loadApiKey() {
  const envPath = path.join(ROOT, '.env.local');
  let envText;
  try {
    envText = await fs.readFile(envPath, 'utf-8');
  } catch {
    console.error(`FATAL: ${envPath} not found. Add GOOGLE_MAPS_API_KEY=... to it.`);
    process.exit(1);
  }
  const m = envText.match(/^GOOGLE_MAPS_API_KEY\s*=\s*(.+?)\s*$/m);
  if (!m) {
    console.error('FATAL: GOOGLE_MAPS_API_KEY missing from .env.local');
    process.exit(1);
  }
  return m[1].replace(/^["']|["']$/g, '');
}

/**
 * Which localities each registry property may legitimately resolve to, and the
 * city string used in the search query. Kept here rather than in the registry
 * because it is sync plumbing, not published copy. Names are NOT duplicated
 * here — they are read out of properties.ts below, so the two files cannot
 * drift.
 *
 * `locality` entries are compared against the normalised formattedAddress, so
 * write them folded (Kittilä -> kittila, Ylläs -> yllas, Köngäs -> kongas).
 */
const TARGETS = {
  // ── Aurora / glass-roof ────────────────────────────────────────────────
  kakslauttanen:            { queryCity: 'Saariselkä, Lapland, Finland',        locality: ['saariselka', 'kakslauttanen', 'inari', 'ivalo'] },
  levinIglut:               { queryCity: 'Levi, Kittilä, Lapland, Finland',     locality: ['levi', 'sirkka', 'kittila'] },
  starArctic:               { queryCity: 'Saariselkä, Lapland, Finland',        locality: ['saariselka', 'kaunispaa', 'inari', 'ivalo'] },
  auroraVillage:            { queryCity: 'Ivalo, Lapland, Finland',             locality: ['ivalo', 'inari'] },
  novaSkyland:              { queryCity: 'Rovaniemi, Lapland, Finland',         locality: ['rovaniemi', 'ounasvaara'] },
  northernLightsRanch:      { queryCity: 'Köngäs, Kittilä, Lapland, Finland',   locality: ['kongas', 'kittila', 'levi'] },
  arcticSnowHotel:          { queryCity: 'Rovaniemi, Lapland, Finland',         locality: ['rovaniemi', 'lehtojarvi', 'sinetta'] },

  // ── Lakeside / wilderness lodges ───────────────────────────────────────
  nellim:                   { queryCity: 'Nellim, Inari, Lapland, Finland',     locality: ['nellim', 'inari', 'ivalo'] },
  muotka:                   { queryCity: 'Inari, Lapland, Finland',             locality: ['inari', 'ivalo', 'muotka', 'saariselka'] },
  apukka:                   { queryCity: 'Rovaniemi, Lapland, Finland',         locality: ['rovaniemi'] },
  laplandHotelsOunasvaara:  { queryCity: 'Rovaniemi, Lapland, Finland',         locality: ['rovaniemi', 'ounasvaara'] },
  harriniva:                { queryCity: 'Muonio, Lapland, Finland',            locality: ['muonio', 'harriniva'] },

  // ── Fell / ski-in chalets and hotels ───────────────────────────────────
  hotelLeviPanorama:        { queryCity: 'Levi, Kittilä, Lapland, Finland',     locality: ['levi', 'sirkka', 'kittila'] },
  leviHotelSpa:             { queryCity: 'Levi, Kittilä, Lapland, Finland',     locality: ['levi', 'sirkka', 'kittila'] },
  laplandHotelsSirkantahti: { queryCity: 'Levi, Kittilä, Lapland, Finland',     locality: ['levi', 'sirkka', 'kittila'] },
  k5Levi:                   { queryCity: 'Levi, Kittilä, Lapland, Finland',     locality: ['levi', 'sirkka', 'kittila'] },
  laplandHotelsSaaga:       { queryCity: 'Äkäslompolo, Ylläs, Lapland, Finland', locality: ['akaslompolo', 'yllas', 'yllasjarvi', 'kolari'] },
  laplandHotelsYllaskaltio: { queryCity: 'Äkäslompolo, Ylläs, Lapland, Finland', locality: ['akaslompolo', 'yllas', 'yllasjarvi', 'kolari'] },

  // ── Designer lodges ────────────────────────────────────────────────────
  arcticTreeHouse:          { queryCity: 'Rovaniemi, Lapland, Finland',         locality: ['rovaniemi'] },
};

/**
 * Finnish Lapland bounding box (plus a small margin). Rovaniemi ~ 66.5 N,
 * Nuorgam ~ 70.09 N, western border ~ 20.5 E, eastern ~ 30.6 E. Anything
 * outside this is not a Lapland property, whatever Google called it.
 */
const LAPLAND_BBOX = { minLat: 65.4, maxLat: 70.2, minLng: 20.0, maxLng: 31.0 };

// ── Registry reader (single source of truth for names) ──────────────────────
async function readRegistry() {
  const src = await fs.readFile(path.join(ROOT, 'src/data/properties.ts'), 'utf-8');
  const re = /^\s{2}(\w+):\s*\{\s*name:\s*"((?:[^"\\]|\\.)*)",\s*destination:\s*"((?:[^"\\]|\\.)*)"/gm;
  const out = [];
  let m;
  while ((m = re.exec(src)) !== null) {
    out.push({ key: m[1], name: m[2].replace(/\\"/g, '"'), destination: m[3] });
  }
  if (out.length === 0) {
    console.error('FATAL: could not parse any properties out of src/data/properties.ts.');
    console.error('       The registry format changed — fix the regex before trusting a sync.');
    process.exit(1);
  }
  return out;
}

// ── Name matching ──────────────────────────────────────────────────────────
const fold = (s) =>
  s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

const compact = (s) => fold(s).replace(/ /g, '');

function bigrams(s) {
  const out = new Set();
  for (let i = 0; i < s.length - 1; i++) out.add(s.slice(i, i + 2));
  return out;
}

/** Sørensen–Dice coefficient over character bigrams (0..1). */
function dice(a, b) {
  const A = bigrams(a);
  const B = bigrams(b);
  if (A.size === 0 || B.size === 0) return 0;
  let shared = 0;
  for (const g of A) if (B.has(g)) shared++;
  return (2 * shared) / (A.size + B.size);
}

const NAME_MIN_DICE = 0.72;

/**
 * Tokens that carry no identity — corporate forms and the generic descriptors
 * Google routinely appends to a listing ("… Hotel", "… Glass Igloos"). A
 * candidate that differs from the expected name ONLY by these is still the same
 * business.
 */
const GENERIC_TOKENS = new Set([
  'hotel', 'hotels', 'resort', 'resorts', 'inn', 'lodge', 'spa', 'suites',
  'apartments', 'chalets', 'cabins', 'igloos', 'glass', 'activities', 'safaris',
  'oy', 'ab', 'oyj', 'ltd', 'the', 'and',
]);

/** A distinctive token this long is treated as a proper name, not a descriptor. */
const CHAIN_GUARD_MIN_LEN = 5;

/**
 * CHAIN-SIBLING GUARD — the gate this site needed that laplandhoteldeals did not.
 *
 * Five of the properties named on this site belong to one chain ("Lapland
 * Hotels Saaga / Sirkantähti / Ylläskaltio / Ounasvaara / …"). Sibling names
 * share a 13-character prefix, so Dice bigram similarity between two DIFFERENT
 * chain hotels is structurally high: the first sync run scored "Lapland Hotels
 * Ylläs" against "Lapland Hotels Äkäshotelli" at 0.79 and accepted it, i.e. it
 * pinned one hotel's 4.1 / 1 137 reviews onto a card naming a different one.
 * Exactly the failure mode this script exists to prevent.
 *
 * The fix is not a higher Dice threshold (0.79 is already high, and raising it
 * would drop legitimate matches like "Aurora Village Ivalo" → "Aurora Village
 * Oy"). It is a rule about WHAT the two names disagree on:
 *
 *   Containment — the published name appears verbatim inside Google's, or vice
 *   versa — means Google merely added descriptors. Safe, and left alone.
 *
 *   Dice similarity only means the two names LOOK alike, which is precisely
 *   what chain siblings do. So on the fuzzy path the candidate may not
 *   introduce a substantial word of its own: any non-generic token of 5+
 *   characters that our name does not have is evidence that Google returned a
 *   DIFFERENT member of the same family, and the candidate is dropped.
 *
 * "Aurora Village Oy" survives (its only extra token, "oy", is a corporate
 * form); "Lapland Hotels Äkäshotelli" does not ("akashotelli" is a proper
 * name). Do not relax this to force a match.
 */
function chainSiblingGate(expected, candidate) {
  const exp = new Set(fold(expected).split(' ').filter(Boolean));
  const intruders = fold(candidate)
    .split(' ')
    .filter((t) => t.length >= CHAIN_GUARD_MIN_LEN && !GENERIC_TOKENS.has(t) && !exp.has(t));
  return { ok: intruders.length === 0, intruders };
}

/**
 * Whole-word containment: `needle` occurs inside `hay` and both of its ends
 * land on a token boundary.
 *
 * Why the boundary matters — the second trap this site sprang. Plain compacted
 * containment accepted "Lapland Hotels Ylläs" as "Lapland Hotels Ylläskaltio",
 * because the first string is literally a PREFIX of the second once spaces are
 * stripped. That is the chain-sibling failure again, arriving through the path
 * the chain guard does not police. Requiring the match to end on a word
 * boundary rejects "…yllas" inside "…yllaskaltio" while still accepting
 * "Kakslauttanen Arctic Resort" inside "Kakslauttanen Arctic Resort East
 * Village", which is the noise this path exists to tolerate.
 */
function boundaryContains(hay, needle) {
  if (!hay || !needle) return false;
  let from = 0;
  for (;;) {
    const i = hay.indexOf(needle, from);
    if (i === -1) return false;
    const end = i + needle.length;
    const leftOk = i === 0 || hay[i - 1] === ' ';
    const rightOk = end === hay.length || hay[end] === ' ';
    if (leftOk && rightOk) return true;
    from = i + 1;
  }
}

function nameGate(expected, candidate) {
  const a = compact(expected);
  const b = compact(candidate);
  if (!a || !b) return { ok: false, score: 0, how: 'empty' };

  // 1. Whole-word containment — Google merely added or dropped descriptors.
  const af = fold(expected);
  const bf = fold(candidate);
  if (boundaryContains(bf, af) || boundaryContains(af, bf)) {
    return { ok: true, score: 1, how: 'containment' };
  }

  // 2. Containment that only works once spacing is ignored ("Arctic SnowHotel"
  //    vs "Arctic Snow Hotel"). Tolerated, but the chain guard applies: without
  //    word boundaries this path cannot tell a prefix sibling from a spelling
  //    variant on its own.
  if (b.includes(a) || a.includes(b)) {
    const chain = chainSiblingGate(expected, candidate);
    if (chain.ok) return { ok: true, score: 1, how: 'containment (compacted)' };
    return {
      ok: false,
      score: 1,
      how: `compacted containment but chain sibling — adds "${chain.intruders.join('", "')}"`,
    };
  }

  const d = dice(a, b);
  if (d < NAME_MIN_DICE) return { ok: false, score: d, how: `dice ${d.toFixed(2)}` };
  const chain = chainSiblingGate(expected, candidate);
  if (!chain.ok) {
    return {
      ok: false,
      score: d,
      how: `dice ${d.toFixed(2)} but chain sibling — adds "${chain.intruders.join('", "')}"`,
    };
  }
  return { ok: true, score: d, how: `dice ${d.toFixed(2)}` };
}

function placeGate(address, localities) {
  const a = fold(address || '');
  const hit = localities.find((l) => a.includes(l));
  return { ok: Boolean(hit), hit };
}

function bboxGate(loc) {
  if (!loc || typeof loc.latitude !== 'number' || typeof loc.longitude !== 'number') {
    return { ok: false, why: 'no coordinate' };
  }
  const { latitude: lat, longitude: lng } = loc;
  const ok =
    lat >= LAPLAND_BBOX.minLat &&
    lat <= LAPLAND_BBOX.maxLat &&
    lng >= LAPLAND_BBOX.minLng &&
    lng <= LAPLAND_BBOX.maxLng;
  return { ok, why: ok ? '' : `outside Lapland (${lat.toFixed(3)}, ${lng.toFixed(3)})` };
}

// ── Places API ─────────────────────────────────────────────────────────────
/**
 * Minimal Pro-tier field mask. Do not add fields casually: `reviews`,
 * `regularOpeningHours`, `websiteUri` and `priceLevel` are Enterprise-tier and
 * would raise the per-request price for data this site never renders.
 */
const FIELD_MASK = [
  'places.id',
  'places.displayName',
  'places.formattedAddress',
  'places.location',
  'places.rating',
  'places.userRatingCount',
  'places.businessStatus',
].join(',');

async function textSearch(apiKey, textQuery) {
  const res = await fetch(`${PLACES_BASE}/places:searchText`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': apiKey,
      'X-Goog-FieldMask': FIELD_MASK,
    },
    body: JSON.stringify({
      textQuery,
      languageCode: 'en',
      regionCode: 'FI',
      maxResultCount: 5,
    }),
  });
  if (!res.ok) {
    const body = await res.text();
    // Never echo the key; Google's error bodies do not contain it, but keep the
    // slice short so a future API change cannot leak much either.
    throw new Error(`HTTP ${res.status}: ${body.slice(0, 400)}`);
  }
  const data = await res.json();
  return data.places || [];
}

// ── Main ───────────────────────────────────────────────────────────────────
async function main() {
  const apiKey = await loadApiKey();
  const registry = await readRegistry();
  const today = new Date().toISOString().slice(0, 10);

  console.log(`Registry: ${registry.length} properties parsed from src/data/properties.ts`);
  console.log(`Places API (New) Text Search · Pro SKU · ~$0.032/request\n`);

  const matched = {};
  const unmatched = [];
  let requests = 0;

  for (const prop of registry) {
    const target = TARGETS[prop.key];
    if (!target) {
      unmatched.push({ key: prop.key, name: prop.name, reason: 'no TARGETS entry in sync-stays.mjs (add localities before syncing)' });
      console.log(`  x ${prop.key.padEnd(26)} no TARGETS entry — skipped (fail closed)`);
      continue;
    }

    const textQuery = `${prop.name}, ${target.queryCity}`;
    let places;
    try {
      places = await textSearch(apiKey, textQuery);
      requests++;
    } catch (e) {
      unmatched.push({ key: prop.key, name: prop.name, reason: `API error: ${e.message}` });
      console.log(`  x ${prop.key.padEnd(26)} API error: ${e.message}`);
      continue;
    }

    const rejected = [];
    let accepted = null;

    for (const p of places) {
      const candName = p.displayName?.text || '';
      const n = nameGate(prop.name, candName);
      if (!n.ok) {
        rejected.push(`"${candName}" name mismatch (${n.how})`);
        continue;
      }
      const pl = placeGate(p.formattedAddress, target.locality);
      if (!pl.ok) {
        rejected.push(`"${candName}" wrong place — address "${p.formattedAddress}" has none of [${target.locality.join(', ')}]`);
        continue;
      }
      const bb = bboxGate(p.location);
      if (!bb.ok) {
        rejected.push(`"${candName}" ${bb.why}`);
        continue;
      }
      if (typeof p.rating !== 'number' || typeof p.userRatingCount !== 'number') {
        rejected.push(`"${candName}" matched but Google returned no rating`);
        continue;
      }
      if (p.businessStatus && p.businessStatus !== 'OPERATIONAL') {
        rejected.push(`"${candName}" businessStatus=${p.businessStatus}`);
        continue;
      }
      accepted = { p, nameHow: n.how, localityHit: pl.hit };
      break;
    }

    if (!accepted) {
      unmatched.push({
        key: prop.key,
        name: prop.name,
        reason: rejected.length ? rejected.join(' | ') : 'Text Search returned no candidates',
      });
      console.log(`  x ${prop.key.padEnd(26)} NO SAFE MATCH`);
      for (const r of rejected) console.log(`       · ${r}`);
      continue;
    }

    const { p } = accepted;
    matched[prop.key] = {
      // Google's own display name, kept so a reviewer can see WHAT was matched.
      // The published card name still comes from the editorial layer.
      matchedName: p.displayName.text,
      rating: p.rating,
      reviewCount: p.userRatingCount,
      googlePlaceId: p.id,
      address: p.formattedAddress,
      location: p.location,
      lastVerified: today,
    };
    console.log(
      `  + ${prop.key.padEnd(26)} ${String(p.rating).padEnd(4)} · ${String(p.userRatingCount).padStart(5)} reviews  ` +
        `[${accepted.nameHow}, locality "${accepted.localityHit}"]  ${p.displayName.text}`,
    );
  }

  const generatedDir = path.join(ROOT, 'src/data/generated');
  await fs.mkdir(generatedDir, { recursive: true });
  const outPath = path.join(generatedDir, 'stays-from-maps.json');
  await fs.writeFile(
    outPath,
    JSON.stringify(
      {
        _README:
          'GENERATED by scripts/sync-stays.mjs from Google Places API (New) Text Search. ' +
          'Do not hand-edit: re-run the script instead. Editorial data (real-world names, ' +
          'affiliate search strings) lives in src/data/properties.ts and is never written ' +
          'by the sync.',
        _syncedAt: today,
        properties: matched,
        unmatched,
      },
      null,
      2,
    ) + '\n',
  );

  // Distribution, printed so the PICK_MIN_* thresholds in src/data/properties.ts
  // can be justified from THIS site's field rather than copied from a sibling.
  const ratings = Object.values(matched).map((m) => m.rating).sort((a, b) => a - b);
  const counts = Object.values(matched).map((m) => m.reviewCount).sort((a, b) => a - b);
  const median = (xs) =>
    xs.length === 0 ? null : xs.length % 2 ? xs[(xs.length - 1) / 2] : (xs[xs.length / 2 - 1] + xs[xs.length / 2]) / 2;

  console.log('');
  console.log(`+ ${Object.keys(matched).length}/${registry.length} properties have verified Google review data`);
  if (ratings.length) {
    console.log(`  rating  min ${ratings[0]}  median ${median(ratings)}  max ${ratings[ratings.length - 1]}`);
    console.log(`  reviews min ${counts[0]}  median ${median(counts)}  max ${counts[counts.length - 1]}`);
    console.log(`  ratings sorted: ${ratings.join(', ')}`);
    console.log(`  counts  sorted: ${counts.join(', ')}`);
  }
  if (unmatched.length) {
    console.log(`! ${unmatched.length} left WITHOUT review data (fail closed):`);
    for (const u of unmatched) console.log(`    ${u.key}: ${u.reason}`);
  }
  console.log(`+ ${requests} API requests ~ $${(requests * 0.032).toFixed(2)}`);
  console.log(`+ wrote src/data/generated/stays-from-maps.json`);
}

main().catch((e) => {
  console.error('FATAL:', e.message);
  process.exit(1);
});
