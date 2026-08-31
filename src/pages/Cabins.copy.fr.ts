// Guide du séjour en chalet (article partenaire Lomarengas), français.
import type { PageCopy } from './Cabins.copy.types'

const copy: PageCopy = {
  seo: {
    title: 'Chalets en Laponie : Levi, Ylläs, Ruka, Saariselkä',
    description: "Le séjour en chalet finlandais : ce qu'offre un mökki, ce qui distingue Levi, Ylläs, Ruka et Saariselkä, et comment parcourir les chalets via Lomarengas.",
  },
  ui: {
    adNotice: 'Contient des liens publicitaires · Partenariat Lomarengas',
    eyebrow: 'Séjours en chalet',
    h1: 'Le séjour en chalet en Laponie',
    heroAlt: "Chalet en rondins sous la neige en Laponie à l'heure bleue, lumière chaude aux fenêtres et faible aurore boréale",
    lead: "Vos propres murs en rondins, votre propre sauna, et personne au-dessus, en dessous ou derrière la cloison.",

    whyEyebrow: 'Pourquoi un chalet',
    whyH2: "Ce qu'un mökki vous offre et qu'un hôtel ne peut pas",
    whyLead: 'Le mökki est le chalet de vacances finlandais, et il vient avec ses propres rituels. Quatre raisons pour lesquelles il bat une chambre d\'hôtel pour une semaine dans le nord :',
    whyCards: [
      {
        title: 'Votre propre sauna',
        body: 'La plupart des chalets de location comprennent un sauna privé, et dans les meilleurs il est chauffé au bois. Ski, sauna, dîner, veille aux aurores : voilà le rythme quotidien d\'une semaine en chalet finlandais.',
      },
      {
        title: 'De la place pour tout le groupe',
        body: "Les chalets accueillent de deux à douze personnes, parfois plus. Une cuisine, une cheminée et une addition partagée entre amis valent généralement mieux que trois ou quatre chambres d'hôtel.",
      },
      {
        title: 'Votre propre cuisine',
        body: "Les prix des restaurants de station s'accumulent vite sur une semaine. Une cuisine de chalet, ce sont des petits-déjeuners tranquilles, des pique-niques pour les pistes et une grande course au supermarché du village.",
      },
      {
        title: 'Le silence',
        body: "Descendez du perron et vous êtes dans la neige, sous les étoiles, souvent avec l'aurore au-dessus de vous. Pas de couloirs, pas de hall, pas d'autres clients. Ce silence, c'est tout l'intérêt.",
      },
    ],

    partnerEyebrow: 'Où nous cherchons en premier',
    partnerH2: 'Recherche de chalets : Lomarengas',
    partnerBody: "Lomarengas est une agence finlandaise de location de chalets avec plus de 8 000 maisons de vacances référencées dans tout le pays, des chalets de ski au pied des pistes de Levi aux cabanes au bord d'un lac dans le Grand Nord. Les annonces montrent de vraies photos, des emplacements précis et des prix semaine par semaine, et chaque chalet indique ce qui est inclus.",
    partnerNote: "Les liens ci-dessous mènent à lomarengas.fi, où la recherche, les prix et la réservation sont gérés par Lomarengas. Si vous réservez via ces liens, LaplandStays perçoit une commission fixe, sans coût supplémentaire pour vous.",
    partnerCta: 'Voir les chalets',

    areasEyebrow: 'Les quatre classiques',
    areasH2: 'Levi, Ylläs, Ruka ou Saariselkä ?',
    areasLead: "Les quatre offrent pistes, pistes de fond et chalets à quelques minutes en voiture d'un village. La différence, c'est l'ambiance : quelle dose de village voulez-vous devant la porte du chalet.",
    areas: [
      {
        name: 'Levi',
        tagline: 'La station tout confort',
        body: "La station de ski la plus fréquentée de Finlande, avec le slalom de Coupe du monde chaque novembre et un village où restaurants, boutiques de location et départs de safaris sont accessibles à pied. Les chalets entourent le fjäll : vous pouvez choisir entre un emplacement ski-in près de la télécabine et des parcelles plus calmes à quelques kilomètres.",
        bullets: [
          "Idéal pour : les premières visites et les groupes qui veulent restaurants et vie nocturne près du chalet",
          'Les services du village à pied depuis les zones de chalets les plus proches',
          "L'aéroport de Kittilä est à environ 15 minutes, le transfert le plus simple de Laponie",
        ],
        note: '',
        cta: 'Chalets à Levi · Lomarengas',
      },
      {
        name: 'Ylläs',
        tagline: 'Le pays tranquille des fjälls',
        body: "Les pistes les plus longues de Finlande sur un seul fjäll, deux villages paisibles (Äkäslompolo et Ylläsjärvi) à son pied, et le parc national Pallas-Yllästunturi qui commence au bord du réseau de pistes de fond. Ici, la vie en chalet consiste plutôt à chausser les skis dès la porte qu'à faire de l'après-ski.",
        bullets: [
          'Idéal pour : les fondeurs, les familles et tous ceux qui fuient la foule',
          "Deux villages, donc commerces et restaurants sans l'agitation d'une station",
          "Le même aéroport de Kittilä que Levi, transfert d'environ 50 minutes",
        ],
        note: '',
        cta: 'Chalets à Ylläs · Lomarengas',
      },
      {
        name: 'Ruka',
        tagline: 'Le bourreau de travail du début de saison',
        body: "Ruka ouvre en octobre et se skie jusqu'en mai, l'une des plus longues saisons de Finlande, et son village compact au pied des pistes garde tout à portée. En contrebas du fjäll, le pays des lacs de Kuusamo est un terrain de chalets classique, avec le parc national d'Oulanka et le sentier Karhunkierros à proximité pour les jours sans ski.",
        bullets: [
          'Idéal pour : le ski en début et fin de saison, les randonnées de la ruska en automne, les pêcheurs',
          "L'aéroport de Kuusamo est à environ 25 minutes des pistes",
          'Un choix immense de chalets au bord des lacs dans la campagne de Kuusamo',
        ],
        note: "À strictement parler, Ruka se trouve à Kuusamo, juste au sud de la frontière administrative de la Laponie. La neige ne semble pas s'en soucier, et les locataires de chalets non plus.",
        cta: 'Chalets à Ruka · Lomarengas',
      },
      {
        name: 'Saariselkä',
        tagline: "La base aurores du Grand Nord",
        body: "La plus septentrionale des quatre grandes, à environ 68°N, ce qui vous place sous l'ovale auroral : par nuit claire, les probabilités y sont tout simplement meilleures. Le village est compact, le parc national Urho Kekkonen commence juste derrière, et les fjälls déroulent cent kilomètres vers l'est sans la moindre construction en vue.",
        bullets: [
          'Idéal pour : les chasseurs d\'aurores, les amateurs de raquettes et de nature sauvage, les secondes visites',
          "L'aéroport d'Ivalo est à environ 30 minutes",
          'Le sommet de Kaunispää et la plus longue piste de luge de Finlande dominent le village',
        ],
        note: '',
        cta: 'Chalets à Saariselkä · Lomarengas',
      },
    ],

    practicalEyebrow: 'Avant de réserver',
    practicalH2: 'Comment lire une annonce de chalet',
    practicalLead: 'Les annonces de chalets finlandaises sont honnêtes mais laconiques. Voici les détails à vérifier avant de vous engager pour une semaine :',
    checkTitle: "À vérifier dans l'annonce",
    checkList: [
      "Le type de sauna : au bois, c'est l'expérience complète ; électrique, la version quotidienne",
      'Linge de lit et ménage final : souvent facturés à part, ajoutez-les avant de comparer les totaux',
      "La distance jusqu'aux pistes, aux pistes de fond et à l'épicerie la plus proche, en kilomètres et non en adjectifs",
      "Cheminée et bois de chauffage : généralement inclus, mais confirmez si c'est important pour vous",
      "L'accès routier en hiver et le stationnement, surtout pour les chalets hors des villages",
    ],
    knowTitle: 'Bon à savoir',
    knowList: [
      "Une voiture vaut la peine pour les chalets éloignés d'un village, voir notre guide transport",
      'En haute saison, les semaines de chalet vont généralement du samedi au samedi',
      'De décembre à mars, c\'est la haute saison ; réservez les semaines prisées plusieurs mois à l\'avance',
      'La ruska de septembre et le soleil de minuit de juin sont les bonnes affaires de la saison calme',
      'Apportez des chaussons. Le chalet finlandais est une zone sans chaussures, et les planchers le savent.',
    ],

    seasonEyebrow: 'Le bon moment',
    seasonH2: 'Quand prendre votre semaine en chalet',
    seasonLead: "Il n'y a pas de mauvaise saison pour un mökki, seulement des saisons différentes :",
    seasons: [
      { period: 'Décembre à mars', body: "Plein hiver : pistes ouvertes, pistes de fond damées, saison des aurores à son apogée. C'est la plus forte demande de chalets ; plus vous réservez tôt, meilleur est le choix." },
      { period: 'Avril', body: 'Ski de printemps : journées longues, neige compacte, lunettes de soleil en terrasse. Les habitants parlent du secret le mieux gardé de l\'année de ski.' },
      { period: 'Juin à août', body: 'Soleil de minuit : randonnée, pêche et baignade depuis le ponton du chalet, avec la lumière du jour en continu. Les chalets au bord des lacs sont à leur meilleur.' },
      { period: 'Septembre à octobre', body: "La ruska, la saison des couleurs d'automne : les fjälls virent au rouge et à l'or, l'air est vif et les premières aurores reviennent dans des ciels sombres." },
    ],

    ctaH2: "Choisissez d'abord votre fjäll, puis votre chalet",
    ctaLead: 'Partez de la région qui correspond à votre groupe, puis comparez les chalets sur les pages de Lomarengas. La réservation se fait sur lomarengas.fi.',
    ctaPrimary: 'Tous les chalets sur Lomarengas',
    ctaSecondary: 'Quand partir',

    showcase: {
      eyebrow: 'Direct du catalogue',
      h2: 'De vrais chalets, de vraies photos',
      lead: 'Une sélection actualisée chaque jour parmi les offres Lomarengas autour de chaque station, issue directement du flux produits. Les prix sont des prix hebdomadaires « à partir de » ; le tarif final dépend de la semaine.',
      weekFrom: 'semaine dès {price} €',
      guestsLabel: 'personnes',
      bedroomsLabel: 'chambres',
      sizeLabel: 'surface',
      viewCabin: 'Voir le chalet',
      browseAll: 'Voir les {count} chalets de la région',
      dataNote: 'Photos et prix : données produits Lomarengas, mises à jour chaque jour.',
    },
  },
}

export default copy
