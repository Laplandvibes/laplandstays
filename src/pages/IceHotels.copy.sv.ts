import type { IceHotelsCopy } from './IceHotels.copy.types'

/**
 * Svensk is- och snöhotellsida, /sv/ice-hotels. Översatt från IceHotels.copy.en.ts 22.10.2026.
 * Efterfrågan mätt med OpenSEO, marknad Sverige (22.10.2026): icehotel 9 900/månad, ishotellet 8 100,
 * ishotellet jukkasjärvi 5 400 (alla tre = ICEHOTEL i Jukkasjärvi), arctic snowhotel 90, snowcastle kemi 90,
 * ishotell finland 10. En svensk som söker "ishotell" menar Jukkasjärvi, så titeln leder med "Ishotell i
 * Finland", beskrivning, h1 och ingress säger "finska Lappland", och ingressen nämner ICEHOTEL i Jukkasjärvi
 * redan i andra meningen (uppgiften står i den engelska textens Sverige-avsnitt). Tilltal: du
 * (OHJE-NATIIVIKAANNOS §1, §9.v).
 *
 * Samma fakta som den engelska texten, ingen siffra utöver den (numeroportti). Nätverkets svenska former:
 * snöhotell, snöigloo/snöigloor, glasigloo/glasigloor, Jultomtens by, bastu, kåta, transfer,
 * Kemi-Torneå flygplats, svenska Lappland. Tider som 21.00 och 10.00–22.00, datum som "den 15 december 2026".
 * Lumilinna nämns inte: svenska sökare skriver "snowcastle kemi". Bokningspartner för svenska läsare: Sembo.
 */
