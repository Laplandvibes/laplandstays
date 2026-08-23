// All affiliate CTAs route through go.laplandvibes.com — never raw partner URLs.
// Worker resolves per-site CJ Website ID from Referer (laplandstays.com -> 101729772).
// Spec: "LaplandVibes Affiliate System — Developer Handoff" (2026-04-25).
//
// 🔴 The line above was not true of activities until 2026-08-22: GYG was built as
// a direct getyourguide.com deep link, citing bug_go_lv_worker_gyg_dropped.md
// (2026-05-02: `/go/activities/<slug>` collapsed every slug to the GYG
// homepage). That bug is FIXED — `handleGyg` forwards the whole multi-segment
// path, verified live 2026-08-22. The network re-routed its GYG links through
// the Worker on 2026-08-01 for the D1 click log; this file was never migrated,
// so its clicks never reached our own count and the Command Center
// undercounted GetYourGuide.
//
// 🔴 Do NOT reintroduce per-locale GYG hosts (getyourguide.de/.fr/.es…) or pass
// `?language=` on to GetYourGuide. Measured in a real browser 2026-08-02:
// `?language=xx` does NOTHING there — GYG localises by a `<lang>-<country>/`
// PATH PREFIX. `language=` here is read by the WORKER, which turns it into that
// prefix (language=fi -> /fi-fi/rovaniemi-l2653/). Same contract as
// shared/gyg/picks.ts. That is also why `de` now carries a code: the old table
// left it undefined because it switched host to getyourguide.de instead.

import { PROPERTY_BOOKING } from '../data/propertyBooking'

const REDIRECT_BASE = 'https://go.laplandvibes.com'
// No GYG_PARTNER_ID / SITE_ID here on purpose. The Worker owns the partner id
// (env.GYG_PARTNER_ID) and derives `cmp=lv_<domain>_<sid>` from the Referer, so
// a re-issued id is one Worker deploy instead of 27 site deploys.

export type Partner =
  | 'hotels'
  | 'hotels-seasonal'
  | 'hotels-budget'
  | 'cars'
  | 'activities'


export type Lang = "en" | "fi" | "de" | "ja" | "es" | "pt-BR" | "zh-CN" | "ko" | "fr" | "it" | "nl" | "sv";

const HOTELS_LOCALE: Record<Lang, string> = {
  en: "en_US",
  fi: "fi_FI",
  de: "de_DE",
  ja: "ja_JP",
  es: "es_ES",
  "pt-BR": "pt_BR",
  "zh-CN": "zh_CN",
  ko: "ko_KR",
  fr: "fr_FR",
  it: "it_IT",
  nl: "nl_NL",
  sv: "sv_SE",
};

const CARS_LANG: Record<Lang, string> = {
  en: "en",
  fi: "fi",
  de: "de",
  ja: "ja",
  es: "es",
  "pt-BR": "pt",
  "zh-CN": "zh",
  ko: "ko",
  fr: "fr",
  it: "it",
  nl: "nl",
  sv: "sv",
};

// GetYourGuide's own language codes, handed to the WORKER as `language=`.
// `en` is GYG's default and needs no parameter. Keep in sync with
// shared/gyg/picks.ts — the Worker maps these to the `<lang>-<country>/` prefix.
const GYG_LANGUAGE: Record<Lang, string | undefined> = {
  en: undefined,
  fi: "fi",
  de: "de",
  ja: "ja",
  es: "es",
  "pt-BR": "pt-br",
  "zh-CN": "zh",
  ko: "ko",
  fr: "fr",
  it: "it",
  nl: "nl",
  sv: "sv",
};

export interface BuildAffiliateOptions {
  partner: Partner
  sid: string
  /** Hotels: property/city query (?ss=). Activities: GYG slug (e.g. `rovaniemi-l2653`). */
  destination?: string
  /** Any additional query params (checkin, pickup_date, adults, etc). */
  query?: Record<string, string | number | undefined>
  /** Active site language. REQUIRED: it becomes the `locale` param, and the
   *  go/hotels Worker routes fi_FI to Sembo and everything else to Trip.com.
   *  An optional-with-"en"-default sent Finnish visitors past Sembo unnoticed. */
  lang: Lang;
}

