import type { IceHotelsCopy } from './IceHotels.copy.types'

/**
 * Page française sur les hôtels de glace et de neige, /fr/ice-hotels. Traduite de IceHotels.copy.en.ts
 * le 22.10.2026, vouvoiement (vous). Demande mesurée avec OpenSEO, marché France, 22.10.2026 :
 * hôtel de glace 1 600/mois, hôtel de glace laponie 880 (SERP mixte, majorité finlandaise),
 * arctic snowhotel 880, icehotel 880 (= ICEHOTEL, en Suède), hôtel de glace rovaniemi 210,
 * hôtel de glace finlande 170, snow village laponie 90, snowcastle kemi 50.
 * Titre sur la requête exacte « hôtel de glace » (au singulier pour tenir en 60 caractères), h1 sur
 * « hôtels de glace et de neige », les deux avec « Laponie finlandaise », car « hôtel de glace » seul renvoie
 * souvent à l’ICEHOTEL suédois. Dans le texte, « hôtel de neige » là où l’anglais dit « snow hotel »
 * (terme de la page igloos de verre), « hôtel de glace » là où il dit « ice hotel ».
 *
 * Mêmes faits que l’anglais : aucune donnée chiffrée absente du texte anglais (numeroportti).
 * Dates et heures au format français (15 décembre 2026, de 10 h à 22 h).
 * Typographie : espace insécable (U+00A0) avant les deux-points, le point-virgule, le point d’interrogation
 * et le point d’exclamation, et entre un nombre et son unité ou le nom qui le suit.
 * Partenaire nommé : Trip.com (les boutons fr ouvrent Trip.com), uniquement dans arctic.ctaNote.
 */
