import type { Copy } from './TravelSearchWidget.copy.types'

const copy: Copy = {
    destination: 'Resmål',
    guests: 'Gäster',
    checkIn: 'Incheckning',
    checkOut: 'Utcheckning',
    helsinkiTo: 'Helsingfors till',
    depart: 'Avresa',
    return: 'Återresa',
    pickUpLocation: 'Upphämtningsplats',
    pickUpDate: 'Upphämtningsdatum',
    dropOffDate: 'Återlämningsdatum',
    tabs: { hotels: 'Hotell & stugor', flights: 'Flyg', cars: 'Hyrbil' },
    searchHotels: 'Sök hotell & stugor',
    searchFlights: 'Sök flyg',
    compareCars: 'Jämför hyrbilar',
    poweredBy: (provider: string) => `Tillhandahålls av ${provider} — du bokar säkert på deras plattform`,
    guestSingular: 'gäst',
    guestPlural: 'gäster',
    destOptions: {
      all: 'Hela finska Lappland (Rovaniemi)',
    },
  }

export default copy
