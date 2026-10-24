import { useState, useEffect, useRef, Fragment } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'
import { HOTEL_SEARCH_FOR } from '../lib/affiliate'
import { trackAffiliateClick } from '../lib/analytics'
import { useLang, useLocalePath, pick } from '../i18n/useLang'
import { useCopy } from '../locales/copy'
import EcosystemMenu from '../shared/EcosystemMenu'
import LanguageSwitcher from '../i18n/LanguageSwitcher'
import type { CSSProperties } from 'react';

// Sanamerkin leveys 1 px:n fontilla (Bebas Neue + tracking-wide). Puhelin- ja tablettinavissa koko lasketaan
// tästä ja vapaasta tilasta (index.css LV-NAV-SANAMERKKI): 24 px (tabletilla 30 px), pienempi vain kun ei mahdu.
const WM_STYLE = { '--lv-wm-k': 5.26, '--lv-wm-max-md': '30px' } as CSSProperties;

/** Sama sivu loppukauttaviivasta riippumatta: sisääntulo on `/x/`, linkki voi olla `/x` (18.9.2026). */
const samePath = (a: string, b: string) => a.replace(/\/+$/, '') === b.replace(/\/+$/, '')

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const lang = useLang()
  const to = useLocalePath()
  const c = useCopy().nav

  /* Kohteet pudotusvalikkoon (Vesa 24.10.2026: "navista puuttuu" Ruka ja Pyhä–Luosto, jotka tulivat 22.10.).
     Seitsemän kohdetta + neljä muuta linkkiä ei mahdu 1280 px:n riviin (alla 25.9. mittaus), joten
     rivillä on yksi "Kohteet"-painike ja kaikki kohteet sen alla; puhelinvalikossa ne ovat omana ryhmänään. */
  const destinations = [
    { href: to('/destinations/levi'), label: c.levi },
    { href: to('/destinations/yllas'), label: c.yllas },
    { href: to('/destinations/ruka'), label: c.ruka },
    { href: to('/destinations/pyha-luosto'), label: c.pyhaLuosto },
    { href: to('/destinations/rovaniemi'), label: c.rovaniemi },
    { href: to('/destinations/saariselka'), label: c.saariselka },
    { href: to('/destinations/inari'), label: c.inari },
  ]
  const links = [
    { href: to('/'), label: c.home },
    { href: to('/property-types'), label: c.propertyTypes },
    { href: to('/cabins'), label: c.cabins },
  ]
  const destLabel = pick(lang,
    'Destinations', 'Kohteet', 'Reiseziele', 'エリア', 'Destinos',
    'Destinos', '目的地', '여행지', 'Destinations', 'Destinazioni', 'Bestemmingen', 'Resmål')
  const destActive = destinations.some((d) => samePath(location.pathname, d.href))
  const [destOpen, setDestOpen] = useState(false)
  // Hover opens the menu; a click right after that hover must not close it again (mouse users do both).
  const hoverOpenedAt = useRef(0)
  // 🔴 Uutisosio EI mahdu tähän riviin (mitattu 25.9.2026). Lisäsin sen tänne, ja
  // `npm run portti --taso selain` kaatui: 1280 px:n leveydellä japaninkielinen
  // "今すぐ予約" rivittyi kahdelle riville, koska yksi linkki lisää vei tilan pilleriltä.
  // Osio linkitetään alatunnisteen pilarilinkeistä (App.tsx FooterWrapper), joka
  // rivittyy ruudukkona eikä voi valua naapurin päälle.

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => { setOpen(false); setDestOpen(false) }, [location.pathname])
  useEffect(() => {
    if (!destOpen) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setDestOpen(false) }
    const onDown = (e: MouseEvent) => { if (!(e.target as HTMLElement).closest('[data-lv-dest]')) setDestOpen(false) }
    window.addEventListener('keydown', onKey)
    window.addEventListener('mousedown', onDown)
    return () => { window.removeEventListener('keydown', onKey); window.removeEventListener('mousedown', onDown) }
  }, [destOpen])


  const homePath = to('/')
  const isHome = samePath(location.pathname, homePath)
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
    'Alternar menu', '切換選單', '메뉴 열기/닫기', 'Basculer le menu', 'Apri/chiudi menu', 'Menu wisselen', 'Växla meny')

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(15,23,42,0.08)] border-b border-gray-200/60'
            : 'bg-deep-night/95 backdrop-blur-md'
        }`}
      >
        <div className="lv-navrivi max-w-screen-2xl mx-auto px-4 sm:px-6 xl:px-8 flex items-center justify-between gap-3 h-16">
          <div className="lv-navvasen flex items-center gap-3 sm:gap-5 shrink-0">
            <EcosystemMenu lang={lang} currentDomain="laplandstays.com" variant={scrolled ? 'light' : 'dark'} />
            <div className="lv-wm-paikka">
              <Link to={to('/')} className="flex items-center shrink-0 min-h-11" aria-label={c.homeAria}
              onClick={() => {
                // 🔴 Verkostovika, mitattu 20.9.2026 seitsemällä sivustolla seitsemästä:
                // ScrollToTop kuuntelee pathnamea, joka ei muutu kun ollaan jo
                // etusivulla, joten logon klikkaus ei tehnyt siellä mitään.
                if (window.location.pathname.replace(/\/$/, '') === to('/').replace(/\/$/, '')) {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }
              }}
            >
                <span className="lv-wm tracking-wide leading-none font-heading text-2xl sm:text-3xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]" data-lv-sanamerkki="" style={WM_STYLE}>
                  <span className="text-pink">#</span>
                  <span className={scrolled ? 'text-night' : 'text-white'}>LAPLAND</span>
                  <span className="text-pink">STAYS</span>
                </span>
              </Link>
            </div>
          </div>

          <div className="hidden xl:flex items-center gap-0.5">
            {links.map((l, i) => {
              const active = samePath(location.pathname, l.href)
              const tone = (on: boolean) => on
                ? 'text-pink bg-pink/10'
                : scrolled
                  ? 'text-charcoal hover:text-pink hover:bg-pink/5'
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              return (
                <Fragment key={l.href}>
                  {i === 1 && (
                    <div className="relative" data-lv-dest="" onMouseLeave={() => setDestOpen(false)}>
                      <button
                        type="button"
                        aria-expanded={destOpen}
                        aria-haspopup="true"
                        onClick={() => setDestOpen((v) => (v && Date.now() - hoverOpenedAt.current < 600 ? true : !v))}
                        onMouseEnter={() => { hoverOpenedAt.current = Date.now(); setDestOpen(true) }}
                        className={`inline-flex items-center gap-1 whitespace-nowrap px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${tone(destActive || destOpen)}`}
                      >
                        {destLabel}
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${destOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                      </button>
                      {destOpen && (
                        /* pt-2 = hover bridge: the pointer crosses the gap without closing the menu. */
                        <div className="absolute left-0 top-full pt-2 z-50">
                          <ul className="min-w-[13rem] rounded-xl bg-white shadow-[0_16px_40px_-8px_rgba(15,23,42,0.35)] ring-1 ring-night/10 p-1.5">
                            {destinations.map((d) => (
                              <li key={d.href}>
                                <Link
                                  to={d.href}
                                  className={`block whitespace-nowrap px-3.5 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                                    samePath(location.pathname, d.href) ? 'text-pink bg-pink/10' : 'text-charcoal hover:text-pink hover:bg-pink/5'
                                  }`}
                                >
                                  {d.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                  <Link
                    to={l.href}
                    className={`whitespace-nowrap px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${tone(active)}`}
                  >
                    {l.label}
                  </Link>
                </Fragment>
              )
            })}
            <div className={`ml-2 border-l pl-2 ${scrolled ? 'border-charcoal/15' : 'border-white/25'}`}>
              <LanguageSwitcher tone={scrolled ? 'light' : 'dark'} />
            </div>
            <a
              href={bookHref}
              {...bookProps}
              className="ml-3 px-5 py-2 text-white text-sm font-semibold rounded-lg transition-colors"
              style={{ background: '#DB2777' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = '#BE185D')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = '#DB2777')}
            >
              {c.bookNow}
            </a>
          </div>

          <div className="xl:hidden flex items-center gap-2">
            <LanguageSwitcher tone={scrolled ? 'light' : 'dark'} />
            <button
              className={`inline-flex items-center justify-center min-h-11 min-w-11 p-2 rounded-lg transition-colors ${scrolled ? 'text-night' : 'text-white'}`}
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
              const active = samePath(location.pathname, l.href)
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
            <p className="mt-4 px-4 pb-1 text-xs font-semibold uppercase tracking-[0.18em] text-charcoal/60">{destLabel}</p>
            <div className="flex flex-col gap-1">
              {destinations.map((d) => (
                <Link
                  key={d.href}
                  to={d.href}
                  className={`px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                    samePath(location.pathname, d.href) ? 'text-pink bg-pink/10' : 'text-charcoal hover:bg-pink/5'
                  }`}
                >
                  {d.label}
                </Link>
              ))}
            </div>
            <a
              href={bookHref}
              {...(isHome
                ? {}
                : { target: '_blank' as const, rel: 'sponsored nofollow noopener' })}
              onClick={() => {
                if (!isHome) trackAffiliateClick('lodging', 'nav_book_now_mobile', HOTEL_SEARCH_FOR(lang).navBookNow)
                setOpen(false)
              }}
              className="mt-4 px-4 py-3.5 text-white text-base font-semibold rounded-xl text-center"
              style={{ background: '#DB2777' }}
            >
              {c.bookNow}
            </a>
          </div>
        </div>
      )}
    </>
  )
}
