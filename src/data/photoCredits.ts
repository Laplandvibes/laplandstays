/**
 * Valokuvien krediitit ja kuitit (kuvavaihto 9.10.2026, Vesa 4.10.: "vaihda tekoälykuvat aidoiksi").
 *
 * Avain = kuvatiedoston nimi ilman päätettä ja kokopäätettä (`hero`, `hero-about`, `inari-hero` …).
 * Samaa avainta käyttävät kaikki variantit (-800/-1200/-1920/-2560, .avif/.webp).
 *
 * 🔴 CC BY / CC BY-SA: tekijä, lisenssi (versioineen) ja linkit näkyvät kuvan päällä (PhotoMark) tai
 *    kuvaluettelona (PhotoCreditLine). Tiedostoa EI rajata eikä sumenneta, vain pienennetty
 *    (rajaus näytöllä CSS:llä, object-fit).
 * 🔴 CC0 / PD: ei nimeämisvelvoitetta; kuitti on silti tässä.
 * 🔴 Paikka (`place`) näytetään "Kuvassa: …" vain kun se on varmistettu Commonsin GPS:stä tai kuvauksesta.
 * 🔴 BY-SA-kuvaa ei saa viedä jakokorttiin (lv_permanent_rules §34.2): destination-sivujen og-*.jpg
 *    (scripts/generate-og.mjs) ja sivustokortti (og-summer/-winter.jpg) EIVÄT saa käyttää näitä tiedostoja.
 */
export type PhotoCreditData = { author: string; license: string; licenseUrl: string; sourceUrl: string }
export type PlaceNames = { latin: string } & Partial<Record<'ja' | 'ko' | 'zh-CN', string>>

export type PhotoEntry = {
  /** Näkyvä tekijärivi; puuttuu CC0/PD-kuvilta. */
  credit?: PhotoCreditData
  place?: PlaceNames
  receipt: {
    source: 'Wikimedia Commons' | 'Pexels'
    id: string
    url: string
    license: string
    author: string
    date: string
    retrieved: string
    priceEur: 0
    changes: string
    checks: string
  }
}

const RETRIEVED = '2026-10-09'
const CHECKS =
  'katsottu täysikokoisena: aito valokuva, ei tunnistettavia kasvoja, ei luettavia rekisterikilpiä eikä kolmannen osapuolen logoa pääaiheena; verkoston nimi-, tunniste- ja kuvaajahaku (29 repoa) sekä 64x36-pikselivertailu: ei muualla 9.10.2026'
const cm = (name: string) =>
  `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(name.replace(/ /g, '_')).replace(/%2C/g, ',').replace(/%28/g, '(').replace(/%29/g, ')')}`

