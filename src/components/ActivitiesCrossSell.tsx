import { Compass, ArrowRight } from 'lucide-react'
import AffiliateCTA from './AffiliateCTA'
import { useLang, type Lang } from '../i18n/useLang'

/**
 * Activities cross-sell for the accommodation site: stay visitors also book tours,
 * so surface GetYourGuide activities (a separate affiliate revenue stream that was
 * previously absent here). Labels are inline so the component needs no per-page copy
 * files. Uses a broad GYG location slug → the location's full activity list, which is
 * the right "browse what to do near your stay" experience for a cross-sell (NOT a bare
 * getyourguide.com homepage link). See lv memory: 2026-06-15_gyg_targeting_monetization.
 */
const L: Record<Lang, { heading: string; blurb: string; cta: string }> = {
  'en':    { heading: 'Things to do near your stay', blurb: 'Husky safaris, aurora hunts and snowmobile tours, book top-rated Lapland experiences from trusted local operators.', cta: 'Browse activities' },
  'fi':    { heading: 'Tekemistä majoituksesi lähellä', blurb: 'Husky-safarit, revontuliretket ja moottorikelkkasafarit, varaa Lapin suosituimmat elämykset luotettavilta paikallisilta toimijoilta.', cta: 'Selaa aktiviteetteja' },
  'de':    { heading: 'Aktivitäten in der Nähe Ihrer Unterkunft', blurb: 'Husky-Safaris, Polarlichtjagden und Schneemobiltouren, buchen Sie top bewertete Lappland-Erlebnisse lokaler Anbieter.', cta: 'Aktivitäten entdecken' },
  'ja':    { heading: '宿泊先周辺のアクティビティ', blurb: 'ハスキーサファリ、オーロラ鑑賞、スノーモービルツアーなど、ラップランドの人気体験を信頼できる現地事業者から予約できます。', cta: 'アクティビティを見る' },
  'es':    { heading: 'Qué hacer cerca de su alojamiento', blurb: 'Safaris en trineo de huskies, cazas de auroras y excursiones en motonieve: reserve las mejores experiencias de Laponia con operadores locales de confianza.', cta: 'Ver actividades' },
  'pt-BR': { heading: 'O que fazer perto da sua hospedagem', blurb: 'Safáris de huskies, caça à aurora e passeios de snowmobile, reserve as melhores experiências da Lapônia com operadores locais confiáveis.', cta: 'Ver atividades' },
  'zh-CN': { heading: '住宿附近的活动', blurb: '哈士奇雪橇、极光追逐和雪地摩托之旅。向值得信赖的当地运营商预订拉普兰备受好评的热门体验。', cta: '浏览活动' },
  'ko':    { heading: '숙소 근처 즐길 거리', blurb: '허스키 사파리, 오로라 헌팅, 스노모빌 투어 등 신뢰할 수 있는 현지 업체의 라플란드 인기 체험을 예약하세요.', cta: '액티비티 둘러보기' },
  'fr':    { heading: 'À faire près de votre hébergement', blurb: 'Safaris en traîneau à chiens, chasses aux aurores et motoneige, réservez les meilleures expériences de Laponie auprès d’opérateurs locaux de confiance.', cta: 'Voir les activités' },
  'it':    { heading: 'Cosa fare vicino al tuo alloggio', blurb: 'Safari con gli husky, caccia all’aurora e tour in motoslitta, prenota le migliori esperienze della Lapponia con operatori locali affidabili.', cta: 'Scopri le attività' },
  'nl':    { heading: 'Activiteiten in de buurt van uw verblijf', blurb: 'Huskysafari’s, noorderlichttochten en sneeuwscootertours, boek topervaringen in Lapland bij vertrouwde lokale aanbieders.', cta: 'Activiteiten bekijken' },
  'sv':    { heading: 'Saker att göra nära ditt boende', blurb: 'Huskysafarier, norrskensturer och skotersafarier. Boka Lapplands mest omtyckta upplevelser hos pålitliga lokala arrangörer.', cta: 'Bläddra bland aktiviteter' },
}

interface Props {
  /** GYG location slug for the cross-sell. Default = Lapland-wide. Destination pages
   *  can pass their own (e.g. 'rovaniemi-l2653'). */
  gygSlug?: string
}

export default function ActivitiesCrossSell({ gygSlug = 'lappi-suomi-l2652' }: Props) {
  const lang = useLang()
  const t = L[lang] ?? L.en
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6">
      <div
        className="max-w-4xl mx-auto text-center rounded-3xl px-6 sm:px-12 py-12 sm:py-14 shadow-sm"
        style={{ background: '#FFFFFF', border: '1px solid rgba(236,72,153,0.18)' }}
      >
        <div
          className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-5"
          style={{ background: 'rgba(236,72,153,0.10)', border: '1px solid rgba(236,72,153,0.28)' }}
        >
          <Compass className="w-6 h-6" style={{ color: '#EC4899' }} />
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl tracking-wide mb-4" style={{ color: '#1F2937' }}>
          {t.heading}
        </h2>
        <p className="text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed" style={{ color: '#4B5563' }}>
          {t.blurb}
        </p>
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
    </section>
  )
}
