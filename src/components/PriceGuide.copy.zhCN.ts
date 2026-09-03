// Copy for the PriceGuide home-page section (lang: zh-CN).
import type { PriceGuideCopy } from './PriceGuide.copy.en'

const copy: PriceGuideCopy = {
  eyebrow: '拉普兰住宿价格',
  heading: '在拉普兰住一晚到底要花多少钱',
  lead: '极光缓缓掠过头顶的玻璃穹顶，桑拿早已烧热，清晨用早餐时窗外是一片雪落无声的森林。在拉普兰，这样的一晚可能花€100，也可能花€1,500。我们从预订页面直接整理出15家住宿的真实价格区间，让您一眼就能看出，您的预算能实现哪一种梦想。',
  tiers: [
    {
      name: '玻璃冰屋',
      note: '每晚 · 每间穹顶屋',
      examples: ['Kakslauttanen Arctic Resort', 'Levin Iglut', 'Star Arctic Hotel', 'Aurora Village Ivalo', 'Nova Skyland Rovaniemi'],
      ctaLabel: '查找玻璃冰屋',
    },
    {
      name: '极光小木屋',
      note: '每晚 · 每栋木屋',
      examples: ['Apukka Resort', 'Arctic TreeHouse Hotel', 'Arctic SnowHotel & Glass Igloos'],
      ctaLabel: '查找极光木屋',
    },
    {
      name: '冰雪酒店',
      note: '每晚 · 仅冬季开放',
      examples: ['Lainio Snow Village (Kittilä)', 'Torassieppi Winter Village (Muonio)'],
      ctaLabel: '查找冰雪酒店',
    },
    {
      name: '荒野度假屋',
      note: '每晚 · 全套房',
      examples: ['Muotka Wilderness Lodge (Inari)', 'Nellim Wilderness Hotel', 'Lumi Resort (Kittilä)'],
      ctaLabel: '查找荒野度假屋',
    },
    {
      name: '拉普兰连锁酒店与木屋',
      note: '每晚 · 每间客房',
      examples: ['Lapland Hotels （多家度假村）', 'Harriniva (Muonio)'],
      ctaLabel: '查找酒店与木屋',
    },
  ],
  tip: {
    label: '预订提示：',
    pre: '在极光旺季（11月至次年3月）,Kakslauttanen和Levin Iglut的玻璃冰屋需提前',
    strong: '8–12个月',
    post: '预订。如果其中一家是您此行的核心，请先订下它，再围绕这个日期安排其余行程。',
  },
}

export default copy
