import type { LucideIcon } from 'lucide-react'
import { ArrowRight, Home, ShieldCheck, BedDouble, CarTaxiFront } from 'lucide-react'
import { useLang, type Lang } from '../i18n/useLang'
import { trackAffiliateClick } from '../lib/analytics'
import { buildHotelSearch } from '../lib/affiliate'
import AffiliateDisclosure from './AffiliateDisclosure'

// ─────────────────────────────────────────────────────────────────────────────
// PartnerStayAd, a brand-skinned affiliate ad card for LaplandStays' booking
// partners. Three advertisers, each in their OWN brand skin:
//   • Hotels.com (BedDouble / red), routed through the go.laplandvibes.com Worker
//     (?sid=&ss=&locale=) so per-site CJ attribution + locale resolve correctly.
//   • Lomarengas (Home / green), Finland's biggest holiday-cottage agency,
//     direct Adtraction deep-link (channel as=2086870803; no client SID slot).
//   • EKTA (ShieldCheck / blue), travel insurance, direct Travelpayouts link
//     ({placement} → sub_id).
// Direct links come from _affiliate/affiliate-links.json.
//
// premium_design_standard §6 + affiliate_ad_creative_process: each ad adopts the
// ADVERTISER's own brand (real logo + their accent colour) as a clearly-labelled
// "Mainos / Ad" unit. The card is rendered in this site's LIGHT editorial idiom
// (warm paper-white .lvs-card with the advertiser's accent as a top rule + soft
// corner wash) so it reads as an authentic partner placement that still belongs
// on the cream page, Hotels.com red, Lomarengas green and EKTA blue all sit
// cleanly on white. Offers are EVERGREEN and accurate (no time-limited promos
// hardcoded, no invented stats), per the affiliate creative rule.
//
// Required affiliate attributes (LV spec): target="_blank"
// rel="sponsored nofollow noopener", NO noreferrer (the Worker / CJ attribution
// reads Referer; we keep it consistent across every affiliate <a>).
//
// Link resolution: `linkFor(sid, lang)` per partner. Hotels.com builds a fresh
// Worker URL; EKTA substitutes {placement}→sub_id; Lomarengas is a static link.
// ─────────────────────────────────────────────────────────────────────────────

type PartnerKey = 'hotels' | 'lomarengas' | 'ekta' | 'kiwitaxi'

interface PartnerConfig {
  brand: string
  logo: string
  /** Resolve the final tracking href for a given placement SID + language. */
  linkFor: (sid: string, lang: Lang) => string
  /** Advertiser brand accent, border rule, icon, trust dots, CTA pill. */
  accent: string
  accentDark: string
  icon: LucideIcon
  trackKey: string
}

const CONFIG: Record<PartnerKey, PartnerConfig> = {
  // Hotels.com, routed through the LV redirect Worker so the per-site CJ Website
  // ID + locale resolve from Referer. `ss` pins the search to a real Lapland
  // destination (Rovaniemi has the deepest regional inventory and is a valid
  // Hotels.com location, unlike "Lapland" which geo-snaps to Helsinki). Brand red.
  hotels: {
    brand: 'Hotels.com',
    logo: '/images/partners/hotelscom.svg',
    linkFor: (sid) => buildHotelSearch('Rovaniemi, Finland', sid),
    accent: '#D32F2F',
    accentDark: '#B71C1C',
    icon: BedDouble,
    trackKey: 'hotelscom',
  },
  // Lomarengas, Finland's largest holiday-cottage agency. Brand green.
  lomarengas: {
    brand: 'Lomarengas',
    logo: '/images/partners/lomarengas.png',
    linkFor: () => 'https://on.lomarengas.fi/t/t?a=1071150667&as=2086870803&t=2&tk=1',
    accent: '#10B981',
    accentDark: '#047857',
    icon: Home,
    trackKey: 'lomarengas',
  },
  // EKTA, travel insurance sold to any country (no Nordic-residency wall). Blue.
  ekta: {
    brand: 'EKTA',
    logo: '/images/partners/ekta.svg',
    linkFor: (sid) =>
      'https://tp.media/r?marker=723794&trs=524131&p=5869&u=https%3A%2F%2Fektatraveling.com%2F&campaign_id=1&sub_id={placement}'.replace(
        '{placement}',
        encodeURIComponent(sid),
      ),
    accent: '#2563EB',
    accentDark: '#1D4ED8',
    icon: ShieldCheck,
    trackKey: 'ekta',
  },
  // Kiwitaxi, fixed-price airport transfers (driver waits with a name sign,
  // flight tracked). COMPLEMENTS the site's own Hotels.com routing instead of
  // cannibalising it (Vesa 2026-07-06). Travelpayouts p=647. Brand orange.
  kiwitaxi: {
    brand: 'Kiwitaxi',
    logo: '/images/partners/kiwitaxi.svg',
    linkFor: (sid) =>
      'https://tp.media/r?marker=723794&trs=524131&p=647&u=https%3A%2F%2Fkiwitaxi.com%2F&campaign_id=1&sub_id={placement}'.replace(
        '{placement}',
        encodeURIComponent(sid),
      ),
    accent: '#F97316',
    accentDark: '#EA580C',
    icon: CarTaxiFront,
    trackKey: 'kiwitaxi',
  },
}

interface AdCopy {
  adLabel: string
  eyebrow: string
  headline: string
  sub: string
  trust: [string, string, string]
  cta: string
  poweredBy: string
}

