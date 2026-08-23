import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { buildAffiliateUrl } from '../lib/affiliate'
import { useLang, type Lang } from '../i18n/useLang'
import { trackAffiliateClick } from '../lib/analytics'
import { useCopy } from '../locales/copy'

// Dedicated SID so partner reports / GA4 can attribute mobile sticky-bar clicks
// separately from the hero CTA (different placement, different intent).
// Built per language, not per module load: `locale` decides whether the Worker
// sends the visitor to Sembo (fi) or Trip.com.
const stickyHrefFor = (lang: Lang) => buildAffiliateUrl({
  partner: 'hotels',
  sid: 'mobile_sticky_cta',
  destination: 'Rovaniemi, Finland',
  lang,
})

/**
 * Mobile-only sticky bottom CTA, surfaces the primary booking action so
 * users who never scroll past the hero still have one tap to the lodging partner.
 *
 * - Shows after the user scrolls past the hero search widget (~600 px).
 * - Hidden on desktop (≥ lg breakpoint) since the nav "Book Now" pill is
 *   always visible there.
 * - Hidden on policy / utility routes, those are read-only legal pages.
 * - Sits above the cookie banner (which has its own z-index 9999).
 */

// Matches /privacy, /terms, /cookie-policy under any locale prefix
// (en '', /fi, /de, /ja, /es, /br, /cn, /kr, /fr, /it, /nl), trailing slash optional.
const HIDE_ON_PATHS = /\/(privacy|terms|cookie-policy)\/?$/

export default function MobileStickyCta() {
  const [visible, setVisible] = useState(false)
  const lang = useLang()
  const stickyHref = stickyHrefFor(lang)
  const { pathname } = useLocation()
  const c = useCopy().mobileStickyCta

  useEffect(() => {
    if (HIDE_ON_PATHS.test(pathname)) {
      setVisible(false)
      return
    }
    const onScroll = () => {
      setVisible(window.scrollY > 600)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  if (HIDE_ON_PATHS.test(pathname) || !visible) return null

  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-[9000] pointer-events-none"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="pointer-events-auto bg-night/95 backdrop-blur-md border-t border-pink/30 shadow-[0_-8px_24px_rgba(0,0,0,0.4)]">
        <div className="px-4 py-3 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[13px] text-white font-semibold leading-tight truncate">{c.headline}</p>
          </div>
          <a
            href={stickyHref}
            target="_blank"
            rel="sponsored nofollow noopener"
            onClick={() => trackAffiliateClick('lodging', 'mobile_sticky_cta', stickyHref)}
            className="shrink-0 inline-flex items-center gap-1.5 bg-pink hover:bg-pink/90 text-white font-bold text-[13px] uppercase tracking-wider px-4 py-2.5 rounded-lg whitespace-nowrap"
          >
            {c.cta}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  )
}
