import type { Copy } from './TravelSearchWidget.copy.types'

const copy: Copy = {
    destination: '目的地',
    guests: '客人',
    checkIn: '入住',
    checkOut: '退房',
    helsinkiTo: '赫爾辛基至',
    depart: '出發',
    return: '返回',
    pickUpLocation: '取車地點',
    pickUpDate: '取車日期',
    dropOffDate: '還車日期',
    tabs: { hotels: '飯店與小屋', flights: '航班', cars: '租車' },
    searchHotels: '搜尋飯店與小屋',
    searchFlights: '搜尋航班',
    compareCars: '比較租車',
    poweredBy: (provider: string) => `由${provider}提供。您在其平臺上安全預訂`,
    guestSingular: '位客人',
    guestPlural: '位客人',
    destOptions: {
      all: '整個芬蘭拉普蘭（羅瓦涅米）',
    },
    groups: {
      resorts: '滑雪度假村與村莊',
      municipalities: '市鎮',
      airports: '機場',
      towns: '市區與車站',
    },
  }

export default copy