import type { Copy } from './TravelSearchWidget.copy.types'

const copy: Copy = {
    destination: 'Bestemming',
    guests: 'Gasten',
    checkIn: 'Inchecken',
    checkOut: 'Uitchecken',
    helsinkiTo: 'Helsinki naar',
    depart: 'Heenreis',
    return: 'Terugreis',
    pickUpLocation: 'Ophaallocatie',
    pickUpDate: 'Ophaaldatum',
    dropOffDate: 'Retourdatum',
    tabs: { hotels: 'Hotels & cabins', flights: 'Vluchten', cars: 'Autoverhuur' },
    searchHotels: 'Hotels & cabins zoeken',
    searchFlights: 'Vluchten zoeken',
    compareCars: 'Autoverhuur vergelijken',
    poweredBy: (provider: string) => `Aangeboden door ${provider}, u boekt veilig op hun platform`,
    guestSingular: 'gast',
    guestPlural: 'gasten',
    destOptions: {
      all: 'Heel Fins Lapland (Rovaniemi)',
    },
    groups: {
      resorts: 'Skigebieden en dorpen',
      municipalities: 'Gemeenten en steden',
      airports: 'Luchthavens',
      towns: 'Stadscentra en stations',
    },
  }

export default copy