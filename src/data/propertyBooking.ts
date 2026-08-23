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
