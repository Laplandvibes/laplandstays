import type { Copy } from './PropertyTypes.copy.types'

const copy: Copy = {
    eyebrow: 'La collection',
    h2: "Quatre types d'hébergement en Laponie",
    lead: "Iglous en verre, chalets aurores, chalets ski-in ou lodges design en pleine nature, choisissez la nuit pour laquelle vous êtes venu. Tarifs vérifiés, réservation directe, disponibilité pour vos dates.",
    checkAvailability: 'Vérifier la disponibilité',
    types: [
      {
        title: 'Iglous en verre & chalets aurores',
        short: 'Endormez-vous sous les aurores boréales.',
        body: "L'igloo de verre lapon dans sa forme la plus pure, chambres à toit vitré à Kakslauttanen, Levin Iglut, Star Arctic et Aurora Village, conçues pour les voyageurs qui suivent les prévisions d'aurore.",
        priceFrom: 'à partir de 250 €/nuit',
      },
      {
        title: 'Chalets aurores au bord du lac',
        short: 'Sauna, lac gelé, silence.',
        body: 'Séjours classiques en chalet lapon, cabanes en rondins au bord du lac avec sauna privé, pas de pin devant la porte et horizon dégagé sur les aurores au-dessus des eaux arctiques.',
        priceFrom: 'à partir de 150 €/nuit',
      },
      {
        title: 'Chalets ski-in & hôtels de Laponie',
        short: 'Réveillez-vous sur la piste.',
        body: "Chalets ski-in et appartements Lapland Hotels à Levi, Ylläs et Pyhä, sortez, chaussez vos skis, partez. Restaurants à pied, safaris au départ de l'hôtel.",
        priceFrom: 'à partir de 100 €/nuit',
      },
      {
        title: 'Cabanes arctiques & lodges design',
        short: 'Luxe discret en pleine nature.',
        body: "Hébergement de luxe en Laponie avec une vraie conviction architecturale, Arctic TreeHouse Hotel, Muotka Wilderness Lodge et Nellim. Lignes épurées, bois chaleureux, vues panoramiques sur les fells.",
        priceFrom: 'à partir de 200 €/nuit',
      },
    ],
  }

export default copy