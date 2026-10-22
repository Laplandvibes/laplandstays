import type { IceHotelsCopy } from './IceHotels.copy.types'

/**
 * Spanish ice- and snow-hotel page, /es/ice-hotels. Translated from IceHotels.copy.en.ts on
 * 22.10.2026; same facts, no number the English source does not have (numeroportti).
 *
 * Title follows the demand measured with OpenSEO, market Spain (22.10.2026): hotel de hielo 590/month,
 * hotel de hielo laponia 260 (SERP Finnish), hotel de hielo finlandia 210, arctic snowhotel 320,
 * hotel de hielo rovaniemi 50, snowcastle kemi 50. "icehotel" (720) and "hotel de hielo suecia" (210)
 * are the ICEHOTEL in Sweden, so the title carries both Laponia and Finlandia ("Inari, Finlandia"
 * pattern from the hub). "Hotel de hielo" is how people search; "hotel de nieve" is the product and the
 * site's own word on the glass-igloo page, so the text uses both. Lumilinna is not added: Spanish
 * searchers use "snowcastle kemi".
 *
 * Address form: usted (network rule for es), impersonal "se" where a dropped subject would be ambiguous.
 * Vocabulary as GlassIgloos.copy.es.ts: Pueblo de Papá Noel, "Ver disponibilidad", socio de reservas,
 * fechas de viaje, sacos de dormir para frío extremo. Written for a reader in Spain without regional
 * slang. The button opens Trip.com (CLAUDE.md, Affiliate Links: es is not a Sembo market).
 */
