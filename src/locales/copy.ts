/**
 * Lazy-loaded per-locale chrome strings. EN is bundled synchronously as the
 * baseline; other locales load via dynamic import the first time they are
 * requested for a given Lang.
 */
import { useEffect, useState } from 'react'
import type { ChromeCopy } from './copy.types'
import enSync from './copy.en'
import { useLang } from '../i18n/useLang'
import type { Lang } from '../i18n/useLang'
import type { FooterDict } from '../shared/Footer'

const cache: Partial<Record<Lang, ChromeCopy>> = { en: enSync }

const loaders: Record<Lang, () => Promise<{ default: ChromeCopy }>> = {
  en: () => import('./copy.en'),
  fi: () => import('./copy.fi'),
  de: () => import('./copy.de'),
  ja: () => import('./copy.ja'),
  es: () => import('./copy.es'),
  'pt-BR': () => import('./copy.ptBR'),
  'zh-CN': () => import('./copy.zhCN'),
  ko: () => import('./copy.ko'),
  fr: () => import('./copy.fr'),
  it: () => import('./copy.it'),
  nl: () => import('./copy.nl'),
  sv: () => import('./copy.sv'),
}

/** Hook returning the ChromeCopy for the current lang.
 * Returns the EN fallback synchronously on first render of a non-EN locale,
 * then re-renders with the loaded locale once the dynamic import resolves. */
export function useCopy(): ChromeCopy {
  const lang = useLang()
  const [copy, setCopy] = useState<ChromeCopy>(() => cache[lang] ?? cache.en!)
  useEffect(() => {
    const cached = cache[lang]
    if (cached) {
      setCopy(cached)
      return
    }
    let cancelled = false
    loaders[lang]().then((mod) => {
      cache[lang] = mod.default
      if (!cancelled) setCopy(mod.default)
    })
    return () => {
      cancelled = true
    }
  }, [lang])
  return copy
}

