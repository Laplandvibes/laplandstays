import type { Copy } from './TravelSearchWidget.copy.types'

const copy: Copy = {
    destination: 'Destination',
    guests: 'Voyageurs',
    checkIn: 'Arrivée',
    checkOut: 'Départ',
    helsinkiTo: 'Helsinki vers',
    depart: 'Aller',
    return: 'Retour',
    pickUpLocation: 'Lieu de prise en charge',
    pickUpDate: 'Date de prise en charge',
    dropOffDate: 'Date de retour',
    tabs: { hotels: 'Hôtels & chalets', flights: 'Vols', cars: 'Location de voiture' },
    searchHotels: 'Rechercher hôtels & chalets',
    searchFlights: 'Rechercher des vols',
    compareCars: 'Comparer les locations',
    poweredBy: (provider: string) => `Propulsé par ${provider}, vous réservez en toute sécurité sur sa plateforme`,
    guestSingular: 'voyageur',
    guestPlural: 'voyageurs',
    destOptions: {
      all: 'Toute la Laponie finlandaise (Rovaniemi)',
    },
  }

export default copy