export function buildAffiliateUrl({
  partner,
  sid,
  destination,
  query,
  lang,
}: BuildAffiliateOptions): string {
  // ─── Activities (GetYourGuide) via the Worker ───────────────────
  // The slug goes in the PATH so the Worker can log which activity converted
  // (D1 `slug` column, Command Center per-activity breakdown); a direct link
  // would be invisible to our own click count. `partner_id` + `cmp` are added
  // by the Worker from env + Referer, so the ID lives in exactly one place.
  if (partner === "activities") {
    const path = (destination ?? "").replace(/^\/+/, "").replace(/\/+$/, "");
    const params = new URLSearchParams();
    params.set("sid", sid);
    const gygLang = GYG_LANGUAGE[lang];
    if (gygLang) params.set("language", gygLang);
    if (query) {
      for (const [k, v] of Object.entries(query)) {
        if (v !== undefined && v !== null && v !== "") {
          params.set(k, String(v));
        }
      }
    }
    return `${REDIRECT_BASE}/go/activities${path ? `/${path}` : ""}?${params.toString()}`;
  }

  // ─── Hotels / Cars via Worker ─────────────────────────────────────────
  const params = new URLSearchParams();
  params.set("sid", sid);

  if (destination) {
    // 🔴 cars käyttää pickup_location=IATA, EI ss:ää — ss=IATA valuu EB:n
    // ?location=-tekstihakuun, jonka EB pudottaa tyhjäksi etusivuksi (3.8.2026).
    if (partner === "cars") params.set('pickup_location', destination);
    else params.set('ss', anchorHotelsSs(partner, destination));
  }

  if (partner === "hotels" || partner === "hotels-seasonal" || partner === "hotels-budget") {
    params.set("locale", HOTELS_LOCALE[lang]);
  } else if (partner === "cars") {
    params.set("lang", CARS_LANG[lang]);
  }

  if (query) {
    for (const [k, v] of Object.entries(query)) {
      if (v !== undefined && v !== null && v !== "") {
        params.set(k, String(v));
      }
    }
  }

  return `${REDIRECT_BASE}/go/${partner}?${params.toString()}`;
}
// ─── Convenience: search-style hotel URL ─────────────────────────────────────
// Use when a specific property name isn't known and we just want the destination
// city's lodging partner results. SID convention: snake_case, no domain prefix.
export function buildHotelSearch(destination: string, sid: string, lang: Lang): string {
  return buildAffiliateUrl({ partner: 'hotels', sid, destination, lang })
}

/**
 * Lodging link for a NAMED property — resolves to that hotel's own booking page.
 *
 * 🔴 `?ss=` is the TOWN, never the hotel name. `anchorHotelsSs()` is correct for
 * a town and breaks a hotel name: Sembo's autosuggest returns [] for many
 * multi-word hotel terms, so the Worker gets no destination and serves the
 * partner's FRONT PAGE. Measured 2026-08-02 — 20 of 46 property CTAs landed
 * there and not one reached a property page. The hotel is addressed by id
 * instead (`sembo_hotel`+`sembo_poly` for fi, `trip_hotel`+`trip_city`
 * otherwise), which the Worker has accepted since 2026-07-27.
 *
 * 🔴 Keep `sid` short AND distinct. The Worker truncates `<domain>_<sid>` at 50
 * chars and `laplandstays_com_` is already 17, leaving 33. Truncation is the
 * lesser problem: the real one is COLLISION. Before this change every named
 * property reported as `laplandstays_com_property_card`, so twelve hotels shared
 * one line in CJ reporting. `p_` leaves 31 characters; the longest slug in
 * `PROPERTY_BOOKING` is 16, so nothing truncates and all sub-ids are distinct.
 * Re-check that before adding a property whose slug is longer than 31 chars.
 *
 * The per-surface sids the destination and property-type pages already carry
 * (`destination_levi_levin_iglut`, `property_aurora_kakslauttanen`, …) are kept
 * as-is and passed in by the caller: they encode WHICH surface converted, which
 * is information `p_<slug>` does not have. `scripts/check-sids.mjs` asserts the
 * whole set stays distinct after the Worker's 50-char cut.
 */
