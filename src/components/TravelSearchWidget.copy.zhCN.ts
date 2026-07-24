import type { Copy } from './TravelSearchWidget.copy.types'

const copy: Copy = {
    destination: '目的地',
    guests: '客人',
    checkIn: '入住',
    checkOut: '退房',
    helsinkiTo: '赫尔辛基至',
    depart: '出发',
    return: '返回',
    pickUpLocation: '取车地点',
    pickUpDate: '取车日期',
    dropOffDate: '还车日期',
    tabs: { hotels: '酒店与小屋', flights: '航班', cars: '租车' },
    searchHotels: '搜索酒店与小屋',
    searchFlights: '搜索航班',
    compareCars: '比较租车',
    poweredBy: (provider: string) => `由${provider}提供。您在其平台上安全预订`,
    guestSingular: '位客人',
    guestPlural: '位客人',
    destOptions: {
      all: '整个芬兰拉普兰(罗瓦涅米)',
    },
    groups: {
      resorts: '滑雪度假村与村庄',
      municipalities: '市镇',
      airports: '机场',
      towns: '市区与车站',
    },
  }

export default copy