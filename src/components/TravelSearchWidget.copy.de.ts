import type { Copy } from './TravelSearchWidget.copy.types'

const copy: Copy = {
    destination: 'Reiseziel',
    guests: 'Gäste',
    checkIn: 'Anreise',
    checkOut: 'Abreise',
    helsinkiTo: 'Helsinki nach',
    depart: 'Hinflug',
    return: 'Rückflug',
    pickUpLocation: 'Abholort',
    pickUpDate: 'Abholdatum',
    dropOffDate: 'Rückgabedatum',
    tabs: { hotels: 'Hotels & Hütten', flights: 'Flüge', cars: 'Mietwagen' },
    searchHotels: 'Hotels & Hütten suchen',
    searchFlights: 'Flüge suchen',
    compareCars: 'Mietwagen vergleichen',
    poweredBy: (provider: string) => `Bereitgestellt von ${provider}, Sie buchen sicher auf deren Plattform`,
    guestSingular: 'Gast',
    guestPlural: 'Gäste',
    destOptions: {
      all: 'Ganz Finnisch-Lappland (Rovaniemi)',
    },
    groups: {
      resorts: 'Skigebiete und Dörfer',
      municipalities: 'Gemeinden und Städte',
      airports: 'Flughäfen',
      towns: 'Innenstädte und Bahnhöfe',
    },
  }

export default copy