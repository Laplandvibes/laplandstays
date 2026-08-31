import type { LucideIcon } from 'lucide-react'
import { ArrowRight, Home, Car } from 'lucide-react'
import { useLang, type Lang } from '../i18n/useLang'
import { trackAffiliateClick } from '../lib/analytics'
import { buildAffiliateUrl, buildLomarengasUrl, type LomarengasArea } from '../lib/affiliate'
import AffiliateDisclosure from './AffiliateDisclosure'

// ─────────────────────────────────────────────────────────────────────────────
// PartnerStayAd, a brand-skinned affiliate ad card for LaplandStays' booking
// partners. Two advertisers, each in their OWN brand skin:
//   • Lomarengas (Home / green), Finland's biggest holiday-cottage agency,
//     direct Adtraction deep-link (channel as=2086870803; no client SID slot).
//   • Car rental (Car / teal), EconomyBookings via go.laplandvibes.com/go/cars.
// Direct links come from _affiliate/affiliate-links.json.
//
// Retired units — restore from git history if a slot ever calls for them:
//   • hotels (fi=Sembo / other locales=Trip.com): never mounted on any page;
//     every page already funnels to those same partners through the site's own
//     hotel CTAs, so the card only duplicated them. Removed 2026-07-25.
//   • ekta travel insurance: Vesa ruled it off-topic for an accommodation site
//     (see the note in Home.tsx, 2026-07-03). Config + copy removed 2026-07-25.
//
// premium_design_standard §6 + affiliate_ad_creative_process: each ad adopts the
// ADVERTISER's own brand (real logo + their accent colour) as a clearly-labelled
// "Mainos / Ad" unit. The card is rendered in this site's LIGHT editorial idiom
// (warm paper-white .lvs-card with the advertiser's accent as a top rule + soft
// corner wash) so it reads as an authentic partner placement that still belongs
// on the cream page — Lomarengas green and EconomyBookings teal both sit
// cleanly on white. Offers are EVERGREEN and accurate (no time-limited promos
// hardcoded, no invented stats), per the affiliate creative rule.
//
// Required affiliate attributes (LV spec): target="_blank"
// rel="sponsored nofollow noopener", NO noreferrer (the Worker / affiliate
// attribution reads Referer; we keep it consistent across every affiliate <a>).
// ─────────────────────────────────────────────────────────────────────────────

type PartnerKey = 'lomarengas' | 'cars'

interface PartnerConfig {
  brand: string
  /** Optional: a category advertiser (car rental) has no single brand logo, so
   *  the card renders the brand name as a wordmark instead. */
  logo?: string
  /** Advertiser brand accent, border rule, icon, trust dots, CTA pill. */
  accent: string
  accentDark: string
  icon: LucideIcon
  trackKey: string
}

