import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { HOTEL_SEARCH } from '../lib/affiliate'
import { trackAffiliateClick } from '../lib/analytics'

const links = [
  { href: '/', label: 'Home' },
  { href: '/property-types', label: 'Property Types' },
  { href: '/destinations/levi', label: 'Levi' },
  { href: '/destinations/yllas', label: 'Yllas' },
  { href: '/destinations/saariselka', label: 'Saariselka' },
  { href: '/destinations/inari', label: 'Inari' },
  { href: '/destinations/rovaniemi', label: 'Rovaniemi' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => { setOpen(false) }, [location.pathname])

  const isHome = location.pathname === '/'
  const bookHref = isHome ? '#search' : HOTEL_SEARCH.navBookNow
  const bookProps = isHome
    ? {}
    : {
        target: '_blank' as const,
        rel: 'sponsored nofollow noopener',
        onClick: () => trackAffiliateClick('hotelscom', 'nav_book_now', HOTEL_SEARCH.navBookNow),
      }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(15,23,42,0.08)] border-b border-gray-200/60'
            : 'bg-gradient-to-b from-black/40 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center shrink-0" aria-label="LaplandStays home">
            <span className="tracking-wider leading-none font-heading text-2xl sm:text-[28px] drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]">
              <span className="text-pink">#</span>
              <span className={scrolled ? 'text-night' : 'text-white'}>LAPLAND</span>
              <span className="text-pink">STAYS</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-0.5">
            {links.map((l) => {
              const active = location.pathname === l.href
              return (
                <Link
                  key={l.href}
                  to={l.href}
                  className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                    active
                      ? 'text-pink bg-pink/10'
                      : scrolled
                        ? 'text-charcoal hover:text-pink hover:bg-pink/5'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {l.label}
                </Link>
              )
            })}
            <a
              href={bookHref}
              {...bookProps}
              className="ml-3 px-5 py-2 text-white text-sm font-semibold rounded-lg transition-colors uppercase tracking-wider"
              style={{ background: '#EC4899' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = '#DB2777')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = '#EC4899')}
            >
              Book Now
            </a>
          </div>

          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-night' : 'text-white'}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden fixed inset-0 z-40 pt-16 bg-white overflow-y-auto">
          <div className="flex flex-col p-5 gap-1">
            {links.map((l) => {
              const active = location.pathname === l.href
              return (
                <Link
                  key={l.href}
                  to={l.href}
                  className={`px-4 py-3.5 text-base font-medium rounded-xl transition-colors ${
                    active ? 'text-pink bg-pink/10' : 'text-charcoal hover:bg-pink/5'
                  }`}
                >
                  {l.label}
                </Link>
              )
            })}
            <a
              href={bookHref}
              {...(isHome
                ? {}
                : { target: '_blank' as const, rel: 'sponsored nofollow noopener' })}
              onClick={() => {
                if (!isHome) trackAffiliateClick('hotelscom', 'nav_book_now_mobile', HOTEL_SEARCH.navBookNow)
                setOpen(false)
              }}
              className="mt-4 px-4 py-3.5 text-white text-base font-semibold rounded-xl text-center uppercase tracking-wider"
              style={{ background: '#EC4899' }}
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </>
  )
}
