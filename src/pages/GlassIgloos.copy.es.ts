import type { GlassIgloosCopy } from './GlassIgloos.copy.types'

/**
 * Spanish glass-igloo page, /es/glass-igloos. Translated from GlassIgloos.copy.en.ts on
 * 22.10.2026; same facts, no number the English source does not have (numeroportti).
 *
 * Title and h1 follow the demand measured with OpenSEO, market Spain (17.9. + 22.10.2026):
 * hotel iglu finlandia 70/month, hotel iglu laponia 70, iglu(s) finlandia 30, iglús de cristal
 * finlandia 20, kakslauttanen 140. "Hotel iglú" is how people search, "iglú de cristal" is the
 * product and this site's own term, so the title leads with the first and the text uses both.
 *
 * Address form: usted (network rule for es). Vocabulary is the site's: fjäll for fell,
 * Pueblo de Papá Noel, "Ver disponibilidad". Written for a reader in Spain without regional
 * slang, as the rest of the site's es copy. Rows open Trip.com (CLAUDE.md, Affiliate Links).
 */
const es: GlassIgloosCopy = {
  seo: {
    title: 'Hoteles iglú en Finlandia: 11 complejos de Laponia',
    description:
      'Iglús de cristal en la Laponia finlandesa, comparados: 11 complejos en Rovaniemi, Saariselkä, Inari y Levi, con aeropuerto, habitaciones y cuándo reservar.',
  },
  breadcrumbHome: 'Inicio',
  breadcrumbPage: 'Hoteles iglú en Finlandia',
  keywords: ['hotel iglu finlandia', 'hotel iglu laponia', 'iglus finlandia', 'iglu finlandia', 'iglús de cristal finlandia', 'iglú de cristal finlandia', 'kakslauttanen'],
  adBadge: 'Contiene enlaces de afiliación',
  h1: 'Hoteles iglú en Finlandia',
  lead:
    'Un iglú de cristal en la Laponia finlandesa puede ser un alojamiento pequeño para dos o tres huéspedes o un chalet de troncos unido a un iglú de cristal. Se llaman igual, pero el edificio, el trozo de cielo que se ve desde la cama y lo que incluye la tarifa cambian de uno a otro. Esta página reúne 11 complejos ordenados por zona, con el aeropuerto más cercano y el tipo de habitación, y le ayuda a elegir la zona que mejor encaje con su viaje.',
  heroAlt: 'Iglús de cristal en un bosque nevado del Kakslauttanen Arctic Resort, en Saariselkä, con dos personas caminando por el sendero',

  typesEyebrow: 'Primero, los tipos',
  typesH2: 'Qué se considera un iglú de cristal',
  typesIntro:
    'En Laponia se venden como «iglú» tres cosas distintas. Casi toda la diferencia en comodidad depende del tipo y del tamaño: un iglú pequeño para dos o tres huéspedes o una cabaña familiar.',
  typeCards: [
    {
      title: 'Iglú de cristal independiente',
      tagline: 'Una cúpula o cabaña pequeña con todo el techo de cristal',
      body: 'Un alojamiento con calefacción que se alza aislado en la nieve, con cristal sobre la cama y a menudo también en las paredes. El Kakslauttanen Arctic Resort de Saariselkä y el Golden Crown Levin Iglut, cerca de Levi, son de este tipo. El cielo se ve sin salir de la cama.',
      forWho: 'Ideal para: parejas que viajan a ver auroras y quien quiera hacer fotos desde la cama.',
    },
    {
      title: 'Cabaña o habitación con techo de cristal',
      tagline: 'Una cabaña o habitación de hotel con techo acristalado',
      body: 'Una cabaña o habitación de hotel corriente con parte del techo de cristal. La cadena Wilderness Hotels llama Aurora Cabins a las suyas y les pone un techo de cristal calefactado, y el Star Arctic Hotel, en el fjäll Kaunispää, tiene sobre la cama un techo de cristal de tres paneles. Como suele haber menos cristal en la habitación, puede resultar más fácil mantener el calor, la oscuridad y la intimidad.',
      forWho: 'Ideal para: viajeros que anteponen la comodidad y estancias más largas.',
    },
    {
      title: 'Iglú de nieve (hotel de nieve)',
      tagline: 'Nombre parecido, producto distinto',
      body: 'Una habitación de nieve y hielo que se reconstruye cada invierno y en la que la temperatura se mantiene entre 0 y −5 °C. El hotel de nieve del Arctic SnowHotel & Glass Igloos, cerca de Rovaniemi, abre cada año el 15 de diciembre, proporciona sacos de dormir para frío extremo y no recomienda que los niños menores de 5 años pasen allí la noche. Un iglú de cristal es una habitación caldeada con vistas al cielo; aquí, la experiencia es la propia noche fría.',
      forWho: 'Ideal para: una noche de aventura. A la mayoría le basta con una.',
    },
  ],
  typesNote: [
    'El Arctic SnowHotel tiene iglús de cristal y hotel de nieve en el mismo complejo, así que es posible probar ambos. Para ver todos los tipos de alojamiento de Laponia, consulte la ',
    { to: '/property-types', label: 'guía de tipos de alojamiento' },
    ' de este sitio y el artículo de LaplandVibes «',
    { href: 'https://laplandvibes.com/es/blog/lapland-glass-cabin-categories/', label: 'Las cabañas de cristal de Laponia, aclaradas' },
    '».',
  ],
  kidsNote:
    'Si viaja con niños, lo que hay que revisar es el hotel de nieve: el Arctic SnowHotel no recomienda que los menores de 5 años pasen la noche en sus habitaciones de nieve. Los iglús de cristal son habitaciones con calefacción, pero las normas de edad y la posibilidad de que un niño comparta cama cambian según el complejo, así que pregunte al reservar.',

  seasonEyebrow: 'Temporada',
  seasonH2: 'La temporada de iglús empieza con la oscuridad, no con la nieve',
  seasonBody: [
    'La temporada de los iglús de cristal la marcan las noches oscuras, no la nieve. En la guía mes a mes de este sitio, la temporada de auroras va de septiembre a abril, y algunos complejos abren para coincidir con ella: Levin Iglut y los iglús de cristal del Arctic SnowHotel, el 1 de septiembre. Solo el hotel de nieve espera hasta el 15 de diciembre.',
    'No hace falta esperar a la nieve. En septiembre y octubre coinciden los colores del otoño y las primeras noches de auroras, y todavía hay disponibilidad. De junio a mediados de julio el sol no se pone y la aurora no se ve en absoluto. Bajo un techo de cristal en verano se contempla el sol de medianoche, que es una experiencia en sí misma, aunque probablemente no sea la que usted venía buscando.',
  ],

  tableH2: 'Los complejos: zona, aeropuerto y tipo de habitación',
  tableIntro:
    'La tabla recoge los 11 complejos que este sitio enlaza a través de su socio de reservas, agrupados por zona en las secciones de abajo.',
  tableHeaders: { name: 'Complejo', area: 'Zona', airport: 'Aeropuerto más cercano', feature: 'Habitaciones', book: 'Reservar' },
  bookLabel: 'Ver disponibilidad',
  rows: {
    kakslauttanen: {
      name: 'Kakslauttanen Arctic Resort',
      area: 'Saariselkä, 10 km al sur del pueblo',
      airport: 'Ivalo (IVL), 35 km, unos 30 min',
      feature: 'Iglús de cristal para hasta 3 o 5 huéspedes y Kelo-Glass Igloo: un chalet de troncos unido a un iglú de cristal',
    },
    starArctic: {
      name: 'Star Arctic Hotel',
      area: 'Saariselkä, en lo alto del fjäll Kaunispää',
      airport: 'Ivalo (IVL)',
      feature: 'Aurora Glass Cabins de 20 m² con techo de cristal de tres paneles sobre la cama',
    },
    muotka: {
      name: 'Wilderness Hotel Muotka',
      area: 'Cerca de Saariselkä',
      airport: 'Ivalo (IVL), unos 45 min',
      feature: 'Aurora Cabins de 30 m² para hasta 4 personas, con techo de cristal calefactado',
    },
    auroraVillage: {
      name: 'Aurora Village Ivalo',
      area: 'Ivalo',
      airport: 'Ivalo (IVL), 15 min',
      feature: 'Aurora Cabins de 28 m² con techo de cristal y avisos de auroras a través de una app',
    },
    nellim: {
      name: 'Wilderness Hotel Nellim',
      area: 'Nellim, a orillas del lago Inari',
      airport: 'Ivalo (IVL), unos 45 min',
      feature: 'Aurora Cabins con techo de cristal calefactado y villas junto al lago',
    },
    wildernessInari: {
      name: 'Wilderness Hotel Inari',
      area: 'Lago Inari, a 5 min del pueblo de Inari',
      airport: 'Ivalo (IVL), unos 45 min',
      feature: 'Aurora Cabins de 29 m² para hasta 4 personas, con techo de cristal calefactado',
    },
    arcticSnowHotel: {
      name: 'Arctic SnowHotel & Glass Igloos',
      area: 'Lehtojärvi, a 30 min del centro de Rovaniemi',
      airport: 'Rovaniemi (RVN), 40 min',
      feature: 'Iglús de cristal con calefacción desde el 1 de septiembre y un hotel de nieve que se reconstruye cada invierno (desde el 15 de diciembre, de 0 a −5 °C)',
    },
    apukka: {
      name: 'Apukka Resort',
      area: 'Rovaniemi, a 18 km (15 min) del centro',
      airport: 'Rovaniemi (RVN), 10 km',
      feature: 'Aurora Cabins con techo panorámico de cristal calefactado y suites iglú de cristal con vistas de 360°',
    },
    santasIgloosArcticCircle: {
      name: 'Santa’s Igloos Arctic Circle',
      area: 'Pueblo de Papá Noel, Rovaniemi',
      airport: 'Rovaniemi (RVN), 5 km',
      feature: '71 iglús con techo de cristal calefactado',
    },
    levinIglut: {
      name: 'Golden Crown Levin Iglut',
      area: 'Levi, a 10 km del pueblo, a 340 m sobre el nivel del mar',
      airport: 'Kittilä (KTT), 15 min',
      feature: 'Iglús de las categorías Superior, Prime Superior y Suite',
    },
    northernLightsRanch: {
      name: 'Northern Lights Ranch',
      area: 'Köngäs, a 15 km de Levi',
      airport: 'Kittilä (KTT), 30 km',
      feature: 'Sky View Cabins: cabañas tipo iglú con techo de cristal calefactado, en seis estilos',
    },
  },
  tableNote:
    'Cada fila abre la página de ese complejo en nuestro socio de reservas Trip.com, con precios y disponibilidad para sus fechas de viaje. Los precios de los iglús cambian mucho de una semana a otra, por eso no los publicamos aquí. Las distancias, los tiempos y los detalles de las habitaciones proceden de la web de cada complejo, y las distancias de los aeropuertos, de Finavia; todo comprobado el 18 de octubre de 2026.',

  areas: {
    rovaniemi: {
      eyebrow: 'Para un viaje corto',
      title: 'Alrededor de Rovaniemi: cerca del aeropuerto',
      intro:
        'El aeropuerto de Rovaniemi (RVN) está a 10 km del centro de la ciudad. Un iglú en los alrededores de Rovaniemi es la opción sensata si su viaje es corto, si también quiere visitar el Pueblo de Papá Noel o si prefiere pasar el menor tiempo posible en traslados.',
      properties: [
        {
          name: 'Arctic SnowHotel & Glass Igloos (Lehtojärvi)',
          body: 'Iglús de cristal desde el 1 de septiembre y hotel de nieve desde el 15 de diciembre, a 30 minutos del centro de la ciudad y a 40 del aeropuerto. El complejo menciona una alarma de auroras entre los servicios de sus iglús de cristal.',
        },
        {
          name: 'Apukka Resort',
          body: 'El complejo está a 18 km (15 minutos) del centro y a 10 km del aeropuerto. Las Aurora Cabins tienen un techo panorámico de cristal calefactado; las suites iglú de cristal Kammi y Komsio ofrecen vistas de 360°.',
        },
        {
          name: 'Santa’s Igloos Arctic Circle',
          body: 'En el Pueblo de Papá Noel, a 5 km del aeropuerto: 71 iglús con techo de cristal calefactado.',
        },
      ],
      outro:
        'Lo único que conviene sopesar es la contaminación lumínica de la ciudad. Los complejos de los alrededores de Rovaniemi están apartados del centro, pero si busca un cielo más oscuro, vaya más al norte.',
      ctaLabel: 'Buscar alojamiento en Rovaniemi',
      guideLinks: [{ to: '/destinations/rovaniemi', label: 'Guía de Rovaniemi' }],
    },
    north: {
      eyebrow: 'Si lo primero es un cielo oscuro',
      title: 'Saariselkä, Ivalo e Inari: rumbo al norte',
      intro:
        'El aeropuerto de Ivalo (IVL) está a 25 km de Saariselkä y a 11 km del centro de Ivalo. Inari queda más al norte: Wilderness Hotels calcula unos 45 minutos desde el aeropuerto hasta sus hoteles de Inari y Nellim. Los datos de luz diurna mes a mes de este sitio son de Rovaniemi (66,5° N), y en Saariselkä e Inari el invierno es aún más oscuro. Si la aurora es el motivo principal del viaje, esa es la razón para ir al norte.',
      properties: [
        {
          name: 'Kakslauttanen Arctic Resort',
          body: 'El complejo está a 10 km al sur del pueblo de Saariselkä y a 35 km (unos 30 minutos) del aeropuerto de Ivalo. Tiene iglús de cristal para hasta 3 o 5 huéspedes y otros del tipo Kelo-Glass Igloo, en los que un chalet de troncos está unido a un iglú de cristal. Una de sus tarifas de invierno incluye desayuno y cena.',
        },
        {
          name: 'Star Arctic Hotel',
          body: 'En lo alto del fjäll Kaunispää, en Saariselkä. La Aurora Glass Cabin tiene 20 m², capacidad para dos adultos y un niño de 11 años o menos, y un techo de cristal de tres paneles justo encima de la cama.',
        },
        {
          name: 'Wilderness Hotel Muotka',
          body: 'Cerca de Saariselkä, a unos 45 minutos del aeropuerto de Ivalo. Sus Aurora Cabins tienen 30 m², capacidad para hasta cuatro personas y techo de cristal calefactado.',
        },
        {
          name: 'Aurora Village Ivalo',
          body: 'En Ivalo, a 15 minutos del aeropuerto. Aurora Cabins de 28 m² con techo de cristal y avisos de auroras a través de una app.',
        },
        {
          name: 'Wilderness Hotel Nellim y Wilderness Hotel Inari',
          body: 'Los dos están a orillas del lago Inari, a unos 45 minutos del aeropuerto de Ivalo. El Wilderness Hotel Inari queda a cinco minutos del pueblo de Inari; Nellim es un pueblo aparte. Ambos tienen Aurora Cabins con techo de cristal calefactado.',
        },
      ],
      ctaLabel: 'Buscar alojamiento en Saariselkä',
      guideLinks: [
        { to: '/destinations/saariselka', label: 'Guía de Saariselkä' },
        { to: '/destinations/inari', label: 'Guía de Inari' },
      ],
    },
    levi: {
      eyebrow: 'Si además quiere esquiar',
      title: 'Levi: pistas de día, techo de cristal de noche',
      intro:
        'El aeropuerto de Kittilä (KTT) está a 15 km de Levi. Elija Levi si el plan principal es esquiar y el iglú es el broche final del viaje.',
      properties: [
        {
          name: 'Golden Crown Levin Iglut',
          body: 'Iglús de cristal a 10 km del pueblo de Levi, a 340 m sobre el nivel del mar y a 15 minutos del aeropuerto de Kittilä. Tres categorías de habitación: Superior, Prime Superior y Suite. La temporada de iglús 2026–27 va del 1 de septiembre al 13 de abril; en septiembre y octubre el complejo solo abre de martes a sábado.',
        },
        {
          name: 'Northern Lights Ranch',
          body: 'En Köngäs, a 15 km de Levi y a 30 km del aeropuerto de Kittilä. Sus Sky View Cabins son cabañas tipo iglú con techo de cristal calefactado, en seis estilos.',
        },
      ],
      outro:
        'Una noche en un iglú es más un capricho que una base para toda la semana, así que rara vez tiene sentido dormir todas las noches en uno. Alójese en el pueblo o en un chalet cerca de las pistas y añada una o dos noches de iglú al final: esquí de día y la última noche bajo el cristal.',
      ctaLabel: 'Buscar alojamiento en Levi',
      guideLinks: [{ to: '/destinations/levi', label: 'Guía de Levi' }],
    },
  },

  questionsEyebrow: 'Cómo elegir',
  questionsH2: 'Qué zona elegir: tres preguntas',
  questionsIntro: 'Con las tres zonas delante, la elección se reduce a tres preguntas.',
  questions: [
    {
      title: '¿Cuántas noches tiene?',
      body: 'Con tres noches o menos, empiece por Rovaniemi: los traslados son los más cortos, así que se pierde menos tiempo del viaje en desplazamientos. Con cuatro noches o más, volar a Ivalo y subir hacia el norte, a Saariselkä o a Inari, pasa a ser una opción realista.',
    },
    {
      title: '¿El viaje es por la aurora o por el esquí?',
      body: 'Si lo primero es la aurora, vaya al norte: el invierno en Saariselkä e Inari es más oscuro que en Rovaniemi. Si lo primero es el esquí, elija Levi. Si quiere las dos cosas, combine una semana de esquí en Levi con una o dos noches en el Golden Crown Levin Iglut, o vaya al norte en marzo, cuando los días son más largos.',
    },
    {
      title: '¿En qué conviene gastar el presupuesto?',
      body: 'El mismo dinero da para viajes distintos según cómo lo reparta: todas las noches en un iglú más económico, o habitaciones normales y una sola noche en uno mejor. Compare el total con comidas y traslados incluidos, no la tarifa por noche. Kakslauttanen, por ejemplo, vende una tarifa de invierno con desayuno y cena incluidos, así que compruebe qué cubre cada tarifa.',
    },
  ],

  cabinCombo: {
    eyebrow: 'Un plan sencillo',
    h2: 'Una o dos noches de iglú y una cabaña para el resto de la semana',
    body: 'Una noche de iglú funciona mejor como capricho que como base para toda una semana. Una forma de organizar el viaje a Laponia es pasar una o dos noches en un iglú y el resto de la semana en una cabaña de alquiler de la misma zona: cabe todo el grupo y puede disponer de sauna y cocina propias durante toda la semana. Este sitio reúne las cabañas de cada zona con la distancia al pueblo más cercano.',
    linkLabel: 'Cabañas en Laponia por zona',
  },

  accessEyebrow: 'Cómo llegar',
  accessH2: 'Cómo llegar: vuelos, tren nocturno y traslados',
  access: [
    [
      'A los complejos de iglús de esta página se llega por tres aeropuertos: Rovaniemi (RVN), Kittilä (KTT) para Levi e Ivalo (IVL) para Saariselkä e Inari. Rovaniemi tiene vuelos desde Helsinki todo el año. En invierno, los tres aeropuertos reciben además vuelos directos desde varias ciudades europeas, y las rutas cambian de un año a otro, así que compruebe qué rutas hay desde su aeropuerto de salida.',
    ],
    [
      'Los tiempos de traslado a cada complejo figuran en las secciones de zona de arriba. Como referencia, RVN está a 10 km del centro de Rovaniemi, KTT a 15 km de Levi e IVL a 25 km de Saariselkä.',
    ],
    [
      'Si prefiere no volar, el tren nocturno de los ferrocarriles finlandeses VR va de Helsinki a Rovaniemi y puede llevar también su coche. De Rovaniemi a Saariselkä quedan unas cuatro horas más en autobús, así que para los complejos del norte es más rápido volar a Ivalo. Algunos complejos venden traslados desde el aeropuerto, en paquete o como extra; las demás opciones están en la ',
      { to: '/transport', label: 'guía de transporte' },
      '.',
    ],
  ],

  itinerariesEyebrow: 'Planificación',
  itinerariesH2: 'Viajes de ejemplo: dónde colocar las noches de iglú',
  itinerariesIntro:
    'Coloque las noches de iglú en la segunda mitad del viaje, por dos razones: la primera noche, con el cansancio del viaje, cuesta más quedarse despierto esperando la aurora, y las noches posteriores sirven de reserva si las primeras salen nubladas.',
  itineraries: [
    {
      title: '3 noches en Rovaniemi',
      body: 'La primera noche, en la ciudad o cerca del Pueblo de Papá Noel, con el museo Arktikum y un safari. La segunda y la tercera, en un iglú de cristal fuera de la ciudad, reservando la última velada para la aurora.',
    },
    {
      title: '4 noches en Saariselkä',
      body: 'La primera y la segunda noche, en un hotel del pueblo, con una salida con raquetas de nieve por el parque nacional Urho Kekkonen y un safari con huskies, ambos desde el pueblo. La tercera y la cuarta, en un iglú.',
    },
    {
      title: '5 noches en Levi',
      body: 'Tres días de esquí desde un hotel del pueblo o un chalet cerca de las pistas, y después la última noche o las dos últimas en el Golden Crown Levin Iglut. El cambio de alojamiento es de 10 km, así que basta con un taxi y no hace falta coche de alquiler.',
    },
  ],

  inclusionsEyebrow: 'Misma noche, distinta tarifa',
  inclusionsH2: 'Qué incluye la tarifa: cena, traslados, sauna',
  inclusionsBody: [
    'Ejemplos que hemos podido confirmar en las webs de los propios complejos: Kakslauttanen vende una tarifa de invierno con desayuno y cena incluidos. En Kakslauttanen, los traslados privados desde el aeropuerto solo están incluidos en el precio del Luxury Kelo-Glass Igloo, y el Aurora Adventure Break de tres noches del Wilderness Hotel Muotka incluye los traslados desde el aeropuerto de Ivalo. En las habitaciones de nieve del Arctic SnowHotel, los sacos de dormir para frío extremo van incluidos.',
    'Lo que incluye una tarifa depende del plan tarifario, no solo del complejo. Antes de reservar, conviene comprobar tres cosas:',
  ],
  inclusions: [
    {
      title: 'Cena',
      body: '¿Puede ir a pie a los restaurantes de un pueblo, o el restaurante del complejo es la única opción? Si es la única opción, una tarifa con cena incluida cobra más importancia.',
    },
    {
      title: 'Traslado desde el aeropuerto',
      body: '¿Incluido, con suplemento o por su cuenta? En Ivalo y Kittilä hay poco transporte público, así que esto cambia el total.',
    },
    {
      title: 'Sauna',
      body: '¿Una sauna compartida o una privada en su habitación o cabaña? Las saunas son habituales en los alojamientos finlandeses, pero tener una propia cambia la estancia.',
    },
  ],
  inclusionsNote:
    'No recogemos estos tres puntos en una tabla fija a propósito: cambian con cada plan tarifario, y una tabla fija quedaría desfasada antes que las páginas de los propios complejos. Confírmelo siempre en la página de reservas del complejo.',

  bookingEyebrow: 'Antelación',
  bookingH2: 'Cuándo reservar: 8–12 meses antes para las semanas punta',
  bookingIntro:
    'Para las semanas punta, Kakslauttanen y Levin Iglut se reservan con 8–12 meses de antelación. En noviembre ya empiezan a llenarse los iglús para las semanas punta del invierno del año siguiente, así que la oferta se reduce mucho antes del cambio de año. Según la guía mes a mes de este sitio:',
  bookingRows: [
    { period: 'Semana de Navidad', body: 'Unos 12 meses antes.' },
    { period: 'Año Nuevo', body: 'Unos 10 meses antes.' },
    { period: 'Mediados de febrero', body: 'Vacaciones escolares europeas. Unos 6–8 meses antes.' },
    { period: 'Marzo', body: '4–6 meses antes. Uno de los meses preferidos de quienes repiten: noches oscuras y días más largos a la vez.' },
    { period: 'Septiembre–octubre', body: 'Todavía hay habitaciones libres, y ofrece la mejor relación entre auroras y precio de toda la temporada.' },
  ],
  bookingOutro: [
    'La luz, las auroras, la nieve y la reserva de cada mes están en la ',
    { to: '/when-to-go', label: 'guía de cuándo ir' },
    '. Si empieza a buscar un iglú de cristal para diciembre dos o tres meses antes del viaje, quedará muy poco. Trasladar el viaje a marzo suele ayudar más que conformarse con otro complejo.',
  ],

  cloudyEyebrow: 'Con franqueza',
  cloudyH2: '¿Y si está nublado?',
  cloudyIntro:
    'La aurora solo se ve en noches despejadas, y un iglú de cristal no puede venderle el tiempo que hará. Ningún complejo incluye la aurora en el precio. Hay tres cosas prácticas que usted puede hacer.',
  cloudy: [
    {
      title: 'Reserve más de una noche',
      body: 'Una sola noche es una apuesta; dos o tres mejoran sus probabilidades. Si coloca las noches de iglú al final del viaje, tendrá otra oportunidad si las primeras noches estuvieron nubladas.',
    },
    {
      title: 'Use un aviso de auroras',
      body: 'Algunos complejos avisan cuando aparece la aurora: Aurora Village Ivalo lo hace a través de una app, y el Arctic SnowHotel incluye una alarma de auroras en sus iglús de cristal. Antes de reservar, compruebe si su complejo tiene una. Si sus fechas son flexibles, la aurora suele estar más activa en torno a los equinoccios, así que marzo es un buen mes.',
    },
    {
      title: 'Planifique de antemano la noche nublada',
      body: 'Una sauna, una cena en el complejo, un paseo al aire libre: tener un plan que funcione con nubes evita que la noche parezca perdida.',
    },
  ],
  cloudyOutro: [
    'Incluso en una noche nublada tendrá una cama cálida bajo el cristal y, en invierno, los árboles iluminados por la nieve a su alrededor. Lo que sienta dependerá de lo que esperaba. Cuándo es más probable ver la aurora, y con qué posibilidades, lo explica la ',
    { href: 'https://laplandvibes.com/es/northern-lights/', label: 'guía de auroras boreales' },
    ' de LaplandVibes.',
  ],

  ctaH2: 'Elija la zona y después el mes',
  ctaBody:
    'Una vez decididos el tipo y la zona, solo queda elegir el mes. Consulte la luz, las auroras y la reserva mes a mes, y luego introduzca sus fechas en el calendario de reservas del complejo.',
  ctaPrimary: 'Cuándo ir',
  ctaSecondary: 'Tipos de alojamiento',
  checkedNote:
    'Datos de los complejos comprobados en la web de cada uno el 18 de octubre de 2026. Las temporadas, las habitaciones y lo que incluye cada tarifa cambian: confírmelo en la web y en la página de reservas del complejo.',
}

export default es
