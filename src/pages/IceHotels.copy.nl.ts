import type { IceHotelsCopy } from './IceHotels.copy.types'

/**
 * Nederlandse pagina over ijs- en sneeuwhotels, /nl/ice-hotels. Vertaald uit IceHotels.copy.en.ts op 22.10.2026.
 * Gemeten vraag (OpenSEO, Nederland, 22.10.2026): ijshotel lapland 590/maand (SERP gemengd: SnowVillage en
 * Jukkasjärvi), icehotel 590, ijshotel 390, ijshotel zweden 260, arctic snowhotel 210, snow village lapland 170,
 * ijshotel finland 90, ijshotel rovaniemi 50. Titel en breadcrumb openen met "IJshotels" + "Fins Lapland", omdat
 * "ijshotel lapland" alleen ook Zweden betekent; de description noemt "ijshotels en sneeuwhotels".
 *
 * Aanspreekvorm u (netwerkstandaard 30.8.2026, zoals GlassIgloos.copy.nl.ts); een algemene "you" wordt "wie …",
 * passief of zonder voornaamwoord. Zelfde feiten als EN: geen getal dat in EN niet staat (numeroportti), geen
 * prijzen. De knop opent voor nl Trip.com, dus arctic.ctaNote noemt Trip.com. Termen zoals op de pagina over
 * glazen iglo’s: sneeuwhotel, sneeuwiglo, slaapzakken voor extreme kou, Kerstmandorp, transfers.
 */
