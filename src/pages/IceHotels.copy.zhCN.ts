import type { IceHotelsCopy } from './IceHotels.copy.types'

/**
 * Chinese ice- and snow-hotel page, /cn/ice-hotels: Taiwan Traditional (zh-Hant), the site's /cn/ line
 * since 18.9.2026 (scripts/zh-hant.mjs). Translated from IceHotels.copy.en.ts on 22.10.2026.
 *
 * Terms measured with OpenSEO, Taiwan 2158 / zh-TW, 22.10.2026: 冰屋 1 300/month and 雪屋 880 (generic
 * words), 雪村 170, 冰旅館 50, 瑞典冰旅館 50, 芬蘭冰屋 50, 凱米冰雪城堡 30, 冰屋飯店 20. 冰旅館 alone is the
 * ICEHOTEL in Sweden, so the title leads with 芬蘭冰旅館. The page's own word for snow hotel is 冰雪飯店 and for
 * a snow room 雪屋, as on the glass-igloo page. SnowCastle of Kemi gets 凱米冰雪城堡 in brackets once (measured).
 *
 * Address form: 您, as in this site's zh copy. Same facts as EN, no number EN does not have. The booking
 * partner named in `arctic.ctaNote` is Trip.com, because zh buttons open Trip.com. Property and brand
 * names stay in Latin script; Lainio, Pyhäjärvi and Jukkasjärvi stay Latin as elsewhere in the network.
 */
