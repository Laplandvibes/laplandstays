import type { IceHotelsCopy } from './IceHotels.copy.types'

/**
 * Suomenkielinen jää- ja lumihotellisivu, /fi/ice-hotels (22.10.2026). Kirjoitettu suomeksi, ei käännetty.
 * Kysyntä OpenSEO 22.10.2026 (Suomi): kemin lumilinna 2 900/kk, arctic snow hotel 2 400, lumilinna kemi 880,
 * lainio snow village 480, snowhotel rovaniemi 390, jäähotelli 210, lainion lumikylä 170. Kemin Lumilinnaa
 * haetaan paljon, mutta siellä ei ole lumihotellia: sivu sanoo sen suoraan.
 * Faktat kohteiden omilta sivuilta 22.10.2026, samat kuin englanninkielisessä lähteessä.
 */
const fi: IceHotelsCopy = {
  seo: {
    title: 'Jää- ja lumihotellit Lapissa talvella 2026–27',
    description:
      'Missä Lapissa voi nukkua lumessa talvella 2026–27: Arctic SnowHotel Rovaniemellä, Lainion SnowVillage ja Pyhän lumi-iglut. Mukana myös Kemin Lumilinnan tilanne.',
  },
  breadcrumbHome: 'Etusivu',
  breadcrumbPage: 'Jää- ja lumihotellit Lapissa',
  keywords: ['jäähotelli', 'lumihotelli', 'arctic snowhotel', 'lainio snow village', 'lainion lumikylä', 'snowhotel rovaniemi', 'kemin lumilinna'],
  adBadge: 'Sisältää kumppanilinkkejä',
  h1: 'Jää- ja lumihotellit Lapissa',
  lead:
    'Talvella 2026–27 Suomen Lapissa voi nukkua lumesta rakennetussa huoneessa kolmessa paikassa: Arctic SnowHotelissa Rovaniemen lähellä, SnowVillagessa Ylläksen lähellä ja Lucky Ranchin lumi-igluissa Pyhän lähellä. Tältä sivulta näet, mitä yöhön kuuluu ja missä lumi- ja jäätaidetta pääsee katsomaan päiväkäynnillä.',
  heroAlt: 'Arctic SnowHotelin lumisviitti Rovaniemen lähellä: turkispeitteinen sänky jääveistosten keskellä ja lumiseinään kaiverrettu siivet levittänyt lintu',

  staysEyebrow: 'Talvi 2026–27',
  staysH2: 'Missä lumessa voi nukkua',
  staysIntro:
    'Kaikki kolme rakennetaan joka talvi uudelleen, joten huoneet, teemat ja päivät vaihtuvat vuosittain. Alla on se, mitä kohteet itse kertovat tulevasta kaudesta omilla sivuillaan.',
  arctic: {
    name: 'Arctic SnowHotel & Glass Igloos',
    place: 'Lehtoahontie 27, Rovaniemi: noin 26 km (30 min) keskustasta ja Joulupukin Pajakylästä, lentoasemalta 40 min',
    facts: [
      'Lumihotelli avautuu 15.12.2026, ja kausi jatkuu 31.3. asti.',
      'Lumi- ja jäähotellin sisälämpötila pysyy 0 ja −5 asteen välillä.',
      'Yöhön kuuluvat kovaan pakkaseen tehdyt makuupussit, lämmin Snowhotel Lounge, yhteinen suomalainen sauna ja buffetaamiainen.',
      'Lumihuone on omassa käytössä kello 21 alkaen. Illallinen ja kuljetukset Rovaniemeltä kuuluvat kohteen paketteihin, eivät huoneen hintaan.',
      'Yöpymistä ei suositella alle 5-vuotiaille.',
    ],
    glassNote: [
      'Samassa paikassa on myös lämmitettyjä lasi-igluja, jotka avautuvat jo 1.9. Lasi-igluja vertaillaan ',
      { to: '/iglumajoitus', label: 'iglumajoitussivulla' },
      '.',
    ],
    ctaLabel: 'Tarkista päivät',
    ctaNote: 'Avaa kohteen oman sivun varauskumppanimme Sembon palvelussa, hinnat valitsemillesi päiville.',
  },
  snowVillage: {
    name: 'Lapland Hotels SnowVillage',
    place: 'Lainio, Kittilä, Ylläksen lähellä',
    facts: [
      'Auki 25.12.2026–4.4.2027 joka päivä kello 10–22.',
      'Rakennetaan joka vuosi alusta lumesta ja luonnonjäästä, ensimmäisen kerran vuonna 2001. Talven 2026–27 teemaa ei ole vielä julkaistu.',
      'Yöpyä voi vain yhdessä kahden hengen luksussviitissä. Se myydään pakettina, johon kuuluvat opastettu kierros, illallinen Jääravintolassa, kota saunoineen ja paljuineen sekä aamiainen lämpimässä ravintolassa. Sviitti varataan SnowVillagesta sähköpostilla, ja sen sivu kuvaa yhä talvea 2025–26.',
      'Leviltä ja Ylläkseltä kulkee bussi päivittäin aukioloaikoina.',
    ],
  },
  luckyRanch: {
    name: 'Lucky Ranchin lumi-iglut',
    place: 'Pyhäjärven kylä, Pelkosenniemi, noin 10 km Pyhältä',
    facts: [
      'Lumi-iglut rakennetaan joka joulukuu, ja niiden sisällä on aina pakkasta.',
      'Iglussa nukutaan tavallisessa sängyssä lämpimän makuupussin ja kuumavesipullon kanssa, ja kevyt aamiainen kuuluu hintaan.',
      'Iglujen vieressä on lämmin tukikohta, ja ranchin saluunan wc ja suihku ovat iglumajoittujien käytössä koko yön.',
      'Ranch suosittelee igluja terveille aikuisille ja lapsille ja myy yöt omilla sivuillaan.',
    ],
  },

  nightEyebrow: 'Ennen varausta',
  nightH2: 'Millainen yö lumessa on',
  night: [
    { title: 'Pakkasella koko yön', body: 'Arctic SnowHotelissa huoneessa on 0 ja −5 asteen välillä koko yön, Lucky Ranchilla aina pakkasta. Kylmyys on koko idea: lämmitetty huone on lasi-iglu, ei lumihotelli.' },
    { title: 'Makuupussi lämmittää', body: 'Arctic SnowHotel antaa kovaan pakkaseen tehdyt makuupussit, Lucky Ranch lämpimät makuupussit ja kuumavesipullot. Omaa ei tarvitse tuoda.' },
    { title: 'Lämmin tila on vieressä', body: 'Arctic SnowHotelissa on lämmin Snowhotel Lounge ja sauna, Lucky Ranchilla lämmin tukikohta iglujen vieressä. Jos yö käy liian kylmäksi, on paikka minne mennä.' },
    { title: 'Lapset', body: 'Arctic SnowHotel ei suosittele yötä lumihuoneessa alle 5-vuotiaille. Lucky Ranch suosittelee igluja terveille aikuisille ja lapsille. SnowVillage ei kerro ikärajaa, joten kysy ennen varausta.' },
  ],

  visitsEyebrow: 'Ilman yöpymistä',
  visitsH2: 'Lumi- ja jäätaidetta päiväkäynnillä',
  visitsIntro:
    'Lumesta ja jäästä rakennettuja tiloja pääsee katsomaan myös yöpymättä. Arctic SnowHotel ja SnowVillage myyvät päivälippuja; Snowman World ja Kemin Lumilinna ovat pelkkiä päiväkäyntikohteita.',
  visitHeaders: { name: 'Kohde', place: 'Missä', season: 'Kausi', what: 'Mitä näet' },
  visits: [
    {
      name: 'Arctic SnowHotel',
      place: 'Rovaniemi, 26 km keskustasta',
      season: '15.12.–31.3., joka päivä kello 10–20',
      what: 'Päivälipulla lumi- ja jäätaide, jääkappeli, Jääravintola ja Jääbaari; 45 minuutin opastettu kierros on lisävalinta.',
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
      what: 'Lumi- ja jääpuisto, jossa on aktiviteetteja, ruokaa ja juomaa. Yöpymistä se ei myy.',
    },
    {
      name: 'Kemin Lumilinna',
      place: 'Kemi, 8 km Kemi-Tornion lentoasemalta',
      season: 'Talvipuisto tammikuusta huhtikuun alkuun (vuoden 2027 päiviä ei ole julkaistu), SnowExperience ympäri vuoden',
      what: 'Itse lumilinnaa ei ole rakennettu vuosiin, eikä lumihotellia ole tällä hetkellä. Sisätiloissa oleva SnowExperience pidetään −5 asteessa ympäri vuoden.',
    },
  ],

  swedenEyebrow: 'Hyvä tietää',
  swedenH2: 'ICEHOTEL on Ruotsissa',
  swedenBody: [
    'Kun puhutaan "jäähotellista", tarkoitetaan usein ICEHOTELia Jukkasjärvellä Kiirunan lähellä Ruotsin Lapissa. Sen talvihotelli on auki joulukuusta huhtikuuhun, ja ICEHOTEL 365:ssä on jäästä ja lumesta tehtyjä huoneita ympäri vuoden.',
    'Se ei ole Suomessa, joten sitä ei ole yllä olevassa listassa. Tämä sivusto käsittelee Suomen Lappia.',
  ],

  nextEyebrow: 'Lämpimämpää',
  nextH2: 'Jos yksi kylmä yö riittää',
  next: [
    [
      'Lasi-iglu on lämmitetty huone, jossa taivas näkyy sängystä. Vertailemme Lapin lasi-igluja ',
      { to: '/iglumajoitus', label: 'iglumajoitussivulla' },
      '.',
    ],
    [
      'Loppuviikoksi ',
      { to: '/cabins', label: 'mökkisivuilta' },
      ' löydät vuokramökit Lapin eri alueilta etäisyyksineen lähimpään kylään.',
    ],
  ],

  checkedNote:
    'Tiedot on tarkistettu kunkin kohteen omilta sivuilta 22.10.2026. Lumihotellit rakennetaan joka talvi uudelleen, joten päivät ja yöpymisen sisältö voivat muuttua: tarkista kohteen omalta sivulta ennen varausta.',
}

export default fi
