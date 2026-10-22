import type { GlassIgloosCopy } from './GlassIgloos.copy.types'

/**
 * Svensk glasigloosida, /sv/glass-igloos. Översatt från GlassIgloos.copy.en.ts 22.10.2026.
 * Efterfrågan mätt med OpenSEO, marknad Sverige (17.9. + 22.10.2026): igloo hotell finland
 * 170/månad, glasigloo 140, glasigloo finland 110, glasiglo 50, glasigloo lappland 10,
 * kakslauttanen 90. Titeln leder med "Glasigloo i Finland" och tar med "igloohotell";
 * "Lappland" står i titel, beskrivning, h1 och ingress alltid som "finska Lappland" eller
 * med Finland, eftersom det för en svensk också betyder svenska Lappland; i löptexten bär
 * sammanhanget (Rovaniemi, Saariselkä, Levi) det. Tilltal: du (OHJE-NATIIVIKAANNOS §1, §9.v).
 *
 * Samma fakta som den engelska texten: varje uppgift lästes 18.10.2026 på anläggningens egen
 * webbplats. Ingen siffra som inte står i den engelska texten (numeroportti). Nätverkets
 * svenska former: glasigloo/glasigloon/glasigloor (SAOL), Jultomtens by, Inarisjön (som på
 * resten av den här sajten), Helsingfors, fjäll. Bokningspartner för svenska läsare: Sembo.
 */
