import type { HomeAdSlotsConfig } from '../shared/HomeAdSlots'
import type { Partner } from '../shared/PartnerSlot'
import { DEFAULT_PREMIUM_SPOTS } from '../shared/PremiumSpotGrid'

/**
 * Aurora Holidays (Utsjoki) — ILMAISPAIKKA 2/10, luvattu kirjallisesti Tiina
 * Länsmanille 9.8.2026: "Saatte saman kuin maksavat kumppanit: oman
 * esittelyartikkelin ja mainospaikan verkoston sivustolle 12 kielellä,
 * kaudeksi 1.11.2026–31.10.2027."
 *
 * 🔴 Paikka valittiin KONTEKSTIN eikä näyttömäärän mukaan (CLAUDE.md): Aurora on
 * revontuliopas Utsjoella, joten mokit ja oma sauna ovat hanen majoitustuotteensa. Sama kumppani on myös hubin /northern-lights-sivulla ja laplandnature.comissa.
 *
 * 🔴 Tekstit on GENEROITU tiedostoista laplandvibes/src/locales/<kieli>/
 * aurora-holidays.json (brandCard-lohko), jotka ovat Tiinan hyväksymästä
 * artikkelista. Älä kirjoita niitä käsin uusiksi: kaksi tekstiä = kaksi totuutta.
 * Generaattori: _gen_aurora_partner.py repon juuressa.
 *
 * 🔴 logoSrc on kumppanin oma merkki, jolla on OMA vihreä gradienttitausta ja
 * valkoinen muste. Se toimii valkoisella chipillä sellaisenaan — älä anna tähän
 * -white-versiota äläkä väritä merkkiä uusiksi.
 */
const auroraHolidays: Partner = {
  name: 'Aurora Holidays',
  tagline: 'Mökki joen rannalla, ja oma sauna',
  taglineEn: 'A cabin on the river, with its own sauna',
  taglineSv: 'En stuga vid älven, med egen bastu',
  description: 'Heidän omat mökkinsä Tenon rannalla: kaksi makuuhuonetta, neljä vuodetta ja vuodesohva, oma sauna, eikä yhden hengen lisämaksua.',
  descriptionEn: 'Their own cabins on the bank of the Teno: two bedrooms, four beds and a pull-out sofa, a private sauna, and no single supplement.',
  descriptionSv: 'Deras egna stugor vid Tenos strand: två sovrum, fyra bäddar och en bäddsoffa, egen bastu och inget enkelrumstillägg.',
  url: 'https://auroraholidays.net/?utm_source=laplandvibes&utm_medium=referral&utm_campaign=aurora-holidays-2026&utm_content=stays_card_b',
  urlFi: 'https://auroraholidays.net/fi/etusivu/?utm_source=laplandvibes&utm_medium=referral&utm_campaign=aurora-holidays-2026&utm_content=stays_card_b',
  imageSrc: '/images/partners/auroraholidays-hero.webp',
  logoSrc: '/images/partners/auroraholidays.png',
  logoAlt: 'Aurora Holidays',
  ctaLabel: 'Tutustu yritykseen',
  ctaLabelEn: 'Visit their site',
  ctaLabelSv: 'Besök deras sajt',
  articleUrl: 'https://laplandvibes.com/fi/blog/aurora-holidays/',
  articleUrlEn: 'https://laplandvibes.com/blog/aurora-holidays/',
  articleUrlSv: 'https://laplandvibes.com/sv/blog/aurora-holidays/',
  articleLabel: 'Lue juttu',
  articleLabelEn: 'Read the article',
  articleLabelSv: 'Läs artikeln',
  i18n: {
    de: {
      tagline: 'Eine Hütte am Fluss, mit eigener Sauna',
      description: 'Ihre eigenen Hütten am Ufer des Teno: zwei Schlafzimmer, vier Betten und eine Schlafcouch, eine eigene Sauna und kein Einzelzimmerzuschlag.',
      cta: 'Zur Website',
      articleLabel: 'Artikel lesen',
      articleUrl: 'https://laplandvibes.com/de/blog/aurora-holidays/',
    },
    fr: {
      tagline: 'Un chalet au bord de la rivière, avec son propre sauna',
      description: 'Leurs propres chalets au bord du Teno : deux chambres, quatre lits et un canapé-lit, un sauna privé, et pas de supplément single.',
      cta: 'Voir leur site',
      articleLabel: 'Lire l\'article',
      articleUrl: 'https://laplandvibes.com/fr/blog/aurora-holidays/',
    },
    it: {
      tagline: 'Una casetta sul fiume, con la sua sauna',
      description: 'Le loro casette sulla riva del Teno: due camere da letto, quattro letti e un divano letto, sauna privata e nessun supplemento singola.',
      cta: 'Visita il loro sito',
      articleLabel: 'Leggi l\'articolo',
      articleUrl: 'https://laplandvibes.com/it/blog/aurora-holidays/',
    },
    es: {
      tagline: 'Una cabaña junto al río, con su propia sauna',
      description: 'Sus propias cabañas a la orilla del Teno: dos dormitorios, cuatro camas y un sofá cama, sauna privada y sin suplemento individual.',
      cta: 'Visita su web',
      articleLabel: 'Leer el artículo',
      articleUrl: 'https://laplandvibes.com/es/blog/aurora-holidays/',
    },
    nl: {
      tagline: 'Een huisje aan de rivier, met eigen sauna',
      description: 'Hun eigen huisjes aan de oever van de Teno: twee slaapkamers, vier bedden en een slaapbank, een eigen sauna en geen toeslag voor alleenreizenden.',
      cta: 'Bekijk hun site',
      articleLabel: 'Lees het artikel',
      articleUrl: 'https://laplandvibes.com/nl/blog/aurora-holidays/',
    },
    pt: {
      tagline: 'Uma cabana no rio, com sauna própria',
      description: 'As cabanas deles às margens do Teno: dois quartos, quatro camas e um sofá-cama, sauna privativa e sem taxa de single.',
      cta: 'Visite o site deles',
      articleLabel: 'Leia o artigo',
      articleUrl: 'https://laplandvibes.com/br/blog/aurora-holidays/',
    },
    ja: {
      tagline: '川辺のコテージ、サウナ付き',
      description: 'テノ川のほとりにある同社自身のコテージ。寝室が二つ、ベッド四台とソファベッド、専用サウナ、そして一人利用の追加料金はありません。',
      cta: '公式サイトを見る',
      articleLabel: '記事を読む',
      articleUrl: 'https://laplandvibes.com/ja/blog/aurora-holidays/',
    },
    ko: {
      tagline: '강가의 오두막, 전용 사우나까지',
      description: '테노강 가에 있는 이들의 자체 오두막입니다. 침실 두 개, 침대 네 개와 소파베드, 전용 사우나가 있고 1인 추가 요금은 없습니다.',
      cta: '공식 사이트 보기',
      articleLabel: '기사 읽기',
      articleUrl: 'https://laplandvibes.com/kr/blog/aurora-holidays/',
    },
    zh: {
      tagline: '河边的小屋，带自己的桑拿',
      description: '他们自己位于泰诺河畔的小屋：两间卧室、四张床和一张沙发床，独立桑拿，并且没有单人附加费。',
      cta: '访问他们的网站',
      articleLabel: '阅读专题',
      articleUrl: 'https://laplandvibes.com/cn/blog/aurora-holidays/',
    },
  },
};

