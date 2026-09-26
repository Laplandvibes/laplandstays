// Copy for the PriceGuide home-page section (lang: fr).
import type { PriceGuideCopy } from './PriceGuide.copy.en'

const copy: PriceGuideCopy = {
  eyebrow: 'Niveau de prix',
  heading: 'Hébergements de Laponie, du plus cher au plus abordable',
  lead: "Des aurores qui glissent au-dessus du toit de verre, un sauna déjà chaud et, au petit-déjeuner, une forêt enneigée et silencieuse derrière la vitre. Cinq sortes de nuits en Laponie, classées de l'inoubliable au quotidien, avec les adresses qui les incarnent. Ce que coûte une nuit varie selon la saison et la semaine : le tarif vient donc de la page de réservation, pour vos dates.",
  scale: { low: 'Plus abordable', high: 'Plus cher' },
  tiers: [
    {
      name: 'Igloos de verre',
      examples: ['Kakslauttanen Arctic Resort', 'Levin Iglut', 'Star Arctic Hotel', 'Aurora Village Ivalo', 'Nova Skyland Rovaniemi'],
      ctaLabel: 'Trouver des igloos de verre',
    },
    {
      name: 'Chalets aurores boréales',
      examples: ['Apukka Resort', 'Arctic TreeHouse Hotel', 'Arctic SnowHotel & Glass Igloos'],
      ctaLabel: 'Trouver des chalets à aurores',
    },
    {
      name: 'Hôtels de neige et de glace',
      examples: ['Lainio Snow Village (Kittilä)', 'Torassieppi Winter Village (Muonio)'],
      ctaLabel: 'Trouver des hôtels de neige',
    },
    {
      name: 'Lodges en pleine nature',
      examples: ['Muotka Wilderness Lodge (Inari)', 'Nellim Wilderness Hotel', 'Lumi Resort (Kittilä)'],
      ctaLabel: 'Trouver des lodges',
    },
    {
      name: 'Hôtels et chaînes de chalets de Laponie',
      examples: ['Lapland Hotels (plusieurs resorts)', 'Harriniva (Muonio)'],
      ctaLabel: 'Trouver hôtels et chalets',
    },
  ],
  tip: {
    label: 'Conseil de réservation.',
    pre: 'Les igloos de verre de Kakslauttanen et Levin Iglut affichent complet ',
    strong: "8 à 12 mois à l'avance",
    post: " pour la haute saison des aurores (novembre – mars). Si l'un d'eux est le point d'ancrage de votre voyage, réservez-le en premier et organisez le reste autour de cette date.",
  },
}

export default copy
