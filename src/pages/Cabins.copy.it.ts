// Guida alla vacanza in chalet (articolo partner Lomarengas), italiano.
import type { PageCopy } from './Cabins.copy.types'

const copy: PageCopy = {
  seo: {
    title: 'Chalet in Lapponia: Levi, Ylläs, Ruka, Saariselkä',
    description: 'Come funziona la vacanza in chalet finlandese: cosa offre un mökki, come si distinguono Levi, Ylläs, Ruka e Saariselkä e come cercare gli chalet con Lomarengas.',
  },
  ui: {
    adNotice: 'Contiene link pubblicitari · Partnership con Lomarengas',
    eyebrow: 'Vacanze in chalet',
    h1: 'La vacanza in chalet in Lapponia',
    heroAlt: "Chalet di tronchi nella Lapponia innevata all'ora blu, luce calda alle finestre e debole aurora nel cielo",
    lead: "Pareti di tronchi tutte per Lei, la Sua sauna privata e nessuno sopra, sotto o dietro la parete.",

    whyEyebrow: 'Perché uno chalet',
    whyH2: 'Cosa Le dà un mökki che un hotel non può dare',
    whyLead: 'Il mökki è lo chalet di vacanza finlandese, e porta con sé i suoi rituali. Quattro motivi per cui batte una camera d\'albergo per una settimana al nord:',
    whyCards: [
      {
        title: 'La Sua sauna privata',
        body: 'La maggior parte degli chalet in affitto include una sauna privata, e nei migliori è riscaldata a legna. Sci, sauna, cena e veglia per l\'aurora: questo è il ritmo quotidiano di una settimana in chalet finlandese.',
      },
      {
        title: 'Spazio per tutto il gruppo',
        body: "Gli chalet ospitano da due a dodici persone o più. Una cucina, un camino e un conto diviso tra amici di solito battono tre o quattro camere d'albergo.",
      },
      {
        title: 'La Sua cucina',
        body: 'I prezzi dei ristoranti delle stazioni sciistiche si sommano in fretta in una settimana. Una cucina in chalet significa colazioni con calma, pranzo al sacco per le piste e una grande spesa al supermercato del paese.',
      },
      {
        title: 'Il silenzio',
        body: "Scenda dal portico e sarà nella neve, sotto le stelle, spesso con l'aurora sopra la testa. Niente corridoi, niente hall, niente altri ospiti. Quel silenzio è esattamente il punto.",
      },
    ],

    partnerEyebrow: 'Dove cerchiamo per primi',
    partnerH2: 'Ricerca chalet: Lomarengas',
    partnerBody: "Lomarengas è un'agenzia finlandese di affitto di chalet con oltre 8.000 case vacanza in tutto il Paese, dagli chalet accanto alle piste di Levi alle baite in riva al lago nell'estremo nord. Gli annunci mostrano foto reali, posizioni esatte e prezzi settimana per settimana, e ogni chalet indica cosa è incluso.",
    partnerNote: 'I link qui sotto portano a lomarengas.fi, dove ricerca, prezzi e prenotazione sono gestiti da Lomarengas. Se prenota tramite questi link, LaplandStays riceve una commissione fissa senza costi aggiuntivi per Lei.',
    partnerCta: 'Sfoglia gli chalet',

    areasEyebrow: 'I quattro classici',
    areasH2: 'Levi, Ylläs, Ruka o Saariselkä?',
    areasLead: "Tutti e quattro offrono piste, anelli da fondo e chalet a breve distanza in auto da un paese. La differenza è l'atmosfera: quanta vita di paese vuole fuori dalla porta dello chalet.",
    areas: [
      {
        name: 'Levi',
        tagline: 'La stazione con tutti i servizi',
        body: "La stazione sciistica più frequentata della Finlandia, con lo slalom di Coppa del Mondo ogni novembre e un paese dove ristoranti, noleggi e punti di ritrovo dei safari sono raggiungibili a piedi. Gli chalet circondano il fell: può scegliere tra posizioni ski-in vicino alla cabinovia e lotti più tranquilli a qualche chilometro.",
        bullets: [
          'Ideale per: chi viene per la prima volta e gruppi che vogliono ristoranti e vita serale vicino allo chalet',
          'Servizi del paese a piedi dalle zone chalet più vicine',
          "L'aeroporto di Kittilä è a circa 15 minuti, il transfer più semplice della Lapponia",
        ],
        note: '',
        cta: 'Chalet a Levi · Lomarengas',
      },
      {
        name: 'Ylläs',
        tagline: 'La terra quieta dei fell',
        body: "Le piste più lunghe della Finlandia su un solo fell, due paesi tranquilli (Äkäslompolo e Ylläsjärvi) ai suoi piedi e il parco nazionale Pallas-Yllästunturi che inizia al bordo della rete di anelli da fondo. Qui la vita in chalet è più sciare dalla porta di casa che après-ski.",
        bullets: [
          'Ideale per: fondisti, famiglie e chiunque sia allergico alla folla',
          'Due paesi significano negozi e ristoranti senza la confusione di una stazione',
          'Lo stesso aeroporto di Kittilä di Levi, transfer di circa 50 minuti',
        ],
        note: '',
        cta: 'Chalet a Ylläs · Lomarengas',
      },
      {
        name: 'Ruka',
        tagline: 'Il cavallo da lavoro di inizio stagione',
        body: "Ruka apre a ottobre e si scia fino a maggio, una delle stagioni più lunghe della Finlandia, e il compatto villaggio ai piedi delle piste tiene tutto vicino. Sotto il fell, la zona dei laghi di Kuusamo è classico territorio da chalet, con il parco nazionale di Oulanka e il sentiero Karhunkierros nei dintorni per i giorni senza sci.",
        bullets: [
          'Ideale per: sciare a inizio e fine stagione, escursioni nella ruska autunnale, pescatori',
          "L'aeroporto di Kuusamo è a circa 25 minuti dalle piste",
          'Vastissima scelta di chalet in riva ai laghi nella campagna intorno a Kuusamo',
        ],
        note: "A rigore Ruka si trova a Kuusamo, appena a sud del confine amministrativo della Lapponia. Alla neve non sembra importare, e nemmeno a chi affitta gli chalet.",
        cta: 'Chalet a Ruka · Lomarengas',
      },
      {
        name: 'Saariselkä',
        tagline: "La base per l'aurora dell'estremo nord",
        body: "La più settentrionale delle quattro grandi, a circa 68°N, il che La colloca sotto l'ovale aurorale: in una notte serena le probabilità qui sono semplicemente migliori. Il paese è compatto, il parco nazionale Urho Kekkonen inizia subito dietro e i fell si susseguono per cento chilometri verso est senza nulla di costruito in vista.",
        bullets: [
          "Ideale per: cacciatori di aurore, amanti di ciaspole e natura selvaggia, chi torna per la seconda volta",
          "L'aeroporto di Ivalo è a circa 30 minuti",
          'La cima del Kaunispää e la pista di slittino più lunga della Finlandia sono proprio sopra il paese',
        ],
        note: '',
        cta: 'Chalet a Saariselkä · Lomarengas',
      },
    ],

    practicalEyebrow: 'Prima di prenotare',
    practicalH2: 'Come leggere un annuncio di chalet',
    practicalLead: 'Gli annunci di chalet finlandesi sono onesti ma essenziali. Questi sono i dettagli da controllare prima di impegnarsi per una settimana:',
    checkTitle: "Da controllare nell'annuncio",
    checkList: [
      "Tipo di sauna: a legna è l'esperienza completa, elettrica quella di tutti i giorni",
      'Biancheria e pulizia finale: spesso a parte, le aggiunga prima di confrontare i totali',
      'Distanza da piste, anelli da fondo e negozio di alimentari più vicino, in chilometri e non in aggettivi',
      'Camino e legna: di solito inclusi, ma verifichi se per Lei è importante',
      'Accesso stradale invernale e parcheggio, soprattutto per gli chalet fuori dai paesi',
    ],
    knowTitle: 'Buono a sapersi',
    knowList: [
      'Un\'auto conviene per gli chalet lontani da un paese, veda la nostra guida ai trasporti',
      'In alta stagione le settimane in chalet vanno di solito dal sabato al sabato',
      'Da dicembre a marzo è alta stagione; prenoti le settimane richieste con molti mesi di anticipo',
      'La ruska di settembre e il sole di mezzanotte di giugno sono le occasioni della bassa stagione',
      'Porti le pantofole. Lo chalet finlandese è zona senza scarpe, e i pavimenti lo sanno.',
    ],

    seasonEyebrow: 'Quando',
    seasonH2: 'Quando fare la settimana in chalet',
    seasonLead: 'Non esiste una stagione sbagliata per un mökki, solo stagioni diverse:',
    seasons: [
      { period: 'Da dicembre a marzo', body: "Pieno inverno: piste aperte, anelli battuti e stagione dell'aurora al culmine. È il momento di maggiore richiesta, quindi prima prenota, migliore sarà la scelta." },
      { period: 'Aprile', body: 'Sci primaverile: giornate lunghe, neve compatta e clima da occhiali da sole in terrazza. I locali lo chiamano il segreto meglio custodito dell\'anno sciistico.' },
      { period: 'Da giugno ad agosto', body: 'Luce estiva: escursioni, pesca e nuotate dal pontile dello chalet. Il sole di mezzanotte dura fino a metà luglio e le serate restano chiare fino ad agosto inoltrato. Gli chalet in riva al lago danno il meglio di sé.' },
      { period: 'Da settembre a ottobre', body: "La ruska, la stagione dei colori autunnali: i fell si tingono di rosso e oro, l'aria è tersa e le prime aurore tornano nei cieli bui." },
    ],

    ctaH2: 'Scelga prima il fell, poi lo chalet',
    ctaLead: 'Parta dalla regione adatta al Suo gruppo e confronti poi gli chalet sulle pagine di Lomarengas. La prenotazione avviene su lomarengas.fi.',
    ctaPrimary: 'Tutti gli chalet su Lomarengas',
    ctaSecondary: 'Quando andare',

    showcase: {
      eyebrow: 'Direttamente dal catalogo',
      h2: 'Chalet veri, foto vere',
      lead: 'Una selezione aggiornata ogni giorno dall’offerta Lomarengas intorno a ogni località, presa direttamente dal feed prodotti. I prezzi sono settimanali «a partire da»; il prezzo finale dipende dalla settimana.',
      weekFrom: 'settimana da {price} €',
      guestsLabel: 'persone',
      bedroomsLabel: 'camere da letto',
      sizeLabel: 'superficie',
      viewCabin: 'Vedi lo chalet',
      browseAll: 'Sfoglia tutti i {count} chalet della zona',
      dataNote: 'Foto e prezzi: dati prodotto Lomarengas, aggiornati ogni giorno.',
    },
  },
}

export default copy
