import type { Copy } from './TravelSearchWidget.copy.types'

const copy: Copy = {
    destination: 'Kohde',
    guests: 'Vieraat',
    checkIn: 'Saapuminen',
    checkOut: 'Lähtö',
    helsinkiTo: 'Helsingistä',
    depart: 'Meno',
    return: 'Paluu',
    pickUpLocation: 'Noutopaikka',
    pickUpDate: 'Noutopäivä',
    dropOffDate: 'Palautuspäivä',
    tabs: { hotels: 'Hotellit ja mökit', flights: 'Lennot', cars: 'Vuokra-auto' },
    searchHotels: 'Hae hotelleja ja mökkejä',
    searchFlights: 'Hae lentoja',
    compareCars: 'Vertaa vuokra-autoja',
    poweredBy: (provider: string) => `Tarjoaa ${provider}, varaat turvallisesti heidän sivuillaan`,
    guestSingular: 'vieras',
    guestPlural: 'vierasta',
    destOptions: {
      all: 'Koko Suomen Lappi (Rovaniemi)',
    },
  }

export default copy