export function propertyLodgingLink(
  b: { slug: string; town: string; semboHotel?: string; semboPoly?: string; tripHotel?: string; tripCity?: string },
  sid: string | undefined,
  lang: Lang,
): string {
  const params = new URLSearchParams()
  params.set('sid', sid ?? `p_${b.slug}`)
  params.set('ss', anchorHotelsSs('hotels', b.town))
  params.set('locale', HOTELS_LOCALE[lang])
  if (b.semboHotel && b.semboPoly) {
    params.set('sembo_hotel', b.semboHotel)
    params.set('sembo_poly', b.semboPoly)
  }
  if (b.tripHotel) {
    params.set('trip_hotel', b.tripHotel)
    if (b.tripCity) params.set('trip_city', b.tripCity)
  }
  return `${REDIRECT_BASE}/go/hotels?${params.toString()}`
}

export function buildHotelSearchWithDates(
  destination: string,
  sid: string,
  lang: Lang,
  checkIn?: string,
  checkOut?: string,
  adults?: number,
): string {
  return buildAffiliateUrl({
    partner: 'hotels',
    sid,
    destination,
    query: { checkin: checkIn, checkout: checkOut, adults },
    lang,
  })
}

// ─── Per-destination + per-CTA shortcuts ─────────────────────────────────────
// SID is snake_case with no domain prefix (Worker injects domain from Referer).
// `destination` MUST be a real city/region or property name that the lodging partner
// resolves to actual results — descriptive keyword phrases like "Aurora glass
// igloo Lapland" produce a "no results" page. The category lives in the SID
// for our CJ Reports / GA4 attribution; the search query points at the city
// or anchor property where that category is concentrated.
//
// IMPORTANT: "Lapland, Finland" alone is NOT a lodging partner destination ID — they
// fall back to the user's geo-snapped city (Helsinki for FI users) and show
// non-Lapland results. Always pin generic "all of Lapland" CTAs to Rovaniemi
// (regional capital, valid destination, deepest inventory in the region).
function buildHotelSearchLang(lang: Lang = "en") {
  return {
  // Generic landings — used by Nav "Book Now" and homepage hero CTA.
  // Pinned to Rovaniemi so the result page actually shows Lapland properties.
  lapland: buildAffiliateUrl({ partner: 'hotels', sid: 'hero_cta', destination: 'Rovaniemi, Finland', lang }),
  navBookNow: buildAffiliateUrl({ partner: 'hotels', sid: 'nav_book_now', destination: 'Rovaniemi, Finland', lang }),

  // Destinations (real lodging partner locations).
  levi: buildAffiliateUrl({ partner: 'hotels', sid: 'destination_levi', destination: 'Levi, Finland', lang }),
  // Sembo "Ylläs" polygon = 3 properties; main village Äkäslompolo = 13 (Trip.com: same city id).
  yllas: buildAffiliateUrl({ partner: 'hotels', sid: 'destination_yllas', destination: 'Äkäslompolo, Finland', lang }),
  saariselka: buildAffiliateUrl({ partner: 'hotels', sid: 'destination_saariselka', destination: 'Saariselkä, Finland', lang }),
  inari: buildAffiliateUrl({ partner: 'hotels', sid: 'destination_inari', destination: 'Inari, Finland', lang }),
  rovaniemi: buildAffiliateUrl({ partner: 'hotels', sid: 'destination_rovaniemi', destination: 'Rovaniemi, Finland', lang }),

  // Property categories — point at the city where the category is concentrated.
  // SID still records the category; user lands on real results, not a 0-hit page.
  auroraGlass: buildAffiliateUrl({ partner: 'hotels', sid: 'property_aurora_glass', destination: 'Saariselkä, Finland', lang }),
  lakesideCabin: buildAffiliateUrl({ partner: 'hotels', sid: 'property_lakeside_cabin', destination: 'Inari, Finland', lang }),
  mountainChalet: buildAffiliateUrl({ partner: 'hotels', sid: 'property_mountain_chalet', destination: 'Levi, Finland', lang }),
  designerLodge: buildAffiliateUrl({ partner: 'hotels', sid: 'property_designer_lodge', destination: 'Saariselkä, Finland', lang }),
  hotel: buildAffiliateUrl({ partner: 'hotels', sid: 'property_hotel', destination: 'Rovaniemi, Finland', lang }),
  apartment: buildAffiliateUrl({ partner: 'hotels', sid: 'property_apartment', destination: 'Levi, Finland', lang }),
  };
}

