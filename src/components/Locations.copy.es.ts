import type { Copy } from './Locations.copy.types'

const copy: Copy = {
    eyebrow: 'Dónde alojarse en Laponia',
    h2: 'Cuatro destinos, cuatro viajes diferentes',
    lead: 'Levi por acceso fácil y vida de pueblo. Ylläs por silencio. Saariselkä por iglús de cristal bajo la aurora. Inari por la quietud del extremo norte que casi nadie alcanza.',
    pricesLabel: 'Precios:',
    checkAvailability: 'Ver disponibilidad',
    guideTo: (name: string) => `Guía de ${name}`,
    locations: [
      { name: 'Levi', tagline: 'El corazón del lujo en Laponia', description: 'La mayor estación de esquí de Finlandia con un pueblo a pie de pista. Los alojamientos en Levi van desde apartamentos Lapland Hotels en el centro hasta chalets ski-in y cabañas de cristal en Levin Iglut, lo bastante cerca para cenar en el pueblo, lo bastante lejos para ver auroras con cielo oscuro.', highlights: ['Chalets ski-in', 'Restaurantes y vida nocturna', 'Menú completo de safaris'], priceFrom: 'Hoteles desde 100 €/noche · iglús de cristal desde 350 €' },
      { name: 'Ylläs', tagline: 'Naturaleza nórdica intacta', description: 'Dos fells, las pistas más largas de Finlandia y sin saturación turística, Ylläs es la hermana tranquila. Los alojamientos son cabañas de troncos dispersas por el borde del Parque Nacional Pallas-Yllästunturi, ideales cuando el silencio y el acceso a pistas importan más que el bullicio del pueblo.', highlights: ['Reino del esquí de fondo', 'Chalets con vistas al fell', 'Sin masificación'], priceFrom: 'Cabañas de troncos desde 150 €/noche' },
      { name: 'Saariselkä', tagline: 'Puerta al Ártico', description: 'Junto al Parque Nacional Urho Kekkonen, una de las últimas grandes naturalezas de Europa. Es la zona de iglús de cristal de Saariselkä, Kakslauttanen, Star Arctic y Muotka, donde los techos acristalados se cruzan con ríos auríferos y el aire se enfría de verdad.', highlights: ['Zona de iglús de cristal', 'Acceso a parque nacional', 'Zona profunda de auroras'], priceFrom: 'Iglús de Kakslauttanen desde 400 €/noche · lodges desde 200 €' },
      { name: 'Inari', tagline: 'Cultura sámi, lagos árticos', description: 'Donde la herencia sámi se encuentra con el vasto y helado lago Inari. El más remoto y exclusivo de los cuatro, cabañas a orillas privadas, Nellim Wilderness Lodge y villas de aurora en Ivalo para viajeros que miden el viaje en quietud, no en paradas.', highlights: ['Lago Inari', 'Cultura sámi', 'Lejanía del norte profundo'], priceFrom: 'Cabañas junto al lago desde 200 €/noche · Aurora Village desde 300 €' },
    ],
  }

export default copy