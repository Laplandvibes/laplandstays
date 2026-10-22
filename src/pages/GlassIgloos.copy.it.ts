import type { GlassIgloosCopy } from './GlassIgloos.copy.types'

/**
 * Pagina italiana sugli igloo di vetro, /it/glass-igloos. Tradotta da GlassIgloos.copy.en.ts il
 * 22.10.2026, stessi fatti dell'inglese (verificati sui siti dei resort il 18.10.2026); nessun
 * numero che non sia nel testo inglese (numeroportti), nessun prezzo memorizzato.
 * Domanda misurata con OpenSEO (17.9. + 22.10.2026, ricerche/mese): igloo rovaniemi 590,
 * igloo lapponia 480, igloo di vetro lapponia 260, igloo aurora boreale 210, igloo di vetro 140,
 * igloo finlandia 70, kakslauttanen 210. Titolo e h1 su «igloo di vetro in Lapponia»; la
 * descrizione nomina Rovaniemi per prima. Forma di cortesia: Lei (maiuscolo: Lei, Le, Suo, Sua).
 * Il partner di prenotazione nominato è Trip.com: i pulsanti italiani aprono Trip.com.
 */
const it: GlassIgloosCopy = {
  seo: {
    title: "Igloo di vetro in Lapponia: 11 resort a confronto",
    description:
      "Igloo di vetro nella Lapponia finlandese: 11 resort a Rovaniemi, Saariselkä, Inari e Levi, con aeroporto più vicino, tipo di camera e quando prenotare.",
  },
  breadcrumbHome: "Home",
  breadcrumbPage: "Igloo di vetro in Lapponia",
  keywords: ["igloo rovaniemi", "igloo lapponia", "igloo di vetro lapponia", "igloo aurora boreale", "igloo di vetro", "igloo finlandia", "kakslauttanen"],
  adBadge: "Contiene link pubblicitari",
  h1: "Igloo di vetro in Lapponia",
  lead:
    "Nella Lapponia finlandese un igloo di vetro può essere un piccolo alloggio per due o tre ospiti oppure uno chalet in tronchi unito a un igloo di vetro. Il nome è lo stesso; cambiano però l'edificio, quanto cielo si vede dal letto e che cosa comprende la tariffa. Questa pagina mette a confronto 11 resort per zona, aeroporto più vicino e tipo di camera, e Le permette di scegliere la zona più adatta al Suo viaggio.",
  heroAlt: "Igloo di vetro in un bosco innevato al Kakslauttanen Arctic Resort, a Saariselkä, con due persone che camminano sul sentiero",

  typesEyebrow: "Per cominciare, i tipi",
  typesH2: "Che cosa si intende per igloo di vetro",
  typesIntro:
    "In Lapponia, con il nome di «igloo» si vendono tre cose diverse. Il comfort cambia soprattutto in base al tipo e alle dimensioni dell'alloggio: un piccolo igloo per due o tre ospiti oppure una baita per la famiglia.",
  typeCards: [
    {
      title: "Igloo di vetro indipendente",
      tagline: "Piccola cupola o baita, tetto tutto in vetro",
      body: "Un alloggio riscaldato che sorge da solo nella neve, con il vetro sopra il letto e spesso anche lungo le pareti. Il Kakslauttanen Arctic Resort a Saariselkä e il Golden Crown Levin Iglut vicino a Levi sono di questo tipo. Il cielo si vede senza alzarsi dal letto.",
      forWho: "Ideale per: coppie in viaggio per l'aurora e chi vuole scattare foto dal letto.",
    },
    {
      title: "Baita o camera con tetto di vetro",
      tagline: "Baita o camera d'albergo, parte del tetto in vetro",
      body: "Una normale baita o camera d'albergo in cui una parte del tetto è di vetro. Wilderness Hotels chiama le sue baite Aurora Cabins e le dota di un tetto di vetro riscaldato, mentre lo Star Arctic Hotel, sul fjäll Kaunispää, ha un tetto di vetro a tre pannelli sopra il letto. Di solito la parte vetrata della stanza è minore, e questo può rendere più facile gestire calore, buio e privacy.",
      forWho: "Ideale per: chi mette il comfort al primo posto e chi si ferma più a lungo.",
    },
    {
      title: "Igloo di neve (hotel di neve)",
      tagline: "Nome simile, prodotto diverso",
      body: "Una camera costruita con neve e ghiaccio, rifatta ogni inverno, in cui la temperatura resta tra 0 e −5 °C. L'hotel di neve dell'Arctic SnowHotel & Glass Igloos, vicino a Rovaniemi, apre ogni anno il 15 dicembre, fornisce sacchi a pelo pensati per il freddo estremo e sconsiglia il pernottamento ai bambini sotto i 5 anni. Un igloo di vetro è una camera calda con vista sul cielo; qui l'esperienza è proprio la notte al freddo.",
      forWho: "Ideale per: una notte d'avventura. Per la maggior parte delle persone, una notte basta.",
    },
  ],
  typesNote: [
    "L'Arctic SnowHotel ha igloo di vetro e hotel di neve nello stesso resort, così si possono provare tutti e due. Per tutti i tipi di alloggio in Lapponia, veda la ",
    { to: '/property-types', label: "guida ai tipi di alloggio" },
    " di questo sito e, su LaplandVibes, l'articolo ",
    { href: 'https://laplandvibes.com/it/blog/lapland-glass-cabin-categories/', label: "Le cabine di vetro in Lapponia: chi è chi" },
    ".",
  ],
  kidsNote:
    "Con i bambini, il punto da verificare è l'hotel di neve: l'Arctic SnowHotel sconsiglia una notte nelle sue camere di neve ai bambini sotto i 5 anni. Gli igloo di vetro sono camere riscaldate, ma i limiti di età e la possibilità che un bambino condivida il letto cambiano da un resort all'altro: chieda al momento della prenotazione.",

  seasonEyebrow: "Stagione",
  seasonH2: "La stagione degli igloo di vetro inizia con il buio, non con la neve",
  seasonBody: [
    "La stagione degli igloo di vetro segue le notti buie, non la neve. Nella guida mese per mese di questo sito, la stagione dell'aurora boreale va da settembre ad aprile, e alcuni resort aprono di conseguenza: Levin Iglut e gli igloo di vetro dell'Arctic SnowHotel aprono entrambi il 1° settembre. Solo l'hotel di neve aspetta il 15 dicembre.",
    "Non serve aspettare la neve. A settembre e ottobre i colori dell'autunno e le prime notti di aurora arrivano insieme, e c'è ancora disponibilità. Da giugno a metà luglio il sole non tramonta e l'aurora non si vede affatto. D'estate, sotto un tetto di vetro, si guarda invece il sole di mezzanotte: un'esperienza a sé, ma probabilmente non quella per cui ha fatto il viaggio.",
  ],

  tableH2: "I resort: zona, aeroporto e tipo di camera",
  tableIntro:
    "La tabella riporta gli 11 resort a cui questo sito rimanda tramite il suo partner di prenotazione, raggruppati per zona nelle sezioni qui sotto.",
  tableHeaders: { name: "Resort", area: "Zona", airport: "Aeroporto più vicino", feature: "Camere", book: "Prenotazione" },
  bookLabel: "Verifica disponibilità",
  rows: {
    kakslauttanen: {
      name: "Kakslauttanen Arctic Resort",
      area: "Saariselkä, 10 km a sud del paese",
      airport: "Ivalo (IVL), 35 km, circa 30 min",
      feature: "Igloo di vetro fino a 3 o 5 ospiti e Kelo-Glass Igloo: uno chalet in tronchi unito a un igloo di vetro",
    },
    starArctic: {
      name: "Star Arctic Hotel",
      area: "Saariselkä, in cima al fjäll Kaunispää",
      airport: "Ivalo (IVL)",
      feature: "Aurora Glass Cabins da 20 m² con tetto di vetro a tre pannelli sopra il letto",
    },
    muotka: {
      name: "Wilderness Hotel Muotka",
      area: "Vicino a Saariselkä",
      airport: "Ivalo (IVL), circa 45 min",
      feature: "Aurora Cabins da 30 m² fino a 4 persone, con tetto di vetro riscaldato",
    },
    auroraVillage: {
      name: "Aurora Village Ivalo",
      area: "Ivalo",
      airport: "Ivalo (IVL), 15 min",
      feature: "Aurora Cabins da 28 m² con tetto di vetro, avvisi aurora tramite app",
    },
    nellim: {
      name: "Wilderness Hotel Nellim",
      area: "Nellim, sulla riva del lago Inari",
      airport: "Ivalo (IVL), circa 45 min",
      feature: "Aurora Cabins con tetto di vetro riscaldato e ville sul lago",
    },
    wildernessInari: {
      name: "Wilderness Hotel Inari",
      area: "Lago Inari, a 5 min dal paese di Inari",
      airport: "Ivalo (IVL), circa 45 min",
      feature: "Aurora Cabins da 29 m² fino a 4 persone, con tetto di vetro riscaldato",
    },
    arcticSnowHotel: {
      name: "Arctic SnowHotel & Glass Igloos",
      area: "Lehtojärvi, a 30 min dal centro di Rovaniemi",
      airport: "Rovaniemi (RVN), 40 min",
      feature: "Igloo di vetro riscaldati dal 1° settembre e un hotel di neve ricostruito ogni inverno (dal 15 dicembre, da 0 a −5 °C)",
    },
    apukka: {
      name: "Apukka Resort",
      area: "Rovaniemi, a 18 km (15 min) dal centro",
      airport: "Rovaniemi (RVN), 10 km",
      feature: "Aurora Cabins con tetto di vetro panoramico riscaldato e suite in igloo di vetro con vista a 360°",
    },
    santasIgloosArcticCircle: {
      name: "Santa’s Igloos Arctic Circle",
      area: "Villaggio di Babbo Natale, Rovaniemi",
      airport: "Rovaniemi (RVN), 5 km",
      feature: "71 igloo di vetro con soffitto in vetro riscaldato",
    },
    levinIglut: {
      name: "Golden Crown Levin Iglut",
      area: "Levi, a 10 km dal paese, a 340 m sul livello del mare",
      airport: "Kittilä (KTT), 15 min",
      feature: "Igloo nelle categorie Superior, Prime Superior e Suite",
    },
    northernLightsRanch: {
      name: "Northern Lights Ranch",
      area: "Köngäs, a 15 km da Levi",
      airport: "Kittilä (KTT), 30 km",
      feature: "Sky View Cabins: baite in stile igloo con tetto di vetro riscaldato, in sei varianti",
    },
  },
  tableNote:
    "Ogni riga apre la pagina del resort presso il nostro partner di prenotazione Trip.com, con prezzi e disponibilità per le Sue date di viaggio. I prezzi degli igloo cambiano molto da una settimana all'altra, per questo non li riportiamo qui. Distanze, tempi e dettagli delle camere provengono dal sito di ciascun resort, le distanze degli aeroporti da Finavia; tutto verificato il 18 ottobre 2026.",

  areas: {
    rovaniemi: {
      eyebrow: "Per un viaggio breve",
      title: "Igloo intorno a Rovaniemi: vicino all'aeroporto",
      intro:
        "L'aeroporto di Rovaniemi (RVN) è a 10 km dal centro città. Un igloo nei dintorni di Rovaniemi è la scelta sensata se il viaggio è breve, se in programma c'è anche il Villaggio di Babbo Natale o se si vogliono ridurre al minimo i tempi di trasferimento.",
      properties: [
        {
          name: "Arctic SnowHotel & Glass Igloos (Lehtojärvi)",
          body: "Igloo di vetro dal 1° settembre e hotel di neve dal 15 dicembre, a 30 minuti dal centro città e a 40 dall'aeroporto. Tra i servizi dei suoi igloo di vetro, il resort indica un allarme aurora.",
        },
        {
          name: "Apukka Resort",
          body: "Il resort è a 18 km (15 minuti) dal centro e a 10 km dall'aeroporto. Le Aurora Cabins hanno un tetto di vetro panoramico riscaldato; le suite in igloo di vetro Kammi e Komsio offrono una vista a 360°.",
        },
        {
          name: "Santa’s Igloos Arctic Circle",
          body: "Nel Villaggio di Babbo Natale, a 5 km dall'aeroporto: 71 igloo di vetro con soffitto in vetro riscaldato.",
        },
      ],
      outro:
        "L'unico aspetto da valutare è l'inquinamento luminoso della città. I resort intorno a Rovaniemi sorgono lontano dal centro, ma per un cielo più buio conviene spingersi più a nord.",
      ctaLabel: "Cerca alloggi a Rovaniemi",
      guideLinks: [{ to: '/destinations/rovaniemi', label: "Guida a Rovaniemi" }],
    },
    north: {
      eyebrow: "Se il cielo buio è la priorità",
      title: "Saariselkä, Ivalo e Inari: verso nord",
      intro:
        "L'aeroporto di Ivalo (IVL) è a 25 km da Saariselkä e a 11 km dal centro di Ivalo. Inari è più a nord: Wilderness Hotels indica circa 45 minuti dall'aeroporto ai suoi hotel di Inari e Nellim. I dati sulle ore di luce nella guida mese per mese di questo sito si riferiscono a Rovaniemi (66,5° N), e l'inverno a Saariselkä e Inari è ancora più buio. Se l'aurora è il motivo principale del viaggio, è questa la ragione per andare a nord.",
      properties: [
        {
          name: "Kakslauttanen Arctic Resort",
          body: "Il resort si trova a 10 km a sud del paese di Saariselkä e a 35 km (circa 30 minuti) dall'aeroporto di Ivalo. Igloo di vetro fino a 3 o 5 ospiti e Kelo-Glass Igloo, in cui uno chalet in tronchi è unito a un igloo di vetro. Una delle sue tariffe invernali comprende colazione e cena.",
        },
        {
          name: "Star Arctic Hotel",
          body: "In cima al fjäll Kaunispää, a Saariselkä. L'Aurora Glass Cabin misura 20 m², ospita due adulti e un bambino fino a 11 anni e ha un tetto di vetro a tre pannelli proprio sopra il letto.",
        },
        {
          name: "Wilderness Hotel Muotka",
          body: "Vicino a Saariselkä, a circa 45 minuti dall'aeroporto di Ivalo. Le sue Aurora Cabins misurano 30 m², ospitano fino a quattro persone e hanno un tetto di vetro riscaldato.",
        },
        {
          name: "Aurora Village Ivalo",
          body: "A Ivalo, a 15 minuti dall'aeroporto. Aurora Cabins da 28 m² con tetto di vetro e avvisi aurora tramite app.",
        },
        {
          name: "Wilderness Hotel Nellim e Wilderness Hotel Inari",
          body: "Entrambi sulla riva del lago Inari, a circa 45 minuti dall'aeroporto di Ivalo. Il Wilderness Hotel Inari è a cinque minuti dal paese di Inari; Nellim è un villaggio a sé. Tutti e due hanno Aurora Cabins con tetto di vetro riscaldato.",
        },
      ],
      ctaLabel: "Cerca alloggi a Saariselkä",
      guideLinks: [
        { to: '/destinations/saariselka', label: "Guida a Saariselkä" },
        { to: '/destinations/inari', label: "Guida a Inari" },
      ],
    },
    levi: {
      eyebrow: "Se vuole anche sciare",
      title: "Levi: piste di giorno, tetto di vetro di notte",
      intro:
        "L'aeroporto di Kittilä (KTT) è a 15 km da Levi. Scelga Levi se lo sci è il programma principale e l'igloo è il premio a fine vacanza.",
      properties: [
        {
          name: "Golden Crown Levin Iglut",
          body: "Igloo di vetro a 10 km dal paese di Levi, a 340 m sul livello del mare e a 15 minuti dall'aeroporto di Kittilä. Tre categorie di camera: Superior, Prime Superior e Suite. La stagione degli igloo 2026–27 va dal 1° settembre al 13 aprile; a settembre e ottobre il resort è aperto solo dal martedì al sabato.",
        },
        {
          name: "Northern Lights Ranch",
          body: "A Köngäs, a 15 km da Levi e a 30 km dall'aeroporto di Kittilä. Le sue Sky View Cabins sono baite in stile igloo con tetto di vetro riscaldato, in sei varianti.",
        },
      ],
      outro:
        "Una notte in igloo è più un premio che una base per tutta la settimana, quindi raramente ha senso passarci ogni notte. Scelga un hotel in paese o uno chalet vicino alle piste e aggiunga una o due notti in igloo alla fine: sci di giorno, l'ultima notte sotto il vetro.",
      ctaLabel: "Cerca alloggi a Levi",
      guideLinks: [{ to: '/destinations/levi', label: "Guida a Levi" }],
    },
  },

  questionsEyebrow: "Come scegliere",
  questionsH2: "Quale zona: tre domande",
  questionsIntro: "Con le tre zone davanti, la scelta si riduce a tre domande.",
  questions: [
    {
      title: "Quante notti ha a disposizione?",
      body: "Con tre notti o meno, parta da Rovaniemi: i trasferimenti sono i più brevi, quindi meno tempo del viaggio se ne va negli spostamenti. Con quattro notti o più diventa realistico volare a Ivalo e salire a nord, a Saariselkä o a Inari.",
    },
    {
      title: "Il viaggio è per l'aurora o per lo sci?",
      body: "Se viene prima l'aurora, vada a nord: l'inverno a Saariselkä e Inari è più buio che a Rovaniemi. Se viene prima lo sci, scelga Levi. Se vuole entrambe le cose, abbini una settimana bianca a Levi con una o due notti al Golden Crown Levin Iglut, oppure vada a nord a marzo, quando le giornate sono più lunghe.",
    },
    {
      title: "Dove investire il budget?",
      body: "Con la stessa cifra si fanno viaggi diversi, a seconda di come la si spende: ogni notte in un igloo più economico, oppure camere normali più una notte in uno migliore. Confronti il totale con pasti e trasferimenti compresi, non la tariffa a notte. Kakslauttanen, per esempio, vende una tariffa invernale con colazione e cena incluse: controlli quindi che cosa comprende ciascuna tariffa.",
    },
  ],

  cabinCombo: {
    eyebrow: "Un piano semplice",
    h2: "Una o due notti in igloo e uno chalet per il resto della settimana",
    body: "Una notte in igloo funziona meglio come premio che come base per un'intera settimana. Un modo di organizzare il viaggio in Lapponia è passare una o due notti in igloo e il resto della settimana in uno chalet in affitto nella stessa zona: c'è posto per tutto il gruppo, e per tutta la settimana può avere sauna e cucina tutte per sé. Questo sito elenca gli chalet di ogni zona con la distanza dal paese più vicino.",
    linkLabel: "Chalet in Lapponia per zona",
  },

  accessEyebrow: "Come arrivare",
  accessH2: "Come arrivare: voli, treno notturno e trasferimenti",
  access: [
    [
      "I resort di questa pagina sono serviti da tre aeroporti: Rovaniemi (RVN), Kittilä (KTT) per Levi e Ivalo (IVL) per Saariselkä e Inari. Rovaniemi ha voli da Helsinki tutto l'anno. In inverno tutti e tre gli aeroporti hanno anche voli diretti da diverse città europee, ma i collegamenti cambiano di anno in anno: verifichi quelli dal Suo aeroporto di partenza.",
    ],
    [
      "I tempi di trasferimento per ogni resort sono indicati nelle sezioni sulle zone qui sopra. Come riferimento, RVN è a 10 km dal centro di Rovaniemi, KTT a 15 km da Levi e IVL a 25 km da Saariselkä.",
    ],
    [
      "Senza prendere l'aereo, il treno notturno delle ferrovie finlandesi VR va da Helsinki a Rovaniemi e può trasportare anche la Sua auto. Da Rovaniemi a Saariselkä servono poi altre quattro ore circa di autobus, quindi per i resort del nord un volo per Ivalo è più rapido. Alcuni resort vendono i trasferimenti dall'aeroporto, in pacchetto o come extra; le altre opzioni sono nella ",
      { to: '/transport', label: "guida ai trasporti" },
      ".",
    ],
  ],

  itinerariesEyebrow: "Pianificazione",
  itinerariesH2: "Viaggi tipo: dove mettere le notti in igloo",
  itinerariesIntro:
    "Metta le notti in igloo nella seconda metà del viaggio, per due motivi: la prima sera si è stanchi del viaggio e meno disposti a restare svegli per l'aurora, e le notti successive fanno da riserva se le prime sono nuvolose.",
  itineraries: [
    {
      title: "3 notti a Rovaniemi",
      body: "Prima notte in città o vicino al Villaggio di Babbo Natale, con il museo Arktikum e un safari. Seconda e terza notte in un igloo di vetro fuori città, tenendo l'ultima sera per l'aurora.",
    },
    {
      title: "4 notti a Saariselkä",
      body: "Prima e seconda notte in un hotel in paese, con un'escursione con le ciaspole nel parco nazionale Urho Kekkonen e un safari con gli husky, entrambi in partenza dal paese. Terza e quarta notte in igloo.",
    },
    {
      title: "5 notti a Levi",
      body: "Tre giorni di sci da un hotel in paese o da uno chalet vicino alle piste, poi le ultime una o due notti al Golden Crown Levin Iglut. Lo spostamento è di 10 km: basta un taxi e non serve un'auto a noleggio.",
    },
  ],

  inclusionsEyebrow: "Stessa notte, tariffa diversa",
  inclusionsH2: "Che cosa comprende la tariffa: cena, trasferimenti, sauna",
  inclusionsBody: [
    "Esempi che abbiamo potuto verificare sui siti dei resort: Kakslauttanen vende una tariffa invernale con colazione e cena incluse. A Kakslauttanen i trasferimenti privati dall'aeroporto sono compresi solo nel prezzo del Luxury Kelo-Glass Igloo, mentre l'Aurora Adventure Break di tre notti del Wilderness Hotel Muotka include i trasferimenti dall'aeroporto di Ivalo. Nelle camere di neve dell'Arctic SnowHotel i sacchi a pelo pensati per il freddo estremo sono compresi nella camera.",
    "Che cosa comprende una tariffa dipende dal piano tariffario, non solo dal resort. Prima di prenotare conviene controllare tre cose:",
  ],
  inclusions: [
    {
      title: "Cena",
      body: "Si può andare a piedi ai ristoranti di un paese, o il ristorante del resort è l'unica possibilità? Se è l'unica, una tariffa con la cena inclusa conta di più.",
    },
    {
      title: "Trasferimento dall'aeroporto",
      body: "Incluso, a pagamento o da organizzare per conto Suo? A Ivalo e Kittilä i mezzi pubblici sono scarsi, quindi questo cambia il totale.",
    },
    {
      title: "Sauna",
      body: "Una sauna in comune o una privata in camera o nella baita? Negli alloggi finlandesi la sauna è diffusa, ma averne una privata cambia il soggiorno.",
    },
  ],
  inclusionsNote:
    "Di proposito non mettiamo questi tre punti in una tabella fissa: cambiano con ogni piano tariffario, e una tabella fissa invecchierebbe prima delle pagine dei resort. Verifichi sempre sulla pagina di prenotazione del resort.",

  bookingEyebrow: "Tempi",
  bookingH2: "Quando prenotare: 8–12 mesi prima per le settimane di punta",
  bookingIntro:
    "Per le settimane di punta, Kakslauttanen e Levin Iglut si prenotano con 8–12 mesi di anticipo. Già a novembre gli igloo per le settimane di punta dell'inverno successivo cominciano a riempirsi, quindi la scelta si restringe molto prima della fine dell'anno. In base alla guida mese per mese di questo sito:",
  bookingRows: [
    { period: "Settimana di Natale", body: "Circa 12 mesi prima." },
    { period: "Capodanno", body: "Circa 10 mesi prima." },
    { period: "Metà febbraio", body: "Vacanze scolastiche europee. Circa 6–8 mesi prima." },
    { period: "Marzo", body: "4–6 mesi prima. Uno dei mesi preferiti da chi torna in Lapponia: notti buie e giornate più lunghe allo stesso tempo." },
    { period: "Settembre–ottobre", body: "C'è ancora disponibilità, ed è il miglior equilibrio della stagione tra aurora e prezzo." },
  ],
  bookingOutro: [
    "Il quadro completo di luce, aurora, neve e prenotazioni mese per mese è nella ",
    { to: '/when-to-go', label: "guida su quando andare" },
    ". Se inizia a cercare un igloo di vetro per dicembre due o tre mesi prima della partenza, troverà ben poco. Spostare il viaggio a marzo di solito aiuta più che ripiegare su un altro resort.",
  ],

  cloudyEyebrow: "In tutta onestà",
  cloudyH2: "E se il cielo è nuvoloso?",
  cloudyIntro:
    "L'aurora si vede solo nelle notti serene, e il bel tempo non lo vende nessun igloo di vetro. Nessun resort include l'aurora nel prezzo. Ci sono tre cose pratiche che può fare.",
  cloudy: [
    {
      title: "Prenoti più di una notte",
      body: "Una notte sola è un azzardo; due o tre migliorano le probabilità. Metta le notti in igloo verso la fine del viaggio: se le notti precedenti sono state nuvolose, Le danno un'altra possibilità.",
    },
    {
      title: "Sfrutti un avviso aurora",
      body: "Alcuni resort avvisano quando compare l'aurora: Aurora Village Ivalo tramite app, e l'Arctic SnowHotel indica un allarme aurora nei suoi igloo di vetro. Prima di prenotare, verifichi se il Suo resort ne ha uno. Se le Sue date sono flessibili, l'aurora tende a essere più attiva intorno agli equinozi, quindi marzo è un buon mese.",
    },
    {
      title: "Pianifichi in anticipo la serata nuvolosa",
      body: "Una sauna, la cena al resort, una passeggiata all'aperto: un programma che funziona anche con le nuvole evita che la notte sembri sprecata.",
    },
  ],
  cloudyOutro: [
    "Anche in una notte nuvolosa resta un letto caldo sotto il vetro e, d'inverno, alberi rischiarati dalla neve tutt'intorno. Che effetto fa dipende da che cosa si aspettava. Per sapere quando l'aurora è più probabile, e con quali probabilità, veda la ",
    { href: 'https://laplandvibes.com/it/northern-lights/', label: "guida all'aurora boreale" },
    " di LaplandVibes.",
  ],

  ctaH2: "Prima la zona, poi il mese",
  ctaBody:
    "Una volta scelti il tipo e la zona, resta da decidere solo il mese. Controlli luce, aurora e prenotazioni mese per mese, poi inserisca le Sue date di viaggio nel calendario di prenotazione del resort.",
  ctaPrimary: "Quando andare",
  ctaSecondary: "Tipi di alloggio",
  checkedNote:
    "Dati dei resort verificati sul sito di ciascun resort il 18 ottobre 2026. Stagioni, camere e contenuto delle tariffe cambiano: verifichi sul sito del resort e sulla pagina di prenotazione.",
}

export default it
