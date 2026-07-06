import { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, Globe, ChevronDown } from 'lucide-react'
import { HOTEL_SEARCH } from '../lib/affiliate'
import { trackAffiliateClick } from '../lib/analytics'
import { useLang, useLocalePath, stripLocale, pick } from '../i18n/useLang'
import { useCopy } from '../locales/copy'
import EcosystemMenu from '../../../shared/EcosystemMenu'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const langWrapRef = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const navigate = useNavigate()
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

  useEffect(() => { setOpen(false); setLangOpen(false) }, [location.pathname])

  useEffect(() => {
    if (!langOpen) return
    const onClick = (e: MouseEvent) => {
      if (!langWrapRef.current?.contains(e.target as Node)) setLangOpen(false)
    }
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setLangOpen(false) }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [langOpen])

  const homePath = to('/')
  const isHome = location.pathname === homePath
  const bookHref = isHome ? '#search' : HOTEL_SEARCH.navBookNow
  const bookProps = isHome
    ? {}
    : {
        target: '_blank' as const,
        rel: 'sponsored nofollow noopener',
        onClick: () => trackAffiliateClick('hotelscom', 'nav_book_now', HOTEL_SEARCH.navBookNow),
      }

  type LangCode = 'en' | 'fi' | 'de' | 'ja' | 'es' | 'pt-BR' | 'zh-CN' | 'ko' | 'fr' | 'it' | 'nl'
  const URL_PREFIX_OF: Record<LangCode, string> = {
    en: '', fi: 'fi', de: 'de', ja: 'ja', es: 'es', 'pt-BR': 'br', 'zh-CN': 'cn',
    ko: 'kr', fr: 'fr', it: 'it', nl: 'nl',
  }
  const ALL_LANGS: { code: LangCode; label: string; native: string }[] = [
    { code: 'en', label: 'EN', native: 'English' },
    { code: 'fi', label: 'FI', native: 'Suomi' },
    { code: 'de', label: 'DE', native: 'Deutsch' },
    { code: 'ja', label: 'JA', native: '日本語' },
    { code: 'es', label: 'ES', native: 'Español' },
    { code: 'pt-BR', label: 'BR', native: 'Português' },
    { code: 'zh-CN', label: 'CN', native: '简体中文' },
    { code: 'ko', label: 'KR', native: '한국어' },
    { code: 'fr', label: 'FR', native: 'Français' },
    { code: 'it', label: 'IT', native: 'Italiano' },
    { code: 'nl', label: 'NL', native: 'Nederlands' },
  ]

  const switchTo = (target: LangCode) => {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem('lv_locale_choice', target)
    }
    const bare = stripLocale(location.pathname)
    const prefix = URL_PREFIX_OF[target]
    if (!prefix) {
      navigate(bare)
    } else {
      navigate(bare === '/' ? `/${prefix}` : `/${prefix}${bare}`)
    }
  }

  const currentLangLabel = ALL_LANGS.find((l) => l.code === lang)?.label ?? 'EN'

  // Accessibility aria translations (KO/FR/IT/NL screen-reader leaks fix).
  const ariaSwitchLanguage = pick(lang,
    'Switch language', 'Vaihda kieli', 'Sprache wechseln', '言語を切り替える', 'Cambiar idioma',
    'Mudar idioma', '切换语言', '언어 변경', 'Changer de langue', 'Cambia lingua', 'Taal wijzigen')
  const ariaLanguage = pick(lang,
    'Language', 'Kieli', 'Sprache', '言語', 'Idioma',
    'Idioma', '语言', '언어', 'Langue', 'Lingua', 'Taal')
  const ariaToggleMenu = pick(lang,
    'Toggle menu', 'Avaa/sulje valikko', 'Menü umschalten', 'メニューを開閉する', 'Alternar menú',
    'Alternar menu', '切换菜单', '메뉴 열기/닫기', 'Basculer le menu', 'Apri/chiudi menu', 'Menu wisselen')

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
            <Link to={to('/')} className="flex items-center shrink-0" aria-label="LaplandStays home">
              <span className="tracking-wider leading-none font-heading text-xl sm:text-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]">
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
            <div
              className={`ml-2 relative border-l pl-2 ${scrolled ? 'border-charcoal/15' : 'border-white/25'}`}
              ref={langWrapRef}
            >
              <button
                type="button"
                onClick={() => setLangOpen((o) => !o)}
                aria-haspopup="listbox"
                aria-expanded={langOpen}
                aria-label={ariaSwitchLanguage}
                className={`flex items-center gap-1.5 px-2 py-1 text-xs font-semibold uppercase tracking-wider transition-colors ${
                  scrolled ? 'text-charcoal/85 hover:text-pink' : 'text-white/90 hover:text-pink'
                }`}
              >
                <Globe className="w-3.5 h-3.5" />
                {currentLangLabel}
                <ChevronDown className={`w-3 h-3 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
              </button>
              {langOpen && (
                <ul
                  role="listbox"
                  aria-label={ariaLanguage}
                  className={`absolute right-0 top-full mt-2 min-w-[180px] py-1 rounded-lg shadow-xl z-50 max-h-[80vh] overflow-y-auto border ${
                    scrolled
                      ? 'bg-white/98 backdrop-blur-md border-charcoal/15'
                      : 'bg-deep-night/95 backdrop-blur-md border-white/15'
                  }`}
                >
                  {ALL_LANGS.map((item) => {
                    const isActive = item.code === lang
                    return (
                      <li key={item.code} role="option" aria-selected={isActive}>
                        <button
                          type="button"
                          onClick={() => { switchTo(item.code); setLangOpen(false) }}
                          aria-current={isActive ? 'page' : undefined}
                          className={`w-full flex items-center gap-2 px-3 py-2 text-left text-sm transition-colors ${
                            isActive
                              ? 'bg-pink/15 text-pink font-semibold'
                              : scrolled
                                ? 'text-charcoal/85 hover:bg-pink/5 hover:text-pink'
                                : 'text-snow/85 hover:bg-white/5 hover:text-snow'
                          }`}
                        >
                          <span className="w-8 font-semibold text-xs tracking-wider">{item.label}</span>
                          <span>{item.native}</span>
                        </button>
                      </li>
                    )
                  })}
                </ul>
              )}
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
            <div className="relative inline-block">
              <select
                value={lang}
                onChange={(e) => switchTo(e.target.value as LangCode)}
                aria-label={ariaLanguage}
                className={`appearance-none bg-transparent border rounded pl-2 pr-7 py-1 text-xs font-semibold uppercase ${scrolled ? 'border-charcoal/30 text-charcoal' : 'border-white/40 text-white'}`}
              >
                {ALL_LANGS.map((l) => (
                  <option key={l.code} value={l.code} className="bg-white text-charcoal">
                    {l.label}
                  </option>
                ))}
              </select>
              <ChevronDown className={`pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 ${scrolled ? 'text-charcoal/70' : 'text-white/80'}`} />
            </div>
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
                if (!isHome) trackAffiliateClick('hotelscom', 'nav_book_now_mobile', HOTEL_SEARCH.navBookNow)
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
