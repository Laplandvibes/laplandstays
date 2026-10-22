import type { RovaniemiHotelsCopy } from './Rovaniemi.hotels.types'

/**
 * Hoteles de Rovaniemi por zona, español de España (22.10.2026). Traducido de Rovaniemi.hotels.en.ts:
 * mismos datos, ningún número que el inglés no tenga (numeroportti). Tratamiento de usted y
 * vocabulario del sitio (Pueblo de Papá Noel, Círculo Polar Ártico, fjäll, socio de reservas).
 */
const es: RovaniemiHotelsCopy = {
  intro: '20 hoteles en cuatro zonas. Cada nombre abre la página de ese hotel en nuestro socio de reservas, con precios para sus fechas de viaje.',
  groups: [
    {
      title: 'Centro de la ciudad',
      items: [
        { key: 'arcticLight', note: 'El antiguo ayuntamiento de Rovaniemi, construido en 1949, es hoy un hotel boutique de 57 habitaciones; algunas tienen sauna propia.' },
        { key: 'scandicRovaniemiCity', note: 'En Koskikatu, junto a los centros comerciales. El autobús del aeropuerto para en la puerta, y las habitaciones Superior Sauna tienen sauna privada.' },
        { key: 'scandicPohjanhovi', note: 'A orillas del Kemijoki. Muchas habitaciones dan al río, y en invierno las rutas de moto de nieve empiezan delante del hotel.' },
        { key: 'arcticCityHotel', note: '90 habitaciones en Pekankatu. Todas las tarifas incluyen desayuno, sauna, aparcamiento y wifi, y el autobús del aeropuerto para a 300 m.' },
        { key: 'sokosVaakuna', note: '159 habitaciones en Koskikatu, con saunas compartidas abiertas todas las tardes.' },
        { key: 'santasHotelSantaClaus', note: 'En el centro, en Korkalonkatu, a unos 10 km del aeropuerto, con instalaciones de sauna propias.' },
        { key: 'postmasterHotel', note: 'Un antiguo edificio de correos de la década de 1950, restaurado, con 49 habitaciones; algunas suites tienen una pequeña cocina y sauna.' },
        { key: 'hotelAakenus', note: 'De gestión familiar, en una zona tranquila a poca distancia a pie del centro: 45 habitaciones y 20 apartamentos con cocina.' },
      ],
    },
    {
      title: 'Fjäll Ounasvaara',
      items: [
        { key: 'skyOunasvaara', note: 'En lo alto del Ounasvaara, a 4 km del centro y a 20 m de la pista más cercana; habitaciones con sauna y habitaciones familiares.' },
        { key: 'laplandHotelsOunasvaara', note: 'Cabañas y apartamentos vacacionales entre el río Kemijoki y las pistas de esquí, cada uno con sauna privada y cocina; a 3 km del centro.' },
        { key: 'santasport', note: 'Un centro de entrenamiento olímpico junto a las rutas del Ounasvaara, a 2 km del centro; algunas habitaciones tienen sauna y balcón.' },
      ],
    },
    {
      title: 'Pueblo de Papá Noel y Círculo Polar Ártico',
      items: [
        { key: 'santaClausHolidayVillage', note: 'Sobre el Círculo Polar Ártico, en el Pueblo de Papá Noel: cabañas, suites y cabañas iglú de cristal, todas con sauna privada.' },
        { key: 'santasIgloosArcticCircle', note: 'Iglús de cristal orientados al norte en el Pueblo de Papá Noel, cada uno con alarma de auroras; a 5 km del aeropuerto.' },
        { key: 'arcticTreeHouse', note: 'Suites con una pared entera de cristal en una ladera boscosa, a 100 m de SantaPark y a 2,2 km del Pueblo de Papá Noel.' },
        { key: 'novaSkyland', note: 'Sauna privada en todas las habitaciones y cabañas; a unos 300 m del Pueblo de Papá Noel y a 5 minutos en coche del aeropuerto.' },
        { key: 'glassResort', note: 'Apartamentos de cristal con sauna privada y jacuzzi exterior, en un bosque dentro del Pueblo de Papá Noel.' },
      ],
    },
    {
      title: 'Fuera de la ciudad',
      items: [
        { key: 'apukka', note: 'Iglús de cristal entre dos lagos en plena naturaleza, a 18 km de la ciudad, con autobús lanzadera propio hasta el centro.' },
        { key: 'arcticSnowHotel', note: 'Un hotel de nieve y hielo desde el 15 de diciembre e iglús de cristal con calefacción y techo de cristal de 360°, a 26 km del centro.' },
        { key: 'invisibleForest', note: 'Suites de cristal espejado con sauna privada, jacuzzi exterior y cocina, junto al río Ounasjoki, a menos de 10 minutos en coche del centro.' },
        { key: 'silverBirch', note: 'Solo cinco cabañas de cristal, elevadas tres metros sobre el suelo a orillas de un lago cerca de Oikarainen; se venden como estancias de varias noches.' },
      ],
    },
  ],
}

export default es
