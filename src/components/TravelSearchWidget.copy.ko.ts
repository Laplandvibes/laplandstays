import type { Copy } from './TravelSearchWidget.copy.types'

const copy: Copy = {
    destination: '목적지',
    guests: '인원',
    checkIn: '체크인',
    checkOut: '체크아웃',
    helsinkiTo: '헬싱키 출발 →',
    depart: '출발',
    return: '귀국',
    pickUpLocation: '대여 위치',
    pickUpDate: '대여일',
    dropOffDate: '반납일',
    tabs: { hotels: '호텔 & 캐빈', flights: '항공편', cars: '렌터카' },
    searchHotels: '호텔 & 캐빈 검색',
    searchFlights: '항공편 검색',
    compareCars: '렌터카 비교',
    poweredBy: (provider: string) => `${provider} 제공. 해당 플랫폼에서 안전하게 예약하실 수 있습니다`,
    guestSingular: '명',
    guestPlural: '명',
    destOptions: {
      all: '핀란드 라플란드 전역 (로바니에미)',
    },
    groups: {
      resorts: '스키 리조트와 마을',
      municipalities: '지자체와 도시',
      airports: '공항',
      towns: '시내와 역',
    },
  }

export default copy