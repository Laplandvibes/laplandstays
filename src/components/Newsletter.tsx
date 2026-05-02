import { useState, type FormEvent } from 'react'
import { ArrowRight, CheckCircle2, Bell, BedDouble, Compass, Sparkles, AlertCircle } from 'lucide-react'
import { trackNewsletterSignup } from '../lib/analytics'

// Same-origin Cloudflare Pages Function — proxies the call to the shared
// Supabase Edge Function `send-welcome-email`. Routes via /api/newsletter so
// the browser never sees a cross-origin request (Supabase function only
// allow-lists laplandvibes.com origin; spoke sites use this proxy).
// Implementation: functions/api/newsletter.ts.
const ENDPOINT = '/api/newsletter'
const SOURCE = 'laplandstays'

const benefits: { icon: typeof Bell; title: string; body: string }[] = [
  {
    icon: Bell,
    title: 'Aurora alerts',
    body: 'Heads-up when Kp spikes line up with clear skies — book the right night, not the wrong one.',
  },
  {
    icon: BedDouble,
    title: 'Cabin drops',
    body: 'First word when Kakslauttanen, Levin Iglut, Star Arctic and Aurora Village release peak-season inventory.',
  },
  {
    icon: Compass,
    title: 'Planning help',
    body: 'When to come, what to book first, what to skip — written by people who actually live in Finnish Lapland.',
  },
  {
    icon: Sparkles,
    title: 'Insider rates',
    body: 'Seasonal and partner-only deals our operators share with the list before anyone else.',
  },
]

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email || status === 'loading') return

    setStatus('loading')
    setError(null)
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: SOURCE }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        throw new Error(data?.error || `HTTP ${res.status}`)
      }
      trackNewsletterSignup(data?.alreadySubscribed ? `${SOURCE}-already` : SOURCE)
      setStatus('done')
    } catch (err) {
      setStatus('error')
      setError(
        err instanceof Error
          ? `Could not subscribe (${err.message}). Try again or email info@laplandvibes.com.`
          : 'Could not subscribe. Try again or email info@laplandvibes.com.',
      )
    }
  }

  return (
    <section
      id="newsletter"
      className="py-20 sm:py-24 px-4 sm:px-6"
      style={{
        background: 'linear-gradient(135deg, #EC4899 0%, #DB2777 100%)',
      }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-white/85 font-semibold mb-3">
            LaplandStays Insider
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white tracking-wide mb-4">
            Plan Your Lapland Trip With Us
          </h2>
          <p className="text-white/85 text-base sm:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            One short email through aurora season — written by the team that lives in Finnish
            Lapland. Skip the search, get the dates, lock the cabin.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {benefits.map((b) => {
            const Icon = b.icon
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
              <p className="text-base font-medium">You're on the list. See you under the aurora.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3">
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-5 py-4 rounded-xl text-night bg-white placeholder:text-charcoal/50 focus:outline-none focus:ring-2 focus:ring-white/70 border border-white/40"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-6 py-4 bg-white text-pink font-bold rounded-xl hover:bg-gray-100 transition-colors flex items-center gap-2 justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                style={{ color: '#DB2777' }}
              >
                {status === 'loading' ? 'Joining…' : 'Get the next email'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          {error && (
            <div className="mt-4 inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 text-white px-4 py-2.5 rounded-xl">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <p className="text-sm">{error}</p>
            </div>
          )}

          <p className="text-white/70 text-xs mt-5">
            Roughly 2–4 emails per month through aurora season. One-click unsubscribe.{' '}
            <a href="/privacy" className="underline hover:text-white">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </section>
  )
}
