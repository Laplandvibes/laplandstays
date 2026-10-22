import { keyForQuery, type PropertyKey } from "./properties";
import type { Lang } from "../i18n/useLang";

/**
 * Property → partner PROPERTY ids, so a named-hotel CTA opens that hotel's own
 * booking page instead of a city list or the partner's front page.
 *
 * WHY THIS FILE EXISTS (measured 2026-08-02, not guessed)
 * ======================================================
 * Every hotel CTA this site publishes was probed through the Worker with
 * `redirect:'manual'` and the `Location` header read back. For the 23 distinct
 * property queries × 2 partner paths (fi → Sembo, everything else → Trip.com):
 *
 *     property page          0 / 46
 *     city / area list      26 / 46
 *     PARTNER FRONT PAGE    20 / 46
 *
 * Three separate causes, all fixed here + in `lib/affiliate.ts`:
 *
 * 1. `anchorHotelsSs()` glued ", Finland" onto the hotel NAME. That guard is
 *    right for a TOWN (the lodging partner used to geocode a bare "Lapland" to Indiana)
 *    and actively wrong for a hotel name: Sembo's autosuggest answers [] for
 *    many multi-word hotel terms, the Worker then has no destination at all,
 *    and the visitor lands on the partner's front page. `?ss=` is now always
 *    the TOWN and the property is addressed by id.
 * 2. This site never passed the property ids the Worker has accepted since
 *    2026-07-27 (`sembo_hotel`+`sembo_poly` for fi, `trip_hotel`+`trip_city`
 *    for the other 11 locales).
 * 3. 🔴 Every named-property CTA reported under the SAME sub-id. `property_card`
 *    was hard-coded for all of them, so twelve hotels shared one line in CJ
 *    reporting — attribution was not merely coarse, it was merged. Each
 *    property now carries `p_<slug>` (see `propertyLodgingLink`).
 *
 * HOW THE IDS WERE RESOLVED AND VERIFIED
 * ======================================
 * Sembo: `content-hc.sembo.com/CategorizedAutosuggestion?Term=` →
 *   `hotel.hotelCode` + `hotel.mainPolygonId`, matched on the label Sembo
 *   itself returns. Every pair was then OPENED at the Worker's own plan URL in
 *   a browser and the rendered property name read back, because a wrong id does
 *   not 404 — it renders a different, plausible hotel. A 200 was never proof.
 * Trip.com: SEO detail URL `/hotels/<city>-hotel-detail-<hotelId>/<slug>/`,
 *   then `/hotels/detail/?hotelId=&cityId=` fetched and the `<h1>` read back.
 *   All 23 ids returned the expected hotel; 0 mismatches.
 *
 * 🔴 NEGATIVE CONTROL (it fired again). `/hotels/list?city=<id>&searchWord=<hotel>`
 * neither filters nor re-ranks the server-rendered payload: `city=38182`
 * with and without `searchWord=K5 Levi` returns the byte-identical seven
 * hotels, Design Hotel Levi first, and no K5 Levi at all. Match the NAME,
 * never the position.
 *
 * 🔴 DO NOT INVENT AN ID to fill a blank. Harriniva is deliberately empty for
 * Sembo and its Finnish visitors get the Muonio list instead.
 */
export interface PropertyBooking {
  /** TOWN passed as `?ss=` — never the hotel name. Resolves the destination for
   *  the partner that lacks a property id, and is the honest fallback. */
  town: string;
  /** Short, unique sub-id. The Worker truncates `<domain>_<sid>` at 50 chars and
   *  `laplandstays_com_` already eats 17 — see `propertyLodgingLink`. */
  slug: string;
  semboHotel?: string;
  semboPoly?: string;
  tripHotel?: string;
  tripCity?: string;
}

/**
 * Verified 2026-08-02. The name in each comment is what the PARTNER'S OWN page
 * rendered — keep it, it is the evidence that the id is the right hotel.
 */
