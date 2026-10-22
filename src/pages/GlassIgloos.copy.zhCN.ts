import type { GlassIgloosCopy } from './GlassIgloos.copy.types'

/**
 * Chinese glass-igloo page, /cn/glass-igloos: Taiwan Traditional (zh-Hant), the site's /cn/ line
 * since 18.9.2026 (scripts/zh-hant.mjs). Translated from GlassIgloos.copy.en.ts on 22.10.2026.
 *
 * Title and h1 lead with the measured head term. OpenSEO, Taiwan 2158 / zh-TW, 18.9. + 22.10.2026:
 * 芬蘭玻璃屋 480/month, 極光玻璃屋 210, 芬蘭極光玻璃屋 170, 羅瓦涅米玻璃屋 50, kakslauttanen 140.
 * The site's word for glass igloo is 玻璃屋 (measured; TW_TERMS rewrites the other forms).
 *
 * Address form: 您, as in this site's existing zh copy (Cabins, locales). Same facts as EN, no number
 * EN does not have; no stored prices. The booking partner named in `tableNote` is Trip.com, because
 * zh buttons open Trip.com. Resort and room-type names stay in Latin script, as the reader sees them
 * at the booking partner.
 */
const zhCN: GlassIgloosCopy = {
  seo: {
    title: '芬蘭玻璃屋：拉普蘭11間度假村比較',
    description:
      '比較芬蘭拉普蘭的極光玻璃屋：羅瓦涅米、薩利色爾卡、伊納里與萊維共11間度假村，一次看懂各家最近的機場、房型，以及該在什麼時候預訂。',
  },
  breadcrumbHome: '首頁',
  breadcrumbPage: '芬蘭玻璃屋',
  keywords: ['芬蘭玻璃屋', '極光玻璃屋', '芬蘭極光玻璃屋', '羅瓦涅米玻璃屋', '拉普蘭玻璃屋', 'kakslauttanen', 'aurora cabin'],
  adBadge: '包含聯盟連結',
  h1: '芬蘭玻璃屋',
  lead:
    '在芬蘭拉普蘭，「玻璃屋」可能是一間只住得下兩三人的小屋，也可能是一棟與玻璃屋相連的原木小屋。名字一樣，建築本身、床上方那片天空的大小，以及房價包含的內容卻各不相同。本頁依地區、最近機場與房型列出11間度假村，幫您挑出最適合這趟旅程的地區。',
  heroAlt: '薩利色爾卡Kakslauttanen Arctic Resort的玻璃屋，位在積雪的森林中，兩個人走在小徑上',

  typesEyebrow: '先認識類型',
  typesH2: '什麼才算玻璃屋',
  typesIntro:
    '在拉普蘭，以「igloo」（冰屋）之名販售的住宿，其實是三種不同的東西。住起來舒不舒適，差別主要來自類型和房間大小：是兩三人住的小型玻璃屋，還是一家人住的小屋。',
  typeCards: [
    {
      title: '獨棟玻璃屋',
      tagline: '小型圓頂屋或小屋，整個屋頂都是玻璃',
      body: '獨自立在雪地上、有暖氣的小屋，床的上方是玻璃，牆面也常是玻璃。薩利色爾卡的Kakslauttanen Arctic Resort和萊維附近的Golden Crown Levin Iglut都屬於這一類。躺在床上就看得到天空。',
      forWho: '適合：來追極光的情侶，以及想躺在床上拍照的人。',
    },
    {
      title: '玻璃屋頂小屋或客房',
      tagline: '屋頂有玻璃的小屋或飯店客房',
      body: '一般的小屋或飯店客房，只有部分屋頂是玻璃。Wilderness Hotels把旗下這類小屋稱為Aurora Cabins，配有可加熱的玻璃屋頂；考尼斯帕山上的Star Arctic Hotel，則在床的上方裝了三片式玻璃屋頂。這類房間的玻璃面積通常較小，保暖、遮光與隱私可能比較容易兼顧。',
      forWho: '適合：重視舒適度的旅客，以及住得比較久的行程。',
    },
    {
      title: '雪屋（冰雪飯店）',
      tagline: '名稱相近，卻是另一種產品',
      body: '用冰雪砌成、每年冬天重建的房間，室溫維持在0至−5°C之間。羅瓦涅米附近Arctic SnowHotel & Glass Igloos的冰雪飯店每年12月15日開放，提供專為極寒設計的睡袋，並不建議未滿5歲的兒童過夜。玻璃屋是能看見天空的溫暖房間；在這裡，寒冷的夜晚本身就是體驗。',
      forWho: '適合：想體驗一晚冒險的人。對多數人來說，住一晚就夠了。',
    },
  ],
  typesNote: [
    'Arctic SnowHotel在同一個度假村裡同時有玻璃屋和冰雪飯店，兩種都能體驗。想瞭解拉普蘭所有的住宿類型，請參考本站的',
    { to: '/property-types', label: '住宿類型指南' },
    '，以及LaplandVibes上',
    { href: 'https://laplandvibes.com/cn/blog/lapland-glass-cabin-categories/', label: '拉普蘭玻璃屋分類' },
    '這篇文章。',
  ],
  kidsNote:
    '帶孩子出遊時，最需要留意的是冰雪飯店：Arctic SnowHotel不建議未滿5歲的兒童在雪屋客房過夜。玻璃屋是有暖氣的房間，但年齡規定以及孩子能否與大人同床，各度假村不同，訂房時請先詢問。',

  seasonEyebrow: '季節',
  seasonH2: '玻璃屋季節始於黑夜，而非白雪',
  seasonBody: [
    '玻璃屋的季節跟著漆黑的夜晚走，而不是跟著雪。依本站的逐月指南，極光季從9月延續到4月，部分度假村也配合這段期間開放：Levin Iglut和Arctic SnowHotel的玻璃屋都從9月1日開始營業。只有冰雪飯店要等到12月15日。',
    '所以不必等到下雪。9月和10月，秋色與當季最早的極光之夜同時登場，而且還訂得到房。6月到7月中旬太陽不會落下，完全看不到極光。夏天躺在玻璃屋頂下，看到的是午夜陽光，那是另一種體驗，但多半不是您此行想要的。',
  ],

  tableH2: '度假村一覽：地區、機場與房型',
  tableIntro: '下表列出本站透過訂房合作夥伴連結的11間度假村，下方各段再依地區分別介紹。',
  tableHeaders: { name: '度假村', area: '地區', airport: '最近機場', feature: '房型', book: '預訂' },
  bookLabel: '檢視空房',
  rows: {
    kakslauttanen: {
      name: 'Kakslauttanen Arctic Resort',
      area: '薩利色爾卡，村莊以南10公里',
      airport: '伊瓦洛（IVL），35公里，約30分鐘',
      feature: '最多可住3人或5人的玻璃屋，以及Kelo-Glass Igloo：原木小屋與玻璃屋相連',
    },
    starArctic: {
      name: 'Star Arctic Hotel',
      area: '薩利色爾卡，考尼斯帕山頂',
      airport: '伊瓦洛（IVL）',
      feature: '20 m²的Aurora Glass Cabin，床的上方有三片式玻璃屋頂',
    },
    muotka: {
      name: 'Wilderness Hotel Muotka',
      area: '薩利色爾卡附近',
      airport: '伊瓦洛（IVL），約45分鐘',
      feature: '30 m²的Aurora Cabin，最多可住4人，玻璃屋頂可加熱',
    },
    auroraVillage: {
      name: 'Aurora Village Ivalo',
      area: '伊瓦洛',
      airport: '伊瓦洛（IVL），15分鐘',
      feature: '28 m²的玻璃屋頂Aurora Cabin，可透過App接收極光通知',
    },
    nellim: {
      name: 'Wilderness Hotel Nellim',
      area: '內利姆（Nellim），伊納里湖畔',
      airport: '伊瓦洛（IVL），約45分鐘',
      feature: '玻璃屋頂可加熱的Aurora Cabin，以及湖畔別墅',
    },
    wildernessInari: {
      name: 'Wilderness Hotel Inari',
      area: '伊納里湖畔，距伊納里村5分鐘',
      airport: '伊瓦洛（IVL），約45分鐘',
      feature: '29 m²的Aurora Cabin，最多可住4人，玻璃屋頂可加熱',
    },
    arcticSnowHotel: {
      name: 'Arctic SnowHotel & Glass Igloos',
      area: '萊赫托耶爾維（Lehtojärvi），距羅瓦涅米市中心30分鐘',
      airport: '羅瓦涅米（RVN），40分鐘',
      feature: '有暖氣的玻璃屋，9月1日起開放；以及每年冬天重建的冰雪飯店（12月15日起，0至−5°C）',
    },
    apukka: {
      name: 'Apukka Resort',
      area: '羅瓦涅米，距市中心18公里（15分鐘）',
      airport: '羅瓦涅米（RVN），10公里',
      feature: '全景玻璃屋頂可加熱的Aurora Cabin，以及擁有360°視野的玻璃屋套房',
    },
    santasIgloosArcticCircle: {
      name: 'Santa’s Igloos Arctic Circle',
      area: '羅瓦涅米聖誕老人村',
      airport: '羅瓦涅米（RVN），5公里',
      feature: '71間玻璃屋，玻璃天花板可加熱',
    },
    levinIglut: {
      name: 'Golden Crown Levin Iglut',
      area: '萊維，距村莊10公里，海拔340公尺',
      airport: '基蒂萊（KTT），15分鐘',
      feature: 'Superior、Prime Superior與Suite等級的玻璃屋',
    },
    northernLightsRanch: {
      name: 'Northern Lights Ranch',
      area: '孔加斯（Köngäs），距萊維15公里',
      airport: '基蒂萊（KTT），30公里',
      feature: 'Sky View Cabins：冰屋造型的小屋，玻璃屋頂可加熱，共有六種風格',
    },
  },
  tableNote:
    '每一列都會開啟該度假村在我們的訂房合作夥伴Trip.com上的頁面，顯示您旅行日期的房價與空房。玻璃屋的房價每週變動很大，所以本頁不列出。各度假村的距離、車程與房型資訊取自各家官網，機場距離則取自Finavia，查核日期為2026年10月18日。',

  areas: {
    rovaniemi: {
      eyebrow: '適合短天數行程',
      title: '羅瓦涅米周邊：離機場近',
      intro:
        '羅瓦涅米機場（RVN）距市中心10公里。如果您的行程較短、還想順道去聖誕老人村，或希望盡量少花時間在交通接駁上，選羅瓦涅米周邊的玻璃屋最實際。',
      properties: [
        {
          name: 'Arctic SnowHotel & Glass Igloos（萊赫托耶爾維）',
          body: '玻璃屋9月1日起開放，冰雪飯店12月15日起開放；距市中心30分鐘，距機場40分鐘。度假村將極光警報列為玻璃屋的設施之一。',
        },
        {
          name: 'Apukka Resort',
          body: '度假村距市中心18公里（15分鐘），距機場10公里。Aurora Cabin配有可加熱的全景玻璃屋頂；Kammi和Komsio玻璃屋套房則擁有360°視野。',
        },
        {
          name: 'Santa’s Igloos Arctic Circle',
          body: '位於聖誕老人村，距機場5公里：共有71間玻璃屋，玻璃天花板可加熱。',
        },
      ],
      outro:
        '唯一需要考量的是城市的光害。羅瓦涅米周邊的度假村都離市中心有段距離，但若想要更暗的夜空，就再往北走。',
      ctaLabel: '搜尋羅瓦涅米住宿',
      guideLinks: [{ to: '/destinations/rovaniemi', label: '羅瓦涅米指南' }],
    },
    north: {
      eyebrow: '若以暗夜為優先',
      title: '薩利色爾卡、伊瓦洛與伊納里：往北走',
      intro:
        '伊瓦洛機場（IVL）距薩利色爾卡25公里，距伊瓦洛中心11公里。伊納里位置更北：Wilderness Hotels表示，從機場到旗下伊納里與內利姆的飯店約45分鐘。本站逐月指南中的日照資料以羅瓦涅米（北緯66.5°）為準，而薩利色爾卡和伊納里的冬天還要更暗。如果極光是此行的主要目的，這就是往北走的理由。',
      properties: [
        {
          name: 'Kakslauttanen Arctic Resort',
          body: '度假村位於薩利色爾卡村以南10公里，距伊瓦洛機場35公里（約30分鐘）。提供最多可住3人或5人的玻璃屋，以及原木小屋與玻璃屋相連的Kelo-Glass Igloo。其中一種冬季房價含早餐和晚餐。',
        },
        {
          name: 'Star Arctic Hotel',
          body: '位於薩利色爾卡的考尼斯帕山頂。Aurora Glass Cabin面積20 m²，可住兩位大人和一名11歲以下的兒童，床的正上方就是三片式玻璃屋頂。',
        },
        {
          name: 'Wilderness Hotel Muotka',
          body: '位於薩利色爾卡附近，距伊瓦洛機場約45分鐘。Aurora Cabin面積30 m²，最多可住四人，玻璃屋頂可加熱。',
        },
        {
          name: 'Aurora Village Ivalo',
          body: '位於伊瓦洛，距機場15分鐘。28 m²的玻璃屋頂Aurora Cabin，並可透過App接收極光通知。',
        },
        {
          name: 'Wilderness Hotel Nellim與Wilderness Hotel Inari',
          body: '兩家都在伊納里湖畔，距伊瓦洛機場約45分鐘。Wilderness Hotel Inari距伊納里村五分鐘；內利姆則是另一座獨立的村莊。兩家都有玻璃屋頂可加熱的Aurora Cabin。',
        },
      ],
      ctaLabel: '搜尋薩利色爾卡住宿',
      guideLinks: [
        { to: '/destinations/saariselka', label: '薩利色爾卡指南' },
        { to: '/destinations/inari', label: '伊納里指南' },
      ],
    },
    levi: {
      eyebrow: '如果也想滑雪',
      title: '萊維：白天上雪道，夜裡睡在玻璃屋頂下',
      intro: '基蒂萊機場（KTT）距萊維15公里。如果滑雪是行程主軸，玻璃屋是最後的犒賞，就選萊維。',
      properties: [
        {
          name: 'Golden Crown Levin Iglut',
          body: '玻璃屋距萊維村10公里，海拔340公尺，距基蒂萊機場15分鐘。共有三種房型等級：Superior、Prime Superior與Suite。2026–27年的玻璃屋季從9月1日到4月13日；9月和10月只在週二至週六營業。',
        },
        {
          name: 'Northern Lights Ranch',
          body: '位於孔加斯，距萊維15公里，距基蒂萊機場30公里。Sky View Cabins是冰屋造型的小屋，玻璃屋頂可加熱，共有六種風格。',
        },
      ],
      outro:
        '住玻璃屋比較像是犒賞，而不是一整週的落腳處，所以很少有必要每晚都住在玻璃屋裡。不妨住在村裡或雪道旁的木屋，最後再加一兩晚玻璃屋：白天滑雪，最後一晚睡在玻璃下。',
      ctaLabel: '搜尋萊維住宿',
      guideLinks: [{ to: '/destinations/levi', label: '萊維指南' }],
    },
  },

  questionsEyebrow: '怎麼選',
  questionsH2: '選哪個地區：三個問題',
  questionsIntro: '三個地區擺在眼前，選擇就取決於三個問題。',
  questions: [
    {
      title: '您打算住幾晚？',
      body: '三晚以內，先從羅瓦涅米考慮：接駁時間最短，花在交通上的時間也最少。四晚以上，就可以考慮飛伊瓦洛，再往北到薩利色爾卡或伊納里。',
    },
    {
      title: '這趟是為了極光，還是為了滑雪？',
      body: '以極光為優先，就往北走：薩利色爾卡和伊納里的冬天比羅瓦涅米更暗。以滑雪為優先，就選萊維。兩者都想要的話，可以在萊維滑雪一週，再到Golden Crown Levin Iglut住一兩晚；或是在白天較長的3月往北走。',
    },
    {
      title: '預算要花在哪裡？',
      body: '同樣的預算，花法不同，旅程就不同：每晚都住較便宜的玻璃屋，或是其餘幾晚住一般客房，再加一晚較好的玻璃屋。請比較含餐費與接駁的總花費，而不是每晚房價。例如Kakslauttanen就有含早餐和晚餐的冬季房價，所以要確認每種房價包含哪些項目。',
    },
  ],

  cabinCombo: {
    eyebrow: '簡單的安排',
    h2: '玻璃屋住一兩晚，其餘幾天住木屋',
    body: '住玻璃屋比較適合當作犒賞，而不是一整週的落腳處。規劃拉普蘭行程的一種方式，是在玻璃屋住一兩晚，這一週其餘的時間則租住同一地區的木屋：全團都住得下，這一週也能有自己的桑拿和廚房。本站依地區列出各地的出租木屋，並標明到最近村莊的距離。',
    linkLabel: '依地區瀏覽拉普蘭木屋',
  },

  accessEyebrow: '如何抵達',
  accessH2: '如何抵達：航班、夜車與接駁',
  access: [
    [
      '本頁的玻璃屋度假村由三座機場服務：羅瓦涅米（RVN）、前往萊維的基蒂萊（KTT），以及前往薩利色爾卡與伊納里的伊瓦洛（IVL）。羅瓦涅米全年都有從赫爾辛基出發的航班。冬季時，這三座機場還有來自多個歐洲城市的直飛航班，但航線每年都會變動，請查看您出發機場的航線。',
    ],
    [
      '到各度假村的接駁時間，請見上方各地區的介紹。供參考：RVN距羅瓦涅米市中心10公里，KTT距萊維15公里，IVL距薩利色爾卡25公里。',
    ],
    [
      '不搭飛機的話，VR的夜車從赫爾辛基開往羅瓦涅米，也能託運您的車。從羅瓦涅米搭巴士到薩利色爾卡還要約四小時，所以要去北部的度假村，飛伊瓦洛比較快。有些度假村有販售機場接送，可能包含在套裝行程中，也可能需要另外加購；其他選項請見本站的',
      { to: '/transport', label: '交通指南' },
      '。',
    ],
  ],

  itinerariesEyebrow: '行程規劃',
  itinerariesH2: '行程範例：玻璃屋排在哪幾晚',
  itinerariesIntro:
    '建議把玻璃屋排在旅程的後半段，原因有二：第一晚舟車勞頓，比較難熬夜等極光；而前幾晚如果陰天，後面的夜晚就是備案。',
  itineraries: [
    {
      title: '羅瓦涅米3晚',
      body: '第一晚住市區或聖誕老人村附近，參觀Arktikum博物館，再參加一趟野外探險行程。第二、三晚住到城外的玻璃屋，把最後一晚留給極光。',
    },
    {
      title: '薩利色爾卡4晚',
      body: '第一、二晚住村裡的飯店，到烏爾霍·凱科寧國家公園雪鞋健行，再參加哈士奇雪橇之旅，兩項活動都從村裡出發。第三、四晚住玻璃屋。',
    },
    {
      title: '萊維5晚',
      body: '先以村裡的飯店或雪道旁的木屋為據點滑雪三天，最後一兩晚再住Golden Crown Levin Iglut。兩地相距10公里，搭計程車就夠了，不必租車。',
    },
  ],

  inclusionsEyebrow: '同樣一晚，房價不同',
  inclusionsH2: '房價包含什麼：晚餐、接駁、桑拿',
  inclusionsBody: [
    '以下是我們能在各度假村官網確認的例子：Kakslauttanen有含早餐和晚餐的冬季房價。在Kakslauttanen，只有Luxury Kelo-Glass Igloo的房價包含私人機場接送；Wilderness Hotel Muotka為期三晚的Aurora Adventure Break則包含伊瓦洛機場的接送。Arctic SnowHotel的雪屋客房附有專為極寒設計的睡袋。',
    '房價包含哪些內容，取決於您選的房價方案，而不只是度假村本身。訂房前值得確認三件事：',
  ],
  inclusions: [
    {
      title: '晚餐',
      body: '能不能走路到村裡的餐廳，或者度假村自己的餐廳就是唯一的選擇？如果是唯一的選擇，含晚餐的房價就更重要。',
    },
    {
      title: '機場接送',
      body: '已包含、需付費加購，還是得自己安排？伊瓦洛和基蒂萊的大眾運輸班次很少，這會影響總花費。',
    },
    {
      title: '桑拿',
      body: '共用桑拿，還是房間或小屋裡有私人桑拿？芬蘭的住宿普遍都有桑拿，但有沒有私人桑拿，住起來的感受就不一樣。',
    },
  ],
  inclusionsNote:
    '我們刻意不把這三項做成固定表格：它們會隨房價方案而變，固定的表格會比度假村自己的頁面更快過時。請務必在度假村的訂房頁面上確認。',

  bookingEyebrow: '時機',
  bookingH2: '何時訂房：旺季週次請提前8–12個月',
  bookingIntro:
    '旺季週次的Kakslauttanen和Levin Iglut，要提前8–12個月預訂。到了11月，隔年旺季週次的玻璃屋就已陸續被訂走，所以早在跨年之前，選擇就已越來越少。依本站逐月指南：',
  bookingRows: [
    { period: '聖誕週', body: '約提前12個月。' },
    { period: '新年', body: '約提前10個月。' },
    { period: '2月中旬', body: '歐洲學校假期。約提前6–8個月。' },
    { period: '3月', body: '提前4–6個月。回頭客最愛的月份：夜晚夠暗，白天又夠長。' },
    { period: '9月至10月', body: '仍有空房，也是整季極光與價格最平衡的時候。' },
  ],
  bookingOutro: [
    '每個月的日照、極光、積雪與訂房情況，完整整理在',
    { to: '/when-to-go', label: '何時前往指南' },
    '中。如果出發前兩三個月才開始找12月的玻璃屋，剩下的選擇會非常少。這時把行程改到3月，通常比改訂別家度假村更有幫助。',
  ],

  cloudyEyebrow: '老實說',
  cloudyH2: '遇到陰天怎麼辦？',
  cloudyIntro:
    '只有在晴朗的夜晚才看得到極光，而玻璃屋沒辦法把好天氣賣給您。沒有任何度假村的房價包含極光。您能做的實際準備有三項。',
  cloudy: [
    {
      title: '不要只訂一晚',
      body: '只住一晚是在碰運氣；住兩三晚，機會就會提高。把玻璃屋排在行程後段，前幾晚如果陰天，就還有機會再看。',
    },
    {
      title: '善用極光通知',
      body: '有些度假村會在極光出現時發出通知：Aurora Village Ivalo透過App通知，Arctic SnowHotel則在玻璃屋的設施中列出極光警報。訂房前請先確認您選的度假村有沒有這項服務。如果您的旅行日期有彈性，春分和秋分前後的極光往往較活躍，所以3月是不錯的月份。',
    },
    {
      title: '事先規劃陰天的夜晚',
      body: '享受桑拿、在度假村吃頓晚餐、到戶外散散步：準備一個陰天也行得通的計畫，這一晚就不會覺得白白浪費。',
    },
  ],
  cloudyOutro: [
    '即使是陰天，您依然躺在玻璃下溫暖的床上；冬天時，周圍還有被雪映亮的樹林。這種感受如何，取決於您原本的期待。極光何時最可能出現、機率有多高，請參考LaplandVibes的',
    { href: 'https://laplandvibes.com/cn/northern-lights/', label: '極光指南' },
    '。',
  ],

  ctaH2: '先選地區，再選月份',
  ctaBody:
    '確定了類型和地區，剩下的就只有月份。先查看每個月的日照、極光與訂房情況，再把您的旅行日期填進度假村的訂房日曆。',
  ctaPrimary: '何時前往',
  ctaSecondary: '住宿類型',
  checkedNote:
    '各度假村資訊已於2026年10月18日在各家官網查核。營業季節、房型與房價包含的內容都可能變動，請以度假村官網及訂房頁面為準。',
}

export default zhCN
