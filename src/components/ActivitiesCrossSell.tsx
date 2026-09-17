import { useEffect, useRef, useState } from 'react'
import { Compass, ArrowRight } from 'lucide-react'
import AffiliateCTA from './AffiliateCTA'
import { useLang, type Lang } from '../i18n/useLang'

/**
 * Activities cross-sell for the accommodation site: stay visitors also book tours.
 *
 * 16.9.2026: the section used to be a heading, a blurb and ONE pink button — no
 * product, no image, no price. The sales-surface gate (audit_myyntipinnat) failed
 * it for exactly that ("ei tuotetodistetta"), and the network rule since
 * laplandtours 11.9. is that winter activities show GetYourGuide's own product
 * cards, not a bare link. The GetYourGuide "activities" widget mounts an iframe
 * with LIVE product photos, prices and availability for the location — the only
 * honest source of activity prices we have. 'auto' and 'city' widget modes are
 * banned network-wide (2026-07-02): they ignore location targeting.
 *
 * The location id is read from the GYG slug (`lappi-suomi-l2652` → 2652), so a
 * destination page passing its own slug gets its own products. If no iframe
 * mounts (ad-block, tracking protection) the box collapses and the Worker-routed
 * CTA below still gives the visitor somewhere to go — never an empty rectangle.
 */
const L: Record<Lang, { heading: string; blurb: string; cta: string }> = {
  'en':    { heading: 'Things to do near your stay', blurb: 'Husky safaris, aurora hunts and snowmobile tours, book top-rated Lapland experiences from trusted local operators.', cta: 'Browse activities' },
  'fi':    { heading: 'Tekemistä majoituksesi lähellä', blurb: 'Husky-safarit, revontuliretket ja moottorikelkkasafarit, varaa Lapin suosituimmat elämykset luotettavilta paikallisilta toimijoilta.', cta: 'Selaa aktiviteetteja' },
  'de':    { heading: 'Aktivitäten in der Nähe Ihrer Unterkunft', blurb: 'Husky-Safaris, Polarlichtjagden und Schneemobiltouren, buchen Sie top bewertete Lappland-Erlebnisse lokaler Anbieter.', cta: 'Aktivitäten entdecken' },
  'ja':    { heading: '宿泊先周辺のアクティビティ', blurb: 'ハスキーサファリ、オーロラ鑑賞、スノーモービルツアーなど、ラップランドの人気体験を信頼できる現地事業者から予約できます。', cta: 'アクティビティを見る' },
  'es':    { heading: 'Qué hacer cerca de su alojamiento', blurb: 'Safaris en trineo de huskies, cazas de auroras y excursiones en motonieve: reserve las mejores experiencias de Laponia con operadores locales de confianza.', cta: 'Ver actividades' },
  'pt-BR': { heading: 'O que fazer perto da sua hospedagem', blurb: 'Safáris de huskies, caça à aurora e passeios de snowmobile, reserve as melhores experiências da Lapônia com operadores locais confiáveis.', cta: 'Ver atividades' },
  'zh-CN': { heading: '住宿附近的活動', blurb: '哈士奇雪橇、極光追逐和雪地摩托之旅。向值得信賴的當地運營商預訂拉普蘭備受好評的熱門體驗。', cta: '瀏覽活動' },
  'ko':    { heading: '숙소 근처 즐길 거리', blurb: '허스키 사파리, 오로라 헌팅, 스노모빌 투어 등 신뢰할 수 있는 현지 업체의 라플란드 인기 체험을 예약하세요.', cta: '액티비티 둘러보기' },
  'fr':    { heading: 'À faire près de votre hébergement', blurb: 'Safaris en traîneau à chiens, chasses aux aurores et motoneige, réservez les meilleures expériences de Laponie auprès d’opérateurs locaux de confiance.', cta: 'Voir les activités' },
  'it':    { heading: 'Cosa fare vicino al tuo alloggio', blurb: 'Safari con gli husky, caccia all’aurora e tour in motoslitta, prenota le migliori esperienze della Lapponia con operatori locali affidabili.', cta: 'Scopri le attività' },
  'nl':    { heading: 'Activiteiten in de buurt van uw verblijf', blurb: 'Huskysafari’s, noorderlichttochten en sneeuwscootertours, boek topervaringen in Lapland bij vertrouwde lokale aanbieders.', cta: 'Activiteiten bekijken' },
  'sv':    { heading: 'Saker att göra nära ditt boende', blurb: 'Huskysafarier, norrskensturer och skotersafarier. Boka Lapplands mest omtyckta upplevelser hos pålitliga lokala arrangörer.', cta: 'Bläddra bland aktiviteter' },
}

