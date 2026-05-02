// All affiliate CTAs route through go.laplandvibes.com — never raw partner URLs.
// Worker resolves per-site CJ Website ID from Referer (laplandstays.com -> 101729772).
// Spec: "LaplandVibes Affiliate System — Developer Handoff" (2026-04-25).

const REDIRECT_BASE = 'https://go.laplandvibes.com'

export type Partner =
  | 'hotels'
  | 'hotels-seasonal'
  | 'hotels-budget'
  | 'cars'
  | 'activities'

export interface BuildAffiliateOptions {
  partner: Partner
  sid: string
  /** Hotels: property/city query (?ss=). Activities: GYG slug (e.g. `rovaniemi-l2653`). */
  destination?: string
  /** Any additional query params (checkin, pickup_date, adults, etc). */
  query?: Record<string, string | number | undefined>
}

export function buildAffiliateUrl({
  partner,
  sid,
  destination,
  query,
}: BuildAffiliateOptions): string {
  const params = new URLSearchParams()
  params.set('sid', sid)

  if (destination && partner !== 'activities') {
    params.set('ss', destination)
  }

  if (query) {
    for (const [k, v] of Object.entries(query)) {
      if (v !== undefined && v !== null && v !== '') {
        params.set(k, String(v))
      }
    }
  }

  let pathname = `/go/${partner}`
  if (partner === 'activities' && destination) {
    pathname = `/go/activities/${destination}`
  }

  return `${REDIRECT_BASE}${pathname}?${params.toString()}`
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
export const HOTEL_SEARCH = {
  // Generic landings — used by Nav "Book Now" and homepage hero CTA.
  // Pinned to Rovaniemi so the result page actually shows Lapland properties.
  lapland: buildAffiliateUrl({ partner: 'hotels', sid: 'hero_cta', destination: 'Rovaniemi, Finland' }),
  navBookNow: buildAffiliateUrl({ partner: 'hotels', sid: 'nav_book_now', destination: 'Rovaniemi, Finland' }),

  // Destinations (real Hotels.com locations).
  levi: buildAffiliateUrl({ partner: 'hotels', sid: 'destination_levi', destination: 'Levi, Finland' }),
  yllas: buildAffiliateUrl({ partner: 'hotels', sid: 'destination_yllas', destination: 'Ylläs, Finland' }),
  saariselka: buildAffiliateUrl({ partner: 'hotels', sid: 'destination_saariselka', destination: 'Saariselkä, Finland' }),
  inari: buildAffiliateUrl({ partner: 'hotels', sid: 'destination_inari', destination: 'Inari, Finland' }),
  rovaniemi: buildAffiliateUrl({ partner: 'hotels', sid: 'destination_rovaniemi', destination: 'Rovaniemi, Finland' }),

  // Property categories — point at the city where the category is concentrated.
  // SID still records the category; user lands on real results, not a 0-hit page.
  auroraGlass: buildAffiliateUrl({ partner: 'hotels', sid: 'property_aurora_glass', destination: 'Saariselkä, Finland' }),
  lakesideCabin: buildAffiliateUrl({ partner: 'hotels', sid: 'property_lakeside_cabin', destination: 'Inari, Finland' }),
  mountainChalet: buildAffiliateUrl({ partner: 'hotels', sid: 'property_mountain_chalet', destination: 'Levi, Finland' }),
  designerLodge: buildAffiliateUrl({ partner: 'hotels', sid: 'property_designer_lodge', destination: 'Saariselkä, Finland' }),
  hotel: buildAffiliateUrl({ partner: 'hotels', sid: 'property_hotel', destination: 'Rovaniemi, Finland' }),
  apartment: buildAffiliateUrl({ partner: 'hotels', sid: 'property_apartment', destination: 'Levi, Finland' }),
}

// ─── Specific properties — deep-link via ?ss=PROPERTY_NAME ───────────────────
// Spec section 8: when a card features a known property, send the visitor to
// Hotels.com with that property name pre-filled.
export const PROPERTY_SEARCH = {
  kakslauttanen: buildAffiliateUrl({ partner: 'hotels', sid: 'property_card', destination: 'Kakslauttanen Arctic Resort' }),
  levinIglut: buildAffiliateUrl({ partner: 'hotels', sid: 'property_card', destination: 'Levin Iglut' }),
  arcticTreeHouse: buildAffiliateUrl({ partner: 'hotels', sid: 'property_card', destination: 'Arctic TreeHouse Hotel' }),
  starArctic: buildAffiliateUrl({ partner: 'hotels', sid: 'property_card', destination: 'Star Arctic Hotel' }),
  auroraVillage: buildAffiliateUrl({ partner: 'hotels', sid: 'property_card', destination: 'Aurora Village Ivalo' }),
  arcticSnowHotel: buildAffiliateUrl({ partner: 'hotels', sid: 'property_card', destination: 'Arctic Snow Hotel' }),
  nellim: buildAffiliateUrl({ partner: 'hotels', sid: 'property_card', destination: 'Wilderness Hotel Nellim' }),
  muotka: buildAffiliateUrl({ partner: 'hotels', sid: 'property_card', destination: 'Wilderness Hotel Muotka' }),
  novaSkyland: buildAffiliateUrl({ partner: 'hotels', sid: 'property_card', destination: 'Novasky Land' }),
  apukka: buildAffiliateUrl({ partner: 'hotels', sid: 'property_card', destination: 'Apukka Resort Rovaniemi' }),
  laplandHotels: buildAffiliateUrl({ partner: 'hotels', sid: 'property_card', destination: 'Lapland Hotels' }),
  harriniva: buildAffiliateUrl({ partner: 'hotels', sid: 'property_card', destination: 'Harriniva' }),
}

// ─── EconomyBookings (cars) ──────────────────────────────────────────────────
export const CARS = {
  fromHelsinki: buildAffiliateUrl({ partner: 'cars', sid: 'cars_helsinki', query: { pickup_location: 'HEL' } }),
  fromRovaniemi: buildAffiliateUrl({ partner: 'cars', sid: 'cars_rovaniemi', query: { pickup_location: 'RVN' } }),
  fromKittila: buildAffiliateUrl({ partner: 'cars', sid: 'cars_kittila', query: { pickup_location: 'KTT' } }),
  fromIvalo: buildAffiliateUrl({ partner: 'cars', sid: 'cars_ivalo', query: { pickup_location: 'IVL' } }),
  generic: buildAffiliateUrl({ partner: 'cars', sid: 'cars_generic' }),
}
