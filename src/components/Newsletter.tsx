import { useEffect, useRef, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Bell, BedDouble, Compass, Sparkles, AlertCircle } from 'lucide-react'
import { trackNewsletterSignup } from '../lib/analytics'
import { useLocalePath, useLang, type Lang } from '../i18n/useLang'
import { useCopy } from '../locales/copy'
import FounderByline from '../shared/FounderByline';

/**
 * [LV-FUNNEL 2026-08-21] Lomakesuppilon eventit Umamiin — paikallinen apuri,
 * ei jaettua importtia (vendoroitu sync on refresh-only). Ei saa koskaan
 * rikkoa lomaketta. Standardi: memory _procedural/lv_form_funnel_events.md.
 */
function track(event: string, data?: Record<string, unknown>) {
  try {
    (window as unknown as { umami?: { track: (e: string, d?: unknown) => void } }).umami?.track(event, data);
  } catch { /* ignore */ }
}

// Same-origin Cloudflare Pages Function, proxies the call to the shared
// Supabase Edge Function `send-welcome-email`. Routes via /api/newsletter so
// the browser never sees a cross-origin request (Supabase function only
// allow-lists laplandvibes.com origin; spoke sites use this proxy).
// Implementation: functions/api/newsletter.ts.
const ENDPOINT = '/api/newsletter'
const SOURCE = 'laplandstays'

const ICONS: typeof Bell[] = [Bell, BedDouble, Compass, Sparkles]

/**
 * Marketing-consent + age confirmation strings. These live here rather than in
 * `src/locales/copy.*.ts` because the consent wording is a legal record, not
 * editorial copy: `consentText` below is posted to `send-welcome-email` and
 * stored verbatim next to the subscriber, so the exact sentence the user saw
 * must be readable in one place. Keyed by the same `Lang` union the rest of the
 * site uses, so every locale renders its own wording (never an EN fallback).
 */
