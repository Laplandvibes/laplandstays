import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { useLang, useLocalePath, pick } from '../i18n/useLang'
import { useCopy } from '../locales/copy'

export interface FAQItem {
  q: string
  a: string
}

// Per-question deep links into the pages that back each answer (network FAQ
// model, same as laplandsnowmobile). Indexes follow the 6-question order in
// Home.copy.*.ts; link labels come from the localized nav strings.
const FAQ_ROUTE = {
  propertyTypes: '/property-types',
  whenToGo: '/when-to-go',
  levi: '/destinations/levi',
  saariselka: '/destinations/saariselka',
  inari: '/destinations/inari',
} as const
const FAQ_LINKS: (keyof typeof FAQ_ROUTE)[][] = [
  ['propertyTypes'], // 1 glass igloo cost → price windows per property type
  ['saariselka', 'inari'], // 2 best aurora base → the two auroral-oval destinations
  ['propertyTypes'], // 3 budget stays → entry-price tiers
  ['whenToGo'], // 4 best time for aurora → month-by-month calendar
  ['propertyTypes'], // 5 private saunas → cabin & villa amenities
  ['levi'], // 6 first-timers → Levi guide
]

const COPY = {
  en: {
    eyebrow: 'Lapland accommodation FAQ',
    h2: 'The Questions Travellers Ask Us Most',
    lead: 'Real prices, aurora odds and where to start. The same answers we give when friends ask about staying up here.',
  },
  fi: {
    eyebrow: 'Majoituksen UKK',
    h2: 'Kysymykset, joita meiltä kysytään useimmin',
    lead: 'Todelliset hinnat, revontulien todennäköisyydet ja mistä aloittaa. Samat vastaukset, jotka annamme, kun ystävät kysyvät majoittumisesta täällä pohjoisessa.',
  },
  de: {
    eyebrow: 'FAQ zur Unterkunft',
    h2: 'Die Fragen, die uns Reisende am häufigsten stellen',
    lead: 'Echte Preise, Polarlicht-Chancen und wo man anfängt. Dieselben Antworten, die wir Freunden geben, wenn sie nach einer Übernachtung hier oben fragen.',
  },
  ja: {
    eyebrow: '宿泊のよくある質問',
    h2: '旅行者から最も多く寄せられる質問',
    lead: '実際の料金、オーロラが見られる確率、何から始めるか。友人に聞かれたときに答えるのと同じ内容をまとめました。',
  },
  es: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Las preguntas que más nos hacen los viajeros',
    lead: 'Precios reales, probabilidades de aurora y por dónde empezar. Las mismas respuestas que damos cuando los amigos preguntan por alojarse aquí arriba.',
  },
  'pt-BR': {
    eyebrow: 'Perguntas frequentes',
    h2: 'As perguntas que os viajantes mais nos fazem',
    lead: 'Preços reais, chances de aurora e por onde começar. As mesmas respostas que damos quando amigos perguntam sobre se hospedar aqui em cima.',
  },
  'zh-CN': {
    eyebrow: '住宿常见问题',
    h2: '旅行者最常问我们的问题',
    lead: '真实价格、极光概率、从哪里开始。朋友问起在拉普兰住宿时,我们给出的就是这些答案。',
  },
  ko: {
    eyebrow: '숙박 FAQ',
    h2: '여행자들이 가장 자주 묻는 질문',
    lead: '실제 가격, 오로라 확률, 무엇부터 시작할지. 친구들이 라플란드 숙박에 대해 물을 때 들려주는 바로 그 답변입니다.',
  },
  fr: {
    eyebrow: 'FAQ hébergement',
    h2: 'Les questions que les voyageurs nous posent le plus',
    lead: "Vrais prix, chances d'aurores et par où commencer. Les mêmes réponses que nous donnons quand des amis nous demandent où dormir ici.",
  },
  it: {
    eyebrow: 'FAQ sugli alloggi',
    h2: 'Le domande che i viaggiatori ci fanno più spesso',
    lead: 'Prezzi reali, probabilità di aurora e da dove iniziare. Le stesse risposte che diamo quando gli amici ci chiedono dove dormire quassù.',
  },
  nl: {
    eyebrow: 'Veelgestelde vragen',
    h2: 'De vragen die reizigers ons het vaakst stellen',
    lead: 'Echte prijzen, aurora-kansen en waar u begint. Dezelfde antwoorden die we geven als vrienden vragen naar overnachten hier in het noorden.',
  },
  sv: {
    eyebrow: 'Vanliga frågor om boende',
    h2: 'Frågorna som resenärer ställer oftast',
    lead: 'Verkliga priser, chansen för norrsken och var du börjar. Samma svar som vi ger när vänner frågar om att bo häruppe i norr.',
  },
}

/** Visible counterpart of the FAQPage JSON-LD emitted by Home. `items` comes
 * from the same localized Home.copy.*.ts schema block, so the on-page text
 * always matches the structured data. */
export default function FAQSection({ items }: { items: FAQItem[] }) {
  const lang = useLang()
  const to = useLocalePath()
  const chrome = useCopy()
  const c = pick(lang, COPY.en, COPY.fi, COPY.de, COPY.ja, COPY.es, COPY['pt-BR'], COPY['zh-CN'], COPY.ko, COPY.fr, COPY.it, COPY.nl, COPY.sv)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  if (items.length === 0) return null

  const navLabels: Record<keyof typeof FAQ_ROUTE, string> = {
    propertyTypes: chrome.nav.propertyTypes,
    whenToGo: chrome.nav.whenToGo,
    levi: chrome.nav.levi,
    saariselka: chrome.nav.saariselka,
    inari: chrome.nav.inari,
  }

  return (
    <section id="faq" className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-sm font-semibold mb-3">{c.eyebrow}</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading text-night tracking-wide">{c.h2}</h2>
          <p className="mt-5 text-charcoal/70 text-lg leading-relaxed">{c.lead}</p>
        </div>

        <div className="space-y-4">
          {items.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen ? 'bg-pink/5 border-pink/30' : 'bg-white border-gray-100 shadow-sm hover:border-pink/30'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-start justify-between gap-4 px-5 sm:px-7 py-5 sm:py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-4 flex-1 min-w-0">
                    <span className="font-heading text-xl text-pink/50 shrink-0 leading-tight pt-0.5">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="font-semibold text-night text-base sm:text-lg leading-snug">{faq.q}</span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform duration-200 mt-1 ${
                      isOpen ? 'rotate-180 text-pink' : 'text-charcoal/50'
                    }`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-7 pb-6 pl-14 sm:pl-[4.25rem]">
                    <p className="text-charcoal/75 leading-relaxed text-sm sm:text-base">{faq.a}</p>
                    {(FAQ_LINKS[index] ?? []).length > 0 && (
                      <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4">
                        {FAQ_LINKS[index].map((key) => (
                          <Link
                            key={key}
                            to={to(FAQ_ROUTE[key])}
                            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-pink hover:text-night transition-colors"
                          >
                            {navLabels[key]} <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