// ── Lomarengas copy (11 langs). Angle: rent a WHOLE cabin, own sauna, room for
// the group, thousands across Lapland, book direct. Evergreen, no stats. ──────
const LOMARENGAS_COPY: Record<Lang, AdCopy> = {
  fi: {
    adLabel: 'Mainos',
    eyebrow: 'Oma mökki, ei hotellihuone',
    headline: 'Vuokraa koko mökki Lapista, oma sauna ja tilaa koko porukalle',
    sub: 'Suomen suurin mökkivuokraaja. Tuhansia mökkejä ympäri Lappia, monessa oma rantasauna ja takka, varaat suoraan ja saat koko paikan itsellesi, et vain yhtä huonetta. Kun haluatte tilaa, rauhaa ja oman keittiön, mökki voittaa hotellin.',
    trust: ['Oma sauna useimmissa', 'Koko mökki, ei jaettu', 'Mökkejä ympäri Lappia'],
    cta: 'Katso vapaat mökit',
    poweredBy: 'Varaus Lomarenkaan kautta',
  },
  en: {
    adLabel: 'Ad',
    eyebrow: 'A whole cabin, not a hotel room',
    headline: 'Rent a whole Lapland cabin, with your own sauna and room for everyone',
    sub: "Finland's biggest cottage-rental agency. Thousands of cabins across Lapland, many with a private lakeside sauna and fireplace. You book direct and get the whole place to yourselves, not just a room. When you want space, quiet and your own kitchen, a cabin beats a hotel.",
    trust: ['Private sauna in most', 'The whole cabin, not shared', 'Cabins all across Lapland'],
    cta: 'See available cabins',
    poweredBy: 'Booking via Lomarengas',
  },
  de: {
    adLabel: 'Anzeige',
    eyebrow: 'Ein ganzes Haus, kein Hotelzimmer',
    headline: 'Ein ganzes Ferienhaus in Lappland mieten, mit eigener Sauna und Platz für alle',
    sub: 'Finnlands größter Ferienhaus-Vermittler. Tausende Hütten in ganz Lappland, viele mit eigener Seesauna und Kamin. Sie buchen direkt und haben das ganze Haus für sich, nicht nur ein Zimmer. Wenn Sie Platz, Ruhe und eine eigene Küche wollen, schlägt die Hütte das Hotel.',
    trust: ['Eigene Sauna in den meisten', 'Das ganze Haus, nicht geteilt', 'Hütten in ganz Lappland'],
    cta: 'Freie Hütten ansehen',
    poweredBy: 'Buchung über Lomarengas',
  },
  ja: {
    adLabel: '広告',
    eyebrow: 'ホテルの一室ではなく一棟貸し',
    headline: 'ラップランドのコテージを一棟まるごと。専用サウナと、みんなで泊まれる広さ',
    sub: 'フィンランド最大のコテージ予約サービス。ラップランド各地に数千棟、多くに湖畔の専用サウナと暖炉つき。直接予約で、一室ではなく一棟をまるごと使えます。広さと静けさ、自分たちのキッチンが欲しいなら、コテージはホテルに勝ります。',
    trust: ['多くに専用サウナ', '一棟貸し、相部屋なし', 'ラップランド各地に点在'],
    cta: '空きコテージを見る',
    poweredBy: '予約はLomarengas経由',
  },
  es: {
    adLabel: 'Anuncio',
    eyebrow: 'Una cabaña entera, no una habitación',
    headline: 'Alquila una cabaña entera en Laponia, con sauna propia y sitio para todos',
    sub: 'La mayor agencia de alquiler de cabañas de Finlandia. Miles de cabañas por toda Laponia, muchas con sauna privada junto al lago y chimenea. Reservas directamente y tienes todo el sitio para ti, no solo una habitación. Cuando quieres espacio, calma y tu propia cocina, la cabaña gana al hotel.',
    trust: ['Sauna privada en la mayoría', 'La cabaña entera, sin compartir', 'Cabañas por toda Laponia'],
    cta: 'Ver cabañas disponibles',
    poweredBy: 'Reserva con Lomarengas',
  },
  'pt-BR': {
    adLabel: 'Anúncio',
    eyebrow: 'Uma cabana inteira, não um quarto',
    headline: 'Alugue uma cabana inteira na Lapônia, com sauna própria e espaço para todos',
    sub: 'A maior agência de aluguel de cabanas da Finlândia. Milhares de cabanas por toda a Lapônia, muitas com sauna privativa à beira do lago e lareira. Você reserva direto e fica com o lugar inteiro só para vocês, não só um quarto. Quando você quer espaço, silêncio e cozinha própria, a cabana ganha do hotel.',
    trust: ['Sauna privativa na maioria', 'A cabana inteira, sem dividir', 'Cabanas por toda a Lapônia'],
    cta: 'Ver cabanas disponíveis',
    poweredBy: 'Reserva pela Lomarengas',
  },
  'zh-CN': {
    adLabel: '广告',
    eyebrow: '整栋小屋,而非一间客房',
    headline: '在拉普兰整栋租下一座小屋,带专属桑拿,全家都住得下',
    sub: '芬兰最大的度假小屋租赁机构。拉普兰各地有数千座小屋,许多带湖畔专属桑拿和壁炉。直接预订,整座小屋归你们,而不只是一间房。想要空间、安静和自己的厨房时,小屋胜过酒店。',
    trust: ['多数带专属桑拿', '整栋租下,不与人共用', '小屋遍布拉普兰各地'],
    cta: '查看可订小屋',
    poweredBy: '由 Lomarengas 提供预订',
  },
  ko: {
    adLabel: '광고',
    eyebrow: '객실이 아니라 통째로 빌리는 오두막',
    headline: 'Lomarengas: 라플란드 오두막을 통째로, 전용 사우나와 모두가 묵을 공간까지',
    sub: '핀란드 최대 오두막 대여 업체입니다. 라플란드 곳곳에 수천 채, 상당수가 호숫가 전용 사우나와 벽난로를 갖췄습니다. 직접 예약하면 방 하나가 아니라 집 전체를 통째로 쓸 수 있습니다. 공간과 고요함, 나만의 주방을 원한다면 오두막이 호텔보다 낫습니다.',
    trust: ['대부분 전용 사우나', '집 전체, 공유 아님', '라플란드 전역에 분포'],
    cta: '예약 가능한 오두막 보기',
    poweredBy: 'Lomarengas를 통한 예약',
  },
  fr: {
    adLabel: 'Annonce',
    eyebrow: 'Un chalet entier, pas une chambre',
    headline: 'Louez un chalet entier en Laponie, avec votre sauna et de la place pour tous',
    sub: "La plus grande agence de location de chalets de Finlande. Des milliers de chalets partout en Laponie, beaucoup avec sauna privé au bord du lac et cheminée. Vous réservez en direct et avez tout le chalet pour vous, pas seulement une chambre. Quand vous voulez de l'espace, du calme et votre cuisine, le chalet l'emporte sur l'hôtel.",
    trust: ['Sauna privé dans la plupart', "Le chalet entier, sans partage", 'Des chalets partout en Laponie'],
    cta: 'Voir les chalets libres',
    poweredBy: 'Réservation via Lomarengas',
  },
  it: {
    adLabel: 'Annuncio',
    eyebrow: 'Una baita intera, non una stanza',
    headline: 'Affitta una baita intera in Lapponia, con sauna privata e spazio per tutti',
    sub: "La più grande agenzia di affitto baite della Finlandia. Migliaia di baite in tutta la Lapponia, molte con sauna privata sul lago e camino. Prenoti diretto e hai tutta la baita per te, non solo una stanza. Quando vuoi spazio, silenzio e una cucina tua, la baita batte l'hotel.",
    trust: ['Sauna privata nella maggior parte', "L'intera baita, non condivisa", 'Baite in tutta la Lapponia'],
    cta: 'Vedi baite disponibili',
    poweredBy: 'Prenotazione con Lomarengas',
  },
  nl: {
    adLabel: 'Advertentie',
    eyebrow: 'Een heel huisje, geen hotelkamer',
    headline: 'Huur een heel Lapland-huisje, met eigen sauna en plek voor iedereen',
    sub: "Finlands grootste verhuurder van vakantiehuisjes. Duizenden huisjes door heel Lapland, veel met een eigen sauna aan het meer en een open haard. Je boekt rechtstreeks en hebt het hele huisje voor jezelf, niet alleen een kamer. Wil je ruimte, rust en je eigen keuken, dan wint het huisje het van het hotel.",
    trust: ['Eigen sauna in de meeste', 'Het hele huisje, niet gedeeld', 'Huisjes door heel Lapland'],
    cta: 'Bekijk vrije huisjes',
    poweredBy: 'Boeking via Lomarengas',
  },
}

