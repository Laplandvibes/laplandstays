import type { RovaniemiHotelsCopy } from './Rovaniemi.hotels.types'

/**
 * Rovaniemi hotels by area, Chinese: Taiwan Traditional (zh-Hant), the site's /cn/ line since 18.9.2026
 * (scripts/zh-hant.mjs). Translated from Rovaniemi.hotels.en.ts on 22.10.2026: same facts and numbers,
 * none added. Hotel and room-type names stay in Latin script, as the reader sees them at the booking
 * partner. Address form 您, as in GlassIgloos.copy.zhCN.ts. Rivers use this page's own zh forms
 * (Kemijoki = 克米河, Ounasjoki = 奧納斯河); Ounasvaara山, streets and Oikarainen stay Latin.
 */
const zhCN: RovaniemiHotelsCopy = {
  intro: '四個地區共20間飯店。點選飯店名稱，即可開啟該飯店在我們訂房合作夥伴網站上的專屬頁面，顯示您旅行日期的房價。',
  groups: [
    {
      title: '市中心',
      items: [
        { key: 'arcticLight', note: '羅瓦涅米的舊市政廳，建於1949年，現為擁有57間客房的精品飯店，部分客房附私人桑拿。' },
        { key: 'scandicRovaniemiCity', note: '位於Koskikatu，緊鄰購物中心；機場巴士就停在飯店門口，Superior Sauna客房附私人桑拿。' },
        { key: 'scandicPohjanhovi', note: '位於克米河畔，許多客房可眺望河景；冬季時，雪上摩托車路線就從飯店門外出發。' },
        { key: 'arcticCityHotel', note: '位於Pekankatu，共90間客房。所有房價皆含早餐、桑拿、停車與Wi-Fi，機場巴士站距飯店300公尺。' },
        { key: 'sokosVaakuna', note: '位於Koskikatu，共159間客房，共用桑拿每晚開放。' },
        { key: 'santasHotelSantaClaus', note: '位於市中心的Korkalonkatu，距機場約10公里，飯店設有自己的桑拿設施。' },
        { key: 'postmasterHotel', note: '由1950年代的郵局建築修復而成，共49間客房；部分套房附小廚房和桑拿。' },
        { key: 'hotelAakenus', note: '家族經營，位於安靜的區域，步行一小段路即達市中心：共有45間客房，以及20間附廚房的公寓。' },
      ],
    },
    {
      title: 'Ounasvaara山',
      items: [
        { key: 'skyOunasvaara', note: '位於Ounasvaara山頂，距市中心4公里，距最近的雪道20公尺；提供附桑拿的客房與家庭房。' },
        { key: 'laplandHotelsOunasvaara', note: '位於克米河與雪道之間的木屋和度假公寓，每間都附私人桑拿與廚房；距市中心3公里。' },
        { key: 'santasport', note: '奧運訓練中心，緊鄰Ounasvaara山的步道，距市中心2公里；部分客房附桑拿和陽臺。' },
      ],
    },
    {
      title: '聖誕老人村與北極圈',
      items: [
        { key: 'santaClausHolidayVillage', note: '位於聖誕老人村，就在北極圈上：小木屋、套房與玻璃屋，每間都附私人桑拿。' },
        { key: 'santasIgloosArcticCircle', note: '聖誕老人村內朝北的玻璃屋，每間都設有極光提醒；距機場5公里。' },
        { key: 'arcticTreeHouse', note: '位於森林山坡上、設有整面玻璃牆的套房；與SantaPark相距100公尺，與聖誕老人村相距2.2公里。' },
        { key: 'novaSkyland', note: '每間客房和小屋都附私人桑拿；距聖誕老人村約300公尺，從機場開車5分鐘。' },
        { key: 'glassResort', note: '玻璃公寓，附私人桑拿與戶外熱水浴缸；位於聖誕老人村內的森林中。' },
      ],
    },
    {
      title: '市區以外',
      items: [
        { key: 'apukka', note: '位於兩座荒野湖泊之間的玻璃屋，距市區18公里，度假村有自己的接駁巴士開往市中心。' },
        { key: 'arcticSnowHotel', note: '12月15日起開放的冰雪飯店，以及設有360°玻璃屋頂、有暖氣的玻璃屋；距市中心26公里。' },
        { key: 'invisibleForest', note: '鏡面玻璃套房，附私人桑拿、戶外熱水浴缸與廚房；位於奧納斯河畔，距市中心車程不到10分鐘。' },
        { key: 'silverBirch', note: '只有五間玻璃小屋，離地三公尺，位於Oikarainen附近的湖畔；以多晚住宿方案販售。' },
      ],
    },
  ],
}

export default zhCN