const CONFIG: Record<PartnerKey, PartnerConfig> = {
  // Lomarengas, Finland's largest holiday-cottage agency. Brand green.
  lomarengas: {
    brand: 'Lomarengas',
    logo: '/images/partners/lomarengas.png',
    accent: '#10B981',
    accentDark: '#047857',
    icon: Home,
    trackKey: 'lomarengas',
  },
  // Car rental (EconomyBookings via the go.laplandvibes.com/go/cars Worker).
  // Replaced the Kiwitaxi transfer ad 2026-07-09 — Kiwitaxi doesn't serve
  // Lapland airports (Vesa tested it), so it was misleading; car rental works
  // from Rovaniemi/Kittilä/Ivalo. No logo (DiscoverCars is pending TP approval,
  // EconomyBookings has none) → the card shows the brand wordmark. Teal.
  cars: {
    brand: 'EconomyBookings',
    logo: '/images/partners/economybookings.svg',
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
    sub: "La più grande agenzia di affitto baite della Finlandia. Migliaia di baite in tutta la Lapponia, molte con sauna privata sul lago e camino. Prenoti diretto e ha tutta la baita per sé, non solo una stanza. Quando vuole spazio, silenzio e una cucina propria, la baita batte l'hotel.",
    trust: ['Sauna privata nella maggior parte', "L'intera baita, non condivisa", 'Baite in tutta la Lapponia'],
    cta: 'Vedi baite disponibili',
    poweredBy: 'Prenotazione con Lomarengas',
  },
  nl: {
    adLabel: 'Advertentie',
    eyebrow: 'Een heel huisje, geen hotelkamer',
    headline: 'Huur een heel Lapland-huisje, met eigen sauna en plek voor iedereen',
    sub: "Finlands grootste verhuurder van vakantiehuisjes. Duizenden huisjes door heel Lapland, veel met een eigen sauna aan het meer en een open haard. U boekt rechtstreeks en hebt het hele huisje voor uzelf, niet alleen een kamer. Wilt u ruimte, rust en uw eigen keuken, dan wint het huisje het van het hotel.",
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
    headline: '空港からレンタカーで、山々やオーロラへ好きな時間に',
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
    headline: 'Une voiture de location à l’aéroport, vers les fjälls et les aurores quand vous voulez',
    sub: "En Laponie les distances sont longues et les transports en commun rares. Avec votre propre voiture, vous allez de l'hôtel à la station de ski, à la ferme de huskies et aux meilleurs spots d'aurores sans attendre le bus. Retrait directement à l'aéroport, pneus hiver de série en Finlande.",
    trust: ['Retrait à l’aéroport', 'Pneus hiver inclus', 'Comparez les loueurs'],
    cta: 'Voir les voitures',
    poweredBy: 'Location de voiture via EconomyBookings',
  },
  it: {
    adLabel: 'Annuncio',
    eyebrow: 'Il Suo ritmo in Lapponia',
    headline: 'Un’auto a noleggio dall’aeroporto, verso i fjäll e l’aurora quando vuoi',
    sub: "In Lapponia le distanze sono lunghe e i mezzi pubblici scarsi. Con un’auto propria raggiunge dall'hotel la stazione sciistica, la fattoria degli husky e i punti migliori per l'aurora senza aspettare il bus. Ritiro direttamente in aeroporto, pneumatici invernali di serie in Finlandia.",
    trust: ['Ritiro in aeroporto', 'Pneumatici invernali inclusi', 'Confronta gli autonoleggi'],
    cta: 'Vedi le auto a noleggio',
    poweredBy: 'Autonoleggio tramite EconomyBookings',
  },
  nl: {
    adLabel: 'Advertentie',
    eyebrow: 'Uw eigen tempo in Lapland',
    headline: 'Een huurauto vanaf de luchthaven, naar de fjälls en het noorderlicht wanneer u wilt',
    sub: 'In Lapland zijn de afstanden groot en het openbaar vervoer schaars. Met uw eigen auto rijdt u van het hotel naar het skigebied, de huskyfarm en de beste noorderlichtplekken zonder op de bus te wachten. Ophalen direct op de luchthaven, en winterbanden zijn in Finland standaard.',
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
  lomarengas: LOMARENGAS_COPY,
  cars: CARS_COPY,
}

interface PartnerStayAdProps {
  partner: PartnerKey
  /** snake_case GA4/attribution SID. */
  sid: string
  /** cars: IATA pickup for the deep results page. NEVER omit into a generic
   *  search — Rovaniemi is the floor default (Vesa 2026-08-09: the ad landed
   *  on EB's front page with an empty pickup field, "aivan kamala suoritus"). */
  carsPickup?: string
  /** lomarengas: cottage-search area for the deep link (default: all Lapland).
   *  Same rule — the ad must never land on lomarengas.fi's front page. */
  lomarengasArea?: LomarengasArea
  className?: string
}

export default function PartnerStayAd({ partner, sid, carsPickup = 'RVN', lomarengasArea = 'lapland', className = '' }: PartnerStayAdProps) {
  const lang = useLang()
  const cfg = CONFIG[partner]
  const c = COPY[partner][lang] ?? COPY[partner].en
  const Icon = cfg.icon
  // Deep links only: cars → the airport's EB results (pickup preselected),
  // lomarengas → the area's cottage-search listing, both locale-aware and
  // carrying the REAL placement sid (the old fixed 'stays_partner' blended
  // every placement into one attribution row).
  const href = partner === 'lomarengas'
    ? buildLomarengasUrl(lomarengasArea, sid, lang)
    : buildAffiliateUrl({ partner: 'cars', sid, destination: carsPickup, lang })

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
            (Ad label moved to the bottom-right corner — Vesa 2026-07-06.)
            <sm the logo gets its own row on top (flex-col-reverse): the h-14
            logo + shrink-0 next to the eyebrow overflowed the card's inner
            ~300px at 375px and overflow-hidden clipped it (Vesa 2026-08-09). */}
        <div className="mb-4 flex flex-col-reverse gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
          <div className="flex items-center gap-3 min-w-0">
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
              className="h-10 sm:h-14 md:h-20 w-auto max-w-[240px] sm:max-w-[260px] shrink-0 self-start"
            />
          ) : (
            // Category advertiser (car rental) without a brand logo: brand name
            // as a wordmark keeps the header balanced, no fake logo.
            <span className="font-heading text-2xl sm:text-3xl text-night tracking-wide shrink-0 self-start">
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