const es: IceHotelsCopy = {
  seo: {
    title: 'Hoteles de hielo en Laponia, Finlandia: dormir en la nieve',
    description:
      'Hoteles de hielo de la Laponia finlandesa en 2026–27: el Arctic SnowHotel de Rovaniemi, SnowVillage cerca de Ylläs, iglús de nieve en Pyhä y visitas de día.',
  },
  breadcrumbHome: 'Inicio',
  breadcrumbPage: 'Hoteles de hielo en la Laponia finlandesa',
  keywords: ['hotel de hielo laponia', 'hotel de hielo finlandia', 'arctic snowhotel', 'hotel de hielo', 'hotel de hielo rovaniemi', 'hotel de nieve laponia', 'snowcastle kemi'],
  adBadge: 'Contiene enlaces de afiliación',
  h1: 'Hoteles de hielo y nieve en la Laponia finlandesa',
  lead:
    'En el invierno 2026–27 hay tres lugares de la Laponia finlandesa donde se puede dormir en una habitación construida con nieve: el Arctic SnowHotel, cerca de Rovaniemi; SnowVillage, cerca de Ylläs; y los iglús de nieve de Lucky Ranch, cerca de Pyhä. El hotel de hielo más conocido, el ICEHOTEL, está en Suecia. Esta página explica qué incluye cada noche y qué lugares se pueden visitar sin alojarse en ellos.',
  heroAlt: 'Una suite de nieve del Arctic SnowHotel, cerca de Rovaniemi: una cama con mantas de piel entre esculturas de hielo y un ave con las alas abiertas tallada en la pared de nieve',

  staysEyebrow: 'Invierno 2026–27',
  staysH2: 'Dónde dormir en la nieve',
  staysIntro:
    'Los tres se reconstruyen cada invierno, así que las habitaciones, las temáticas y las fechas cambian de un año a otro. Lo que sigue es lo que cada lugar anuncia en su propia web para la próxima temporada.',
  arctic: {
    name: 'Arctic SnowHotel & Glass Igloos',
    place: 'Lehtoahontie 27, Rovaniemi: a unos 26 km (30 min) del centro de la ciudad y del Pueblo de Papá Noel, y a 40 min del aeropuerto',
    facts: [
      'El hotel de nieve abre el 15 de diciembre de 2026 y la temporada dura hasta el 31 de marzo.',
      'Dentro del hotel de nieve y hielo, la temperatura se mantiene entre 0 y −5 °C.',
      'La noche incluye sacos de dormir para frío extremo, acceso a la sala caldeada Snowhotel Lounge, sauna finlandesa compartida y desayuno bufé.',
      'La habitación de nieve queda a su disposición en exclusiva desde las 21:00. La cena y los traslados desde Rovaniemi forman parte de los paquetes del complejo, no de la tarifa de la habitación.',
      'No se recomienda que los niños menores de 5 años pasen allí la noche.',
    ],
    glassNote: [
      'El mismo complejo tiene también iglús de cristal con calefacción, abiertos desde el 1 de septiembre. Los comparamos con otros diez complejos en nuestra ',
      { to: '/glass-igloos', label: 'página de iglús de cristal' },
      '.',
    ],
    ctaLabel: 'Ver disponibilidad',
    ctaNote: 'Abre la página del complejo en nuestro socio de reservas Trip.com, con precios para sus fechas de viaje.',
  },
  snowVillage: {
    name: 'Lapland Hotels SnowVillage',
    place: 'Lainio, Kittilä, cerca de Ylläs',
    facts: [
      'Abre del 25 de diciembre de 2026 al 4 de abril de 2027, todos los días de 10:00 a 22:00.',
      'Desde 2001 se vuelve a levantar cada año partiendo de cero, con nieve y hielo natural. La temática de 2026–27 todavía no se ha anunciado.',
      'Solo se puede pasar la noche en una única suite de hielo de lujo para dos personas, que se vende en un paquete con visita guiada, cena en el restaurante de hielo, una cabaña kota con sauna y jacuzzi, y desayuno en un restaurante caldeado. Se reserva por correo electrónico directamente con SnowVillage, y su página todavía describe el invierno 2025–26.',
      'Durante el horario de apertura hay un autobús diario desde Levi y desde Ylläs.',
    ],
  },
  luckyRanch: {
    name: 'Iglús de nieve de Lucky Ranch',
    place: 'Pueblo de Pyhäjärvi, Pelkosenniemi, a unos 10 km de Pyhä',
    facts: [
      'Los iglús de nieve se reconstruyen cada diciembre, y dentro la temperatura está siempre por debajo de 0 °C.',
      'Se duerme en una cama normal con un saco de dormir de abrigo y una bolsa de agua caliente, y se incluye un desayuno ligero.',
      'Junto a los iglús hay un campamento base caldeado, y los aseos y las duchas del saloon del rancho están abiertos toda la noche para quienes duermen en los iglús.',
      'El rancho recomienda los iglús para adultos y niños con buena salud, y vende las noches en su propia web.',
    ],
  },

  nightEyebrow: 'Antes de reservar',
  nightH2: 'Cómo es una noche en la nieve',
  night: [
    { title: 'Toda la noche bajo cero', body: 'En el Arctic SnowHotel la habitación está entre 0 y −5 °C toda la noche; en Lucky Ranch, siempre por debajo de 0 °C. El frío es justamente lo que se busca: una habitación con calefacción es un iglú de cristal, no un hotel de nieve.' },
    { title: 'El saco de dormir es la clave', body: 'El Arctic SnowHotel proporciona sacos de dormir para frío extremo, y Lucky Ranch, sacos de abrigo y bolsas de agua caliente. No hace falta que lleve el suyo.' },
    { title: 'Hay un espacio caldeado al lado', body: 'El Arctic SnowHotel tiene la sala caldeada Snowhotel Lounge y una sauna; Lucky Ranch, un campamento base caldeado junto a los iglús. Si siente demasiado frío por la noche, tiene adónde ir.' },
    { title: 'Niños', body: 'El Arctic SnowHotel no recomienda que los niños menores de 5 años pasen la noche en sus habitaciones de nieve. Lucky Ranch recomienda sus iglús para adultos y niños con buena salud. SnowVillage no indica ninguna restricción de edad, así que pregunte antes de reservar.' },
  ],

  visitsEyebrow: 'Sin pasar la noche',
  visitsH2: 'Nieve y hielo para visitar de día',
  visitsIntro:
    'También se pueden recorrer salas de nieve y hielo sin dormir en ellas. El Arctic SnowHotel y SnowVillage venden entradas de día; Snowman World y el SnowCastle of Kemi solo se visitan de día.',
  visitHeaders: { name: 'Lugar', place: 'Dónde', season: 'Temporada', what: 'Qué se ve' },
  visits: [
    {
      name: 'Arctic SnowHotel',
      place: 'Rovaniemi, a 26 km del centro',
      season: 'Del 15 de diciembre al 31 de marzo, todos los días de 10:00 a 20:00',
      what: 'Entrada de día al arte en nieve y hielo, a la capilla de hielo, al restaurante de hielo y al bar de hielo; la visita guiada de 45 minutos se paga aparte.',
    },
    {
      name: 'Lapland Hotels SnowVillage',
      place: 'Lainio, Kittilä',
      season: 'Del 25 de diciembre de 2026 al 4 de abril de 2027, todos los días de 10:00 a 22:00',
      what: 'Arte en nieve y hielo, el bar de hielo, un espacio para bodas, una suite de nieve, un cine y un tobogán de hielo. Las entradas solo se venden en la recepción; las visitas guiadas se reservan con antelación.',
    },
    {
      name: 'Snowman World',
      place: 'Pueblo de Papá Noel, a 8 km del centro de Rovaniemi',
      season: 'Del 6 de diciembre de 2026 al 17 de marzo de 2027',
      what: 'Un parque de nieve y hielo con actividades, comida y bebida. No ofrece alojamiento para pasar la noche.',
    },
    {
      name: 'SnowCastle of Kemi',
      place: 'Kemi, a 8 km del aeropuerto de Kemi-Tornio',
      season: 'Parque de invierno de enero a principios de abril (las fechas de 2027 aún no se han publicado); SnowExperience, todo el año',
      what: 'El castillo de nieve propiamente dicho lleva años sin construirse y de momento no hay hotel de nieve. El espacio interior SnowExperience se mantiene a −5 °C todo el año.',
    },
  ],

  swedenEyebrow: 'Conviene saberlo',
  swedenH2: 'El ICEHOTEL está en Suecia',
  swedenBody: [
    'Cuando se habla de «hotel de hielo», muchas veces se piensa en el ICEHOTEL de Jukkasjärvi, cerca de Kiruna, en la Laponia sueca. Su hotel de invierno abre de diciembre a abril, y el ICEHOTEL 365 tiene habitaciones de hielo y nieve durante todo el año.',
    'No está en Finlandia, así que no aparece en la lista de arriba. Este sitio trata de la Laponia finlandesa.',
  ],

  nextEyebrow: 'Opciones más cálidas',
  nextH2: 'Si le basta con una noche de frío',
  next: [
    [
      'Un iglú de cristal es una habitación con calefacción y el cielo sobre la cama. En la ',
      { to: '/glass-igloos', label: 'página de iglús de cristal' },
      ' comparamos 11 complejos con iglús de cristal.',
    ],
    [
      'Para el resto de la semana, las ',
      { to: '/cabins', label: 'páginas de cabañas' },
      ' recogen cabañas de alquiler en cada zona de Laponia, con la distancia al pueblo más cercano.',
    ],
  ],

  checkedNote:
    'Datos comprobados en la web de cada lugar el 22 de octubre de 2026. Los hoteles de nieve se reconstruyen cada invierno, así que las fechas y lo que incluye la noche pueden cambiar: confírmelo en la página del propio alojamiento antes de reservar.',
}

export default es
