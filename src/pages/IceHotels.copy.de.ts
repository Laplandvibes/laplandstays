import type { IceHotelsCopy } from './IceHotels.copy.types'

/**
 * Deutsche Eis- und Schneehotel-Seite, /de/ice-hotels. Am 22.10.2026 aus IceHotels.copy.en.ts übersetzt.
 * Nachfrage gemessen mit OpenSEO, Markt Deutschland, 22.10.2026: eishotel finnland 590/Monat (SERP: Arctic
 * SnowHotel, also Finnland), arctic snowhotel 1 000, eishotel lappland 260, snowcastle kemi 170, snow village
 * lappland 140, schneehotel 140, eishotel rovaniemi 110, übernachten im eishotel 90. „eishotel“ allein (2 400)
 * und „eishotel schweden“ (1 600) meinen das ICEHOTEL in Schweden: Titel und Text sagen deshalb Finnland.
 * Begriffe wie auf der geprüften deutschen Glasiglu-Seite: Glasiglu, Schneehotel, Weihnachtsmanndorf,
 * Reisedaten, Verfügbarkeit prüfen. Anrede: Sie. Saisonangaben als 2026/27 wie dort.
 *
 * Gleiche Fakten wie die englische Quelle, keine Zahl, die dort nicht steht (numeroportti).
 */