export const PROPERTY_BOOKING: Partial<Record<PropertyKey, PropertyBooking>> = {
  // Sembo: "Kakslauttanen Arctic Resort" · Trip: "Kakslauttanen Arctic Resort - Igloos and Chalets"
  kakslauttanen: { town: "Saariselkä", slug: "kakslauttanen", semboHotel: "1679682", semboPoly: "360014", tripHotel: "8669535", tripCity: "56309" },
  // Sembo: "Golden Crown Levin Iglut" · Trip: "Golden Crown - Levin Iglut"
  levinIglut: { town: "Levi", slug: "levin_iglut", semboHotel: "2512109", semboPoly: "360006", tripHotel: "9528161", tripCity: "38182" },
  // Sembo: "Star Arctic Hotel & Activities" · Trip: "Star Arctic Hotel"
  starArctic: { town: "Saariselkä", slug: "star_arctic", semboHotel: "1595634", semboPoly: "360532", tripHotel: "7402448", tripCity: "10196" },
  // Sembo + Trip: "Aurora Village Ivalo". The 2026-08-01 luxuryvillas batch
  // recorded this as "not listed" on Trip; it is listed, as 7506232.
  auroraVillage: { town: "Ivalo", slug: "aurora_village", semboHotel: "422560", semboPoly: "360477", tripHotel: "7506232", tripCity: "1783" },
  // Sembo + Trip: "Nova Skyland Hotel"
  novaSkyland: { town: "Rovaniemi", slug: "nova_skyland", semboHotel: "905083", semboPoly: "360049", tripHotel: "11619373", tripCity: "1794" },
  // Sembo + Trip: "Northern Lights Ranch" (Köngäs, Kittilä — sold as Levi)
  northernLightsRanch: { town: "Levi", slug: "nl_ranch", semboHotel: "1014610", semboPoly: "360115", tripHotel: "10090817", tripCity: "38182" },
  // Sembo + Trip: "Arctic SnowHotel & Glass Igloos"
  arcticSnowHotel: { town: "Rovaniemi", slug: "arctic_snowhotel", semboHotel: "FI-1040", semboPoly: "360732", tripHotel: "8197351", tripCity: "1794" },
  // Sembo + Trip: "Wilderness Hotel Nellim & Igloos". Also recorded as "not
  // bookable" on 2026-08-01; Sembo lists it as 754136 and the page renders it.
  nellim: { town: "Inari", slug: "nellim", semboHotel: "754136", semboPoly: "360410", tripHotel: "9211135", tripCity: "38225" },
  // Sembo + Trip: "Wilderness Hotel Muotka & Igloos"
  muotka: { town: "Saariselkä", slug: "muotka", semboHotel: "766605", semboPoly: "360102", tripHotel: "10628631", tripCity: "56309" },
  // Sembo + Trip: "Wilderness Hotel Inari & Igloos". 🔴 Sembo's Inari polygon
  // holds four near-identical Wilderness names (Inari, Juutua, Nellim, Nangu);
  // a looser match would have taken the wrong sibling.
  wildernessInari: { town: "Inari", slug: "wilderness_inari", semboHotel: "766602", semboPoly: "360410", tripHotel: "10871588", tripCity: "38225" },
  // Sembo + Trip: "Apukka Resort"
  apukka: { town: "Rovaniemi", slug: "apukka", semboHotel: "656849", semboPoly: "360462", tripHotel: "9940210", tripCity: "1794" },
  // Sembo + Trip: "Lapland Hotels Ounasvaara Chalets". 🔴 NOT "Lapland Hotels
  // Sky Ounasvaara" (Sembo 1595640-family / Trip 2164539) — a different hotel
  // on the same fell. The registry name carries "Chalets" for exactly this
  // reason; matching on "Ounasvaara" alone would have taken the wrong one.
  laplandHotelsOunasvaara: { town: "Rovaniemi", slug: "ounasvaara", semboHotel: "101889", semboPoly: "360732", tripHotel: "2195928", tripCity: "1794" },
  // 🔴 Sembo has NO listing: "Harriniva", "Harriniva Hotels", "Harriniva Hotel",
  // "Harriniva Muonio", "Harriniva Adventure", "Harriniva Adventure Resort" all
  // return unrelated fuzz, and Sembo's own "Muonio" term returns no Lapland
  // hotel at all. Left empty on purpose — a Finnish visitor gets the Muonio
  // list, not an invented id. Trip: "Harriniva Adventure Resort" (the business
  // rebranded; Google still lists it as Harrinivantie 35, 99300 Muonio).
  harriniva: { town: "Muonio", slug: "harriniva", tripHotel: "9034574", tripCity: "56265" },
  // Sembo + Trip: "Hotel Levi Panorama"
  hotelLeviPanorama: { town: "Levi", slug: "levi_panorama", semboHotel: "18138", semboPoly: "360006", tripHotel: "2150418", tripCity: "38182" },
  // Sembo + Trip: "Levi Hotel Spa"
  leviHotelSpa: { town: "Levi", slug: "levi_hotel_spa", semboHotel: "24638", semboPoly: "360006", tripHotel: "2164910", tripCity: "38182" },
  // Sembo + Trip: "Lapland Hotels Sirkantähti"
  laplandHotelsSirkantahti: { town: "Levi", slug: "sirkantahti", semboHotel: "1726789", semboPoly: "360006", tripHotel: "2150152", tripCity: "38182" },
  // Sembo: "Hotel K5 Levi" · Trip: "Hotel K5 Levi and K5 Villas". 🔴 Trip also
  // sells "Chalets K5 Levi" (36831541) — a different product of the same
  // operator, not this hotel.
  k5Levi: { town: "Levi", slug: "k5_levi", semboHotel: "FI-H75310", semboPoly: "360006", tripHotel: "2216522", tripCity: "38182" },
  // Sembo + Trip: "Lapland Hotels Saaga"
  laplandHotelsSaaga: { town: "Ylläs", slug: "saaga", semboHotel: "1741117", semboPoly: "360476", tripHotel: "5931460", tripCity: "9274" },
  // Sembo + Trip: "Lapland Hotels Ylläskaltio" (Äkäslompolo — Sembo files it
  // under its own polygon 360523, not the Ylläs one)
  laplandHotelsYllaskaltio: { town: "Ylläs", slug: "yllaskaltio", semboHotel: "34815", semboPoly: "360523", tripHotel: "2150123", tripCity: "9274" },
  // Sembo + Trip: "Arctic TreeHouse Hotel"
  arcticTreeHouse: { town: "Rovaniemi", slug: "arctic_treehouse", semboHotel: "922953", semboPoly: "360732", tripHotel: "10035619", tripCity: "1794" },
  // Added 2026-10-06 (Discovering Finland listings cross-checked against our sites).
  // Same method as above: Sembo pair opened through the live Worker, Trip.com <h1> read back.
  // Sembo rendered "Santa's Igloos Arctic Circle" / "Silver Birch Resort" / "Levi Spirit Luxury Villas & Resort";
  // Trip.com rendered the same three plus "Hotel Ylläshumina". Ylläshumina is not on Sembo, so Finnish
  // visitors get the Ylläs list (same as Harriniva). Trip city 259389 = Kolari, as Trip.com files it.
  santasIgloosArcticCircle: { town: "Rovaniemi", slug: "santas_igloos_ac", semboHotel: "FI-H233226", semboPoly: "360049", tripHotel: "9107838", tripCity: "1794" },
  silverBirch: { town: "Rovaniemi", slug: "silver_birch", semboHotel: "13758626", semboPoly: "360732", tripHotel: "125975259", tripCity: "1794" },
  leviSpirit: { town: "Levi", slug: "levi_spirit", semboHotel: "504783", semboPoly: "360006", tripHotel: "4231378", tripCity: "38182" },
  yllashumina: { town: "Ylläs", slug: "yllashumina", tripHotel: "9838618", tripCity: "259389" },
  // Rovaniemen hotellilista (tehtävä D, 22.10.2026). Sembo: autosuggest → hotelCode + polygon, avattu
  // Sembon sivulla ja nimi luettu takaisin (hinta näkyi); Trip.com: hotellisivun h1 + osoite luettu.
  // Glass Resort: Sembo listaa mutta ei myy (ei huoneita 3.11., 2.12., 20.1.) ⇒ ei Sembo-tunnusta,
  // jolloin jokainen kieli menee Trip.comiin (sama ratkaisu kuin Harriniva). Trip 10944848, EI 5790221.
  // Santasport: Sembon 251006 = Sporthotel (huonetyypit luettu); Trip 2547303 "Santasport Resort".
  arcticLight: { town: "Rovaniemi", slug: "arctic_light", semboHotel: "102498", semboPoly: "360732", tripHotel: "3108511", tripCity: "1794" },
  scandicRovaniemiCity: { town: "Rovaniemi", slug: "scandic_city", semboHotel: "FI-H22793", semboPoly: "360732", tripHotel: "2158906", tripCity: "1794" },
  scandicPohjanhovi: { town: "Rovaniemi", slug: "pohjanhovi", semboHotel: "FI-H22711", semboPoly: "360732", tripHotel: "2133257", tripCity: "1794" },
  arcticCityHotel: { town: "Rovaniemi", slug: "arctic_city", semboHotel: "FI-H22710", semboPoly: "360732", tripHotel: "2139480", tripCity: "1794" },
  sokosVaakuna: { town: "Rovaniemi", slug: "sokos_vaakuna", semboHotel: "FI-H22745", semboPoly: "360732", tripHotel: "2171790", tripCity: "1794" },
  santasHotelSantaClaus: { town: "Rovaniemi", slug: "santas_hotel", semboHotel: "FI-H22788", semboPoly: "360732", tripHotel: "2164549", tripCity: "1794" },
  postmasterHotel: { town: "Rovaniemi", slug: "postmaster", semboHotel: "28071671", semboPoly: "360732", tripHotel: "114911171", tripCity: "1794" },
  hotelAakenus: { town: "Rovaniemi", slug: "aakenus", semboHotel: "509439", semboPoly: "360732", tripHotel: "43240155", tripCity: "1794" },
  skyOunasvaara: { town: "Rovaniemi", slug: "sky_ounasvaara", semboHotel: "FI-H85147", semboPoly: "360732", tripHotel: "2164539", tripCity: "1794" },
  santasport: { town: "Rovaniemi", slug: "santasport", semboHotel: "251006", semboPoly: "360732", tripHotel: "2547303", tripCity: "1794" },
  santaClausHolidayVillage: { town: "Rovaniemi", slug: "santa_claus_hv", semboHotel: "1659057", semboPoly: "360049", tripHotel: "2157251", tripCity: "1794" },
  glassResort: { town: "Rovaniemi", slug: "glass_resort", tripHotel: "10944848", tripCity: "1794" },
  invisibleForest: { town: "Rovaniemi", slug: "invisible_forest", semboHotel: "11442214", semboPoly: "360732", tripHotel: "115478710", tripCity: "1794" },
  // Ruka ja Pyhä–Luosto (tehtävä E, 22.10.2026). Sembo: autosuggest → hotelCode + polygon, nimi luettu sembo.fi:ssä;
  // Trip.com: h1 luettu. Ei Sembo-tunnusta (Sembo ei myy) ⇒ Trip.com kaikilla kielillä: Ruka Ski Chalets, Kurula's, Kultakero.
  // Hotel Pyhätunturin Sembo-polygoni on Pelkosenniemi 360643, ei Pyhä 360729 (Sembon oma luokittelu).
  scandicRukahovi: { town: "Kuusamo", slug: "rukahovi", semboHotel: "3195914", semboPoly: "360525", tripHotel: "4359383", tripCity: "1787" },
  skiInnRukaVillage: { town: "Kuusamo", slug: "rukavillage", semboHotel: "1955345", semboPoly: "360525", tripHotel: "7043012", tripCity: "1787" },
  rukaSkiChalets: { town: "Kuusamo", slug: "ruka_ski_chalets", tripHotel: "10727773", tripCity: "1787" },
  royalRuka: { town: "Kuusamo", slug: "royal_ruka", semboHotel: "271270", semboPoly: "360525", tripHotel: "4046927", tripCity: "1787" },
  skiInnRukaValley: { town: "Kuusamo", slug: "rukavalley", semboHotel: "1782098", semboPoly: "360525", tripHotel: "53222973", tripCity: "1787" },
  northernSenses: { town: "Kuusamo", slug: "northern_senses", semboHotel: "3321846", semboPoly: "360525", tripHotel: "96297262", tripCity: "1787" },
  kuusamonTropiikki: { town: "Kuusamo", slug: "tropiikki", semboHotel: "FI-H70651", semboPoly: "360585", tripHotel: "3156462", tripCity: "1787" },
  hotelPyhatunturi: { town: "Pyhä", slug: "hotel_pyhatunturi", semboHotel: "480856", semboPoly: "360643", tripHotel: "22900228", tripCity: "56282" },
  pyhaIgloos: { town: "Pyhä", slug: "pyha_igloos", semboHotel: "901011", semboPoly: "360729", tripHotel: "13690665", tripCity: "56282" },
  northernLightsVillagePyha: { town: "Pyhä", slug: "nlv_pyha", semboHotel: "24807846", semboPoly: "360729", tripHotel: "112208820", tripCity: "56282" },
  sundayMorning: { town: "Pyhä", slug: "sunday_morning", semboHotel: "24893950", semboPoly: "360729", tripHotel: "101982118", tripCity: "56282" },
  kurulas: { town: "Pyhä", slug: "kurulas", tripHotel: "101233517", tripCity: "56282" },
  skiInnKultakero: { town: "Pyhä", slug: "kultakero", tripHotel: "29277139", tripCity: "56282" },
  luostotunturi: { town: "Luosto", slug: "luostotunturi", semboHotel: "1727124", semboPoly: "360048", tripHotel: "3044287", tripCity: "9888" },
  santasHotelAurora: { town: "Luosto", slug: "santas_aurora", semboHotel: "282349", semboPoly: "360048", tripHotel: "3176942", tripCity: "9888" },
};

/**
 * Resolve the booking record an editorial surface is talking about, from the
 * affiliate search string it already carries.
 *
 * Deliberately routed through `keyForQuery`, the same fail-closed join the
 * Google-rating layer uses: a surface that edits its `propertyQuery` loses its
 * deep link (and its rating) rather than keeping the OLD hotel's ids under a
 * new name. Returns `null` for city rows and for anything not in the registry.
 */
export function bookingForQuery(query: string | undefined | null): PropertyBooking | null {
  const key = keyForQuery(query);
  return key ? PROPERTY_BOOKING[key] ?? null : null;
}

/**
 * Does this property have a bookable page at the partner serving THIS locale?
 *
 * The Worker sends fi_FI to Sembo and every other locale to Trip.com, so
 * bookability is per-locale: Harriniva is bookable for an English visitor and
 * not for a Finnish one. Callers that make a rates promise must check this.
 */
export function propertyIsBookable(b: PropertyBooking | null, lang: Lang): boolean {
  if (!b) return false;
  return lang === "fi" ? Boolean(b.semboHotel && b.semboPoly) : Boolean(b.tripHotel);
}
