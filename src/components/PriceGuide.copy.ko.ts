// Copy for the PriceGuide home-page section (lang: ko).
import type { PriceGuideCopy } from './PriceGuide.copy.en'

const copy: PriceGuideCopy = {
  eyebrow: '라플란드 숙박 요금',
  heading: '라플란드 1박, 실제 비용은 얼마일까',
  lead: '유리 천장 위로 오로라가 흘러가고, 사우나는 이미 따뜻하게 데워져 있고, 아침 식사 때 창밖에는 눈이 소리를 삼킨 고요한 숲. 라플란드에서 이런 하룻밤은 €100일 수도, €1,500일 수도 있습니다. 15개 숙소의 실제 가격대를 예약 페이지에서 그대로 모아, 내 예산으로 닿을 수 있는 꿈이 어디까지인지 한눈에 보이도록 정리했습니다.',
  tiers: [
    {
      name: '글래스 이글루',
      note: '1박 · 이글루 1동 기준',
      examples: ['Kakslauttanen Arctic Resort', 'Levin Iglut', 'Star Arctic Hotel', 'Aurora Village Ivalo', 'Nova Skyland Rovaniemi'],
      ctaLabel: '글래스 이글루 찾기',
    },
    {
      name: '오로라 캐빈',
      note: '1박 · 캐빈 1동 기준',
      examples: ['Apukka Resort', 'Arctic TreeHouse Hotel', 'Arctic SnowHotel & Glass Igloos'],
      ctaLabel: '오로라 캐빈 찾기',
    },
    {
      name: '스노우 호텔 & 아이스 호텔',
      note: '1박 · 겨울 시즌 한정',
      examples: ['Lainio Snow Village (Kittilä)', 'Torassieppi Winter Village (Muonio)'],
      ctaLabel: '스노우 호텔 찾기',
    },
    {
      name: '윌더니스 로지',
      note: '1박 · 전 객실 스위트',
      examples: ['Muotka Wilderness Lodge (Inari)', 'Nellim Wilderness Hotel', 'Lumi Resort (Kittilä)'],
      ctaLabel: '윌더니스 로지 찾기',
    },
    {
      name: '라플란드 호텔 & 캐빈 체인',
      note: '1박 · 객실 1실 기준',
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
