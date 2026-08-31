import type { Copy } from './Locations.copy.types'

const copy: Copy = {
    eyebrow: 'Où loger en Laponie',
    h2: 'Quatre destinations, quatre voyages différents',
    lead: "Levi pour l'accès facile et la vie de village. Ylläs pour le silence. Saariselkä pour les igloos de verre sous l'aurore. Inari pour la quiétude du Grand Nord que presque personne n'atteint.",
    pricesLabel: 'Prix :',
    checkAvailability: 'Vérifier la disponibilité',
    guideTo: (name: string) => `Guide de ${name}`,
    locations: [
      { name: 'Levi', tagline: 'Le cœur du luxe en Laponie', description: "La plus grande station de ski de Finlande, avec un village à pied au pied du fjäll. L'offre s'étend des appartements Lapland Hotels au centre aux chalets ski-in et chalets de verre de Levin Iglut, assez près pour dîner au village, assez loin pour observer l'aurore sous un ciel noir.", highlights: ['Chalets ski-in', 'Restaurants et vie nocturne', 'Carte complète de safaris'], priceFrom: 'Hôtels à partir de 100 €/nuit · igloos de verre à partir de 350 €' },
      { name: 'Ylläs', tagline: 'Nature nordique préservée', description: 'Deux fjälls, les plus longues pistes de Finlande, et aucun habillage de station, Ylläs est la sœur tranquille. Les hébergements sont des chalets en rondins éparpillés en bordure du parc national Pallas-Yllästunturi, parfaits quand le silence et l\'accès aux pistes priment sur l\'animation du village.', highlights: ['Royaume du ski de fond', 'Chalets avec vue sur le fjäll', 'Sans foule'], priceFrom: 'Chalets en rondins à partir de 150 €/nuit' },
      { name: 'Saariselkä', tagline: "Porte de l'Arctique", description: "Bordé par le parc national Urho Kekkonen, l'une des dernières grandes étendues sauvages d'Europe. C'est le territoire des igloos de verre de Saariselkä, Kakslauttanen, Star Arctic et Muotka, où les toits de verre côtoient des rivières aurifères et où l'air devient vraiment froid.", highlights: ['Pays des igloos de verre', 'Accès au parc national', "Zone profonde d'aurores"], priceFrom: 'Igloos de verre Kakslauttanen à partir de 400 €/nuit · lodges à partir de 200 €' },
      { name: 'Inari', tagline: 'Culture sámi, lacs arctiques', description: "Là où l'héritage sámi rencontre le vaste lac Inari gelé. Le plus reculé et le plus exclusif des quatre, chalets sur rives privées, lodge Nellim dans la nature et villas auroras à Ivalo, pour les voyageurs qui mesurent un séjour à la quiétude, pas aux arrêts.", highlights: ['Lac Inari', 'Culture sámi', 'Isolement du Grand Nord'], priceFrom: 'Chalets au bord du lac à partir de 200 €/nuit · Aurora Village à partir de 300 €' },
    ],
  }

export default copy