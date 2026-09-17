import { ArrowRight, Car } from 'lucide-react'
import { useLang, type Lang } from '../i18n/useLang'
import { buildAffiliateUrl } from '../lib/affiliate'
import { trackAffiliateClick } from '../lib/analytics'
import AffiliateDisclosure from './AffiliateDisclosure'

/**
 * CabinCarAd — car rental built from the CABIN reader's situation, not from the product.
 *
 * Replaced the generic Lomarengas card on the front page 2026-09-17 (Vesa: the card was
 * "aika turha" once the real cabin band moved directly under the hero; D1 showed 0 clicks
 * on it in 60 days). Rule 2026-09-14 (Vesa, skiresorts map ad): the headline is the reason
 * THIS page's reader needs the product right now, the options are shown as separate
 * measurable clicks, and the context (airport by resort) is carried into the Worker link.
 *
 * Four airport pills → go.laplandvibes.com/go/cars?pickup_location=<IATA>, each with its
 * own sid (home_cars_ktt …), so the click log tells which resort's readers rent cars.
 * ENF (Enontekiö) is not offered: EconomyBookings has no inventory there (Worker aliases
 * it to KTT anyway). No prices in copy — they are on the results page before booking.
 */

type Copy = {
  adLabel: string
  eyebrow: string
  h2: string
  body: string
  pick: string
  airports: [string, string, string, string]
  note: string
}

const AIRPORTS = ['KTT', 'RVN', 'IVL', 'KAO'] as const