// ─── Specific properties — deep-link to the property's OWN booking page ──────
// Built from `data/propertyBooking.ts`, so a card featuring a known property
// opens that hotel at the partner instead of a city list. Each entry gets its
// own `p_<slug>` sub-id; they all used to be `property_card`, which merged
// twelve hotels into one line of CJ reporting.
//
// 🔴 `laplandHotels` was REMOVED, not fixed. "Lapland Hotels" is a chain, not a
// business you could ring up, so there is no property page to deep-link to and
// no honest id to give it — the same rule `data/properties.ts` already applies
// to "Lapland Hotels Levi" and "Lapland Hotels (Ylläs)". It had no call sites.
function buildPropertySearchLang(lang: Lang = "en") {
  const link = (key: keyof typeof PROPERTY_BOOKING) => {
    const b = PROPERTY_BOOKING[key]
    return b ? propertyLodgingLink(b, undefined, lang) : buildAffiliateUrl({ partner: 'hotels', sid: 'property_card', destination: 'Rovaniemi, Finland', lang })
  }
  return {
  kakslauttanen: link('kakslauttanen'),
  levinIglut: link('levinIglut'),
  arcticTreeHouse: link('arcticTreeHouse'),
  starArctic: link('starArctic'),
  auroraVillage: link('auroraVillage'),
  arcticSnowHotel: link('arcticSnowHotel'),
  nellim: link('nellim'),
  muotka: link('muotka'),
  novaSkyland: link('novaSkyland'),
  apukka: link('apukka'),
  harriniva: link('harriniva'),
  };
}

// ─── EconomyBookings (cars) ──────────────────────────────────────────────────
function buildCarsLang(lang: Lang = "en") {
  return {
  fromHelsinki: buildAffiliateUrl({ partner: 'cars', sid: 'cars_helsinki', query: { pickup_location: 'HEL' }, lang }),
  fromRovaniemi: buildAffiliateUrl({ partner: 'cars', sid: 'cars_rovaniemi', query: { pickup_location: 'RVN' }, lang }),
  fromKittila: buildAffiliateUrl({ partner: 'cars', sid: 'cars_kittila', query: { pickup_location: 'KTT' }, lang }),
  fromIvalo: buildAffiliateUrl({ partner: 'cars', sid: 'cars_ivalo', query: { pickup_location: 'IVL' }, lang }),
  generic: buildAffiliateUrl({ partner: 'cars', sid: 'cars_generic', lang }),
  };
}

