import type { ChromeCopy } from './copy.types'

const copy: ChromeCopy = {
  nav: {
    home: 'Inicio',
    propertyTypes: 'Tipos de alojamiento',
    whenToGo: 'Cuándo ir',
    transport: 'Cómo llegar',
    about: 'Acerca de',
    levi: 'Levi',
    yllas: 'Ylläs',
    saariselka: 'Saariselkä',
    inari: 'Inari',
    rovaniemi: 'Rovaniemi',
    bookNow: 'Reservar',
    langSwitch: 'Cambiar idioma',
  },
  hero: {
    eyebrow: 'Alojamiento en Laponia · Finlandia',
    h1: 'Dónde alojarse en la Laponia finlandesa',
    lead: 'Iglús de cristal bajo la aurora, cabañas de aurora boreal en el pinar y hoteles laponos con sauna privada, tarifas verificadas de 100 € a 1.500 €/noche, seleccionadas en Levi, Ylläs, Saariselkä e Inari.',
    leadSummer: 'Cabañas junto al lago bajo el sol de medianoche, refugios a la orilla del río en las verdes colinas y hoteles laponos con sauna privada, tarifas verificadas de 100 € a 1.500 €/noche, seleccionadas en Levi, Ylläs, Saariselkä e Inari para las largas noches de luz.',
    disclosure: 'Esta página contiene enlaces de afiliación. Si reserva a través de ellos, LaplandStays puede recibir una comisión sin coste adicional para usted.',
    alt: 'Cabaña de lujo cálidamente iluminada en la nevada Laponia finlandesa bajo la aurora boreal',
  },
  reviewedBy: {
    reviewedLabel: 'Revisado por',
    policyLabel: 'política editorial',
    resolvedDate: 'abril de 2026',
  },
  networkHub: {
    huskySafaris: 'Safaris en husky',
    skiResorts: 'Estaciones de esquí',
  },
  mobileStickyCta: {
    fromPrice: 'Desde 100 €/noche',
    headline: 'Cabañas e iglús verificados en Laponia',
    cta: 'Reservar',
  },
  newsletter: {
    eyebrow: 'LaplandStays Insider',
    h2: 'Planifique su viaje a Laponia con nosotros',
    lead: 'Escrito desde la Laponia finlandesa, y solo cuando de verdad hay algo que contar: unas fechas ideales, un iglú que se acaba de liberar, una tarifa que conviene atrapar. Usted solo elige los días y prepara los calcetines de lana.',
    emailPlaceholder: 'su@correo.com',
    emailLabel: 'Correo electrónico',
    submit: 'Recibir el próximo email',
    submitting: 'Uniéndose…',
    success: 'Está en la lista. Nos vemos bajo la aurora.',
    footnote: 'Solo cuando de verdad hay algo que contar. Baja con un clic.',
    privacyLink: 'Política de privacidad',
    benefits: [
      { title: 'Alertas de aurora', body: 'Le avisamos cuando se acerca una buena noche de auroras, para que esté bajo el techo de cristal justo la noche correcta.' },
      { title: 'Aperturas de cabañas', body: 'Será el primero en saber cuándo Kakslauttanen, Levin Iglut, Star Arctic y Aurora Village abren las noches de temporada, las mejores vuelan.' },
      { title: 'Ayuda de planificación', body: 'Cuándo venir, qué reservar primero y qué puede saltarse sin pena, contado como a un amigo, desde la propia Laponia.' },
      { title: 'Tarifas internas', body: 'Las ofertas de temporada de nuestros socios llegan primero a los suscriptores, usted reserva antes que nadie.' },
    ],
  },
  footerEditorialNote: 'Mantenido de forma independiente por Lapeso Oy en la Laponia finlandesa · última revisión abril 2026 · ganamos una comisión de afiliación en algunas reservas, pero nunca condiciona las propiedades recomendadas.',
  footerExtraLegal: { editorialPolicy: 'Política editorial', about: 'Acerca de' },
  pages: {
    home: {
      seoTitle: 'Alojamiento en Laponia: iglús de cristal | LaplandStays',
      seoDescription: 'Dónde alojarse en Laponia: iglús de cristal desde 250 €/noche, cabañas de aurora boreal desde 150 € y hoteles desde 100 € en Levi, Ylläs, Saariselkä e Inari.',
    },
    propertyTypes: {
      kicker: 'Tipos de alojamiento',
      h1: 'Iglús de cristal, cabañas, hoteles y villas',
      lead: 'De cabañas con estufa junto al lago a iglús con triple acristalamiento: aquí tiene cómo se siente cada formato en la noche ártica.',
      types: [
        { title: 'Iglú de cristal', body: 'Cúpula con triple acristalamiento, cama propia, baño completo y vista panorámica a la aurora desde la almohada.' },
        { title: 'Cabaña de aurora', body: 'Cabaña finlandesa tradicional con sauna, chimenea y cielos oscuros, frecuentemente con servicio de alarma de aurora.' },
        { title: 'Hotel lapón', body: 'Hotel con servicios completos: restaurante, lobby, sauna y acceso ski-in donde el pueblo lo permita.' },
        { title: 'Villa y chalet', body: 'Formato más grande para familias y grupos, con varios dormitorios, cocina privada, sauna y jacuzzi.' },
      ],
    },
    locations: {
      kicker: 'Destinos',
      h1: 'Donde vive Laponia, cinco bases, una aurora',
      lead: 'Levi para una introducción fácil, Ylläs para la calma, Saariselkä e Inari para estancias más profundas bajo cielos oscuros, Rovaniemi para Papá Noel y el Círculo Polar Ártico.',
      cards: [
        { name: 'Levi',       desc: 'La mayor estación de esquí, vuelos sencillos, escena gastronómica completa y un menú integral de safaris.' },
        { name: 'Ylläs',      desc: 'Dos pueblos, siete senderos de parque nacional, la estancia más auténtica y tranquila de Laponia.' },
        { name: 'Saariselkä', desc: 'Dentro del óvalo auroral, hogar de Kakslauttanen y de la escena más profunda de cabañas bajo cielos oscuros.' },
        { name: 'Inari',      desc: 'Lago Inari, cultura sami, el extremo norte del país, y las mejores probabilidades de aurora.' },
        { name: 'Rovaniemi',  desc: 'Pueblo de Papá Noel, Círculo Polar Ártico y el aeropuerto internacional más accesible de Laponia.' },
      ],
    },
    whenToGo: {
      kicker: 'Mejor época',
      h1: 'Calendario lapón mes a mes',
      lead: 'Noche polar, festivales de hielo, sol de medianoche, ruska: cada mes en Laponia es un país distinto.',
      months: [
        { month: 'Noviembre', tip: 'Empieza la noche polar. Vuelve la aurora. Las cabañas se llenan: reserve pronto para Navidad.' },
        { month: 'Diciembre', tip: 'Temporada de Papá Noel a tope. Nieve garantizada. Días más cortos, nieve más brillante.' },
        { month: 'Enero',     tip: 'Mes más frío. La semana más tranquila del año entre Año Nuevo y los primeros campamentos de esquí.' },
        { month: 'Febrero',   tip: 'Noches de aurora largas, vuelve el sol poco a poco, ideal para safaris y pesca en hielo.' },
        { month: 'Marzo',     tip: 'Días largos, mucha nieve y abre la ventana del esquí primaveral en Levi e Ylläs.' },
      ],
    },
    transport: {
      kicker: 'Cómo llegar',
      h1: 'Cómo viajar a la Laponia finlandesa',
      lead: 'Vuelos directos invernales a Kittilä, Rovaniemi e Ivalo, y el tren nocturno desde Helsinki: aquí tiene cómo funciona cada opción.',
      airports: [
        { name: 'Kittilä (KTT)',   desc: 'Vuelos directos invernales desde Londres, París, Ámsterdam, Zúrich y más. Puerta de Levi e Ylläs.' },
        { name: 'Rovaniemi (RVN)', desc: 'Conexiones Finnair todo el año vía Helsinki. A pocos pasos del traslado al Pueblo de Papá Noel.' },
        { name: 'Ivalo (IVL)',     desc: 'El aeropuerto más al norte de la UE, puerta a Saariselkä, Inari y el cinturón auroral.' },
      ],
    },
    about: {
      kicker: 'Sobre LaplandStays',
      h1: 'Escrito de forma independiente desde la Laponia finlandesa',
      lead: 'La guía se actualiza cada temporada. Si un alojamiento está sobrevalorado, se lo decimos sin rodeos.',
      mission: 'Nuestra misión es dar a cada viajero la misma recomendación que le daríamos a un amigo, basada en estancias reales, tarifas verificadas y la perspectiva local que solo se tiene viviendo aquí.',
    },
  },
}

export default copy
