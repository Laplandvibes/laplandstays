import type { IceHotelsCopy } from './IceHotels.copy.types'

/**
 * Pagina italiana sugli hotel di ghiaccio e di neve, /it/ice-hotels. Tradotta da IceHotels.copy.en.ts il
 * 22.10.2026, stessi fatti dell'inglese (letti sui siti delle strutture il 22.10.2026); nessun numero che
 * non sia nel testo inglese (numeroportti), nessun prezzo.
 * Domanda misurata con OpenSEO (22.10.2026, ricerche/mese): hotel di ghiaccio 720, hotel di ghiaccio
 * lapponia 390 (SERP: ICEHOTEL svedese), hotel di ghiaccio svezia 320, hotel di ghiaccio rovaniemi 260,
 * hotel di ghiaccio finlandia 140, snowcastle kemi 90; icehotel 1 000 = ICEHOTEL in Svezia. Per questo
 * titolo e h1 dicono «Lapponia finlandese», e la descrizione nomina Rovaniemi per prima.
 * Termini come nella pagina sugli igloo di vetro: hotel di neve, igloo di vetro, sauna in comune,
 * trasferimenti, Villaggio di Babbo Natale. Forma di cortesia: Lei (maiuscolo: Lei, Le, Suo, Sua).
 * Il partner di prenotazione nominato è Trip.com: il pulsante italiano apre Trip.com.
 */
