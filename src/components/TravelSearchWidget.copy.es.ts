import type { Copy } from './TravelSearchWidget.copy.types'

const copy: Copy = {
    destination: 'Destino',
    guests: 'Huéspedes',
    checkIn: 'Entrada',
    checkOut: 'Salida',
    helsinkiTo: 'Helsinki a',
    depart: 'Ida',
    return: 'Vuelta',
    pickUpLocation: 'Lugar de recogida',
    pickUpDate: 'Fecha de recogida',
    dropOffDate: 'Fecha de devolución',
    tabs: { hotels: 'Hoteles y cabañas', flights: 'Vuelos', cars: 'Alquiler de coches' },
    searchHotels: 'Buscar hoteles y cabañas',
    searchFlights: 'Buscar vuelos',
    compareCars: 'Comparar alquileres',
    poweredBy: (provider: string) => `Servido por ${provider}, reserva segura en su plataforma`,
    guestSingular: 'huésped',
    guestPlural: 'huéspedes',
    destOptions: {
      all: 'Toda la Laponia finlandesa (Rovaniemi)',
    },
    groups: {
      resorts: 'Estaciones de esquí y pueblos',
      municipalities: 'Municipios y ciudades',
      airports: 'Aeropuertos',
      towns: 'Centros urbanos y estaciones',
    },
  }

export default copy