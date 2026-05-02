import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { buildAffiliateUrl } from '../lib/affiliate'
import { trackAffiliateClick } from '../lib/analytics'

// Dedicated SID so CJ Reports / GA4 can attribute mobile sticky-bar clicks
// separately from the hero CTA (different placement, different intent).
const STICKY_HREF = buildAffiliateUrl({
  partner: 'hotels',
  sid: 'mobile_sticky_cta',
  destination: 'Rovaniemi, Finland',
})

/**
 * Mobile-only sticky bottom CTA — surfaces the primary booking action so
 * users who never scroll past the hero still have one tap to Hotels.com.
 *
 * - Shows after the user scrolls past the hero search widget (~600 px).
 * - Hidden on desktop (≥ lg breakpoint) since the nav "Book Now" pill is
 *   always visible there.
 * - Hidden on policy / utility routes — those are read-only legal pages.
 * - Sits above the cookie banner (which has its own z-index 9999).
 */

const HIDE_ON_PATHS = ['/privacy', '/terms', '/cookie-policy']

export default function MobileStickyCta() {
  const [visible, setVisible] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    if (HIDE_ON_PATHS.includes(pathname)) {
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

  if (HIDE_ON_PATHS.includes(pathname) || !visible) return null

  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-[9000] pointer-events-none"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="pointer-events-auto bg-night/95 backdrop-blur-md border-t border-pink/30 shadow-[0_-8px_24px_rgba(0,0,0,0.4)]">
        <div className="px-4 py-3 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[10px] uppercase tracking-[0.18em] text-pink font-semibold leading-none mb-1">From €100/night</p>
            <p className="text-[13px] text-white font-semibold leading-tight truncate">Verified Lapland cabins &amp; igloos</p>
          </div>
          <a
            href={STICKY_HREF}
            target="_blank"
            rel="sponsored nofollow noopener"
            onClick={() => trackAffiliateClick('hotelscom', 'mobile_sticky_cta', STICKY_HREF)}
            className="shrink-0 inline-flex items-center gap-1.5 bg-pink hover:bg-pink/90 text-white font-bold text-[13px] uppercase tracking-wider px-4 py-2.5 rounded-lg whitespace-nowrap"
          >
            Book now
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  )
}