const sv: IceHotelsCopy = {
  seo: {
    title: 'Ishotell i Finland: här kan du sova i snö i Lappland',
    description:
      'Is- och snöhotell i finska Lappland vintern 2026–27: Arctic SnowHotel i Rovaniemi, SnowVillage nära Ylläs och snöigloor vid Pyhä, samt dagsbesök.',
  },
  breadcrumbHome: 'Hem',
  breadcrumbPage: 'Ishotell i finska Lappland',
  keywords: ['ishotell finland', 'snöhotell finland', 'arctic snowhotel', 'snowvillage lappland', 'snöhotell finska lappland', 'ishotell rovaniemi', 'snowcastle kemi'],
  adBadge: 'Innehåller reklamlänkar',
  h1: 'Is- och snöhotell i finska Lappland',
  lead:
    'Vintern 2026–27 finns det tre ställen i finska Lappland där du kan sova i ett rum byggt av snö: Arctic SnowHotel nära Rovaniemi, SnowVillage nära Ylläs och Lucky Ranchs snöigloor nära Pyhä. Det mest kända ishotellet, ICEHOTEL i Jukkasjärvi, ligger i Sverige. Här får du veta vad som ingår i en natt på varje ställe och var du kan göra ett besök utan att övernatta.',
  heroAlt: 'En svit av snö på Arctic SnowHotel nära Rovaniemi: en säng med pälsfällar bland isskulpturer och en fågel med utbredda vingar utskuren i snöväggen',

  staysEyebrow: 'Vintern 2026–27',
  staysH2: 'Här kan du sova i snö',
  staysIntro:
    'Alla tre byggs upp på nytt varje vinter, så rum, teman och datum ändras från år till år. Här nedan följer vad varje ställe skriver på sin egen webbplats om den kommande säsongen.',
  arctic: {
    name: 'Arctic SnowHotel & Glass Igloos',
    place: 'Lehtoahontie 27, Rovaniemi: cirka 26 km (30 min) från centrum och Jultomtens by, 40 min från flygplatsen',
    facts: [
      'Snöhotellet öppnar den 15 december 2026, och säsongen pågår till den 31 mars.',
      'Inne i snö- och ishotellet ligger temperaturen mellan 0 och −5 °C.',
      'I övernattningen ingår sovsäckar gjorda för extrem kyla, tillgång till den varma Snowhotel Lounge, en gemensam finsk bastu och frukostbuffé.',
      'Snörummet är ditt från kl. 21.00. Middag och transfer från Rovaniemi ingår i anläggningens paket, inte i rumspriset.',
      'Övernattning rekommenderas inte för barn under 5 år.',
    ],
    glassNote: [
      'Samma anläggning har också uppvärmda glasigloor, som är öppna från den 1 september. De jämförs med tio andra anläggningar på vår ',
      { to: '/glass-igloos', label: 'sida om glasigloor' },
      '.',
    ],
    ctaLabel: 'Se priser och lediga rum',
    ctaNote: 'Öppnar anläggningens egen sida hos vår bokningspartner Sembo, med priser för dina resdatum.',
  },
  snowVillage: {
    name: 'Lapland Hotels SnowVillage',
    place: 'Lainio, Kittilä, nära Ylläs',
    facts: [
      'Öppet från den 25 december 2026 till den 4 april 2027, varje dag kl. 10.00–22.00.',
      'Har byggts upp från grunden varje år sedan 2001, av snö och naturis. Temat för 2026–27 är inte offentliggjort ännu.',
      'Övernattning finns bara i en enda lyxig issvit för två, som säljs som ett paket med guidad tur, middag i isrestaurangen, en kåta med bastu och badtunna samt frukost i en varm restaurang. Sviten bokas hos SnowVillage via e-post, och sidan om den beskriver fortfarande vintern 2025–26.',
      'Under öppettiderna går det buss varje dag från Levi och Ylläs.',
    ],
  },
  luckyRanch: {
    name: 'Lucky Ranchs snöigloor',
    place: 'Pyhäjärvi by, Pelkosenniemi, cirka 10 km från Pyhä',
    facts: [
      'Snöigloorna byggs upp på nytt varje december, och temperaturen inne i dem är alltid under 0 °C.',
      'Du sover i en vanlig säng med en varm sovsäck och en värmeflaska, och en lätt frukost ingår.',
      'Bredvid igloorna finns ett varmt basläger, och toaletterna och duscharna i ranchens saloon är öppna hela natten för igloogästerna.',
      'Ranchen rekommenderar igloorna för friska vuxna och barn och säljer nätterna på sin egen webbplats.',
    ],
  },

  nightEyebrow: 'Innan du bokar',
  nightH2: 'Så är det att sova i snö',
  night: [
    { title: 'Under noll hela natten', body: 'På Arctic SnowHotel ligger rummet mellan 0 och −5 °C hela natten, och på Lucky Ranch är det alltid under 0 °C. Kylan är själva poängen: ett uppvärmt rum är en glasigloo, inte ett snöhotell.' },
    { title: 'Sovsäcken håller dig varm', body: 'Arctic SnowHotel ger dig sovsäckar gjorda för extrem kyla, och Lucky Ranch varma sovsäckar och värmeflaskor. Du behöver inte ta med någon egen.' },
    { title: 'Ett varmt rum alldeles intill', body: 'Arctic SnowHotel har den varma Snowhotel Lounge och en bastu, Lucky Ranch ett varmt basläger bredvid igloorna. Blir natten för kall har du någonstans att ta vägen.' },
    { title: 'Barn', body: 'Arctic SnowHotel avråder från en natt i snörummen för barn under 5 år. Lucky Ranch rekommenderar sina igloor för friska vuxna och barn. SnowVillage anger ingen åldersgräns, så fråga innan du bokar.' },
  ],

  visitsEyebrow: 'Utan övernattning',
  visitsH2: 'Snö och is att besöka på dagen',
  visitsIntro:
    'Du kan också gå genom rum av snö och is utan att sova där. Arctic SnowHotel och SnowVillage säljer dagsbiljetter; Snowman World och SnowCastle of Kemi tar bara emot dagsbesökare.',
  visitHeaders: { name: 'Anläggning', place: 'Var', season: 'Säsong', what: 'Vad du ser' },
  visits: [
    {
      name: 'Arctic SnowHotel',
      place: 'Rovaniemi, 26 km från centrum',
      season: '15 december – 31 mars, varje dag kl. 10.00–20.00',
      what: 'Dagsbiljett till snö- och iskonsten, iskapellet, isrestaurangen och isbaren; en guidad tur på 45 minuter är ett tillval.',
    },
    {
      name: 'Lapland Hotels SnowVillage',
      place: 'Lainio, Kittilä',
      season: '25 december 2026 – 4 april 2027, varje dag kl. 10.00–22.00',
      what: 'Snö- och iskonst, isbaren, en vigsellokal, en svit av snö, en biograf och en isrutschkana. Biljetter säljs bara i receptionen; guidade turer bokas i förväg.',
    },
    {
      name: 'Snowman World',
      place: 'Jultomtens by, 8 km från Rovaniemi centrum',
      season: '6 december 2026 – 17 mars 2027',
      what: 'En snö- och ispark med aktiviteter, mat och dryck. Här säljs inga övernattningar.',
    },
    {
      name: 'SnowCastle of Kemi',
      place: 'Kemi, 8 km från Kemi-Torneå flygplats',
      season: 'Vinterparken januari – början av april (datumen för 2027 är inte publicerade än); SnowExperience året runt',
      what: 'Själva snöslottet har inte byggts på flera år, och just nu finns det inget snöhotell. SnowExperience inomhus hålls på −5 °C året runt.',
    },
  ],

  swedenEyebrow: 'Bra att veta',
  swedenH2: 'ICEHOTEL ligger i Sverige',
  swedenBody: [
    'När man säger ”ishotell” menar man ofta ICEHOTEL i Jukkasjärvi, nära Kiruna i svenska Lappland. Vinterhotellet där har öppet från december till april, och i ICEHOTEL 365 finns rum av is och snö året runt.',
    'Det ligger inte i Finland och finns därför inte med i listan ovan. Den här sajten handlar om finska Lappland.',
  ],

  nextEyebrow: 'Varmare alternativ',
  nextH2: 'Om en kall natt räcker',
  next: [
    [
      'En glasigloo är ett uppvärmt rum med himlen ovanför sängen. Vi jämför 11 anläggningar med glasigloor på vår ',
      { to: '/glass-igloos', label: 'sida om glasigloor' },
      '.',
    ],
    [
      'Till resten av veckan hittar du hyrstugor i varje område i finska Lappland på ',
      { to: '/cabins', label: 'stugsidorna' },
      ', med avståndet till närmaste by.',
    ],
  ],

  checkedNote:
    'Uppgifterna kontrollerades på varje anläggnings egen webbplats den 22 oktober 2026. Snöhotellen byggs upp på nytt varje vinter, så datum och vad som ingår i övernattningen kan ändras: bekräfta på anläggningens egen sida innan du bokar.',
}

export default sv
