// node --test scripts/cabins-feed.test.mjs   (npm run test:cabins)
// Mökkidatan viikkopäivityksen vartijat: terve syöte menee läpi, rikkinäinen pysähtyy ennen kuin mitään kirjoitetaan.
// Testisyöte rakennetaan sivun omasta nykyisestä datasta (src/data/cabins/), joten "terve" = täsmälleen nykytila.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, writeFileSync, mkdtempSync, rmSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { AREAS } from './cabin-areas.config.mjs';
import { parseFeed, selectAreas, feedProblems, diffAreas } from './cabins-feed.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const DATA = resolve(HERE, '..', 'src', 'data', 'cabins');
const current = Object.fromEntries(Object.keys(AREAS).map((a) => [a, JSON.parse(readFileSync(resolve(DATA, `${a}.json`), 'utf8')).cabins]));
const allCabins = Object.values(current).flat();
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');

/** Natiivin syötteen muotoinen XML. `opts` muuttaa jokaisen rivin (rikkinäisen syötteen mallit). */
function feedXml(cabins, opts = {}) {
  const rows = cabins.map((c) => {
    const people = opts.noCapacity ? '' : `${c.guests} + 0 henkilöä, `;
    const sqm = opts.noSqm ? '' : `${c.sqm || 40} m², `;
    const stars = opts.noStars || !c.stars ? '' : `\nLomarenkaan laatutarkastettu majoituskohde: ${'★'.repeat(c.stars)} (${c.stars}).`;
    return `  <product>
    <SKU>${c.id}</SKU>
    <Name>${esc(c.name)}</Name>
    <Description>${people}${sqm}${c.br ?? 0} makuuhuonetta.${stars}</Description>
    <ProductUrl>https://lomarengas.fi/mokit/${c.slug}</ProductUrl>
    <ImageUrl>${opts.noImage ? '' : `https://channableusercontent.com/images/templated/t${c.id}.png`}</ImageUrl>
  </product>`;
  });
  // Muun Suomen mökit (syötteessä ~2 300): jäsennin ohittaa ne, tuotemäärään ne lasketaan.
  const other = opts.noOther ? [] : Array.from({ length: 600 }, (_, i) => `  <product><SKU>9${i}</SKU><Name>Järvimökki ${i}</Name><Description>4 henkilöä, 40 m², 1 makuuhuone.</Description><ProductUrl>https://lomarengas.fi/mokit/kuopio-tahkovuori-jarvimokki-${i}-9${i}</ProductUrl><ImageUrl>https://x/${i}.png</ImageUrl></product>`);
  return `<?xml version="1.0" encoding="UTF-8"?>\n<productFeed>\n${[...rows, ...other].join('\n')}\n</productFeed>\n`;
}
/** Poista joka n:s mökki valituilta alueilta. */
const dropEvery = (cabins, n, areas = null) => {
  const ids = new Set();
  for (const [a, list] of Object.entries(current)) if (!areas || areas.includes(a)) list.forEach((c, i) => { if (i % n === 0) ids.add(c.id); });
  return cabins.filter((c) => !ids.has(c.id));
};

test('terve syöte = nykyinen data: valinta täsmää, ei ongelmia, ei poistuneita eikä uusia', () => {
  const feed = parseFeed(feedXml(allCabins));
  const selected = selectAreas(feed.cottages);
  for (const area of Object.keys(AREAS)) {
    assert.deepEqual(selected[area].map((c) => c.id).sort(), current[area].map((c) => c.id).sort(), area);
  }
  assert.deepEqual(feedProblems(feed, current), []);
  const diff = diffAreas(current, selected);
  assert.equal(Object.values(diff).reduce((n, d) => n + d.removed.length + d.added.length, 0), 0);
});

test('jäsennys: henkilöt lasketaan yhteen, neliöt, makuuhuoneet, tähdet, entiteetit puretaan', () => {
  const xml = `<productFeed><product><SKU>1</SKU><Name>A &amp; B</Name><Description>4 + 2 henkilöä, 58.5 m², 1 makuuhuone.
Lomarenkaan laatutarkastettu majoituskohde: ★★★★ (4).</Description><ProductUrl>https://lomarengas.fi/mokit/kittila-sirkka-a-b-1</ProductUrl><ImageUrl>https://x/1.png</ImageUrl></product>
<product><SKU>2</SKU><Name>Tahko</Name><Description>2 henkilöä</Description><ProductUrl>https://lomarengas.fi/mokit/kuopio-tahko-2</ProductUrl><ImageUrl></ImageUrl></product></productFeed>`;
  const feed = parseFeed(xml);
  assert.equal(feed.products, 2);
  assert.equal(feed.cottages.length, 1);
  assert.deepEqual(
    { name: feed.cottages[0].name, place: feed.cottages[0].place, guests: feed.cottages[0].guests, areaM2: feed.cottages[0].areaM2, bedrooms: feed.cottages[0].bedrooms, stars: feed.cottages[0].stars },
    { name: 'A & B', place: 'Levi', guests: 6, areaM2: 58.5, bedrooms: 1, stars: 4 },
  );
});

test('tyhjä syöte hylätään', () => {
  const p = feedProblems(parseFeed('<productFeed></productFeed>'), current);
  assert.ok(p.some((x) => /tuotetta/.test(x)), p.join('\n'));
  assert.ok(p.some((x) => /aluesivujen mökkejä/.test(x)), p.join('\n'));
  assert.ok(p.some((x) => /katoaisi kerralla/.test(x)), p.join('\n'));
});

test('katkennut syöte (vain alkuosa) hylätään', () => {
  const xml = feedXml(allCabins);
  const p = feedProblems(parseFeed(xml.slice(0, Math.floor(xml.length * 0.4))), current);
  assert.ok(p.some((x) => /katoaisi kerralla/.test(x)), p.join('\n'));
});

test('henkilömäärä puuttuu syötteestä ⇒ hylätään', () => {
  const p = feedProblems(parseFeed(feedXml(allCabins, { noCapacity: true })), current);
  assert.ok(p.some((x) => /^henkilömäärä puuttuu/.test(x)), p.join('\n'));
});

test('kuvat puuttuvat syötteestä ⇒ hylätään', () => {
  const p = feedProblems(parseFeed(feedXml(allCabins, { noImage: true })), current);
  assert.ok(p.some((x) => /^kuva puuttuu/.test(x)), p.join('\n'));
});

test('neliöt ja tähdet katoavat (Workerin syötteen muutos 26.9.2026) ⇒ hylätään', () => {
  const p = feedProblems(parseFeed(feedXml(allCabins, { noSqm: true, noStars: true })), current);
  assert.ok(p.some((x) => /^neliöt puuttuu/.test(x)), p.join('\n'));
  assert.ok(p.some((x) => /^tähdet puuttuu/.test(x)), p.join('\n'));
});

test('yli 15 % mökeistä katoaa kerralla ⇒ hylätään; 10 % menee läpi', () => {
  const p16 = feedProblems(parseFeed(feedXml(dropEvery(allCabins, 6))), current); // ~16,7 %
  assert.ok(p16.some((x) => /^\d+\/\d+ mökkiä katoaisi/.test(x)), p16.join('\n'));
  const p10 = feedProblems(parseFeed(feedXml(dropEvery(allCabins, 10))), current); // ~10 %
  assert.deepEqual(p10, []);
});

test('yksi alue menettää yli 35 % ⇒ hylätään, vaikka koko sivusto pysyy rajan alla', () => {
  const p = feedProblems(parseFeed(feedXml(dropEvery(allCabins, 2, ['levi']))), current); // Levi ~50 %, kaikki ~7 %
  assert.ok(p.some((x) => /^levi: \d+\/\d+ mökkiä katoaisi/.test(x)), p.join('\n'));
  assert.ok(!p.some((x) => /^\d+\/\d+ mökkiä katoaisi/.test(x)), p.join('\n'));
});

test('pieni alue: alle 5 mökin muutos ei ole syötevika', () => {
  const muonio = current.muonio.slice(0, 3).map((c) => c.id); // 3/9 = 33 %
  const p = feedProblems(parseFeed(feedXml(allCabins.filter((c) => !muonio.includes(c.id)))), current);
  assert.deepEqual(p, []);
});

test('alue jossa alle 6 mökkiä ⇒ hylätään', () => {
  const keep = new Set(current.pello.slice(0, 4).map((c) => c.id));
  const p = feedProblems(parseFeed(feedXml(allCabins.filter((c) => !current.pello.some((x) => x.id === c.id) || keep.has(c.id)))), current);
  assert.ok(p.some((x) => /^pello: vain 4 mökkiä/.test(x)), p.join('\n'));
});

test('ero: poistuneet ja uudet aluesivuittain', () => {
  const gone = current.yllas[0];
  const extra = { ...current.levi[0], id: '999999', slug: current.levi[0].slug.replace(/-\d+$/, '-999999'), name: 'Uusi mökki' };
  const feed = parseFeed(feedXml([...allCabins.filter((c) => c.id !== gone.id), extra]));
  const d = diffAreas(current, selectAreas(feed.cottages));
  assert.deepEqual(d.yllas.removed.map((c) => c.id), [gone.id]);
  assert.deepEqual(d.levi.added.map((c) => c.id), ['999999']);
});

// Koko komento rikkinäisellä syötteellä: exit 2 eikä yksikään datatiedosto muutu.
const hashData = () => {
  const h = createHash('sha1');
  for (const f of [...Object.keys(AREAS).map((a) => `${a}.json`), 'areas.json', 'geo.json']) h.update(readFileSync(resolve(DATA, f)));
  return h.digest('hex');
};
function runRefresh(xml, extra = []) {
  const dir = mkdtempSync(join(tmpdir(), 'lv-cabins-test-'));
  try {
    const file = join(dir, 'feed.xml');
    const rep = join(dir, 'raportti.json');
    writeFileSync(file, xml);
    const r = spawnSync(process.execPath, [resolve(HERE, 'refresh-cabins.mjs'), '--feed', file, `--raportti=${rep}`, ...extra], { encoding: 'utf8' });
    return { status: r.status, out: r.stdout + r.stderr, report: JSON.parse(readFileSync(rep, 'utf8')) };
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}

test('komento: rikkinäinen syöte (henkilömäärä pois) ⇒ exit 2, data koskematon', () => {
  const before = hashData();
  const r = runRefresh(feedXml(allCabins, { noCapacity: true }));
  assert.equal(r.status, 2, r.out);
  assert.equal(r.report.result, 'hylätty');
  assert.equal(hashData(), before);
});

test('komento: katkennut syöte ⇒ exit 2, data koskematon', () => {
  const before = hashData();
  const xml = feedXml(allCabins);
  const r = runRefresh(xml.slice(0, Math.floor(xml.length * 0.5)));
  assert.equal(r.status, 2, r.out);
  assert.equal(hashData(), before);
});

test('komento --check: terve syöte ⇒ exit 0, ei kirjoita', () => {
  const before = hashData();
  const r = runRefresh(feedXml(allCabins), ['--check']);
  assert.equal(r.status, 0, r.out);
  assert.equal(r.report.result, 'check ok');
  assert.equal(r.report.totals.feedPlan.removed, 0);
  assert.equal(hashData(), before);
});