const zhCN: IceHotelsCopy = {
  seo: {
    title: '芬蘭冰旅館：拉普蘭哪裡能在雪屋過夜',
    description:
      '2026–27年冬季芬蘭拉普蘭的冰雪飯店：羅瓦涅米的Arctic SnowHotel、於拉斯附近的SnowVillage和皮哈的雪屋，另附白天就能參觀的地方。',
  },
  breadcrumbHome: '首頁',
  breadcrumbPage: '芬蘭拉普蘭冰雪飯店',
  keywords: ['芬蘭冰旅館', '冰雪飯店', '冰屋飯店', '芬蘭冰屋', '雪屋', '雪村', 'arctic snowhotel'],
  adBadge: '包含聯盟連結',
  h1: '芬蘭拉普蘭的冰雪飯店',
  lead:
    '2026–27年冬季，芬蘭拉普蘭有三個地方能讓您睡在用雪砌成的房間裡：羅瓦涅米附近的Arctic SnowHotel、於拉斯附近的SnowVillage，以及皮哈附近Lucky Ranch的雪屋。名氣最大的冰旅館ICEHOTEL其實在瑞典。本頁說明每個地方的住宿包含哪些內容，以及不過夜也能參觀的地點。',
  heroAlt: '羅瓦涅米附近Arctic SnowHotel的雪屋套房：冰雕環繞著鋪有毛皮的床，雪牆上刻著一隻展翅的鳥',

  staysEyebrow: '2026–27年冬季',
  staysH2: '可以在雪屋過夜的地方',
  staysIntro:
    '這三處每年冬天都會重建，所以房間、主題和日期年年不同。以下是各家官網針對即將到來的這一季所做的說明。',
  arctic: {
    name: 'Arctic SnowHotel & Glass Igloos',
    place: '羅瓦涅米，Lehtoahontie 27：距市中心與聖誕老人村約26公里（30分鐘），距機場40分鐘',
    facts: [
      '冰雪飯店於2026年12月15日開放，這一季營業到3月31日。',
      '冰雪飯店內的溫度維持在0至−5°C之間。',
      '住宿含專為極寒設計的睡袋和自助式早餐，並可使用溫暖的Snowhotel Lounge和共用的芬蘭桑拿。',
      '雪屋客房從21:00起由您專用。晚餐和從羅瓦涅米出發的接駁包含在度假村的套裝行程中，房價本身不含。',
      '不建議未滿5歲的兒童在此過夜。',
    ],
    glassNote: [
      '同一個度假村也有附暖氣的玻璃屋，9月1日起開放。本站的',
      { to: '/glass-igloos', label: '玻璃屋頁面' },
      '把它和另外十間度假村放在一起比較。',
    ],
    ctaLabel: '查看房價與空房',
    ctaNote: '開啟度假村在我們的訂房合作夥伴Trip.com上的頁面，顯示您旅行日期的房價。',
  },
  snowVillage: {
    name: 'Lapland Hotels SnowVillage',
    place: '基蒂萊的Lainio，於拉斯附近',
    facts: [
      '開放期間為2026年12月25日至2027年4月4日，每天10:00–22:00。',
      '自2001年起，每年都用雪和天然冰從頭打造。2026–27年的主題尚未公佈。',
      '能過夜的只有一間雙人豪華冰套房，以套裝行程販售，內容包括導覽、在冰餐廳享用晚餐、一間附桑拿與熱水浴缸的拉普蘭傳統小屋（kota），以及在溫暖的餐廳吃早餐。這間套房需以電子郵件向SnowVillage預訂，而且套房頁面上寫的仍是2025–26年冬季的內容。',
      '開放時間內，每天都有巴士從萊維和於拉斯開往這裡。',
    ],
  },
  luckyRanch: {
    name: 'Lucky Ranch雪屋',
    place: '佩爾科森涅米的Pyhäjärvi村，距皮哈約10公里',
    facts: [
      '雪屋每年12月重建，屋內溫度始終低於0°C。',
      '您睡在一般的床上，配有保暖睡袋和熱水袋，並附簡單的早餐。',
      '雪屋旁有一間溫暖的休息小屋，牧場酒館裡的廁所和淋浴間整夜開放給雪屋住客使用。',
      '牧場推薦身體健康的大人和小孩入住雪屋，並在自家網站上販售住宿。',
    ],
  },

  nightEyebrow: '訂房之前',
  nightH2: '在雪屋過夜是什麼感覺',
  night: [
    { title: '整夜都在零度以下', body: 'Arctic SnowHotel的房間整夜維持在0至−5°C之間；Lucky Ranch的雪屋則始終低於0°C。寒冷正是重點：有暖氣的房間是玻璃屋，不是冰雪飯店。' },
    { title: '保暖靠睡袋', body: 'Arctic SnowHotel提供專為極寒設計的睡袋，Lucky Ranch則提供保暖睡袋和熱水袋。您不必自備。' },
    { title: '溫暖的地方就在隔壁', body: 'Arctic SnowHotel有溫暖的Snowhotel Lounge和桑拿，Lucky Ranch的雪屋旁則有溫暖的休息小屋。夜裡如果太冷，隨時有地方可去。' },
    { title: '兒童', body: 'Arctic SnowHotel不建議未滿5歲的兒童在雪屋客房過夜。Lucky Ranch推薦身體健康的大人和小孩入住雪屋。SnowVillage沒有說明年齡規定，請在訂房前先詢問。' },
  ],

  visitsEyebrow: '不過夜也能去',
  visitsH2: '白天就能參觀的冰雪景點',
  visitsIntro:
    '不在雪屋過夜，也能走進冰雪打造的空間參觀。Arctic SnowHotel和SnowVillage都有販售日間門票；Snowman World與SnowCastle of Kemi（凱米冰雪城堡）則只能白天參觀。',
  visitHeaders: { name: '地點', place: '位置', season: '開放期間', what: '參觀內容' },
  visits: [
    {
      name: 'Arctic SnowHotel',
      place: '羅瓦涅米，距市中心26公里',
      season: '12月15日–3月31日，每天10:00–20:00',
      what: '日間門票可參觀冰雪藝術、冰教堂、冰餐廳和冰吧；45分鐘的導覽需另外加購。',
    },
    {
      name: 'Lapland Hotels SnowVillage',
      place: '基蒂萊的Lainio',
      season: '2026年12月25日–2027年4月4日，每天10:00–22:00',
      what: '冰雪藝術、冰吧、婚禮場地、雪屋套房、電影院和冰滑梯。門票只在櫃檯販售；導覽需事先預約。',
    },
    {
      name: 'Snowman World',
      place: '聖誕老人村，距羅瓦涅米市中心8公里',
      season: '2026年12月6日–2027年3月17日',
      what: '有各種活動和餐飲的冰雪樂園。這裡不提供過夜住宿。',
    },
    {
      name: 'SnowCastle of Kemi',
      place: '凱米，距凱米-托爾尼奧機場8公里',
      season: '冬季樂園1月–4月初（2027年的日期尚未公佈）；SnowExperience全年開放',
      what: '雪堡本身已經多年沒有再建造，目前也沒有冰雪飯店。室內的SnowExperience全年維持在−5°C。',
    },
  ],

  swedenEyebrow: '小提醒',
  swedenH2: 'ICEHOTEL冰旅館在瑞典',
  swedenBody: [
    '大家說到「冰旅館」，指的往往是瑞典拉普蘭基律納附近、位於Jukkasjärvi的ICEHOTEL。它的冬季飯店從12月開放到4月，ICEHOTEL 365則全年都有冰雪打造的房間。',
    '它不在芬蘭，所以沒有列在上面的清單中。本站介紹的是芬蘭拉普蘭。',
  ],

  nextEyebrow: '溫暖一點的選擇',
  nextH2: '如果冷一晚就夠了',
  next: [
    [
      '玻璃屋是有暖氣的房間，躺在床上就能看到天空。我們在',
      { to: '/glass-igloos', label: '玻璃屋頁面' },
      '比較了11間玻璃屋度假村。',
    ],
    [
      '這一週其餘的日子，可以參考',
      { to: '/cabins', label: '木屋頁面' },
      '：依地區列出拉普蘭各地的出租木屋，並標明到最近村莊的距離。',
    ],
  ],

  checkedNote:
    '各地點資訊已於2026年10月22日在各家官網查核。冰雪飯店每年冬天重建，日期和住宿包含的內容都可能變動，訂房前請以各家官網為準。',
}

export default zhCN
