// Auto-generated copy types for DestinationPage.
// EN copy is the canonical source; Copy is its widened type so other
// locales can supply different strings with the same shape.

// Recursively widen literal string/number types.
type Widen<T> = T extends string ? string
  : T extends number ? number
  : T extends boolean ? boolean
  : T extends ReadonlyArray<infer U> ? Widen<U>[]
  : T extends (...args: infer A) => infer R ? (...args: A) => R
  : T extends object ? { [K in keyof T]: Widen<T[K]> }
  : T

export const en = {
    breadcrumbHome: 'Home',
    overviewEyebrow: 'Overview',
    overviewH2: (n: string) => `Why stay in ${n}`,
    seePricesIn: (n: string) => `See prices in ${n}`,
    highlightsEyebrow: 'What makes it special',
    highlightsH2: (n: string) => `Highlights of ${n}`,
    whenToGoEyebrow: 'When to go',
    seasonsH3: 'Seasons',
    gettingThereEyebrow: 'Getting there',
    travelH3: 'Travel',
    staysInEyebrow: (n: string) => `Stays in ${n}`,
    whatToBookH2: 'What to book',
    findCabinH3: (n: string) => `Find your ${n} cabin`,
    findCabinLead: 'Check availability and compare rates. No middleman fees.',
    checkAvailability: 'Check availability',
    anchorEyebrow: 'Anchor properties',
    whereToStayH2: (n: string) => `Where to stay in ${n}`,
    anchorLead: 'Click through to live Trip.com rates. Properties book 4–8 months ahead in peak season.',
    gettingThereH2: (n: string) => `Transport to ${n}`,
    transportLead: 'Real fares from operator pages, re-checked seasonally. Transfers usually pre-bookable through your property.',
    rentCarLabel: 'Rent a car · EconomyBookings',
    sampleItinerary: 'Sample itinerary',
    dayPlanH2: (n: number, name: string) => `A ${n}-day ${name} plan`,
    dayPlanLead: 'The shape of a typical aurora-season trip. Adjust by skill level; these are starting points, not prescriptions.',
    moreLapland: 'More Lapland',
    otherDestinations: 'Other destinations',
    seeStays: 'See stays',
    finnishLapland: 'Finnish Lapland',
    readMore: 'Explore in Lapland',
    planTripEyebrow: 'Beyond the stay',
    planTripH2: 'Plan the whole trip',
    planActivities: 'Activities',
    planSkiResorts: 'Ski resorts',
    planTransfers: 'Transfers',
    planCarRental: 'Car rental',
  }

export type Copy = Widen<typeof en>
