import type { GlassIgloosCopy } from './GlassIgloos.copy.types'

/**
 * Page française sur les igloos de verre, /fr/glass-igloos. Traduite de GlassIgloos.copy.en.ts
 * le 22.10.2026, vouvoiement (vous). Demande mesurée avec OpenSEO, marché France, 17.9. et
 * 22.10.2026 : igloo laponie 210/mois, igloo rovaniemi 210, hôtel igloo laponie 170–210,
 * igloo de verre laponie 90, hotel igloo finlande 70, igloo en verre laponie 50, kakslauttanen 140.
 * Titre et h1 sur « igloos de verre en Laponie » (terme du site, GLOSSARY : igloo de verre),
 * « hôtels » dans le titre pour la recherche « hôtel igloo ».
 *
 * Mêmes faits que l’anglais : aucune donnée chiffrée absente du texte anglais (numeroportti).
 * Typographie : espace insécable (U+00A0) avant : ; ? ! et entre un nombre et son unité.
 * Partenaire nommé : Trip.com (les boutons fr ouvrent Trip.com), uniquement dans tableNote.
 */
const fr: GlassIgloosCopy = {
  seo: {
    title: 'Igloos de verre en Laponie : 11 hôtels comparés',
    description:
      'Igloos de verre en Laponie finlandaise : 11 hôtels à Rovaniemi, Saariselkä, Inari et Levi, avec l’aéroport le plus proche, les chambres et quand réserver.',
  },
  breadcrumbHome: 'Accueil',
  breadcrumbPage: 'Igloos de verre en Laponie',
  keywords: ['igloo laponie', 'igloo rovaniemi', 'hôtel igloo laponie', 'igloo de verre laponie', 'hotel igloo finlande', 'igloo en verre laponie', 'kakslauttanen'],
  adBadge: 'Contient des liens d’affiliation',
  h1: 'Igloos de verre en Laponie',
  lead:
    'En Laponie finlandaise, un igloo de verre peut être un petit logement pour deux ou trois personnes, ou un chalet en rondins relié à un igloo de verre. Le nom est le même, mais le bâtiment, la part de ciel au-dessus du lit et ce que comprend le tarif diffèrent. Cette page présente 11 resorts avec leur région, l’aéroport le plus proche et le type de chambre, et vous aide à choisir la région qui convient à votre voyage.',
  heroAlt: 'Igloos de verre dans la forêt enneigée du Kakslauttanen Arctic Resort, à Saariselkä, et deux personnes qui marchent sur le sentier',

  typesEyebrow: 'D’abord, les types',
  typesH2: 'Ce qu’on appelle un igloo de verre',
  typesIntro:
    'En Laponie, trois produits différents se vendent sous le nom d’« igloo ». L’essentiel de la différence de confort tient au type et à la taille du logement : un petit igloo pour deux ou trois personnes, ou un chalet familial.',
  typeCards: [
    {
      title: 'Igloo de verre indépendant',
      tagline: 'Un petit dôme ou une cabane, toit entièrement vitré',
      body: 'Un logement chauffé posé seul dans la neige, avec du verre au-dessus du lit et souvent le long des murs. Kakslauttanen Arctic Resort, à Saariselkä, et Golden Crown Levin Iglut, près de Levi, relèvent de ce type. Vous voyez le ciel sans vous lever.',
      forWho: 'Idéal pour : les couples venus pour les aurores boréales et tous ceux qui veulent prendre des photos depuis leur lit.',
    },
    {
      title: 'Chalet ou chambre à toit vitré',
      tagline: 'Un chalet ou une chambre d’hôtel avec un toit en verre',
      body: 'Un chalet ou une chambre d’hôtel classique dont une partie du toit est vitrée. Chez Wilderness Hotels, ce sont les Aurora Cabins, dotées d’un toit vitré chauffé ; au Star Arctic Hotel, sur le fjäll Kaunispää, un toit vitré en trois panneaux surplombe le lit. La surface vitrée est généralement plus réduite, ce qui peut rendre la chaleur, l’obscurité et l’intimité plus faciles à gérer.',
      forWho: 'Idéal pour : les voyageurs qui privilégient le confort, et les séjours plus longs.',
    },
    {
      title: 'Igloo de neige (hôtel de neige)',
      tagline: 'Un nom proche, un tout autre produit',
      body: 'Une chambre de neige et de glace, reconstruite chaque hiver, où la température reste entre 0 et −5 °C. L’hôtel de neige d’Arctic SnowHotel & Glass Igloos, près de Rovaniemi, ouvre chaque année le 15 décembre, fournit des sacs de couchage conçus pour le froid extrême et déconseille la nuit sur place aux enfants de moins de 5 ans. Un igloo de verre est une chambre chaude avec vue sur le ciel ; ici, l’expérience, c’est justement la nuit dans le froid.',
      forWho: 'Idéal pour : une nuit d’aventure. Pour la plupart des gens, une nuit suffit.',
    },
  ],
  typesNote: [
    'Arctic SnowHotel réunit des igloos de verre et l’hôtel de neige dans le même resort : vous pouvez donc essayer les deux. Pour tous les types d’hébergement en Laponie, consultez le ',
    { to: '/property-types', label: 'guide des types d’hébergement' },
    ' de ce site, ainsi que l’article de LaplandVibes « ',
    { href: 'https://laplandvibes.com/fr/blog/lapland-glass-cabin-categories/', label: 'Les cabanes de verre en Laponie : qui est qui' },
    ' ».',
  ],
  kidsNote:
    'Avec des enfants, c’est l’hôtel de neige qu’il faut regarder de près : Arctic SnowHotel déconseille la nuit dans ses chambres de neige aux enfants de moins de 5 ans. Les igloos de verre sont des chambres chauffées, mais les limites d’âge et la possibilité pour un enfant de partager le lit varient d’un resort à l’autre : renseignez-vous au moment de réserver.',

  seasonEyebrow: 'Saison',
  seasonH2: 'La saison des igloos de verre commence avec l’obscurité, pas avec la neige',
  seasonBody: [
    'La saison des igloos de verre suit les nuits noires, pas la neige. Dans le guide mois par mois de ce site, la saison des aurores boréales va de septembre à avril, et certains resorts ouvrent en conséquence : Levin Iglut et les igloos de verre d’Arctic SnowHotel ouvrent tous deux le 1er septembre. Seul l’hôtel de neige attend le 15 décembre.',
    'Inutile d’attendre la neige. En septembre et en octobre, les couleurs d’automne et les premières nuits d’aurores arrivent ensemble, et il reste des disponibilités. De juin à la mi-juillet, le soleil ne se couche pas et les aurores sont totalement invisibles. Sous un toit de verre en été, c’est le soleil de minuit que vous regardez : une expérience en soi, mais sans doute pas celle qui vous amène ici.',
  ],

  tableH2: 'Les resorts : région, aéroport et type de chambre',
  tableIntro:
    'Le tableau recense les 11 resorts vers lesquels ce site renvoie via son partenaire de réservation, regroupés par région dans les sections ci-dessous.',
  tableHeaders: { name: 'Resort', area: 'Région', airport: 'Aéroport le plus proche', feature: 'Chambres', book: 'Réserver' },
  bookLabel: 'Vérifier la disponibilité',
  rows: {
    kakslauttanen: {
      name: 'Kakslauttanen Arctic Resort',
      area: 'Saariselkä, à 10 km au sud du village',
      airport: 'Ivalo (IVL), 35 km, environ 30 min',
      feature: 'Igloos de verre pour 3 ou 5 personnes au maximum, et Kelo-Glass Igloos : un chalet en rondins relié à un igloo de verre',
    },
    starArctic: {
      name: 'Star Arctic Hotel',
      area: 'Saariselkä, au sommet du fjäll Kaunispää',
      airport: 'Ivalo (IVL)',
      feature: 'Aurora Glass Cabins de 20 m², toit vitré en trois panneaux au-dessus du lit',
    },
    muotka: {
      name: 'Wilderness Hotel Muotka',
      area: 'Près de Saariselkä',
      airport: 'Ivalo (IVL), environ 45 min',
      feature: 'Aurora Cabins de 30 m² pour 4 personnes au maximum, toit vitré chauffé',
    },
    auroraVillage: {
      name: 'Aurora Village Ivalo',
      area: 'Ivalo',
      airport: 'Ivalo (IVL), 15 min',
      feature: 'Aurora Cabins de 28 m² à toit vitré, alertes aurores boréales via une application',
    },
    nellim: {
      name: 'Wilderness Hotel Nellim',
      area: 'Nellim, au bord du lac Inari',
      airport: 'Ivalo (IVL), environ 45 min',
      feature: 'Aurora Cabins à toit vitré chauffé, et villas au bord du lac',
    },
    wildernessInari: {
      name: 'Wilderness Hotel Inari',
      area: 'Lac Inari, à 5 min du village d’Inari',
      airport: 'Ivalo (IVL), environ 45 min',
      feature: 'Aurora Cabins de 29 m² pour 4 personnes au maximum, toit vitré chauffé',
    },
    arcticSnowHotel: {
      name: 'Arctic SnowHotel & Glass Igloos',
      area: 'Lehtojärvi, à 30 min du centre de Rovaniemi',
      airport: 'Rovaniemi (RVN), 40 min',
      feature: 'Igloos de verre chauffés dès le 1er septembre, et hôtel de neige reconstruit chaque hiver (dès le 15 décembre, de 0 à −5 °C)',
    },
    apukka: {
      name: 'Apukka Resort',
      area: 'Rovaniemi, à 18 km (15 min) du centre',
      airport: 'Rovaniemi (RVN), 10 km',
      feature: 'Aurora Cabins à toit vitré panoramique chauffé, et suites en igloo de verre avec vue à 360°',
    },
    santasIgloosArcticCircle: {
      name: 'Santa’s Igloos Arctic Circle',
      area: 'Village du Père Noël, Rovaniemi',
      airport: 'Rovaniemi (RVN), 5 km',
      feature: '71 igloos de verre au plafond vitré chauffé',
    },
    levinIglut: {
      name: 'Golden Crown Levin Iglut',
      area: 'Levi, à 10 km du village, à 340 m d’altitude',
      airport: 'Kittilä (KTT), 15 min',
      feature: 'Igloos Superior, Prime Superior et Suite',
    },
    northernLightsRanch: {
      name: 'Northern Lights Ranch',
      area: 'Köngäs, à 15 km de Levi',
      airport: 'Kittilä (KTT), 30 km',
      feature: 'Sky View Cabins : chalets façon igloo à toit vitré chauffé, déclinés en six styles',
    },
  },
  tableNote:
    'Chaque ligne ouvre la page du resort chez notre partenaire de réservation Trip.com, avec les prix et les disponibilités pour vos dates de séjour. Les prix des igloos varient beaucoup d’une semaine à l’autre, c’est pourquoi nous ne les publions pas ici. Les distances, temps de trajet et détails des chambres proviennent du site de chaque resort, et les distances des aéroports, de Finavia ; le tout vérifié le 18 octobre 2026.',

  areas: {
    rovaniemi: {
      eyebrow: 'Pour un séjour court',
      title: 'Autour de Rovaniemi : près de l’aéroport',
      intro:
        'L’aéroport de Rovaniemi (RVN) est à 10 km du centre-ville. Un igloo à Rovaniemi ou dans ses environs est le choix logique si votre séjour est court, si vous voulez aussi voir le Village du Père Noël, ou si vous voulez réduire au maximum le temps de transfert.',
      properties: [
        {
          name: 'Arctic SnowHotel & Glass Igloos (Lehtojärvi)',
          body: 'Igloos de verre dès le 1er septembre et hôtel de neige dès le 15 décembre, à 30 minutes du centre-ville et à 40 de l’aéroport. Le resort cite une alarme aurores boréales parmi les équipements de ses igloos de verre.',
        },
        {
          name: 'Apukka Resort',
          body: 'Le resort se trouve à 18 km (15 minutes) du centre et à 10 km de l’aéroport. Les Aurora Cabins ont un toit vitré panoramique chauffé ; les suites en igloo de verre Kammi et Komsio offrent une vue à 360°.',
        },
        {
          name: 'Santa’s Igloos Arctic Circle',
          body: 'Au Village du Père Noël, à 5 km de l’aéroport : 71 igloos de verre au plafond vitré chauffé.',
        },
      ],
      outro:
        'Le seul point à prendre en compte est la pollution lumineuse de la ville. Les resorts autour de Rovaniemi sont à l’écart du centre, mais si vous voulez un ciel plus sombre, allez plus au nord.',
      ctaLabel: 'Chercher un hébergement à Rovaniemi',
      guideLinks: [{ to: '/destinations/rovaniemi', label: 'Guide de Rovaniemi' }],
    },
    north: {
      eyebrow: 'Si le ciel noir passe avant tout',
      title: 'Saariselkä, Ivalo et Inari : cap au nord',
      intro:
        'L’aéroport d’Ivalo (IVL) est à 25 km de Saariselkä et à 11 km du centre d’Ivalo. Inari est plus au nord : Wilderness Hotels indique environ 45 minutes entre l’aéroport et ses hôtels d’Inari et de Nellim. Les durées du jour indiquées dans le guide mois par mois de ce site sont celles de Rovaniemi (66,5° N), et l’hiver est encore plus sombre à Saariselkä et à Inari. Si les aurores boréales sont le but principal du voyage, c’est une bonne raison de monter vers le nord.',
      properties: [
        {
          name: 'Kakslauttanen Arctic Resort',
          body: 'Le resort se trouve à 10 km au sud du village de Saariselkä et à 35 km (environ 30 minutes) de l’aéroport d’Ivalo. Igloos de verre pour 3 ou 5 personnes au maximum, et Kelo-Glass Igloos, où un chalet en rondins est relié à un igloo de verre. L’un de ses tarifs d’hiver inclut le petit-déjeuner et le dîner.',
        },
        {
          name: 'Star Arctic Hotel',
          body: 'Au sommet du fjäll Kaunispää, à Saariselkä. L’Aurora Glass Cabin fait 20 m², accueille deux adultes et un enfant de 11 ans ou moins, et possède un toit vitré en trois panneaux juste au-dessus du lit.',
        },
        {
          name: 'Wilderness Hotel Muotka',
          body: 'Près de Saariselkä, à environ 45 minutes de l’aéroport d’Ivalo. Ses Aurora Cabins font 30 m², accueillent jusqu’à quatre personnes et ont un toit vitré chauffé.',
        },
        {
          name: 'Aurora Village Ivalo',
          body: 'À Ivalo, à 15 minutes de l’aéroport. Des Aurora Cabins de 28 m² à toit vitré, et des alertes aurores boréales via une application.',
        },
        {
          name: 'Wilderness Hotel Nellim et Wilderness Hotel Inari',
          body: 'Tous deux au bord du lac Inari, à environ 45 minutes de l’aéroport d’Ivalo. Le Wilderness Hotel Inari est à cinq minutes du village d’Inari ; Nellim est un village à part entière. Les deux proposent des Aurora Cabins à toit vitré chauffé.',
        },
      ],
      ctaLabel: 'Chercher un hébergement à Saariselkä',
      guideLinks: [
        { to: '/destinations/saariselka', label: 'Guide de Saariselkä' },
        { to: '/destinations/inari', label: 'Guide d’Inari' },
      ],
    },
    levi: {
      eyebrow: 'Si vous voulez aussi skier',
      title: 'Levi : les pistes le jour, le toit de verre la nuit',
      intro:
        'L’aéroport de Kittilä (KTT) est à 15 km de Levi. Choisissez Levi si le ski est au cœur du programme et l’igloo, le plaisir de fin de séjour.',
      properties: [
        {
          name: 'Golden Crown Levin Iglut',
          body: 'Des igloos de verre à 10 km du village de Levi, à 340 m d’altitude, à 15 minutes de l’aéroport de Kittilä. Trois catégories de chambres : Superior, Prime Superior et Suite. La saison des igloos 2026–27 va du 1er septembre au 13 avril ; en septembre et en octobre, le resort n’ouvre que du mardi au samedi.',
        },
        {
          name: 'Northern Lights Ranch',
          body: 'À Köngäs, à 15 km de Levi et à 30 km de l’aéroport de Kittilä. Ses Sky View Cabins sont des chalets façon igloo à toit vitré chauffé, déclinés en six styles.',
        },
      ],
      outro:
        'Une nuit en igloo est un plaisir à part plus qu’une base pour la semaine : il est donc rarement utile de dormir en igloo toutes les nuits. Logez au village ou dans un chalet près des pistes, et ajoutez une ou deux nuits en igloo à la fin : du ski le jour, et la dernière nuit sous le verre.',
      ctaLabel: 'Chercher un hébergement à Levi',
      guideLinks: [{ to: '/destinations/levi', label: 'Guide de Levi' }],
    },
  },

  questionsEyebrow: 'Comment choisir',
  questionsH2: 'Quelle région : trois questions',
  questionsIntro: 'Une fois les trois régions sous les yeux, le choix se résume à trois questions.',
  questions: [
    {
      title: 'De combien de nuits disposez-vous ?',
      body: 'Avec trois nuits ou moins, commencez par Rovaniemi : les transferts y sont les plus courts, vous perdez donc moins de temps en trajets. À partir de quatre nuits, prendre l’avion jusqu’à Ivalo et monter vers Saariselkä ou Inari devient réaliste.',
    },
    {
      title: 'Le voyage est-il tourné vers les aurores ou vers le ski ?',
      body: 'Si les aurores passent en premier, allez au nord : l’hiver est plus sombre à Saariselkä et à Inari qu’à Rovaniemi. Si le ski passe en premier, choisissez Levi. Si vous voulez les deux, combinez une semaine de ski à Levi avec une ou deux nuits au Golden Crown Levin Iglut, ou partez au nord en mars, quand les jours sont plus longs.',
    },
    {
      title: 'À quoi consacrer le budget ?',
      body: 'Avec la même somme, le voyage change selon la façon de la dépenser : toutes les nuits dans un igloo moins cher, ou des chambres ordinaires et une nuit dans un igloo plus haut de gamme. Comparez le coût total, repas et transferts compris, et non le prix à la nuit. Kakslauttanen, par exemple, propose un tarif d’hiver avec petit-déjeuner et dîner inclus : vérifiez donc ce que couvre chaque tarif.',
    },
  ],

  cabinCombo: {
    eyebrow: 'Un plan simple',
    h2: 'Une ou deux nuits en igloo, et un chalet pour le reste de la semaine',
    body: 'Une nuit en igloo se vit mieux comme un plaisir à part que comme une base pour toute la semaine. Une façon d’organiser un séjour en Laponie consiste à passer une ou deux nuits en igloo et le reste de la semaine dans un chalet de location de la même région : tout le groupe y trouve sa place, et vous pouvez avoir votre propre sauna et votre cuisine pour la semaine. Ce site présente les chalets de chaque région avec la distance jusqu’au village le plus proche.',
    linkLabel: 'Chalets en Laponie par région',
  },

  accessEyebrow: 'Accès',
  accessH2: 'Y aller : vols, train de nuit et transferts',
  access: [
    [
      'Les resorts à igloos présentés sur cette page sont desservis par trois aéroports : Rovaniemi (RVN), Kittilä (KTT) pour Levi et Ivalo (IVL) pour Saariselkä et Inari. Rovaniemi est reliée à Helsinki par avion toute l’année. En hiver, les trois aéroports reçoivent aussi des vols directs depuis plusieurs villes européennes, et les lignes changent d’une année à l’autre : vérifiez les vols depuis votre aéroport de départ.',
    ],
    [
      'Les temps de transfert vers chaque resort figurent dans les sections par région ci-dessus. À titre de repère, RVN est à 10 km du centre de Rovaniemi, KTT à 15 km de Levi et IVL à 25 km de Saariselkä.',
    ],
    [
      'Si vous ne voulez pas prendre l’avion, le train de nuit de VR, les chemins de fer finlandais, relie Helsinki à Rovaniemi et peut aussi transporter votre voiture. Saariselkä est encore à quatre heures environ de Rovaniemi en bus : pour les resorts du nord, un vol jusqu’à Ivalo est donc plus rapide. Certains resorts vendent des transferts depuis l’aéroport, en forfait ou en option ; les autres solutions sont dans le ',
      { to: '/transport', label: 'guide des transports' },
      '.',
    ],
  ],

  itinerariesEyebrow: 'Organisation',
  itinerariesH2: 'Exemples de séjours : où placer les nuits en igloo',
  itinerariesIntro:
    'Placez les nuits en igloo dans la seconde moitié du séjour, pour deux raisons : le premier soir, la fatigue du voyage vous donne moins envie de veiller pour les aurores, et les nuits suivantes offrent une seconde chance si les premières sont nuageuses.',
  itineraries: [
    {
      title: '3 nuits à Rovaniemi',
      body: 'Première nuit en ville ou près du Village du Père Noël, avec le musée Arktikum et un safari. Deuxième et troisième nuits dans un igloo de verre hors de la ville, en gardant la dernière soirée pour les aurores.',
    },
    {
      title: '4 nuits à Saariselkä',
      body: 'Première et deuxième nuits dans un hôtel du village, avec une sortie en raquettes dans le parc national Urho Kekkonen et un safari en traîneau de huskies, tous deux au départ du village. Troisième et quatrième nuits en igloo.',
    },
    {
      title: '5 nuits à Levi',
      body: 'Trois jours de ski depuis un hôtel du village ou un chalet près des pistes, puis une ou deux dernières nuits au Golden Crown Levin Iglut. Pour ce déplacement de 10 km, un taxi suffit et vous n’avez pas besoin de voiture de location.',
    },
  ],

  inclusionsEyebrow: 'Même nuit, autre tarif',
  inclusionsH2: 'Ce que comprend le tarif : dîner, transferts, sauna',
  inclusionsBody: [
    'Exemples que nous avons pu vérifier sur les sites des resorts : Kakslauttanen propose un tarif d’hiver avec petit-déjeuner et dîner inclus. À Kakslauttanen, les transferts privés depuis l’aéroport ne sont inclus que dans le prix du Luxury Kelo-Glass Igloo, et le séjour Aurora Adventure Break de trois nuits du Wilderness Hotel Muotka comprend les transferts depuis l’aéroport d’Ivalo. Dans les chambres de neige d’Arctic SnowHotel, les sacs de couchage conçus pour le froid extrême sont fournis avec la chambre.',
    'Ce que comprend un tarif dépend de la formule réservée, pas seulement du resort. Trois points méritent d’être vérifiés avant de réserver :',
  ],
  inclusions: [
    {
      title: 'Dîner',
      body: 'Pouvez-vous aller à pied jusqu’aux restaurants d’un village, ou le restaurant du resort est-il la seule option ? Si c’est la seule option, un tarif avec dîner inclus compte davantage.',
    },
    {
      title: 'Transfert depuis l’aéroport',
      body: 'Inclus, en supplément payant ou à organiser vous-même ? Les transports en commun sont rares à Ivalo et à Kittilä, ce qui change le coût total.',
    },
    {
      title: 'Sauna',
      body: 'Un sauna commun, ou un sauna privatif dans votre chambre ou votre chalet ? Les saunas sont courants dans les hébergements finlandais, mais un sauna privatif change le séjour.',
    },
  ],
  inclusionsNote:
    'Nous ne mettons volontairement pas ces trois points dans un tableau figé : ils changent avec chaque formule tarifaire, et un tableau figé serait périmé avant les pages des resorts eux-mêmes. Vérifiez toujours sur la page de réservation du resort.',

  bookingEyebrow: 'Calendrier',
  bookingH2: 'Quand réserver : 8 à 12 mois à l’avance pour les semaines les plus demandées',
  bookingIntro:
    'Pour les semaines les plus demandées, Kakslauttanen et Levin Iglut se réservent 8 à 12 mois à l’avance. Dès novembre, les igloos commencent à se remplir pour les semaines les plus demandées de l’hiver suivant : le choix se réduit donc bien avant le passage à la nouvelle année. D’après le guide mois par mois de ce site :',
  bookingRows: [
    { period: 'Semaine de Noël', body: 'Environ 12 mois à l’avance.' },
    { period: 'Nouvel An', body: 'Environ 10 mois à l’avance.' },
    { period: 'Mi-février', body: 'Vacances scolaires en Europe. Environ 6 à 8 mois à l’avance.' },
    { period: 'Mars', body: '4 à 6 mois à l’avance. Un mois que les habitués affectionnent : des nuits sombres et des journées plus longues en même temps.' },
    { period: 'Septembre–octobre', body: 'Il reste des chambres disponibles, et c’est le meilleur rapport prix/aurores de la saison.' },
  ],
  bookingOutro: [
    'Durée du jour, aurores, neige et réservations, mois par mois : tout est dans le ',
    { to: '/when-to-go', label: 'guide Quand partir' },
    '. Si vous cherchez un igloo de verre pour décembre deux ou trois mois avant le départ, il ne restera presque plus rien. Décaler le voyage en mars est généralement plus efficace que de se rabattre sur un autre resort.',
  ],

  cloudyEyebrow: 'En toute franchise',
  cloudyH2: 'Et s’il y a des nuages ?',
  cloudyIntro:
    'On ne voit les aurores boréales que par nuit claire, et un igloo de verre ne peut pas vous vendre la météo. Aucun resort n’inclut les aurores dans son prix. Vous pouvez faire trois choses concrètes.',
  cloudy: [
    {
      title: 'Réserver plus d’une nuit',
      body: 'Une nuit, c’est un pari ; deux ou trois améliorent vos chances. Placez les nuits en igloo en fin de séjour : elles vous donnent une autre chance si les nuits précédentes étaient nuageuses.',
    },
    {
      title: 'Utiliser une alerte aurores',
      body: 'Certains resorts envoient une alerte quand les aurores apparaissent : Aurora Village Ivalo via une application, et Arctic SnowHotel cite une alarme aurores boréales dans ses igloos de verre. Vérifiez avant de réserver si votre resort en propose une. Si vos dates de voyage sont flexibles, les aurores sont généralement plus actives autour des équinoxes : mars est donc un bon mois.',
    },
    {
      title: 'Prévoir la soirée nuageuse à l’avance',
      body: 'Un sauna, un dîner au resort, une promenade dehors : avoir un plan qui marche même sous les nuages évite d’avoir l’impression d’une nuit perdue.',
    },
  ],
  cloudyOutro: [
    'Même par une nuit nuageuse, vous avez un lit chaud sous le verre et, en hiver, des arbres que la neige illumine autour de vous. Ce que vous en retiendrez dépend de ce que vous attendiez. Pour savoir quand les aurores sont les plus probables, et quelles sont vos chances, consultez le ',
    { href: 'https://laplandvibes.com/fr/northern-lights/', label: 'guide des aurores boréales' },
    ' de LaplandVibes.',
  ],

  ctaH2: 'Choisissez la région, puis le mois',
  ctaBody:
    'Une fois le type et la région choisis, il ne reste que le mois. Consultez la durée du jour, les aurores et les réservations mois par mois, puis saisissez vos dates de voyage dans le calendrier de réservation du resort.',
  ctaPrimary: 'Quand partir',
  ctaSecondary: 'Types d’hébergement',
  checkedNote:
    'Informations vérifiées sur le site de chaque resort le 18 octobre 2026. Saisons, chambres et contenu des tarifs changent : vérifiez sur le site et la page de réservation du resort.',
}

export default fr
