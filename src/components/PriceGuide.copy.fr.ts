// Copy for the PriceGuide home-page section (lang: fr).
import type { PriceGuideCopy } from './PriceGuide.copy.en'

const copy: PriceGuideCopy = {
  eyebrow: 'Prix des hébergements en Laponie',
  heading: "Le vrai prix d'une nuit en Laponie",
  lead: "Des aurores qui glissent au-dessus de votre toit de verre, un sauna déjà chaud, une forêt feutrée de neige derrière la fenêtre au petit-déjeuner, une nuit pareille en Laponie peut coûter 100 € comme 1 500 €. Nous avons relevé les fourchettes de prix réelles de 15 hébergements directement sur les pages de réservation, pour que vous voyiez d'un coup d'œil quel rêve est à la portée de votre budget.",
  tiers: [
    {
      name: 'Igloos de verre',
      note: 'par nuit, par igloo',
      examples: ['Kakslauttanen Arctic Resort', 'Levin Iglut', 'Star Arctic Hotel', 'Aurora Village Ivalo', 'Nova Skyland Rovaniemi'],
      ctaLabel: 'Trouver des igloos de verre',
    },
    {
      name: 'Chalets aurores boréales',
      note: 'par nuit, par chalet',
      examples: ['Apukka Resort', 'Arctic TreeHouse Hotel', 'Arctic SnowHotel & Glass Igloos'],
      ctaLabel: 'Trouver des chalets à aurores',
    },
    {
      name: 'Hôtels de neige et de glace',
      note: 'par nuit, en saison uniquement',
      examples: ['Lainio Snow Village (Kittilä)', 'Torassieppi Winter Village (Muonio)'],
      ctaLabel: 'Trouver des hôtels de neige',
    },
    {
      name: 'Lodges en pleine nature',
      note: 'par nuit, tout suites',
      examples: ['Muotka Wilderness Lodge (Inari)', 'Nellim Wilderness Hotel', 'Lumi Resort (Kittilä)'],
      ctaLabel: 'Trouver des lodges',
    },
    {
      name: 'Hôtels et chaînes de chalets de Laponie',
      note: 'par nuit, par chambre',
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
