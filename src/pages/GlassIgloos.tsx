import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink, Snowflake, Sparkles, Building2, Megaphone } from 'lucide-react'
import SEO from '../components/SEO'
import { localizeArticle } from '../lib/jsonLd'
import AffiliateDisclosure from '../components/AffiliateDisclosure'
import Newsletter from '../components/Newsletter'
import PageBreadcrumb from '../components/PageBreadcrumb'
import { buildAffiliateUrl, propertyLodgingLink } from '../lib/affiliate'
import { PROPERTY_BOOKING } from '../data/propertyBooking'
import { trackAffiliateClick } from '../lib/analytics'
import { useLang, useLocalePath } from '../i18n/useLang'

/**
 * ガラスイグルー比較 — JAPANESE-ONLY comparison page (/ja/glass-igloos).
 *
 * Japaninkielinen vertailusivu, EI lokalisointikerrosta: reitti on olemassa vain
 * /ja/-puolella (App.tsx), prerender rajattu routes.jsonin "locales": ["ja"]
 * -kentällä ja SEO-komponentti saa hreflangLangs={JA_ONLY}, jottei sivu mainosta
 * yhtätoista aavevarianttia joita ei ole olemassa. Sama kuvio kuin /fi/iglumajoitus
 * (Igloos.tsx) — jos muutat mekanismia, muuta molemmat.
 *
 * Brief: SISALTOBRIEFIT-20260813.md rivi 713 (`グラスイグルー`, 480 hakua/kk).
 * SERPin voittajilta puuttuu vertailutaulukko ja hinnat — tämä sivu tuo molemmat.
 *
 * Faktat verifioitu kohteiden OMILTA sivuilta 15.8.2026:
 *  - kakslauttanen.fi/prices: "from € 501 /night Winter accommodation including
 *    breakfast & dinner Half Board", "from € 278 /night Flexible Autumn Rate"
 *  - leviniglut.fi: "Nestled 340 metres above sea level … only 10 km from Levi",
 *    "Our resort will open again on 1st of September 2026"
 *  - arcticsnowhotel.fi/en/stay/snowhotel: opens "annually on December 15th",
 *    "temperature … remains between 0°C and -5°C", "high-quality sleeping bags",
 *    "not recommended for children under 5 years old"
 *  - stararctichotel.com: 15 Aurora Glass Cabin, 20 m², lämmitetty pohjoiseen
 *    suunnattu lasikatto (verifiointi kirjattu Igloos.tsx:ään 15.8.2026; suora
 *    curl-tarkistus sai 403:n — botti-esto, ei vastaevidenssi)
 *  Muut kohdeväitteet (Apukka 15 min, Aurora Village 20 min IVL + wake-up,
 *  Nellim/Inari-järvi, Muotka all-suite, aluehinnat 300/350/400 €) ovat sivuston
 *  omaa julkaistua ja-copyä (kohdesivut + property-types + when-to-go).
 *
 * 🔴 ÄLÄ lisää kohdekohtaisia hintoja joita kohteen oma sivu ei ilmoita —
 * "要確認"-solu on tarkoituksella tyhjä lupaus, ei laiskuutta.
 * 🔴 SID-kuvio: stays_ja_igloos_<slug> (≤33 merkkiä, check-sids.mjs vahtii).
 * Per-rivi CTA on tahallinen: yksi yhteinen "検索する"-nappi pudottaisi
 * käyttäjän partnerin etusivulle (mainos-CTA-auditti 9.8.2026).
 */

const JA_ONLY = ['ja']

const PAGE_URL = 'https://laplandstays.com/ja/glass-igloos/'

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'グラスイグルー：ラップランドの施設を料金と場所で比べる',
  description:
    'ラップランドのグラスイグルーを施設単位で比較。ロヴァニエミ、サーリセルカ、イヴァロ・イナリ、レヴィの施設の場所・最寄空港・1泊の目安を一覧にし、料金に含まれるもの、予約時期、曇った夜の過ごし方まで解説します。',
  author: {
    '@type': 'Person',
    name: 'Vesa Pesola',
    jobTitle: 'Editor / operator',
    worksFor: { '@type': 'Organization', name: 'LaPeso Oy' },
    url: 'https://laplandstays.com/editorial-policy',
  },
  publisher: { '@type': 'Organization', name: 'LaplandStays' },
  datePublished: '2026-08-15',
  dateModified: '2026-08-15',
  mainEntityOfPage: PAGE_URL,
  image: 'https://laplandstays.com/og-default.jpg',
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://laplandstays.com/ja/' },
    { '@type': 'ListItem', position: 2, name: 'グラスイグルー比較', item: PAGE_URL },
  ],
}

const seo = {
  title: 'グラスイグルー比較｜料金・場所・予約時期でわかる選び方',
  description:
    'ラップランドのグラスイグルーを施設単位で比較。ロヴァニエミ、サーリセルカ、イヴァロ・イナリ、レヴィの11施設の場所・最寄空港・1泊の目安を一覧にし、料金に含まれるもの、予約時期、曇った夜の過ごし方まで解説します。',
}

// ---------- 3つの型 ----------