const BYSA4 = { license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/' }
const BYSA2 = { license: 'CC BY-SA 2.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0/' }
const BY2 = { license: 'CC BY 2.0', licenseUrl: 'https://creativecommons.org/licenses/by/2.0/' }

export const PHOTO_CREDITS: Record<string, PhotoEntry> = {
  // ---------------------------------------------------------------- HEROT
  hero: {
    credit: { author: 'Tadeáš Gregor', ...BYSA4, sourceUrl: cm('Puvrrasjoki wilderness hut 3.jpg') },
    place: { latin: 'Käsivarsi, Enontekiö', ja: 'ケシヴァルシ、エノンテキオ', ko: '케시바르시, 에논테키외', 'zh-CN': '凱西瓦爾西，埃農泰基厄' },
    receipt: {
      source: 'Wikimedia Commons', id: 'Puvrrasjoki wilderness hut 3.jpg', url: cm('Puvrrasjoki wilderness hut 3.jpg'),
      license: 'CC BY-SA 4.0', author: 'Tadeáš Gregor', date: '2010-03-16 16:32', retrieved: RETRIEVED, priceEur: 0,
      changes: 'vain pienennys 3072x2304 -> 2560/1920/1200/800 px, AVIF + WebP, ei rajausta; GPS 68.90 N 21.40 E (Käsivarren erämaa)', checks: CHECKS,
    },
  },
  'hero-about': {
    credit: { author: 'Ninara', ...BY2, sourceUrl: cm('Y1A9829 Lapland (15186874103).jpg') },
    place: { latin: 'Saariselkä', ja: 'サーリセルカ', ko: '사리셀카', 'zh-CN': '薩利色爾卡' },
    receipt: {
      source: 'Wikimedia Commons', id: 'Y1A9829 Lapland (15186874103).jpg', url: cm('Y1A9829 Lapland (15186874103).jpg'),
      license: 'CC BY 2.0', author: 'Ninara', date: '2014-11-14 14:36', retrieved: RETRIEVED, priceEur: 0,
      changes: 'vain pienennys 4512x3462 -> 2560/1920/1200/800 px, AVIF + WebP, ei rajausta; GPS 68.42 N 27.43 E', checks: CHECKS,
    },
  },
  'hero-cabins': {
    credit: { author: 'Tadeáš Gregor', ...BYSA4, sourceUrl: cm('Taapmajärvi wilderness hut detail.jpg') },
    place: { latin: 'Käsivarsi, Enontekiö', ja: 'ケシヴァルシ、エノンテキオ', ko: '케시바르시, 에논테키외', 'zh-CN': '凱西瓦爾西，埃農泰基厄' },
    receipt: {
      source: 'Wikimedia Commons', id: 'Taapmajärvi wilderness hut detail.jpg', url: cm('Taapmajärvi wilderness hut detail.jpg'),
      license: 'CC BY-SA 4.0', author: 'Tadeáš Gregor', date: '2010-03-12 15:49', retrieved: RETRIEVED, priceEur: 0,
      changes: 'vain pienennys 3072x2304 -> 2560/1920/1200/800 px, AVIF + WebP, ei rajausta; GPS 69.16 N 21.76 E (Käsivarren erämaa)', checks: CHECKS + '; erämaa-autiotupa, ei vuokramökki: alt ja paikkamerkintä kertovat sen',
    },
  },
  'hero-transport': {
    credit: { author: 'Markus Säynevirta', ...BYSA4, sourceUrl: cm('Kittilä airport terminal (Feb 2017) 1.jpg') },
    place: { latin: 'Kittilä', ja: 'キッティラ', ko: '키틸래', 'zh-CN': '基蒂萊' },
    receipt: {
      source: 'Wikimedia Commons', id: 'Kittilä airport terminal (Feb 2017) 1.jpg', url: cm('Kittilä airport terminal (Feb 2017) 1.jpg'),
      license: 'CC BY-SA 4.0', author: 'Markus Säynevirta', date: '2017-02-22 12:14', retrieved: RETRIEVED, priceEur: 0,
      changes: 'vain pienennys 4000x2248 -> 2560/1920/1200/800 px, AVIF + WebP, ei rajausta', checks: CHECKS + '; sijainti kuvauksesta ("Kittilän lentoasema helmikuussa 2017")',
    },
  },
  'hero-whentogo': {
    credit: { author: 'Ninara', ...BY2, sourceUrl: cm('Lake Kilpisjärvi in Enontekiö, Lapland, Finland, 2021 September.jpg') },
    place: { latin: 'Kilpisjärvi', ja: 'キルピスヤルヴィ', ko: '킬피스예르비', 'zh-CN': '基爾皮斯耶爾維' },
    receipt: {
      source: 'Wikimedia Commons', id: 'Lake Kilpisjärvi in Enontekiö, Lapland, Finland, 2021 September.jpg', url: cm('Lake Kilpisjärvi in Enontekiö, Lapland, Finland, 2021 September.jpg'),
      license: 'CC BY 2.0', author: 'Ninara', date: '2021-09-07 10:55', retrieved: RETRIEVED, priceEur: 0,
      changes: 'vain pienennys 4991x3005 -> 2560/1920/1200/800 px, AVIF + WebP, ei rajausta; GPS 69.05 N 20.80 E', checks: CHECKS,
    },
  },
  'hero-alt': {
    receipt: {
      source: 'Pexels', id: 'pexels:14118545', url: 'https://www.pexels.com/photo/14118545/',
      license: 'Pexels License', author: 'Markku Soini', date: 'ladattu Pexelsiin 2022-10-21 (kuvaajan sijainti: Ylläsjärvi, Finland)', retrieved: RETRIEVED, priceEur: 0,
      changes: 'pienennetty 5158x3872 -> 2560/1920/1200/800 px, AVIF + WebP, ei rajausta', checks: CHECKS + '; ladattu 2022 (ennen 2023), katsottu isona ja luettu aidoksi; ei ihmisiä',
    },
  },
  'inari-hero': {
    credit: { author: 'Markus Säynevirta', ...BYSA4, sourceUrl: cm('Lake Matala Paltojärvi, Inari, Finland (Feb 2017).jpg') },
    place: { latin: 'Inari', ja: 'イナリ', ko: '이나리', 'zh-CN': '伊納里' },
    receipt: {
      source: 'Wikimedia Commons', id: 'Lake Matala Paltojärvi, Inari, Finland (Feb 2017).jpg', url: cm('Lake Matala Paltojärvi, Inari, Finland (Feb 2017).jpg'),
      license: 'CC BY-SA 4.0', author: 'Markus Säynevirta', date: '2017-02-22 12:34', retrieved: RETRIEVED, priceEur: 0,
      changes: 'vain pienennys 4000x2248 -> 2560/1920/1200/800 px, AVIF + WebP, ei rajausta', checks: CHECKS + '; ilmakuva lentokoneesta (kuvaus: jäätynyt Matala Paltojärvi Inarissa)',
    },
  },
  'saariselka-hero': {
    credit: { author: 'Nicolas Buffler', ...BYSA2, sourceUrl: cm('Laponie 2019 (46344164575).jpg') },
    place: { latin: 'Saariselkä', ja: 'サーリセルカ', ko: '사리셀카', 'zh-CN': '薩利色爾卡' },
    receipt: {
      source: 'Wikimedia Commons', id: 'Laponie 2019 (46344164575).jpg', url: cm('Laponie 2019 (46344164575).jpg'),
      license: 'CC BY-SA 2.0', author: 'Nicolas Buffler', date: '2019-02-22 10:26', retrieved: RETRIEVED, priceEur: 0,
      changes: 'vain pienennys 3008x2008 -> 1920/1200/800 px, WebP/AVIF, ei rajausta; GPS 68.42 N 27.43 E', checks: CHECKS,
    },
  },
  'yllas-hero': {
    place: { latin: 'Äkäslompolo, Kolari', ja: 'アカスロンポロ、コラリ', ko: '아캬슬롬폴로, 콜라리', 'zh-CN': '阿卡斯隆波洛，科拉里' },
    receipt: {
      source: 'Wikimedia Commons', id: 'Winter in Äkäslompolo, Lapland (direction east).png', url: cm('Winter in Äkäslompolo, Lapland (direction east).png'),
      license: 'CC0 1.0', author: 'Rofraja', date: '2024-01-26', retrieved: RETRIEVED, priceEur: 0,
      changes: 'pienennetty 4032x1934 -> 2560/1920/1200/800 px, WebP/AVIF, ei rajausta; GPS 67.60 N 24.16 E', checks: CHECKS + '; ei ihmisiä; auton kilpi ei luettavissa',
    },
  },
  'extra-2': {
    credit: { author: 'Sadenäyttely', ...BYSA4, sourceUrl: cm('Luminen Ounasvaara 2.jpg') },
    place: { latin: 'Ounasvaara, Rovaniemi', ja: 'オウナスヴァーラ、ロヴァニエミ', ko: '오우나스바라, 로바니에미', 'zh-CN': '奧納斯瓦拉，羅瓦涅米' },
    receipt: {
      source: 'Wikimedia Commons', id: 'Luminen Ounasvaara 2.jpg', url: cm('Luminen Ounasvaara 2.jpg'),
      license: 'CC BY-SA 4.0', author: 'Sadenäyttely', date: '2020-12-25', retrieved: RETRIEVED, priceEur: 0,
      changes: 'vain pienennys 4500x3000 -> 2560/1920/1200/800 px, WebP, ei rajausta', checks: CHECKS + '; sijainti kuvauksesta (Ounasvaara Ounasjoen sillalta, hyppyrimäki näkyvissä)',
    },
  },

  // ---------------------------------------------------------------- KORTIT
  'inari-card': {
    credit: { author: 'Markus Säynevirta', ...BYSA4, sourceUrl: cm('Lake Pasasjärvi, Inari, Finland (Feb 2017).jpg') },
    place: { latin: 'Inari', ja: 'イナリ', ko: '이나리', 'zh-CN': '伊納里' },
    receipt: {
      source: 'Wikimedia Commons', id: 'Lake Pasasjärvi, Inari, Finland (Feb 2017).jpg', url: cm('Lake Pasasjärvi, Inari, Finland (Feb 2017).jpg'),
      license: 'CC BY-SA 4.0', author: 'Markus Säynevirta', date: '2017-02-22 13:29', retrieved: RETRIEVED, priceEur: 0,
      changes: 'vain pienennys 4000x2248 -> 1920 px, AVIF + WebP, ei rajausta', checks: CHECKS + '; ilmakuva lentokoneesta (kuvaus: jäätynyt Pasasjärvi Inarissa)',
    },
  },
  'saariselka-card': {
    credit: { author: 'Nicolas Buffler', ...BYSA2, sourceUrl: cm('Laponie 2019 (46344164585).jpg') },
    place: { latin: 'Saariselkä', ja: 'サーリセルカ', ko: '사리셀카', 'zh-CN': '薩利色爾卡' },
    receipt: {
      source: 'Wikimedia Commons', id: 'Laponie 2019 (46344164585).jpg', url: cm('Laponie 2019 (46344164585).jpg'),
      license: 'CC BY-SA 2.0', author: 'Nicolas Buffler', date: '2019-02-22 10:22', retrieved: RETRIEVED, priceEur: 0,
      changes: 'vain pienennys 2008x3008 -> 1200x1798 px, AVIF + WebP, ei rajausta; GPS 68.42 N 27.43 E', checks: CHECKS,
    },
  },
  'yllas-card': {
    place: { latin: 'Äkäslompolo, Kolari', ja: 'アカスロンポロ、コラリ', ko: '아캬슬롬폴로, 콜라리', 'zh-CN': '阿卡斯隆波洛，科拉里' },
    receipt: {
      source: 'Wikimedia Commons', id: 'Winter in Äkäslompolo, Lapland (direction east).png', url: cm('Winter in Äkäslompolo, Lapland (direction east).png'),
      license: 'CC0 1.0', author: 'Rofraja', date: '2024-01-26', retrieved: RETRIEVED, priceEur: 0,
      changes: 'pienennetty 4032x1934 -> 1920x921 px, WebP, ei rajausta; GPS 67.60 N 24.16 E', checks: CHECKS,
    },
  },

  // ---------------------------------------------------------------- ETUJEN KUVAKKEET
  'amenity-sauna': {
    receipt: {
      source: 'Wikimedia Commons', id: 'Sauna stool 2 ready.JPG', url: cm('Sauna stool 2 ready.JPG'),
      license: 'Public domain', author: 'MKFI', date: '2024-10-25', retrieved: RETRIEVED, priceEur: 0,
      changes: 'pienennetty 6000x4000 -> 900 px, AVIF + WebP, ei rajausta', checks: CHECKS + '; ei ihmisiä; paikkaa ei väitetä',
    },
  },
  'amenity-fireplace': {
    receipt: {
      source: 'Wikimedia Commons', id: 'Takkatuli.jpg', url: cm('Takkatuli.jpg'),
      license: 'Public domain', author: 'kallerna', date: '2009', retrieved: RETRIEVED, priceEur: 0,
      changes: 'pienennetty 1944x2592 -> 900x1200 px, AVIF + WebP, ei rajausta', checks: CHECKS + '; ei ihmisiä; paikkaa ei väitetä (GPS Satakunta)',
    },
  },
  'amenity-kitchen': {
    credit: { author: 'JIP', ...BYSA4, sourceUrl: cm('Interior of cabin at Tulppion Majat.jpg') },
    place: { latin: 'Tulppio, Savukoski' },
    receipt: {
      source: 'Wikimedia Commons', id: 'Interior of cabin at Tulppion Majat.jpg', url: cm('Interior of cabin at Tulppion Majat.jpg'),
      license: 'CC BY-SA 4.0', author: 'JIP', date: '2020-08-03', retrieved: RETRIEVED, priceEur: 0,
      changes: 'vain pienennys 4608x3456 -> 900 px, AVIF + WebP, ei rajausta', checks: CHECKS + '; kuvaus: perusmökin sisätila Tulppion Majatissa, Savukoskella',
    },
  },
  'amenity-hot-tub': {
    credit: { author: 'Suomenkotteria', ...BYSA4, sourceUrl: cm('Puulämmitteinen palju.jpg') },
    receipt: {
      source: 'Wikimedia Commons', id: 'Puulämmitteinen palju.jpg', url: cm('Puulämmitteinen palju.jpg'),
      license: 'CC BY-SA 4.0', author: 'Suomenkotteria', date: '2016-06-01', retrieved: RETRIEVED, priceEur: 0,
      changes: 'vain pienennys 3840x2160 -> 900 px, AVIF + WebP, ei rajausta', checks: CHECKS + '; paikka Pyhtää (ei Lappi) => paikkaa ei väitetä; ei ihmisiä',
    },
  },
  // ---------------------------------------------------------------- JAKOKORTTI (ei näy sivulla)
  'og-transport-rovaniemi-station': {
    receipt: {
      source: 'Wikimedia Commons', id: 'Rovaniemi railway station 2022-09-14 02.jpg', url: cm('Rovaniemi railway station 2022-09-14 02.jpg'),
      license: 'CC0 1.0', author: 'Leonhard Lenz', date: '2022-09-14', retrieved: RETRIEVED, priceEur: 0,
      changes: 'pienennys + sivukortin rajaus jakokortille (scripts/og/gen_page_cards.mjs); CC0, ei krediittivelvoitetta; /transport-sivun jakokortti, koska sivun hero on BY-SA (§34.2)', checks: CHECKS,
    },
  },
}

export const photoIdFromSrc = (src: string): string => {
  const f = src.split('?')[0].split('/').pop() ?? ''
  return f.replace(/\.(avif|webp|jpe?g|png)$/i, '').replace(/-(800|1200|1920|2560)$/, '')
}
