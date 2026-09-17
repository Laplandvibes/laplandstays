// Copy for the PriceGuide home-page section (lang: zh-CN).
import type { PriceGuideCopy } from './PriceGuide.copy.en'

const copy: PriceGuideCopy = {
  eyebrow: '拉普蘭住宿價格',
  heading: '在拉普蘭住一晚到底要花多少錢',
  lead: '極光緩緩掠過頭頂的玻璃穹頂，桑拿早已燒熱，清晨用早餐時窗外是一片雪落無聲的森林。在拉普蘭，這樣的一晚可能花€100，也可能花€1,500。我們從預訂頁面直接整理出15家住宿的真實價格區間，讓您一眼就能看出，您的預算能實現哪一種夢想。',
  tiers: [
    {
      name: '玻璃屋',
      note: '每晚 · 每間穹頂屋',
      examples: ['Kakslauttanen Arctic Resort', 'Levin Iglut', 'Star Arctic Hotel', 'Aurora Village Ivalo', 'Nova Skyland Rovaniemi'],
      ctaLabel: '查詢玻璃屋',
    },
    {
      name: '極光小木屋',
      note: '每晚 · 每棟木屋',
      examples: ['Apukka Resort', 'Arctic TreeHouse Hotel', 'Arctic SnowHotel & Glass Igloos'],
      ctaLabel: '查詢極光木屋',
    },
    {
      name: '冰雪飯店',
      note: '每晚 · 僅冬季開放',
      examples: ['Lainio Snow Village (Kittilä)', 'Torassieppi Winter Village (Muonio)'],
      ctaLabel: '查詢冰雪飯店',
    },
    {
      name: '荒野度假屋',
      note: '每晚 · 全套房',
      examples: ['Muotka Wilderness Lodge (Inari)', 'Nellim Wilderness Hotel', 'Lumi Resort (Kittilä)'],
      ctaLabel: '查詢荒野度假屋',
    },
    {
      name: '拉普蘭連鎖飯店與木屋',
      note: '每晚 · 每間客房',
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