const de: IceHotelsCopy = {
  seo: {
    title: 'Eishotels in Finnland: Übernachten im Schnee in Lappland',
    description:
      'Eis- und Schneehotels in Finnisch-Lappland im Winter 2026/27: Arctic SnowHotel in Rovaniemi, SnowVillage bei Ylläs, Schneeiglus bei Pyhä, dazu Tagesbesuche.',
  },
  breadcrumbHome: 'Startseite',
  breadcrumbPage: 'Eishotels in Finnisch-Lappland',
  keywords: ['eishotel finnland', 'eishotel lappland', 'arctic snowhotel', 'eishotel rovaniemi', 'schneehotel', 'snow village lappland', 'übernachten im eishotel', 'snowcastle kemi'],
  adBadge: 'Enthält Werbelinks',
  h1: 'Eis- und Schneehotels in Finnisch-Lappland',
  lead:
    'Im Winter 2026/27 können Sie in Finnisch-Lappland an drei Orten in einem Zimmer aus Schnee übernachten: im Arctic SnowHotel bei Rovaniemi, im SnowVillage bei Ylläs und in den Schneeiglus der Lucky Ranch bei Pyhä. Das bekannteste Eishotel, das ICEHOTEL, liegt in Schweden. Hier lesen Sie, was zu jeder Übernachtung gehört und welche Orte Sie auch ohne Übernachtung besuchen können.',
  heroAlt: 'Eine Schneesuite im Arctic SnowHotel bei Rovaniemi: ein Bett mit Felldecken zwischen Eisskulpturen und ein in die Schneewand geschnitzter Vogel mit ausgebreiteten Flügeln',

  staysEyebrow: 'Winter 2026/27',
  staysH2: 'Wo Sie im Schnee übernachten können',
  staysIntro:
    'Alle drei werden jeden Winter neu gebaut, deshalb ändern sich Zimmer, Themen und Termine von Jahr zu Jahr. Die Angaben unten stammen jeweils von der eigenen Website des Ortes und beziehen sich auf die kommende Saison.',
  arctic: {
    name: 'Arctic SnowHotel & Glass Igloos',
    place: 'Lehtoahontie 27, Rovaniemi: etwa 26 km (30 Min.) vom Stadtzentrum und vom Weihnachtsmanndorf, 40 Min. vom Flughafen',
    facts: [
      'Das Schneehotel öffnet am 15. Dezember 2026, die Saison läuft bis zum 31. März.',
      'Im Schnee- und Eishotel bleibt die Temperatur zwischen 0 und −5 °C.',
      'Zu einer Übernachtung gehören Schlafsäcke für extreme Kälte, Zugang zur warmen Snowhotel Lounge, eine gemeinsame finnische Sauna und ein Frühstücksbuffet.',
      'Ihr Schneezimmer steht Ihnen ab 21:00 Uhr allein zur Verfügung. Abendessen und Transfers ab Rovaniemi sind in den Paketen des Resorts enthalten, nicht im Zimmerpreis.',
      'Für Kinder unter 5 Jahren wird eine Übernachtung nicht empfohlen.',
    ],
    glassNote: [
      'Im selben Resort gibt es auch beheizte Glasiglus, die ab dem 1. September geöffnet sind. Auf unserer ',
      { to: '/glass-igloos', label: 'Glasiglu-Seite' },
      ' vergleichen wir sie mit zehn anderen Resorts.',
    ],
    ctaLabel: 'Preise und Verfügbarkeit',
    ctaNote: 'Öffnet die Seite des Resorts bei unserem Buchungspartner Sembo, mit Preisen für Ihre Reisedaten.',
  },
  snowVillage: {
    name: 'Lapland Hotels SnowVillage',
    place: 'Lainio, Kittilä, bei Ylläs',
    facts: [
      'Geöffnet vom 25. Dezember 2026 bis zum 4. April 2027, täglich 10:00–22:00 Uhr.',
      'Seit 2001 wird es jedes Jahr von Grund auf aus Schnee und Natureis neu gebaut. Das Thema für 2026/27 wurde noch nicht bekannt gegeben.',
      'Übernachten können Sie nur in einer einzigen Luxus-Eissuite für zwei Personen. Die Suite gibt es als Paket mit Führung, Abendessen im Eisrestaurant, einer Kota-Hütte mit Sauna und Whirlpool sowie Frühstück in einem warmen Restaurant. Gebucht wird sie per E-Mail beim SnowVillage, und ihre Seite beschreibt noch den Winter 2025/26.',
      'Während der Öffnungszeiten fährt täglich ein Bus ab Levi und Ylläs.',
    ],
  },
  luckyRanch: {
    name: 'Schneeiglus der Lucky Ranch',
    place: 'Dorf Pyhäjärvi, Pelkosenniemi, etwa 10 km von Pyhä',
    facts: [
      'Die Schneeiglus werden jeden Dezember neu gebaut, und innen liegt die Temperatur immer unter 0 °C.',
      'Sie schlafen in einem normalen Bett mit warmem Schlafsack und Wärmflasche, ein leichtes Frühstück ist inbegriffen.',
      'Neben den Iglus steht ein warmes Basecamp, und Toiletten und Duschen im Saloon der Ranch sind für Iglugäste die ganze Nacht geöffnet.',
      'Die Ranch empfiehlt die Iglus gesunden Erwachsenen und Kindern und verkauft die Nächte über ihre eigene Website.',
    ],
  },

  nightEyebrow: 'Vor der Buchung',
  nightH2: 'Was Sie in einer Nacht im Schnee erwartet',
  night: [
    { title: 'Es bleibt unter null', body: 'Im Arctic SnowHotel liegt die Temperatur im Zimmer die ganze Nacht zwischen 0 und −5 °C, bei der Lucky Ranch immer unter 0 °C. Die Kälte ist der Sinn der Sache: Ein beheiztes Zimmer ist ein Glasiglu, kein Schneehotel.' },
    { title: 'Der Schlafsack hält warm', body: 'Das Arctic SnowHotel stellt Schlafsäcke für extreme Kälte bereit, die Lucky Ranch warme Schlafsäcke und Wärmflaschen. Einen eigenen Schlafsack müssen Sie nicht mitbringen.' },
    { title: 'Ein warmer Raum gleich nebenan', body: 'Das Arctic SnowHotel hat die warme Snowhotel Lounge und eine Sauna, die Lucky Ranch ein warmes Basecamp neben den Iglus. Wird es Ihnen nachts zu kalt, können Sie dorthin ausweichen.' },
    { title: 'Kinder', body: 'Das Arctic SnowHotel rät von einer Nacht in seinen Schneezimmern mit Kindern unter 5 Jahren ab. Die Lucky Ranch empfiehlt ihre Iglus gesunden Erwachsenen und Kindern. Das SnowVillage nennt keine Altersgrenze, fragen Sie also vor der Buchung nach.' },
  ],

  visitsEyebrow: 'Ohne Übernachtung',
  visitsH2: 'Schnee und Eis für einen Tagesbesuch',
  visitsIntro:
    'Räume aus Schnee und Eis können Sie auch besichtigen, ohne dort zu übernachten. Das Arctic SnowHotel und das SnowVillage verkaufen Tagestickets; Snowman World und das SnowCastle of Kemi können Sie nur tagsüber besuchen.',
  visitHeaders: { name: 'Ort', place: 'Lage', season: 'Saison', what: 'Was Sie sehen' },
  visits: [
    {
      name: 'Arctic SnowHotel',
      place: 'Rovaniemi, 26 km vom Zentrum',
      season: '15. Dezember – 31. März, täglich 10:00–20:00 Uhr',
      what: 'Tagesticket für die Schnee- und Eiskunst, die Eiskapelle, das Eisrestaurant und die Eisbar; eine 45-minütige Führung können Sie dazubuchen.',
    },
    {
      name: 'Lapland Hotels SnowVillage',
      place: 'Lainio, Kittilä',
      season: '25. Dezember 2026 – 4. April 2027, täglich 10:00–22:00 Uhr',
      what: 'Schnee- und Eiskunst, die Eisbar, ein Raum für Trauungen, eine Schneesuite, ein Kino und eine Eisrutsche. Tickets gibt es nur an der Rezeption; Führungen werden im Voraus gebucht.',
    },
    {
      name: 'Snowman World',
      place: 'Weihnachtsmanndorf, 8 km vom Zentrum Rovaniemis',
      season: '6. Dezember 2026 – 17. März 2027',
      what: 'Ein Schnee- und Eispark mit Aktivitäten, Essen und Getränken. Übernachtungen bietet der Park nicht an.',
    },
    {
      name: 'SnowCastle of Kemi',
      place: 'Kemi, 8 km vom Flughafen Kemi-Tornio',
      season: 'Winterpark Januar – Anfang April (Termine für 2027 noch nicht veröffentlicht); SnowExperience ganzjährig',
      what: 'Das eigentliche Schneeschloss wird seit Jahren nicht mehr gebaut, und ein Schneehotel gibt es derzeit nicht. Die SnowExperience im Innenbereich wird das ganze Jahr auf −5 °C gehalten.',
    },
  ],

  swedenEyebrow: 'Gut zu wissen',
  swedenH2: 'Das ICEHOTEL liegt in Schweden',
  swedenBody: [
    'Wer „Eishotel“ sagt, meint oft das ICEHOTEL in Jukkasjärvi bei Kiruna in Schwedisch-Lappland. Sein Winterhotel ist von Dezember bis April geöffnet, und im ICEHOTEL 365 gibt es das ganze Jahr über Zimmer aus Eis und Schnee.',
    'Es liegt nicht in Finnland und steht deshalb nicht in der Liste oben. Diese Website behandelt Finnisch-Lappland.',
  ],

  nextEyebrow: 'Wärmere Alternativen',
  nextH2: 'Wenn eine kalte Nacht genügt',
  next: [
    [
      'Ein Glasiglu ist ein beheiztes Zimmer mit dem Himmel über dem Bett. Auf der ',
      { to: '/glass-igloos', label: 'Glasiglu-Seite' },
      ' vergleichen wir 11 Glasiglu-Resorts.',
    ],
    [
      'Für den Rest der Woche finden Sie auf den ',
      { to: '/cabins', label: 'Ferienhaus-Seiten' },
      ' Hütten zur Miete in jeder Region Lapplands, jeweils mit der Entfernung zum nächsten Ort.',
    ],
  ],

  checkedNote:
    'Angaben am 22. Oktober 2026 auf der eigenen Website des jeweiligen Ortes geprüft. Schneehotels werden jeden Winter neu gebaut, deshalb können sich Termine und Leistungen einer Nacht ändern: Bitte prüfen Sie vor der Buchung die eigene Seite der Unterkunft.',
}

export default de