const nl: IceHotelsCopy = {
  seo: {
    title: 'IJshotels in Fins Lapland: overnachten in de sneeuw',
    description:
      'IJshotels en sneeuwhotels in Fins Lapland, winter 2026–27: Arctic SnowHotel bij Rovaniemi, SnowVillage bij Ylläs en sneeuwiglo’s bij Pyhä, plus dagbezoeken.',
  },
  breadcrumbHome: 'Home',
  breadcrumbPage: 'IJshotels in Fins Lapland',
  keywords: ['ijshotel lapland', 'ijshotel', 'ijshotel finland', 'arctic snowhotel', 'snow village lapland', 'ijshotel rovaniemi', 'sneeuwhotel lapland'],
  adBadge: 'Bevat advertentielinks',
  h1: 'IJs- en sneeuwhotels in Fins Lapland',
  lead:
    'In de winter van 2026–27 zijn er in Fins Lapland drie plekken waar u in een kamer van sneeuw kunt slapen: Arctic SnowHotel bij Rovaniemi, SnowVillage bij Ylläs en de sneeuwiglo’s van Lucky Ranch bij Pyhä. Het bekendste ijshotel, het ICEHOTEL, staat in Zweden. Op deze pagina leest u wat er bij elke overnachting hoort en waar u een kijkje kunt nemen zonder er te slapen.',
  heroAlt: 'Een sneeuwsuite in Arctic SnowHotel bij Rovaniemi: een bed met vachten tussen ijssculpturen en een vogel met gespreide vleugels die in de sneeuwwand is uitgesneden',

  staysEyebrow: 'Winter 2026–27',
  staysH2: 'Waar u in de sneeuw kunt slapen',
  staysIntro:
    'Alle drie worden elke winter opnieuw gebouwd, dus de kamers, de thema’s en de openingsdata verschillen van jaar tot jaar. Hieronder leest u wat elke plek op de eigen website over het komende seizoen vermeldt.',
  arctic: {
    name: 'Arctic SnowHotel & Glass Igloos',
    place: 'Lehtoahontie 27, Rovaniemi: ongeveer 26 km (30 min) van het stadscentrum en het Kerstmandorp, 40 min van de luchthaven',
    facts: [
      'Het sneeuwhotel gaat op 15 december 2026 open en het seizoen loopt tot 31 maart.',
      'Binnen in het sneeuw- en ijshotel blijft de temperatuur tussen 0 en −5 °C.',
      'Bij de overnachting horen slaapzakken voor extreme kou, toegang tot de warme Snowhotel Lounge, een gedeelde Finse sauna en een ontbijtbuffet.',
      'Vanaf 21.00 uur hebt u de sneeuwkamer voor u alleen. Diner en transfers vanuit Rovaniemi zitten in de pakketten van het resort, niet in de kamerprijs.',
      'Voor kinderen onder de 5 jaar wordt een overnachting afgeraden.',
    ],
    glassNote: [
      'Hetzelfde resort heeft ook verwarmde glazen iglo’s, die vanaf 1 september open zijn. Op onze ',
      { to: '/glass-igloos', label: 'pagina over glazen iglo’s' },
      ' worden ze vergeleken met tien andere resorts.',
    ],
    ctaLabel: 'Prijzen en beschikbaarheid',
    ctaNote: 'Opent de eigen pagina van het resort bij onze boekingspartner Trip.com, met prijzen voor uw reisperiode.',
  },
  snowVillage: {
    name: 'Lapland Hotels SnowVillage',
    place: 'Lainio, Kittilä, bij Ylläs',
    facts: [
      'Open van 25 december 2026 tot 4 april 2027, dagelijks 10.00–22.00 uur.',
      'Sinds 2001 elk jaar helemaal opnieuw gebouwd van sneeuw en natuurijs. Het thema voor 2026–27 is nog niet bekendgemaakt.',
      'Overnachten kan alleen in één luxe ijssuite voor twee personen, verkocht als pakket met een rondleiding, een diner in het ijsrestaurant, een kotahut met sauna en hottub, en een ontbijt in een warm restaurant. De suite boekt u per e-mail bij SnowVillage, en de pagina erover beschrijft nog de winter van 2025–26.',
      'Tijdens de openingstijden rijdt er dagelijks een bus vanuit Levi en Ylläs.',
    ],
  },
  luckyRanch: {
    name: 'Sneeuwiglo’s van Lucky Ranch',
    place: 'Het dorp Pyhäjärvi in Pelkosenniemi, ongeveer 10 km van Pyhä',
    facts: [
      'De sneeuwiglo’s worden elk jaar in december opnieuw gebouwd, en binnen is het altijd onder 0 °C.',
      'U slaapt in een gewoon bed met een warme slaapzak en een warmwaterkruik, en een licht ontbijt is inbegrepen.',
      'Naast de iglo’s staat een warm basiskamp, en de toiletten en douches in de saloon van de ranch zijn de hele nacht open voor iglogasten.',
      'De ranch raadt de iglo’s aan voor gezonde volwassenen en kinderen, en verkoopt de overnachtingen via de eigen website.',
    ],
  },

  nightEyebrow: 'Voordat u boekt',
  nightH2: 'Zo is een nacht in de sneeuw',
  night: [
    { title: 'Het blijft onder nul', body: 'Bij Arctic SnowHotel is het in de kamer de hele nacht tussen 0 en −5 °C; bij Lucky Ranch altijd onder 0 °C. Die kou is juist de bedoeling: een verwarmde kamer is een glazen iglo, geen sneeuwhotel.' },
    { title: 'De slaapzak doet het werk', body: 'Arctic SnowHotel stelt slaapzakken voor extreme kou ter beschikking, Lucky Ranch warme slaapzakken en warmwaterkruiken. U hoeft er zelf geen mee te nemen.' },
    { title: 'Een warme ruimte vlakbij', body: 'Arctic SnowHotel heeft de warme Snowhotel Lounge en een sauna, Lucky Ranch een warm basiskamp naast de iglo’s. Wordt het ’s nachts te koud, dan kunt u ergens terecht.' },
    { title: 'Kinderen', body: 'Arctic SnowHotel raadt een nacht in de sneeuwkamers af voor kinderen onder de 5 jaar. Lucky Ranch raadt zijn iglo’s aan voor gezonde volwassenen en kinderen. SnowVillage noemt geen leeftijdsgrens, dus vraag ernaar voordat u boekt.' },
  ],

  visitsEyebrow: 'Zonder te overnachten',
  visitsH2: 'Sneeuw en ijs die u overdag kunt bezoeken',
  visitsIntro:
    'U kunt ook door ruimtes van sneeuw en ijs lopen zonder er te slapen. Arctic SnowHotel en SnowVillage verkopen dagtickets; Snowman World en het SnowCastle of Kemi zijn alleen voor een dagbezoek.',
  visitHeaders: { name: 'Plek', place: 'Waar', season: 'Seizoen', what: 'Wat u ziet' },
  visits: [
    {
      name: 'Arctic SnowHotel',
      place: 'Rovaniemi, 26 km van het centrum',
      season: '15 december – 31 maart, dagelijks 10.00–20.00 uur',
      what: 'Dagticket voor de sneeuw- en ijskunst, de ijskapel, het ijsrestaurant en de ijsbar; een rondleiding van 45 minuten kunt u erbij boeken.',
    },
    {
      name: 'Lapland Hotels SnowVillage',
      place: 'Lainio, Kittilä',
      season: '25 december 2026 – 4 april 2027, dagelijks 10.00–22.00 uur',
      what: 'Sneeuw- en ijskunst, de ijsbar, een ruimte voor bruiloften, een sneeuwsuite, een bioscoop en een ijsglijbaan. Tickets zijn alleen bij de receptie te koop; rondleidingen boekt u vooraf.',
    },
    {
      name: 'Snowman World',
      place: 'Kerstmandorp, 8 km van het centrum van Rovaniemi',
      season: '6 december 2026 – 17 maart 2027',
      what: 'Een sneeuw- en ijspark met activiteiten, eten en drinken. Overnachten kan er niet.',
    },
    {
      name: 'SnowCastle of Kemi',
      place: 'Kemi, 8 km van de luchthaven Kemi-Tornio',
      season: 'Winterpark januari – begin april (data voor 2027 nog niet bekend); SnowExperience het hele jaar',
      what: 'Het sneeuwkasteel zelf wordt al jaren niet meer gebouwd en er is op dit moment geen sneeuwhotel. De overdekte SnowExperience wordt het hele jaar op −5 °C gehouden.',
    },
  ],

  swedenEyebrow: 'Goed om te weten',
  swedenH2: 'Het ICEHOTEL staat in Zweden',
  swedenBody: [
    'Met “ijshotel” wordt vaak het ICEHOTEL in Jukkasjärvi bedoeld, bij Kiruna in Zweeds Lapland. Het winterhotel is open van december tot april, en ICEHOTEL 365 heeft het hele jaar kamers van ijs en sneeuw.',
    'Het ligt niet in Finland en staat daarom niet in het overzicht hierboven. Deze site gaat over Fins Lapland.',
  ],

  nextEyebrow: 'Warmere alternatieven',
  nextH2: 'Als één koude nacht genoeg is',
  next: [
    [
      'Een glazen iglo is een verwarmde kamer met de hemel boven het bed. Op de ',
      { to: '/glass-igloos', label: 'pagina over glazen iglo’s' },
      ' vergelijken we 11 resorts met glazen iglo’s.',
    ],
    [
      'Voor de rest van de week vindt u op de ',
      { to: '/cabins', label: 'pagina’s over vakantiehuisjes' },
      ' huurhuisjes per gebied in Lapland, met de afstand tot het dichtstbijzijnde dorp.',
    ],
  ],

  checkedNote:
    'De gegevens zijn op 22 oktober 2026 gecontroleerd op de eigen website van elke plek. Sneeuwhotels worden elke winter opnieuw gebouwd, dus de data en wat er bij een overnachting hoort kunnen veranderen: controleer het op de eigen pagina van de accommodatie voordat u boekt.',
}

export default nl