// ── EKTA copy (11 langs). Angle: travel insurance you can buy from ANY country,
// covers the trip incl. winter activities. Evergreen, accurate. ───────────────
const EKTA_COPY: Record<Lang, AdCopy> = {
  fi: {
    adLabel: 'Mainos',
    eyebrow: 'Ennen kuin lähdet',
    headline: 'EKTA, matkavakuutus Lapin reissulle, ostat sen mistä maasta tahansa',
    sub: 'Talvi Lapissa on liukasta ja kylmää, ja moottorikelkka tai husky­safari voi yllättää. EKTAn matkavakuutuksen saat verkosta muutamassa minuutissa, asuit sitten Suomessa tai et, kattaa sairaanhoidon ja peruutukset, myös talviaktiviteetit. Pieni juttu, mutta nukut paremmin.',
    trust: ['Voimassa heti verkosta', 'Mistä maasta tahansa', 'Kattaa talviaktiviteetit'],
    cta: 'Laske vakuutuksen hinta',
    poweredBy: 'Vakuutus EKTAn kautta',
  },
  en: {
    adLabel: 'Ad',
    eyebrow: 'Before you go',
    headline: 'EKTA, travel insurance for your Lapland trip, buy it from any country',
    sub: 'Winter in Lapland is cold and slippery, and a snowmobile or husky safari can surprise you. EKTA travel insurance takes a couple of minutes online, whether you live in Finland or anywhere else. It covers medical care, cancellations and winter activities. A small thing, but you sleep better.',
    trust: ['Active straight from online', 'Buy it from any country', 'Covers winter activities'],
    cta: 'Get a quick quote',
    poweredBy: 'Insurance via EKTA',
  },
  de: {
    adLabel: 'Anzeige',
    eyebrow: 'Vor der Reise',
    headline: 'EKTA, Reiseversicherung für Ihre Lappland-Reise, aus jedem Land abschließbar',
    sub: 'Der Winter in Lappland ist kalt und glatt, und eine Schneemobil- oder Husky-Safari kann überraschen. Die Reiseversicherung von EKTA schließen Sie online in wenigen Minuten ab, egal ob Sie in Finnland oder anderswo wohnen. Sie deckt medizinische Versorgung, Stornierungen und Winteraktivitäten. Eine Kleinigkeit, aber Sie schlafen ruhiger.',
    trust: ['Sofort online aktiv', 'Aus jedem Land abschließbar', 'Deckt Winteraktivitäten'],
    cta: 'Preis berechnen',
    poweredBy: 'Versicherung über EKTA',
  },
  ja: {
    adLabel: '広告',
    eyebrow: '出発前に',
    headline: 'EKTA：ラップランド旅行の旅行保険。どの国からでも加入できます',
    sub: 'ラップランドの冬は寒くて滑りやすく、スノーモービルやハスキーサファリには思わぬことも。EKTAの旅行保険はオンラインで数分、フィンランド在住でもそれ以外でも加入できます。医療・キャンセル・ウィンターアクティビティをカバー。小さなことですが、安心して眠れます。',
    trust: ['オンラインで即時有効', 'どの国からでも加入可', 'ウィンターアクティビティ対応'],
    cta: '保険料を試算する',
    poweredBy: '保険はEKTA経由',
  },
  es: {
    adLabel: 'Anuncio',
    eyebrow: 'Antes de salir',
    headline: 'EKTA, seguro de viaje para tu viaje a Laponia, lo contratas desde cualquier país',
    sub: 'El invierno en Laponia es frío y resbaladizo, y una motonieve o un safari con huskies pueden sorprenderte. El seguro de viaje de EKTA se contrata en línea en unos minutos, vivas en Finlandia o donde sea. Cubre asistencia médica, cancelaciones y actividades de invierno. Una cosa pequeña, pero duermes mejor.',
    trust: ['Activo al instante en línea', 'Desde cualquier país', 'Cubre actividades de invierno'],
    cta: 'Calcula el precio',
    poweredBy: 'Seguro con EKTA',
  },
  'pt-BR': {
    adLabel: 'Anúncio',
    eyebrow: 'Antes de viajar',
    headline: 'EKTA, seguro viagem para a sua viagem à Lapônia, você contrata de qualquer país',
    sub: 'O inverno na Lapônia é frio e escorregadio, e um snowmobile ou safári com huskies pode surpreender. O seguro viagem da EKTA leva uns minutos online, você morando na Finlândia ou em qualquer lugar. Cobre atendimento médico, cancelamentos e atividades de inverno. Coisa pequena, mas você dorme melhor.',
    trust: ['Ativo na hora, online', 'Contrate de qualquer país', 'Cobre atividades de inverno'],
    cta: 'Faça uma cotação',
    poweredBy: 'Seguro pela EKTA',
  },
  'zh-CN': {
    adLabel: '广告',
    eyebrow: '出发之前',
    headline: 'EKTA：拉普兰之行的旅行保险,在任何国家都能投保',
    sub: '拉普兰的冬天又冷又滑,雪地摩托或哈士奇雪橇都可能有意外。EKTA 旅行保险在线几分钟即可投保,无论你住在芬兰还是别处。涵盖医疗、行程取消和冬季活动。虽是小事,却让你睡得更安心。',
    trust: ['在线投保即时生效', '任何国家都能投保', '涵盖冬季活动'],
    cta: '获取报价',
    poweredBy: '由 EKTA 提供保险',
  },
  ko: {
    adLabel: '광고',
    eyebrow: '떠나기 전에',
    headline: 'EKTA: 라플란드 여행을 위한 여행자 보험, 어느 나라에서나 가입 가능',
    sub: '라플란드의 겨울은 춥고 미끄러우며, 스노모빌이나 허스키 사파리는 예상치 못한 일이 생기기도 합니다. EKTA 여행자 보험은 온라인으로 몇 분이면 되고, 핀란드에 살든 어디에 살든 가입할 수 있습니다. 의료, 취소, 겨울 액티비티까지 보장합니다. 작은 일이지만 한결 마음 놓고 잘 수 있습니다.',
    trust: ['온라인 가입 즉시 적용', '어느 나라에서나 가입', '겨울 액티비티 보장'],
    cta: '보험료 확인하기',
    poweredBy: 'EKTA를 통한 보험',
  },
  fr: {
    adLabel: 'Annonce',
    eyebrow: 'Avant de partir',
    headline: 'EKTA, assurance voyage pour votre séjour en Laponie, souscrite depuis tout pays',
    sub: "L'hiver en Laponie est froid et glissant, et une motoneige ou un safari en husky peut réserver des surprises. L'assurance voyage EKTA se souscrit en ligne en quelques minutes, que vous viviez en Finlande ou ailleurs. Elle couvre les soins, les annulations et les activités hivernales. Un petit geste, mais vous dormez mieux.",
    trust: ['Active aussitôt en ligne', 'Depuis tout pays', 'Couvre les activités hivernales'],
    cta: 'Obtenir un devis',
    poweredBy: 'Assurance via EKTA',
  },
  it: {
    adLabel: 'Annuncio',
    eyebrow: 'Prima di partire',
    headline: 'EKTA, assicurazione di viaggio per la Lapponia, la attivi da qualsiasi paese',
    sub: "L'inverno in Lapponia è freddo e scivoloso, e una motoslitta o un safari con gli husky può sorprenderti. L'assicurazione di viaggio EKTA si fa online in pochi minuti, che tu viva in Finlandia o altrove. Copre cure mediche, cancellazioni e attività invernali. Una piccola cosa, ma dormi meglio.",
    trust: ['Attiva subito online', 'Da qualsiasi paese', 'Copre le attività invernali'],
    cta: 'Calcola il prezzo',
    poweredBy: 'Assicurazione con EKTA',
  },
  nl: {
    adLabel: 'Advertentie',
    eyebrow: 'Voor je vertrekt',
    headline: 'EKTA, reisverzekering voor je Lapland-reis, af te sluiten vanuit elk land',
    sub: 'De winter in Lapland is koud en glad, en een sneeuwscooter of huskysafari kan je verrassen. De reisverzekering van EKTA regel je online in een paar minuten, of je nu in Finland woont of ergens anders. Hij dekt medische zorg, annuleringen en winteractiviteiten. Een kleine moeite, maar je slaapt rustiger.',
    trust: ['Direct online actief', 'Vanuit elk land af te sluiten', 'Dekt winteractiviteiten'],
    cta: 'Bereken de prijs',
    poweredBy: 'Verzekering via EKTA',
  },
}

