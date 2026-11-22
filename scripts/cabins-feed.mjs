/**
 * cabins-feed.mjs — Lomarenkaan tuotesyöte: haku, jäsennys, vartijat ja ero nykyiseen dataan.
 * Käyttäjä: scripts/refresh-cabins.mjs (yksi komento, `npm run cabins:refresh`). Testit: scripts/cabins-feed.test.mjs.
 *
 * MIKSI (22.11.2026): Lomarenkaan ohjelmaehto (Adtraction, luettu 22.11.): *"Jos sivustolle on tuotu mökkien
 * tietoja (kohdekuvauksia ja valokuvia) Lomarenkaan sivustolta, tulee näitä tietoja päivittää säännöllisesti ja
 * myös poistaa Lomarenkaan valikoimista poistuneet kohteet."* Mökkisivujen data (src/data/cabins/) oli päivitetty
 * viimeksi 17.10.2026; 22.11. mitattuna 53 / 1 580 mökkiä oli pudonnut syötteestä (12 poistunut Lomarenkaalta
 * kokonaan, 41 yhä heidän sivullaan mutta ei kumppanisyötteessä) ja niiden kortit näyttivät tyhjää kuvan paikalla.
 *
 * 🔴 Syöte on ainoa lähde: syötteestä pudonnut mökki lähtee sivulta, vaikka sen sivu lomarengas.fi:ssä yhä
 * aukeaisi. Ilman syöterivejä kuvaa ja kuvausta ei voi pitää ajan tasalla, eikä tiedetä, maksaako Lomarengas siitä
 * palkkion.
 *
 * Jäsennys on sama kuin lv-opsin scripts/sync_lomarengas_feed.mjs:ssä (natiivi XML, ei Google Shopping -muoto,
 * koska vain natiivissa kuvauksessa on yhä neliöt ja tähdet: Workerin gsh=1-syötteestä ne katosivat 26.9.2026).
 * Kopio on tässä, koska sivuston repo on oma GitHub-repo eikä CI tai ajastettu ajo näe monorepon juurta.
 */
import { AREAS, areaCabins, slugOf, idOf } from './cabin-areas.config.mjs';

export const FEED_URL =
  'https://adtraction.com/productfeed.htm?type=feed&format=XML&encoding=UTF8' +
  '&epi=0&zip=0&cdelim=tab&tdelim=singlequote&sd=0&flat=0' +
  '&apid=1071150664&asid=2086870803&pfid=375';

// Paikkakunta luetaan ProductUrlista (/mokit/<kunta>-<kylä>-<nimi>-<id>); järjestys ratkaisee (ensimmäinen osuma).
const PLACES = [
  [/kolari|akaslompolo|äkäslompolo|yllas|ylläs/i, 'Ylläs'],
  [/kuusamo|ruka/i, 'Ruka'],
  [/inari-saariselka|saariselka|saariselkä/i, 'Saariselkä'],
  [/sirkka|levi/i, 'Levi'],
  [/pyha|pyhä|luosto/i, 'Pyhä-Luosto'],
  [/enontekio|enontekiö|hetta|kilpisjarvi|kilpisjärvi/i, 'Enontekiö'],
  [/\bsalla\b/i, 'Salla'],
  [/ivalo|\binari\b/i, 'Inari'],
  [/rovaniemi/i, 'Rovaniemi'],
  [/kemijarvi|kemijärvi/i, 'Kemijärvi'],
  [/posio/i, 'Posio'],
  [/pello/i, 'Pello'],
  [/utsjoki|nuorgam|karigasniemi/i, 'Utsjoki'],
  [/sodankyla|sodankylä/i, 'Sodankylä'],
  [/muonio|olos/i, 'Muonio'],
  [/kittila|kittilä/i, 'Kittilä'],
];

const tag = (s, k) => {
  const m = s.match(new RegExp('<' + k + '>([\\s\\S]*?)</' + k + '>'));
  return m ? m[1].trim() : '';
};
const decode = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');

/** Natiivi syöte-XML → { products, cottages } (cottages = Lapin mökit, sama muoto kuin _affiliate/lomarengas-lapland.json). */
export function parseFeed(xml) {
  const products = xml.split('<product>').slice(1).map((s) => s.split('</product>')[0]);
  const cottages = [];
  for (const p of products) {
    const url = decode(tag(p, 'ProductUrl'));
    const place = (PLACES.find(([re]) => re.test(url)) || [])[1];
    if (!place) continue;
    const desc = tag(p, 'Description');
    // "4 + 2 henkilöä, 58 m², 1 makuuhuone." + "★★★★ (4)"
    const guests = desc.match(/(\d+)\s*\+\s*(\d+)\s*henkil/i) || desc.match(/(\d+)\s*henkil/i);
    const area = desc.match(/([\d.,]+)\s*m²/);
    const beds = desc.match(/(\d+)\s*makuuhuone/i);
    const stars = desc.match(/★+\s*\((\d)\)/);
    cottages.push({
      sku: tag(p, 'SKU'),
      name: decode(tag(p, 'Name')),
      place,
      guests: guests ? (guests[2] ? Number(guests[1]) + Number(guests[2]) : Number(guests[1])) : null,
      areaM2: area ? Number(area[1].replace(',', '.')) : null,
      bedrooms: beds ? Number(beds[1]) : null,
      stars: stars ? Number(stars[1]) : null,
      image: decode(tag(p, 'ImageUrl')),
      productUrl: url,
    });
  }
  return { products: products.length, cottages };
}

