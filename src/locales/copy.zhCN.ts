import type { ChromeCopy } from './copy.types'

const copy: ChromeCopy = {
  nav: {
    home: '首页',
    propertyTypes: '住宿类型',
    whenToGo: '何时前往',
    transport: '如何抵达',
    about: '关于',
    levi: '莱维',
    yllas: '于拉斯',
    saariselka: '萨利色尔卡',
    inari: '伊纳里',
    rovaniemi: '罗瓦涅米',
    bookNow: '立即预订',
    cabins: '木屋度假',
    langSwitch: '切换语言',
  },
  hero: {
    eyebrow: '拉普兰住宿 · 芬兰',
    h1: '芬兰拉普兰住宿指南',
    lead: '极光下的玻璃冰屋、松林中的极光木屋,以及带私人桑拿的拉普兰酒店。',
    leadSummer: '午夜阳光下的湖畔小屋、葱郁山丘间的河畔木屋,以及带私人桑拿的拉普兰酒店。',
    disclosure: '本页面包含联盟链接。如果您通过这些链接预订,LaplandStays可能获得佣金,您本人不会产生额外费用。',
    alt: '极光下芬兰拉普兰雪原中暖光融融的豪华小屋',
  },
  reviewedBy: {
    reviewedLabel: '审核者',
    policyLabel: '编辑方针',
    resolvedDate: '2026年4月',
  },
  networkHub: {
    huskySafaris: '哈士奇雪橇之旅',
    skiResorts: '滑雪胜地',
  },
  mobileStickyCta: {
    fromPrice: '每晚100欧元起',
    headline: '经过核实的拉普兰木屋与冰屋',
    cta: '立即预订',
  },
  newsletter: {
    eyebrow: 'LaplandStays 内行通讯',
    h2: '与我们一起规划您的拉普兰之旅',
    lead: '我们在芬兰拉普兰为您撰写。只在真正有事可说时发送:一段绝佳的日期、刚刚空出的玻璃屋、值得立刻锁定的价格。您只需选好日子,备好羊毛袜。',
    emailPlaceholder: 'your@email.com',
    emailLabel: '电子邮件地址',
    submit: '接收下一封邮件',
    submitting: '加入中…',
    success: '您已加入。极光下见。',
    footnote: '只在真正有事可说时发送。一键退订。',
    privacyLink: '隐私政策',
    benefits: [
      { title: '极光预警', body: '当一个好的极光之夜临近时,我们会提前告诉您。让您在对的那一晚,正好躺在玻璃屋顶下。' },
      { title: '木屋上架', body: '当Kakslauttanen、Levin Iglut、Star Arctic与Aurora Village放出当季房源时,您将第一时间知道。最好的夜晚总是最先订完。' },
      { title: '行程规划协助', body: '何时来、先订什么、哪些可以放心跳过。像朋友聊天一样告诉您,写自拉普兰当地。' },
      { title: '内行价', body: '合作伙伴的季节优惠最先送到订阅者手中。您总能抢先预订。' },
    ],
  },
  footerEditorialNote: '由Lapeso Oy在芬兰拉普兰独立运营 · 上次审阅于2026年4月 · 我们从部分预订中获得联盟佣金,但绝不影响我们推荐的房源选择。',
  footerExtraLegal: { editorialPolicy: '编辑方针', about: '关于' },
  pages: {
    home: {
      seoTitle: '拉普兰住宿:玻璃冰屋与木屋 | LaplandStays',
      seoDescription: '拉普兰住宿指南:在莱维、于拉斯、萨利色尔卡和伊纳里比较250欧元/晚起的玻璃冰屋、150欧元起的北极光木屋以及100欧元起的拉普兰酒店。',
    },
    propertyTypes: {
      kicker: '住宿类型',
      h1: '玻璃冰屋、木屋、酒店与别墅',
      lead: '从湖边的柴火木屋到三层中空玻璃冰屋。在北极的夜晚,每种住宿类型给您的真实感受。',
      types: [
        { title: '玻璃冰屋',     body: '三层中空玻璃穹顶,私人床位、独立卫浴,以及枕边可看的全景极光。' },
        { title: '极光木屋',     body: '配桑拿与壁炉的传统芬兰木屋,远离光污染,常配极光提醒服务。' },
        { title: '拉普兰酒店',   body: '配套齐全的酒店,设有餐厅、大堂、桑拿,村庄需要时还可直接ski-in。' },
        { title: '别墅与小屋',   body: '面向家庭与团体的大型住宿,多卧室、独立厨房、桑拿与热水浴缸。' },
      ],
    },
    locations: {
      kicker: '目的地',
      h1: '拉普兰的五大基地,同一片极光',
      lead: '莱维适合入门,于拉斯适合宁静,萨利色尔卡和伊纳里适合更深入的暗夜停留,罗瓦涅米则属于圣诞老人与北极圈。',
      cards: [
        { name: '莱维',         desc: '最大的滑雪度假村、最便利的航班、丰富的餐饮场景和应有尽有的雪上活动。' },
        { name: '于拉斯',       desc: '两座村庄、七条国家公园步道,拉普兰最原汁原味、最宁静的住宿体验。' },
        { name: '萨利色尔卡',   desc: '位于极光椭圆带之内,Kakslauttanen的所在地,以及最深的暗夜木屋阵营。' },
        { name: '伊纳里',       desc: '伊纳里湖、萨米文化,芬兰最北端。最佳极光概率。' },
        { name: '罗瓦涅米',     desc: '圣诞老人村、北极圈以及拉普兰最容易抵达的国际机场。' },
      ],
    },
    whenToGo: {
      kicker: '最佳出行时间',
      h1: '逐月的拉普兰日历',
      lead: '极夜、冰雪节、午夜阳光、ruska秋色。拉普兰的每个月都是不一样的国度。',
      months: [
        { month: '11月', tip: '极夜开始,极光回归。木屋很快订满。圣诞请尽早预订。' },
        { month: '12月', tip: '圣诞老人季节火爆。降雪有保障。一年中白昼最短、雪景最亮。' },
        { month: '1月',  tip: '一年最冷的月份。元旦与首批滑雪营之间的这一周是最安静的。' },
        { month: '2月',  tip: '极光夜漫长,日照逐渐回归,适合雪地安全游与冰钓。' },
        { month: '3月',  tip: '白昼长,积雪充足,莱维和于拉斯的春季滑雪窗口开启。' },
      ],
    },
    transport: {
      kicker: '如何抵达',
      h1: '如何前往芬兰拉普兰',
      lead: '直达基蒂莱、罗瓦涅米与伊瓦洛的冬季航班,以及赫尔辛基的夜行火车。每种方式实际是怎么操作的。',
      airports: [
        { name: '基蒂莱 (KTT)', desc: '来自伦敦、巴黎、阿姆斯特丹、苏黎世及更多城市的冬季直飞包机。莱维和于拉斯的门户。' },
        { name: '罗瓦涅米 (RVN)', desc: '芬兰航空通过赫尔辛基全年通航。距前往圣诞老人村的接驳很近。' },
        { name: '伊瓦洛 (IVL)', desc: '欧盟最北端的机场,通往萨利色尔卡、伊纳里及极光带的入口。' },
      ],
    },
    about: {
      kicker: '关于LaplandStays',
      h1: '在芬兰拉普兰独立撰写',
      lead: '我们住在这里,在这里过夜,每季更新这份指南,并诚实告诉您哪家房源被高估了。',
      mission: '我们的使命是给每位旅客和我们告诉朋友一样的建议。基于真实入住、核实过的房价以及只有现场才能获得的本地洞察。',
    },
  },
}

export default copy
