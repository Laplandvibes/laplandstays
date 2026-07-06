// Copy for the PriceGuide home-page section (lang: ko).
import type { PriceGuideCopy } from './PriceGuide.copy.en'

const copy: PriceGuideCopy = {
  eyebrow: '라플란드 숙박 요금',
  heading: '라플란드 1박, 실제 비용은 얼마일까',
  lead: '유리 천장 위로 오로라가 흘러가고, 사우나는 이미 따뜻하게 데워져 있고, 아침 식사 때 창밖에는 눈이 소리를 삼킨 고요한 숲. 라플란드에서 이런 하룻밤은 €100일 수도, €1,500일 수도 있습니다. 15개 숙소의 실제 가격대를 예약 페이지에서 그대로 모아, 내 예산으로 닿을 수 있는 꿈이 어디까지인지 한눈에 보이도록 정리했습니다.',
  propertiesLabel: '숙소:',
  tiers: [
    {
      name: '글래스 이글루',
      keyword: '라플란드 글래스 이글루',
      range: '€250 – €1,500',
      note: '1박 · 이글루 1동 기준',
      examples: ['Kakslauttanen Arctic Resort', 'Levin Iglut', 'Star Arctic Hotel', 'Aurora Village Ivalo', 'Nova Skyland Rovaniemi'],
      body: '오로라 감상을 위해 지어진 유리 지붕 객실과 이글루. 가장 비싼 카테고리. 유리 지붕, 외딴 위치, 한정된 객실 수 때문에 칵슬라우타넨은 8–12개월 전에 마감됩니다.',
      ctaLabel: '글래스 이글루 찾기',
    },
    {
      name: '오로라 캐빈',
      keyword: '오로라 캐빈',
      range: '€150 – €700',
      note: '1박 · 캐빈 1동 기준',
      examples: ['Apukka Resort', 'Arctic TreeHouse Hotel', 'Arctic SnowHotel & Glass Igloos'],
      body: '오로라가 보이는 창, 프라이빗 사우나, 숲에 둘러싸인 클래식한 라플란드 캐빈. 오로라를 쫓는 커플과 소규모 그룹에게 가격 대비 경험이 가장 좋은 선택입니다.',
      ctaLabel: '오로라 캐빈 찾기',
    },
    {
      name: '스노우 호텔 & 아이스 호텔',
      keyword: '라플란드 스노우 호텔',
      range: '€150 – €400',
      note: '1박 · 겨울 시즌 한정',
      examples: ['Lainio Snow Village (Kittilä)', 'Torassieppi Winter Village (Muonio)'],
      body: '단 하룻밤만의 영역. 매년 12월 얼음으로 조각되고 4월이면 녹아 사라집니다. 따뜻한 탈의실, 보온 침낭, 그리고 평생 이야기하게 될 추억.',
      ctaLabel: '스노우 호텔 찾기',
    },
    {
      name: '윌더니스 로지',
      keyword: '라플란드 럭셔리 숙소',
      range: '€200 – €600',
      note: '1박 · 전 객실 스위트',
      examples: ['Muotka Wilderness Lodge (Inari)', 'Nellim Wilderness Hotel', 'Lumi Resort (Kittilä)'],
      body: '서비스를 원하는 오로라 헌터를 위해 지어진 숙소. 작고, 외딴 곳에 있으며, 가이드가 함께합니다. 올인클루시브 야생. 셰프의 주방, 허스키 체험, 로비에서 바로 신청하는 사파리까지.',
      ctaLabel: '윌더니스 로지 찾기',
    },
    {
      name: '라플란드 호텔 & 캐빈 체인',
      keyword: '라플란드 호텔',
      range: '€100 – €350',
      note: '1박 · 객실 1실 기준',
      examples: ['Lapland Hotels (여러 리조트)', 'Harriniva (Muonio)'],
      body: '가장 믿을 만한 출발점. 레비, 윌라스, 사리셀카, 로바니에미, 무오니오에 자리한 라플란드 호텔·캐빈 체인. 레스토랑까지 걸어갈 수 있고, 사파리는 문 앞에서 출발합니다.',
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
