import type { IceHotelsCopy } from './IceHotels.copy.types'

/**
 * Suomenkielinen jää- ja lumihotellisivu, /fi/ice-hotels (22.10.2026). Kirjoitettu suomeksi, ei käännetty.
 * Kysyntä OpenSEO 22.10.2026 (Suomi): kemin lumilinna 2 900/kk, arctic snow hotel 2 400, lumilinna kemi 880,
 * lainio snow village 480, snowhotel rovaniemi 390, jäähotelli 210, lainion lumikylä 170. Kemin Lumilinnaa
 * haetaan paljon, mutta siellä ei ole lumihotellia: sivu sanoo sen suoraan.
 * Faktat kohteiden omilta sivuilta 22.10.2026, samat kuin englanninkielisessä lähteessä.
 * Natiivilukija 23.10.2026: kieli luettu ja korjattu (loki natiivi-fi-CDE-20261023.md).
 */
const fi: IceHotelsCopy = {
  seo: {
    title: 'Jää- ja lumihotellit Lapissa talvella 2026–27',
    description:
      'Missä Lapissa voi nukkua lumessa talvella 2026–27? Arctic SnowHotelissa, Lainion SnowVillagessa ja Pyhän lumi-igluissa. Kemin Lumilinnassa lumihotellia ei ole.',
  },
  breadcrumbHome: 'Etusivu',
  breadcrumbPage: 'Jää- ja lumihotellit Lapissa',
  keywords: ['jäähotelli', 'lumihotelli', 'arctic snowhotel', 'lainio snow village', 'lainion lumikylä', 'snowhotel rovaniemi', 'kemin lumilinna'],
  adBadge: 'Sisältää kumppanilinkkejä',
  h1: 'Jää- ja lumihotellit Lapissa',
  lead:
    'Talvella 2026–27 Suomen Lapissa voi nukkua lumesta rakennetussa huoneessa kolmessa paikassa: Arctic SnowHotelissa Rovaniemellä, Lainion SnowVillagessa Ylläksen lähellä ja Lucky Ranchin lumi-igluissa Pyhän lähistöllä. Tältä sivulta näet, mitä yöhön kuuluu ja missä lumi- ja jäätaidetta voi käydä katsomassa yöpymättä.',
  heroAlt: 'Arctic SnowHotelin lumisviitti Rovaniemen lähellä: turkispeitteinen sänky jääveistosten keskellä ja lumiseinään kaiverrettu siipensä levittänyt lintu',

  staysEyebrow: 'Talvi 2026–27',
  staysH2: 'Voiko lumessa nukkua?',
  staysIntro:
    'Voi, talvella 2026–27 kolmessa paikassa Suomen Lapissa. Kaikki kolme rakennetaan joka talvi uudelleen, joten huoneet, teemat ja päivät vaihtuvat vuosittain. Kokosimme alle, mitä kohteet kertovat tulevasta kaudesta omilla sivuillaan.',
  arctic: {
    name: 'Arctic SnowHotel & Glass Igloos',
    place: 'Lehtoahontie 27, Rovaniemi: noin 26 km (30 min) keskustasta ja Joulupukin Pajakylästä, lentoasemalta 40 min',
    facts: [
      'Lumihotelli avautuu 15.12.2026, ja kausi jatkuu 31.3. asti.',
      'Lumi- ja jäähotellin sisälämpötila pysyy 0 ja −5 asteen välillä.',
      'Yöhön kuuluvat kovaan pakkaseen tarkoitetut makuupussit, pääsy lämpimään Snowhotel Loungeen, yhteissauna ja buffetaamiainen.',
      'Saat lumihuoneen omaan käyttöösi kello 21 alkaen. Illallinen ja kuljetukset Rovaniemeltä sisältyvät kohteen paketteihin, eivät huoneen hintaan.',
      'Yöpymistä ei suositella alle 5-vuotiaille.',
    ],
    glassNote: [
      'Samassa paikassa on myös lämmitettyjä lasi-igluja, jotka ovat auki jo 1.9. alkaen. Lasi-igluja vertaillaan ',
      { to: '/iglumajoitus', label: 'iglumajoitussivulla' },
      '.',
    ],
    ctaLabel: 'Katso hinnat ja vapaat huoneet',
    ctaNote: 'Arctic SnowHotelin sivu aukeaa kumppanimme Sembon palvelussa, jossa näet hinnat ja vapaat huoneet valitsemillesi päiville.',
  },
  snowVillage: {
    name: 'Lapland Hotels SnowVillage',
    place: 'Lainio, Kittilä, Ylläksen lähellä',
    facts: [
      'Auki 25.12.2026–4.4.2027 joka päivä kello 10–22.',
      'Kylä rakennetaan lumesta ja luonnonjäästä joka vuosi alusta asti, ja ensimmäinen rakennettiin vuonna 2001. Talven 2026–27 teemaa ei ole vielä julkaistu.',
      'Yöpyä voi vain yhdessä kahden hengen luksussviitissä. Se myydään pakettina, johon kuuluvat opastettu kierros, illallinen Jääravintolassa, kota saunoineen ja porealtaineen sekä aamiainen lämpimässä ravintolassa. Sviitti varataan sähköpostilla suoraan SnowVillagesta, ja sen esittelysivu kertoo yhä talvesta 2025–26.',
      'Leviltä ja Ylläkseltä kulkee bussi päivittäin aukioloaikoina.',
    ],
  },
  luckyRanch: {
    name: 'Lucky Ranchin lumi-iglut',
    place: 'Pyhäjärven kylä, Pelkosenniemi, noin 10 km Pyhältä',
    facts: [
      'Lumi-iglut rakennetaan uudelleen joka joulukuu, ja niiden sisällä on aina pakkasta.',
      'Iglussa nukutaan tavallisessa sängyssä lämpimän makuupussin ja kuumavesipullon kanssa, ja kevyt aamiainen kuuluu hintaan.',
      'Iglujen vieressä on lämmin tila, ja ranchin saluunan wc ja suihku ovat iglussa yöpyvien käytössä koko yön.',
      'Lucky Ranch suosittelee igluja terveille aikuisille ja lapsille ja myy yöt itse omilla sivuillaan.',
    ],
  },

  nightEyebrow: 'Ennen varausta',
  nightH2: 'Millainen on yö lumessa?',
  night: [
    { title: 'Pakkasta koko yön', body: 'Arctic SnowHotelin huoneessa lämpötila pysyy koko yön 0 ja −5 asteen välillä, ja Lucky Ranchin igluissa on aina pakkasta. Kylmä kuuluu asiaan: lämmitetty huone on lasi-iglu, ei lumihotelli.' },
    { title: 'Makuupussi lämmittää', body: 'Arctic SnowHotelilta saat kovaan pakkaseen tarkoitetun makuupussin ja Lucky Ranchilta lämpimän makuupussin ja kuumavesipullon. Omaa makuupussia ei tarvitse tuoda.' },
    { title: 'Lämmin tila on vieressä', body: 'Arctic SnowHotelissa on lämmin Snowhotel Lounge ja sauna, Lucky Ranchilla lämmin tila iglujen vieressä. Jos yö käy liian kylmäksi, pääset lämpimään.' },
    { title: 'Lapset', body: 'Arctic SnowHotel ei suosittele yötä lumihuoneessa alle 5-vuotiaille. Lucky Ranch suosittelee igluja terveille aikuisille ja lapsille. SnowVillage ei kerro ikärajaa, joten kysy ennen varausta.' },
  ],

  visitsEyebrow: 'Ilman yöpymistä',
  visitsH2: 'Lumi- ja jäätaidetta päiväkäynnillä',
  visitsIntro:
    'Lumesta ja jäästä rakennettuihin tiloihin voi tutustua myös yöpymättä. Arctic SnowHotel ja SnowVillage myyvät päivälippuja. Snowman Worldissa ja Kemin Lumilinnassa ei voi yöpyä lainkaan.',
  visitHeaders: { name: 'Kohde', place: 'Sijainti', season: 'Kausi', what: 'Mitä näet' },
  visits: [
    {
      name: 'Arctic SnowHotel',
      place: 'Rovaniemi, 26 km keskustasta',
      season: '15.12.–31.3., joka päivä kello 10–20',
      what: 'Päivälipulla lumi- ja jäätaide, jääkappeli, Jääravintola ja Jääbaari; 45 minuutin opastetun kierroksen voi valita lisäksi.',
    },
    {
      name: 'Lapland Hotels SnowVillage',
      place: 'Lainio, Kittilä',
      season: '25.12.2026–4.4.2027, joka päivä kello 10–22',
      what: 'Lumi- ja jäätaide, jääbaari, vihkitila, lumisviitti, elokuvateatteri ja jääliukumäki. Liput myydään vain vastaanotossa, ja opastetut kierrokset varataan etukäteen.',
    },
    {
      name: 'Snowman World',
      place: 'Joulupukin Pajakylä, 8 km Rovaniemen keskustasta',
      season: '6.12.2026–17.3.2027',
      what: 'Lumi- ja jääpuisto, jossa on tekemistä, ruokaa ja juomaa. Majoitusta siellä ei ole.',
    },
    {
      name: 'Kemin Lumilinna',
      place: 'Kemi, 8 km Kemi-Tornion lentoasemalta',
      season: 'Talvipuisto tammikuusta huhtikuun alkuun (vuoden 2027 päiviä ei ole julkaistu), SnowExperience ympäri vuoden',
      what: 'Varsinaista lumilinnaa ei ole rakennettu vuosiin, eikä lumihotellia ole tällä hetkellä. Sisätiloissa olevassa SnowExperiencessä on −5 astetta ympäri vuoden.',
    },
  ],

  swedenEyebrow: 'Hyvä tietää',
  swedenH2: 'ICEHOTEL on Ruotsissa',
  swedenBody: [
    'Kun puhutaan ”jäähotellista”, tarkoitetaan usein ICEHOTELia Jukkasjärvellä Kiirunan lähellä Ruotsin Lapissa. Sen talvihotelli on auki joulukuusta huhtikuuhun, ja ICEHOTEL 365:ssä on jäästä ja lumesta tehtyjä huoneita ympäri vuoden.',
    'Se ei ole Suomessa, joten se puuttuu yllä olevasta listasta. Tämä sivusto kertoo Suomen Lapista.',
  ],

  nextEyebrow: 'Lämpimämmät vaihtoehdot',
  nextH2: 'Jos yksi kylmä yö riittää',
  next: [
    [
      'Lasi-iglu on lämmitetty huone, jossa taivas näkyy sängystä. Vertailemme Lapin lasi-igluja ',
      { to: '/iglumajoitus', label: 'iglumajoitussivulla' },
      '.',
    ],
    [
      'Loppuviikoksi löydät vuokramökin ',
      { to: '/cabins', label: 'mökkisivuilta' },
      '. Mökit on jaettu Lapin alueittain, ja jokaisen kohdalla kerrotaan etäisyys lähimpään kylään.',
    ],
  ],

  checkedNote:
    'Tiedot on tarkistettu kunkin kohteen omilta sivuilta 22.10.2026. Lumihotellit rakennetaan joka talvi uudelleen, joten päivät ja yöhön kuuluvat palvelut voivat muuttua: tarkista ne kohteen omalta sivulta ennen varausta.',
}

export default fi
