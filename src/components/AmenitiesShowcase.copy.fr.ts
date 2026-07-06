import type { Copy } from './AmenitiesShowcase.copy.types'

const copy: Copy = {
    eyebrow: 'Ce que contient la chambre',
    h2: 'Six filtres qui décident du voyage',
    lead: "Utilisez-les comme filtres de recherche, pas comme liste de souhaits. Chacun désigne les catégories d'hébergement où l'équipement est réellement standard, et les opérateurs qui l'affichent clairement.",
    lookForLabel: 'À chercher chez',
    cta: 'Trouver un chalet avec ces équipements',
    items: [
      { title: 'Sauna privatif', body: "Standard dans les chalets et villas, au bois en gamme premium, électrique en appartement. Beaucoup de chalets au bord du lac donnent directement sur le ponton pour le plongeon dans le trou de glace.", lookForIn: 'Standard dans les chalets au bord du lac et chalets ski-in. Rare dans les chambres d\'hôtel classiques.', exampleNames: ['Chalets au bord du lac', 'Wilderness Hotel Nellim'] },
      { title: 'Réveil aurores', body: "L'établissement vous réveille quand le ciel est dégagé et que les aurores s'allument. Le service fait partie du séjour, aucune appli à penser à installer.", lookForIn: 'Kakslauttanen, Aurora Village Ivalo, Star Arctic, Levin Iglut, Apukka Resort.', exampleNames: ['Kakslauttanen Arctic Resort', 'Aurora Village Ivalo'] },
      { title: 'Cheminée à bois', body: "Une véritable takka, pas un insert au gaz. L'hébergement empile le bois ; vous l'allumez. Les évacuations de fumée sont standard dans les chalets récents.", lookForIn: "Lodges de design et chalets au bord du lac. Indiqué sur la fiche comme « tulisija » ou « fireplace ».", exampleNames: ['Lodges de design', 'Wilderness Hotel Muotka'] },
      { title: 'Cuisine équipée', body: "Four pleine taille, plaque, réfrigérateur, souvent lave-vaisselle. Les chaînes de chalets fournissent café/sel/huile de démarrage ; le reste se trouve au K-Market du village.", lookForIn: "Locations de chalet et de chalet ski-in. Hôtels et igloos de verre l'omettent en général, réservez un hôtel si vous voulez le petit-déjeuner au restaurant.", exampleNames: ['Chalets au bord du lac', 'Chalets de ski'] },
      { title: 'Bain nordique extérieur', body: "Eau à 40 °C, air à –20 °C, aurores au-dessus, la photo que tout le monde prend. Chauffé en continu ; prêt à votre arrivée.", lookForIn: 'La plupart des chalets de ski, des chalets premium au bord du lac et certains lodges. Listé « palju » sur les pages des opérateurs finlandais.', exampleNames: ['Chalets de ski à Levi', 'Apukka Resort'] },
      { title: 'Ski aux pieds (ski-in / ski-out)', body: "Vous chaussez devant la porte, prenez la télécabine en haut de la piste. Vous gagnez 20 minutes de portage chaque matin, cela compte sur cinq jours.", lookForIn: 'Levi (pistes du Levitunturi), Ylläs (les deux fells), Pyhä. Saariselkä est surtout du ski de fond.', exampleNames: ['Chalets de ski à Levi', 'Lodges à Ylläs'] },
    ],
  }

export default copy