const TYPE_CARDS = [
  {
    icon: Sparkles,
    title: '独立型のグラスイグルー',
    tagline: '一棟ずつ、屋根全体がガラス',
    body:
      '雪原に一棟ずつ建つ小さなキャビンで、ベッドの上の屋根全体、あるいは壁までがガラスです。サーリセルカのカクスラウッタネンが元祖として知られ、レヴィ山上のLevin Iglutもこの型。横になったまま頭上の空をそのまま見上げられるのが利点で、価格帯はこの型が最上位に来ます。',
    forWho: '向いている方：オーロラを主目的にするカップル、写真を撮りたい方。',
  },
  {
    icon: Building2,
    title: 'ガラス天井の客室・アパートメント',
    tagline: '建物はホテル、屋根がガラス',
    body:
      '建物自体は通常のホテル客室やアパートメントで、屋根の一部または一面がガラスになっているもの。サーリセルカのStar Arcticの客室は、屋根のガラス面を北の空に向け、加温して曇りにくくしてあります。ロヴァニエミのNova Skylandのようなアパートメント型もこの系統。独立型ほど「全部ガラス」ではないぶん、断熱・遮光・プライバシーの点では扱いやすい型です。',
    forWho: '向いている方：設備の快適さを優先する方、長めの滞在。',
  },
  {
    icon: Snowflake,
    title: '雪のイグルー（スノーホテル）',
    tagline: '名前は似ていても、別の商品',
    body:
      '雪と氷で毎冬造り直される客室で、室温は0〜−5 °C。ロヴァニエミ近郊のArctic SnowHotelの雪のホテルは毎年12月15日に開き、極寒対応の寝袋が用意され、5歳未満の宿泊は推奨されていません。グラスイグルーが「暖かい部屋から空を見る」体験なのに対し、こちらは「寒さの中で眠る」体験そのものが商品です。',
    forWho: '向いている方：一晩の冒険がほしい方。多くの人は1泊で十分です。',
  },
]

// ---------- 施設一覧 ----------

type IglooRow = {
  name: string
  area: string
  airport: string
  feature: string
  price: string
  bookingKey: keyof typeof PROPERTY_BOOKING
  sid: string
}

const TABLE_ROWS: IglooRow[] = [
  {
    name: 'Kakslauttanen Arctic Resort',
    area: 'サーリセルカ',
    airport: 'イヴァロ（IVL）約30分',
    feature: '独立型グラスイグルーの元祖。イグルーとログシャレーの村',
    price: '冬501ユーロから（朝・夕食込み）、秋278ユーロから',
    bookingKey: 'kakslauttanen',
    sid: 'stays_ja_igloos_kakslauttanen',
  },
  {
    name: 'Star Arctic Hotel',
    area: 'サーリセルカ（カウニスパー山上）',
    airport: 'IVL約30分',
    feature: 'Aurora Glass Cabin 15室・20 m²・北向きの加温ガラス屋根',
    price: '要確認',
    bookingKey: 'starArctic',
    sid: 'stays_ja_igloos_star_arctic',
  },
  {
    name: 'Wilderness Hotel Muotka',
    area: 'サーリセルカとイナリの間',
    airport: 'IVL',
    feature: 'オールスイートのロッジ＋イグルー客室',
    price: '要確認',
    bookingKey: 'muotka',
    sid: 'stays_ja_igloos_muotka',
  },
  {
    name: 'Aurora Village Ivalo',
    area: 'イヴァロ',
    airport: 'IVL約20分',
    feature: 'ガラス屋根キャビン。オーロラ・ウェイクアップサービス',
    price: '300ユーロから（地区の目安）',
    bookingKey: 'auroraVillage',
    sid: 'stays_ja_igloos_aurora_village',
  },
  {
    name: 'Wilderness Hotel Nellim',
    area: 'イナリ湖東岸',
    airport: 'IVL',
    feature: '湖畔ロッジ＋イグルー客室。集落の明かりから離れた立地',
    price: '要確認',
    bookingKey: 'nellim',
    sid: 'stays_ja_igloos_nellim',
  },
  {
    name: 'Wilderness Hotel Inari',
    area: 'イナリ湖畔',
    airport: 'IVL約40分',
    feature: '湖畔ロッジ＋イグルー客室',
    price: '要確認',
    bookingKey: 'wildernessInari',
    sid: 'stays_ja_igloos_wilderness_inari',
  },
  {
    name: 'Arctic SnowHotel & Glass Igloos',
    area: 'ロヴァニエミ（レヒトアホ）',
    airport: 'ロヴァニエミ（RVN）',
    feature: 'グラスイグルー＋毎冬造り直す雪のホテル（12/15開始・室温0〜−5 °C）',
    price: '要確認',
    bookingKey: 'arcticSnowHotel',
    sid: 'stays_ja_igloos_arctic_snowhotel',
  },
  {
    name: 'Apukka Resort',
    area: 'ロヴァニエミ市内から15分',
    airport: 'RVN',
    feature: '湖畔のオーロラキャビン。サファリは敷地内発着',
    price: '要確認',
    bookingKey: 'apukka',
    sid: 'stays_ja_igloos_apukka',
  },
  {
    name: 'Nova Skyland Hotel',
    area: 'ロヴァニエミ（オウナスヴァーラ）',
    airport: 'RVN',
    feature: 'ガラス屋根のアパートメント',
    price: '要確認',
    bookingKey: 'novaSkyland',
    sid: 'stays_ja_igloos_nova_skyland',
  },
  {
    name: 'Levin Iglut (Golden Crown)',
    area: 'レヴィ村から10 km・標高340 m',
    airport: 'キッティラ（KTT）',
    feature: '山上の独立型グラスイグルー。Superior / Prime Superior / Suiteの3クラス',
    price: '350ユーロから（地区の目安）',
    bookingKey: 'levinIglut',
    sid: 'stays_ja_igloos_levin_iglut',
  },
  {
    name: 'Northern Lights Ranch',
    area: 'コンガス（キッティラ）。レヴィ地区として販売',
    airport: 'KTT',
    feature: 'オーロラヴィラ型のキャビン',
    price: '要確認',
    bookingKey: 'northernLightsRanch',
    sid: 'stays_ja_igloos_nl_ranch',
  },
]