const COPY: Record<Lang, Copy> = {
  fi: {
    adLabel: 'Mainos',
    eyebrow: 'Mökkilomalle tarvitaan auto',
    h2: 'Mökki on harvoin kylän keskellä',
    body: 'Moni Lomarenkaan mökki on tunturin kupeessa tai järven rannalla, ja kauppa, rinne ja ravintola ovat automatkan päässä. Nouda auto lentokentältä ja palauta samaan paikkaan.',
    pick: 'Nouto lentokentältä:',
    airports: ['Kittilä · Levi ja Ylläs', 'Rovaniemi · Pyhä ja Luosto', 'Ivalo · Saariselkä', 'Kuusamo · Ruka'],
    note: 'Vuokraamojen hinnat vertailussa, lopullinen hinta näkyy ennen varausta.',
  },
  en: {
    adLabel: 'Ad',
    eyebrow: 'A cabin holiday needs a car',
    h2: 'Cabins are rarely in the village centre',
    body: 'Many Lomarengas cabins sit on a fellside or a lakeshore, and the shop, the ski slopes and the restaurant are a drive away. Pick the car up at the airport and return it to the same place.',
    pick: 'Pick up at the airport:',
    airports: ['Kittilä · Levi and Ylläs', 'Rovaniemi · Pyhä and Luosto', 'Ivalo · Saariselkä', 'Kuusamo · Ruka'],
    note: 'Rental companies compared; you see the final price before you book.',
  },
  sv: {
    adLabel: 'Annons',
    eyebrow: 'Till stugan behövs en bil',
    h2: 'Stugan ligger sällan mitt i byn',
    body: 'Många av Lomarengas stugor ligger på en fjällsluttning eller vid en sjöstrand, och affären, backen och restaurangen ligger en bilresa bort. Hämta bilen på flygplatsen och lämna den på samma ställe.',
    pick: 'Hämta på flygplatsen:',
    airports: ['Kittilä · Levi och Ylläs', 'Rovaniemi · Pyhä och Luosto', 'Ivalo · Saariselkä', 'Kuusamo · Ruka'],
    note: 'Biluthyrarnas priser jämförs, slutpriset visas innan du bokar.',
  },
  de: {
    adLabel: 'Anzeige',
    eyebrow: 'Zum Hüttenurlaub gehört ein Auto',
    h2: 'Die Hütte liegt selten im Dorfzentrum',
    body: 'Viele Lomarengas-Hütten stehen am Fjällhang oder am Seeufer, und Laden, Piste und Restaurant sind eine Autofahrt entfernt. Auto am Flughafen abholen und dort wieder abgeben.',
    pick: 'Abholung am Flughafen:',
    airports: ['Kittilä · Levi und Ylläs', 'Rovaniemi · Pyhä und Luosto', 'Ivalo · Saariselkä', 'Kuusamo · Ruka'],
    note: 'Autovermieter im Vergleich, der Endpreis wird vor der Buchung angezeigt.',
  },
  fr: {
    adLabel: 'Publicité',
    eyebrow: 'Un séjour en chalet demande une voiture',
    h2: 'Le chalet est rarement au centre du village',
    body: "Beaucoup de chalets Lomarengas sont à flanc de fjäll ou au bord d'un lac, et il faut prendre la voiture pour aller au magasin, aux pistes ou au restaurant. Récupérez la voiture à l'aéroport et rendez-la au même endroit.",
    pick: "Retrait à l'aéroport :",
    airports: ['Kittilä · Levi et Ylläs', 'Rovaniemi · Pyhä et Luosto', 'Ivalo · Saariselkä', 'Kuusamo · Ruka'],
    note: "Loueurs comparés, le prix final s'affiche avant la réservation.",
  },
  it: {
    adLabel: 'Pubblicità',
    eyebrow: "Per una vacanza in chalet serve un'auto",
    h2: 'Lo chalet è raramente nel centro del villaggio',
    body: "Molti chalet Lomarengas sono sulle pendici di un fjäll o in riva a un lago, e per andare al negozio, alle piste e al ristorante serve l'auto. Ritira l'auto in aeroporto e riconsegnala nello stesso posto.",
    pick: 'Ritiro in aeroporto:',
    airports: ['Kittilä · Levi e Ylläs', 'Rovaniemi · Pyhä e Luosto', 'Ivalo · Saariselkä', 'Kuusamo · Ruka'],
    note: 'Noleggiatori a confronto, il prezzo finale appare prima della prenotazione.',
  },
  es: {
    adLabel: 'Publicidad',
    eyebrow: 'Para unas vacaciones en cabaña hace falta coche',
    h2: 'La cabaña rara vez está en el centro del pueblo',
    body: 'Muchas cabañas de Lomarengas están en la ladera de un fjäll o a orillas de un lago, y a la tienda, a las pistas y al restaurante hay que ir en coche. Recoge el coche en el aeropuerto y devuélvelo en el mismo sitio.',
    pick: 'Recogida en el aeropuerto:',
    airports: ['Kittilä · Levi e Ylläs', 'Rovaniemi · Pyhä y Luosto', 'Ivalo · Saariselkä', 'Kuusamo · Ruka'],
    note: 'Compañías de alquiler comparadas; el precio final se muestra antes de reservar.',
  },
  nl: {
    adLabel: 'Advertentie',
    eyebrow: 'Voor een huttenvakantie heb je een auto nodig',
    h2: 'De hut ligt zelden in het dorpscentrum',
    body: 'Veel Lomarengas-hutten staan op een fjällhelling of aan een meer, en de winkel, de piste en het restaurant zijn een stukje rijden. Haal de auto op het vliegveld op en lever hem op dezelfde plek weer in.',
    pick: 'Ophalen op het vliegveld:',
    airports: ['Kittilä · Levi en Ylläs', 'Rovaniemi · Pyhä en Luosto', 'Ivalo · Saariselkä', 'Kuusamo · Ruka'],
    note: 'Verhuurders vergeleken; de eindprijs zie je vóór het boeken.',
  },
  'pt-BR': {
    adLabel: 'Anúncio',
    eyebrow: 'Férias em cabana pedem um carro',
    h2: 'A cabana raramente fica no centro do vilarejo',
    body: 'Muitas cabanas da Lomarengas ficam na encosta de um monte ou à beira de um lago, e o mercado, as pistas de esqui e o restaurante ficam a uma curta viagem de carro. Retire o carro no aeroporto e devolva no mesmo lugar.',
    pick: 'Retirada no aeroporto:',
    airports: ['Kittilä · Levi e Ylläs', 'Rovaniemi · Pyhä e Luosto', 'Ivalo · Saariselkä', 'Kuusamo · Ruka'],
    note: 'Locadoras comparadas; o preço final aparece antes de reservar.',
  },
  ja: {
    adLabel: '広告',
    eyebrow: 'コテージ滞在には車が必要',
    h2: 'コテージは村の中心にはほとんどありません',
    body: 'Lomarengasのコテージの多くは山の斜面や湖畔にあり、店・ゲレンデ・レストランへは車で移動します。空港で借りて、同じ場所に返却できます。',
    pick: '空港で受け取り：',
    airports: ['キッティラ · レヴィ、ユッラス', 'ロヴァニエミ · ピュハ、ルオスト', 'イヴァロ · サーリセルカ', 'クーサモ · ルカ'],
    note: 'レンタカー会社を比較、最終料金は予約前に表示されます。',
  },
  ko: {
    adLabel: '광고',
    eyebrow: '캐빈 휴가에는 차가 필요합니다',
    h2: '캐빈은 마을 중심에 있는 경우가 드뭅니다',
    body: 'Lomarengas 캐빈 상당수는 산비탈이나 호숫가에 있어 상점, 슬로프, 식당까지 차로 이동합니다. 공항에서 차를 받고 같은 곳에 반납하세요.',
    pick: '공항 픽업:',
    airports: ['키틸라 · 레비, 윌래스', '로바니에미 · 퓌하, 루오스토', '이발로 · 사리셀카', '쿠사모 · 루카'],
    note: '렌터카 업체 비교, 최종 요금은 예약 전에 표시됩니다.',
  },
  'zh-CN': {
    adLabel: '廣告',
    eyebrow: '小木屋度假需要一輛車',
    h2: '小木屋很少在村中心',
    body: 'Lomarengas 的許多小木屋位於山坡或湖畔，去商店、雪道和餐廳都要開車。在機場取車，同一地點還車。',
    pick: '機場取車：',
    airports: ['基蒂萊 · 萊維、於拉斯', '羅瓦涅米 · 皮哈、盧奧斯托', '伊瓦洛 · 薩利色爾卡', '庫薩莫 · 魯卡'],
    note: '比較多家租車公司，最終價格在預訂前顯示。',
  },
}

