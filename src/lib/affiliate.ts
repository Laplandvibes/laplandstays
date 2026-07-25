// All affiliate CTAs route through go.laplandvibes.com — never raw partner URLs.
// Worker resolves per-site CJ Website ID from Referer (laplandstays.com -> 101729772).
// Spec: "LaplandVibes Affiliate System — Developer Handoff" (2026-04-25).

const REDIRECT_BASE = 'https://go.laplandvibes.com'
const GYG_PARTNER_ID = 'VRMKD7N'
const SITE_ID = 'laplandstays'

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

const GYG_DOMAIN: Record<Lang, string> = {
  en: "https://www.getyourguide.com",
  fi: "https://www.getyourguide.com",
  de: "https://www.getyourguide.de",
  ja: "https://www.getyourguide.com",
  es: "https://www.getyourguide.es",
  "pt-BR": "https://www.getyourguide.com.br",
  "zh-CN": "https://www.getyourguide.com",
  ko: "https://www.getyourguide.com",
  fr: "https://www.getyourguide.fr",
  it: "https://www.getyourguide.it",
  nl: "https://www.getyourguide.nl",
  sv: "https://www.getyourguide.com",
};

const GYG_LANGUAGE: Record<Lang, string | undefined> = {
  en: undefined,
  fi: "fi",
  de: undefined,
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
  /** Active site language; defaults to "en" for backwards compat. */
  lang?: Lang;
}

