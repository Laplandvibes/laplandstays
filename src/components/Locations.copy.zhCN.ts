import type { Copy } from './Locations.copy.types'

const copy: Copy = {
    eyebrow: '拉普蘭住宿地點',
    h2: '4個目的地、4種不同旅程',
    lead: '萊維：便捷抵達與村莊生活。於拉斯：靜謐。薩利色爾卡：極光下的玻璃屋。伊納里：大多數旅行者無緣的極北寧靜。',
    pricesLabel: '價格：',
    checkAvailability: '檢視空房',
    guideTo: (name: string) => `${name}指南`,
    locations: [
      { name: '萊維', tagline: '拉普蘭奢華住宿的核心', description: '芬蘭最大的滑雪勝地，步行可達的村莊就在山腳下。萊維的住宿從中心的Lapland Hotels公寓一直延伸到滑入式木屋和Levin Iglut的玻璃小屋。離鎮上晚餐夠近，離暗夜觀賞極光也夠遠。', highlights: ['滑入式木屋', '餐廳與夜生活', '完整旅行選單'], priceFrom: '拉普蘭飯店每晚100歐元起 · 玻璃屋350歐元起' },
      { name: '於拉斯', tagline: '原生態北歐荒野', description: '兩座山、芬蘭最長的雪道、沒有度假村堆疊。於拉斯是更安靜的姐妹。於拉斯的住宿是分佈在Pallas-Yllästunturi國家公園邊緣的原木小屋，適合更看重靜謐與雪道入口、而非村莊熱鬧的旅人。', highlights: ['越野滑雪王國', '遠眺雪山的木屋', '無人潮'], priceFrom: '原木小屋每晚150歐元起' },
      { name: '薩利色爾卡', tagline: '通往北極的門戶', description: '與烏爾霍·凱科寧國家公園接壤。歐洲最後的大型荒野之一。這裡是薩利色爾卡的玻璃屋之地。Kakslauttanen、Star Arctic和Muotka。玻璃頂客房邂逅淘金河流，空氣真正變冷。', highlights: ['玻璃屋之地', '國家公園入口', '極光深度區'], priceFrom: 'Kakslauttanen玻璃屋每晚400歐元起 · 荒野旅館200歐元起' },
      { name: '伊納里', tagline: '薩米文化與北極湖泊', description: '薩米文化遺產與浩瀚冰凍的伊納里湖相遇之處。四地中最遙遠、最獨特。伊納里的私人湖畔小屋、Nellim荒野旅館、伊瓦洛的極光別墅，獻給以靜謐而非站點丈量旅程的旅人。', highlights: ['伊納里湖', '薩米文化', '極北的偏遠'], priceFrom: '湖畔小屋每晚200歐元起 · Aurora Village 300歐元起' },
    ],
  }

export default copy