const it: IceHotelsCopy = {
  seo: {
    title: "Hotel di ghiaccio in Lapponia finlandese: notti nella neve",
    description:
      "Hotel di ghiaccio in Lapponia finlandese, inverno 2026–27: Arctic SnowHotel a Rovaniemi, SnowVillage vicino a Ylläs, igloo di neve a Pyhä e visite di giorno.",
  },
  breadcrumbHome: "Home",
  breadcrumbPage: "Hotel di ghiaccio in Lapponia finlandese",
  keywords: ["hotel di ghiaccio", "hotel di ghiaccio lapponia", "hotel di ghiaccio rovaniemi", "hotel di ghiaccio finlandia", "arctic snowhotel", "hotel di neve", "snowcastle kemi"],
  adBadge: "Contiene link pubblicitari",
  h1: "Hotel di ghiaccio e di neve nella Lapponia finlandese",
  lead:
    "Nell'inverno 2026–27 ci sono tre posti nella Lapponia finlandese dove si può dormire in una camera costruita con la neve: l'Arctic SnowHotel vicino a Rovaniemi, lo SnowVillage nei pressi di Ylläs e gli igloo di neve del Lucky Ranch vicino a Pyhä. L'hotel di ghiaccio più famoso, l'ICEHOTEL, si trova invece in Svezia. Questa pagina spiega che cosa comprende ogni notte e quali luoghi si possono visitare anche senza pernottare.",
  heroAlt: "Una suite di neve all'Arctic SnowHotel, vicino a Rovaniemi: un letto con coperte di pelliccia tra sculture di ghiaccio e un uccello ad ali spiegate scolpito nella parete di neve",

  staysEyebrow: "Inverno 2026–27",
  staysH2: "Dove si può dormire nella neve",
  staysIntro:
    "Tutti e tre vengono ricostruiti ogni inverno, quindi camere, temi e date cambiano di anno in anno. Qui sotto riportiamo ciò che ciascuna struttura indica sul proprio sito per la prossima stagione.",
  arctic: {
    name: "Arctic SnowHotel & Glass Igloos",
    place: "Lehtoahontie 27, Rovaniemi: a circa 26 km (30 min) dal centro città e dal Villaggio di Babbo Natale, a 40 min dall'aeroporto",
    facts: [
      "L'hotel di neve apre il 15 dicembre 2026 e la stagione dura fino al 31 marzo.",
      "All'interno dell'hotel di neve e ghiaccio la temperatura resta tra 0 e −5 °C.",
      "La notte comprende sacchi a pelo pensati per il freddo estremo, l'accesso alla Snowhotel Lounge riscaldata, una sauna finlandese in comune e la colazione a buffet.",
      "La camera di neve è a Sua disposizione dalle 21:00. Cena e trasferimenti da Rovaniemi fanno parte dei pacchetti del resort, non della tariffa della camera.",
      "Il pernottamento è sconsigliato ai bambini sotto i 5 anni.",
    ],
    glassNote: [
      "Lo stesso resort ha anche igloo di vetro riscaldati, aperti dal 1° settembre. Li mettiamo a confronto con quelli di altri dieci resort nella nostra ",
      { to: '/glass-igloos', label: "pagina sugli igloo di vetro" },
      ".",
    ],
    ctaLabel: "Vedi prezzi e disponibilità",
    ctaNote: "Apre la pagina del resort presso il nostro partner di prenotazione Trip.com, con i prezzi per le Sue date di viaggio.",
  },
  snowVillage: {
    name: "Lapland Hotels SnowVillage",
    place: "Lainio, Kittilä, vicino a Ylläs",
    facts: [
      "Aperto dal 25 dicembre 2026 al 4 aprile 2027, tutti i giorni dalle 10:00 alle 22:00.",
      "Dal 2001 viene ricostruito da zero ogni anno con neve e ghiaccio naturale. Il tema dell'inverno 2026–27 non è ancora stato annunciato.",
      "I pernottamenti si limitano a una sola suite di ghiaccio di lusso per due persone, venduta in pacchetto con visita guidata, cena nel ristorante di ghiaccio, una capanna kota con sauna e vasca idromassaggio, e colazione in un ristorante riscaldato. Si prenota scrivendo un'e-mail allo SnowVillage, e la sua pagina descrive ancora l'inverno 2025–26.",
      "Durante l'orario di apertura un autobus parte ogni giorno da Levi e da Ylläs.",
    ],
  },
  luckyRanch: {
    name: "Igloo di neve del Lucky Ranch",
    place: "Villaggio di Pyhäjärvi, Pelkosenniemi, a circa 10 km da Pyhä",
    facts: [
      "Gli igloo di neve vengono ricostruiti ogni dicembre e all'interno la temperatura è sempre sotto 0 °C.",
      "Si dorme in un letto normale, con un sacco a pelo caldo e una borsa dell'acqua calda; è inclusa una colazione leggera.",
      "Accanto agli igloo c'è un campo base riscaldato, e i bagni e le docce del saloon del ranch restano aperti tutta la notte per chi dorme negli igloo.",
      "Il ranch consiglia gli igloo ad adulti e bambini in buona salute e vende i pernottamenti sul proprio sito.",
    ],
  },

  nightEyebrow: "Prima di prenotare",
  nightH2: "Com'è una notte nella neve",
  night: [
    { title: "La camera resta sotto zero", body: "All'Arctic SnowHotel la camera resta tra 0 e −5 °C per tutta la notte; al Lucky Ranch è sempre sotto 0 °C. Il senso dell'esperienza è proprio il freddo: una camera riscaldata è un igloo di vetro, non un hotel di neve." },
    { title: "Il lavoro lo fa il sacco a pelo", body: "L'Arctic SnowHotel fornisce sacchi a pelo pensati per il freddo estremo, il Lucky Ranch sacchi a pelo caldi e borse dell'acqua calda. Non occorre portare il proprio." },
    { title: "Accanto c'è un ambiente caldo", body: "L'Arctic SnowHotel ha la Snowhotel Lounge riscaldata e una sauna, il Lucky Ranch un campo base riscaldato accanto agli igloo. Se la notte si fa troppo fredda, c'è un posto dove rifugiarsi." },
    { title: "Bambini", body: "L'Arctic SnowHotel sconsiglia una notte nelle sue camere di neve ai bambini sotto i 5 anni. Il Lucky Ranch consiglia i suoi igloo ad adulti e bambini in buona salute. Lo SnowVillage non indica limiti di età: chieda prima di prenotare." },
  ],

  visitsEyebrow: "Senza pernottare",
  visitsH2: "Neve e ghiaccio da visitare di giorno",
  visitsIntro:
    "Le sale di neve e ghiaccio si possono visitare anche senza dormirci. L'Arctic SnowHotel e lo SnowVillage vendono biglietti giornalieri; Snowman World e lo SnowCastle of Kemi si visitano solo di giorno.",
  visitHeaders: { name: "Nome", place: "Dove", season: "Stagione", what: "Che cosa si vede" },
  visits: [
    {
      name: "Arctic SnowHotel",
      place: "Rovaniemi, a 26 km dal centro",
      season: "15 dicembre – 31 marzo, tutti i giorni 10:00–20:00",
      what: "Biglietto giornaliero per le opere di neve e ghiaccio, la cappella, il ristorante e il bar di ghiaccio; la visita guidata di 45 minuti è un extra.",
    },
    {
      name: "Lapland Hotels SnowVillage",
      place: "Lainio, Kittilä",
      season: "25 dicembre 2026 – 4 aprile 2027, tutti i giorni 10:00–22:00",
      what: "Opere di neve e ghiaccio, il bar di ghiaccio, uno spazio per i matrimoni, una suite di neve, un cinema e uno scivolo di ghiaccio. I biglietti si vendono solo alla reception; le visite guidate si prenotano in anticipo.",
    },
    {
      name: "Snowman World",
      place: "Villaggio di Babbo Natale, a 8 km dal centro di Rovaniemi",
      season: "6 dicembre 2026 – 17 marzo 2027",
      what: "Un parco di neve e ghiaccio con attività, cibo e bevande. Non offre pernottamenti.",
    },
    {
      name: "SnowCastle of Kemi",
      place: "Kemi, a 8 km dall'aeroporto di Kemi-Tornio",
      season: "Parco invernale da gennaio a inizio aprile (date del 2027 non ancora pubblicate); SnowExperience tutto l'anno",
      what: "Il castello di neve vero e proprio non viene costruito da anni e al momento non c'è un hotel di neve. La SnowExperience, al chiuso, resta a −5 °C tutto l'anno.",
    },
  ],

  swedenEyebrow: "Buono a sapersi",
  swedenH2: "L'ICEHOTEL è in Svezia",
  swedenBody: [
    "Quando si parla di «hotel di ghiaccio» spesso si intende l'ICEHOTEL di Jukkasjärvi, vicino a Kiruna, nella Lapponia svedese. Il suo hotel invernale è aperto da dicembre ad aprile, e l'ICEHOTEL 365 ha camere di ghiaccio e neve tutto l'anno.",
    "Non si trova in Finlandia, quindi non compare nell'elenco qui sopra. Questo sito si occupa della Lapponia finlandese.",
  ],

  nextEyebrow: "Alternative più calde",
  nextH2: "Se basta una notte al freddo",
  next: [
    [
      "Un igloo di vetro è una camera riscaldata con il cielo sopra il letto. Mettiamo a confronto 11 resort nella ",
      { to: '/glass-igloos', label: "pagina sugli igloo di vetro" },
      ".",
    ],
    [
      "Per il resto della settimana, le ",
      { to: '/cabins', label: "pagine sugli chalet" },
      " elencano gli chalet in affitto di ogni zona della Lapponia, con la distanza dal paese più vicino.",
    ],
  ],

  checkedNote:
    "Dati verificati sul sito di ciascuna struttura il 22 ottobre 2026. Gli hotel di neve vengono ricostruiti ogni inverno, quindi date e contenuto della notte possono cambiare: verifichi sulla pagina della struttura prima di prenotare.",
}

export default it