// ── Hotels.com copy (11 langs). Angle: compare every Lapland hotel, igloo and
// cabin in one place, real rates, free cancellation on most rooms, pay later.
// Evergreen + accurate (no hardcoded sale %), warm stays voice. ───────────────
const HOTELS_COPY: Record<Lang, AdCopy> = {
  fi: {
    adLabel: 'Mainos',
    eyebrow: 'Vertaa kaikki yhdellä haulla',
    headline: 'Hotels.com, vertaa Lapin hotellit, lasi-iglut ja mökit yhdestä paikasta',
    sub: 'Helpoin tapa katsoa, mitä Levillä, Ylläksellä, Saariselällä ja Rovaniemellä on oikeasti vapaana sun päiville. Näet hinnat rinnakkain, suurin osa huoneista on peruutettavissa ilmaiseksi ja moneen voi maksaa vasta paikan päällä. Kun keräät kymmenen yötä, saat yhden kylkiäisenä.',
    trust: ['Ilmainen peruutus useimmissa', 'Maksa vasta perillä', '10 yötä = 1 ilmaiseksi'],
    cta: 'Katso vapaat huoneet',
    poweredBy: 'Haku Hotels.comissa',
  },
  en: {
    adLabel: 'Ad',
    eyebrow: 'Compare it all in one search',
    headline: 'Hotels.com, compare every Lapland hotel, glass igloo and cabin in one place',
    sub: "The easy way to see what's actually free for your dates across Levi, Ylläs, Saariselkä and Rovaniemi. You get the prices side by side, most rooms cancel free, and many let you pay when you arrive. Collect ten nights and you get one on the house.",
    trust: ['Free cancellation on most', 'Pay when you arrive', '10 nights = 1 free'],
    cta: 'See available rooms',
    poweredBy: 'Search on Hotels.com',
  },
  de: {
    adLabel: 'Anzeige',
    eyebrow: 'Alles in einer Suche vergleichen',
    headline: 'Hotels.com, Lappland-Hotels, Glasiglus und Hütten an einem Ort vergleichen',
    sub: 'Der einfache Weg, zu sehen, was für Ihre Tage in Levi, Ylläs, Saariselkä und Rovaniemi wirklich frei ist. Sie sehen die Preise nebeneinander, die meisten Zimmer sind kostenlos stornierbar und viele zahlen Sie erst vor Ort. Zehn Nächte sammeln, eine gratis bekommen.',
    trust: ['Meist kostenlos stornierbar', 'Erst vor Ort zahlen', '10 Nächte = 1 gratis'],
    cta: 'Freie Zimmer ansehen',
    poweredBy: 'Suche auf Hotels.com',
  },
  ja: {
    adLabel: '広告',
    eyebrow: '一度の検索でまとめて比較',
    headline: 'Hotels.com：ラップランドのホテル、ガラスイグルー、コテージを一括比較',
    sub: 'レヴィ、ウッラス、サーリセルカ、ロヴァニエミで、あなたの日程に本当に空いている宿をまとめて確認。料金を並べて見られ、多くの部屋は無料キャンセル、現地払いも選べます。10泊たまると1泊分が無料に。',
    trust: ['多くが無料キャンセル', '現地払いも選べる', '10泊で1泊無料'],
    cta: '空室を見る',
    poweredBy: 'Hotels.comで検索',
  },
  es: {
    adLabel: 'Anuncio',
    eyebrow: 'Compáralo todo en una búsqueda',
    headline: 'Hotels.com, compara hoteles, iglús de cristal y cabañas de Laponia en un solo sitio',
    sub: 'La forma fácil de ver qué hay libre de verdad para tus fechas en Levi, Ylläs, Saariselkä y Rovaniemi. Ves los precios uno al lado del otro, la mayoría de las habitaciones se cancelan gratis y en muchas pagas al llegar. Junta diez noches y te llevas una gratis.',
    trust: ['Cancelación gratis en la mayoría', 'Paga al llegar', '10 noches = 1 gratis'],
    cta: 'Ver habitaciones libres',
    poweredBy: 'Búsqueda en Hotels.com',
  },
  'pt-BR': {
    adLabel: 'Anúncio',
    eyebrow: 'Compare tudo numa busca só',
    headline: 'Hotels.com, compare hotéis, iglus de vidro e cabanas da Lapônia num lugar só',
    sub: 'O jeito fácil de ver o que está realmente livre nas suas datas em Levi, Ylläs, Saariselkä e Rovaniemi. Você vê os preços lado a lado, a maioria dos quartos cancela de graça e em muitos dá para pagar na chegada. Junte dez diárias e ganhe uma.',
    trust: ['Cancelamento grátis na maioria', 'Pague na chegada', '10 diárias = 1 grátis'],
    cta: 'Ver quartos livres',
    poweredBy: 'Busca no Hotels.com',
  },
  'zh-CN': {
    adLabel: '广告',
    eyebrow: '一次搜索,全部对比',
    headline: 'Hotels.com：拉普兰的酒店、玻璃穹顶屋和小屋,一处对比',
    sub: '想知道你的日期里莱维、于拉斯、萨利色尔卡和罗瓦涅米还有哪些空房,这是最省事的方式。价格并排呈现,多数房间可免费取消,不少还能到店再付。住满十晚,送你一晚。',
    trust: ['多数可免费取消', '可到店再付', '住十晚送一晚'],
    cta: '查看空房',
    poweredBy: '在 Hotels.com 搜索',
  },
  ko: {
    adLabel: '광고',
    eyebrow: '한 번의 검색으로 한눈에 비교',
    headline: 'Hotels.com: 라플란드의 호텔, 글래스 이글루, 오두막을 한곳에서 비교',
    sub: '레비, 일래스, 사리셀카, 로바니에미에서 원하는 날짜에 실제로 빈 숙소를 가장 쉽게 확인하는 방법입니다. 가격을 나란히 보고, 대부분의 객실은 무료 취소가 되며, 상당수는 현지 결제도 됩니다. 열 박을 모으면 한 박이 무료입니다.',
    trust: ['대부분 무료 취소', '현지 결제 가능', '10박이면 1박 무료'],
    cta: '빈 객실 보기',
    poweredBy: 'Hotels.com에서 검색',
  },
  fr: {
    adLabel: 'Annonce',
    eyebrow: 'Tout comparer en une recherche',
    headline: 'Hotels.com, comparez hôtels, igloos de verre et chalets de Laponie au même endroit',
    sub: "La façon simple de voir ce qui est vraiment libre à vos dates à Levi, Ylläs, Saariselkä et Rovaniemi. Vous voyez les prix côte à côte, la plupart des chambres s'annulent gratuitement et beaucoup se paient à l'arrivée. Dix nuits cumulées, une offerte.",
    trust: ['Annulation gratuite le plus souvent', "Payez à l'arrivée", '10 nuits = 1 offerte'],
    cta: 'Voir les chambres libres',
    poweredBy: 'Recherche sur Hotels.com',
  },
  it: {
    adLabel: 'Annuncio',
    eyebrow: 'Confronta tutto in una ricerca',
    headline: 'Hotels.com, confronta hotel, igloo di vetro e baite della Lapponia in un posto solo',
    sub: "Il modo semplice per vedere cosa è davvero libero nelle tue date a Levi, Ylläs, Saariselkä e Rovaniemi. Vedi i prezzi affiancati, la maggior parte delle camere si cancella gratis e molte le paghi all'arrivo. Metti insieme dieci notti e una è in regalo.",
    trust: ['Cancellazione gratis nella maggior parte', "Paghi all'arrivo", '10 notti = 1 in regalo'],
    cta: 'Vedi camere libere',
    poweredBy: 'Ricerca su Hotels.com',
  },
  nl: {
    adLabel: 'Advertentie',
    eyebrow: 'Vergelijk alles in één zoekopdracht',
    headline: 'Hotels.com, vergelijk Lapland-hotels, glasiglo\'s en huisjes op één plek',
    sub: 'De makkelijke manier om te zien wat er echt vrij is voor jouw dagen in Levi, Ylläs, Saariselkä en Rovaniemi. Je ziet de prijzen naast elkaar, de meeste kamers annuleer je gratis en veel kamers betaal je pas bij aankomst. Spaar tien nachten en je krijgt er één gratis.',
    trust: ['Meestal gratis annuleren', 'Betaal bij aankomst', '10 nachten = 1 gratis'],
    cta: 'Bekijk vrije kamers',
    poweredBy: 'Zoeken op Hotels.com',
  },
}