const ACCENT = '#0F766E'
const ACCENT_DARK = '#0B5E57'

export default function CabinCarAd({ className = '' }: { className?: string }) {
  const lang = useLang()
  const c = COPY[lang] ?? COPY.en
  return (
    <section
      className={`lvs-card relative overflow-hidden ${className}`}
      style={{ borderTop: `3px solid ${ACCENT}` }}
      aria-label={c.h2}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full"
        style={{ background: `radial-gradient(closest-side, ${ACCENT}1F, transparent)` }}
      />
      <div className="relative p-6 sm:p-8">
        <div className="mb-4 flex flex-col-reverse gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <span
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
              style={{ background: `${ACCENT}14`, boxShadow: `inset 0 0 0 1px ${ACCENT}33` }}
            >
              <Car className="h-5 w-5" style={{ color: ACCENT }} aria-hidden="true" />
            </span>
            <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: ACCENT_DARK }}>
              {c.eyebrow}
            </p>
          </div>
          <img
            src="/images/partners/economybookings.svg"
            alt="EconomyBookings"
            width={260}
            height={80}
            loading="lazy"
            decoding="async"
            className="h-10 sm:h-14 md:h-20 w-auto max-w-[240px] sm:max-w-[260px] shrink-0 self-start"
          />
        </div>

        <h3 className="font-heading text-2xl sm:text-3xl text-night tracking-wide leading-tight mb-3 max-w-2xl text-balance">
          {c.h2}
        </h3>
        <p className="text-charcoal/75 text-sm sm:text-base leading-relaxed max-w-2xl">{c.body}</p>

        <p className="mt-6 mb-2.5 text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: ACCENT_DARK }}>
          {c.pick}
        </p>
        {/* One measurable click per airport: the resort is the context the Worker link carries. */}
        <ul className="flex flex-wrap gap-2.5">
          {AIRPORTS.map((iata, i) => {
            const sid = `home_cars_${iata.toLowerCase()}`
            const href = buildAffiliateUrl({ partner: 'cars', sid, query: { pickup_location: iata }, lang })
            return (
              <li key={iata}>
                <a
                  href={href}
                  target="_blank"
                  rel="sponsored nofollow noopener"
                  onClick={() => trackAffiliateClick('cars', `stay_ad:${sid}`, href)}
                  className="group inline-flex min-h-11 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold text-night no-underline transition-colors hover:text-white"
                  style={{ borderColor: `${ACCENT}66`, background: `${ACCENT}0F` }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = ACCENT }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = `${ACCENT}0F` }}
                >
                  {c.airports[i]}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
              </li>
            )
          })}
        </ul>
        <p className="mt-3 text-charcoal/55 text-[12px] leading-relaxed">{c.note}</p>

        <AffiliateDisclosure variant="compact" className="mt-6 !justify-start text-left" />
      </div>

      <span
        className="absolute bottom-3.5 right-4 z-10 inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em]"
        style={{ background: `${ACCENT}14`, color: ACCENT_DARK }}
      >
        {c.adLabel}
      </span>
    </section>
  )
}