export const AD_SLOTS: HomeAdSlotsConfig = {
  siteSlug: 'laplandstays',
  // 🔴 sponsors PIDETAAN tyhjana ja kumppani menee `cards`-kenttaan.
  //    HomeAdSlots lukee `config.cards ?? config.sponsors`, mutta
  //    MainPartnerBanner lukee `config.mainPartner ?? config.sponsors[0]`.
  //    => `cards` nayttaa kortin EIKA tayta paakumppanibanneria, joka jaa
  //    myytavaksi. Sama kuvio kuin laplandactivities/laplandnature.
  //
  // 🔴🔴 JA KORTTI ON A, EI B. Kun vain yksi kortti on myyty, HomeAdSlots
  //    menee `single`-haaraan ja renderoi VAIN kortin A (`partner={a}`);
  //    kortti B on `{!bothEmpty && !single && ...}` eli se jaa pois.
  //    Paikkaan B yksin laitettu kumppani EI RENDEROIDY LAINKAAN.
  //    Mitattu livena 12.9.2026: osio oli tyhja.
  sponsors: [null, null],
  cards: [auroraHolidays, null],
  spots: DEFAULT_PREMIUM_SPOTS,
}

/**
 * ESITTELYKUMPPANI-PAIKAT (Vesa 2026-07-26: "TOTTAKAI HALUAN" + "TEE KAIKKI")
 * ==========================================================================
 * Sivusto nosti ~19 nimettyä, oikeaa kohdetta isoilla toimituksellisilla
 * pinnoilla täysin ILMAISEKSI — "Missä yöpyä Levillä", ankkurikohteet
 * majoitustyypeittäin, mukavuuskorttien kohdepillerit, kohdekortit — samalla
 * kun molemmat myydyt mainospaikat (`sponsors`) olivat tyhjinä. Nyt jokaisen
 * sellaisen pinnan kärkeen tulee YKSI myytävä Esittelykumppani-paikka. Malli on
 * sama kuin laplanddining `/restaurants` (commit `bdf9b37`) ja
 * laplandhoteldeals (`f67c6d6`): **AdSpec + 1 datarivi** — paikka on pelkkä
 * avain tässä taulukossa, ei omaa komponenttia per pinta.
 *
 * Säännöt (älä pura näitä ilman Vesan päätöstä):
 *  - Tyhjä (null) = kanoninen VAALEA house-ad `shared/PartnerSlot`ista
 *    ("MAINOSPAIKKA VAPAANA / Varaa mainospaikka →"). EI koskaan automaattista
 *    nostoa jollekin oikealle kohteelle — ilmainen iso pinta on juuri se mikä
 *    tässä korjattiin.
 *  - Maksettu paikka on merkittävä mainokseksi (KKV) — merkintä tehdään
 *    `FeaturedPartnerSlot`issa, ei täällä.
 *  - Paikat näkyvät vain fi/en/sv (`adLocaleEnabled`). Muilla 9 kielellä paikka
 *    jää pois kokonaan eikä pintaan tule aukkoa: toimituksellinen kortisto on
 *    tästä erillään ja renderöityy kaikilla 12 kielellä ennallaan.
 *  - Kumppanin linkki EI ole affiliate-muotoinen: maksettu esittely noudattaa
 *    bear-precedenttia ("maksettu esittely, ei komissiolinkki", ks.
 *    `shared/PartnerSlot`), ja kohteiden omat varaus-CTA:t pysyvät omissa
 *    affiliate-reiteissään koskemattomina (`sponsored nofollow noopener`,
 *    ei `noreferrer` — Worker lukee Refererin).
 *  - Toimituksen valinta -chip EI ole osa tätä inventaaria eikä ole myynnissä.
 *    Se johdetaan aidosta Google-arviodatasta (`bestGoogleRated`,
 *    src/data/properties.ts). Älä lisää tänne maksullista tapaa saada se.
 *
 * Myynti: täytä alla oleva kenttä Partner-objektilla → build → deploy.
 */
