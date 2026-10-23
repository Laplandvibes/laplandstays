import type { IceHotelsCopy } from './IceHotels.copy.types'

/**
 * アイスホテル・雪のホテル /ja/ice-hotels: translated from the English source on 22.10.2026, です・ます.
 * Measured terms (OpenSEO 22.10.2026, Japan): 氷のホテル 1 000/month, アイスホテル 1 000 (SERP: the Swedish
 * ICEHOTEL and Hokkaido), アークティックスノーホテル 210, スノービレッジ 210, スノーホテル 50. The title (28 chars:
 * Japanese titles are cut at about 30) leads with アイスホテル・氷のホテル and names フィンランド, because アイスホテル
 * alone means Sweden; フィンランド・ラップランド is in the h1, the description and the breadcrumb.
 * Prose uses the glass-igloo page's words: 雪のホテル, グラスイグルー, 送迎, サンタクロース村. Property and brand
 * names stay in Latin script; their katakana search forms appear only in `keywords`.
 * Number gate: EN number words are kanji where idiomatic (三か所, 二人用, 一室); months are written as N月 (locale
 * date format), every other digit is the EN source's. Partner in arctic.ctaNote: Trip.com.
 */
const ja: IceHotelsCopy = {
  seo: {
    title: 'アイスホテル・氷のホテル｜フィンランドで雪の部屋に泊まる',
    description:
      '2026〜27年の冬にフィンランド・ラップランドで泊まれるアイスホテルと雪のホテル。ロヴァニエミのArctic SnowHotel、ユッラス近くのSnowVillage、ピュハ近くの雪のイグルーと、日中の見学先を紹介します。',
  },
  breadcrumbHome: 'ホーム',
  breadcrumbPage: 'フィンランド・ラップランドのアイスホテル',
  keywords: ['アイスホテル フィンランド', 'アイスホテル ラップランド', '氷のホテル', 'アークティックスノーホテル', 'スノービレッジ', 'アイスホテル ロヴァニエミ', 'スノーホテル'],
  adBadge: '広告リンクを含みます',
  h1: 'フィンランド・ラップランドのアイスホテルと雪のホテル',
  lead:
    '2026〜27年の冬、雪で造られた部屋に泊まれる場所は、フィンランド・ラップランドに三か所あります。ロヴァニエミ近郊のArctic SnowHotel、ユッラス近くのSnowVillage、そしてピュハ近くにあるLucky Ranchの雪のイグルーです。最もよく知られたアイスホテルであるICEHOTELは、スウェーデンにあります。このページでは、それぞれの宿泊に何が含まれるかと、泊まらずに見学できる場所を紹介します。',
  heroAlt: 'ロヴァニエミ近郊、Arctic SnowHotelのスノースイート。氷の彫刻に囲まれた、毛皮のブランケットを掛けたベッドと、雪の壁に彫られた翼を広げた鳥',

  staysEyebrow: '2026〜27年の冬',
  staysH2: '雪の中で眠れる場所',
  staysIntro:
    '三か所とも毎冬造り直されるため、客室もテーマも営業期間も年ごとに変わります。以下は、この冬のシーズンについて各施設が公式サイトで案内している内容です。',
  arctic: {
    name: 'Arctic SnowHotel & Glass Igloos',
    place: 'ロヴァニエミ（Lehtoahontie 27）：市中心部とサンタクロース村から約26 km（30分）、空港から40分',
    facts: [
      '雪のホテルは2026年12月15日にオープンし、シーズンは3月31日まで続きます。',
      '雪と氷のホテルの館内温度は、0〜−5 °Cのあいだに保たれます。',
      '宿泊には、極寒対応の寝袋、暖かいSnowhotel Loungeの利用、共用のフィンランド式サウナ、ビュッフェ式の朝食が含まれます。',
      '雪の客室が宿泊者専用になるのは21:00からです。夕食とロヴァニエミからの送迎は、室料ではなく施設のパッケージプランに含まれます。',
      '5歳未満の子どもの宿泊は推奨されていません。',
    ],
    glassNote: [
      '同じ施設には暖房付きのグラスイグルーもあり、こちらは9月1日から営業しています。当サイトの',
      { to: '/glass-igloos', label: 'グラスイグルー比較ページ' },
      'で、ほかの10施設と比較しています。',
    ],
    ctaLabel: '料金と空室を見る',
    ctaNote: '予約パートナーのTrip.comで、この施設のページが開きます。旅行の日程に合わせた料金を確認できます。',
  },
  snowVillage: {
    name: 'Lapland Hotels SnowVillage',
    place: 'キッティラのライニオ（ユッラス近く）',
    facts: [
      '営業期間は2026年12月25日から2027年4月4日まで、毎日10:00〜22:00です。',
      '2001年から毎年、雪と天然氷で一から造られています。2026〜27年のテーマはまだ発表されていません。',
      '宿泊できるのは二人用のラグジュアリー・アイススイート一室だけで、ガイドツアー、アイスレストランでの夕食、サウナとホットタブ付きのコタ（小屋）、暖かいレストランでの朝食がセットになったパッケージとして販売されています。予約はSnowVillageへのメールで受け付けていますが、スイートの案内ページはまだ2025〜26年の冬の内容のままです。',
      '営業時間中は、レヴィとユッラスから毎日バスが運行しています。',
    ],
  },
  luckyRanch: {
    name: 'Lucky Ranchの雪のイグルー',
    place: 'ペルコセンニエミのピュハヤルヴィ村、ピュハから約10 km',
    facts: [
      '雪のイグルーは毎年12月に造り直され、室内は常に0 °Cを下回ります。',
      '眠るのは通常のベッドで、暖かい寝袋と湯たんぽが用意されます。軽い朝食付きです。',
      'イグルーの隣には暖かいベースキャンプがあり、敷地内のサルーンにあるトイレとシャワーは、イグルーの宿泊客なら一晩中使えます。',
      'Lucky Ranchはこのイグルーを健康な大人と子どもに勧めており、宿泊は自社サイトで販売しています。',
    ],
  },

  nightEyebrow: '予約の前に',
  nightH2: '雪の中で過ごす一夜とは',
  night: [
    { title: '室温は氷点下のまま', body: 'Arctic SnowHotelの客室は一晩中0〜−5 °C、Lucky Ranchでは常に0 °Cを下回ります。この寒さこそが体験の中身です。暖房の効いた部屋なら、それは雪のホテルではなくグラスイグルーです。' },
    { title: '暖かさは寝袋が頼り', body: 'Arctic SnowHotelでは極寒対応の寝袋が、Lucky Ranchでは暖かい寝袋と湯たんぽが用意されています。自分で持っていく必要はありません。' },
    { title: 'すぐ隣に暖かい部屋がある', body: 'Arctic SnowHotelには暖かいSnowhotel Loungeとサウナが、Lucky Ranchにはイグルーの隣に暖かいベースキャンプがあります。夜中に寒さがつらくなっても、移れる場所があります。' },
    { title: '子ども連れの場合', body: 'Arctic SnowHotelは、5歳未満の子どもが雪の客室に泊まることを推奨していません。Lucky Ranchは、健康な大人と子どもにイグルーを勧めています。SnowVillageは年齢に関する規定を案内していないので、予約の前に問い合わせてください。' },
  ],

  visitsEyebrow: '宿泊しなくても',
  visitsH2: '日中に見学できる雪と氷の施設',
  visitsIntro:
    '泊まらなくても、雪と氷でできた部屋を歩いて見て回ることはできます。Arctic SnowHotelとSnowVillageは日中の入場券を販売しており、Snowman WorldとSnowCastle of Kemiは日中の見学のみです。',
  visitHeaders: { name: '施設', place: '場所', season: '営業期間', what: '見られるもの' },
  visits: [
    {
      name: 'Arctic SnowHotel',
      place: 'ロヴァニエミ（中心部から26 km）',
      season: '12月15日〜3月31日、毎日10:00〜20:00',
      what: '日中の入場券で、雪と氷のアート、アイスチャペル、アイスレストラン、アイスバーを見学できます。45分のガイドツアーは追加で選べます。',
    },
    {
      name: 'Lapland Hotels SnowVillage',
      place: 'キッティラのライニオ',
      season: '2026年12月25日〜2027年4月4日、毎日10:00〜22:00',
      what: '雪と氷のアート、アイスバー、結婚式用のスペース、スノースイート、映画館、氷の滑り台があります。入場券は受付でのみ販売され、ガイドツアーは事前予約制です。',
    },
    {
      name: 'Snowman World',
      place: 'サンタクロース村（ロヴァニエミ中心部から8 km）',
      season: '2026年12月6日〜2027年3月17日',
      what: 'アクティビティや飲食も楽しめる雪と氷のパークです。宿泊の取り扱いはありません。',
    },
    {
      name: 'SnowCastle of Kemi',
      place: 'ケミ（ケミ・トルニオ空港から8 km）',
      season: 'ウィンターパークは1月〜4月上旬（2027年の日程は未発表）、SnowExperienceは通年',
      what: '雪の城そのものは何年も建てられておらず、現在は雪のホテルもありません。屋内のSnowExperienceは、一年中−5 °Cに保たれています。',
    },
  ],

  swedenEyebrow: '知っておきたいこと',
  swedenH2: 'ICEHOTELはスウェーデンにあります',
  swedenBody: [
    '「アイスホテル」という言葉は、多くの場合、スウェーデン・ラップランドのキルナ近郊、ユッカスヤルヴィにあるICEHOTELを指します。冬のホテルは12月から4月まで営業し、ICEHOTEL 365には一年中泊まれる氷と雪の客室があります。',
    'フィンランドにはないため、上の一覧には入れていません。当サイトが扱うのはフィンランド・ラップランドです。',
  ],

  nextEyebrow: 'もっと暖かい選択肢',
  nextH2: '寒い夜は一晩で十分という方へ',
  next: [
    [
      'グラスイグルーは、ベッドの上に空が広がる暖房付きの客室です。当サイトの',
      { to: '/glass-igloos', label: 'グラスイグルー比較ページ' },
      'では、グラスイグルーの11施設を比べています。',
    ],
    [
      '残りの日程の宿は、',
      { to: '/cabins', label: 'コテージのページ' },
      'で探せます。ラップランドの各エリアの貸コテージを、最寄りの村までの距離とともに掲載しています。',
    ],
  ],

  checkedNote:
    '情報は2026年10月22日に各施設の公式サイトで確認しました。雪のホテルは毎冬造り直されるため、営業期間や宿泊に含まれる内容は変わることがあります。予約の前に、各施設の公式ページで確認してください。',
}

export default ja
