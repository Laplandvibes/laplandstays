import type { Copy } from './TravelSearchWidget.copy.types'

const copy: Copy = {
    destination: 'Destino',
    guests: 'Hóspedes',
    checkIn: 'Check-in',
    checkOut: 'Check-out',
    helsinkiTo: 'Helsinki para',
    depart: 'Ida',
    return: 'Volta',
    pickUpLocation: 'Local de retirada',
    pickUpDate: 'Data de retirada',
    dropOffDate: 'Data de devolução',
    tabs: { hotels: 'Hotéis e cabanas', flights: 'Voos', cars: 'Aluguel de carros' },
    searchHotels: 'Buscar hotéis e cabanas',
    searchFlights: 'Buscar voos',
    compareCars: 'Comparar aluguéis',
    poweredBy: (provider: string) => `Fornecido por ${provider}, você reserva com segurança na plataforma deles`,
    guestSingular: 'hóspede',
    guestPlural: 'hóspedes',
    destOptions: {
      all: 'Toda a Lapônia finlandesa (Rovaniemi)',
    },
    groups: {
      resorts: 'Estações de esqui e vilarejos',
      municipalities: 'Municípios e cidades',
      airports: 'Aeroportos',
      towns: 'Centros e estações',
    },
  }

export default copy