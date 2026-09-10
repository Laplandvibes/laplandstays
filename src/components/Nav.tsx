import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { HOTEL_SEARCH_FOR } from '../lib/affiliate'
import { trackAffiliateClick } from '../lib/analytics'
import { useLang, useLocalePath, pick } from '../i18n/useLang'
import { useCopy } from '../locales/copy'
import EcosystemMenu from '../shared/EcosystemMenu'
import LanguageSwitcher from '../i18n/LanguageSwitcher'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const lang = useLang()
  const to = useLocalePath()
  const c = useCopy().nav

  const links = [
    { href: to('/'), label: c.home },
    { href: to('/property-types'), label: c.propertyTypes },
    { href: to('/destinations/levi'), label: c.levi },
    { href: to('/destinations/yllas'), label: c.yllas },
    { href: to('/destinations/saariselka'), label: c.saariselka },
    { href: to('/destinations/inari'), label: c.inari },
    { href: to('/destinations/rovaniemi'), label: c.rovaniemi },
  ]

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => { setOpen(false) }, [location.pathname])


  const homePath = to('/')
  const isHome = location.pathname === homePath
  const bookHref = isHome ? '#search' : HOTEL_SEARCH_FOR(lang).navBookNow
  const bookProps = isHome
    ? {}
    : {
        target: '_blank' as const,
        rel: 'sponsored nofollow noopener',
        onClick: () => trackAffiliateClick('lodging', 'nav_book_now', HOTEL_SEARCH_FOR(lang).navBookNow),
      }


  // Accessibility aria translations (KO/FR/IT/NL screen-reader leaks fix).
  const ariaToggleMenu = pick(lang,
    'Toggle menu', 'Avaa/sulje valikko', 'Menü umschalten', 'メニューを開閉する', 'Alternar menú',
    'Alternar menu', '切换菜单', '메뉴 열기/닫기', 'Basculer le menu', 'Apri/chiudi menu', 'Menu wisselen', 'Växla meny')

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(15,23,42,0.08)] border-b border-gray-200/60'
            : 'bg-gradient-to-b from-black/40 to-transparent'
        }`}
      >
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-3 h-16">
          <div className="flex items-center gap-3 sm:gap-5 shrink-0">
            <EcosystemMenu lang={lang} currentDomain="laplandstays.com" variant={scrolled ? 'light' : 'dark'} />
            <Link to={to('/')} className="flex items-center shrink-0" aria-label={c.homeAria}>
              <span className="tracking-wide leading-none font-heading text-2xl sm:text-3xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]">
                <span className="text-pink">#</span>
                <span className={scrolled ? 'text-night' : 'text-white'}>LAPLAND</span>
                <span className="text-pink">STAYS</span>
              </span>
            </Link>
          </div>

          <div className="hidden xl:flex items-center gap-0.5">
            {links.map((l) => {
              const active = location.pathname === l.href
              return (
                <Link
                  key={l.href}
                  to={l.href}
                  className={`whitespace-nowrap px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
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
            <div className={`ml-2 border-l pl-2 ${scrolled ? 'border-charcoal/15' : 'border-white/25'}`}>
              <LanguageSwitcher tone={scrolled ? 'light' : 'dark'} />
            </div>
            <a
              href={bookHref}
              {...bookProps}
              className="ml-3 px-5 py-2 text-white text-sm font-semibold rounded-lg transition-colors uppercase tracking-wider"
              style={{ background: '#EC4899' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = '#DB2777')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = '#EC4899')}
            >
              {c.bookNow}
            </a>
          </div>

          <div className="xl:hidden flex items-center gap-2">
            <LanguageSwitcher tone={scrolled ? 'light' : 'dark'} />
            <button
              className={`p-2 rounded-lg transition-colors ${scrolled ? 'text-night' : 'text-white'}`}
              onClick={() => setOpen(!open)}
              aria-label={ariaToggleMenu}
              aria-expanded={open}
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <div className="xl:hidden fixed inset-0 z-40 pt-16 bg-white overflow-y-auto">
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
                if (!isHome) trackAffiliateClick('lodging', 'nav_book_now_mobile', HOTEL_SEARCH_FOR(lang).navBookNow)
                setOpen(false)
              }}
              className="mt-4 px-4 py-3.5 text-white text-base font-semibold rounded-xl text-center uppercase tracking-wider"
              style={{ background: '#EC4899' }}
            >
              {c.bookNow}
            </a>
          </div>
        </div>
      )}
    </>
  )
}
