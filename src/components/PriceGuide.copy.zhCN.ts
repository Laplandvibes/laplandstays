// Copy for the PriceGuide home-page section (lang: zh-CN).
import type { PriceGuideCopy } from './PriceGuide.copy.en'

const copy: PriceGuideCopy = {
  eyebrow: '價位級距',
  heading: '拉普蘭住宿，從最頂級到最平價',
  lead: '極光從玻璃屋頂流過，桑拿已經燒熱，早餐時窗外是一片靜默的雪林。拉普蘭的夜晚分成五種，從一生一次到日常，依序排列，並附上各自的代表住宿。一晚要多少錢會隨季節與週次變動，因此房價請在預訂頁面查看您所選的日期。',
  scale: { low: '較平價', high: '較高價' },
  tiers: [
    {
      name: '玻璃屋',
      examples: ['Kakslauttanen Arctic Resort', 'Levin Iglut', 'Star Arctic Hotel', 'Aurora Village Ivalo', 'Nova Skyland Rovaniemi'],
      ctaLabel: '查詢玻璃屋',
    },
    {
      name: '極光小木屋',
      examples: ['Apukka Resort', 'Arctic TreeHouse Hotel', 'Arctic SnowHotel & Glass Igloos'],
      ctaLabel: '查詢極光木屋',
    },
    {
      name: '冰雪飯店',
      examples: ['Lainio Snow Village (Kittilä)', 'Torassieppi Winter Village (Muonio)'],
      ctaLabel: '查詢冰雪飯店',
    },
    {
      name: '荒野度假屋',
      examples: ['Muotka Wilderness Lodge (Inari)', 'Nellim Wilderness Hotel', 'Lumi Resort (Kittilä)'],
      ctaLabel: '查詢荒野度假屋',
    },
    {
      name: '拉普蘭連鎖飯店與木屋',
      examples: ['Lapland Hotels （多家度假村）', 'Harriniva (Muonio)'],
      ctaLabel: '查詢飯店與木屋',
    },
  ],
  tip: {
    label: '預訂提示：',
    pre: '在極光旺季（11月至次年3月）,Kakslauttanen和Levin Iglut的玻璃屋需提前',
    strong: '8–12個月',
    post: '預訂。如果其中一家是您此行的核心，請先訂下它，再圍繞這個日期安排其餘行程。',
  },
}

export default copy