// ─── Lomarengas (cabins, Adtraction) ─────────────────────────────────────────
// go/lomarengas → 302 on.lomarengas.fi/t/t?…&epi=<site_sid>&url=<dest>.
// Fixed 20 €/booking, 7-day tracking. `dest` must be a full lomarengas.fi URL;
// Lomarengas has no DE site, so every non-FI locale deep-links to /en.
// Search pages live under /mokkihaku (fi) and /en/cottage-search — the old
// /mokit/* and /en/cottages/* paths became cottage-DETAIL namespaces that
// render a client-side 404 with HTTP 200 and no SSR <title>, so verify any
// URL change against page CONTENT (title), never the status code.
// Ruka sits under pohjois-pohjanmaa, not lappi (it is not in Lapland).
const LOMARENGAS_AREAS = {
  lapland: { fi: 'https://www.lomarengas.fi/mokkihaku/lappi', intl: 'https://www.lomarengas.fi/en/cottage-search/lappi' },
  levi: { fi: 'https://www.lomarengas.fi/mokkihaku/lappi/hiihtokeskus/levi', intl: 'https://www.lomarengas.fi/en/cottage-search/lappi/ski-resort/levi' },
  yllas: { fi: 'https://www.lomarengas.fi/mokkihaku/lappi/hiihtokeskus/yllas', intl: 'https://www.lomarengas.fi/en/cottage-search/lappi/ski-resort/yllas' },
  ruka: { fi: 'https://www.lomarengas.fi/mokkihaku/pohjois-pohjanmaa/hiihtokeskus/ruka', intl: 'https://www.lomarengas.fi/en/cottage-search/pohjois-pohjanmaa/ski-resort/ruka' },
  saariselka: { fi: 'https://www.lomarengas.fi/mokkihaku/lappi/hiihtokeskus/saariselka', intl: 'https://www.lomarengas.fi/en/cottage-search/lappi/ski-resort/saariselka' },
} as const;

export type LomarengasArea = keyof typeof LOMARENGAS_AREAS;

export function buildLomarengasUrl(area: LomarengasArea, sid: string, lang: Lang = 'en'): string {
  const dest = lang === 'fi' ? LOMARENGAS_AREAS[area].fi : LOMARENGAS_AREAS[area].intl;
  return `${REDIRECT_BASE}/go/lomarengas?sid=${encodeURIComponent(sid)}&dest=${encodeURIComponent(dest)}`;
}

// Cabin-DETAIL deep link from a product-feed slug (kunta-kylä-nimi-id, e.g.
// kittila-sirkka-naava-17156). Content-verified 2026-07-25: /mokit/<slug> (fi)
// and /en/cottages/<slug> (intl) both SSR the cabin title for real slugs;
// bogus slugs render the client-side 404 shell with no SSR <title>.
export function buildLomarengasCabinUrl(slug: string, sid: string, lang: Lang = 'en'): string {
  const dest = lang === 'fi'
    ? `https://www.lomarengas.fi/mokit/${slug}`
    : `https://www.lomarengas.fi/en/cottages/${slug}`;
  return `${REDIRECT_BASE}/go/lomarengas?sid=${encodeURIComponent(sid)}&dest=${encodeURIComponent(dest)}`;
}

/** Live cabin-showcase JSON: the affiliate Worker's KV-cached parse of the
 *  Lomarengas product feed (pfid 375), grouped by resort, refreshed daily. */
export const CABINS_API = `${REDIRECT_BASE}/_cabins`;

/** Locale-aware factories — the ONLY way to build these URLs.
 *
 *  There used to be `HOTEL_SEARCH`/`PROPERTY_SEARCH`/`CARS` constants frozen to
 *  'en' "for backward compat". They were a silent revenue leak: the go/hotels
 *  Worker routes locale=fi_FI to Sembo (9 % / 45 d) and every other locale to
 *  Trip.com, so every page that used the frozen objects sent Finnish visitors
 *  past Sembo. Removed 2026-07-26 — always pass the visitor's language. */
export const HOTEL_SEARCH_FOR = buildHotelSearchLang;
export const PROPERTY_SEARCH_FOR = buildPropertySearchLang;
export const CARS_FOR = buildCarsLang;

/**
 * Anchor any hotels search to Finnish Lapland. A bare "Lapland"/"Levi"/etc.
 * makes the lodging partner geocode to *Lapland, Indiana, USA* — a real revenue/trust
 * bug (Vesa 2026-07-08). Force ", Finland" onto every hotels query that does
 * not already name the country; leave cars/activities queries untouched.
 * Callers cannot re-introduce the bug.
 */
function anchorHotelsSs(partner: string, destination: string): string {
  const isHotels = partner === "hotels" || partner === "hotels-seasonal" || partner === "hotels-budget";
  if (!isHotels) return destination;
  return /finland|suomi/i.test(destination) ? destination : `${destination.replace(/[\s,]+$/, "")}, Finland`;
}
