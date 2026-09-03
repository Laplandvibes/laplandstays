// Copy for the PriceGuide home-page section (lang: ja).
import type { PriceGuideCopy } from './PriceGuide.copy.en'

const copy: PriceGuideCopy = {
  eyebrow: 'ラップランドの宿泊料金',
  heading: 'ラップランドの一泊、実際にかかる料金',
  lead: 'ガラス天井の向こうをオーロラがゆっくりと流れ、サウナはすでに温まり、朝食どきの窓の外には雪が音を吸い込んだ静かな森。そんなラップランドの一夜は、€100のこともあれば€1,500のこともあります。15軒の宿泊施設の実際の価格帯を予約ページから直接集めました。あなたの予算でどんな夢に手が届くのか、ひと目でわかります。',
  tiers: [
    {
      name: 'グラスイグルー',
      note: '1泊・1イグルーあたり',
      examples: ['Kakslauttanen Arctic Resort', 'Levin Iglut', 'Star Arctic Hotel', 'Aurora Village Ivalo', 'Nova Skyland Rovaniemi'],
      ctaLabel: 'グラスイグルーを探す',
    },
    {
      name: 'オーロラキャビン',
      note: '1泊・1キャビンあたり',
      examples: ['Apukka Resort', 'Arctic TreeHouse Hotel', 'Arctic SnowHotel & Glass Igloos'],
      ctaLabel: 'オーロラキャビンを探す',
    },
    {
      name: 'スノーホテル・アイスホテル',
      note: '1泊・冬季限定',
      examples: ['Lainio Snow Village (Kittilä)', 'Torassieppi Winter Village (Muonio)'],
      ctaLabel: 'スノーホテルを探す',
    },
    {
      name: 'ウィルダネスロッジ',
      note: '1泊・全室スイート',
      examples: ['Muotka Wilderness Lodge (Inari)', 'Nellim Wilderness Hotel', 'Lumi Resort (Kittilä)'],
      ctaLabel: 'ウィルダネスロッジを探す',
    },
    {
      name: 'ラップランドのホテル・キャビンチェーン',
      note: '1泊・1室あたり',
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
