import type { Copy } from './Locations.copy.types'

const copy: Copy = {
    eyebrow: '拉普兰住宿地点',
    h2: '4个目的地、4种不同旅程',
    lead: '莱维:便捷抵达与村庄生活。于拉斯:静谧。萨利色尔卡:极光下的玻璃穹顶屋。伊纳里:大多数旅行者无缘的极北宁静。',
    pricesLabel: '价格:',
    checkAvailability: '查看空房',
    guideTo: (name: string) => `${name}指南`,
    locations: [
      { name: '莱维', tagline: '拉普兰奢华住宿的核心', description: '芬兰最大的滑雪胜地,步行可达的村庄就在山脚下。莱维的住宿从中心的Lapland Hotels公寓一直延伸到滑入式木屋和Levin Iglut的玻璃小屋。离镇上晚餐够近,离暗夜观赏极光也够远。', highlights: ['滑入式木屋', '餐厅与夜生活', '完整旅行菜单'], priceFrom: '拉普兰酒店每晚100欧元起 · 玻璃穹顶屋350欧元起' },
      { name: '于拉斯', tagline: '原生态北欧荒野', description: '两座山、芬兰最长的雪道、没有度假村堆叠。于拉斯是更安静的姐妹。于拉斯的住宿是分布在Pallas-Yllästunturi国家公园边缘的原木小屋,适合更看重静谧与雪道入口、而非村庄热闹的旅人。', highlights: ['越野滑雪王国', '远眺雪山的木屋', '无人潮'], priceFrom: '原木小屋每晚150欧元起' },
      { name: '萨利色尔卡', tagline: '通往北极的门户', description: '与乌尔霍·凯科宁国家公园接壤。欧洲最后的大型荒野之一。这里是萨利色尔卡的玻璃穹顶屋之地。Kakslauttanen、Star Arctic和Muotka。玻璃顶客房邂逅淘金河流,空气真正变冷。', highlights: ['玻璃穹顶屋之地', '国家公园入口', '极光深度区'], priceFrom: 'Kakslauttanen玻璃穹顶屋每晚400欧元起 · 荒野旅馆200欧元起' },
      { name: '伊纳里', tagline: '萨米文化与北极湖泊', description: '萨米文化遗产与浩瀚冰冻的伊纳里湖相遇之处。四地中最遥远、最独特。伊纳里的私人湖畔小屋、Nellim荒野旅馆、伊瓦洛的极光别墅,献给以静谧而非站点丈量旅程的旅人。', highlights: ['伊纳里湖', '萨米文化', '极北的偏远'], priceFrom: '湖畔小屋每晚200欧元起 · Aurora Village 300欧元起' },
    ],
  }

export default copy