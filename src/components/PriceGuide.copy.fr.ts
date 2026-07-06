// Copy for the PriceGuide home-page section (lang: fr).
import type { PriceGuideCopy } from './PriceGuide.copy.en'

const copy: PriceGuideCopy = {
  eyebrow: 'Prix des hébergements en Laponie',
  heading: "Le vrai prix d'une nuit en Laponie",
  lead: "Des aurores qui glissent au-dessus de votre toit de verre, un sauna déjà chaud, une forêt feutrée de neige derrière la fenêtre au petit-déjeuner, une nuit pareille en Laponie peut coûter €100 comme €1,500. Nous avons relevé les fourchettes de prix réelles de 15 hébergements directement sur les pages de réservation, pour que vous voyiez d'un coup d'œil quel rêve est à la portée de votre budget.",
  propertiesLabel: 'Hébergements :',
  tiers: [
    {
      name: 'Igloos de verre',
      keyword: 'igloo de verre laponie',
      range: '€250 – €1,500',
      note: 'par nuit, par igloo',
      examples: ['Kakslauttanen Arctic Resort', 'Levin Iglut', 'Star Arctic Hotel', 'Aurora Village Ivalo', 'Nova Skyland Rovaniemi'],
      body: "Chambres et igloos au toit de verre conçus spécialement pour observer les aurores. La catégorie la plus chère, toits vitrés, lieux isolés et offre limitée : Kakslauttanen affiche complet 8 à 12 mois à l'avance.",
      ctaLabel: 'Trouver des igloos de verre',
    },
    {
      name: 'Chalets aurores boréales',
      keyword: 'chalet aurores boréales',
      range: '€150 – €700',
      note: 'par nuit, par chalet',
      examples: ['Apukka Resort', 'Arctic TreeHouse Hotel', 'Arctic SnowHotel & Glass Igloos'],
      body: "Le séjour classique en chalet lapon : fenêtres orientées vers les aurores, sauna privé et forêt tout autour. Le meilleur rapport prix-expérience pour les couples et petits groupes en quête d'aurores.",
      ctaLabel: 'Trouver des chalets à aurores',
    },
    {
      name: 'Hôtels de neige et de glace',
      keyword: 'hôtel de neige laponie',
      range: '€150 – €400',
      note: 'par nuit, en saison uniquement',
      examples: ['Lainio Snow Village (Kittilä)', 'Torassieppi Winter Village (Muonio)'],
      body: "Le territoire d'une seule nuit, sculptés dans la glace chaque décembre, fondus chaque avril. Vestiaires chauffés, sacs de couchage thermiques et une histoire que vous raconterez toute votre vie.",
      ctaLabel: 'Trouver des hôtels de neige',
    },
    {
      name: 'Lodges en pleine nature',
      keyword: 'hébergement de luxe laponie',
      range: '€200 – €600',
      note: 'par nuit, tout suites',
      examples: ['Muotka Wilderness Lodge (Inari)', 'Nellim Wilderness Hotel', 'Lumi Resort (Kittilä)'],
      body: "Pensés pour les chasseurs d'aurores qui veulent du service. Petits, isolés, encadrés par des guides. La nature sauvage version tout compris, cuisine de chef, huskys à portée de main et tout le menu des safaris depuis le lobby.",
      ctaLabel: 'Trouver des lodges',
    },
    {
      name: 'Hôtels et chaînes de chalets de Laponie',
      keyword: 'hôtel laponie',
      range: '€100 – €350',
      note: 'par nuit, par chambre',
      examples: ['Lapland Hotels (plusieurs resorts)', 'Harriniva (Muonio)'],
      body: "La porte d'entrée la plus fiable, hôtels et chaînes de chalets établis à Levi, Ylläs, Saariselkä, Rovaniemi et Muonio. Restaurants accessibles à pied, safaris au départ de la porte.",
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
