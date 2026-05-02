// Trip.com affiliate deep-link builders.
//
// Account approved by Trip.com (Vesa, 2026-04-30):
//   Allianceid = 8175308
//   SID        = 309472136  (currently the laplandvibes.com site ID; will be
//                            swapped to a laplandstays.com-specific SID once
//                            Vesa adds the site in the Trip.com Sites
//                            dashboard. Until then everything still tracks —
//                            we just can't split clicks per LV domain.)
//
// All builders attach four affiliate params so revenue attribution works:
//   Allianceid   - account
//   SID          - per-site
//   trip_sub1    - source domain ("laplandstays.com")
//   trip_sub2    - placement tag, snake_case (e.g. "transport_flight_hel_rvn")
//
// Trip.com URLs DO NOT route through go.laplandvibes.com (that worker is CJ-
// only). Trip.com is on Impact / direct, so links go straight to trip.com.

const TRIP_CONFIG = {
  allianceId: '8175308',
  defaultSiteId: '309472136',
  sourceTag: 'laplandstays.com',
} as const;

function defaultDate(daysFromNow: number): string {
  const d = new Date();
  d.setDate(d.getDate() + daysFromNow);
  return d.toISOString().slice(0, 10);
}

function attachAffiliateParams(url: URL, sid: string): void {
  url.searchParams.set('Allianceid', TRIP_CONFIG.allianceId);
  url.searchParams.set('SID', TRIP_CONFIG.defaultSiteId);
  url.searchParams.set('trip_sub1', TRIP_CONFIG.sourceTag);
  url.searchParams.set('trip_sub2', sid);
}

// ─── Flights ────────────────────────────────────────────────────────────

export interface TripFlightOpts {
  /** IATA code, lowercase. e.g. 'hel', 'rvn', 'ktt' */
  from: string;
  /** IATA code, lowercase. */
  to: string;
  /** snake_case placement tag */
  sid: string;
  /** YYYY-MM-DD; default = today + 30 */
  depart?: string;
  /** YYYY-MM-DD; default = depart + 4 */
  returnDate?: string;
  /** 'rt' (default round-trip) or 'ow' (one-way) */
  triptype?: 'rt' | 'ow';
}

/**
 * Deep link straight into a Trip.com flight search RESULTS page with the
 * user's origin, destination and dates pre-filled. The user lands on a
 * page that already shows Finnair / Norwegian fares — minimum click depth
 * to "book".
 */
export function buildTripFlightUrl(o: TripFlightOpts): string {
  const url = new URL('https://www.trip.com/flights/showfarefirst');
  const triptype = o.triptype ?? 'rt';
  const depart = o.depart ?? defaultDate(30);
  url.searchParams.set('dcity', o.from.toLowerCase());
  url.searchParams.set('acity', o.to.toLowerCase());
  url.searchParams.set('ddate', depart);
  url.searchParams.set('triptype', triptype);
  if (triptype === 'rt') {
    url.searchParams.set('rdate', o.returnDate ?? defaultDate(34));
  }
  url.searchParams.set('class', 'y');
  url.searchParams.set('quantity', '1');
  url.searchParams.set('curr', 'EUR');
  url.searchParams.set('locale', 'en-XX');
  attachAffiliateParams(url, o.sid);
  return url.toString();
}

/** Generic Trip.com flight homepage (affiliate-tagged). Use only when
 *  there's no concrete origin/destination context — e.g. a footer link. */
export function buildTripFlightHome(sid: string): string {
  const url = new URL('https://www.trip.com/flights');
  attachAffiliateParams(url, sid);
  return url.toString();
}

// ─── Buses & Trains (Trip.com /trains/list with tripTab) ─────────────────

export interface TripTransportOpts {
  /** Display city name as Trip.com expects, e.g. 'Helsinki' */
  fromCity: string;
  toCity: string;
  /** snake_case placement tag */
  sid: string;
  /** 'coach' (FlixBus + others) or 'train'. Default 'coach' — Finland's
   *  rail catalogue on Trip.com is thin; coach has FlixBus + Onnibus. */
  tab?: 'coach' | 'train';
  /** YYYY-MM-DD; default = today + 14 */
  depart?: string;
}