/** Syötteen mökit aluesivuittain: { area: [{ id, slug, name }] } — sama valinta kuin gen-cabin-areas.mjs:llä. */
export function selectAreas(cottages) {
  const out = {};
  for (const [area, def] of Object.entries(AREAS)) {
    out[area] = areaCabins(cottages, def).map((c) => ({ id: idOf(slugOf(c)), slug: slugOf(c), name: c.name }));
  }
  return out;
}

// Rajat. Kolme ensimmäistä ovat affiliate-Workerin mökkinäyteikkunan rajat (affiliate-redirect-worker/src/worker.js
// cabinsFeedProblems: feedTotal < 500, Lapin rivejä < 300, kortin tieto puuttuu yli 20 %:lta, ryhmässä < 6 korttia).
export const LIMITS = {
  minProducts: 500,
  minLaplandRows: 300,
  maxMissingShare: 0.2, // henkilömäärä, kuva, neliöt tai tähdet puuttuu
  minPerArea: 6,
  maxRemovedShare: 0.15, // koko sivuston mökeistä katoaa kerralla
  maxAreaRemovedShare: 0.35, // yhden alueen mökeistä katoaa kerralla …
  minAreaRemoved: 5, // … ja vähintään näin monta (pienellä alueella 2/9 on kohinaa, ei syötevika)
};

/**
 * Miksi syöte ei kelpaa korvaamaan sivun dataa. Tyhjä lista = kelpaa.
 * @param feed     parseFeed()-tulos
 * @param current  { area: [{ id }] } nykyinen src/data/cabins/<area>.json
 */
export function feedProblems(feed, current, limits = LIMITS) {
  const out = [];
  if (feed.products < limits.minProducts) out.push(`syötteessä vain ${feed.products} tuotetta (raja ${limits.minProducts})`);
  const selected = selectAreas(feed.cottages);
  const inAreas = new Set(Object.values(selected).flat().map((c) => c.id));
  const rows = feed.cottages.filter((c) => inAreas.has(idOf(slugOf(c))));
  if (rows.length < limits.minLaplandRows) out.push(`aluesivujen mökkejä vain ${rows.length} (raja ${limits.minLaplandRows})`);
  if (rows.length) {
    const facts = [
      ['henkilömäärä', (c) => c.guests > 0],
      ['kuva', (c) => !!c.image],
      ['neliöt', (c) => c.areaM2 > 0],
      ['tähdet', (c) => c.stars > 0],
    ];
    for (const [name, ok] of facts) {
      const missing = rows.filter((c) => !ok(c)).length;
      if (missing / rows.length > limits.maxMissingShare) out.push(`${name} puuttuu ${missing}/${rows.length} mökiltä (syötteen muoto muuttui?)`);
    }
  }
  let curTotal = 0, removedTotal = 0;
  for (const area of Object.keys(AREAS)) {
    const next = selected[area] || [];
    if (next.length < limits.minPerArea) out.push(`${area}: vain ${next.length} mökkiä (raja ${limits.minPerArea})`);
    const cur = current[area] || [];
    const nextIds = new Set(next.map((c) => c.id));
    const removed = cur.filter((c) => !nextIds.has(c.id)).length;
    curTotal += cur.length;
    removedTotal += removed;
    if (cur.length && removed >= limits.minAreaRemoved && removed / cur.length > limits.maxAreaRemovedShare) {
      out.push(`${area}: ${removed}/${cur.length} mökkiä katoaisi kerralla (raja ${Math.round(limits.maxAreaRemovedShare * 100)} %)`);
    }
  }
  if (curTotal && removedTotal / curTotal > limits.maxRemovedShare) {
    out.push(`${removedTotal}/${curTotal} mökkiä katoaisi kerralla (raja ${Math.round(limits.maxRemovedShare * 100)} %)`);
  }
  return out;
}

/** Poistuneet ja uudet aluesivuittain: { area: { site, feed, removed: [..], added: [..] } }. */
export function diffAreas(current, selected) {
  const out = {};
  for (const area of Object.keys(AREAS)) {
    const cur = current[area] || [];
    const next = selected[area] || [];
    const curIds = new Set(cur.map((c) => c.id));
    const nextIds = new Set(next.map((c) => c.id));
    out[area] = {
      site: cur.length,
      feed: next.length,
      removed: cur.filter((c) => !nextIds.has(c.id)).map((c) => ({ id: c.id, name: c.name, slug: c.slug })),
      added: next.filter((c) => !curIds.has(c.id)).map((c) => ({ id: c.id, name: c.name, slug: c.slug })),
    };
  }
  return out;
}

/** Syötteen haku: kolme yritystä, 2 min aikaraja. */
export async function fetchFeed(url = FEED_URL) {
  let last;
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 LaplandStays-cabin-refresh' }, signal: AbortSignal.timeout(120_000) });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return await res.text();
    } catch (e) {
      last = e;
      await new Promise((r) => setTimeout(r, 5000 * attempt));
    }
  }
  throw new Error('Syötteen haku epäonnistui: ' + (last && last.message));
}