const sv: GlassIgloosCopy = {
  seo: {
    title: 'Glasigloo i Finland: 11 igloohotell och glasstugor jämförda',
    description:
      'Glasigloor i finska Lappland jämförda: 11 anläggningar i Rovaniemi, Saariselkä, Inari och Levi, med närmaste flygplats, rumstyp och när du ska boka.',
  },
  breadcrumbHome: 'Hem',
  breadcrumbPage: 'Glasigloor i Finland',
  keywords: ['glasigloo finland', 'igloo hotell finland', 'glasigloo', 'glasiglo', 'glasigloo lappland', 'glasigloo rovaniemi', 'kakslauttanen'],
  adBadge: 'Innehåller reklamlänkar',
  h1: 'Glasigloor i Finland',
  lead:
    'En glasigloo i finska Lappland kan vara en liten byggnad för två eller tre gäster eller en timmerstuga som är ihopbyggd med en glasigloo. Namnet är detsamma, men byggnaden, hur mycket himmel du ser från sängen och vad som ingår i priset skiljer sig åt. Den här sidan listar 11 anläggningar efter område, närmaste flygplats och rumstyp, och hjälper dig att välja ett område som passar din resa.',
  heroAlt: 'Glasigloor i snötäckt skog på Kakslauttanen Arctic Resort i Saariselkä, två personer går på stigen',

  typesEyebrow: 'Börja med typerna',
  typesH2: 'Vad som räknas som glasigloo',
  typesIntro:
    'Tre olika saker säljs som ”igloo” i Lappland. Skillnaden i komfort beror mest på typen och storleken: en liten igloo för två eller tre gäster eller en stuga för hela familjen.',
  typeCards: [
    {
      title: 'Fristående glasigloo',
      tagline: 'En liten kupol eller stuga med tak helt i glas',
      body: 'En liten uppvärmd byggnad som står för sig själv i snön, med glas över sängen och ofta längs väggarna. Kakslauttanen Arctic Resort i Saariselkä och Golden Crown Levin Iglut nära Levi är av den här typen. Du ser himlen utan att gå upp ur sängen.',
      forWho: 'Bäst för: par på norrskensresa och alla som vill fotografera från sängen.',
    },
    {
      title: 'Stuga eller rum med glastak',
      tagline: 'En stuga eller ett hotellrum med glastak',
      body: 'En vanlig stuga eller ett hotellrum där en del av taket är av glas. Wilderness Hotels kallar sina stugor Aurora Cabins och ger dem ett uppvärmt glastak, och Star Arctic Hotel på fjället Kaunispää har ett tredelat glastak ovanför sängen. Oftast är en mindre del av rummet av glas, vilket kan göra det lättare att hantera värme, mörker och avskildhet.',
      forWho: 'Bäst för: resenärer som sätter komforten först, och längre vistelser.',
    },
    {
      title: 'Snöigloo (snöhotell)',
      tagline: 'Liknande namn, en annan produkt',
      body: 'Ett rum av snö och is som byggs upp på nytt varje vinter och där temperaturen ligger mellan 0 och −5 °C. Snöhotellet på Arctic SnowHotel & Glass Igloos nära Rovaniemi öppnar den 15 december varje år, och gästerna får sovsäckar gjorda för extrem kyla. Anläggningen avråder från att låta barn under 5 år övernatta där. En glasigloo är ett varmt rum med utsikt mot himlen; här är den kalla natten själva upplevelsen.',
      forWho: 'Bäst för: en natts äventyr. För de flesta räcker en natt.',
    },
  ],
  typesNote: [
    'Arctic SnowHotel har glasigloor och snöhotellet på samma anläggning, så du kan prova båda. Alla boendetyper i Lappland hittar du i ',
    { to: '/property-types', label: 'guiden till boendetyper' },
    ' här på sajten och i artikeln ',
    { href: 'https://laplandvibes.com/sv/blog/lapland-glass-cabin-categories/', label: 'Lapplands glasstugor: vad är vad' },
    ' på LaplandVibes.',
  ],
  kidsNote:
    'Reser du med barn är det snöhotellet du ska titta närmare på: Arctic SnowHotel avråder från en natt i snörummen för barn under 5 år. Glasigloor är uppvärmda rum, men åldersgränserna och om ett barn får dela säng skiljer sig mellan anläggningarna, så fråga när du bokar.',

  seasonEyebrow: 'Säsong',
  seasonH2: 'Glasigloosäsongen börjar med mörkret, inte med snön',
  seasonBody: [
    'Glasigloosäsongen följer de mörka nätterna, inte snön. I vår guide månad för månad pågår norrskenssäsongen från september till april, och en del anläggningar öppnar i takt med den: Levin Iglut och glasigloorna på Arctic SnowHotel öppnar båda den 1 september. Bara snöhotellet väntar till den 15 december.',
    'Du behöver inte vänta på snön. I september och oktober sammanfaller höstfärgerna med de första norrskensnätterna, och det finns fortfarande lediga rum. Från juni till mitten av juli går solen inte ner, och norrsken syns inte alls. Under ett glastak på sommaren ser du midnattssolen i stället. Det är en upplevelse i sig, men förmodligen inte den du kom för.',
  ],

  tableH2: 'Anläggningarna: område, flygplats och rumstyp',
  tableIntro:
    'Tabellen visar de 11 anläggningar som sajten länkar till via sin bokningspartner. Avsnitten nedan går igenom dem område för område.',
  tableHeaders: { name: 'Anläggning', area: 'Område', airport: 'Närmaste flygplats', feature: 'Rum', book: 'Boka' },
  bookLabel: 'Se tillgänglighet',
  rows: {
    kakslauttanen: {
      name: 'Kakslauttanen Arctic Resort',
      area: 'Saariselkä, 10 km söder om byn',
      airport: 'Ivalo (IVL), 35 km, ca 30 min',
      feature: 'Glasigloor för upp till 3 eller 5 gäster, och Kelo-Glass Igloo: en timmerstuga ihopbyggd med en glasigloo',
    },
    starArctic: {
      name: 'Star Arctic Hotel',
      area: 'Saariselkä, på toppen av fjället Kaunispää',
      airport: 'Ivalo (IVL)',
      feature: 'Aurora Glass Cabins på 20 m² med ett tredelat glastak ovanför sängen',
    },
    muotka: {
      name: 'Wilderness Hotel Muotka',
      area: 'Nära Saariselkä',
      airport: 'Ivalo (IVL), ca 45 min',
      feature: 'Aurora Cabins på 30 m² för upp till 4 personer, med uppvärmt glastak',
    },
    auroraVillage: {
      name: 'Aurora Village Ivalo',
      area: 'Ivalo',
      airport: 'Ivalo (IVL), 15 min',
      feature: 'Aurora Cabins på 28 m² med glastak, norrskensaviseringar via en app',
    },
    nellim: {
      name: 'Wilderness Hotel Nellim',
      area: 'Nellim, vid Inarisjöns strand',
      airport: 'Ivalo (IVL), ca 45 min',
      feature: 'Aurora Cabins med uppvärmt glastak och villor vid sjön',
    },
    wildernessInari: {
      name: 'Wilderness Hotel Inari',
      area: 'Vid Inarisjön, 5 min från Inari by',
      airport: 'Ivalo (IVL), ca 45 min',
      feature: 'Aurora Cabins på 29 m² för upp till 4 personer, med uppvärmt glastak',
    },
    arcticSnowHotel: {
      name: 'Arctic SnowHotel & Glass Igloos',
      area: 'Lehtojärvi, 30 min från Rovaniemi centrum',
      airport: 'Rovaniemi (RVN), 40 min',
      feature: 'Uppvärmda glasigloor från den 1 september och ett snöhotell som byggs upp på nytt varje vinter (från den 15 december, 0 till −5 °C)',
    },
    apukka: {
      name: 'Apukka Resort',
      area: 'Rovaniemi, 18 km (15 min) från centrum',
      airport: 'Rovaniemi (RVN), 10 km',
      feature: 'Aurora Cabins med uppvärmt panoramaglastak och glasigloosviter med 360°-utsikt',
    },
    santasIgloosArcticCircle: {
      name: 'Santa’s Igloos Arctic Circle',
      area: 'Jultomtens by, Rovaniemi',
      airport: 'Rovaniemi (RVN), 5 km',
      feature: '71 glasigloor med uppvärmt glastak',
    },
    levinIglut: {
      name: 'Golden Crown Levin Iglut',
      area: 'Levi, 10 km från byn, 340 m över havet',
      airport: 'Kittilä (KTT), 15 min',
      feature: 'Igloor i klasserna Superior, Prime Superior och Suite',
    },
    northernLightsRanch: {
      name: 'Northern Lights Ranch',
      area: 'Köngäs, 15 km från Levi',
      airport: 'Kittilä (KTT), 30 km',
      feature: 'Sky View Cabins: stugor i igloostil med uppvärmt glastak, i sex utföranden',
    },
  },
  tableNote:
    'Varje rad öppnar anläggningens egen sida hos vår bokningspartner Sembo, med priser och tillgänglighet för dina resdatum. Igloopriserna växlar mycket från vecka till vecka, så vi skriver inte ut dem här. Avstånd, restider och rumsuppgifter kommer från respektive anläggnings egen webbplats och avstånden till flygplatserna från Finavia, kontrollerat den 18 oktober 2026.',

  areas: {
    rovaniemi: {
      eyebrow: 'För en kort resa',
      title: 'Runt Rovaniemi: nära flygplatsen',
      intro:
        'Rovaniemi flygplats (RVN) ligger 10 km från stadens centrum. En igloo runt Rovaniemi är det rimliga valet om resan är kort, om du också vill se Jultomtens by eller om du vill lägga så lite tid som möjligt på transfer.',
      properties: [
        {
          name: 'Arctic SnowHotel & Glass Igloos (Lehtojärvi)',
          body: 'Glasigloor från den 1 september och snöhotell från den 15 december, 30 minuter från centrum och 40 från flygplatsen. Anläggningen listar ett norrskenslarm bland bekvämligheterna i sina glasigloor.',
        },
        {
          name: 'Apukka Resort',
          body: 'Anläggningen ligger 18 km (15 minuter) från centrum och 10 km från flygplatsen. Aurora Cabins har uppvärmt panoramaglastak, och glasigloosviterna Kammi och Komsio har 360°-utsikt.',
        },
        {
          name: 'Santa’s Igloos Arctic Circle',
          body: 'I Jultomtens by, 5 km från flygplatsen: 71 glasigloor med uppvärmt glastak.',
        },
      ],
      outro:
        'Det enda du behöver väga in är ljusföroreningarna från staden. Anläggningarna runt Rovaniemi ligger en bit från centrum, men vill du ha en mörkare himmel ska du åka längre norrut.',
      ctaLabel: 'Sök boende i Rovaniemi',
      guideLinks: [{ to: '/destinations/rovaniemi', label: 'Guide till Rovaniemi' }],
    },
    north: {
      eyebrow: 'Om mörk himmel är viktigast',
      title: 'Saariselkä, Ivalo och Inari: åk norrut',
      intro:
        'Ivalo flygplats (IVL) ligger 25 km från Saariselkä och 11 km från Ivalo centrum. Inari ligger längre norrut: Wilderness Hotels anger cirka 45 minuter från flygplatsen till sina hotell i Inari och Nellim. Dagsljussiffrorna i vår guide månad för månad gäller Rovaniemi (66,5° N), och vintern i Saariselkä och Inari är ännu mörkare. Är norrskenet huvudskälet till resan är det därför du ska åka norrut.',
      properties: [
        {
          name: 'Kakslauttanen Arctic Resort',
          body: 'Anläggningen ligger 10 km söder om byn Saariselkä och 35 km (cirka 30 minuter) från Ivalo flygplats. Glasigloor för upp till 3 eller 5 gäster, och Kelo-Glass Igloo, där en timmerstuga är ihopbyggd med en glasigloo. I ett av anläggningens prisalternativ för vintern ingår frukost och middag.',
        },
        {
          name: 'Star Arctic Hotel',
          body: 'På toppen av fjället Kaunispää i Saariselkä. Aurora Glass Cabin är 20 m², rymmer två vuxna och ett barn upp till 11 år och har ett tredelat glastak rakt ovanför sängen.',
        },
        {
          name: 'Wilderness Hotel Muotka',
          body: 'Nära Saariselkä, cirka 45 minuter från Ivalo flygplats. Aurora Cabins är 30 m², rymmer upp till fyra personer och har uppvärmt glastak.',
        },
        {
          name: 'Aurora Village Ivalo',
          body: 'I Ivalo, 15 minuter från flygplatsen. Aurora Cabins på 28 m² med glastak, och norrskensaviseringar via en app.',
        },
        {
          name: 'Wilderness Hotel Nellim och Wilderness Hotel Inari',
          body: 'Båda ligger vid Inarisjöns strand, cirka 45 minuter från Ivalo flygplats. Wilderness Hotel Inari ligger fem minuter från Inari by; Nellim är en egen by. Båda har Aurora Cabins med uppvärmt glastak.',
        },
      ],
      ctaLabel: 'Sök boende i Saariselkä',
      guideLinks: [
        { to: '/destinations/saariselka', label: 'Guide till Saariselkä' },
        { to: '/destinations/inari', label: 'Guide till Inari' },
      ],
    },
    levi: {
      eyebrow: 'Om du också vill åka skidor',
      title: 'Levi: backarna på dagen, glastaket på natten',
      intro:
        'Kittilä flygplats (KTT) ligger 15 km från Levi. Välj Levi när skidåkningen är huvudsaken och igloon är guldkanten på slutet.',
      properties: [
        {
          name: 'Golden Crown Levin Iglut',
          body: 'Glasigloor 10 km från Levi by, 340 m över havet och 15 minuter från Kittilä flygplats. Tre rumsklasser: Superior, Prime Superior och Suite. Igloosäsongen 2026/27 pågår från den 1 september till den 13 april; i september och oktober har anläggningen bara öppet tisdag till lördag.',
        },
        {
          name: 'Northern Lights Ranch',
          body: 'I Köngäs, 15 km från Levi och 30 km från Kittilä flygplats. Sky View Cabins är stugor i igloostil med uppvärmt glastak, i sex utföranden.',
        },
      ],
      outro:
        'En natt i igloo är mer en guldkant än en bas för hela veckan, så det är sällan värt att sova i en varje natt. Bo i byn eller i en stuga nära backarna och lägg till en eller två igloonätter på slutet: skidor på dagen, sista natten under glas.',
      ctaLabel: 'Sök boende i Levi',
      guideLinks: [{ to: '/destinations/levi', label: 'Guide till Levi' }],
    },
  },

  questionsEyebrow: 'Så väljer du',
  questionsH2: 'Vilket område: tre frågor',
  questionsIntro: 'Med de tre områdena framför dig handlar valet om tre frågor.',
  questions: [
    {
      title: 'Hur många nätter har du?',
      body: 'Har du tre nätter eller färre, börja med Rovaniemi: transfertiderna är kortast, så mindre av resan går åt till att ta sig fram. Med fyra nätter eller fler blir det realistiskt att flyga till Ivalo och åka norrut till Saariselkä eller Inari.',
    },
    {
      title: 'Handlar resan om norrsken eller om skidåkning?',
      body: 'Är norrskenet viktigast, åk norrut: vintern i Saariselkä och Inari är mörkare än i Rovaniemi. Är skidåkningen viktigast, välj Levi. Vill du ha båda, kombinera en skidvecka i Levi med en natt eller två på Golden Crown Levin Iglut, eller åk norrut i mars när dagarna är längre.',
    },
    {
      title: 'Vad ska budgeten gå till?',
      body: 'Samma pengar ger olika resor beroende på hur du fördelar dem: varje natt i en billigare igloo, eller vanliga rum och en natt i en bättre. Jämför totalpriset med måltider och transfer, inte priset per natt. Kakslauttanen säljer till exempel ett vinterpris med frukost och middag, så kolla vad varje prisalternativ omfattar.',
    },
  ],

  cabinCombo: {
    eyebrow: 'En enkel plan',
    h2: 'En eller två nätter i igloo och en stuga resten av veckan',
    body: 'En natt i igloo fungerar bättre som guldkant än som bas för en hel vecka. Ett sätt att planera Lapplandsresan är en eller två nätter i igloo och resten av veckan i en hyrstuga i samma område: hela sällskapet får plats, och du kan ha egen bastu och eget kök hela veckan. Sajten listar stugorna i varje område med avståndet till närmaste by.',
    linkLabel: 'Stugor i finska Lappland per område',
  },

  accessEyebrow: 'Resan dit',
  accessH2: 'Så tar du dig dit: flyg, nattåg och transfer',
  access: [
    [
      'Iglooanläggningarna på den här sidan nås via tre flygplatser: Rovaniemi (RVN), Kittilä (KTT) för Levi och Ivalo (IVL) för Saariselkä och Inari. Rovaniemi har flyg från Helsingfors året runt. På vintern har alla tre flygplatserna dessutom direktflyg från flera europeiska städer, och linjerna ändras från år till år, så kolla vad som gäller från din egen flygplats.',
    ],
    [
      'Transfertiderna till varje anläggning finns i områdesavsnitten ovan. Som riktmärke ligger RVN 10 km från Rovaniemi centrum, KTT 15 km från Levi och IVL 25 km från Saariselkä.',
    ],
    [
      'Vill du inte flyga går VR:s nattåg från Helsingfors till Rovaniemi, och du kan ta med bilen. Från Rovaniemi till Saariselkä är det ytterligare ungefär fyra timmar med buss, så till anläggningarna i norr går det snabbare att flyga till Ivalo. En del anläggningar säljer flygplatstransfer, antingen i ett paket eller som tillval; övriga alternativ finns i ',
      { to: '/transport', label: 'transportguiden' },
      '.',
    ],
  ],

  itinerariesEyebrow: 'Planering',
  itinerariesH2: 'Exempelresor: var igloonätterna passar in',
  itinerariesIntro:
    'Lägg igloonätterna i resans andra halva, av två skäl: första kvällen är du trött efter resan och orkar mer sällan vara uppe för norrskenet, och de senare nätterna blir en reserv om de första är molniga.',
  itineraries: [
    {
      title: '3 nätter i Rovaniemi',
      body: 'Första natten i stan eller nära Jultomtens by, med museet Arktikum och en safari. Andra och tredje natten i en glasigloo utanför stan, med sista kvällen sparad för norrskenet.',
    },
    {
      title: '4 nätter i Saariselkä',
      body: 'Första och andra natten på ett hotell i byn, med snöskovandring i Urho Kekkonens nationalpark och en huskysafari, båda med start i byn. Tredje och fjärde natten i en igloo.',
    },
    {
      title: '5 nätter i Levi',
      body: 'Tre skiddagar från ett hotell i byn eller en stuga nära backarna, sedan en eller två avslutande nätter på Golden Crown Levin Iglut. Det är 10 km dit, så det räcker med taxi och du behöver ingen hyrbil.',
    },
  ],

  inclusionsEyebrow: 'Samma natt, olika pris',
  inclusionsH2: 'Vad som ingår i priset: middag, transfer, bastu',
  inclusionsBody: [
    'Exempel som vi kunde bekräfta på anläggningarnas egna webbplatser: Kakslauttanen säljer ett vinterpris med frukost och middag. På Kakslauttanen ingår privat flygplatstransfer bara i priset för Luxury Kelo-Glass Igloo, och i Wilderness Hotel Muotkas paket Aurora Adventure Break på tre nätter ingår transfer från Ivalo flygplats. I snörummen på Arctic SnowHotel ingår sovsäckar gjorda för extrem kyla.',
    'Vad som ingår beror på prisalternativet, inte bara på anläggningen. Tre saker är värda att kolla innan du bokar:',
  ],
  inclusions: [
    {
      title: 'Middag',
      body: 'Kan du gå till restauranger i en by, eller är anläggningens egen restaurang det enda alternativet? Är den det, väger ett pris med middag tyngre.',
    },
    {
      title: 'Flygplatstransfer',
      body: 'Ingår den, kostar den extra eller ordnar du den själv? Kollektivtrafiken är gles i Ivalo och Kittilä, så det påverkar totalpriset.',
    },
    {
      title: 'Bastu',
      body: 'Gemensam bastu eller egen bastu i rummet eller stugan? Bastu är vanligt i finska boenden, men en egen bastu gör vistelsen till något annat.',
    },
  ],
  inclusionsNote:
    'Vi ställer medvetet inte upp de här tre i en fast tabell: de ändras med varje prisalternativ, och en fast tabell skulle bli inaktuell snabbare än anläggningarnas egna sidor. Bekräfta alltid på anläggningens bokningssida.',

  bookingEyebrow: 'Timing',
  bookingH2: 'När du ska boka: 8–12 månader i förväg inför toppveckorna',
  bookingIntro:
    'Inför toppveckorna bokas Kakslauttanen och Levin Iglut 8–12 månader i förväg. Redan i november har igloorna för följande vinters toppveckor börjat fyllas, så urvalet krymper långt före årsskiftet. Utifrån vår guide månad för månad:',
  bookingRows: [
    { period: 'Julveckan', body: 'Cirka 12 månader i förväg.' },
    { period: 'Nyår', body: 'Cirka 10 månader i förväg.' },
    { period: 'Mitten av februari', body: 'Skollov i Europa. Cirka 6–8 månader i förväg.' },
    { period: 'Mars', body: '4–6 månader i förväg. En favoritmånad bland återkommande besökare: mörka nätter och längre dagar på samma gång.' },
    { period: 'September–oktober', body: 'Det finns fortfarande lediga rum, och det är säsongens bästa balans mellan norrsken och pris.' },
  ],
  bookingOutro: [
    'Hela bilden av dagsljus, norrsken, snö och bokning månad för månad finns i ',
    { to: '/when-to-go', label: 'guiden om när du ska åka' },
    '. Börjar du leta efter en glasigloo för december två eller tre månader före resan finns det väldigt lite kvar. Att flytta resan till mars hjälper oftast mer än att nöja sig med en annan anläggning.',
  ],

  cloudyEyebrow: 'Ärligt talat',
  cloudyH2: 'Och om det är molnigt?',
  cloudyIntro:
    'Norrsken syns bara en klar natt, och en glasigloo kan inte sälja dig vädret. Ingen anläggning har norrskenet med i priset. Det finns tre praktiska saker du kan göra.',
  cloudy: [
    {
      title: 'Boka mer än en natt',
      body: 'En natt är ett lotteri; två eller tre förbättrar oddsen. Lägg igloonätterna sent i resan, så får du en ny chans om de tidigare nätterna var molniga.',
    },
    {
      title: 'Ta hjälp av norrskenslarm',
      body: 'En del anläggningar meddelar när norrskenet syns: Aurora Village Ivalo via en app, och Arctic SnowHotel listar ett norrskenslarm i sina glasigloor. Kolla före bokningen om din anläggning har något sådant. Är dina resdatum flexibla är det bra att veta att norrskenet brukar vara mer aktivt kring dagjämningarna, så mars är en bra månad.',
    },
    {
      title: 'Planera den molniga kvällen i förväg',
      body: 'Bastu, middag på anläggningen, en promenad ute: en plan som fungerar under moln gör att natten inte känns bortkastad.',
    },
  ],
  cloudyOutro: [
    'Även en molnig natt har du en varm säng under glas och, på vintern, träd som snön lyser upp runt omkring dig. Hur det känns beror på vad du väntade dig. När chansen till norrsken är störst, och hur stor den är, läser du om i ',
    { href: 'https://laplandvibes.com/sv/northern-lights/', label: 'norrskensguiden' },
    ' på LaplandVibes.',
  ],

  ctaH2: 'Välj område, sedan månad',
  ctaBody:
    'När du vet vilken typ och vilket område du vill ha återstår bara månaden. Kolla dagsljus, norrsken och bokningsläge månad för månad, och lägg sedan in dina resdatum i anläggningens bokningskalender.',
  ctaPrimary: 'När du ska åka',
  ctaSecondary: 'Boendetyper',
  checkedNote:
    'Uppgifterna om anläggningarna kontrollerades på varje anläggnings egen webbplats den 18 oktober 2026. Säsonger, rum och vad ett pris inkluderar ändras: bekräfta på anläggningens webbplats och bokningssida.',
}

export default sv