const GYG_PARTNER_ID = 'VRMKD7N'
const GYG_LOCALE: Record<Lang, string> = {
  en: 'en-US', fi: 'fi-FI', de: 'de-DE', ja: 'ja-JP', es: 'es-ES',
  'pt-BR': 'pt-BR', 'zh-CN': 'zh-CN', ko: 'ko-KR', fr: 'fr-FR', it: 'it-IT', nl: 'nl-NL', sv: 'sv-SE',
}

interface Props {
  /** GYG location slug for the cross-sell. Default = Lapland-wide (location 2652).
   *  Destination pages can pass their own (e.g. 'rovaniemi-l2653'). */
  gygSlug?: string
  /** GYG campaign tag for the widget's own attribution (placement, no domain). */
  cmp?: string
}

export default function ActivitiesCrossSell({ gygSlug = 'lappi-suomi-l2652', cmp = 'lv_laplandstays_crosssell' }: Props) {
  const lang = useLang()
  const t = L[lang] ?? L.en
  const locationId = (gygSlug.match(/-l(\d+)$/) || [])[1] ?? '2652'
  const boxRef = useRef<HTMLDivElement>(null)
  const [blocked, setBlocked] = useState(false)

  useEffect(() => {
    let cancelled = false
    let waited = 0
    const FIRST = 2500, STEP = 1000, MAX = 12000
    const tick = (delay: number): ReturnType<typeof setTimeout> =>
      setTimeout(() => {
        if (cancelled) return
        waited += delay
        if (boxRef.current?.querySelector('iframe')) { setBlocked(false); return }
        setBlocked(true)
        if (waited < MAX) tick(STEP)
      }, delay)
    const timer = tick(FIRST)
    return () => { cancelled = true; clearTimeout(timer) }
  }, [lang, locationId])

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6" aria-labelledby="activities-crosssell-title">
      <div
        className="max-w-6xl mx-auto rounded-3xl px-5 sm:px-10 py-10 sm:py-12 shadow-sm"
        style={{ background: '#FFFFFF', border: '1px solid rgba(236,72,153,0.18)' }}
      >
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div
            className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-5"
            style={{ background: 'rgba(236,72,153,0.10)', border: '1px solid rgba(236,72,153,0.28)' }}
          >
            <Compass className="w-6 h-6" style={{ color: '#EC4899' }} />
          </div>
          <h2 id="activities-crosssell-title" className="font-heading text-3xl sm:text-4xl tracking-wide mb-4" style={{ color: '#1F2937' }}>
            {t.heading}
          </h2>
          <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#4B5563' }}>
            {t.blurb}
          </p>
        </div>

        {/* GetYourGuide's own product cards: photo, live price, availability. */}
        <div
          ref={boxRef}
          key={`gyg-${lang}-${locationId}`}
          className={blocked ? 'h-0 overflow-hidden' : 'min-h-[120px]'}
          data-gyg-widget="activities"
          data-gyg-partner-id={GYG_PARTNER_ID}
          data-gyg-locale-code={GYG_LOCALE[lang]}
          data-gyg-cmp={cmp}
          data-gyg-location-id={locationId}
          data-gyg-number-of-items="4"
        />

        <div className="text-center mt-8">
          <AffiliateCTA
            partner="activities"
            sid="crosssell_things_to_do"
            destination={gygSlug}
            className="inline-flex items-center gap-2 font-semibold py-4 px-9 rounded-xl text-sm uppercase tracking-widest transition-all duration-300 shadow-lg hover:-translate-y-0.5"
            style={{ background: '#EC4899', color: '#FFFFFF' }}
          >
            {t.cta}
            <ArrowRight className="w-4 h-4" />
          </AffiliateCTA>
        </div>
      </div>
    </section>
  )
}
