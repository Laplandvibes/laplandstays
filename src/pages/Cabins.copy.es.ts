// Guía de vacaciones en cabaña (artículo de colaboración con Lomarengas), español.
import type { PageCopy } from './Cabins.copy.types'

const copy: PageCopy = {
  seo: {
    title: 'Cabañas en Laponia: Levi, Ylläs, Ruka y Saariselkä',
    description: 'Así funciona la cabaña finlandesa: qué incluye un mökki, en qué se diferencian Levi, Ylläs, Ruka y Saariselkä y cómo buscar cabañas a través de Lomarengas.',
  },
  ui: {
    adNotice: 'Contiene enlaces publicitarios · Colaboración con Lomarengas',
    eyebrow: 'Vacaciones en cabaña',
    h1: 'Vacaciones en cabaña en Laponia',
    heroAlt: 'Cabaña de troncos en la Laponia nevada a la hora azul, luz cálida en las ventanas y una aurora tenue en el cielo',
    lead: 'Sus propias paredes de troncos, su propia sauna y nadie arriba, abajo ni al otro lado de la pared.',

    whyEyebrow: 'Por qué una cabaña',
    whyH2: 'Lo que un mökki le da y un hotel no puede',
    whyLead: 'El mökki es la cabaña vacacional finlandesa, y viene con sus propios rituales. Cuatro razones por las que gana a una habitación de hotel para una semana en el norte:',
    whyCards: [
      {
        title: 'Su propia sauna',
        body: 'La mayoría de las cabañas de alquiler incluye sauna privada, y en las mejores se calienta con leña. Esquí, sauna, cena y guardia de auroras: ese es el ritmo diario de una semana de cabaña finlandesa.',
      },
      {
        title: 'Sitio para todo el grupo',
        body: 'Las cabañas alojan desde dos hasta doce personas o más. Una cocina, una chimenea y una cuenta repartida entre amigos suele salir mejor que tres o cuatro habitaciones de hotel.',
      },
      {
        title: 'Su propia cocina',
        body: 'Los precios de los restaurantes de estación se acumulan rápido en una semana. Una cocina de cabaña significa desayunos sin prisa, almuerzos para llevar a las pistas y una gran compra en el supermercado del pueblo.',
      },
      {
        title: 'El silencio',
        body: 'Baje del porche y está en la nieve, bajo las estrellas, a menudo con la aurora encima. Sin pasillos, sin recepción, sin otros huéspedes. Ese silencio es justo lo que se busca.',
      },
    ],

    partnerEyebrow: 'Dónde buscamos primero',
    partnerH2: 'Búsqueda de cabañas: Lomarengas',
    partnerBody: 'Lomarengas es una agencia finlandesa de alquiler de cabañas con más de 8.000 casas de vacaciones en todo el país, desde chalets junto a las pistas de Levi hasta cabañas a orillas de un lago en el extremo norte. Los anuncios muestran fotos reales, ubicación exacta y precios semana a semana, y cada cabaña detalla qué está incluido.',
    partnerNote: 'Los enlaces de abajo llevan a lomarengas.fi, donde la búsqueda, los precios y la reserva corren a cargo de Lomarengas. Si reserva a través de estos enlaces, LaplandStays recibe una comisión fija sin coste adicional para usted.',
    partnerCta: 'Ver cabañas de Laponia',

    areasEyebrow: 'Los cuatro clásicos',
    areasH2: '¿Levi, Ylläs, Ruka o Saariselkä?',
    areasLead: 'Los cuatro ofrecen pistas, itinerarios de esquí de fondo y cabañas a poca distancia en coche de un pueblo. La diferencia es el ambiente: cuánto pueblo quiere tener al otro lado de la puerta de la cabaña.',
    areas: [
      {
        name: 'Levi',
        tagline: 'La estación con todos los servicios',
        body: 'La estación de esquí más concurrida de Finlandia, con el eslalon de la Copa del Mundo cada noviembre y un pueblo donde restaurantes, tiendas de alquiler y recogidas de safari quedan a pie. Las cabañas rodean el fell, así que puede elegir entre ubicaciones ski-in cerca de la góndola o parcelas más tranquilas a unos kilómetros.',
        bullets: [
          'Ideal para: primeras visitas y grupos que quieren restaurantes y vida nocturna cerca de la cabaña',
          'Servicios del pueblo a pie desde las zonas de cabañas más cercanas',
          'El aeropuerto de Kittilä queda a unos 15 minutos, el traslado más fácil de Laponia',
        ],
        note: '',
        cta: 'Cabañas en Levi · Lomarengas',
      },
      {
        name: 'Ylläs',
        tagline: 'El país tranquilo de los fells',
        body: 'Las pistas más largas de Finlandia en un solo fell, dos pueblos sin pretensiones (Äkäslompolo y Ylläsjärvi) a sus pies y el parque nacional Pallas-Yllästunturi empezando al borde de la red de itinerarios. La vida de cabaña aquí va más de esquiar desde la puerta y menos de après-ski.',
        bullets: [
          'Ideal para: esquiadores de fondo, familias y alérgicos a las multitudes',
          'Dos pueblos significan tiendas y restaurantes sin el bullicio de una estación',
          'El mismo aeropuerto de Kittilä que Levi, a unos 50 minutos de traslado',
        ],
        note: '',
        cta: 'Cabañas en Ylläs · Lomarengas',
      },
      {
        name: 'Ruka',
        tagline: 'El caballo de batalla del inicio de temporada',
        body: 'Ruka abre en octubre y se esquía hasta mayo, una de las temporadas más largas de Finlandia, y su compacto pueblo de pistas lo mantiene todo cerca. Bajo el fell, la zona de lagos de Kuusamo es terreno clásico de cabañas, con el parque nacional de Oulanka y el sendero Karhunkierros cerca para los días sin esquí.',
        bullets: [
          'Ideal para: esquiar a principio y final de temporada, rutas de ruska en otoño y pescadores',
          'El aeropuerto de Kuusamo queda a unos 25 minutos de las pistas',
          'Enorme oferta de cabañas a orillas de lago en el campo circundante de Kuusamo',
        ],
        note: 'En rigor, Ruka está en Kuusamo, justo al sur del límite administrativo de Laponia. A la nieve no parece importarle, y a quienes alquilan cabañas tampoco.',
        cta: 'Cabañas en Ruka · Lomarengas',
      },
      {
        name: 'Saariselkä',
        tagline: 'La base de auroras del extremo norte',
        body: 'La más septentrional de las cuatro grandes, a unos 68°N, lo que la sitúa bajo el óvalo auroral: en una noche despejada las probabilidades aquí son sencillamente mejores. El pueblo es compacto, el parque nacional Urho Kekkonen empieza justo detrás y los fells se extienden cien kilómetros hacia el este sin nada construido a la vista.',
        bullets: [
          'Ideal para: cazadores de auroras, aficionados a las raquetas y la naturaleza salvaje, y segundas visitas',
          'El aeropuerto de Ivalo queda a unos 30 minutos',
          'La cima de Kaunispää y la pista de trineo más larga de Finlandia están justo encima del pueblo',
        ],
        note: '',
        cta: 'Cabañas en Saariselkä · Lomarengas',
      },
    ],

    practicalEyebrow: 'Antes de reservar',
    practicalH2: 'Cómo leer un anuncio de cabaña',
    practicalLead: 'Los anuncios de cabañas finlandeses son honestos pero parcos. Estos son los detalles que conviene comprobar antes de comprometerse a una semana:',
    checkTitle: 'Compruebe en el anuncio',
    checkList: [
      'Tipo de sauna: la de leña es la experiencia completa, la eléctrica la de diario',
      'Ropa de cama y limpieza final: a menudo se cobran aparte, súmelas antes de comparar totales',
      'Distancia a las pistas, los itinerarios y el supermercado más cercano, en kilómetros y no en adjetivos',
      'Chimenea y leña: suelen estar incluidas, pero confírmelo si le importa',
      'Acceso por carretera en invierno y aparcamiento, sobre todo en cabañas fuera de los pueblos',
    ],
    knowTitle: 'Conviene saber',
    knowList: [
      'Un coche merece la pena para cabañas lejos de un pueblo a pie, consulte nuestra guía de transporte',
      'En temporada alta, las semanas de cabaña suelen ir de sábado a sábado',
      'De diciembre a marzo es temporada alta; reserve las semanas populares con muchos meses de antelación',
      'La ruska de septiembre y el sol de medianoche de junio son las gangas de la temporada tranquila',
      'Lleve zapatillas de estar por casa. La cabaña finlandesa es zona sin zapatos, y los suelos lo saben.',
    ],

    seasonEyebrow: 'El momento',
    seasonH2: 'Cuándo hacer su semana de cabaña',
    seasonLead: 'No hay estación mala para un mökki, solo estaciones distintas:',
    seasons: [
      { period: 'Diciembre a marzo', body: 'Invierno pleno: pistas abiertas, itinerarios pisados y temporada de auroras en su apogeo. Es cuando más demanda hay de cabañas, así que cuanto antes reserve, mejor elegirá.' },
      { period: 'Abril', body: 'Esquí de primavera: días largos, nieve compacta y tiempo de gafas de sol en la terraza. Los locales lo llaman el secreto mejor guardado del año de esquí.' },
      { period: 'Junio a agosto', body: 'Sol de medianoche: senderismo, pesca y baños desde el muelle de la cabaña, con luz a todas horas. Las cabañas junto al lago están en su mejor momento.' },
      { period: 'Septiembre a octubre', body: 'La ruska, la temporada del color otoñal: los fells se tiñen de rojo y oro, el aire es nítido y las primeras auroras vuelven a cielos oscuros.' },
    ],

    ctaH2: 'Elija primero su fell, luego su cabaña',
    ctaLead: 'Empiece por la región que encaje con su grupo y compare después las cabañas en las páginas de Lomarengas. La reserva se hace en lomarengas.fi.',
    ctaPrimary: 'Todas las cabañas en Lomarengas',
    ctaSecondary: 'Cuándo ir',
  },
}

export default copy