// ── Kiwitaxi copy (11 langs). Angle: the concrete midnight-arrival pain
// (−25 °C, no taxi at the rank, foreign language) → fixed price locked at
// booking, driver tracks the flight and waits with a name sign. Evergreen. ────
const KIWITAXI_COPY: Record<Lang, AdCopy> = {
  fi: {
    adLabel: 'Mainos',
    eyebrow: 'Kentältä perille asti',
    headline: 'Kiwitaxi, kuljettaja odottaa nimikyltin kanssa, vaikka kone olisi myöhässä',
    sub: 'Rovaniemen tai Kittilän kentällä keskiyöllä, 25 astetta pakkasta, eikä taksitolpalla ole autoa. Kiwitaxilla hinta lyödään lukkoon jo varatessa, kuljettaja seuraa lentoasi ja odottaa aulassa nimikyltin kanssa. Lastenistuimet ja tila suksipussille hoituvat samalla varauksella.',
    trust: ['Kiinteä hinta varatessa', 'Kuljettaja seuraa lentoa', 'Nouto myös yölennoilta'],
    cta: 'Varaa kuljetus kentältä',
    poweredBy: 'Kuljetus Kiwitaxin kautta',
  },
  en: {
    adLabel: 'Ad',
    eyebrow: 'From the airport, door to door',
    headline: 'Kiwitaxi, your driver waits with a name sign, even when the flight runs late',
    sub: "Landing at Rovaniemi or Kittilä at midnight, minus 25 outside, and not a taxi at the rank. With Kiwitaxi the price is locked when you book, the driver tracks your flight and waits in arrivals with a name sign. Child seats and ski-bag space go on the same booking.",
    trust: ['Price fixed at booking', 'Driver tracks your flight', 'Night arrivals covered'],
    cta: 'Book your transfer',
    poweredBy: 'Transfer via Kiwitaxi',
  },
  de: {
    adLabel: 'Anzeige',
    eyebrow: 'Vom Flughafen bis vor die Tür',
    headline: 'Kiwitaxi, Ihr Fahrer wartet mit Namensschild, auch wenn der Flug Verspätung hat',
    sub: 'Mitternacht in Rovaniemi oder Kittilä, minus 25 Grad, und am Taxistand steht kein Wagen. Bei Kiwitaxi steht der Preis schon bei der Buchung fest, der Fahrer verfolgt Ihren Flug und wartet in der Ankunftshalle mit Namensschild. Kindersitze und Platz für den Skisack gibt es in derselben Buchung.',
    trust: ['Festpreis bei Buchung', 'Fahrer verfolgt den Flug', 'Auch für Nachtankünfte'],
    cta: 'Transfer buchen',
    poweredBy: 'Transfer über Kiwitaxi',
  },
  ja: {
    adLabel: '広告',
    eyebrow: '空港からドアまで',
    headline: 'Kiwitaxi：飛行機が遅れても、ドライバーがネームボードを持って待っています',
    sub: '深夜のロヴァニエミやキッティラ、外は氷点下25度、タクシー乗り場に車はなし。Kiwitaxiなら予約時に料金が確定し、ドライバーがフライトを追跡して到着ロビーでネームボードを掲げて待ちます。チャイルドシートやスキーバッグのスペースも同じ予約でOK。',
    trust: ['予約時に料金確定', 'フライトを追跡', '深夜到着にも対応'],
    cta: '送迎を予約する',
    poweredBy: '送迎はKiwitaxi経由',
  },
  es: {
    adLabel: 'Anuncio',
    eyebrow: 'Del aeropuerto a la puerta',
    headline: 'Kiwitaxi, tu conductor espera con un cartel, aunque el vuelo llegue tarde',
    sub: 'Medianoche en Rovaniemi o Kittilä, 25 bajo cero, y ni un taxi en la parada. Con Kiwitaxi el precio queda fijado al reservar, el conductor sigue tu vuelo y te espera en llegadas con un cartel con tu nombre. Sillas infantiles y espacio para los esquís, en la misma reserva.',
    trust: ['Precio fijo al reservar', 'Sigue tu vuelo', 'Cubre llegadas nocturnas'],
    cta: 'Reserva tu traslado',
    poweredBy: 'Traslado con Kiwitaxi',
  },
  'pt-BR': {
    adLabel: 'Anúncio',
    eyebrow: 'Do aeroporto até a porta',
    headline: 'Kiwitaxi, o motorista espera com uma placa, mesmo se o voo atrasar',
    sub: 'Meia-noite em Rovaniemi ou Kittilä, 25 graus negativos, e nenhum táxi no ponto. Com a Kiwitaxi o preço é travado na reserva, o motorista acompanha seu voo e espera no desembarque com uma placa com seu nome. Cadeirinha e espaço para o equipamento de esqui entram na mesma reserva.',
    trust: ['Preço travado na reserva', 'Motorista acompanha o voo', 'Atende chegadas noturnas'],
    cta: 'Reservar o traslado',
    poweredBy: 'Traslado pela Kiwitaxi',
  },
  'zh-CN': {
    adLabel: '广告',
    eyebrow: '从机场直达住处',
    headline: 'Kiwitaxi：司机举着名牌等你,航班晚点也一样',
    sub: '深夜落地罗瓦涅米或基蒂莱,室外零下25度,出租车站空无一车。用Kiwitaxi,价格在预订时即已锁定,司机会跟踪你的航班,在到达大厅举名牌等候。儿童座椅和滑雪装备空间,同一订单一并搞定。',
    trust: ['预订即锁定价格', '司机跟踪航班', '深夜到达也接'],
    cta: '预订接送',
    poweredBy: '接送由 Kiwitaxi 提供',
  },
  ko: {
    adLabel: '광고',
    eyebrow: '공항에서 숙소 문 앞까지',
    headline: 'Kiwitaxi: 비행기가 늦어도 기사가 이름 팻말을 들고 기다립니다',
    sub: '자정의 로바니에미나 키틸래, 바깥은 영하 25도, 택시 승강장엔 차가 없습니다. Kiwitaxi는 예약 시 요금이 확정되고, 기사가 항공편을 추적해 도착장에서 이름 팻말을 들고 기다립니다. 카시트와 스키 가방 공간도 같은 예약으로 해결됩니다.',
    trust: ['예약 시 요금 확정', '항공편 실시간 추적', '심야 도착도 픽업'],
    cta: '픽업 예약하기',
    poweredBy: 'Kiwitaxi를 통한 픽업',
  },
  fr: {
    adLabel: 'Annonce',
    eyebrow: "De l'aéroport à la porte",
    headline: 'Kiwitaxi, votre chauffeur attend avec une pancarte, même si le vol a du retard',
    sub: "Minuit à Rovaniemi ou Kittilä, moins 25 dehors, et pas un taxi à la borne. Avec Kiwitaxi, le prix est verrouillé à la réservation, le chauffeur suit votre vol et vous attend aux arrivées avec une pancarte à votre nom. Sièges enfants et place pour les skis, dans la même réservation.",
    trust: ['Prix fixé à la réservation', 'Suivi de votre vol', 'Arrivées de nuit assurées'],
    cta: 'Réserver le transfert',
    poweredBy: 'Transfert via Kiwitaxi',
  },
  it: {
    adLabel: 'Annuncio',
    eyebrow: "Dall'aeroporto alla porta",
    headline: "Kiwitaxi, l'autista ti aspetta con un cartello, anche se il volo è in ritardo",
    sub: 'Mezzanotte a Rovaniemi o Kittilä, 25 gradi sotto zero, e nemmeno un taxi al posteggio. Con Kiwitaxi il prezzo si blocca alla prenotazione, l\'autista segue il tuo volo e ti aspetta agli arrivi con un cartello col tuo nome. Seggiolini e spazio per la sacca da sci nella stessa prenotazione.',
    trust: ['Prezzo bloccato alla prenotazione', "L'autista segue il volo", 'Anche arrivi notturni'],
    cta: 'Prenota il transfer',
    poweredBy: 'Transfer con Kiwitaxi',
  },
  nl: {
    adLabel: 'Advertentie',
    eyebrow: 'Van het vliegveld tot de deur',
    headline: 'Kiwitaxi, je chauffeur wacht met een naambord, ook als de vlucht vertraagd is',
    sub: 'Middernacht in Rovaniemi of Kittilä, min 25 buiten, en geen taxi bij de standplaats. Bij Kiwitaxi staat de prijs vast bij het boeken, de chauffeur volgt je vlucht en wacht in de aankomsthal met een naambord. Kinderzitjes en ruimte voor de skitas regel je in dezelfde boeking.',
    trust: ['Vaste prijs bij boeking', 'Chauffeur volgt je vlucht', 'Ook nachtelijke aankomsten'],
    cta: 'Boek je transfer',
    poweredBy: 'Transfer via Kiwitaxi',
  },
}