export type FeaturedPlacement =
  | 'home_amenities'
  | 'home_locations'
  | 'property_types'
  | 'destination_levi'
  | 'destination_yllas'
  | 'destination_saariselka'
  | 'destination_inari'
  | 'destination_rovaniemi'

/**
 * Paikan konteksti mainosmerkinnässä ("Esittelykumppani · Missä yöpyä Levillä").
 * Vain fi/en/sv, koska paikka itse on `adLocaleEnabled`-rajattu — nämä eivät
 * kuulu 12-kielisiin copy-tiedostoihin eivätkä voi vuotaa muille kielille.
 */
export const FEATURED_CONTEXT: Record<FeaturedPlacement, { fi: string; en: string; sv: string }> = {
  home_amenities: { fi: 'Mitä majoituksesta kannattaa etsiä', en: 'What to look for in a stay', sv: 'Vad du ska leta efter i ett boende' },
  home_locations: { fi: 'Kohteet', en: 'Destinations', sv: 'Destinationer' },
  property_types: { fi: 'Majoitustyypit', en: 'Property types', sv: 'Boendetyper' },
  destination_levi: { fi: 'Missä yöpyä Levillä', en: 'Where to stay in Levi', sv: 'Var du bor i Levi' },
  destination_yllas: { fi: 'Missä yöpyä Ylläksellä', en: 'Where to stay in Ylläs', sv: 'Var du bor i Ylläs' },
  destination_saariselka: { fi: 'Missä yöpyä Saariselällä', en: 'Where to stay in Saariselkä', sv: 'Var du bor i Saariselkä' },
  destination_inari: { fi: 'Missä yöpyä Inarissa', en: 'Where to stay in Inari', sv: 'Var du bor i Inari' },
  destination_rovaniemi: { fi: 'Missä yöpyä Rovaniemellä', en: 'Where to stay in Rovaniemi', sv: 'Var du bor i Rovaniemi' },
}

/** Myydyt Esittelykumppani-paikat. null = house-ad (paikka vapaana). */
export const FEATURED_PARTNERS: Record<FeaturedPlacement, Partner | null> = {
  home_amenities: null,
  home_locations: null,
  property_types: null,
  destination_levi: null,
  destination_yllas: null,
  destination_saariselka: null,
  destination_inari: null,
  destination_rovaniemi: null,
}

/**
 * Kohdesivun slug → sen Esittelykumppani-paikka. Tuntematon slug palauttaa
 * `undefined`, jolloin `FeaturedPartnerSlot` ei renderöi mitään: uusi
 * kohdesivu ei saa vahingossa perittyä toisen kohteen myytyä paikkaa.
 */
export const DESTINATION_PLACEMENT: Record<string, FeaturedPlacement | undefined> = {
  levi: 'destination_levi',
  yllas: 'destination_yllas',
  saariselka: 'destination_saariselka',
  inari: 'destination_inari',
  rovaniemi: 'destination_rovaniemi',
}
