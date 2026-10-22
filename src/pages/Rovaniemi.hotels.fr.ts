import type { RovaniemiHotelsCopy } from './Rovaniemi.hotels.types'

/**
 * Hôtels de Rovaniemi par secteur, français (France, vouvoiement), 22.10.2026. Traduit de
 * Rovaniemi.hotels.en.ts : mêmes faits, mêmes nombres, aucun ajout. Noms d’hôtels dans rovaniemiHotels.ts.
 */
const fr: RovaniemiHotelsCopy = {
  intro: '20 hôtels répartis en quatre secteurs. Chaque nom ouvre la page de l’hôtel chez notre partenaire de réservation, avec les prix pour vos dates de séjour.',
  groups: [
    {
      title: 'Centre-ville',
      items: [
        { key: 'arcticLight', note: 'L’ancien hôtel de ville de Rovaniemi, construit en 1949 et transformé en boutique-hôtel de 57 chambres ; certaines ont leur propre sauna.' },
        { key: 'scandicRovaniemiCity', note: 'Sur Koskikatu, à côté des centres commerciaux ; le bus de l’aéroport s’arrête devant l’entrée, et les chambres Superior Sauna ont un sauna privatif.' },
        { key: 'scandicPohjanhovi', note: 'Au bord du Kemijoki ; de nombreuses chambres ont vue sur la rivière, et en hiver les itinéraires de motoneige partent devant l’hôtel.' },
        { key: 'arcticCityHotel', note: '90 chambres sur Pekankatu. Le petit-déjeuner, le sauna, le parking et le wifi sont inclus dans tous les tarifs, et l’arrêt du bus de l’aéroport est à 300 m.' },
        { key: 'sokosVaakuna', note: '159 chambres sur Koskikatu, avec des saunas communs ouverts tous les soirs.' },
        { key: 'santasHotelSantaClaus', note: 'En centre-ville, sur Korkalonkatu, à environ 10 km de l’aéroport, avec son propre espace sauna.' },
        { key: 'postmasterHotel', note: 'Un ancien bureau de poste des années 1950, restauré, avec 49 chambres ; certaines suites ont une kitchenette et un sauna.' },
        { key: 'hotelAakenus', note: 'Hôtel familial dans un quartier calme, à quelques minutes à pied du centre : 45 chambres et 20 appartements avec cuisine.' },
      ],
    },
    {
      title: 'Colline d’Ounasvaara',
      items: [
        { key: 'skyOunasvaara', note: 'Au sommet de l’Ounasvaara, à 4 km du centre et à 20 m de la piste la plus proche ; chambres avec sauna et chambres familiales.' },
        { key: 'laplandHotelsOunasvaara', note: 'Chalets et appartements de vacances entre le Kemijoki et les pistes de ski, chacun avec sauna privatif et cuisine ; à 3 km du centre.' },
        { key: 'santasport', note: 'Un centre d’entraînement olympique en bordure des sentiers de l’Ounasvaara, à 2 km du centre ; certaines chambres ont un sauna et un balcon.' },
      ],
    },
    {
      title: 'Village du Père Noël et cercle polaire arctique',
      items: [
        { key: 'santaClausHolidayVillage', note: 'Sur le cercle polaire arctique, au Village du Père Noël : chalets, suites et igloos de verre, tous avec sauna privatif.' },
        { key: 'santasIgloosArcticCircle', note: 'Igloos de verre orientés au nord au Village du Père Noël, chacun avec son alerte aurores ; à 5 km de l’aéroport.' },
        { key: 'arcticTreeHouse', note: 'Suites à paroi entièrement vitrée sur un versant boisé, à 100 m de SantaPark et à 2,2 km du Village du Père Noël.' },
        { key: 'novaSkyland', note: 'Chaque chambre et chaque chalet a son sauna privatif ; à environ 300 m du Village du Père Noël et à 5 minutes en voiture de l’aéroport.' },
        { key: 'glassResort', note: 'Appartements vitrés avec sauna privatif et bain à remous extérieur, dans une forêt au sein du Village du Père Noël.' },
      ],
    },
    {
      title: 'Hors de la ville',
      items: [
        { key: 'apukka', note: 'Igloos de verre entre deux lacs sauvages, à 18 km de la ville, avec une navette du resort jusqu’au centre.' },
        { key: 'arcticSnowHotel', note: 'Un hôtel de neige et de glace dès le 15 décembre, et des igloos de verre chauffés au toit vitré à 360°, à 26 km du centre.' },
        { key: 'invisibleForest', note: 'Suites en verre miroir avec sauna privatif, bain à remous extérieur et cuisine, au bord de l’Ounasjoki, à moins de 10 minutes du centre en voiture.' },
        { key: 'silverBirch', note: 'Seulement cinq cabanes de verre, à trois mètres du sol au bord d’un lac près d’Oikarainen, vendues en séjours de plusieurs nuits.' },
      ],
    },
  ],
}

export default fr
