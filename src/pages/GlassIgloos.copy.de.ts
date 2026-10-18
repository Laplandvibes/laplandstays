import type { GlassIgloosCopy } from './GlassIgloos.copy.types'

/**
 * Deutsche Glasiglu-Seite, /de/glass-igloos (18.10.2026). Nachfrage gemessen mit OpenSEO,
 * Markt Deutschland, 16.–17.9.2026: glasiglu finnland 720/Monat, glasiglu lappland 390,
 * glas iglu lappland 260 (LAPLANDSTAYS-AUDIT-2026-09-16.md §1c).
 *
 * Gleiche Fakten wie GlassIgloos.copy.en.ts: jede Angabe am 18.10.2026 auf der eigenen Website
 * des Resorts gelesen. Keine Zahl, die im englischen Text nicht steht (numeroportti).
 */
const de: GlassIgloosCopy = {
  seo: {
    title: 'Glasiglu in Finnland: 11 Resorts in Lappland im Vergleich',
    description:
      'Glasiglus in Finnisch-Lappland im Vergleich: 11 Resorts in Rovaniemi, Saariselkä, Inari und Levi, mit nächstem Flughafen, Zimmertyp und Buchungszeitpunkt.',
  },
  breadcrumbHome: 'Startseite',
  breadcrumbPage: 'Glasiglus in Finnland',
  keywords: ['glasiglu finnland', 'glasiglu lappland', 'glas iglu lappland', 'glasiglu rovaniemi', 'glasiglu saariselkä', 'glasiglu levi', 'kakslauttanen', 'aurora cabin'],
  adBadge: 'Enthält Werbelinks',
  h1: 'Glasiglus in Finnland',
  lead:
    'Ein Glasiglu in Finnisch-Lappland kann eine kleine Einheit für zwei oder drei Gäste sein oder ein Blockhaus, an das ein Glasiglu angebaut ist. Der Name ist derselbe, aber das Gebäude, die Größe des Himmelsausschnitts über dem Bett und das, was im Preis enthalten ist, sind es nicht. Diese Seite stellt 11 Resorts nach Region, nächstem Flughafen und Zimmertyp nebeneinander und hilft Ihnen, eine Region zu wählen, die zu Ihrer Reise passt.',
  heroAlt: 'Glasiglus im verschneiten Wald des Kakslauttanen Arctic Resort in Saariselkä, zwei Menschen gehen auf dem Weg',

  typesEyebrow: 'Erst die Typen kennen',
  typesH2: 'Was als Glasiglu gilt',
  typesIntro:
    'Unter dem Namen „Iglu“ werden in Lappland drei verschiedene Dinge verkauft. Der Unterschied beim Komfort kommt vor allem vom Typ und von der Größe: ein kleines Iglu für zwei oder drei Gäste oder eine Hütte für die Familie.',
  typeCards: [
    {
      title: 'Freistehendes Glasiglu',
      tagline: 'Kleine Kuppel oder Hütte, Dach ganz aus Glas',
      body: 'Eine beheizte Einheit, die für sich im Schnee steht, mit Glas über dem Bett und oft auch an den Wänden. Das Kakslauttanen Arctic Resort in Saariselkä und Golden Crown Levin Iglut bei Levi gehören zu diesem Typ. Sie sehen den Himmel, ohne aufzustehen.',
      forWho: 'Ideal für: Paare auf Polarlichtreise und alle, die vom Bett aus fotografieren wollen.',
    },
    {
      title: 'Hütte oder Zimmer mit Glasdach',
      tagline: 'Eine Hütte oder ein Hotelzimmer mit Glasdach',
      body: 'Eine gewöhnliche Hütte oder ein Hotelzimmer, bei dem ein Teil des Dachs aus Glas ist. Wilderness Hotels nennen ihre Hütten Aurora Cabins und geben ihnen ein beheiztes Glasdach; das Star Arctic Hotel auf dem Fjäll Kaunispää hat ein dreiteiliges Glasdach über dem Bett. Weil meist weniger vom Raum aus Glas ist, lassen sich Wärme, Dunkelheit und Privatsphäre oft leichter regeln.',
      forWho: 'Ideal für: alle, denen Komfort wichtiger ist, und längere Aufenthalte.',
    },
    {
      title: 'Schneeiglu (Schneehotel)',
      tagline: 'Ähnlicher Name, anderes Produkt',
      body: 'Ein Zimmer aus Schnee und Eis, das jeden Winter neu gebaut wird und in dem die Temperatur zwischen 0 und −5 °C bleibt. Das Schneehotel des Arctic SnowHotel & Glass Igloos bei Rovaniemi öffnet jedes Jahr am 15. Dezember, stellt Schlafsäcke für extreme Kälte bereit und rät von einer Übernachtung mit Kindern unter 5 Jahren ab. Ein Glasiglu ist ein warmes Zimmer mit Blick in den Himmel; hier ist die kalte Nacht selbst das Erlebnis.',
      forWho: 'Ideal für: eine Nacht Abenteuer. Den meisten reicht eine Nacht.',
    },
  ],
  typesNote: [
    'Das Arctic SnowHotel hat Glasiglus und das Schneehotel im selben Resort, Sie können also beides ausprobieren. Alle Unterkunftsarten in Lappland finden Sie im ',
    { to: '/property-types', label: 'Überblick über die Unterkunftsarten' },
    ' auf dieser Website und im ',
    { href: 'https://laplandvibes.com/de/blog/lapland-glass-cabin-categories/', label: 'Artikel über die Kategorien von Glasiglus' },
    ' von LaplandVibes.',
  ],
  kidsNote:
    'Mit Kindern sollten Sie vor allem beim Schneehotel genau hinsehen: Das Arctic SnowHotel rät von einer Nacht in den Schneezimmern mit Kindern unter 5 Jahren ab. Glasiglus sind beheizte Zimmer, aber Altersregeln und die Frage, ob ein Kind im Bett der Eltern schlafen darf, sind je nach Resort verschieden. Fragen Sie bei der Buchung nach.',

  seasonEyebrow: 'Saison',
  seasonH2: 'Die Glasiglu-Saison beginnt mit der Dunkelheit, nicht mit dem Schnee',
  seasonBody: [
    'Die Glasiglu-Saison richtet sich nach den dunklen Nächten, nicht nach dem Schnee. Im Monatsüberblick dieser Website reicht die Polarlichtsaison von September bis April, und einige Resorts öffnen passend dazu: Levin Iglut und die Glasiglus des Arctic SnowHotel öffnen beide am 1. September. Nur das Schneehotel wartet bis zum 15. Dezember.',
    'Sie müssen nicht auf Schnee warten. Im September und Oktober treffen Herbstfarben und die ersten Polarlichtnächte zusammen, und es ist noch etwas frei. Von Juni bis Mitte Juli geht die Sonne nicht unter, und Polarlichter sind überhaupt nicht zu sehen. Unter einem Glasdach im Sommer sehen Sie stattdessen die Mitternachtssonne. Auch das ist ein Erlebnis, aber vermutlich nicht das, weswegen Sie kommen.',
  ],

  tableH2: 'Die Resorts: Region, Flughafen und Zimmertyp',
  tableIntro:
    'Die Tabelle zeigt die 11 Resorts, auf die diese Website über ihren Buchungspartner verlinkt, in den Abschnitten unten nach Region geordnet.',
  tableHeaders: { name: 'Resort', area: 'Region', airport: 'Nächster Flughafen', feature: 'Zimmer', book: 'Buchen' },
  bookLabel: 'Verfügbarkeit prüfen',
  rows: {
    kakslauttanen: {
      name: 'Kakslauttanen Arctic Resort',
      area: 'Saariselkä, 10 km südlich des Ortes',
      airport: 'Ivalo (IVL), 35 km, etwa 30 Min.',
      feature: 'Glasiglus für bis zu 3 oder 5 Gäste und Kelo-Glasiglus: ein Blockhaus mit angebautem Glasiglu',
    },
    starArctic: {
      name: 'Star Arctic Hotel',
      area: 'Saariselkä, auf dem Fjäll Kaunispää',
      airport: 'Ivalo (IVL)',
      feature: 'Aurora Glass Cabins mit 20 m² und dreiteiligem Glasdach über dem Bett',
    },
    muotka: {
      name: 'Wilderness Hotel Muotka',
      area: 'Bei Saariselkä',
      airport: 'Ivalo (IVL), etwa 45 Min.',
      feature: 'Aurora Cabins mit 30 m² für bis zu 4 Personen, beheiztes Glasdach',
    },
    auroraVillage: {
      name: 'Aurora Village Ivalo',
      area: 'Ivalo',
      airport: 'Ivalo (IVL), 15 Min.',
      feature: 'Aurora Cabins mit Glasdach und 28 m², Polarlicht-Alarm per App',
    },
    nellim: {
      name: 'Wilderness Hotel Nellim',
      area: 'Nellim, am Ufer des Inarisees',
      airport: 'Ivalo (IVL), etwa 45 Min.',
      feature: 'Aurora Cabins mit beheiztem Glasdach und Villen am Seeufer',
    },
    wildernessInari: {
      name: 'Wilderness Hotel Inari',
      area: 'Inarisee, 5 Min. vom Ort Inari',
      airport: 'Ivalo (IVL), etwa 45 Min.',
      feature: 'Aurora Cabins mit 29 m² für bis zu 4 Personen, beheiztes Glasdach',
    },
    arcticSnowHotel: {
      name: 'Arctic SnowHotel & Glass Igloos',
      area: 'Lehtojärvi, 30 Min. vom Zentrum Rovaniemis',
      airport: 'Rovaniemi (RVN), 40 Min.',
      feature: 'Beheizte Glasiglus ab dem 1. September und ein Schneehotel, das jeden Winter neu gebaut wird (ab dem 15. Dezember, 0 bis −5 °C)',
    },
    apukka: {
      name: 'Apukka Resort',
      area: 'Rovaniemi, 18 km (15 Min.) vom Zentrum',
      airport: 'Rovaniemi (RVN), 10 km',
      feature: 'Aurora Cabins mit beheiztem Panorama-Glasdach und Glasiglu-Suiten mit 360°-Blick',
    },
    santasIgloosArcticCircle: {
      name: 'Santa’s Igloos Arctic Circle',
      area: 'Weihnachtsmanndorf, Rovaniemi',
      airport: 'Rovaniemi (RVN), 5 km',
      feature: '71 Glasiglus mit beheizter Glasdecke',
    },
    levinIglut: {
      name: 'Golden Crown Levin Iglut',
      area: 'Levi, 10 km vom Ort, 340 m über dem Meer',
      airport: 'Kittilä (KTT), 15 Min.',
      feature: 'Iglus der Klassen Superior, Prime Superior und Suite',
    },
    northernLightsRanch: {
      name: 'Northern Lights Ranch',
      area: 'Köngäs, 15 km von Levi',
      airport: 'Kittilä (KTT), 30 km',
      feature: 'Sky View Cabins: Hütten im Iglu-Stil mit beheiztem Glasdach, in sechs Varianten',
    },
  },
  tableNote:
    'Jede Zeile öffnet die Seite des Resorts bei unserem Buchungspartner Sembo, mit Preisen und Verfügbarkeit für Ihre Reisedaten. Iglupreise ändern sich von Woche zu Woche stark, deshalb drucken wir sie hier nicht ab. Entfernungen, Fahrzeiten und Zimmerangaben der Resorts stammen von deren eigener Website, die Entfernungen der Flughäfen von Finavia, geprüft am 18. Oktober 2026.',

  areas: {
    rovaniemi: {
      eyebrow: 'Für eine kurze Reise',
      title: 'Rund um Rovaniemi: nah am Flughafen',
      intro:
        'Der Flughafen Rovaniemi (RVN) liegt 10 km vom Stadtzentrum. Ein Iglu rund um Rovaniemi ist die vernünftige Wahl, wenn Ihre Reise kurz ist, wenn Sie auch das Weihnachtsmanndorf sehen möchten oder wenn Sie möglichst wenig Zeit mit Transfers verbringen wollen.',
      properties: [
        {
          name: 'Arctic SnowHotel & Glass Igloos (Lehtojärvi)',
          body: 'Glasiglus ab dem 1. September und ein Schneehotel ab dem 15. Dezember, 30 Minuten vom Stadtzentrum und 40 vom Flughafen. Das Resort führt einen Polarlicht-Alarm in der Ausstattung seiner Glasiglus auf.',
        },
        {
          name: 'Apukka Resort',
          body: 'Das Resort liegt 18 km (15 Minuten) vom Zentrum und 10 km vom Flughafen. Die Aurora Cabins haben ein beheiztes Panorama-Glasdach, die Glasiglu-Suiten Kammi und Komsio einen 360°-Blick.',
        },
        {
          name: 'Santa’s Igloos Arctic Circle',
          body: 'Im Weihnachtsmanndorf, 5 km vom Flughafen: 71 Glasiglus mit beheizter Glasdecke.',
        },
      ],
      outro:
        'Abzuwägen ist vor allem die Lichtverschmutzung der Stadt. Die Resorts rund um Rovaniemi liegen abseits des Zentrums, aber wer einen dunkleren Himmel möchte, fährt weiter nach Norden.',
      ctaLabel: 'Unterkünfte in Rovaniemi suchen',
      guideLinks: [{ to: '/destinations/rovaniemi', label: 'Reiseführer Rovaniemi' }],
    },
    north: {
      eyebrow: 'Wenn der dunkle Himmel zählt',
      title: 'Saariselkä, Ivalo und Inari: ab nach Norden',
      intro:
        'Der Flughafen Ivalo (IVL) liegt 25 km von Saariselkä und 11 km vom Zentrum Ivalos. Inari liegt weiter nördlich: Wilderness Hotels nennen vom Flughafen zu ihren Hotels in Inari und Nellim etwa 45 Minuten. Die Tageslichtwerte im Monatsüberblick dieser Website gelten für Rovaniemi (66,5° N), und der Winter in Saariselkä und Inari ist noch dunkler. Wenn das Polarlicht der Hauptgrund der Reise ist, ist das der Grund, nach Norden zu fahren.',
      properties: [
        {
          name: 'Kakslauttanen Arctic Resort',
          body: 'Das Resort liegt 10 km südlich des Ortes Saariselkä und 35 km (etwa 30 Minuten) vom Flughafen Ivalo. Glasiglus für bis zu 3 oder 5 Gäste und Kelo-Glasiglus, bei denen ein Blockhaus mit einem Glasiglu verbunden ist. Eine der Winterraten schließt Frühstück und Abendessen ein.',
        },
        {
          name: 'Star Arctic Hotel',
          body: 'Auf dem Fjäll Kaunispää in Saariselkä. Die Aurora Glass Cabin hat 20 m², bietet Platz für zwei Erwachsene und ein Kind bis 11 Jahre und hat ein dreiteiliges Glasdach direkt über dem Bett.',
        },
        {
          name: 'Wilderness Hotel Muotka',
          body: 'Bei Saariselkä, etwa 45 Minuten vom Flughafen Ivalo. Die Aurora Cabins haben 30 m², Platz für bis zu vier Personen und ein beheiztes Glasdach.',
        },
        {
          name: 'Aurora Village Ivalo',
          body: 'In Ivalo, 15 Minuten vom Flughafen. Aurora Cabins mit Glasdach und 28 m², dazu ein Polarlicht-Alarm per App.',
        },
        {
          name: 'Wilderness Hotel Nellim und Wilderness Hotel Inari',
          body: 'Beide am Ufer des Inarisees, etwa 45 Minuten vom Flughafen Ivalo. Das Wilderness Hotel Inari liegt fünf Minuten vom Ort Inari, Nellim ist ein eigenes Dorf. Beide haben Aurora Cabins mit beheiztem Glasdach.',
        },
      ],
      ctaLabel: 'Unterkünfte in Saariselkä suchen',
      guideLinks: [
        { to: '/destinations/saariselka', label: 'Reiseführer Saariselkä' },
        { to: '/destinations/inari', label: 'Reiseführer Inari' },
      ],
    },
    levi: {
      eyebrow: 'Wenn Sie auch Ski fahren wollen',
      title: 'Levi: tagsüber die Piste, nachts das Glasdach',
      intro:
        'Der Flughafen Kittilä (KTT) liegt 15 km von Levi. Wählen Sie Levi, wenn das Skifahren im Mittelpunkt steht und das Iglu der Höhepunkt am Ende sein soll.',
      properties: [
        {
          name: 'Golden Crown Levin Iglut',
          body: 'Glasiglus 10 km vom Ort Levi, 340 m über dem Meer, 15 Minuten vom Flughafen Kittilä. Drei Zimmerklassen: Superior, Prime Superior und Suite. Die Iglu-Saison 2026/27 läuft vom 1. September bis zum 13. April; im September und Oktober ist das Resort nur dienstags bis samstags geöffnet.',
        },
        {
          name: 'Northern Lights Ranch',
          body: 'In Köngäs, 15 km von Levi und 30 km vom Flughafen Kittilä. Die Sky View Cabins sind Hütten im Iglu-Stil mit beheiztem Glasdach, in sechs Varianten.',
        },
      ],
      outro:
        'Eine Iglu-Nacht ist eher ein Höhepunkt als eine Unterkunft für die ganze Woche, deshalb lohnt es sich selten, jede Nacht in einem Iglu zu verbringen. Wohnen Sie im Ort oder in einem Chalet nahe der Piste und hängen Sie ein oder zwei Iglu-Nächte ans Ende: tagsüber Ski, die letzte Nacht unter Glas.',
      ctaLabel: 'Unterkünfte in Levi suchen',
      guideLinks: [{ to: '/destinations/levi', label: 'Reiseführer Levi' }],
    },
  },

  questionsEyebrow: 'So wählen Sie',
  questionsH2: 'Welche Region: drei Fragen',
  questionsIntro: 'Mit den drei Regionen vor Augen läuft die Wahl auf drei Fragen hinaus.',
  questions: [
    {
      title: 'Wie viele Nächte haben Sie?',
      body: 'Bei drei Nächten oder weniger beginnen Sie mit Rovaniemi: Die Transfers sind am kürzesten, also geht weniger Zeit für die Anreise verloren. Ab vier Nächten wird es realistisch, nach Ivalo zu fliegen und in den Norden nach Saariselkä oder Inari zu fahren.',
    },
    {
      title: 'Geht es um Polarlichter oder ums Skifahren?',
      body: 'Wenn das Polarlicht an erster Stelle steht, fahren Sie nach Norden: Der Winter in Saariselkä und Inari ist dunkler als in Rovaniemi. Wenn das Skifahren an erster Stelle steht, wählen Sie Levi. Wenn Sie beides möchten, verbinden Sie eine Skiwoche in Levi mit ein oder zwei Nächten bei Golden Crown Levin Iglut, oder Sie fahren im März in den Norden, wenn die Tage länger sind.',
    },
    {
      title: 'Wofür geben Sie das Budget aus?',
      body: 'Mit demselben Geld wird die Reise eine andere, je nachdem, ob Sie jede Nacht in einem günstigeren Iglu verbringen oder normale Zimmer buchen und dazu eine Nacht in einem besseren. Vergleichen Sie den Gesamtpreis mit Essen und Transfers, nicht den Preis pro Nacht. Kakslauttanen bietet zum Beispiel eine Winterrate mit Frühstück und Abendessen an, prüfen Sie also, was jede Rate enthält.',
    },
  ],

  cabinCombo: {
    eyebrow: 'Ein einfacher Plan',
    h2: 'Ein oder zwei Iglu-Nächte und eine Hütte für den Rest der Woche',
    body: 'Eine Iglu-Nacht ist eher ein Höhepunkt als eine Unterkunft für die ganze Woche. Eine Möglichkeit ist deshalb, ein oder zwei Nächte im Iglu zu verbringen und den Rest der Woche in einem Ferienhaus in derselben Gegend: Die ganze Gruppe hat Platz, und Sie können eine Woche lang eigene Sauna und Küche haben. Diese Website listet die Ferienhäuser je Region mit der Entfernung zum nächsten Ort.',
    linkLabel: 'Ferienhäuser in Lappland nach Region',
  },

  accessEyebrow: 'Anreise',
  accessH2: 'Anreise: Flüge, Nachtzug und Transfers',
  access: [
    [
      'Die Iglu-Resorts auf dieser Seite werden über drei Flughäfen erreicht: Rovaniemi (RVN), Kittilä (KTT) für Levi und Ivalo (IVL) für Saariselkä und Inari. Rovaniemi wird das ganze Jahr von Helsinki aus angeflogen. Im Winter haben alle drei Flughäfen zusätzlich Direktflüge aus mehreren europäischen Städten; die Verbindungen ändern sich von Jahr zu Jahr, prüfen Sie also Ihren eigenen Abflughafen.',
    ],
    [
      'Die Fahrzeiten zu den einzelnen Resorts stehen in den Abschnitten zu den Regionen oben. Zur Orientierung: RVN liegt 10 km vom Zentrum Rovaniemis, KTT 15 km von Levi und IVL 25 km von Saariselkä.',
    ],
    [
      'Ohne Flug fährt der Nachtzug der finnischen Bahn VR von Helsinki nach Rovaniemi und kann auch Ihr Auto mitnehmen. Von Rovaniemi nach Saariselkä sind es mit dem Bus noch rund vier Stunden, für die Resorts im Norden ist ein Flug nach Ivalo also schneller. Einige Resorts verkaufen Flughafentransfers, im Paket oder als Extra; die übrigen Möglichkeiten finden Sie im ',
      { to: '/transport', label: 'Ratgeber zur Anreise' },
      '.',
    ],
  ],

  itinerariesEyebrow: 'Planung',
  itinerariesH2: 'Beispielreisen: wohin mit den Iglu-Nächten',
  itinerariesIntro:
    'Legen Sie die Iglu-Nächte in die zweite Hälfte der Reise, aus zwei Gründen: Am ersten Abend sind Sie von der Anreise müde und bleiben seltener für das Polarlicht wach, und spätere Nächte sind eine Reserve, falls die ersten bewölkt sind.',
  itineraries: [
    {
      title: '3 Nächte in Rovaniemi',
      body: 'Die erste Nacht in der Stadt oder beim Weihnachtsmanndorf, mit dem Museum Arktikum und einer Safari. Die zweite und dritte Nacht in einem Glasiglu außerhalb der Stadt, den letzten Abend halten Sie für das Polarlicht frei.',
    },
    {
      title: '4 Nächte in Saariselkä',
      body: 'Die erste und zweite Nacht in einem Hotel im Ort, mit Schneeschuhwandern im Urho-Kekkonen-Nationalpark und einer Huskysafari, beides ab dem Ort. Die dritte und vierte Nacht im Iglu.',
    },
    {
      title: '5 Nächte in Levi',
      body: 'Drei Skitage von einem Hotel im Ort oder einem Chalet nahe der Piste aus, dann die letzten ein oder zwei Nächte bei Golden Crown Levin Iglut. Für den Umzug (10 km) reicht ein Taxi, einen Mietwagen brauchen Sie nicht.',
    },
  ],

  inclusionsEyebrow: 'Gleiche Nacht, anderer Tarif',
  inclusionsH2: 'Was im Preis enthalten ist: Abendessen, Transfer, Sauna',
  inclusionsBody: [
    'Beispiele, die wir auf den eigenen Websites der Resorts bestätigen konnten: Kakslauttanen bietet eine Winterrate mit Frühstück und Abendessen an. Bei Kakslauttanen sind private Flughafentransfers nur im Preis des Luxury Kelo-Glass Igloo enthalten, und das Aurora Adventure Break des Wilderness Hotel Muotka mit drei Nächten schließt Transfers vom Flughafen Ivalo ein. In den Schneezimmern des Arctic SnowHotel gehören Schlafsäcke für extreme Kälte zum Zimmer.',
    'Was im Preis enthalten ist, hängt vom gebuchten Tarif ab, nicht nur vom Resort. Drei Dinge sollten Sie vor der Buchung prüfen:',
  ],
  inclusions: [
    {
      title: 'Abendessen',
      body: 'Können Sie im Ort zu Fuß ins Restaurant gehen, oder ist das Restaurant des Resorts die einzige Möglichkeit? Wenn es die einzige Möglichkeit ist, ist ein Tarif mit Abendessen wichtiger.',
    },
    {
      title: 'Flughafentransfer',
      body: 'Inklusive, gegen Aufpreis oder selbst zu organisieren? In Ivalo und Kittilä fahren wenige öffentliche Verkehrsmittel, das wirkt sich auf den Gesamtpreis aus.',
    },
    {
      title: 'Sauna',
      body: 'Eine gemeinsame Sauna oder eine eigene im Zimmer oder in der Hütte? Saunen sind in finnischen Unterkünften verbreitet, aber eine eigene verändert den Aufenthalt.',
    },
  ],
  inclusionsNote:
    'Diese drei Punkte stehen hier mit Absicht nicht in einer festen Tabelle: Sie ändern sich mit jedem Tarif, und eine feste Tabelle wäre schneller veraltet als die Seiten der Resorts. Prüfen Sie es immer auf der Buchungsseite des Resorts.',

  bookingEyebrow: 'Zeitpunkt',
  bookingH2: 'Wann buchen: 8–12 Monate vorher für die Spitzenwochen',
  bookingIntro:
    'Für die Spitzenwochen werden Kakslauttanen und Levin Iglut 8–12 Monate im Voraus gebucht. Schon im November beginnen sich die Iglus für die Spitzenwochen des darauffolgenden Winters zu füllen, die Auswahl wird also lange vor dem Jahreswechsel kleiner. Nach dem Monatsüberblick dieser Website:',
  bookingRows: [
    { period: 'Weihnachtswoche', body: 'Etwa 12 Monate vorher.' },
    { period: 'Neujahr', body: 'Etwa 10 Monate vorher.' },
    { period: 'Mitte Februar', body: 'Europäische Schulferien. Etwa 6–8 Monate vorher.' },
    { period: 'März', body: '4–6 Monate vorher. Ein Lieblingsmonat all derer, die wiederkommen: dunkle Nächte und längere Tage zugleich.' },
    { period: 'September–Oktober', body: 'Noch freie Zimmer und das beste Verhältnis von Polarlicht und Preis in der Saison.' },
  ],
  bookingOutro: [
    'Tageslicht, Polarlicht, Schnee und Buchungslage für jeden Monat finden Sie im ',
    { to: '/when-to-go', label: 'Überblick zur besten Reisezeit' },
    '. Wer zwei oder drei Monate vor der Reise ein Glasiglu für Dezember sucht, findet kaum noch etwas. Die Reise in den März zu verlegen hilft dann meist mehr, als auf ein anderes Resort auszuweichen.',
  ],

  cloudyEyebrow: 'Ehrlich gesagt',
  cloudyH2: 'Und wenn es bewölkt ist?',
  cloudyIntro:
    'Polarlichter sehen Sie nur in klaren Nächten, und ein Glasiglu kann Ihnen das Wetter nicht verkaufen. Das Polarlicht ist bei keinem Resort im Preis inbegriffen. Drei Dinge können Sie konkret tun.',
  cloudy: [
    {
      title: 'Mehr als eine Nacht buchen',
      body: 'Eine Nacht ist ein Glücksspiel, zwei oder drei verbessern Ihre Chancen. Legen Sie die Iglu-Nächte ans Ende der Reise, dann haben Sie eine weitere Chance, falls die ersten Nächte bewölkt waren.',
    },
    {
      title: 'Einen Polarlicht-Alarm nutzen',
      body: 'Manche Resorts melden sich, wenn das Polarlicht erscheint: Aurora Village Ivalo per App, und das Arctic SnowHotel führt in seinen Glasiglus einen Polarlicht-Alarm auf. Prüfen Sie vor der Buchung, ob Ihr Resort so etwas hat. Wenn Ihre Reisedaten flexibel sind: Rund um die Tagundnachtgleichen ist das Polarlicht meist aktiver, der März ist deshalb ein guter Monat.',
    },
    {
      title: 'Den bewölkten Abend vorher planen',
      body: 'Sauna, ein Abendessen im Resort, ein Spaziergang draußen: Ein Plan, der auch unter Wolken funktioniert, macht den Abend nicht zur verlorenen Nacht.',
    },
  ],
  cloudyOutro: [
    'Auch in einer bewölkten Nacht liegen Sie warm unter Glas, im Winter umgeben von verschneiten Bäumen. Wie sich das anfühlt, hängt davon ab, was Sie erwartet haben. Wann Polarlichter am wahrscheinlichsten sind und wie hoch die Chancen stehen, erklärt der ',
    { href: 'https://laplandvibes.com/de/northern-lights/', label: 'Polarlicht-Ratgeber' },
    ' von LaplandVibes.',
  ],

  ctaH2: 'Erst die Region, dann den Monat',
  ctaBody:
    'Wenn Typ und Region feststehen, bleibt nur noch der Monat. Prüfen Sie Tageslicht, Polarlicht und Buchungslage nach Monaten und tragen Sie dann Ihre Reisedaten in den Buchungskalender des Resorts ein.',
  ctaPrimary: 'Beste Reisezeit',
  ctaSecondary: 'Unterkunftsarten',
  checkedNote:
    'Angaben zu den Resorts am 18. Oktober 2026 auf der eigenen Website des jeweiligen Resorts geprüft. Saisonzeiten, Zimmer und Tarifinhalte ändern sich: Bitte auf der Website und Buchungsseite des Resorts bestätigen.',
}

export default de
