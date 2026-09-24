// Copy for the PriceGuide home-page section (lang: ja).
import type { PriceGuideCopy } from './PriceGuide.copy.en'

const copy: PriceGuideCopy = {
  eyebrow: '宿泊タイプの価格帯',
  heading: 'ラップランドの宿、高い順に',
  lead: 'ガラス天井を流れるオーロラ、温まったサウナ、朝食時に窓の外に広がる雪の森。ラップランドの夜は五つのタイプに分かれます。一生に一度のものから日常的なものまで順に並べ、それぞれの代表的な宿を添えました。一泊の料金は季節と週によって動くため、ご希望の日程の料金は予約ページからご確認いただけます。',
  scale: { low: '手ごろ', high: '高め' },
  tiers: [
    {
      name: 'グラスイグルー',
      examples: ['Kakslauttanen Arctic Resort', 'Levin Iglut', 'Star Arctic Hotel', 'Aurora Village Ivalo', 'Nova Skyland Rovaniemi'],
      ctaLabel: 'グラスイグルーを探す',
    },
    {
      name: 'オーロラキャビン',
      examples: ['Apukka Resort', 'Arctic TreeHouse Hotel', 'Arctic SnowHotel & Glass Igloos'],
      ctaLabel: 'オーロラキャビンを探す',
    },
    {
      name: 'スノーホテル・アイスホテル',
      examples: ['Lainio Snow Village (Kittilä)', 'Torassieppi Winter Village (Muonio)'],
      ctaLabel: 'スノーホテルを探す',
    },
    {
      name: 'ウィルダネスロッジ',
      examples: ['Muotka Wilderness Lodge (Inari)', 'Nellim Wilderness Hotel', 'Lumi Resort (Kittilä)'],
      ctaLabel: 'ウィルダネスロッジを探す',
    },
    {
      name: 'ラップランドのホテル・キャビンチェーン',
      examples: ['Lapland Hotels （複数リゾート）', 'Harriniva (Muonio)'],
      ctaLabel: 'ホテル・キャビンを探す',
    },
  ],
  tip: {
    label: '予約のヒント:',
    pre: 'カクシラウッタネンとレヴィン・イグルトのグラスイグルーは、オーロラのピークシーズン（11月〜3月）には',
    strong: '8〜12か月前',
    post: 'に満室になります。これらが旅の主目的なら、まずイグルーを予約し、残りの旅程はその日程に合わせて組みましょう。',
  },
}

export default copy
