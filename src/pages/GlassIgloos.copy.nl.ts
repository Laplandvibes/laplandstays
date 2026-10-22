import type { GlassIgloosCopy } from './GlassIgloos.copy.types'

/**
 * Nederlandse pagina over glazen iglo’s, /nl/glass-igloos. Vertaald uit GlassIgloos.copy.en.ts op 22.10.2026.
 * Gemeten vraag (OpenSEO, Nederland, 17.9. + 22.10.2026): glazen iglo lapland 170/maand, iglo hotel lapland 170,
 * glazen iglo 90, iglo lapland 90, iglo hotel finland 90, iglo rovaniemi 70, kakslauttanen 140. Titel en h1 openen
 * met "glazen iglo’s" + Lapland; "iglohotels" staat in de description.
 *
 * Aanspreekvorm u (netwerkstandaard 30.8.2026); een algemene "you" wordt "wie …", passief of zonder voornaamwoord
 * (08-natiivikaannos regel 21). Zelfde feiten als EN: geen getal dat in EN niet staat (numeroportti), geen
 * opgeslagen prijzen. De knoppen openen voor nl Trip.com, dus tableNote noemt Trip.com.
 */
const nl: GlassIgloosCopy = {
  seo: {
    title: 'Glazen iglo’s in Lapland: 11 resorts in Finland vergeleken',
    description:
      'Glazen iglo’s en iglohotels in Fins Lapland vergeleken: 11 resorts in Rovaniemi, Saariselkä, Inari en Levi, met luchthaven, kamertype en wanneer u moet boeken.',
  },
  breadcrumbHome: 'Home',
  breadcrumbPage: 'Glazen iglo’s in Lapland',
  keywords: ['glazen iglo lapland', 'iglo hotel lapland', 'glazen iglo', 'iglo lapland', 'iglo hotel finland', 'iglo rovaniemi', 'kakslauttanen'],
  adBadge: 'Bevat advertentielinks',
  h1: 'Glazen iglo’s in Fins Lapland',
  lead:
    'Een glazen iglo in Fins Lapland kan een kleine accommodatie voor twee of drie gasten zijn, of een blokhut die met een glazen iglo verbonden is. De naam is dezelfde, maar het gebouw, hoe groot het stuk hemel boven het bed is en wat er in de prijs zit, verschillen. Deze pagina zet 11 resorts op een rij naar gebied, dichtstbijzijnde luchthaven en kamertype, en helpt u een gebied te kiezen dat bij uw reis past.',
  heroAlt: 'Glazen iglo’s in een besneeuwd bos bij Kakslauttanen Arctic Resort in Saariselkä, met twee mensen die over het pad lopen',

  typesEyebrow: 'Eerst de soorten',
  typesH2: 'Wat geldt als een glazen iglo',
  typesIntro:
    'In Lapland worden drie verschillende dingen als “iglo” verkocht. Het verschil in comfort zit vooral in het type en de grootte: een kleine iglo voor twee of drie gasten, of een hut voor het hele gezin.',
  typeCards: [
    {
      title: 'Vrijstaande glazen iglo',
      tagline: 'Een kleine koepel of hut met een dak helemaal van glas',
      body: 'Een verwarmde accommodatie die los in de sneeuw staat, met glas boven het bed en vaak ook in de wanden. Kakslauttanen Arctic Resort in Saariselkä en Golden Crown Levin Iglut bij Levi zijn van dit type. Wie in bed ligt, ziet de hemel zonder op te staan.',
      forWho: 'Ideaal voor: stellen op noorderlichtreis en iedereen die vanuit bed wil fotograferen.',
    },
    {
      title: 'Hut of kamer met glazen dak',
      tagline: 'Een hut of hotelkamer met een dak van glas',
      body: 'Een gewone hut of hotelkamer waarvan een deel van het dak van glas is. Wilderness Hotels noemen hun hutten Aurora Cabins en geven ze een verwarmd glazen dak, en Star Arctic Hotel op de fjäll Kaunispää heeft een glazen dak van drie panelen boven het bed. Meestal is een kleiner deel van de kamer van glas, waardoor warmte, duisternis en privacy makkelijker te regelen kunnen zijn.',
      forWho: 'Ideaal voor: reizigers voor wie comfort voorop staat, en langere verblijven.',
    },
    {
      title: 'Sneeuwiglo (sneeuwhotel)',
      tagline: 'Een soortgelijke naam, een ander product',
      body: 'Een kamer van sneeuw en ijs die elke winter opnieuw wordt gebouwd en waar de temperatuur tussen 0 en −5 °C blijft. Het sneeuwhotel van Arctic SnowHotel & Glass Igloos bij Rovaniemi gaat elk jaar op 15 december open, stelt slaapzakken voor extreme kou ter beschikking en raadt een overnachting af voor kinderen onder de 5 jaar. Een glazen iglo is een warme kamer met uitzicht op de hemel; hier is de koude nacht zelf de belevenis.',
      forWho: 'Ideaal voor: één nacht avontuur. Voor de meeste mensen is één nacht genoeg.',
    },
  ],
  typesNote: [
    'Arctic SnowHotel heeft glazen iglo’s en het sneeuwhotel op hetzelfde terrein, zodat u beide kunt proberen. Alle soorten accommodatie in Lapland vindt u in de ',
    { to: '/property-types', label: 'gids over accommodatietypes' },
    ' op deze site en in het LaplandVibes-artikel ',
    { href: 'https://laplandvibes.com/nl/blog/lapland-glass-cabin-categories/', label: 'Glazen hutten in Lapland: wat is wat' },
    '.',
  ],
  kidsNote:
    'Reist u met kinderen, kijk dan vooral goed naar het sneeuwhotel: Arctic SnowHotel raadt een nacht in de sneeuwkamers af voor kinderen onder de 5 jaar. Glazen iglo’s zijn verwarmde kamers, maar de leeftijdsregels en of een kind een bed mag delen verschillen per resort, dus vraag ernaar bij het boeken.',

  seasonEyebrow: 'Seizoen',
  seasonH2: 'Het seizoen van de glazen iglo’s begint met het donker, niet met sneeuw',
  seasonBody: [
    'Het seizoen van de glazen iglo’s volgt de donkere nachten, niet de sneeuw. In de maandgids van deze site loopt het noorderlichtseizoen van september tot april, en sommige resorts stemmen hun opening daarop af: Levin Iglut en de glazen iglo’s van Arctic SnowHotel gaan allebei op 1 september open. Alleen het sneeuwhotel wacht tot 15 december.',
    'Op sneeuw hoeft u niet te wachten. In september en oktober vallen de herfstkleuren en de eerste noorderlichtnachten samen, en er is dan nog plaats. Van juni tot half juli gaat de zon niet onder en is het noorderlicht helemaal niet te zien. Onder een glazen dak ziet u ’s zomers in plaats daarvan de middernachtzon. Dat is een belevenis op zich, maar waarschijnlijk niet waarvoor u gekomen bent.',
  ],

  tableH2: 'De resorts: gebied, luchthaven en kamertype',
  tableIntro:
    'De tabel bevat de 11 resorts waarnaar we via onze boekingspartner verwijzen; in de secties hieronder staan ze per gebied.',
  tableHeaders: { name: 'Resort', area: 'Gebied', airport: 'Dichtstbijzijnde luchthaven', feature: 'Kamers', book: 'Boeken' },
  bookLabel: 'Beschikbaarheid bekijken',
  rows: {
    kakslauttanen: {
      name: 'Kakslauttanen Arctic Resort',
      area: 'Saariselkä, 10 km ten zuiden van het dorp',
      airport: 'Ivalo (IVL), 35 km, ongeveer 30 min',
      feature: 'Glazen iglo’s voor maximaal 3 of 5 gasten, en Kelo-Glass Igloos: een blokhut die met een glazen iglo verbonden is',
    },
    starArctic: {
      name: 'Star Arctic Hotel',
      area: 'Saariselkä, boven op de fjäll Kaunispää',
      airport: 'Ivalo (IVL)',
      feature: 'Aurora Glass Cabins van 20 m² met een glazen dak van drie panelen boven het bed',
    },
    muotka: {
      name: 'Wilderness Hotel Muotka',
      area: 'Bij Saariselkä',
      airport: 'Ivalo (IVL), ongeveer 45 min',
      feature: 'Aurora Cabins van 30 m² voor maximaal 4 personen, met verwarmd glazen dak',
    },
    auroraVillage: {
      name: 'Aurora Village Ivalo',
      area: 'Ivalo',
      airport: 'Ivalo (IVL), 15 min',
      feature: 'Aurora Cabins van 28 m² met glazen dak, noorderlichtalarm via een app',
    },
    nellim: {
      name: 'Wilderness Hotel Nellim',
      area: 'Nellim, aan de oever van het Inarimeer',
      airport: 'Ivalo (IVL), ongeveer 45 min',
      feature: 'Aurora Cabins met verwarmd glazen dak, en villa’s aan het meer',
    },
    wildernessInari: {
      name: 'Wilderness Hotel Inari',
      area: 'Inarimeer, 5 min van het dorp Inari',
      airport: 'Ivalo (IVL), ongeveer 45 min',
      feature: 'Aurora Cabins van 29 m² voor maximaal 4 personen, met verwarmd glazen dak',
    },
    arcticSnowHotel: {
      name: 'Arctic SnowHotel & Glass Igloos',
      area: 'Lehtojärvi, 30 min van het centrum van Rovaniemi',
      airport: 'Rovaniemi (RVN), 40 min',
      feature: 'Verwarmde glazen iglo’s vanaf 1 september, en een sneeuwhotel dat elke winter opnieuw wordt gebouwd (vanaf 15 december, 0 tot −5 °C)',
    },
    apukka: {
      name: 'Apukka Resort',
      area: 'Rovaniemi, 18 km (15 min) van het centrum',
      airport: 'Rovaniemi (RVN), 10 km',
      feature: 'Aurora Cabins met een verwarmd panoramadak van glas, en glazen iglosuites met een uitzicht van 360°',
    },
    santasIgloosArcticCircle: {
      name: 'Santa’s Igloos Arctic Circle',
      area: 'Kerstmandorp, Rovaniemi',
      airport: 'Rovaniemi (RVN), 5 km',
      feature: '71 glazen iglo’s met een verwarmd glazen plafond',
    },
    levinIglut: {
      name: 'Golden Crown Levin Iglut',
      area: 'Levi, 10 km van het dorp, 340 m boven zeeniveau',
      airport: 'Kittilä (KTT), 15 min',
      feature: 'Iglo’s in de klassen Superior, Prime Superior en Suite',
    },
    northernLightsRanch: {
      name: 'Northern Lights Ranch',
      area: 'Köngäs, 15 km van Levi',
      airport: 'Kittilä (KTT), 30 km',
      feature: 'Sky View Cabins: hutten in iglostijl met verwarmd glazen dak, in zes uitvoeringen',
    },
  },
  tableNote:
    'Elke rij opent de eigen pagina van dat resort bij onze boekingspartner Trip.com, met prijzen en beschikbaarheid voor uw reisperiode. De prijzen van iglo’s veranderen sterk van week tot week, dus we vermelden ze hier niet. De afstanden, reistijden en kamergegevens van de resorts komen van de eigen website van elk resort; de afstanden tot de luchthavens komen van Finavia. Alles is gecontroleerd op 18 oktober 2026.',

  areas: {
    rovaniemi: {
      eyebrow: 'Voor een korte reis',
      title: 'Rond Rovaniemi: dicht bij de luchthaven',
      intro:
        'De luchthaven van Rovaniemi (RVN) ligt 10 km van het stadscentrum. Een iglo rond Rovaniemi is de verstandige keuze als uw reis kort is, als u ook het Kerstmandorp wilt zien, of als u zo min mogelijk tijd aan transfers kwijt wilt zijn.',
      properties: [
        {
          name: 'Arctic SnowHotel & Glass Igloos (Lehtojärvi)',
          body: 'Glazen iglo’s vanaf 1 september en een sneeuwhotel vanaf 15 december, op 30 minuten van het stadscentrum en 40 van de luchthaven. Het resort noemt een noorderlichtalarm bij de voorzieningen van zijn glazen iglo’s.',
        },
        {
          name: 'Apukka Resort',
          body: 'Het resort ligt 18 km (15 minuten) van het centrum en 10 km van de luchthaven. De Aurora Cabins hebben een verwarmd panoramadak van glas; de glazen iglosuites Kammi en Komsio bieden een uitzicht van 360°.',
        },
        {
          name: 'Santa’s Igloos Arctic Circle',
          body: 'In het Kerstmandorp, 5 km van de luchthaven: 71 glazen iglo’s met een verwarmd glazen plafond.',
        },
      ],
      outro:
        'Het enige om af te wegen is de lichtvervuiling van de stad. De resorts rond Rovaniemi liggen buiten het centrum, maar wie een donkerdere hemel wil, gaat verder naar het noorden.',
      ctaLabel: 'Accommodatie zoeken in Rovaniemi',
      guideLinks: [{ to: '/destinations/rovaniemi', label: 'Rovaniemi-gids' }],
    },
    north: {
      eyebrow: 'Als een donkere hemel voorop staat',
      title: 'Saariselkä, Ivalo en Inari: naar het noorden',
      intro:
        'De luchthaven van Ivalo (IVL) ligt 25 km van Saariselkä en 11 km van het centrum van Ivalo. Inari ligt verder naar het noorden: volgens Wilderness Hotels is het ongeveer 45 minuten van de luchthaven naar hun hotels in Inari en Nellim. De daglichtcijfers per maand op deze site gelden voor Rovaniemi (66,5° N), en de winter is in Saariselkä en Inari nog donkerder. Komt u vooral voor het noorderlicht, dan is dat de reden om naar het noorden te gaan.',
      properties: [
        {
          name: 'Kakslauttanen Arctic Resort',
          body: 'Het resort ligt 10 km ten zuiden van het dorp Saariselkä en 35 km (ongeveer 30 minuten) van de luchthaven van Ivalo. Glazen iglo’s voor maximaal 3 of 5 gasten, en Kelo-Glass Igloos, waarbij een blokhut met een glazen iglo verbonden is. Een van de wintertarieven is inclusief ontbijt en diner.',
        },
        {
          name: 'Star Arctic Hotel',
          body: 'Boven op de fjäll Kaunispää in Saariselkä. De Aurora Glass Cabin is 20 m², biedt plaats aan twee volwassenen en een kind van 11 jaar of jonger, en heeft een glazen dak van drie panelen recht boven het bed.',
        },
        {
          name: 'Wilderness Hotel Muotka',
          body: 'Bij Saariselkä, ongeveer 45 minuten van de luchthaven van Ivalo. De Aurora Cabins zijn 30 m², bieden plaats aan maximaal vier personen en hebben een verwarmd glazen dak.',
        },
        {
          name: 'Aurora Village Ivalo',
          body: 'In Ivalo, 15 minuten van de luchthaven. Aurora Cabins van 28 m² met glazen dak, en een noorderlichtalarm via een app.',
        },
        {
          name: 'Wilderness Hotel Nellim en Wilderness Hotel Inari',
          body: 'Allebei aan de oever van het Inarimeer, ongeveer 45 minuten van de luchthaven van Ivalo. Wilderness Hotel Inari ligt vijf minuten van het dorp Inari; Nellim is een dorp op zich. Beide hebben Aurora Cabins met een verwarmd glazen dak.',
        },
      ],
      ctaLabel: 'Accommodatie zoeken in Saariselkä',
      guideLinks: [
        { to: '/destinations/saariselka', label: 'Saariselkä-gids' },
        { to: '/destinations/inari', label: 'Inari-gids' },
      ],
    },
    levi: {
      eyebrow: 'Als u ook wilt skiën',
      title: 'Levi: overdag de piste, ’s nachts het glazen dak',
      intro:
        'De luchthaven van Kittilä (KTT) ligt 15 km van Levi. Kies Levi als skiën centraal staat en de iglo de kers op de taart is aan het eind van de reis.',
      properties: [
        {
          name: 'Golden Crown Levin Iglut',
          body: 'Glazen iglo’s 10 km van het dorp Levi, 340 m boven zeeniveau, 15 minuten van de luchthaven van Kittilä. Drie kamerklassen: Superior, Prime Superior en Suite. Het igloseizoen 2026–27 loopt van 1 september tot 13 april; in september en oktober is het resort alleen van dinsdag tot en met zaterdag open.',
        },
        {
          name: 'Northern Lights Ranch',
          body: 'In Köngäs, 15 km van Levi en 30 km van de luchthaven van Kittilä. De Sky View Cabins zijn hutten in iglostijl met een verwarmd glazen dak, in zes uitvoeringen.',
        },
      ],
      outro:
        'Een iglonacht is eerder een traktatie dan een uitvalsbasis voor de hele week, dus het is zelden zinvol om er elke nacht in te slapen. Verblijf in het dorp of in een chalet bij de pistes en voeg aan het eind een of twee iglonachten toe: overdag skiën, de laatste nacht onder glas.',
      ctaLabel: 'Accommodatie zoeken in Levi',
      guideLinks: [{ to: '/destinations/levi', label: 'Levi-gids' }],
    },
  },

  questionsEyebrow: 'Zo kiest u',
  questionsH2: 'Welk gebied: drie vragen',
  questionsIntro: 'Met de drie gebieden op een rij komt de keuze neer op drie vragen.',
  questions: [
    {
      title: 'Hoeveel nachten hebt u?',
      body: 'Met drie nachten of minder begint u bij Rovaniemi: daar zijn de transfers het kortst, dus u bent minder tijd kwijt aan reizen. Met vier nachten of meer wordt het realistisch om naar Ivalo te vliegen en verder naar het noorden te gaan, naar Saariselkä of Inari.',
    },
    {
      title: 'Draait de reis om het noorderlicht of om skiën?',
      body: 'Staat het noorderlicht voorop, ga dan naar het noorden: de winter is in Saariselkä en Inari donkerder dan in Rovaniemi. Staat skiën voorop, kies dan Levi. Wilt u allebei, combineer dan een skiweek in Levi met een of twee nachten bij Golden Crown Levin Iglut, of ga in maart naar het noorden, als de dagen langer zijn.',
    },
    {
      title: 'Waar gaat het budget naartoe?',
      body: 'Met hetzelfde geld maakt u een andere reis, afhankelijk van hoe u het besteedt: elke nacht in een goedkopere iglo, of gewone kamers plus één nacht in een betere. Vergelijk het totaal inclusief maaltijden en transfers, niet de prijs per nacht. Kakslauttanen verkoopt bijvoorbeeld een wintertarief met ontbijt en diner inbegrepen, dus kijk wat elk tarief dekt.',
    },
  ],

  cabinCombo: {
    eyebrow: 'Een eenvoudig plan',
    h2: 'Een of twee iglonachten, en een huisje voor de rest van de week',
    body: 'Een iglonacht werkt beter als traktatie dan als uitvalsbasis voor een hele week. Een manier om Lapland te plannen is een of twee nachten in een iglo en de rest van de week in een huurhuisje in hetzelfde gebied: de hele groep past erin, en u kunt de hele week uw eigen sauna en keuken hebben. Deze site toont de huisjes per gebied, met de afstand tot het dichtstbijzijnde dorp.',
    linkLabel: 'Vakantiehuisjes in Lapland per gebied',
  },

  accessEyebrow: 'Vervoer',
  accessH2: 'Zo komt u er: vluchten, nachttrein en transfers',
  access: [
    [
      'De resorts met glazen iglo’s op deze pagina zijn bereikbaar via drie luchthavens: Rovaniemi (RVN), Kittilä (KTT) voor Levi en Ivalo (IVL) voor Saariselkä en Inari. Rovaniemi heeft het hele jaar vluchten vanuit Helsinki. In de winter krijgen alle drie de luchthavens daarnaast rechtstreekse vluchten uit verschillende Europese steden, en de routes veranderen van jaar tot jaar, dus kijk wat er vanaf uw eigen luchthaven vliegt.',
    ],
    [
      'De transfertijden naar elk resort staan hierboven bij de gebieden. Ter oriëntatie: RVN ligt 10 km van het centrum van Rovaniemi, KTT 15 km van Levi en IVL 25 km van Saariselkä.',
    ],
    [
      'Zonder vliegtuig gaat de nachttrein van de Finse spoorwegen VR van Helsinki naar Rovaniemi, en die kan ook uw auto meenemen. Van Rovaniemi naar Saariselkä is het met de bus nog zo’n vier uur, dus voor de resorts in het noorden is een vlucht naar Ivalo sneller. Sommige resorts verkopen luchthaventransfers, in een pakket of als extra; de andere mogelijkheden staan in de ',
      { to: '/transport', label: 'vervoersgids' },
      '.',
    ],
  ],

  itinerariesEyebrow: 'Planning',
  itinerariesH2: 'Voorbeeldreizen: waar de iglonachten passen',
  itinerariesIntro:
    'Plan de iglonachten in de tweede helft van de reis, om twee redenen: op de eerste avond bent u moe van de reis en blijft u minder snel op voor het noorderlicht, en latere nachten zijn een reserve als de eerste bewolkt zijn.',
  itineraries: [
    {
      title: '3 nachten in Rovaniemi',
      body: 'De eerste nacht in de stad of bij het Kerstmandorp, met het museum Arktikum en een safari. De tweede en derde nacht in een glazen iglo buiten de stad, met de laatste avond vrijgehouden voor het noorderlicht.',
    },
    {
      title: '4 nachten in Saariselkä',
      body: 'De eerste en tweede nacht in een hotel in het dorp, met sneeuwschoenwandelen in het nationaal park Urho Kekkonen en een huskysafari, allebei vanuit het dorp. De derde en vierde nacht in een iglo.',
    },
    {
      title: '5 nachten in Levi',
      body: 'Drie skidagen vanuit een hotel in het dorp of een chalet bij de pistes, daarna de laatste een of twee nachten bij Golden Crown Levin Iglut. De rit erheen is 10 km, dus een taxi volstaat en een huurauto hebt u niet nodig.',
    },
  ],

  inclusionsEyebrow: 'Zelfde nacht, ander tarief',
  inclusionsH2: 'Wat er in het tarief zit: diner, transfer, sauna',
  inclusionsBody: [
    'Voorbeelden die we op de eigen websites van de resorts konden bevestigen: Kakslauttanen verkoopt een wintertarief met ontbijt en diner inbegrepen. Bij Kakslauttanen zitten privé-luchthaventransfers alleen in de prijs van de Luxury Kelo-Glass Igloo, en de Aurora Adventure Break van drie nachten bij Wilderness Hotel Muotka is inclusief transfers vanaf de luchthaven van Ivalo. In de sneeuwkamers van Arctic SnowHotel horen slaapzakken voor extreme kou bij de kamer.',
    'Wat er in de prijs zit, hangt af van het gekozen tarief, niet alleen van het resort. Drie dingen kunt u het best nagaan voordat u boekt:',
  ],
  inclusions: [
    {
      title: 'Diner',
      body: 'Kunt u in een dorp naar restaurants lopen, of is het eigen restaurant van het resort de enige mogelijkheid? Is dat de enige mogelijkheid, dan weegt een tarief met diner zwaarder.',
    },
    {
      title: 'Luchthaventransfer',
      body: 'Inbegrepen, tegen betaling of zelf te regelen? Het openbaar vervoer is in Ivalo en Kittilä beperkt, dus dit verandert het totaal.',
    },
    {
      title: 'Sauna',
      body: 'Een gedeelde sauna, of een eigen sauna in uw kamer of hut? Sauna’s zijn gangbaar in Finse accommodaties, maar een eigen sauna verandert het verblijf.',
    },
  ],
  inclusionsNote:
    'Deze drie zetten we bewust niet in een vaste tabel: ze verschillen per tarief, en een vaste tabel zou eerder verouderd zijn dan de eigen pagina’s van de resorts. Controleer het altijd op de boekingspagina van het resort.',

  bookingEyebrow: 'Timing',
  bookingH2: 'Wanneer boeken: 8–12 maanden vooruit voor de piekweken',
  bookingIntro:
    'Voor de piekweken worden Kakslauttanen en Levin Iglut 8–12 maanden vooruit geboekt. In november beginnen de iglo’s voor de piekweken van de winter daarna al vol te raken, dus de keuze wordt al lang voor de jaarwisseling kleiner. Op basis van de maandgids van deze site:',
  bookingRows: [
    { period: 'Kerstweek', body: 'Ongeveer 12 maanden vooruit.' },
    { period: 'Oud en Nieuw', body: 'Ongeveer 10 maanden vooruit.' },
    { period: 'Half februari', body: 'Europese schoolvakanties. Ongeveer 6–8 maanden vooruit.' },
    { period: 'Maart', body: '4–6 maanden vooruit. Een favoriete maand van terugkerende bezoekers: donkere nachten en langere dagen tegelijk.' },
    { period: 'September–oktober', body: 'Er zijn nog kamers vrij, en de verhouding tussen noorderlicht en prijs is de beste van het seizoen.' },
  ],
  bookingOutro: [
    'Daglicht, noorderlicht, sneeuw en het boeken per maand vindt u op een rij in de ',
    { to: '/when-to-go', label: 'gids over de beste reistijd' },
    '. Wie twee of drie maanden voor vertrek een glazen iglo voor december zoekt, vindt nog maar heel weinig. De reis verschuiven naar maart helpt dan meestal meer dan genoegen nemen met een ander resort.',
  ],

  cloudyEyebrow: 'Eerlijk gezegd',
  cloudyH2: 'En als het bewolkt is?',
  cloudyIntro:
    'Noorderlicht is alleen in een heldere nacht te zien, en het weer is ook bij een glazen iglo niet te koop. Bij geen enkel resort is het noorderlicht bij de prijs inbegrepen. Er zijn drie praktische dingen die u kunt doen.',
  cloudy: [
    {
      title: 'Boek meer dan één nacht',
      body: 'Eén nacht is een gok; twee of drie vergroten uw kansen. Plan de iglonachten laat in de reis, dan hebt u nog een kans als de eerdere nachten bewolkt waren.',
    },
    {
      title: 'Gebruik een noorderlichtalarm',
      body: 'Sommige resorts sturen een melding als het noorderlicht verschijnt: Aurora Village Ivalo via een app, en Arctic SnowHotel noemt een noorderlichtalarm in zijn glazen iglo’s. Controleer voor het boeken of uw resort er een heeft. Is uw reisperiode flexibel, dan helpt het dat het noorderlicht rond de equinoxen doorgaans actiever is; maart is dus een goede maand.',
    },
    {
      title: 'Plan de bewolkte avond vooraf',
      body: 'Een sauna, een diner in het resort, een wandeling buiten: één plan dat ook onder een wolkendek werkt, voorkomt dat de nacht als verspild aanvoelt.',
    },
  ],
  cloudyOutro: [
    'Ook in een bewolkte nacht ligt u in een warm bed onder glas, in de winter met besneeuwde bomen om u heen. Hoe dat voelt, hangt af van wat u verwachtte. Wanneer het noorderlicht het meest waarschijnlijk is, en hoe groot de kans is, leest u in de ',
    { href: 'https://laplandvibes.com/nl/northern-lights/', label: 'noorderlichtgids van LaplandVibes' },
    '.',
  ],

  ctaH2: 'Kies het gebied, dan de maand',
  ctaBody:
    'Als u het type en het gebied kent, is de maand de enige keuze die overblijft. Bekijk per maand het daglicht, het noorderlicht en wanneer u moet boeken, en kies dan uw reisdata in de boekingskalender van het resort.',
  ctaPrimary: 'Wanneer te gaan',
  ctaSecondary: 'Accommodatietypes',
  checkedNote:
    'De gegevens van de resorts zijn op 18 oktober 2026 gecontroleerd op hun eigen websites. Seizoenen, kamers en wat een tarief omvat veranderen: controleer het op de website en de boekingspagina van het resort.',
}

export default nl
