/**
 * Assert that every affiliate sub-id this site emits is still DISTINCT after the
 * Worker truncates `<domain>_<sid>` to 50 characters.
 *
 * Why this script exists (2026-08-02)
 * -----------------------------------
 * Truncation is the small problem. COLLISION is the real one, and it is
 * invisible: on laplandweddings.online three Wilderness hotels and three
 * Northern Lights properties each collapsed into one shared sub-id, so their
 * CJ reporting was not shortened, it was MERGED — three hotels reporting as one
 * looks exactly like one hotel doing well. This site had the same failure in a
 * blunter form: every named property emitted the literal sid `property_card`.
 *
 * `laplandstays_com_` is 17 characters, so a sid has 33 to work with.
 *
 * Run: node scripts/check-sids.mjs   (exit 1 = a collision, fix before deploy)
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const PREFIX = 'laplandstays_com_';
const LIMIT = 50;
const BUDGET = LIMIT - PREFIX.length;

const files = [];
(function walk(d) {
  for (const e of readdirSync(d)) {
    const p = join(d, e);
    if (statSync(p).isDirectory()) walk(p);
    else if (/\.(ts|tsx)$/.test(e)) files.push(p);
  }
})(join(ROOT, 'src'));

/** sid -> Set(where) */
const sids = new Map();
const add = (sid, where) => {
  if (!sids.has(sid)) sids.set(sid, new Set());
  sids.get(sid).add(where);
};

for (const f of files) {
  const t = readFileSync(f, 'utf8');
  const rel = relative(ROOT, f).replace(/\\/g, '/');
  for (const m of t.matchAll(/\bsid:\s*['"]([a-z0-9_]+)['"]/g)) add(m[1], rel);
  for (const m of t.matchAll(/\bsid=["']([a-z0-9_]+)["']/g)) add(m[1], rel);
  // propertyLodgingLink's own default, built from the booking slug
  for (const m of t.matchAll(/\bslug:\s*"([a-z0-9_]+)"/g)) add(`p_${m[1]}`, rel);
}

const byTruncated = new Map();
let overLong = 0;
for (const [sid, where] of sids) {
  const cut = sid.slice(0, BUDGET);
  if (sid.length > BUDGET) overLong++;
  if (!byTruncated.has(cut)) byTruncated.set(cut, []);
  byTruncated.get(cut).push({ sid, where: [...where] });
}

const collisions = [...byTruncated.entries()].filter(([, v]) => new Set(v.map(x => x.sid)).size > 1);

console.log(`sids found:        ${sids.size}`);
console.log(`budget per sid:    ${BUDGET} chars  (50 - "${PREFIX}")`);
console.log(`longer than budget: ${overLong} (truncated, but still unique)`);
if (overLong) {
  for (const [sid] of sids) if (sid.length > BUDGET) console.log(`   ${sid}  ->  ${sid.slice(0, BUDGET)}`);
}

if (collisions.length) {
  console.error(`\n❌ ${collisions.length} COLLISION(S) — distinct placements arrive at the partner as ONE sub-id:`);
  for (const [cut, v] of collisions) {
    console.error(`   ${PREFIX}${cut}`);
    for (const x of v) console.error(`      ${x.sid}   ${x.where.join(', ')}`);
  }
  process.exit(1);
}
console.log('\n✅ all sub-ids distinct after truncation');
