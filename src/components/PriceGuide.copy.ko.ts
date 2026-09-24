// Copy for the PriceGuide home-page section (lang: ko).
import type { PriceGuideCopy } from './PriceGuide.copy.en'

const copy: PriceGuideCopy = {
  eyebrow: '가격대',
  heading: '라플란드 숙소, 비싼 순서대로',
  lead: '유리 천장 위로 흐르는 오로라, 이미 데워진 사우나, 아침 식사 때 창밖에 펼쳐진 눈 덮인 숲. 라플란드의 밤은 다섯 가지이며, 일생에 한 번뿐인 것부터 일상적인 것까지 순서대로, 각 유형을 대표하는 숙소와 함께 정리했습니다. 1박 요금은 계절과 주에 따라 달라지므로, 원하시는 날짜의 요금은 예약 페이지에서 확인하실 수 있습니다.',
  scale: { low: '저렴한 편', high: '비싼 편' },
  tiers: [
    {
      name: '글래스 이글루',
      examples: ['Kakslauttanen Arctic Resort', 'Levin Iglut', 'Star Arctic Hotel', 'Aurora Village Ivalo', 'Nova Skyland Rovaniemi'],
      ctaLabel: '글래스 이글루 찾기',
    },
    {
      name: '오로라 캐빈',
      examples: ['Apukka Resort', 'Arctic TreeHouse Hotel', 'Arctic SnowHotel & Glass Igloos'],
      ctaLabel: '오로라 캐빈 찾기',
    },
    {
      name: '스노우 호텔 & 아이스 호텔',
      examples: ['Lainio Snow Village (Kittilä)', 'Torassieppi Winter Village (Muonio)'],
      ctaLabel: '스노우 호텔 찾기',
    },
    {
      name: '윌더니스 로지',
      examples: ['Muotka Wilderness Lodge (Inari)', 'Nellim Wilderness Hotel', 'Lumi Resort (Kittilä)'],
      ctaLabel: '윌더니스 로지 찾기',
    },
    {
      name: '라플란드 호텔 & 캐빈 체인',
      examples: ['Lapland Hotels (여러 리조트)', 'Harriniva (Muonio)'],
      ctaLabel: '호텔 & 캐빈 찾기',
    },
  ],
  tip: {
    label: '예약 팁.',
    pre: '칵슬라우타넨과 레빈 이글루트의 글래스 이글루는 오로라 성수기(11월–3월)에는 ',
    strong: '8–12개월 전',
    post: '에 마감됩니다. 이 중 하나가 여행의 핵심이라면 먼저 예약하고, 나머지 일정을 그 날짜에 맞춰 계획하세요.',
  },
}

export default copy