const fr: IceHotelsCopy = {
  seo: {
    title: 'Hôtel de glace en Laponie finlandaise : dormir dans la neige',
    description:
      'Hôtels de glace en Laponie finlandaise, hiver 2026–27 : Arctic SnowHotel à Rovaniemi, SnowVillage près d’Ylläs, igloos de neige à Pyhä et visites à la journée.',
  },
  breadcrumbHome: 'Accueil',
  breadcrumbPage: 'Hôtels de glace en Laponie finlandaise',
  keywords: ['hôtel de glace', 'hôtel de glace laponie', 'arctic snowhotel', 'hôtel de glace rovaniemi', 'hôtel de glace finlande', 'snow village laponie', 'hôtel de neige laponie'],
  adBadge: 'Contient des liens d’affiliation',
  h1: 'Hôtels de glace et de neige en Laponie finlandaise',
  lead:
    'Pendant l’hiver 2026–27, trois lieux de Laponie finlandaise vous permettent de dormir dans une chambre construite en neige : Arctic SnowHotel près de Rovaniemi, SnowVillage près d’Ylläs et les igloos de neige de Lucky Ranch près de Pyhä. L’ICEHOTEL, le plus connu des hôtels de glace, se trouve en Suède. Cette page indique ce que comprend chaque nuit et ce que vous pouvez visiter sans y dormir.',
  heroAlt: 'Une suite de neige d’Arctic SnowHotel, près de Rovaniemi : un lit couvert de fourrures parmi des sculptures de glace, et un oiseau aux ailes déployées taillé dans le mur de neige',

  staysEyebrow: 'Hiver 2026–27',
  staysH2: 'Où dormir dans la neige',
  staysIntro:
    'Tous trois sont reconstruits chaque hiver, si bien que les chambres, les thèmes et les dates changent d’une année à l’autre. Ce qui suit reprend ce que chaque lieu annonce sur son propre site pour la saison à venir.',
  arctic: {
    name: 'Arctic SnowHotel & Glass Igloos',
    place: 'Lehtoahontie 27, Rovaniemi : à environ 26 km (30 min) du centre-ville et du Village du Père Noël, à 40 min de l’aéroport',
    facts: [
      'L’hôtel de neige ouvre le 15 décembre 2026, et la saison dure jusqu’au 31 mars.',
      'À l’intérieur de l’hôtel de neige et de glace, la température reste comprise entre 0 et −5 °C.',
      'La nuit comprend des sacs de couchage conçus pour le froid extrême, l’accès au Snowhotel Lounge chauffé, un sauna finlandais commun et un petit-déjeuner buffet.',
      'Votre chambre de neige vous est réservée à partir de 21 h. Le dîner et les transferts depuis Rovaniemi sont proposés dans les forfaits du resort et ne sont pas compris dans le prix de la chambre.',
      'La nuit sur place est déconseillée aux enfants de moins de 5 ans.',
    ],
    glassNote: [
      'Le même resort propose aussi des igloos de verre chauffés, ouverts dès le 1er septembre. Nous les comparons à dix autres resorts sur notre ',
      { to: '/glass-igloos', label: 'page consacrée aux igloos de verre' },
      '.',
    ],
    ctaLabel: 'Voir prix et disponibilités',
    ctaNote: 'Ouvre la page du resort chez notre partenaire de réservation Trip.com, avec les prix pour vos dates de séjour.',
  },
  snowVillage: {
    name: 'Lapland Hotels SnowVillage',
    place: 'Lainio, Kittilä, près d’Ylläs',
    facts: [
      'Ouvert du 25 décembre 2026 au 4 avril 2027, tous les jours de 10 h à 22 h.',
      'Entièrement reconstruit chaque année depuis 2001, en neige et en glace naturelle. Le thème de l’hiver 2026–27 n’a pas encore été annoncé.',
      'Pour la nuit, il n’existe qu’une seule suite de glace de luxe pour deux, vendue en forfait avec une visite guidée, un dîner au restaurant de glace, une kota avec sauna et bain à remous, et le petit-déjeuner dans un restaurant chauffé. Elle se réserve par e-mail auprès de SnowVillage, et sa page décrit encore l’hiver 2025–26.',
      'Un bus circule tous les jours depuis Levi et Ylläs pendant les heures d’ouverture.',
    ],
  },
  luckyRanch: {
    name: 'Igloos de neige de Lucky Ranch',
    place: 'Village de Pyhäjärvi, Pelkosenniemi, à environ 10 km de Pyhä',
    facts: [
      'Les igloos de neige sont reconstruits chaque année en décembre, et la température intérieure reste toujours sous 0 °C.',
      'Vous dormez dans un lit classique, avec un sac de couchage chaud et une bouillotte, et un petit-déjeuner léger est inclus.',
      'Un camp de base chauffé se trouve à côté des igloos, et les toilettes et les douches du saloon du ranch restent ouvertes toute la nuit pour les clients des igloos.',
      'Le ranch recommande ses igloos aux adultes et aux enfants en bonne santé, et vend les nuits sur son propre site.',
    ],
  },

  nightEyebrow: 'Avant de réserver',
  nightH2: 'À quoi ressemble une nuit dans la neige',
  night: [
    { title: 'Sous zéro toute la nuit', body: 'Chez Arctic SnowHotel, la chambre reste entre 0 et −5 °C toute la nuit ; chez Lucky Ranch, la température est toujours inférieure à 0 °C. Le froid, c’est tout l’intérêt : une chambre chauffée est un igloo de verre, pas un hôtel de neige.' },
    { title: 'Tout repose sur le sac de couchage', body: 'Arctic SnowHotel fournit des sacs de couchage conçus pour le froid extrême, Lucky Ranch des sacs de couchage chauds et des bouillottes. Inutile d’apporter les vôtres.' },
    { title: 'Une pièce chauffée juste à côté', body: 'Arctic SnowHotel dispose du Snowhotel Lounge chauffé et d’un sauna, Lucky Ranch d’un camp de base chauffé à côté des igloos. Si la nuit devient trop froide, vous avez un endroit où vous réchauffer.' },
    { title: 'Avec des enfants', body: 'Arctic SnowHotel déconseille la nuit dans ses chambres de neige aux enfants de moins de 5 ans. Lucky Ranch recommande ses igloos aux adultes et aux enfants en bonne santé. SnowVillage n’indique aucune limite d’âge : renseignez-vous avant de réserver.' },
  ],

  visitsEyebrow: 'Sans y passer la nuit',
  visitsH2: 'Neige et glace à visiter en journée',
  visitsIntro:
    'Vous pouvez aussi parcourir des salles de neige et de glace sans y dormir. Arctic SnowHotel et SnowVillage vendent des billets pour la journée ; Snowman World et le SnowCastle of Kemi se visitent uniquement en journée.',
  visitHeaders: { name: 'Lieu', place: 'Emplacement', season: 'Saison', what: 'À voir' },
  visits: [
    {
      name: 'Arctic SnowHotel',
      place: 'Rovaniemi, à 26 km du centre',
      season: 'Du 15 décembre au 31 mars, tous les jours de 10 h à 20 h',
      what: 'Billet d’entrée pour les œuvres de neige et de glace, la chapelle de glace, le restaurant de glace et le bar de glace ; visite guidée de 45 minutes en supplément.',
    },
    {
      name: 'Lapland Hotels SnowVillage',
      place: 'Lainio, Kittilä',
      season: 'Du 25 décembre 2026 au 4 avril 2027, tous les jours de 10 h à 22 h',
      what: 'Œuvres de neige et de glace, bar de glace, espace pour les mariages, suite de neige, salle de cinéma et toboggan de glace. Billets vendus uniquement à l’accueil ; les visites guidées se réservent à l’avance.',
    },
    {
      name: 'Snowman World',
      place: 'Village du Père Noël, à 8 km du centre de Rovaniemi',
      season: 'Du 6 décembre 2026 au 17 mars 2027',
      what: 'Un parc de neige et de glace avec des activités, de quoi manger et boire. Aucune nuitée n’y est vendue.',
    },
    {
      name: 'SnowCastle of Kemi',
      place: 'Kemi, à 8 km de l’aéroport de Kemi-Tornio',
      season: 'Parc d’hiver de janvier à début avril (dates de 2027 pas encore publiées) ; SnowExperience toute l’année',
      what: 'Le château de neige proprement dit n’est plus construit depuis des années, et il n’y a pas d’hôtel de neige actuellement. La SnowExperience, en intérieur, est maintenue à −5 °C toute l’année.',
    },
  ],

  swedenEyebrow: 'Bon à savoir',
  swedenH2: 'L’ICEHOTEL se trouve en Suède',
  swedenBody: [
    'Quand on parle d’« hôtel de glace », on pense souvent à l’ICEHOTEL de Jukkasjärvi, près de Kiruna, en Laponie suédoise. Son hôtel d’hiver est ouvert de décembre à avril, et l’ICEHOTEL 365 propose des chambres de glace et de neige toute l’année.',
    'Il ne se trouve pas en Finlande et ne figure donc pas dans la liste ci-dessus. Ce site est consacré à la Laponie finlandaise.',
  ],

  nextEyebrow: 'Plus au chaud',
  nextH2: 'Si une nuit dans le froid vous suffit',
  next: [
    [
      'Un igloo de verre est une chambre chauffée avec le ciel au-dessus du lit. Nous comparons 11 resorts à igloos de verre sur la ',
      { to: '/glass-igloos', label: 'page consacrée aux igloos de verre' },
      '.',
    ],
    [
      'Pour le reste de la semaine, les ',
      { to: '/cabins', label: 'pages sur les chalets' },
      ' recensent les chalets à louer dans chaque région de Laponie, avec la distance jusqu’au village le plus proche.',
    ],
  ],

  checkedNote:
    'Informations vérifiées sur le site de chaque lieu le 22 octobre 2026. Les hôtels de neige sont reconstruits chaque hiver, et les dates comme le contenu d’une nuit peuvent donc changer : vérifiez sur la page de l’établissement avant de réserver.',
}

export default fr