const COPY: Record<PartnerKey, Record<Lang, AdCopy>> = {
  hotels: HOTELS_COPY,
  lomarengas: LOMARENGAS_COPY,
  ekta: EKTA_COPY,
  kiwitaxi: KIWITAXI_COPY,
}

interface PartnerStayAdProps {
  partner: PartnerKey
  /** snake_case GA4/attribution SID (+ Travelpayouts sub_id for EKTA). */
  sid: string
  className?: string
}

export default function PartnerStayAd({ partner, sid, className = '' }: PartnerStayAdProps) {
  const lang = useLang()
  const cfg = CONFIG[partner]
  const c = COPY[partner][lang] ?? COPY[partner].en
  const Icon = cfg.icon
  const href = cfg.linkFor(sid, lang)

  return (
    <section
      className={`lvs-card relative overflow-hidden ${className}`}
      style={{ borderTop: `3px solid ${cfg.accent}` }}
      aria-label={c.headline}
    >
      {/* Soft advertiser-accent wash, top-right, ties the card to their brand. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full"
        style={{ background: `radial-gradient(closest-side, ${cfg.accent}1F, transparent)` }}
      />

      <div className="relative p-6 sm:p-8">
        {/* Header: icon badge + eyebrow left, BIG real partner logo right.
            (Ad label moved to the bottom-right corner — Vesa 2026-07-06.) */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <span
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
              style={{ background: `${cfg.accent}14`, boxShadow: `inset 0 0 0 1px ${cfg.accent}33` }}
            >
              <Icon className="h-5 w-5" style={{ color: cfg.accent }} aria-hidden="true" />
            </span>
            <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: cfg.accentDark }}>
              {c.eyebrow}
            </p>
          </div>
          <img
            src={cfg.logo}
            alt={cfg.brand}
            width={260}
            height={80}
            loading="lazy"
            decoding="async"
            className="h-14 sm:h-20 w-auto max-w-[260px] shrink-0"
          />
        </div>

        <h3 className="font-heading text-2xl sm:text-3xl text-night tracking-wide leading-tight mb-3 max-w-2xl text-balance">
          {c.headline}
        </h3>
        <p className="text-charcoal/75 text-sm sm:text-base leading-relaxed max-w-2xl">{c.sub}</p>

        {/* Trust points, advertiser-accent dots. */}
        <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2.5">
          {c.trust.map((point) => (
            <li key={point} className="flex items-center gap-2 text-charcoal/80 text-sm">
              <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: cfg.accent }} aria-hidden="true" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
          <a
            href={href}
            target="_blank"
            rel="sponsored nofollow noopener"
            onClick={() => trackAffiliateClick(cfg.trackKey, `stay_ad:${sid}`, href)}
            className="group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-white font-semibold no-underline shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
            style={{ backgroundColor: cfg.accent, boxShadow: `0 14px 30px -12px ${cfg.accent}8C` }}
          >
            {c.cta}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
          <span className="text-charcoal/45 text-[11px] uppercase tracking-[0.12em]">{c.poweredBy}</span>
        </div>

        <AffiliateDisclosure variant="compact" className="mt-6 !justify-start text-left" />
      </div>

      {/* Ad label — bottom-right corner (Vesa 2026-07-06). */}
      <span
        className="absolute bottom-3.5 right-4 z-10 inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em]"
        style={{ background: `${cfg.accent}14`, color: cfg.accentDark }}
      >
        {c.adLabel}
      </span>
    </section>
  )
}
