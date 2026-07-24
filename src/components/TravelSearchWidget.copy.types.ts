// Auto-generated copy types for TravelSearchWidget.
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
    destination: 'Destination',
    guests: 'Guests',
    checkIn: 'Check in',
    checkOut: 'Check out',
    helsinkiTo: 'Helsinki to',
    depart: 'Depart',
    return: 'Return',
    pickUpLocation: 'Pick-up location',
    pickUpDate: 'Pick-up date',
    dropOffDate: 'Drop-off date',
    tabs: { hotels: 'Hotels & Cabins', flights: 'Flights', cars: 'Car Rental' },
    searchHotels: 'Search Hotels & Cabins',
    searchFlights: 'Search Flights',
    compareCars: 'Compare Car Rentals',
    poweredBy: (provider: string) => `Powered by ${provider}: you book securely on their platform`,
    guestSingular: 'Guest',
    guestPlural: 'Guests',
    destOptions: {
      all: 'All of Finnish Lapland (Rovaniemi)',
    },
  }

export type Copy = Widen<typeof en>
