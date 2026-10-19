import type { CabinAreaPageCopy } from './CabinArea.copy.types'

// Pages chalets par destination, français, traduites de CabinArea.copy.en.ts. Terme de tête : chalets.
// Espace insécable avant les deux-points et le point-virgule, et entre un nombre et son unité.

const copy: CabinAreaPageCopy = {
  eyebrow: 'Dans les annonces Lomarengas',
  areas: {
    levi: {
      seo: {
        title: 'Chalets à Levi : chalets en rondins et villas à louer',
        description: 'Chalets et maisons de vacances à Levi sur une page : chalets en rondins, appartements ski-in et villas à Sirkka et Kittilä, avec capacité, chambres et surface.',
      },
      h1: 'Chalets à Levi',
      intro: 'Lomarengas propose {count} chalets à louer autour de Levi, du village de Sirkka jusqu’à Kittilä : chalets en rondins sur les pentes du fjäll, appartements ski-in à côté des remontées mécaniques et grandes villas pour tout un groupe. Chaque fiche ci-dessous indique le nombre de personnes, les chambres, la surface et le classement en étoiles ; le prix à la semaine et les semaines libres se consultent sur Lomarengas.',
    },
    yllas: {
      seo: {
        title: 'Chalets à Ylläs : Äkäslompolo et Ylläsjärvi',
        description: 'Chalets à Ylläs : chalets en rondins, chalets au bord du lac et appartements ski-in à Äkäslompolo et Ylläsjärvi, avec capacité, chambres et surface.',
      },
      h1: 'Chalets à Ylläs',
      intro: 'Lomarengas propose {count} chalets à louer autour d’Ylläs et de ses deux villages : Äkäslompolo, sur le versant nord du fjäll, et Ylläsjärvi, au pied des pentes sud. On y trouve des chalets en rondins sur des versants boisés, des chalets au bord du lac et des appartements ski-in. Chaque fiche ci-dessous indique le nombre de personnes, les chambres, la surface et le classement en étoiles ; le prix à la semaine et les semaines libres se consultent sur Lomarengas.',
      split: {
        nearH2: 'Äkäslompolo, Ylläsjärvi et alentours',
        nearNote: 'Chalets situés dans un rayon de 10 km autour d’Äkäslompolo ou d’Ylläsjärvi.',
        farH2: 'Ailleurs dans la commune de Kolari',
        farNote: 'À plus de 10 km d’Äkäslompolo et d’Ylläsjärvi. Depuis ces chalets, vous rejoindrez généralement Ylläs en voiture.',
      },
    },
    ruka: {
      seo: {
        title: 'Chalets à Ruka : maisons de vacances autour du Rukatunturi',
        description: 'Chalets et maisons de vacances à Ruka : la station et le pays des lacs de Kuusamo, avec capacité, chambres et surface sur une page. Réservation sur Lomarengas.',
      },
      h1: 'Chalets à Ruka',
      intro: 'Lomarengas propose {near} chalets à louer à Ruka et dans un rayon de 10 km autour du village de Ruka, et {far} autres plus loin, dans le pays des lacs de Kuusamo. Ruka est l’une des premières stations à ouvrir ses pistes en automne et la saison se prolonge jusqu’au printemps : des semaines de chalet sont donc disponibles sur une longue période. Chaque fiche indique la distance jusqu’à Ruka, le nombre de personnes, les chambres, la surface et le classement en étoiles ; le prix à la semaine et les semaines libres se consultent sur Lomarengas.',
      split: {
        nearH2: 'Ruka et alentours',
        nearNote: 'Chalets dans la station de Ruka et dans un rayon de 10 km alentour.',
        farH2: 'Chalets dans le pays des lacs de Kuusamo',
        farNote: 'À plus de 10 km de Ruka, ailleurs dans la commune de Kuusamo. Depuis ces chalets, vous rejoindrez généralement Ruka en voiture.',
      },
    },
    saariselka: {
      seo: {
        title: 'Chalets à Saariselkä : location au pied du Kaunispää',
        description: 'Chalets et maisons de vacances à Saariselkä : chalets en rondins et appartements autour du village et vers Kakslauttanen, avec capacité, chambres et surface.',
      },
      h1: 'Chalets à Saariselkä',
      intro: 'Lomarengas propose {count} chalets à louer autour de Saariselkä et du Kaunispää, en bordure du parc national Urho Kekkonen. C’est la plus septentrionale des quatre grandes stations de ski, et donc celle où les nuits d’aurores boréales sont les plus sombres. Chaque fiche ci-dessous indique le nombre de personnes, les chambres, la surface et le classement en étoiles ; le prix à la semaine et les semaines libres se consultent sur Lomarengas.',
      split: {
        nearH2: 'Saariselkä et alentours',
        nearNote: 'Chalets dans le village de Saariselkä et dans un rayon de 10 km alentour.',
        farH2: 'Plus loin de Saariselkä',
        farNote: 'À plus de 10 km du village de Saariselkä. Depuis ces chalets, vous rejoindrez généralement Saariselkä en voiture.',
      },
    },
    'pyha-luosto': {
      seo: {
        title: 'Chalets à Pyhä et à Luosto : maisons de vacances à louer',
        description: 'Chalets et maisons de vacances au Pyhätunturi et à Luosto (Pelkosenniemi, Sodankylä, Kemijärvi), avec capacité, chambres et surface. Réservation sur Lomarengas.',
      },
      h1: 'Chalets à Pyhä et à Luosto',
      intro: 'Lomarengas propose {count} chalets à louer entre les deux fjälls de Pyhä et de Luosto, à côté du parc national de Pyhä-Luosto. Une alternative plus calme à Levi et à Ruka, à moins de deux heures de l’aéroport de Rovaniemi. Chaque fiche ci-dessous indique le nombre de personnes, les chambres, la surface et le classement en étoiles ; le prix à la semaine et les semaines libres se consultent sur Lomarengas.',
    },
    rovaniemi: {
      seo: {
        title: 'Chalets à Rovaniemi : hébergement sur le cercle polaire',
        description: 'Chalets à Rovaniemi : chalets au bord de la rivière et cabanes en pleine nature le long de l’Ounasjoki et du Kemijoki, avec capacité, chambres et surface.',
      },
      h1: 'Chalets à Rovaniemi',
      intro: 'Lomarengas propose {near} chalets à louer dans un rayon de 10 km autour du centre de Rovaniemi, et {far} autres plus loin, dans les villages de Rovaniemi. Depuis les chalets proches du centre, le Village du Père Noël et les services de la ville sont à courte distance en voiture. Chaque fiche indique la distance jusqu’au centre, le nombre de personnes, les chambres, la surface et le classement en étoiles ; le prix à la semaine et les semaines libres se consultent sur Lomarengas.',
      split: {
        nearH2: 'Rovaniemi et alentours',
        nearNote: 'Chalets situés dans un rayon de 10 km autour du centre de Rovaniemi.',
        farH2: 'Ailleurs dans la commune de Rovaniemi',
        farNote: 'À plus de 10 km du centre, dans les villages de Rovaniemi. Depuis ces chalets, vous rejoindrez la ville en voiture.',
      },
    },
    inari: {
      seo: {
        title: 'Chalets à Inari : village d’Inari, Ivalo et au-delà',
        description: 'Chalets à louer à Inari chez Lomarengas : le village d’Inari, Ivalo et le reste de la commune, avec distance, capacité, chambres et surface de chaque chalet.',
      },
      h1: 'Chalets à Inari',
      intro: 'Lomarengas propose {near} chalets à louer dans un rayon de 10 km autour du village d’Inari ou d’Ivalo, et {far} autres plus loin, dans la nature sauvage et les villages de la plus grande commune de Finlande par sa superficie. Le village d’Inari, au bord du lac Inari, abrite le musée sami Siida ; l’aéroport d’Ivalo est le plus septentrional de Finlande. Saariselkä a sa propre page. Chaque fiche indique la distance jusqu’au village d’Inari ou jusqu’à Ivalo, le nombre de personnes, les chambres, la surface et le classement en étoiles ; le prix à la semaine et les semaines libres se consultent sur Lomarengas.',
      split: {
        nearH2: 'Village d’Inari, Ivalo et alentours',
        nearNote: 'Chalets situés dans un rayon de 10 km autour du village d’Inari ou d’Ivalo.',
        farH2: 'Ailleurs dans la commune d’Inari',
        farNote: 'À plus de 10 km du village d’Inari et d’Ivalo. Chaque fiche indique la distance jusqu’au plus proche des deux.',
      },
    },
    enontekio: {
      seo: {
        title: 'Chalets à Enontekiö : Kilpisjärvi, Hetta et Raattama',
        description: 'Chalets à louer à Enontekiö chez Lomarengas : près de Kilpisjärvi, de Hetta et de Raattama, avec distance, capacité, chambres et surface sur une page.',
      },
      h1: 'Chalets à Enontekiö',
      intro: 'Lomarengas propose {near} chalets à louer dans un rayon de 10 km autour de Kilpisjärvi, de Hetta ou de Raattama, et {far} autres plus loin, dans les villages d’Enontekiö. Kilpisjärvi est le village de fjäll situé au pied du Saana, à l’extrême nord-ouest de la Finlande ; Hetta, le chef-lieu de la commune, se trouve à l’extrémité nord du parc national Pallas-Yllästunturi, et Raattama est un village au bord de l’Ounasjoki. Chaque fiche indique la distance jusqu’au plus proche de ces villages, le nombre de personnes, les chambres, la surface et le classement en étoiles ; le prix à la semaine et les semaines libres se consultent sur Lomarengas.',
      split: {
        nearH2: 'Kilpisjärvi, Hetta, Raattama et alentours',
        nearNote: 'Chalets situés dans un rayon de 10 km autour de l’un de ces villages.',
        farH2: 'Ailleurs dans la commune d’Enontekiö',
        farNote: 'À plus de 10 km du plus proche de ces villages. Chaque fiche indique depuis quel village la distance est mesurée.',
      },
    },
    utsjoki: {
      seo: {
        title: 'Chalets à Utsjoki : Utsjoki, Nuorgam et Karigasniemi',
        description: 'Chalets à louer à Utsjoki chez Lomarengas : près du village d’Utsjoki, de Nuorgam et de Karigasniemi, avec distance, capacité, chambres et surface.',
      },
      h1: 'Chalets à Utsjoki',
      intro: 'Lomarengas propose {near} chalets à louer dans un rayon de 10 km autour du village d’Utsjoki, de Nuorgam ou de Karigasniemi, et {far} autres plus loin. Utsjoki, au bord du fleuve Teno, est la commune la plus septentrionale de Finlande ; Nuorgam est le village le plus au nord du pays et Karigasniemi un village à la frontière norvégienne. Chaque fiche indique la distance jusqu’au village le plus proche, le nombre de personnes, les chambres, la surface et le classement en étoiles ; le prix à la semaine et les semaines libres se consultent sur Lomarengas.',
      split: {
        nearH2: 'Utsjoki, Nuorgam, Karigasniemi et alentours',
        nearNote: 'Chalets situés dans un rayon de 10 km autour de l’un de ces villages.',
        farH2: 'Ailleurs dans la commune d’Utsjoki',
        farNote: 'À plus de 10 km du plus proche de ces villages. Chaque fiche indique depuis quel village la distance est mesurée.',
      },
    },
    muonio: {
      seo: {
        title: 'Chalets à Muonio : Olos et le village de Muonio',
        description: 'Chalets à louer à Muonio chez Lomarengas : à Olos et près du village de Muonio, avec distance, capacité, chambres et surface sur une page.',
      },
      h1: 'Chalets à Muonio',
      intro: 'Lomarengas propose {near} chalets à louer dans un rayon de 10 km autour de la station de ski d’Olos ou du village de Muonio, et {far} autres plus loin. Muonio se trouve à la frontière suédoise, au bord de la rivière Muonionjoki, et les fjälls de Pallas sont sur son territoire. Chaque fiche indique la distance jusqu’à Olos ou jusqu’au village, le nombre de personnes, les chambres, la surface et le classement en étoiles ; le prix à la semaine et les semaines libres se consultent sur Lomarengas.',
      split: {
        nearH2: 'Olos, village de Muonio et alentours',
        nearNote: 'Chalets situés dans un rayon de 10 km autour d’Olos ou du village de Muonio.',
        farH2: 'Ailleurs dans la commune de Muonio',
        farNote: 'À plus de 10 km d’Olos et du village.',
      },
    },
    kittila: {
      seo: {
        title: 'Chalets à Kittilä : Raattama et les villages',
        description: 'Chalets à louer à Kittilä hors de la station de Levi, chez Lomarengas : Raattama et d’autres villages, avec distance, capacité, chambres et surface.',
      },
      h1: 'Chalets à Kittilä',
      intro: 'Lomarengas propose {near} chalets à louer dans un rayon de 10 km autour de Raattama ou de Levi, et {far} autres plus loin, dans les villages de Kittilä. Les chalets de la station de Levi ont leur propre page. Raattama est un village au bord de l’Ounasjoki, et l’aéroport de Kittilä se trouve juste au nord du village de Kittilä. Chaque fiche indique la distance jusqu’au plus proche de ces lieux, le nombre de personnes, les chambres, la surface et le classement en étoiles ; le prix à la semaine et les semaines libres se consultent sur Lomarengas.',
      split: {
        nearH2: 'Raattama, Levi et alentours',
        nearNote: 'Chalets situés dans un rayon de 10 km autour de Raattama ou de Levi.',
        farH2: 'Ailleurs dans la commune de Kittilä',
        farNote: 'À plus de 10 km de Raattama, de Levi et du village de Kittilä. Chaque fiche indique depuis quel lieu la distance est mesurée.',
      },
    },
    sodankyla: {
      seo: {
        title: 'Chalets à Sodankylä : en dehors de Luosto et de Saariselkä',
        description: 'Chalets à louer à Sodankylä en dehors de Luosto et de Saariselkä, chez Lomarengas : distance, capacité, chambres et surface de chaque chalet.',
      },
      h1: 'Chalets à Sodankylä',
      intro: 'Lomarengas propose {count} chalets à louer à Sodankylä en dehors de Luosto et de Saariselkä : Saariselkä a sa propre page, et Luosto figure sur celle de Pyhä et Luosto. Sodankylä accueille chaque année, en juin, le festival de cinéma du soleil de minuit (Midnight Sun Film Festival). Chaque fiche indique la distance jusqu’au village de Sodankylä, le nombre de personnes, les chambres, la surface et le classement en étoiles ; le prix à la semaine et les semaines libres se consultent sur Lomarengas.',
    },
    salla: {
      seo: {
        title: 'Chalets à Salla : location à Sallatunturi',
        description: 'Chalets à louer à Salla chez Lomarengas : à Sallatunturi et au village de Salla, avec distance, capacité, chambres et surface sur une page.',
      },
      h1: 'Chalets à Salla',
      intro: 'Lomarengas propose {near} chalets à louer dans un rayon de 10 km autour de Sallatunturi ou du village de Salla, et {far} autres plus loin, dans les villages de Salla. La station de ski de Sallatunturi jouxte le parc national de Salla, en Laponie orientale. Chaque fiche indique la distance jusqu’à Sallatunturi ou jusqu’au village, le nombre de personnes, les chambres, la surface et le classement en étoiles ; le prix à la semaine et les semaines libres se consultent sur Lomarengas.',
      split: {
        nearH2: 'Sallatunturi, village de Salla et alentours',
        nearNote: 'Chalets situés dans un rayon de 10 km autour de Sallatunturi ou du village de Salla.',
        farH2: 'Ailleurs dans la commune de Salla',
        farNote: 'À plus de 10 km de Sallatunturi et du village. Depuis ces chalets, vous rejoindrez généralement les pistes en voiture.',
      },
    },
    kemijarvi: {
      seo: {
        title: 'Chalets à Kemijärvi : Suomu et Kemijärvi',
        description: 'Chalets à louer à Kemijärvi chez Lomarengas : à Suomu et près du centre-ville, avec distance, capacité, chambres et surface sur une page.',
      },
      h1: 'Chalets à Kemijärvi',
      intro: 'Lomarengas propose {near} chalets à louer dans un rayon de 10 km autour de la station de ski de Suomu ou du centre de Kemijärvi, et {far} autres plus loin. Kemijärvi, au bord du lac du même nom, est la ville la plus septentrionale de Finlande, et le Suomutunturi se trouve au sud-est. Les chalets de Kemijärvi proches du Pyhätunturi figurent sur la page Pyhä et Luosto. Chaque fiche indique la distance jusqu’à Suomu ou jusqu’au centre-ville, le nombre de personnes, les chambres, la surface et le classement en étoiles ; le prix à la semaine et les semaines libres se consultent sur Lomarengas.',
      split: {
        nearH2: 'Suomu, Kemijärvi et alentours',
        nearNote: 'Chalets situés dans un rayon de 10 km autour de Suomu ou du centre de Kemijärvi.',
        farH2: 'Ailleurs dans la commune de Kemijärvi',
        farNote: 'À plus de 10 km de Suomu et du centre-ville.',
      },
    },
    posio: {
      seo: {
        title: 'Chalets à Posio : au village et à la campagne',
        description: 'Chalets à louer à Posio chez Lomarengas, près du village et dans toute la commune, avec distance, capacité, chambres et surface sur une page.',
      },
      h1: 'Chalets à Posio',
      intro: 'Lomarengas propose {near} chalets à louer dans un rayon de 10 km autour du village de Posio, et {far} autres plus loin, dans les villages de Posio. Le parc national de Riisitunturi et le canyon de Korouoma se trouvent à Posio. Chaque fiche indique la distance jusqu’au village de Posio, le nombre de personnes, les chambres, la surface et le classement en étoiles ; le prix à la semaine et les semaines libres se consultent sur Lomarengas.',
      split: {
        nearH2: 'Village de Posio et alentours',
        nearNote: 'Chalets situés dans un rayon de 10 km autour du village de Posio.',
        farH2: 'Ailleurs dans la commune de Posio',
        farNote: 'À plus de 10 km du village.',
      },
    },
    pello: {
      seo: {
        title: 'Chalets à Pello : location chez Lomarengas',
        description: 'Chalets à louer à Pello chez Lomarengas, avec la distance jusqu’au village de Pello, la capacité, les chambres et la surface de chaque chalet.',
      },
      h1: 'Chalets à Pello',
      intro: 'Lomarengas propose {count} chalets à louer à Pello. Pello se trouve au bord du fleuve Tornionjoki, à la frontière suédoise. Chaque fiche indique la distance jusqu’au village de Pello, le nombre de personnes, les chambres, la surface et le classement en étoiles ; le prix à la semaine et les semaines libres se consultent sur Lomarengas.',
    },
  },
  guestsLabel: 'personnes',
  bedroomsLabel: 'chambres',
  sizeLabel: 'surface',
  starsLabel: 'étoiles',
  viewCabin: 'Voir le chalet',
  weekFrom: 'semaine dès {price} €',
  pricesDated: 'Prix à la semaine relevés le {date} ; le prix final dépend de la semaine choisie.',
  priceOnPartner: 'Prix et semaines libres sur Lomarengas',
  browseAll: 'Voir tous les chalets de la région sur Lomarengas (site en anglais)',
  showMore: 'Afficher plus de chalets',
  dataNote: 'Photos et informations issues des données produits de Lomarengas. Le prix et les semaines libres figurent sur le site de Lomarengas, où se fait la réservation. Lomarengas n’est disponible qu’en finnois et en anglais ; les liens ouvrent la version anglaise.',
  distance: 'à environ {km} km {from}',
  distanceUnder1: 'à moins de 1 km {from}',
  distanceNote: 'Les distances sont mesurées à vol d’oiseau, de l’emplacement du chalet (tel qu’indiqué sur sa page Lomarengas) jusqu’au point de référence le plus proche (village, centre-ville ou station), puis arrondies au kilomètre ; par la route, le trajet est plus long.',
  otherAreasH2: 'Chalets dans d’autres destinations',
  destinationLink: 'Hôtels, igloos et guide de cette destination',
  breadcrumbHome: 'Accueil',
  breadcrumbCabins: 'Séjours en chalet',
}

export default copy
