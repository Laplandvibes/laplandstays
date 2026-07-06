import type { Copy } from './TravelSearchWidget.copy.types'

const copy: Copy = {
    destination: 'Destinazione',
    guests: 'Ospiti',
    checkIn: 'Check-in',
    checkOut: 'Check-out',
    helsinkiTo: 'Helsinki verso',
    depart: 'Andata',
    return: 'Ritorno',
    pickUpLocation: 'Luogo di ritiro',
    pickUpDate: 'Data di ritiro',
    dropOffDate: 'Data di riconsegna',
    tabs: { hotels: 'Hotel & chalet', flights: 'Voli', cars: 'Autonoleggio' },
    searchHotels: 'Cerca hotel & chalet',
    searchFlights: 'Cerca voli',
    compareCars: 'Confronta autonoleggi',
    poweredBy: (provider: string) => `Servizio offerto da ${provider}, la prenotazione avviene in sicurezza sulla loro piattaforma`,
    guestSingular: 'ospite',
    guestPlural: 'ospiti',
    destOptions: {
      all: "Tutta la Lapponia finlandese (Rovaniemi)",
    },
  }

export default copy