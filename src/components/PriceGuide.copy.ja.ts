// Copy for the PriceGuide home-page section (lang: ja).
import type { PriceGuideCopy } from './PriceGuide.copy.en'

const copy: PriceGuideCopy = {
  eyebrow: 'ラップランドの宿泊料金',
  heading: 'ラップランドの一泊、実際にかかる料金',
  lead: 'ガラス天井の向こうをオーロラがゆっくりと流れ、サウナはすでに温まり、朝食どきの窓の外には雪が音を吸い込んだ静かな森。そんなラップランドの一夜は、€100のこともあれば€1,500のこともあります。15軒の宿泊施設の実際の価格帯を予約ページから直接集めました。あなたの予算でどんな夢に手が届くのか、ひと目でわかります。',
  propertiesLabel: '施設:',
  tiers: [
    {
      name: 'ガラスイグルー',
      note: '1泊・1イグルーあたり',
      examples: ['Kakslauttanen Arctic Resort', 'Levin Iglut', 'Star Arctic Hotel', 'Aurora Village Ivalo', 'Nova Skyland Rovaniemi'],
      body: 'オーロラ観賞のために設計されたガラス屋根の客室とイグルー。最も高価なカテゴリー。ガラス屋根、辺境の立地、限られた客室数のため、カクシラウッタネンは8〜12か月前に満室になります。',
      ctaLabel: 'ガラスイグルーを探す',
    },
    {
      name: 'オーロラキャビン',
      note: '1泊・1キャビンあたり',
      examples: ['Apukka Resort', 'Arctic TreeHouse Hotel', 'Arctic SnowHotel & Glass Igloos'],
      body: 'オーロラが見える窓、プライベートサウナ、森に囲まれた定番のラップランド・キャビン。オーロラを追うカップルや少人数グループにとって、価格と体験のバランスが最も良い選択肢です。',
      ctaLabel: 'オーロラキャビンを探す',
    },
    {
      name: 'スノーホテル・アイスホテル',
      note: '1泊・冬季限定',
      examples: ['Lainio Snow Village (Kittilä)', 'Torassieppi Winter Village (Muonio)'],
      body: '一夜限りの体験。毎年12月に氷から彫り出され、4月には溶けてなくなります。暖かい更衣室、防寒寝袋、そして一生語り続けられる思い出。',
      ctaLabel: 'スノーホテルを探す',
    },
    {
      name: 'ウィルダネスロッジ',
      note: '1泊・全室スイート',
      examples: ['Muotka Wilderness Lodge (Inari)', 'Nellim Wilderness Hotel', 'Lumi Resort (Kittilä)'],
      body: 'サービスを求めるオーロラハンターのために作られた宿。小規模で人里離れ、ガイド付き。オールインクルーシブの大自然。シェフの料理、ハスキー体験、ロビーから直接申し込めるサファリの数々。',
      ctaLabel: 'ウィルダネスロッジを探す',
    },
    {
      name: 'ラップランドのホテル・キャビンチェーン',
      note: '1泊・1室あたり',
      examples: ['Lapland Hotels (複数リゾート)', 'Harriniva (Muonio)'],
      body: '最も手堅い入口。レヴィ、ユッラス、サーリセルカ、ロヴァニエミ、ムオニオに展開する有名ホテル・キャビンチェーン。レストランへは徒歩圏内、サファリはドアの前から出発します。',
      ctaLabel: 'ホテル・キャビンを探す',
    },
  ],
  tip: {
    label: '予約のヒント:',
    pre: 'カクシラウッタネンとレヴィン・イグルトのガラスイグルーは、オーロラのピークシーズン(11月〜3月)には',
    strong: '8〜12か月前',
    post: 'に満室になります。これらが旅の主目的なら、まずイグルーを予約し、残りの旅程はその日程に合わせて組みましょう。',
  },
}

export default copy