export function footerDict(lang: Lang): FooterDict {
  if (lang === 'en') {
    return {
      networkBadge: 'Finnish Lapland Network',
      tagline: 'The definitive digital home for Finnish Lapland travel.',
      groups: {
        stay: 'Stay',
        eatDrink: 'Eat & Drink',
        do: 'Do',
        explore: 'Explore',
        essentials: 'Essentials',
      },
      travelGuideKicker: 'Lapland Travel Guide',
      about: {
        eyebrow: 'About LaplandVibes',
        body: 'The definitive guide to Finnish Lapland, from the revontulet to the midnight sun. Curated experiences, insider tips, and the practical basics for your Arctic trip.',
        badge: 'Independently maintained · sources cited',
      },
      spottedError: {
        title: 'Spotted an Error?',
        body: "See something that needs fixing? Tell us, we'll correct it immediately.",
        cta: 'Report an Error →',
      },
      partner: {
        title: 'Partner With Us',
        body: 'Advertise or collaborate across 27 Lapland sites.',
        cta: 'Get in Touch →',
      },
      press: {
        title: 'Press & Media',
        body: 'Editorial partnerships and press kits.',
        cta: 'Press Enquiries →',
      },
      affiliate: 'This site contains affiliate links. If you book through these links, LaplandVibes may receive a commission at no extra cost to you.',
      copyright: '© {{year}} #LaplandVibes, Part of the #LaplandVibes Network',
      websiteBy: 'Website by Yrityspaketit.fi',
      legal: { privacy: 'Privacy Policy', cookie: 'Cookie Policy', terms: 'Terms of Use', contact: 'Contact' },
      siteLabels: {
        hotelDeals: 'Hotel Deals',
        staysCabins: 'Stays & Cabins',
        whereToStay: 'Where to Stay',
        familyFriendly: 'Family Friendly',
        localFood: 'Local Food',
        fineDining: 'Fine Dining',
        barsPubs: 'Bars & Pubs',
        activities: 'Activities',
        huskySafaris: 'Husky Safaris',
        skiResorts: 'Ski Resorts',
        snowmobileTours: 'Snowmobile Tours',
        spaWellness: 'Spa & Wellness',
        nightlife: 'Nightlife',
        natureParks: 'Nature & Parks',
        travelGuide: 'Travel Guide',
        christmas: 'Christmas in Lapland',
        giftsSouvenirs: 'Gifts & Souvenirs',
        travelBlog: 'Travel Blog',
        dealsOffers: 'Deals & Offers',
        transport: 'Transport',
        carRental: 'Car Rental',
        workInLapland: 'Work in Lapland',
      },
    }
  }
  if (lang === 'de') {
    return {
      networkBadge: 'Finnisch-Lappland-Netzwerk',
      tagline: 'Das umfassende digitale Zuhause für Reisen in Finnisch-Lappland.',
      groups: {
        stay: 'Unterkunft',
        eatDrink: 'Essen & Trinken',
        do: 'Aktivitäten',
        explore: 'Entdecken',
        essentials: 'Wesentliches',
      },
      travelGuideKicker: 'Lappland-Reiseführer',
      about: {
        eyebrow: 'Über LaplandVibes',
        body: 'Der umfassende Reiseführer zu Finnisch-Lappland, von den Nordlichtern bis zur Mitternachtssonne. Kuratierte Erlebnisse, Insider-Tipps und alles, was Sie für die Planung Ihres arktischen Abenteuers brauchen.',
        badge: 'Unabhängig gepflegt · Quellen zitiert',
      },
      spottedError: {
        title: 'Fehler entdeckt?',
        body: 'Sehen Sie etwas, das korrigiert werden muss? Sagen Sie uns Bescheid, wir korrigieren es sofort.',
        cta: 'Fehler melden →',
      },
      partner: {
        title: 'Mit uns kooperieren',
        body: 'Werbung oder Zusammenarbeit über 27 Lappland-Websites hinweg.',
        cta: 'Kontakt aufnehmen →',
      },
      press: {
        title: 'Presse & Medien',
        body: 'Redaktionelle Partnerschaften und Pressemappen.',
        cta: 'Presseanfragen →',
      },
      affiliate: 'Diese Website enthält Partnerlinks. Wenn Sie über diese Links buchen, erhält LaplandVibes möglicherweise eine Provision ohne Mehrkosten für Sie.',
      copyright: '© {{year}} #LaplandVibes, Teil des #LaplandVibes-Netzwerks',
      websiteBy: 'Website von Yrityspaketit.fi',
      legal: { privacy: 'Datenschutz', cookie: 'Cookie-Richtlinie', terms: 'Nutzungsbedingungen', contact: 'Kontakt' },
      siteLabels: {
        hotelDeals: 'Hotelangebote',
        staysCabins: 'Unterkünfte & Hütten',
        whereToStay: 'Wo übernachten',
        familyFriendly: 'Familienfreundlich',
        localFood: 'Lokale Küche',
        fineDining: 'Gehobene Küche',
        barsPubs: 'Bars & Pubs',
        activities: 'Aktivitäten',
        huskySafaris: 'Husky-Safaris',
        skiResorts: 'Skigebiete',
        snowmobileTours: 'Schneemobil-Touren',
        spaWellness: 'Spa & Wellness',
        nightlife: 'Nachtleben',
        natureParks: 'Natur & Parks',
        travelGuide: 'Reiseführer',
        christmas: 'Weihnachten in Lappland',
        giftsSouvenirs: 'Geschenke & Souvenirs',
        travelBlog: 'Reiseblog',
        dealsOffers: 'Angebote',
        transport: 'Transport',
        carRental: 'Mietwagen',
        workInLapland: 'Arbeiten in Lappland',
      },
    }
  }
  if (lang === 'ja') {
    return {
      networkBadge: 'フィンランド・ラップランドのネットワーク',
      tagline: 'フィンランド・ラップランド旅行の決定版デジタルガイド。',
      groups: {
        stay: '泊まる',
        eatDrink: '食事と飲み物',
        do: 'アクティビティ',
        explore: '探検する',
        essentials: '基本情報',
      },
      travelGuideKicker: 'ラップランド旅行ガイド',
      about: {
        eyebrow: 'LaplandVibesについて',
        body: 'フィンランド・ラップランドの決定版ガイド。オーロラから白夜まで。厳選された体験とインサイダーの視点、出典を明記した情報で、北極の旅の計画を支えます。',
        badge: '独立運営 · 出典明記',
      },
      spottedError: {
        title: '誤りを見つけた場合',
        body: '修正が必要なものに気づきましたか？ご連絡ください。すぐに修正いたします。',
        cta: '誤りを報告 →',
      },
      partner: {
        title: 'パートナーシップ',
        body: '21以上のラップランド関連サイトでの広告や提携。',
        cta: 'お問い合わせ →',
      },
      press: {
        title: 'プレス・メディア',
        body: '編集パートナーシップとプレスキット。',
        cta: 'プレスのお問い合わせ →',
      },
      affiliate: 'このサイトにはアフィリエイトリンクが含まれます。リンク経由でご予約いただいた場合、追加費用なしでLaplandVibesに手数料が支払われることがあります。',
      copyright: '© {{year}} #LaplandVibes。#LaplandVibesネットワークの一部',
      websiteBy: 'ウェブサイト制作：Yrityspaketit.fi',
      legal: { privacy: 'プライバシーポリシー', cookie: 'クッキーポリシー', terms: '利用規約', contact: 'お問い合わせ' },
      siteLabels: {
        hotelDeals: 'ホテルのお得な情報',
        staysCabins: '宿泊施設とコテージ',
        whereToStay: '宿泊場所',
        familyFriendly: '家族向け',
        localFood: '地元の料理',
        fineDining: 'ファインダイニング',
        barsPubs: 'バーとパブ',
        activities: 'アクティビティ',
        huskySafaris: 'ハスキーサファリ',
        skiResorts: 'スキーリゾート',
        snowmobileTours: 'スノーモービルツアー',
        spaWellness: 'スパとウェルネス',
        nightlife: 'ナイトライフ',
        natureParks: '自然と国立公園',
        travelGuide: '旅行ガイド',
        christmas: 'ラップランドのクリスマス',
        giftsSouvenirs: 'ギフトとお土産',
        travelBlog: '旅行ブログ',
        dealsOffers: 'お得な情報',
        transport: '交通',
        carRental: 'レンタカー',
        workInLapland: 'ラップランドで働く',
      },
    }
  }
  if (lang === 'es') {
    return {
      networkBadge: 'Red de la Laponia finlandesa',
      tagline: 'El hogar digital de referencia para viajar a la Laponia finlandesa.',
      groups: { stay: 'Alojarse', eatDrink: 'Comer y beber', do: 'Hacer', explore: 'Explorar', essentials: 'Esenciales' },
      travelGuideKicker: 'Guía de viaje de Laponia',
      about: {
        eyebrow: 'Sobre LaplandVibes',
        body: 'La guía definitiva de la Laponia finlandesa: de la aurora boreal al sol de medianoche. Experiencias seleccionadas, consejos locales y todo lo necesario para planificar su aventura ártica.',
        badge: 'Mantenido de forma independiente · fuentes citadas',
      },
      spottedError: {
        title: '¿Ha detectado un error?',
        body: '¿Ve algo que deba corregirse? Avísenos y lo arreglamos enseguida.',
        cta: 'Reportar un error →',
      },
      partner: {
        title: 'Colabore con nosotros',
        body: 'Anúnciese o colabore en 27 sitios sobre Laponia.',
        cta: 'Contactar →',
      },
      press: {
        title: 'Prensa y medios',
        body: 'Colaboraciones editoriales y dosieres de prensa.',
        cta: 'Consultas de prensa →',
      },
      affiliate: 'Este sitio incluye enlaces de afiliación. Si reserva a través de estos enlaces, LaplandVibes puede recibir una comisión sin coste adicional para usted.',
      copyright: '© {{year}} #LaplandVibes, Parte de la red #LaplandVibes',
      websiteBy: 'Web realizada por Yrityspaketit.fi',
      legal: { privacy: 'Política de privacidad', cookie: 'Política de cookies', terms: 'Condiciones de uso', contact: 'Contacto' },
      siteLabels: {
        hotelDeals: 'Ofertas de hoteles',
        staysCabins: 'Alojamientos y cabañas',
        whereToStay: 'Dónde alojarse',
        familyFriendly: 'En familia',
        localFood: 'Cocina local',
        fineDining: 'Alta cocina',
        barsPubs: 'Bares y pubs',
        activities: 'Actividades',
        huskySafaris: 'Safaris en husky',
        skiResorts: 'Estaciones de esquí',
        snowmobileTours: 'Tours en motonieve',
        spaWellness: 'Spa y bienestar',
        nightlife: 'Vida nocturna',
        natureParks: 'Naturaleza y parques',
        travelGuide: 'Guía de viaje',
        christmas: 'Navidad en Laponia',
        giftsSouvenirs: 'Regalos y recuerdos',
        travelBlog: 'Blog de viajes',
        dealsOffers: 'Ofertas',
        transport: 'Transporte',
        carRental: 'Alquiler de coches',
        workInLapland: 'Trabajar en Laponia',
      },
    }
  }
  if (lang === 'pt-BR') {
    return {
      networkBadge: 'Rede da Lapônia finlandesa',
      tagline: 'O lar digital definitivo para viajar pela Lapônia finlandesa.',
      groups: { stay: 'Hospedar', eatDrink: 'Comer e beber', do: 'Fazer', explore: 'Explorar', essentials: 'Essenciais' },
      travelGuideKicker: 'Guia de viagem da Lapônia',
      about: {
        eyebrow: 'Sobre o LaplandVibes',
        body: 'O guia definitivo da Lapônia finlandesa, da aurora boreal ao sol da meia-noite. Experiências curadas, dicas de quem mora ali e o básico para planejar sua aventura no Ártico.',
        badge: 'Mantido de forma independente · fontes citadas',
      },
      spottedError: {
        title: 'Encontrou um erro?',
        body: 'Notou algo que precisa de correção? Nos avise, corrigimos na hora.',
        cta: 'Reportar erro →',
      },
      partner: {
        title: 'Faça parceria com a gente',
        body: 'Anuncie ou colabore em 27 sites da Lapônia.',
        cta: 'Entre em contato →',
      },
      press: {
        title: 'Imprensa e mídia',
        body: 'Parcerias editoriais e kits de imprensa.',
        cta: 'Contato de imprensa →',
      },
      affiliate: 'Este site contém links de afiliados. Se você reservar por estes links, o LaplandVibes pode receber uma comissão sem custo adicional para você.',
      copyright: '© {{year}} #LaplandVibes, Parte da rede #LaplandVibes',
      websiteBy: 'Site feito por Yrityspaketit.fi',
      legal: { privacy: 'Política de Privacidade', cookie: 'Política de Cookies', terms: 'Termos de Uso', contact: 'Contato' },
      siteLabels: {
        hotelDeals: 'Ofertas de hotéis',
        staysCabins: 'Hospedagens e cabanas',
        whereToStay: 'Onde ficar',
        familyFriendly: 'Para famílias',
        localFood: 'Cozinha local',
        fineDining: 'Alta gastronomia',
        barsPubs: 'Bares e pubs',
        activities: 'Atividades',
        huskySafaris: 'Safáris com huskies',
        skiResorts: 'Estações de esqui',
        snowmobileTours: 'Passeios de snowmobile',
        spaWellness: 'Spa e bem-estar',
        nightlife: 'Vida noturna',
        natureParks: 'Natureza e parques',
        travelGuide: 'Guia de viagem',
        christmas: 'Natal na Lapônia',
        giftsSouvenirs: 'Presentes e lembranças',
        travelBlog: 'Blog de viagem',
        dealsOffers: 'Ofertas',
        transport: 'Transporte',
        carRental: 'Aluguel de carros',
        workInLapland: 'Trabalhar na Lapônia',
      },
    }
  }
  if (lang === 'zh-CN') {
    return {
      networkBadge: '芬兰拉普兰网络',
      tagline: '前往芬兰拉普兰旅行的权威数字指南。',
      groups: { stay: '住宿', eatDrink: '餐饮', do: '活动', explore: '探索', essentials: '实用信息' },
      travelGuideKicker: '拉普兰旅行指南',
      about: {
        eyebrow: '关于LaplandVibes',
        body: '芬兰拉普兰的权威指南。从北极光到午夜阳光。精选体验、本地建议，以及规划北极之旅所需的一切。',
        badge: '独立运营 · 来源标注',
      },
      spottedError: {
        title: '发现错误？',
        body: '看到需要纠正的内容？请告诉我们。我们会立刻修正。',
        cta: '报告错误 →',
      },
      partner: {
        title: '与我们合作',
        body: '在21+个拉普兰相关网站投放广告或开展合作。',
        cta: '联系我们 →',
      },
      press: {
        title: '媒体合作',
        body: '编辑合作与媒体资料包。',
        cta: '媒体咨询 →',
      },
      affiliate: '本网站包含联盟链接。如果您通过这些链接预订，LaplandVibes可能获得佣金，您本人不会产生任何额外费用。',
      copyright: '© {{year}} #LaplandVibes。#LaplandVibes网络的一部分',
      websiteBy: '网站由Yrityspaketit.fi制作',
      legal: { privacy: '隐私政策', cookie: 'Cookie政策', terms: '使用条款', contact: '联系我们' },
      siteLabels: {
        hotelDeals: '酒店优惠',
        staysCabins: '住宿与小屋',
        whereToStay: '住宿选择',
        familyFriendly: '亲子游',
        localFood: '当地美食',
        fineDining: '精致餐饮',
        barsPubs: '酒吧',
        activities: '活动',
        huskySafaris: '哈士奇雪橇之旅',
        skiResorts: '滑雪胜地',
        snowmobileTours: '雪地摩托之旅',
        spaWellness: '水疗与养生',
        nightlife: '夜生活',
        natureParks: '自然与国家公园',
        travelGuide: '旅行指南',
        christmas: '拉普兰圣诞',
        giftsSouvenirs: '礼物与纪念品',
        travelBlog: '旅行博客',
        dealsOffers: '优惠',
        transport: '交通',
        carRental: '汽车租赁',
        workInLapland: '在拉普兰工作',
      },
    }
  }
  if (lang === 'ko') {
    return {
      networkBadge: '핀란드 라플란드 네트워크',
      tagline: '핀란드 라플란드 여행을 위한 결정적인 디지털 본거지.',
      groups: { stay: '숙박', eatDrink: '식음료', do: '액티비티', explore: '탐험', essentials: '필수 정보' },
      travelGuideKicker: '라플란드 여행 가이드',
      about: {
        eyebrow: 'LaplandVibes 소개',
        body: '핀란드 라플란드의 결정적인 가이드. 오로라부터 백야까지. 엄선된 체험과 인사이더 팁, 출처를 밝힌 정보로 북극 여행 계획을 돕습니다.',
        badge: '독립적으로 관리됨 · 출처 명시',
      },
      spottedError: { title: '오류를 발견하셨나요?', body: '수정이 필요한 부분이 있으신가요? 알려주세요. 즉시 바로잡겠습니다.', cta: '오류 신고 →' },
      partner: { title: '파트너십', body: '21개 이상의 라플란드 사이트에서 광고하거나 협업하세요.', cta: '연락하기 →' },
      press: { title: '언론 및 미디어', body: '편집 파트너십과 보도자료.', cta: '언론 문의 →' },
      affiliate: '이 사이트에는 제휴 링크가 포함되어 있습니다. 이 링크를 통해 예약하시면 LaplandVibes가 추가 비용 없이 수수료를 받을 수 있습니다.',
      copyright: '© {{year}} #LaplandVibes. #LaplandVibes 네트워크의 일부',
      websiteBy: '웹사이트 제작: Yrityspaketit.fi',
      legal: { privacy: '개인정보 처리방침', cookie: '쿠키 정책', terms: '이용약관', contact: '문의' },
      siteLabels: {
        hotelDeals: '호텔 특가',
        staysCabins: '숙소와 캐빈',
        whereToStay: '숙소 찾기',
        familyFriendly: '가족 여행',
        localFood: '현지 음식',
        fineDining: '파인 다이닝',
        barsPubs: '바와 펍',
        activities: '액티비티',
        huskySafaris: '허스키 사파리',
        skiResorts: '스키 리조트',
        snowmobileTours: '스노모빌 투어',
        spaWellness: '스파와 웰니스',
        nightlife: '나이트라이프',
        natureParks: '자연과 국립공원',
        travelGuide: '여행 가이드',
        christmas: '라플란드의 크리스마스',
        giftsSouvenirs: '선물과 기념품',
        travelBlog: '여행 블로그',
        dealsOffers: '특가와 프로모션',
        transport: '교통',
        carRental: '렌터카',
        workInLapland: '라플란드에서 일하기',
      },
    }
  }
  if (lang === 'fr') {
    return {
      networkBadge: 'Réseau Laponie finlandaise',
      tagline: 'Le foyer numérique de référence pour le voyage en Laponie finlandaise.',
      groups: { stay: 'Séjourner', eatDrink: 'Manger & boire', do: 'Activités', explore: 'Explorer', essentials: 'Essentiels' },
      travelGuideKicker: 'Guide voyage Laponie',
      about: {
        eyebrow: 'À propos de LaplandVibes',
        body: "Le guide définitif de la Laponie finlandaise, des aurores boréales au soleil de minuit. Expériences sélectionnées, conseils d'initiés et tout ce qu'il faut pour planifier votre aventure arctique.",
        badge: 'Maintenu de façon indépendante · sources citées',
      },
      spottedError: { title: 'Une erreur repérée ?', body: 'Vous voyez quelque chose à corriger ? Dites-nous, nous le corrigerons immédiatement.', cta: 'Signaler une erreur →' },
      partner: { title: 'Collaborez avec nous', body: 'Annoncez ou collaborez sur 27 sites Laponie.', cta: 'Nous contacter →' },
      press: { title: 'Presse & médias', body: 'Partenariats éditoriaux et kits presse.', cta: 'Contact presse →' },
      affiliate: "Ce site contient des liens d'affiliation. Si vous réservez via ces liens, LaplandVibes peut recevoir une commission sans coût supplémentaire pour vous.",
      copyright: '© {{year}} #LaplandVibes, Membre du réseau #LaplandVibes',
      websiteBy: 'Site réalisé par Yrityspaketit.fi',
      legal: { privacy: 'Politique de confidentialité', cookie: 'Politique des cookies', terms: "Conditions d'utilisation", contact: 'Contact' },
      siteLabels: {
        hotelDeals: 'Offres hôtelières',
        staysCabins: 'Séjours et chalets',
        whereToStay: 'Où loger',
        familyFriendly: 'En famille',
        localFood: 'Cuisine locale',
        fineDining: 'Gastronomie',
        barsPubs: 'Bars et pubs',
        activities: 'Activités',
        huskySafaris: 'Safaris en huskies',
        skiResorts: 'Stations de ski',
        snowmobileTours: 'Sorties en motoneige',
        spaWellness: 'Spa et bien-être',
        nightlife: 'Vie nocturne',
        natureParks: 'Nature et parcs',
        travelGuide: 'Guide de voyage',
        christmas: 'Noël en Laponie',
        giftsSouvenirs: 'Cadeaux et souvenirs',
        travelBlog: 'Blog de voyage',
        dealsOffers: 'Offres et promotions',
        transport: 'Transport',
        carRental: 'Location de voiture',
        workInLapland: 'Travailler en Laponie',
      },
    }
  }
  if (lang === 'it') {
    return {
      networkBadge: 'Network della Lapponia finlandese',
      tagline: 'La casa digitale di riferimento per i viaggi nella Lapponia finlandese.',
      groups: { stay: 'Alloggio', eatDrink: 'Mangiare e bere', do: 'Attività', explore: 'Esplorare', essentials: 'Essenziali' },
      travelGuideKicker: 'Guida di viaggio della Lapponia',
      about: {
        eyebrow: 'Informazioni su LaplandVibes',
        body: "La guida definitiva alla Lapponia finlandese, dall'aurora boreale al sole di mezzanotte. Esperienze selezionate, consigli da insider e tutto ciò che serve per pianificare la Sua avventura artica.",
        badge: 'Gestita in modo indipendente · fonti citate',
      },
      spottedError: { title: 'Notato un errore?', body: 'Vede qualcosa da correggere? Ce lo dica, lo correggeremo immediatamente.', cta: 'Segnala un errore →' },
      partner: { title: 'Collabori con noi', body: 'Faccia pubblicità o collabori su 27 siti dedicati alla Lapponia.', cta: 'Contatti →' },
      press: { title: 'Stampa e media', body: 'Partnership editoriali e cartelle stampa.', cta: 'Richieste stampa →' },
      affiliate: 'Questo sito contiene link di affiliazione. Se prenota tramite questi link, LaplandVibes può ricevere una commissione senza costi aggiuntivi per Lei.',
      copyright: '© {{year}} #LaplandVibes, Parte del network #LaplandVibes',
      websiteBy: 'Sito realizzato da Yrityspaketit.fi',
      legal: { privacy: 'Informativa sulla privacy', cookie: 'Politica sui cookie', terms: 'Termini di servizio', contact: 'Contatti' },
      siteLabels: {
        hotelDeals: 'Offerte hotel',
        staysCabins: 'Alloggi e chalet',
        whereToStay: 'Dove dormire',
        familyFriendly: 'In famiglia',
        localFood: 'Cucina locale',
        fineDining: 'Alta cucina',
        barsPubs: 'Bar e pub',
        activities: 'Attività',
        huskySafaris: 'Safari con i husky',
        skiResorts: 'Stazioni sciistiche',
        snowmobileTours: 'Tour in motoslitta',
        spaWellness: 'Spa e benessere',
        nightlife: 'Vita notturna',
        natureParks: 'Natura e parchi',
        travelGuide: 'Guida di viaggio',
        christmas: 'Natale in Lapponia',
        giftsSouvenirs: 'Regali e souvenir',
        travelBlog: 'Blog di viaggio',
        dealsOffers: 'Offerte e promozioni',
        transport: 'Trasporti',
        carRental: 'Autonoleggio',
        workInLapland: 'Lavorare in Lapponia',
      },
    }
  }
  if (lang === 'nl') {
    return {
      networkBadge: 'Fins Lapland netwerk',
      tagline: 'Het toonaangevende digitale thuis voor reizen naar Fins Lapland.',
      groups: { stay: 'Verblijven', eatDrink: 'Eten & drinken', do: 'Activiteiten', explore: 'Verkennen', essentials: 'Essentials' },
      travelGuideKicker: 'Lapland-reisgids',
      about: {
        eyebrow: 'Over LaplandVibes',
        body: 'De definitieve gids voor Fins Lapland, van het noorderlicht tot de middernachtszon. Zorgvuldig samengestelde ervaringen, insider tips en alles wat u nodig heeft om uw arctische avontuur te plannen.',
        badge: 'Onafhankelijk beheerd · bronnen vermeld',
      },
      spottedError: { title: 'Een fout gespot?', body: 'Ziet u iets dat hersteld moet worden? Vertel het ons, we corrigeren het direct.', cta: 'Fout melden →' },
      partner: { title: 'Werk met ons samen', body: 'Adverteer of werk samen op 27 Lapland-sites.', cta: 'Neem contact op →' },
      press: { title: 'Pers & media', body: 'Redactionele partnerschappen en perskits.', cta: 'Persvragen →' },
      affiliate: 'Deze site bevat affiliate links. Als u via deze links boekt, kan LaplandVibes een commissie ontvangen zonder extra kosten voor u.',
      copyright: '© {{year}} #LaplandVibes, Onderdeel van het #LaplandVibes-netwerk',
      websiteBy: 'Website door Yrityspaketit.fi',
      legal: { privacy: 'Privacybeleid', cookie: 'Cookiebeleid', terms: 'Gebruiksvoorwaarden', contact: 'Contact' },
      siteLabels: {
        hotelDeals: 'Hoteldeals',
        staysCabins: 'Verblijven en hutten',
        whereToStay: 'Waar te verblijven',
        familyFriendly: 'Gezinsvriendelijk',
        localFood: 'Lokale keuken',
        fineDining: 'Fine dining',
        barsPubs: 'Bars en pubs',
        activities: 'Activiteiten',
        huskySafaris: "Husky-safari's",
        skiResorts: 'Skigebieden',
        snowmobileTours: 'Sneeuwscootertochten',
        spaWellness: 'Spa en wellness',
        nightlife: 'Nachtleven',
        natureParks: 'Natuur en parken',
        travelGuide: 'Reisgids',
        christmas: 'Kerstmis in Lapland',
        giftsSouvenirs: 'Cadeaus en souvenirs',
        travelBlog: 'Reisblog',
        dealsOffers: 'Deals en aanbiedingen',
        transport: 'Vervoer',
        carRental: 'Autoverhuur',
        workInLapland: 'Werken in Lapland',
      },
    }
  }
  if (lang === 'sv') {
    return {
      networkBadge: 'Nätverket för finska Lappland',
      tagline: 'Det digitala hemmet för resor i finska Lappland.',
      groups: { stay: 'Bo', eatDrink: 'Äta & dricka', do: 'Göra', explore: 'Utforska', essentials: 'Grunderna' },
      travelGuideKicker: 'Reseguide till Lappland',
      about: {
        eyebrow: 'Om LaplandVibes',
        body: 'Reseguiden till finska Lappland, från norrsken till midnattssol. Handplockade upplevelser, praktiska tips och öppna källor.',
        badge: 'Oberoende · källor angivna',
      },
      spottedError: {
        title: 'Hittade du ett fel?',
        body: 'Ser du något som borde rättas? Säg till, vi fixar det direkt.',
        cta: 'Rapportera ett fel →',
      },
      partner: {
        title: 'Samarbeta med oss',
        body: 'Annonsera eller samarbeta på 27 Lappland-sajter.',
        cta: 'Hör av dig →',
      },
      press: {
        title: 'Press & media',
        body: 'Redaktionella samarbeten och presskit.',
        cta: 'Presskontakt →',
      },
      affiliate: 'Den här sajten innehåller affiliatelänkar. Om du bokar via dem kan LaplandVibes få en provision utan extra kostnad för dig.',
      copyright: '© {{year}} #LaplandVibes, en del av #LaplandVibes-nätverket',
      websiteBy: 'Webbplats av Yrityspaketit.fi',
      legal: { privacy: 'Integritetspolicy', cookie: 'Cookiepolicy', terms: 'Användarvillkor', contact: 'Kontakt' },
      siteLabels: {
        hotelDeals: 'Hotellerbjudanden',
        staysCabins: 'Boenden & stugor',
        whereToStay: 'Var du kan bo',
        familyFriendly: 'Familjevänligt',
        localFood: 'Lokal mat',
        fineDining: 'Fine dining',
        barsPubs: 'Barer & pubar',
        activities: 'Aktiviteter',
        huskySafaris: 'Huskysafarier',
        skiResorts: 'Skidorter',
        snowmobileTours: 'Skoterturer',
        spaWellness: 'Spa & wellness',
        nightlife: 'Nattliv',
        natureParks: 'Natur & parker',
        travelGuide: 'Reseguide',
        christmas: 'Jul i Lappland',
        giftsSouvenirs: 'Presenter & souvenirer',
        travelBlog: 'Reseblogg',
        dealsOffers: 'Erbjudanden',
        transport: 'Transport',
        carRental: 'Biluthyrning',
        workInLapland: 'Jobba i Lappland',
      },
    }
  }
  // fi
  return {
    networkBadge: 'Suomen Lapin verkosto',
    tagline: 'Suomen Lapin matkailun digitaalinen koti.',
    groups: {
      stay: 'Majoitu',
      eatDrink: 'Syö & juo',
      do: 'Tekemistä',
      explore: 'Tutki',
      essentials: 'Perustiedot',
    },
    travelGuideKicker: 'Lapin matkaopas',
    about: {
      eyebrow: 'Tietoa LaplandVibesistä',
      body: 'Suomen Lapin matkaopas, revontulista keskiyön aurinkoon. Käsin valittuja kohteita, käytännön vinkkejä ja avoimet lähteet.',
      badge: 'Riippumaton · lähteet näkyvillä',
    },
    spottedError: {
      title: 'Huomasitko virheen?',
      body: 'Näetkö jotain mikä pitäisi korjata? Kerro meille, korjaamme sen heti.',
      cta: 'Ilmoita virheestä →',
    },
    partner: {
      title: 'Yhteistyö kanssamme',
      body: 'Mainosta tai tee yhteistyötä yli 21 Lappi-sivustolla.',
      cta: 'Ota yhteyttä →',
    },
    press: {
      title: 'Media ja lehdistö',
      body: 'Toimitusyhteistyö ja lehdistömateriaalit.',
      cta: 'Lehdistöyhteydet →',
    },
    affiliate: 'Tämä sivusto sisältää kumppanuuslinkkejä. Kun varaat näiden kautta, LaplandVibes voi saada provision ilman lisäkustannuksia sinulle.',
    copyright: '© {{year}} #LaplandVibes, Osa #LaplandVibes-verkostoa',
    websiteBy: 'Sivuston toteutus: Yrityspaketit.fi',
    legal: { privacy: 'Tietosuojaseloste', cookie: 'Evästekäytäntö', terms: 'Käyttöehdot', contact: 'Yhteystiedot' },
    siteLabels: {
      hotelDeals: 'Hotellitarjoukset',
      staysCabins: 'Majoitukset ja mökit',
      whereToStay: 'Missä yöpyä',
      familyFriendly: 'Perheille',
      localFood: 'Paikallinen ruoka',
      fineDining: 'Hienot ravintolat',
      barsPubs: 'Baarit ja pubit',
      activities: 'Aktiviteetit',
      huskySafaris: 'Huskysafarit',
      skiResorts: 'Hiihtokeskukset',
      snowmobileTours: 'Moottorikelkkasafarit',
      spaWellness: 'Spa ja hyvinvointi',
      nightlife: 'Yöelämä',
      natureParks: 'Luonto ja kansallispuistot',
      travelGuide: 'Matkaopas',
      christmas: 'Joulu Lapissa',
      giftsSouvenirs: 'Lahjat ja matkamuistot',
      travelBlog: 'Matkablogi',
      dealsOffers: 'Tarjoukset',
      transport: 'Liikenne',
      carRental: 'Autovuokraus',
      workInLapland: 'Töihin Lappiin',
    },
  }
}
