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
  tagline: 'Utsjoki: mökki Tenon rannalla, oma sauna',
  taglineEn: 'Utsjoki: a cabin on the Teno, with its own sauna',
  taglineSv: 'Utsjoki: stuga vid Tana älv, med egen bastu',
  description: 'Suomen pohjoisin kunta, 450 km napapiiriltä pohjoiseen, ja lähin katuvalo on liian kaukana häiritäkseen. Saamelaisen perheyrityksen omat mökit joen rannalla: kaksi makuuhuonetta, oma sauna, viiden hengen perhe mahtuu, ja opastetut revontuliretket syyskuusta huhtikuuhun.',
  descriptionEn: 'Finland\'s northernmost municipality, 450 km north of the Arctic Circle, with the nearest streetlight too far away to matter. A Sámi family business with its own riverside cabins: two bedrooms, a private sauna, room for a family of five, and guided aurora tours from September to April.',
  descriptionSv: 'Finlands nordligaste kommun, 450 km norr om polcirkeln, och närmaste gatlykta är för långt borta för att störa. Ett samiskt familjeföretag med egna stugor vid älven: två sovrum, egen bastu, plats för en familj på fem och guidade norrskensturer från september till april.',
  url: 'https://go.laplandvibes.com/go/auroraholidays?sid=stays_card_b',
  urlFi: 'https://go.laplandvibes.com/go/auroraholidays?sid=stays_card_b&dest=https%3A%2F%2Fauroraholidays.net%2Ffi%2Fetusivu%2F',
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
      tagline: 'Utsjoki: Hütte am Teno, mit eigener Sauna',
      description: 'Finnlands nördlichste Gemeinde, 450 km nördlich des Polarkreises, und die nächste Straßenlaterne ist zu weit weg, um zu stören. Ein samischer Familienbetrieb mit eigenen Hütten am Fluss: zwei Schlafzimmer, eigene Sauna, Platz für eine fünfköpfige Familie und geführte Polarlicht-Touren von September bis April.',
      cta: 'Zur Website',
      articleLabel: 'Artikel lesen',
      articleUrl: 'https://laplandvibes.com/de/blog/aurora-holidays/',
    },
    fr: {
      tagline: 'Utsjoki : chalet au bord du Teno, avec son propre sauna',
      description: 'La commune la plus au nord de la Finlande, à 450 km au nord du cercle polaire, où le lampadaire le plus proche est trop loin pour gêner. Une entreprise familiale sámi avec ses propres chalets au bord de la rivière : deux chambres, sauna privé, de la place pour une famille de cinq, et des sorties guidées pour observer les aurores de septembre à avril.',
      cta: 'Voir leur site',
      articleLabel: 'Lire l\'article',
      articleUrl: 'https://laplandvibes.com/fr/blog/aurora-holidays/',
    },
    it: {
      tagline: 'Utsjoki: chalet sulla riva del Teno, con sauna privata',
      description: 'Il comune più settentrionale della Finlandia, 450 km a nord del Circolo Polare, con il lampione più vicino troppo lontano per disturbare. Un\'impresa familiare sami con i propri chalet sul fiume: due camere, sauna privata, spazio per una famiglia di cinque persone e tour guidati dell\'aurora boreale da settembre ad aprile.',
      cta: 'Visita il loro sito',
      articleLabel: 'Leggi l\'articolo',
      articleUrl: 'https://laplandvibes.com/it/blog/aurora-holidays/',
    },
    es: {
      tagline: 'Utsjoki: cabaña a orillas del Teno, con sauna propia',
      description: 'El municipio más septentrional de Finlandia, a 450 km al norte del Círculo Polar, con la farola más cercana demasiado lejos para molestar. Una empresa familiar sami con sus propias cabañas junto al río: dos dormitorios, sauna privada, sitio para una familia de cinco y salidas guiadas a ver auroras de septiembre a abril.',
      cta: 'Visita su web',
      articleLabel: 'Leer el artículo',
      articleUrl: 'https://laplandvibes.com/es/blog/aurora-holidays/',
    },
    nl: {
      tagline: 'Utsjoki: hut aan de Teno, met eigen sauna',
      description: 'De noordelijkste gemeente van Finland, 450 km ten noorden van de poolcirkel, waar de dichtstbijzijnde straatlantaarn te ver weg staat om te storen. Een Samisch familiebedrijf met eigen hutten aan de rivier: twee slaapkamers, eigen sauna, plek voor een gezin van vijf en begeleide noorderlichttochten van september tot april.',
      cta: 'Bekijk hun site',
      articleLabel: 'Lees het artikel',
      articleUrl: 'https://laplandvibes.com/nl/blog/aurora-holidays/',
    },
    pt: {
      tagline: 'Utsjoki: cabana à beira do Teno, com sauna própria',
      description: 'O município mais ao norte da Finlândia, 450 km ao norte do Círculo Polar Ártico, com o poste de luz mais próximo longe demais para atrapalhar. Uma empresa familiar sámi com cabanas próprias à beira do rio: dois quartos, sauna privativa, espaço para uma família de cinco pessoas e passeios guiados para ver a aurora boreal de setembro a abril.',
      cta: 'Visite o site deles',
      articleLabel: 'Leia o artigo',
      articleUrl: 'https://laplandvibes.com/br/blog/aurora-holidays/',
    },
    ja: {
      tagline: 'ウツヨキ：テノ川のほとりのコテージ、専用サウナ付き',
      description: 'フィンランド最北の自治体、北極圏から北へ450km。いちばん近い街灯は気にならないほど遠くにあります。サーミの家族が自ら営む川辺のコテージ：寝室2つ、専用サウナ、5人家族でもゆったり。9月から4月まではガイド付きオーロラツアーも。',
      cta: '公式サイトを見る',
      articleLabel: '記事を読む',
      articleUrl: 'https://laplandvibes.com/ja/blog/aurora-holidays/',
    },
    ko: {
      tagline: '우츠요키: 테노 강가의 캐빈, 전용 사우나',
      description: '핀란드 최북단 지자체, 북극권에서 북쪽으로 450km. 가장 가까운 가로등은 방해가 되지 않을 만큼 멀리 있습니다. 사미족 가족 기업이 직접 운영하는 강가 캐빈: 침실 2개, 전용 사우나, 5인 가족도 여유롭게. 9월부터 4월까지는 가이드 동반 오로라 투어도 운영합니다.',
      cta: '공식 사이트 보기',
      articleLabel: '기사 읽기',
      articleUrl: 'https://laplandvibes.com/kr/blog/aurora-holidays/',
    },
    zh: {
      tagline: '乌茨约基：泰诺河畔的木屋，带私人桑拿',
      description: '芬兰最北的市镇，北极圈以北450公里，最近的路灯远得不会打扰你。萨米家族企业自营的河畔木屋：两间卧室、私人桑拿、五口之家住得下，9月至4月还有向导带领的极光之旅。',
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
