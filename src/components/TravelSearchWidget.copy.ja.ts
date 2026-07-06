import type { Copy } from './TravelSearchWidget.copy.types'

const copy: Copy = {
    destination: '目的地',
    guests: 'ゲスト',
    checkIn: 'チェックイン',
    checkOut: 'チェックアウト',
    helsinkiTo: 'ヘルシンキ発',
    depart: '出発',
    return: '復路',
    pickUpLocation: '受取場所',
    pickUpDate: '受取日',
    dropOffDate: '返却日',
    tabs: { hotels: 'ホテルとロッジ', flights: '航空券', cars: 'レンタカー' },
    searchHotels: 'ホテルとロッジを検索',
    searchFlights: '航空券を検索',
    compareCars: 'レンタカーを比較',
    poweredBy: (provider: string) => `${provider}より提供。同社のプラットフォームから安全にご予約いただけます`,
    guestSingular: '名',
    guestPlural: '名',
    destOptions: {
      all: 'フィンランド・ラップランド全域(ロヴァニエミ)',
    },
  }

export default copy