export function buildAffiliateUrl({
  partner,
  sid,
  destination,
  query,
  lang = "en",
}: BuildAffiliateOptions): string {
  // ─── GYG direct deep-link (Worker-bypass) ─────────────────────────────
  if (partner === "activities") {
    const base = GYG_DOMAIN[lang];
    const path = (destination ?? "").replace(/^\/+/, "").replace(/\/+$/, "");
    const url = new URL(path ? `${base}/${path}/` : `${base}/`);
    url.searchParams.set("partner_id", GYG_PARTNER_ID);
    url.searchParams.set("cmp", `lv_${SITE_ID}_${sid}`);
    const gygLang = GYG_LANGUAGE[lang];
    if (gygLang) url.searchParams.set("language", gygLang);
    if (query) {
      for (const [k, v] of Object.entries(query)) {
        if (v !== undefined && v !== null && v !== "") {
          url.searchParams.set(k, String(v));
        }
      }
    }
    return url.toString();
  }

  // ─── Hotels / Cars via Worker ─────────────────────────────────────────
  const params = new URLSearchParams();
  params.set("sid", sid);

  if (destination) {
    params.set('ss', anchorHotelsSs(partner, destination));
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
// city's Hotels.com results. SID convention: snake_case, no domain prefix.
export function buildHotelSearch(destination: string, sid: string): string {
  return buildAffiliateUrl({ partner: 'hotels', sid, destination })
}

export function buildHotelSearchWithDates(
  destination: string,
  sid: string,
  checkIn?: string,
  checkOut?: string,
  adults?: number,
): string {
  return buildAffiliateUrl({
    partner: 'hotels',
    sid,
    destination,
    query: { checkin: checkIn, checkout: checkOut, adults },
  })
}

// ─── Per-destination + per-CTA shortcuts ─────────────────────────────────────
// SID is snake_case with no domain prefix (Worker injects domain from Referer).
// `destination` MUST be a real city/region or property name that Hotels.com
// resolves to actual results — descriptive keyword phrases like "Aurora glass
// igloo Lapland" produce a "no results" page. The category lives in the SID
// for our CJ Reports / GA4 attribution; the search query points at the city
// or anchor property where that category is concentrated.
//
// IMPORTANT: "Lapland, Finland" alone is NOT a Hotels.com destination ID — they
// fall back to the user's geo-snapped city (Helsinki for FI users) and show
// non-Lapland results. Always pin generic "all of Lapland" CTAs to Rovaniemi
// (regional capital, valid destination, deepest inventory in the region).
function buildHotelSearchLang(lang: Lang = "en") {
  return {
  // Generic landings — used by Nav "Book Now" and homepage hero CTA.
  // Pinned to Rovaniemi so the result page actually shows Lapland properties.
  lapland: buildAffiliateUrl({ partner: 'hotels', sid: 'hero_cta', destination: 'Rovaniemi, Finland', lang }),
  navBookNow: buildAffiliateUrl({ partner: 'hotels', sid: 'nav_book_now', destination: 'Rovaniemi, Finland', lang }),

  // Destinations (real Hotels.com locations).
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

// ─── Specific properties — deep-link via ?ss=PROPERTY_NAME ───────────────────
// Spec section 8: when a card features a known property, send the visitor to
// Hotels.com with that property name pre-filled.
function buildPropertySearchLang(lang: Lang = "en") {
  return {
  kakslauttanen: buildAffiliateUrl({ partner: 'hotels', sid: 'property_card', destination: 'Kakslauttanen Arctic Resort', lang }),
  levinIglut: buildAffiliateUrl({ partner: 'hotels', sid: 'property_card', destination: 'Levin Iglut', lang }),
  arcticTreeHouse: buildAffiliateUrl({ partner: 'hotels', sid: 'property_card', destination: 'Arctic TreeHouse Hotel', lang }),
  starArctic: buildAffiliateUrl({ partner: 'hotels', sid: 'property_card', destination: 'Star Arctic Hotel', lang }),
  auroraVillage: buildAffiliateUrl({ partner: 'hotels', sid: 'property_card', destination: 'Aurora Village Ivalo', lang }),
  arcticSnowHotel: buildAffiliateUrl({ partner: 'hotels', sid: 'property_card', destination: 'Arctic Snow Hotel', lang }),
  nellim: buildAffiliateUrl({ partner: 'hotels', sid: 'property_card', destination: 'Wilderness Hotel Nellim', lang }),
  muotka: buildAffiliateUrl({ partner: 'hotels', sid: 'property_card', destination: 'Wilderness Hotel Muotka', lang }),
  novaSkyland: buildAffiliateUrl({ partner: 'hotels', sid: 'property_card', destination: 'Novasky Land', lang }),
  apukka: buildAffiliateUrl({ partner: 'hotels', sid: 'property_card', destination: 'Apukka Resort Rovaniemi', lang }),
  laplandHotels: buildAffiliateUrl({ partner: 'hotels', sid: 'property_card', destination: 'Lapland Hotels', lang }),
  harriniva: buildAffiliateUrl({ partner: 'hotels', sid: 'property_card', destination: 'Harriniva', lang }),
  };
}

// ─── EconomyBookings (cars) ──────────────────────────────────────────────────
function buildCarsLang(lang: Lang = "en") {
  return {
  fromHelsinki: buildAffiliateUrl({ partner: 'cars', sid: 'cars_helsinki', query: { pickup_location: 'HEL' } }),
  fromRovaniemi: buildAffiliateUrl({ partner: 'cars', sid: 'cars_rovaniemi', query: { pickup_location: 'RVN' } }),
  fromKittila: buildAffiliateUrl({ partner: 'cars', sid: 'cars_kittila', query: { pickup_location: 'KTT' } }),
  fromIvalo: buildAffiliateUrl({ partner: 'cars', sid: 'cars_ivalo', query: { pickup_location: 'IVL' } }),
  generic: buildAffiliateUrl({ partner: 'cars', sid: 'cars_generic', lang }),
  };
}

// ─── Lomarengas (cabins, Adtraction) ─────────────────────────────────────────
// go/lomarengas → 302 on.lomarengas.fi/t/t?…&epi=<site_sid>&url=<dest>.
// Fixed 20 €/booking, 7-day tracking. `dest` must be a full lomarengas.fi URL;
// Lomarengas has no DE site (404), so every non-FI locale deep-links to /en.
const LOMARENGAS_AREAS = {
  lapland: { fi: 'https://www.lomarengas.fi/mokit/lappi', intl: 'https://www.lomarengas.fi/en/cottages/lapland' },
  levi: { fi: 'https://www.lomarengas.fi/mokit/levi', intl: 'https://www.lomarengas.fi/en/cottages/levi' },
  yllas: { fi: 'https://www.lomarengas.fi/mokit/yllas', intl: 'https://www.lomarengas.fi/en/cottages/yllas' },
  ruka: { fi: 'https://www.lomarengas.fi/mokit/ruka', intl: 'https://www.lomarengas.fi/en/cottages/ruka' },
  saariselka: { fi: 'https://www.lomarengas.fi/mokit/saariselka', intl: 'https://www.lomarengas.fi/en/cottages/saariselka' },
} as const;

export type LomarengasArea = keyof typeof LOMARENGAS_AREAS;

export function buildLomarengasUrl(area: LomarengasArea, sid: string, lang: Lang = 'en'): string {
  const dest = lang === 'fi' ? LOMARENGAS_AREAS[area].fi : LOMARENGAS_AREAS[area].intl;
  return `${REDIRECT_BASE}/go/lomarengas?sid=${encodeURIComponent(sid)}&dest=${encodeURIComponent(dest)}`;
}

/** Default EN-locale exports (backward compat — existing pages reference these as objects). */
export const HOTEL_SEARCH = buildHotelSearchLang('en');
export const PROPERTY_SEARCH = buildPropertySearchLang('en');
export const CARS = buildCarsLang('en');

/** Locale-aware factories — use these when you need DE/FI URLs. */
export const HOTEL_SEARCH_FOR = buildHotelSearchLang;
export const PROPERTY_SEARCH_FOR = buildPropertySearchLang;
export const CARS_FOR = buildCarsLang;

/**
 * Anchor any hotels search to Finnish Lapland. A bare "Lapland"/"Levi"/etc.
 * makes Hotels.com geocode to *Lapland, Indiana, USA* — a real revenue/trust
 * bug (Vesa 2026-07-08). Force ", Finland" onto every hotels query that does
 * not already name the country; leave cars/activities queries untouched.
 * Callers cannot re-introduce the bug.
 */
function anchorHotelsSs(partner: string, destination: string): string {
  const isHotels = partner === "hotels" || partner === "hotels-seasonal" || partner === "hotels-budget";
  if (!isHotels) return destination;
  return /finland|suomi/i.test(destination) ? destination : `${destination.replace(/[\s,]+$/, "")}, Finland`;
}