/**
 * Deep link into a Trip.com bus/train search RESULTS page with origin,
 * destination, date and the requested mode tab pre-filled.
 *
 * Verified working URL pattern (Vesa, 2026-04-30) for Helsinki → Rovaniemi
 * coach: shows €25.98 FlixBus services. For train tab on the same pair,
 * Trip.com renders "Trains: Not available" — that's a real catalogue gap,
 * not a builder bug. The page still shows the bus alternative inline so
 * the user has a path forward.
 */
export function buildTripTransportUrl(o: TripTransportOpts): string {
  const url = new URL('https://www.trip.com/trains/list');
  url.searchParams.set('locale', 'en-XX');
  url.searchParams.set('curr', 'EUR');
  url.searchParams.set('departurecity', o.fromCity);
  url.searchParams.set('arrivalcity', o.toCity);
  url.searchParams.set('tripTab', o.tab ?? 'coach');
  url.searchParams.set('departdate', o.depart ?? defaultDate(14));
  url.searchParams.set('hidadultnum', '1');
  url.searchParams.set('hidinfantnum', '0');
  url.searchParams.set('hidoldnum', '0');
  attachAffiliateParams(url, o.sid);
  return url.toString();
}

/** Generic Trip.com trains/buses homepage (affiliate-tagged). */
export function buildTripTransportHome(sid: string, tab: 'coach' | 'train' = 'coach'): string {
  const url = new URL('https://www.trip.com/trains');
  url.searchParams.set('tripTab', tab);
  attachAffiliateParams(url, sid);
  return url.toString();
}

// ─── Convenience presets used across the site ───────────────────────────

const COMMON_PAIRS = {
  hel_rvn: { from: 'hel', to: 'rvn', fromCity: 'Helsinki', toCity: 'Rovaniemi' },
  hel_ktt: { from: 'hel', to: 'ktt', fromCity: 'Helsinki', toCity: 'Kittilä' },
  hel_ivl: { from: 'hel', to: 'ivl', fromCity: 'Helsinki', toCity: 'Ivalo' },
  hel_enf: { from: 'hel', to: 'enf', fromCity: 'Helsinki', toCity: 'Enontekiö' },
  hel_kem: { from: 'hel', to: 'kem', fromCity: 'Helsinki', toCity: 'Kemi' },
  hel_oul: { from: 'hel', to: 'oul', fromCity: 'Helsinki', toCity: 'Oulu' },
} as const;

/** Pre-built flight deep-links for the most common origin/destination pairs. */
export const TRIP_FLIGHTS = {
  helToRovaniemi: buildTripFlightUrl({ ...COMMON_PAIRS.hel_rvn, sid: 'transport_flight_hel_rvn' }),
  helToKittila:   buildTripFlightUrl({ ...COMMON_PAIRS.hel_ktt, sid: 'transport_flight_hel_ktt' }),
  helToIvalo:     buildTripFlightUrl({ ...COMMON_PAIRS.hel_ivl, sid: 'transport_flight_hel_ivl' }),
  helToEnontekio: buildTripFlightUrl({ ...COMMON_PAIRS.hel_enf, sid: 'transport_flight_hel_enf' }),
  helToKemi:      buildTripFlightUrl({ ...COMMON_PAIRS.hel_kem, sid: 'transport_flight_hel_kem' }),
  helToOulu:      buildTripFlightUrl({ ...COMMON_PAIRS.hel_oul, sid: 'transport_flight_hel_oul' }),
};

/** Pre-built bus/coach deep-links — these show real FlixBus prices. */
export const TRIP_BUSES = {
  helToRovaniemi: buildTripTransportUrl({ ...COMMON_PAIRS.hel_rvn, sid: 'transport_bus_hel_rvn' }),
  helToKittila:   buildTripTransportUrl({ ...COMMON_PAIRS.hel_ktt, sid: 'transport_bus_hel_ktt' }),
  helToOulu:      buildTripTransportUrl({ ...COMMON_PAIRS.hel_oul, sid: 'transport_bus_hel_oul' }),
};

/** Pre-built train deep-links (sparse Finnish coverage on Trip.com — when
 *  unavailable the page shows the coach alternative). */
export const TRIP_TRAINS = {
  helToRovaniemi: buildTripTransportUrl({ ...COMMON_PAIRS.hel_rvn, tab: 'train', sid: 'transport_train_hel_rvn' }),
  helToOulu:      buildTripTransportUrl({ ...COMMON_PAIRS.hel_oul, tab: 'train', sid: 'transport_train_hel_oul' }),
};