// ---------- エリア ----------

type AreaProperty = { name: string; body: string }

const AREAS: {
  id: string
  eyebrow: string
  title: string
  intro: string
  properties: AreaProperty[]
  outro?: string
  ctaLabel: string
  ctaSid: string
  ctaDestination: string
  guideLinks: { to: string; label: string }[]
}[] = [
  {
    id: 'rovaniemi',
    eyebrow: '日程が短い人向け',
    title: 'ロヴァニエミ周辺：空港から近い',
    intro:
      'ロヴァニエミ空港（RVN）はラップランドで最も路線網の広い空港で、市中心まで10 km・15分、空港バスは片道7ユーロです。日程が短い、サンタクロース村もまわりたい、移動を最小にしたい — この条件ならロヴァニエミ周辺で決めるのが合理的です。',
    properties: [
      {
        name: 'Arctic SnowHotel & Glass Igloos（レヒトアホ）',
        body: 'グラスイグルーは秋から、雪のホテルは12月15日から。泊まらずに見たい場合は日中見学もあります（大人35ユーロ・2〜12歳17ユーロ、2026年8月確認）。',
      },
      {
        name: 'Apukka Resort',
        body: '市内から15分の湖畔。ハスキーなどのサファリが敷地内から出発するので、夜の移動が要りません。',
      },
      {
        name: 'Nova Skyland Hotel',
        body: 'オウナスヴァーラ地区のガラス屋根アパートメント。',
      },
    ],
    outro:
      '注意点はひとつ、都市の明かりです。ロヴァニエミ周辺の施設はどこも市街光から離れた立地を選んでいますが、さらに暗い空が欲しい場合は次のエリアへ。',
    ctaLabel: 'ロヴァニエミの空室を検索',
    ctaSid: 'stays_ja_igloos_rovaniemi',
    ctaDestination: 'Rovaniemi, Finland',
    guideLinks: [{ to: '/destinations/rovaniemi', label: 'ロヴァニエミのガイド' }],
  },
  {
    id: 'north',
    eyebrow: '暗さを優先する場合',
    title: 'サーリセルカ・イヴァロ・イナリ：北へ行く',
    intro:
      'イヴァロ空港（IVL）からサーリセルカ村へは南に30 km・約30分、空港バスは片道15〜20ユーロ。イナリ村へは北に約40分です。当サイトの月別ガイドの日照データはロヴァニエミ（北緯66.5度）基準で、サーリセルカとイナリの冬はそれよりさらに暗くなります。オーロラを旅の最優先に置くなら、この暗さが北へ行く理由です。',
    properties: [
      {
        name: 'Kakslauttanen Arctic Resort',
        body: '独立型グラスイグルーの元祖。公式サイトの掲載では、冬の宿泊は朝食・夕食込みで1泊501ユーロから、秋の柔軟レートは278ユーロから（2026年8月確認）。オーロラのピーク期は8〜12カ月前に予約が埋まります。',
      },
      {
        name: 'Star Arctic Hotel',
        body: 'サーリセルカ村を見下ろすカウニスパー山上。Aurora Glass Cabinは15室・20 m²で、加温ガラス屋根は北の空に向けてあります。',
      },
      {
        name: 'Wilderness Hotel Muotka',
        body: 'サーリセルカとイナリの間にあるオールスイートのロッジ。サファリの全プログラムを施設が持っています。',
      },
      {
        name: 'Aurora Village Ivalo',
        body: 'IVLから20分。ガラス屋根のキャビンで、オーロラが出たら知らせるウェイクアップサービスがあります。',
      },
      {
        name: 'Wilderness Hotel Nellim と Wilderness Hotel Inari',
        body: 'どちらもイナリ湖畔。集落の明かりから離れ、凍った湖面の上に180度の空が開けます。',
      },
    ],
    outro:
      'サーリセルカのグラスイグルーの目安は1泊400ユーロから、イナリ地区のオーロラキャビンは300ユーロからです。',
    ctaLabel: 'サーリセルカの空室を検索',
    ctaSid: 'stays_ja_igloos_saariselka',
    ctaDestination: 'Saariselkä, Finland',
    guideLinks: [
      { to: '/destinations/saariselka', label: 'サーリセルカのガイド' },
      { to: '/destinations/inari', label: 'イナリのガイド' },
    ],
  },
  {
    id: 'levi',
    eyebrow: 'スキーと組み合わせる場合',
    title: 'レヴィ：昼はゲレンデ、夜はガラス屋根',
    intro:
      'キッティラ空港（KTT）からレヴィ村へは15 km・15分、空港バスは片道8ユーロ。レヴィはスロープ43本・リフト28基を擁するフィンランド最大のスキーリゾートで、毎年11月にはFISアルペンワールドカップのスラロームがここで開幕します。',
    properties: [
      {
        name: 'Levin Iglut (Golden Crown)',
        body: 'レヴィ村から10 km、標高340 mの山上に立つ独立型グラスイグルー。客室はSuperior / Prime Superior / Suiteの3クラスで、リゾートは2026年9月1日にシーズンを再開します（公式サイト、2026年8月確認）。ピーク週は10〜12カ月前に満室になります。',
      },
      {
        name: 'Northern Lights Ranch',
        body: 'キッティラのコンガス村にあり、レヴィ地区として販売されるオーロラヴィラ型の施設です。',
      },
    ],
    outro:
      'レヴィのグラスイグルーの目安は1泊350ユーロからです。イグルーは「体験」として値付けされているので、全泊をイグルーにするより、村のホテルやシャレーを拠点にイグルーを1〜2泊だけ組み込む構成が現実的です — 昼はゲレンデ、最後の夜だけガラス屋根の下、という順番です。',
    ctaLabel: 'レヴィの空室を検索',
    ctaSid: 'stays_ja_igloos_levi',
    ctaDestination: 'Levi, Finland',
    guideLinks: [{ to: '/destinations/levi', label: 'レヴィのガイド' }],
  },
]

