import type { Copy } from './Locations.copy.types'

const copy: Copy = {
    eyebrow: '라플란드 어디에 머무를까',
    h2: '네 곳의 목적지, 네 가지 다른 여행',
    lead: '쉬운 접근과 마을 생활은 레비, 고요함은 일래스, 오로라 아래 글래스 이글루는 사리셀카, 대부분의 여행자가 닿지 못하는 극북의 정적은 이나리.',
    pricesLabel: '가격:',
    checkAvailability: '객실 확인',
    guideTo: (name: string) => `${name} 가이드`,
    locations: [
      { name: '레비', tagline: '라플란드 럭셔리의 중심', description: '핀란드 최대 스키 리조트이자, 산자락에 도보 거리의 마을이 자리한 곳. 레비의 숙소는 중심부의 Lapland Hotels 아파트부터 Levin Iglut의 스키 인 샬레와 글래스 캐빈까지 폭넓게 흩어져 있습니다. 마을 저녁식사를 즐길 만큼 가깝고, 다크 스카이에서 오로라를 볼 만큼 떨어져 있습니다.', highlights: ['스키 인 샬레', '레스토랑과 나이트라이프', '풀 사파리 프로그램'], priceFrom: '라플란드 호텔 1박 100€부터 · 글래스 이글루 350€부터' },
      { name: '일래스', tagline: '때묻지 않은 노르딕 야생', description: '두 개의 봉우리, 핀란드에서 가장 긴 슬로프, 그러나 리조트 단지의 압도감은 없는 곳. 일래스는 한층 조용한 자매 마을입니다. Pallas-Yllästunturi 국립공원 곳곳에 흩어진 통나무 캐빈이 일래스 숙박의 주인공으로, 마을의 활기보다 고요함과 트레일 접근성을 중시하는 분께 이상적입니다.', highlights: ['크로스컨트리 왕국', '봉우리 뷰 샬레', '인파 없음'], priceFrom: '통나무 캐빈 1박 150€부터' },
      { name: '사리셀카', tagline: '북극으로 가는 관문', description: '유럽 최후의 광대한 자연 가운데 하나인 Urho Kekkonen 국립공원과 맞닿아 있습니다. 이곳이 사리셀카의 글래스 이글루 영토. Kakslauttanen, Star Arctic, Muotka. 유리 천장의 객실이 사금 채취 강과 만나고 공기는 제대로 차가워집니다.', highlights: ['글래스 이글루 영토', '국립공원 접근성', '오로라 핵심 지대'], priceFrom: 'Kakslauttanen 글래스 이글루 1박 400€부터 · 윌더니스 로지 200€부터' },
      { name: '이나리', tagline: '사미 문화와 북극의 호수', description: '사미 문화 유산이 광활하게 얼어붙은 이나리 호수와 만나는 곳. 네 곳 가운데 가장 외지고 가장 특별한 목적지. 호숫가 사유지의 이나리 캐빈, Nellim 윌더니스 로지, 그리고 정류장이 아닌 정적으로 여행을 가늠하는 분들을 위한 Ivalo의 오로라 빌라.', highlights: ['이나리 호수', '사미 문화', '극북의 외딴 풍경'], priceFrom: '호숫가 캐빈 1박 200€부터 · Aurora Village 300€부터' },
    ],
  }

export default copy