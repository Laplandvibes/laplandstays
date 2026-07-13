import type { LucideIcon } from 'lucide-react'
import { ArrowRight, Home, ShieldCheck, BedDouble, Car } from 'lucide-react'
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

type PartnerKey = 'hotels' | 'lomarengas' | 'ekta' | 'cars'

interface PartnerConfig {
  brand: string
  /** Optional: a category advertiser (car rental) has no single brand logo, so
   *  the card renders the brand name as a wordmark instead. */
  logo?: string
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
  // Car rental (EconomyBookings via the go.laplandvibes.com/go/cars Worker).
  // Replaced the Kiwitaxi transfer ad 2026-07-09 — Kiwitaxi doesn't serve
  // Lapland airports (Vesa tested it), so it was misleading; car rental works
  // from Rovaniemi/Kittilä/Ivalo. No logo (DiscoverCars is pending TP approval,
  // EconomyBookings has none) → the card shows the brand wordmark. Teal.
  cars: {
    brand: 'EconomyBookings',
    logo: '/images/partners/economybookings.svg',
    linkFor: (sid) => `https://go.laplandvibes.com/go/cars?sid=${encodeURIComponent(sid)}`,
    accent: '#0F766E',
    accentDark: '#0B5E57',
    icon: Car,
    trackKey: 'cars',
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
  sv: {
    adLabel: 'Annons',
    eyebrow: 'En hel stuga, inte ett hotellrum',
    headline: 'Hyr en hel stuga i Lappland, med egen bastu och plats för alla',
    sub: 'Finlands största stuguthyrare. Tusentals stugor runt om i Lappland, många med egen bastu vid sjön och öppen spis. Du bokar direkt och får hela stället för er själva, inte bara ett rum. När du vill ha plats, lugn och eget kök vinner stugan över hotellet.',
    trust: ['Egen bastu i de flesta', 'Hela stugan, inte delad', 'Stugor i hela Lappland'],
    cta: 'Se lediga stugor',
    poweredBy: 'Bokning via Lomarengas',
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
  sv: {
    adLabel: 'Annons',
    eyebrow: 'Innan du åker',
    headline: 'EKTA, reseförsäkring för din Lapplandsresa, teckna den från vilket land som helst',
    sub: 'Vintern i Lappland är kall och halkig, och en skoter- eller huskytur kan överraska. EKTA:s reseförsäkring tecknar du online på några minuter, oavsett om du bor i Finland eller någon annanstans. Den täcker vård, avbokningar och vinteraktiviteter. En liten sak, men du sover bättre.',
    trust: ['Gäller direkt online', 'Teckna från vilket land som helst', 'Täcker vinteraktiviteter'],
    cta: 'Räkna ut priset',
    poweredBy: 'Försäkring via EKTA',
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
  sv: {
    adLabel: 'Annons',
    eyebrow: 'Jämför allt i en sökning',
    headline: 'Hotels.com, jämför Lapplands hotell, glasiglos och stugor på ett ställe',
    sub: 'Det enkla sättet att se vad som faktiskt är ledigt för dina datum i Levi, Ylläs, Saariselkä och Rovaniemi. Du ser priserna sida vid sida, de flesta rum går att avboka gratis och många kan du betala när du kommer fram. Samla tio nätter så får du en på köpet.',
    trust: ['Fri avbokning på de flesta', 'Betala när du kommer fram', '10 nätter = 1 gratis'],
    cta: 'Se lediga rum',
    poweredBy: 'Sök på Hotels.com',
  },
}

// ── Car-rental copy (11 langs). Angle: Lapland distances are long + buses
// sparse → your own car reaches the ski resort, husky farm and aurora spots on
// your schedule. Pick up at the airport, winter tyres standard. Evergreen. ────
const CARS_COPY: Record<Lang, AdCopy> = {
  fi: {
    adLabel: 'Mainos',
    eyebrow: 'Oma tahti Lapissa',
    headline: 'Vuokra-auto Lapin kentältä, tuntureille ja revontulille silloin kun itse haluat',
    sub: 'Lapissa välimatkat ovat pitkät ja julkinen liikenne harvassa. Omalla autolla ehdit hotellilta hiihtokeskukseen, husky-tilalle ja parhaille revontulipaikoille ilman aikatauluja. Nouto suoraan lentokentältä, ja talvirenkaat kuuluvat Suomessa vakiona.',
    trust: ['Nouto lentokentältä', 'Talvirenkaat vakiona', 'Vertaa vuokraamoja'],
    cta: 'Katso vuokra-autot',
    poweredBy: 'Autovuokraus EconomyBookingsin kautta',
  },
  en: {
    adLabel: 'Ad',
    eyebrow: 'Your own pace in Lapland',
    headline: 'A rental car from the airport, reach the fells and the aurora on your own schedule',
    sub: 'Distances in Lapland are long and public transport is sparse. With your own car you get from the hotel to the ski resort, the husky farm and the best aurora spots without waiting for a bus. Pick up right at the airport, and winter tyres come as standard in Finland.',
    trust: ['Pick up at the airport', 'Winter tyres included', 'Compare rental companies'],
    cta: 'See rental cars',
    poweredBy: 'Car rental via EconomyBookings',
  },
  de: {
    adLabel: 'Anzeige',
    eyebrow: 'Ihr eigenes Tempo in Lappland',
    headline: 'Ein Mietwagen ab dem Flughafen, zu den Fjälls und Nordlichtern, wann Sie wollen',
    sub: 'In Lappland sind die Entfernungen groß und öffentliche Verkehrsmittel selten. Mit dem eigenen Auto kommen Sie ohne Fahrplan vom Hotel zum Skigebiet, zur Huskyfarm und zu den besten Nordlicht-Plätzen. Abholung direkt am Flughafen, Winterreifen sind in Finnland Standard.',
    trust: ['Abholung am Flughafen', 'Winterreifen inklusive', 'Autovermietungen vergleichen'],
    cta: 'Mietwagen ansehen',
    poweredBy: 'Autovermietung über EconomyBookings',
  },
  ja: {
    adLabel: '広告',
    eyebrow: 'ラップランドを自分のペースで',
    headline: '空港からレンタカーで、フィエルやオーロラへ好きな時間に',
    sub: 'ラップランドは距離が長く、公共交通は限られています。自分の車があれば、ホテルからスキー場、ハスキー牧場、オーロラの名所まで時刻表を気にせず移動できます。空港で直接受け取り、フィンランドでは冬用タイヤが標準装備です。',
    trust: ['空港で受け取り', '冬用タイヤ標準装備', 'レンタカー会社を比較'],
    cta: 'レンタカーを見る',
    poweredBy: 'レンタカーはEconomyBookings経由',
  },
  es: {
    adLabel: 'Anuncio',
    eyebrow: 'Tu propio ritmo en Laponia',
    headline: 'Un coche de alquiler desde el aeropuerto, a los montes y las auroras cuando quieras',
    sub: 'En Laponia las distancias son largas y el transporte público escaso. Con tu propio coche vas del hotel a la estación de esquí, a la granja de huskies y a los mejores puntos para ver auroras sin esperar el autobús. Recogida en el aeropuerto y neumáticos de invierno de serie en Finlandia.',
    trust: ['Recogida en el aeropuerto', 'Neumáticos de invierno incluidos', 'Compara empresas de alquiler'],
    cta: 'Ver coches de alquiler',
    poweredBy: 'Alquiler de coches vía EconomyBookings',
  },
  'pt-BR': {
    adLabel: 'Anúncio',
    eyebrow: 'Seu próprio ritmo na Lapônia',
    headline: 'Um carro alugado no aeroporto, até as montanhas e a aurora na sua hora',
    sub: 'Na Lapônia as distâncias são longas e o transporte público é escasso. Com o seu carro você vai do hotel à estação de esqui, à fazenda de huskies e aos melhores pontos de aurora sem esperar ônibus. Retirada no aeroporto e pneus de inverno de série na Finlândia.',
    trust: ['Retirada no aeroporto', 'Pneus de inverno incluídos', 'Compare locadoras'],
    cta: 'Ver carros para alugar',
    poweredBy: 'Aluguel de carro via EconomyBookings',
  },
  'zh-CN': {
    adLabel: '广告',
    eyebrow: '在拉普兰按自己的节奏',
    headline: '机场租车,随时前往雪山和极光',
    sub: '拉普兰地广人稀,公共交通班次很少。自驾就能随时从酒店前往滑雪场、哈士奇农场和最佳极光地点,不必等巴士。机场直接取车,芬兰的租车标配冬季轮胎。',
    trust: ['机场取车', '标配冬季轮胎', '比较租车公司'],
    cta: '查看租车',
    poweredBy: '租车服务由 EconomyBookings 提供',
  },
  ko: {
    adLabel: '광고',
    eyebrow: '라플란드를 내 속도로',
    headline: '공항에서 렌터카로, 원할 때 언제든 산과 오로라로',
    sub: '라플란드는 이동 거리가 길고 대중교통이 드뭅니다. 렌터카가 있으면 버스를 기다리지 않고 호텔에서 스키장, 허스키 농장, 최고의 오로라 명소까지 갈 수 있습니다. 공항에서 바로 픽업하고, 핀란드에서는 겨울용 타이어가 기본입니다.',
    trust: ['공항에서 픽업', '겨울용 타이어 기본', '렌터카 업체 비교'],
    cta: '렌터카 보기',
    poweredBy: '렌터카는 EconomyBookings 제공',
  },
  fr: {
    adLabel: 'Annonce',
    eyebrow: 'Votre rythme en Laponie',
    headline: 'Une voiture de location à l’aéroport, vers les fjells et les aurores quand vous voulez',
    sub: "En Laponie les distances sont longues et les transports en commun rares. Avec votre propre voiture, vous allez de l'hôtel à la station de ski, à la ferme de huskies et aux meilleurs spots d'aurores sans attendre le bus. Retrait directement à l'aéroport, pneus hiver de série en Finlande.",
    trust: ['Retrait à l’aéroport', 'Pneus hiver inclus', 'Comparez les loueurs'],
    cta: 'Voir les voitures',
    poweredBy: 'Location de voiture via EconomyBookings',
  },
  it: {
    adLabel: 'Annuncio',
    eyebrow: 'Il tuo ritmo in Lapponia',
    headline: 'Un’auto a noleggio dall’aeroporto, verso i fjell e l’aurora quando vuoi',
    sub: "In Lapponia le distanze sono lunghe e i mezzi pubblici scarsi. Con la tua auto raggiungi dall'hotel la stazione sciistica, la fattoria degli husky e i punti migliori per l'aurora senza aspettare il bus. Ritiro direttamente in aeroporto, pneumatici invernali di serie in Finlandia.",
    trust: ['Ritiro in aeroporto', 'Pneumatici invernali inclusi', 'Confronta gli autonoleggi'],
    cta: 'Vedi le auto a noleggio',
    poweredBy: 'Autonoleggio tramite EconomyBookings',
  },
  nl: {
    adLabel: 'Advertentie',
    eyebrow: 'Je eigen tempo in Lapland',
    headline: 'Een huurauto vanaf de luchthaven, naar de fjells en het noorderlicht wanneer je wilt',
    sub: 'In Lapland zijn de afstanden groot en het openbaar vervoer schaars. Met je eigen auto rijd je van het hotel naar het skigebied, de huskyfarm en de beste noorderlichtplekken zonder op de bus te wachten. Ophalen direct op de luchthaven, en winterbanden zijn in Finland standaard.',
    trust: ['Ophalen op de luchthaven', 'Winterbanden inbegrepen', 'Vergelijk verhuurbedrijven'],
    cta: 'Bekijk huurauto’s',
    poweredBy: 'Autohuur via EconomyBookings',
  },
  sv: {
    adLabel: 'Annons',
    eyebrow: 'Din egen takt i Lappland',
    headline: 'En hyrbil från flygplatsen, nå fjällen och norrskenet när det passar dig',
    sub: 'Avstånden i Lappland är långa och kollektivtrafiken gles. Med egen bil tar du dig från hotellet till skidorten, huskygården och de bästa norrskensplatserna utan att vänta på bussen. Hämta direkt på flygplatsen, och vinterdäck ingår som standard i Finland.',
    trust: ['Hämta på flygplatsen', 'Vinterdäck ingår', 'Jämför biluthyrare'],
    cta: 'Se hyrbilar',
    poweredBy: 'Biluthyrning via EconomyBookings',
  },
}

const COPY: Record<PartnerKey, Record<Lang, AdCopy>> = {
  hotels: HOTELS_COPY,
  lomarengas: LOMARENGAS_COPY,
  ekta: EKTA_COPY,
  cars: CARS_COPY,
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
          {cfg.logo ? (
            <img
              src={cfg.logo}
              alt={cfg.brand}
              width={260}
              height={80}
              loading="lazy"
              decoding="async"
              className="h-14 sm:h-20 w-auto max-w-[260px] shrink-0"
            />
          ) : (
            // Category advertiser (car rental) without a brand logo: brand name
            // as a wordmark keeps the header balanced, no fake logo.
            <span className="font-heading text-2xl sm:text-3xl text-night tracking-wide shrink-0">
              {cfg.brand}
            </span>
          )}
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

        <div className="mt-6">
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
          {/* Attribution under the CTA, not beside it (Vesa 2026-07-07). */}
          <p className="mt-2.5 text-charcoal/40 text-[10.5px] uppercase tracking-[0.12em]">{c.poweredBy}</p>
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