// ---------- どのエリアにするか：三つの質問 ----------

const AREA_QUESTIONS = [
  {
    title: '日程は何泊ですか',
    body: '3泊以下なら、ロヴァニエミ周辺が第一候補です。空港から市内まで15分、路線網が最も広く、移動に食われる時間が最小になります。4泊以上あれば、イヴァロ経由で北（サーリセルカ・イナリ）に行く選択肢が現実的になります。',
  },
  {
    title: '旅の主役はオーロラですか、スキーですか',
    body: 'オーロラが最優先なら北へ — サーリセルカとイナリの冬はロヴァニエミより暗く、湖畔や山上の施設は人工光からも離れています。スキーが主役ならレヴィ一択です。両方欲しい場合は、レヴィで昼ゲレンデ＋山上イグルーという組み合わせか、昼が長くなる3月に北へ行く手があります。',
  },
  {
    title: '予算はどこに置きますか',
    body: '同じ予算でも、全泊を安いイグルーにするのと、通常客室＋1泊だけ上位のイグルーにするのでは、体験の密度が違います。比較するときは「1泊の額面」ではなく、食事と送迎を足した総額で並べてください。カクスラウッタネンの冬料金のように朝・夕食込みの額面もあれば、素泊まりの額面もあるからです。',
  },
]

// ---------- モデル日程 ----------

const MODEL_ITINERARIES = [
  {
    title: '3泊・ロヴァニエミ',
    body: '1〜2泊目は市内またはサンタクロース村周辺で、Arktikum博物館とサファリ。3泊目に郊外のグラスイグルーへ移動して、最後の夜をオーロラ待ちに充てます。',
  },
  {
    title: '4泊・サーリセルカ',
    body: '1〜2泊目は村のホテルで、UKK国立公園のスノーシューとハスキーサファリ（どちらも村発）。3〜4泊目にイグルーへ。イヴァロ発の帰国便は午後が多いので、最終日の朝はゆっくりできます。',
  },
  {
    title: '5泊・レヴィ',
    body: 'スキー3日は村のホテルかシャレー（ゲレンデ徒歩圏）で、最後の1〜2泊だけ山上のLevin Iglutへ。荷物の移動は10 kmなので、レンタカーがなくてもタクシーで済みます。',
  },
]

// ---------- 料金に含まれるか ----------

const INCLUSION_POINTS = [
  {
    title: '夕食',
    body: '村のレストランまで歩ける立地か、施設のレストランしか選択肢がないか。後者なら夕食込みプランの意味が大きくなります。',
  },
  {
    title: '空港送迎',
    body: '含まれるのか、有料オプションか、自力手配か。イヴァロやキッティラは公共交通が薄いので、ここは金額に直結します。',
  },
  {
    title: 'サウナ',
    body: '共用サウナか、客室・棟に専用が付くか。フィンランドの宿ではサウナは想定内の設備ですが、「専用」かどうかで体験は変わります。',
  },
]

// ---------- 予約時期 ----------

const BOOKING_ROWS = [
  { period: 'クリスマス週', body: '12カ月前が目安。グラスイグルーの著名施設はピーク期に8〜12カ月前に満室になります。' },
  { period: '年末年始', body: '10カ月前が目安。' },
  { period: '2月中旬', body: '欧州の学校休暇。6〜8カ月前が目安。' },
  { period: '3月', body: '4〜6カ月前。リピーターが選ぶ月で、暗い夜と長くなった昼が両立します。' },
  { period: '9〜10月', body: 'まだ空きがあり、オーロラと料金のバランスが年間で最も良い時期です。' },
]

// ---------- 曇ったら ----------

const CLOUDY_POINTS = [
  {
    title: '泊数を増やす',
    body: '1泊は賭けですが、2〜3泊にすると確率の問題になります。イグルー泊を旅の後半に置けば、前半の晴れ間を逃したときの保険にもなります。',
  },
  {
    title: '起こしてもらう仕組みを使う',
    body: 'Aurora Village Ivaloのように、オーロラが出たら知らせるウェイクアップサービスを掲げる施設があります。就寝後の出現を逃さないための仕組みなので、あるかどうかを予約前に確認する価値があります。日程を選べるなら、オーロラ・オーバルが春分の頃に最も活発になることも使えます — 3月は統計上、出現率の高い月のひとつです。',
  },
  {
    title: '曇った夜の予定を先に決めておく',
    body: 'サウナ、雪のホテルの見学、施設のディナー — 曇りでも成立する予定をひとつ持っておくと、その夜が「外れ」にならずに済みます。',
  },
]