const CONSENT: Record<Lang, { consent: string; privacy: string }> = {
  en: {
    consent:
      'Yes, send the LaplandVibes newsletter (travel tips, seasonal updates and offers) to this email address. I confirm I am 18 or over.',
    privacy: 'Privacy Policy',
  },
  fi: {
    consent:
      'LaplandVibes saa lähettää minulle uutiskirjettä (matkailuvinkkejä, sesonkitietoa ja tarjouksia) antamaani sähköpostiosoitteeseen. Olen täyttänyt 18 vuotta.',
    privacy: 'Tietosuojaseloste',
  },
  de: {
    consent:
      'Ja, LaplandVibes darf mir den Newsletter mit Reisetipps, Saisoninfos und Angeboten an diese E-Mail-Adresse senden. Ich bin mindestens 18 Jahre alt.',
    privacy: 'Datenschutzerklärung',
  },
  ja: {
    consent:
      '入力したメールアドレス宛に、LaplandVibesがニュースレター（旅のヒント、シーズン情報、キャンペーン情報）を送ることに同意します。私は18歳以上です。',
    privacy: 'プライバシーポリシー',
  },
  es: {
    consent:
      'Acepto recibir en mi correo el boletín de LaplandVibes (consejos de viaje, información de temporada y ofertas) y confirmo que tengo al menos 18 años.',
    privacy: 'Política de privacidad',
  },
  'pt-BR': {
    consent:
      'Aceito receber a newsletter da LaplandVibes no e-mail informado, com dicas de viagem, informações de temporada e ofertas. Tenho 18 anos ou mais.',
    privacy: 'Política de Privacidade',
  },
  'zh-CN': {
    consent:
      '我同意 LaplandVibes 向我填写的邮箱发送订阅邮件，内容包括拉普兰旅行建议、季节资讯和优惠信息，并确认本人已年满18周岁。',
    privacy: '隐私政策',
  },
  ko: {
    consent:
      '입력한 이메일 주소로 LaplandVibes가 보내는 여행 팁·시즌 정보·프로모션 소식 뉴스레터 수신에 동의하며, 만 18세 이상임을 확인합니다.',
    privacy: '개인정보처리방침',
  },
  fr: {
    consent:
      "J'accepte de recevoir la newsletter LaplandVibes (conseils voyage, infos saisonnières, offres) à cette adresse e-mail et je confirme avoir 18 ans ou plus.",
    privacy: 'Politique de confidentialité',
  },
  it: {
    consent:
      "Sì, desidero ricevere la newsletter di LaplandVibes (consigli di viaggio, novità stagionali e offerte) all'indirizzo indicato. Ho almeno 18 anni.",
    privacy: 'Informativa sulla privacy',
  },
  nl: {
    consent:
      'Ja, LaplandVibes mag de nieuwsbrief met reistips, seizoensinfo en aanbiedingen naar dit e-mailadres sturen. Ik ben 18 jaar of ouder.',
    privacy: 'Privacyverklaring',
  },
  sv: {
    consent:
      'Ja, jag vill ha nyhetsbrevet från LaplandVibes med restips, säsongsinfo och erbjudanden till min e-postadress. Jag är minst 18 år.',
    privacy: 'Integritetspolicy',
  },
}

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [consented, setConsented] = useState(false)
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')
  const [error, setError] = useState<string | null>(null)
  const [errorDetail, setErrorDetail] = useState<string | null>(null)
  const to = useLocalePath()
  const c = useCopy().newsletter
  const lang = useLang()
  const consentCopy = CONSENT[lang]
  // [LV-FUNNEL] view = osio vieritetty näkyviin (kerran), start = 1. fokus,
  // blocked kerran per submit-yritys (natiivi invalid laukeaa per kenttä).
  const funnelData = { surface: 'inline', lang };
  const sectionRef = useRef<HTMLElement | null>(null);
  const startTracked = useRef(false);
  const blockedTracked = useRef(false);
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver((entries) => {
      if (entries.some((en) => en.isIntersecting)) {
        track('nl_view', funnelData);
        io.disconnect();
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const trackStart = () => {
    if (startTracked.current) return;
    startTracked.current = true;
    track('nl_start', funnelData);
  };

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email || !consented || status === 'loading') {
      if (status !== 'loading') track('nl_blocked', { ...funnelData, reason: !email ? 'email' : 'consent' })
      return
    }

    setStatus('loading')
    setError(null)
    setErrorDetail(null)
    track('nl_submit', funnelData)
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          source: SOURCE,
          consent: true,
          ageConfirmed: true,
          // The exact sentence rendered next to the checkbox, in the locale the
          // subscriber actually read — this is the consent record, so it must
          // be the string they saw, not a canonical EN translation of it.
          consentText: consentCopy.consent,
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        throw new Error(data?.error || `HTTP ${res.status}`)
      }
      trackNewsletterSignup(data?.alreadySubscribed ? `${SOURCE}-already` : SOURCE)
      track('nl_success', data?.alreadySubscribed ? { ...funnelData, already: true } : funnelData)
      setStatus('done')
    } catch (err) {
      setStatus('error')
      track('nl_error', funnelData)
      // The prose is localized in all 12 locales (`newsletter.error`); the raw
      // technical cause (e.g. "HTTP 502") is appended in parentheses and left
      // untranslated on purpose, so support requests carry a usable code.
      setError(c.error)
      setErrorDetail(err instanceof Error ? err.message : null)
    }
  }

  return (
    <section
      id="newsletter"
      ref={sectionRef}
      className="py-20 sm:py-24 px-4 sm:px-6"
      style={{
        background: 'linear-gradient(135deg, #4C1D95 0%, #7E22CE 35%, #BE185D 70%, #DB2777 100%)',
      }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-white/85 font-semibold mb-3">
            {c.eyebrow}
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white tracking-wide mb-4">
            {c.h2}
          </h2>
          <p className="text-white/85 text-base sm:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            {c.lead}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {c.benefits.map((b, i) => {
            const Icon = ICONS[i] ?? Sparkles
            return (
              <div
                key={b.title}
                className="bg-white/12 backdrop-blur-sm border border-white/25 rounded-2xl p-5 text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-white font-bold text-base mb-1.5">{b.title}</p>
                <p className="text-white/80 text-sm leading-relaxed">{b.body}</p>
              </div>
            )
          })}
        </div>

        <div className="text-center max-w-xl mx-auto">
          {status === 'done' ? (
            <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-sm border border-white/30 text-white px-6 py-4 rounded-2xl">
              <CheckCircle2 className="w-6 h-6 shrink-0" />
              <p className="text-base font-medium">{c.success}</p>
            </div>
          ) : (
            <><FounderByline tone="pink" />
            <form
              onSubmit={onSubmit}
              onInvalidCapture={(e) => {
                if (blockedTracked.current) return;
                blockedTracked.current = true;
                window.setTimeout(() => { blockedTracked.current = false; }, 400);
                const t = e.target as HTMLInputElement;
                track('nl_blocked', { ...funnelData, reason: t.type === 'checkbox' ? 'consent' : 'email' });
              }}
              className="flex flex-col sm:flex-row sm:flex-wrap gap-3"
            >
              <label className="sr-only" htmlFor="newsletter-email">
                {c.emailLabel}
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onFocus={trackStart}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={c.emailPlaceholder}
                required
                className="flex-1 px-5 py-4 rounded-xl text-night bg-white placeholder:text-charcoal/50 focus:outline-none focus:ring-2 focus:ring-white/70 border border-white/40"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-6 py-4 bg-white text-pink font-bold rounded-xl hover:bg-gray-100 transition-colors flex items-center gap-2 justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                style={{ color: '#DB2777' }}
              >
                {status === 'loading' ? c.submitting : c.submit}
                <ArrowRight className="w-4 h-4" />
              </button>
              <label className="sm:basis-full flex items-start gap-2.5 text-left text-white/90 text-xs leading-relaxed cursor-pointer">
                <input
                  type="checkbox"
                  checked={consented}
                  onFocus={trackStart}
                  onChange={(e) => setConsented(e.target.checked)}
                  required
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border border-white/50 accent-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/70"
                />
                <span>
                  {consentCopy.consent}{' '}
                  <Link
                    to={to('/privacy')}
                    target="_blank"
                    rel="noopener"
                    className="underline hover:text-white"
                  >
                    {consentCopy.privacy}
                  </Link>
                  .
                </span>
              </label>
            </form></>
          )}

          {error && (
            <div className="mt-4 inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 text-white px-4 py-2.5 rounded-xl">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <p className="text-sm">
                {error}
                {errorDetail ? ` (${errorDetail})` : ''}
              </p>
            </div>
          )}

          <p className="text-white/90 text-xs mt-5">
            {c.footnote}{' '}
            <Link to={to('/privacy')} className="underline hover:text-white">{c.privacyLink}</Link>.
          </p>
        </div>
      </div>
    </section>
  )
}
