/**
 * cabin-areas.config.mjs — one definition of the /cabins/<area> pages, shared by
 * fetch-cabin-geo.mjs (which cabins need coordinates) and gen-cabin-areas.mjs (what each page lists).
 *
 * `refs` = the villages or resorts the distance on each card is measured to (straight line, the
 * nearest one is shown). Points and their names live in src/data/cabins/refs.json so the page and
 * this script read the same table. Ylläs has two villages 11 km apart (Äkäslompolo, Ylläsjärvi),
 * Pyhä–Luosto two resorts; a card names the nearer one.
 *
 * Ten municipality pages since 17.10.2026 (Vesa: "eikö meiltä puutu kaupunkeja? inarit, utsjoki
 * jne?" ⇒ "Kaikki 10"): the feed held 324 Lapland cabins in places that had no page.
 */
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
export const REFS = JSON.parse(readFileSync(resolve(HERE, '..', 'src', 'data', 'cabins', 'refs.json'), 'utf8'));

export const MUNI = {
  kittila: 'Kittilä', kolari: 'Kolari', kuusamo: 'Kuusamo', inari: 'Inari', sodankyla: 'Sodankylä',
  pelkosenniemi: 'Pelkosenniemi', kemijarvi: 'Kemijärvi', rovaniemi: 'Rovaniemi', salla: 'Salla',
  akaslompolo: 'Kolari', yllasjarvi: 'Kolari', rukatunturi: 'Kuusamo', saariselka: 'Inari',
  enontekio: 'Enontekiö', utsjoki: 'Utsjoki', posio: 'Posio', pello: 'Pello', muonio: 'Muonio',
};

/** area slug → feed `place` + municipality allowlist (slug prefix) + distance reference keys (refs.json). */
export const AREAS = {
  levi: { place: 'Levi', munis: ['kittila'], refs: ['levi'] },
  yllas: { place: 'Ylläs', munis: ['kolari', 'kittila', 'akaslompolo', 'yllasjarvi'], refs: ['akaslompolo', 'yllasjarvi'] },
  ruka: { place: 'Ruka', munis: ['kuusamo', 'rukatunturi'], refs: ['ruka'] },
  saariselka: { place: 'Saariselkä', munis: ['inari', 'sodankyla', 'saariselka'], refs: ['saariselka'] },
  'pyha-luosto': { place: 'Pyhä-Luosto', munis: ['pelkosenniemi', 'sodankyla', 'kemijarvi'], refs: ['pyha', 'luosto'] },
  rovaniemi: { place: 'Rovaniemi', munis: ['rovaniemi'], refs: ['rovaniemi'] },
  enontekio: { place: 'Enontekiö', munis: ['enontekio'], refs: ['kilpisjarvi', 'hetta', 'raattama'] },
  inari: { place: 'Inari', munis: ['inari'], refs: ['inari', 'ivalo'] },
  utsjoki: { place: 'Utsjoki', munis: ['utsjoki'], refs: ['utsjoki', 'nuorgam', 'karigasniemi'] },
  salla: { place: 'Salla', munis: ['salla'], refs: ['sallatunturi', 'salla'] },
  kemijarvi: { place: 'Kemijärvi', munis: ['kemijarvi'], refs: ['kemijarvi', 'suomu'] },
  posio: { place: 'Posio', munis: ['posio'], refs: ['posio'] },
  kittila: { place: 'Kittilä', munis: ['kittila'], refs: ['kittila', 'levi', 'raattama'] },
  pello: { place: 'Pello', munis: ['pello'], refs: ['pello'] },
  sodankyla: { place: 'Sodankylä', munis: ['sodankyla'], refs: ['sodankyla'] },
  muonio: { place: 'Muonio', munis: ['muonio'], refs: ['muonio', 'olos'] },
};

export const slugOf = (c) => (c.productUrl.split('/mokit/')[1] || '').trim();
export const idOf = (slug) => slug.split('-').pop();

/** Cabins of the dump that belong to an area page (before the image check). */
export function areaCabins(all, def) {
  return all.filter((c) => c.place === def.place && def.munis.includes(slugOf(c).split('-')[0]));
}

export function km([lat, lng], [rlat, rlng]) {
  const r = Math.PI / 180, dLat = (lat - rlat) * r, dLng = (lng - rlng) * r;
  const x = Math.sin(dLat / 2) ** 2 + Math.cos(rlat * r) * Math.cos(lat * r) * Math.sin(dLng / 2) ** 2;
  return 2 * 6371 * Math.asin(Math.sqrt(x));
}

/** Nearest reference point of an area: { key, km }. */
export function nearestRef(def, at) {
  return def.refs.map((key) => ({ key, km: km(at, REFS[key].at) })).sort((a, b) => a.km - b.km)[0];
}