export default function GlassIgloos() {
  const lang = useLang()
  const to = useLocalePath()

  const rowHref = (row: IglooRow): string | null => {
    const b = PROPERTY_BOOKING[row.bookingKey]
    return b ? propertyLodgingLink(b, row.sid, lang) : null
  }

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        canonicalPath="/glass-igloos"
        ogImage="https://laplandstays.com/og-default.jpg"
        keywords={['グラスイグルー', 'グラスイグルー フィンランド', 'グラスイグルー ラップランド', 'オーロラ ホテル', 'カクスラウッタネン', 'レヴィ イグルー', 'サーリセルカ イグルー', 'ロヴァニエミ イグルー']}
        jsonLd={[localizeArticle(articleJsonLd, seo), breadcrumbJsonLd]}
        hreflangLangs={JA_ONLY}
      />

      {/* Hero: CSS-gradientti (ei kuvaa — uusi sivu, ei kierrätetä toisen sivun heroa) */}
      <section className="relative overflow-hidden bg-night text-white">
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-[#0d2818] via-night to-[#1e1b4b]" />
        <div aria-hidden="true" className="absolute -top-24 left-1/4 w-[36rem] h-[36rem] rounded-full bg-aurora-green/15 blur-3xl" />
        <div aria-hidden="true" className="absolute -bottom-32 right-1/5 w-[30rem] h-[30rem] rounded-full bg-pink/10 blur-3xl" />
        <div className="relative min-h-[62svh] flex items-center justify-center px-4 sm:px-6 pt-24 sm:pt-28 pb-14 sm:pb-16">
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <p className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] uppercase tracking-widest text-white/85 bg-night/45 border border-white/25 rounded-full px-3 py-1 mb-5 max-w-full">
              <Megaphone className="w-3 h-3 shrink-0" aria-hidden="true" />
              <span className="min-w-0">広告リンクを含みます</span>
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl tracking-wide mb-5 [text-shadow:0_2px_18px_rgba(0,0,0,0.75)]">
              ガラスイグルー：ラップランドの施設を料金と場所で比べる
            </h1>
            <p className="text-white/85 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-6 [text-shadow:0_1px_10px_rgba(0,0,0,0.8)]">
              「ガラスイグルー」と呼ばれるものには、1泊250ユーロほどのガラス天井キャビンから1,500ユーロ級のスイートまで含まれます。名前は同じでも、建物の型も、見える空の広さも、料金に入っているものも別物です。このページでは主要な施設を場所・最寄空港・料金の目安で一覧にし、「どのエリアを選ぶか」を旅の条件から逆算します。
            </p>
            <AffiliateDisclosure variant="compact" className="text-white/70 [&>svg]:text-white/70 [text-shadow:0_1px_8px_rgba(0,0,0,0.8)]" />
          </div>
        </div>
      </section>

      <PageBreadcrumb />

      {/* 3つの型 */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3">まず型を知る</p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-night tracking-wide mb-6">ガラスイグルーとは：屋根だけガラスと、全面ガラスの違い</h2>
          <p className="text-charcoal/70 text-lg leading-relaxed mb-10 max-w-3xl">
            ひとことで「ガラスイグルー」と呼ばれるものは、実際には三つに分かれます。1泊250〜1,500ユーロという大きな幅は、この型の違いと、キャビンの規模（2人用の小さなイグルーか、スイート級か）でほぼ説明できます。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TYPE_CARDS.map((card) => {
              const Icon = card.icon
              return (
                <div key={card.title} className="flex flex-col bg-gradient-to-b from-pink/5 to-white border border-pink/10 rounded-2xl p-6">
                  <div className="w-11 h-11 rounded-xl bg-pink/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-pink" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-xl text-night tracking-wide mb-1">{card.title}</h3>
                  <p className="text-pink text-xs font-semibold uppercase tracking-widest mb-3">{card.tagline}</p>
                  <p className="text-charcoal/75 text-[15px] leading-relaxed mb-4">{card.body}</p>
                  <p className="text-charcoal/60 text-[13px] italic leading-relaxed mt-auto">{card.forWho}</p>
                </div>
              )
            })}
          </div>
          <p className="text-charcoal/70 text-[15px] leading-relaxed mt-8 max-w-3xl">
            Arctic SnowHotelは同じ敷地にガラスイグルーと雪のホテルの両方を持つので、二つの違いを一度に確かめられます。分類の全体像は当サイトの
            <Link to={to('/property-types')} className="text-pink font-semibold hover:underline">宿泊タイプ別ガイド</Link>
            と、ネットワークの
            <a href="https://laplandvibes.com/ja/blog/lapland-glass-cabin-categories/" className="text-pink font-semibold hover:underline">ガラスキャビン分類の記事</a>
            （英語）にまとまっています。
          </p>
          <p className="text-charcoal/70 text-[15px] leading-relaxed mt-4 max-w-3xl">
            子ども連れの場合、注意が要るのは雪のホテルのほうです。Arctic SnowHotelは5歳未満の雪の客室での宿泊を推奨していません。ガラスイグルーは暖房のある通常客室ですが、年齢の扱いと添い寝の可否は施設ごとに異なるため、予約時に確認してください。
          </p>
        </div>
      </section>

      {/* 季節 */}
      <section className="py-14 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3">季節</p>
          <h2 className="font-heading text-3xl sm:text-4xl text-night tracking-wide mb-6">ガラスイグルーの季節：雪ではなく、暗さで始まる</h2>
          <p className="text-charcoal/75 text-[15px] sm:text-base leading-relaxed mb-4">
            ガラスイグルーの季節は積雪ではなく、夜の暗さで始まります。オーロラの観測ウィンドウは9月に開いて4月まで続く — これが当サイトの月別ガイドの区分です。施設側の営業もそれに合わせてあり、Levin Iglutは2026年9月1日にリゾートを再開し、Arctic SnowHotelのガラスイグルーも秋から営業します（同じ敷地の雪のホテルだけは12月15日開始）。
          </p>
          <p className="text-charcoal/75 text-[15px] sm:text-base leading-relaxed">
            つまり「雪のラップランド」を待つ必要はありません。9〜10月はルスカ（紅葉）とオーロラの最初の窓が重なり、空室もまだ残っている時期です。逆に6〜7月の白夜には太陽が沈まないため、オーロラは物理的に見えません。8月末に最初の観測ウィンドウが戻ります。夏のガラス天井は「沈まない太陽を見る部屋」になる — それはそれで体験ですが、この記事の読者が探しているものとは別でしょう。
          </p>
        </div>
      </section>

      {/* 施設一覧テーブル */}
      <section className="py-14 sm:py-16 px-4 sm:px-6 bg-gradient-to-b from-white to-pink/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl sm:text-4xl text-night tracking-wide mb-4">施設一覧：場所・最寄空港・1泊の目安</h2>
          <p className="text-charcoal/70 text-[15px] leading-relaxed mb-6 max-w-3xl">
            日本語の紹介記事は3〜5施設で終わることが多いのですが、実際の選択肢はもっと広いです。以下は当サイトが予約パートナー経由で案内している主な施設です。目安料金は時期で大きく動くため、「要確認」の施設は予約カレンダーに日付を入れて確かめてください。
          </p>
          <div className="overflow-x-auto rounded-2xl border border-pink/10 bg-white">
            <table className="w-full min-w-[880px] text-left text-[14px]">
              <thead>
                <tr className="border-b border-pink/10">
                  <th scope="col" className="p-4 font-heading text-base text-night tracking-wide">施設</th>
                  <th scope="col" className="p-4 font-heading text-base text-night tracking-wide">エリア</th>
                  <th scope="col" className="p-4 font-heading text-base text-night tracking-wide">最寄空港と目安</th>
                  <th scope="col" className="p-4 font-heading text-base text-night tracking-wide">タイプと特徴</th>
                  <th scope="col" className="p-4 font-heading text-base text-night tracking-wide">1泊の目安</th>
                  <th scope="col" className="p-4"><span className="sr-only">予約</span></th>
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map((row) => {
                  const href = rowHref(row)
                  return (
                    <tr key={row.sid} className="border-b border-gray-100 last:border-b-0 align-top">
                      <th scope="row" className="p-4 text-night font-semibold text-[14px]">{row.name}</th>
                      <td className="p-4 text-charcoal/80">{row.area}</td>
                      <td className="p-4 text-charcoal/80 whitespace-nowrap">{row.airport}</td>
                      <td className="p-4 text-charcoal/80">{row.feature}</td>
                      <td className="p-4 text-charcoal/80">{row.price}</td>
                      <td className="p-4">
                        {href && (
                          <a
                            href={href}
                            target="_blank"
                            rel="sponsored nofollow noopener"
                            onClick={() => trackAffiliateClick('lodging', row.sid, href)}
                            className="inline-flex items-center gap-1 text-[13px] whitespace-nowrap px-3 py-1.5 rounded-full bg-pink/10 text-pink font-semibold hover:bg-pink hover:text-white transition-colors"
                          >
                            空室を見る
                            <ExternalLink className="w-3 h-3 shrink-0" aria-hidden="true" />
                          </a>
                        )}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <p className="text-charcoal/55 text-[13px] leading-relaxed mt-4 max-w-3xl">
            各行の予約リンクは、その施設の予約ページ（Trip.com）を直接開きます。カクスラウッタネンの料金は公式サイト、Levin Iglutの立地と再開日は公式サイト、Arctic SnowHotelの季節・室温は公式サイトで2026年8月に確認したものです。
          </p>
        </div>
      </section>

      {/* エリア別 */}
      {AREAS.map((area) => {
        const ctaHref = buildAffiliateUrl({ partner: 'hotels', sid: area.ctaSid, destination: area.ctaDestination, lang })
        return (
          <section key={area.id} className="py-16 sm:py-20 px-4 sm:px-6 odd:bg-white even:bg-gradient-to-b even:from-white even:to-pink/5">
            <div className="max-w-4xl mx-auto">
              <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3">{area.eyebrow}</p>
              <h2 className="font-heading text-3xl sm:text-4xl text-night tracking-wide mb-5">{area.title}</h2>
              <p className="text-charcoal/75 text-[15px] sm:text-base leading-relaxed mb-7">{area.intro}</p>
              <div className="space-y-4 mb-7">
                {area.properties.map((p) => (
                  <div key={p.name} className="bg-white border border-pink/10 rounded-2xl p-5">
                    <h3 className="font-heading text-lg text-night tracking-wide mb-1.5">{p.name}</h3>
                    <p className="text-charcoal/75 text-[14px] leading-relaxed">{p.body}</p>
                  </div>
                ))}
              </div>
              {area.outro && (
                <p className="text-charcoal/75 text-[15px] leading-relaxed mb-7">{area.outro}</p>
              )}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                <a
                  href={ctaHref}
                  target="_blank"
                  rel="sponsored nofollow noopener"
                  onClick={() => trackAffiliateClick('lodging', area.ctaSid, ctaHref)}
                  className="inline-flex items-center gap-2 bg-pink hover:bg-pink/90 text-white font-semibold py-3 px-6 rounded-xl transition-colors text-sm"
                >
                  {area.ctaLabel}
                  <ExternalLink className="w-4 h-4 shrink-0" aria-hidden="true" />
                </a>
                {area.guideLinks.map((g) => (
                  <Link key={g.to} to={to(g.to)} className="text-pink font-semibold text-sm hover:underline inline-flex items-center gap-1">
                    {g.label}
                    <ArrowRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      {/* どのエリアにするか：三つの質問 */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-pink/5">
        <div className="max-w-3xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3">選び方の整理</p>
          <h2 className="font-heading text-3xl sm:text-4xl text-night tracking-wide mb-6">どのエリアにするか：三つの質問</h2>
          <p className="text-charcoal/75 text-[15px] sm:text-base leading-relaxed mb-7">
            三つのエリアを見てきたところで、選び方を三つの質問に圧縮します。
          </p>
          <div className="space-y-3">
            {AREA_QUESTIONS.map((pt, i) => (
              <div key={pt.title} className="flex gap-4 p-4 rounded-xl bg-white border border-gray-100">
                <span className="font-heading text-2xl text-pink shrink-0 w-8">{i + 1}</span>
                <div className="min-w-0">
                  <h3 className="font-heading text-lg text-night tracking-wide mb-1">{pt.title}</h3>
                  <p className="text-charcoal/75 text-[14px] leading-relaxed">{pt.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 日本からのアクセス */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3">アクセス</p>
          <h2 className="font-heading text-3xl sm:text-4xl text-night tracking-wide mb-6">日本からのアクセス：ヘルシンキ乗り継ぎと夜行列車</h2>
          <p className="text-charcoal/75 text-[15px] sm:text-base leading-relaxed mb-4">
            ラップランドの3空港（ロヴァニエミRVN・キッティラKTT・イヴァロIVL）への入口はヘルシンキです。ロヴァニエミへはヘルシンキから通年で毎日便があり、冬季にはロンドンやパリなど欧州からの直行便も加わります。キッティラとイヴァロも冬季は欧州直行便を持ちますが、便数はロヴァニエミが群を抜きます。
          </p>
          <p className="text-charcoal/75 text-[15px] sm:text-base leading-relaxed mb-4">
            空港から宿までの目安は、このページの各エリア節のとおりです：RVN→市内15分（バス7ユーロ）、KTT→レヴィ村15分（バス8ユーロ）、IVL→サーリセルカ約30分（バス15〜20ユーロ）・イナリ方面約40分。
          </p>
          <p className="text-charcoal/75 text-[15px] sm:text-base leading-relaxed">
            飛行機以外では、VRの夜行列車がヘルシンキからロヴァニエミまで走ります（寝台約90ユーロ、車両運搬車のオプションあり）。サーリセルカへはロヴァニエミからさらにバスで約4時間なので、北の施設へは素直にイヴァロ便が早いです。イナリ湖畔の施設は上級プランに専用送迎を含むことが多く、そうでない場合の詳しい移動手段は
            <Link to={to('/transport')} className="text-pink font-semibold hover:underline">交通ガイド</Link>
            にまとめてあります。
          </p>
        </div>
      </section>

      {/* モデル日程 */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-pink/5">
        <div className="max-w-3xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3">組み立て方</p>
          <h2 className="font-heading text-3xl sm:text-4xl text-night tracking-wide mb-6">モデル日程：イグルー泊をどこに置くか</h2>
          <p className="text-charcoal/75 text-[15px] sm:text-base leading-relaxed mb-7">
            イグルー泊は旅の「後半」に置くのが定石です。理由は二つ：前半に置くと到着日の疲れでオーロラ待ちができないこと、そして後半に置けば前半の曇りの保険になることです。
          </p>
          <div className="space-y-4">
            {MODEL_ITINERARIES.map((m) => (
              <div key={m.title} className="bg-white border border-pink/10 rounded-2xl p-5">
                <h3 className="font-heading text-lg text-night tracking-wide mb-1.5">{m.title}</h3>
                <p className="text-charcoal/75 text-[14px] leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 料金に何が含まれるか */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3">同じ「1泊」でも中身が違う</p>
          <h2 className="font-heading text-3xl sm:text-4xl text-night tracking-wide mb-6">料金に何が含まれるか：夕食・送迎・サウナ</h2>
          <p className="text-charcoal/75 text-[15px] sm:text-base leading-relaxed mb-4">
            確認できた実例を挙げると：カクスラウッタネンの冬料金は朝食と夕食を含むハーフボードが基本です。サーリセルカでは、カクスラウッタネンとムオトカの上級プランに空港からの専用送迎が含まれます。Arctic SnowHotelの雪のホテルでは、極寒対応の寝袋が室料に含まれています。
          </p>
          <p className="text-charcoal/75 text-[15px] sm:text-base leading-relaxed mb-7">
            ここから一般則として言えるのは、「含まれる範囲は施設だけでなく、同じ施設の料金プランによっても変わる」ということです。予約前に確認する価値があるのは次の三点です。
          </p>
          <div className="space-y-3">
            {INCLUSION_POINTS.map((pt, i) => (
              <div key={pt.title} className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                <span className="font-heading text-2xl text-pink shrink-0 w-8">{i + 1}</span>
                <div className="min-w-0">
                  <h3 className="font-heading text-lg text-night tracking-wide mb-1">{pt.title}</h3>
                  <p className="text-charcoal/75 text-[14px] leading-relaxed">{pt.body}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-charcoal/55 text-[13px] leading-relaxed mt-5">
            この三点をあえて一覧表にしないのは、プラン次第で変わる情報を固定表にすると、この記事のほうが先に古くなるからです。確定情報は必ず各施設の予約ページで確認してください。
          </p>
        </div>
      </section>

      {/* 予約時期 */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-pink/5">
        <div className="max-w-3xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3">タイミング</p>
          <h2 className="font-heading text-3xl sm:text-4xl text-night tracking-wide mb-6">予約時期：ピークは8〜12カ月前</h2>
          <p className="text-charcoal/75 text-[15px] sm:text-base leading-relaxed mb-7">
            ガラスイグルーの著名施設は、ピークシーズンには8〜12カ月前に予約が埋まります。もうひとつの目印として、11月には翌冬ピークのガラスイグルーが埋まり始めます — 「まだ1年先だから」と考えている間に、選べる施設は減っていきます。当サイトの月別データから引くと、目安は次のとおりです。
</p>
          <div className="space-y-3 text-[15px] mb-7">
            {BOOKING_ROWS.map((s) => (
              <div key={s.period} className="flex flex-wrap items-baseline gap-x-3 gap-y-1 p-3 rounded-lg bg-white border border-gray-100">
                <span className="font-heading text-base text-pink shrink-0 w-28 sm:w-32">{s.period}</span>
                <span className="text-charcoal/75 text-[14px] leading-snug min-w-0 basis-full sm:basis-auto sm:flex-1">{s.body}</span>
              </div>
            ))}
          </div>
          <p className="text-charcoal/75 text-[15px] leading-relaxed">
            月ごとの日照・オーロラ・積雪・予約状況の全体像は
            <Link to={to('/when-to-go')} className="text-pink font-semibold hover:underline">ベストシーズンのガイド</Link>
            にまとめてあります。逆に言えば：出発の2〜3カ月前に「12月のガラスイグルー」を探し始めた場合、選択肢はほぼ残っていません。その場合は3月への日程変更が、施設のグレードを下げるより効果的です。
          </p>
        </div>
      </section>

      {/* 曇ったらどうなるか */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3">正直な話</p>
          <h2 className="font-heading text-3xl sm:text-4xl text-night tracking-wide mb-6">曇ったらどうなるか</h2>
          <p className="text-charcoal/75 text-[15px] sm:text-base leading-relaxed mb-7">
            オーロラは晴れた夜にしか見えません。そしてガラスイグルーは、天気を売ることはできません。どの施設も「オーロラが出ること」を料金に含めていない、と考えておくのが正確です。実務的にできることは三つあります。
          </p>
          <div className="space-y-3 mb-7">
            {CLOUDY_POINTS.map((pt, i) => (
              <div key={pt.title} className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                <span className="font-heading text-2xl text-pink shrink-0 w-8">{i + 1}</span>
                <div className="min-w-0">
                  <h3 className="font-heading text-lg text-night tracking-wide mb-1">{pt.title}</h3>
                  <p className="text-charcoal/75 text-[14px] leading-relaxed">{pt.body}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-charcoal/75 text-[15px] leading-relaxed">
            そして正直に書いておくと：曇った夜のガラス天井にも、雪明かりの森という景色があります。それをどう受け取るかは期待値の設定次第です。オーロラの出現時期と確率の考え方は、ネットワークの
            <a href="https://laplandvibes.com/ja/northern-lights/" className="text-pink font-semibold hover:underline">オーロラガイド</a>
            が詳しく扱っています。
          </p>
        </div>
      </section>

      {/* 締めCTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-night text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl tracking-wide mb-4">エリアを決めたら、月を決める</h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            型とエリアが決まれば、残る変数は月だけです。月別の日照・オーロラ・予約状況を確認して、施設の予約カレンダーに日付を入れてください。
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
            <Link
              to={to('/when-to-go')}
              className="bg-pink hover:bg-pink/90 text-white font-semibold py-4 px-6 sm:px-8 rounded-xl transition-colors text-sm tracking-wider text-center"
            >
              ベストシーズンを見る
            </Link>
            <Link
              to={to('/property-types')}
              className="border border-white/30 hover:border-pink/60 text-white hover:text-pink font-semibold py-4 px-6 sm:px-8 rounded-xl transition-colors text-sm tracking-wider text-center"
            >
              宿泊タイプ別ガイド
            </Link>
          </div>
          <p className="text-white/50 text-[12px] leading-relaxed mt-8 max-w-xl mx-auto">
            施設情報の確認日：2026年8月15日。料金・営業期間・サービス内容は変わります。確定情報は各施設の公式サイトと予約ページで確認してください。
          </p>
        </div>
      </section>

      <Newsletter />
    </>
  )
}
