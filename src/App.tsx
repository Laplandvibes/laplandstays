import type { ReactNode } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AppPromoNudge } from './components/AppPromo'
import { useEffect, lazy, Suspense } from 'react'
import Nav from './components/Nav'
import Footer from '../../shared/Footer'
import CookieBanner from '../../shared/CookieBanner'
import MobileStickyCta from './components/MobileStickyCta'
import NewsletterPopup from './components/NewsletterPopup'
import { useLang, useLocalePath, useHtmlLang } from './i18n/useLang'
import LocaleAutoRedirect from './i18n/LocaleAutoRedirect'
import { useCopy, footerDict } from './locales/copy'

/**
 * 🔴 The app layout's landmark, EXCEPT on /terms.
 *
 * shared/Legal/TermsContent opens its own <main>; nesting it inside this one is
 * invalid HTML and gives a screen reader two "main" regions. Its siblings
 * PrivacyContent/CookieContent open a <div>, so only /terms is affected.
 * Measured from the rendered DOM 2026-08-13 (12 network sites) -- the raw HTML
 * has zero <main> elements, so this is invisible to grep.
 *
 * Do NOT "simplify" this back to a plain <main>.
 */
function MainOrDiv({ children }: { children?: ReactNode }) {
  const { pathname } = useLocation();
  const Tag = /(^|\/)terms\/?$/.test(pathname) ? 'div' : 'main';
  return <Tag className="flex-1">{children}</Tag>;
}

function LocalisedCookieBanner() {
  const lang = useLang()
  return <CookieBanner consentKey="laplandstays_cookie_consent" lang={lang} />
}

function FooterWrapper() {
  const lang = useLang()
  const to = useLocalePath()
  const c = useCopy()
  const fd = footerDict(lang)
  const FOOTER_PILLARS = [
    { name: c.nav.propertyTypes, href: to('/property-types') },
    { name: c.nav.whenToGo, href: to('/when-to-go') },
    { name: c.nav.transport, href: to('/transport') },
    { name: c.nav.cabins, href: to('/cabins') },
    { name: c.nav.about, href: to('/about') },
    { name: c.networkHub.huskySafaris, href: 'https://laplandhuskysafaris.com' },
    { name: c.networkHub.skiResorts, href: 'https://laplandskiresorts.com' },
  ]
  const FOOTER_EXTRA_LEGAL = [
    { to: to('/editorial-policy'), label: c.footerExtraLegal.editorialPolicy },
    { to: to('/about'), label: c.footerExtraLegal.about },
  ]
  return (
    <Footer
      pillarLinks={FOOTER_PILLARS}
      editorialNote={c.footerEditorialNote}
      extraLegalLinks={FOOTER_EXTRA_LEGAL}
      dict={fd}
    />
  )
}

const Home = lazy(() => import('./pages/Home'))
const Levi = lazy(() => import('./pages/Levi'))
const Yllas = lazy(() => import('./pages/Yllas'))
const Saariselka = lazy(() => import('./pages/Saariselka'))
const Inari = lazy(() => import('./pages/Inari'))
const Rovaniemi = lazy(() => import('./pages/Rovaniemi'))
const PropertyTypesPage = lazy(() => import('./pages/PropertyTypesPage'))
const About = lazy(() => import('./pages/About'))
const WhenToGo = lazy(() => import('./pages/WhenToGo'))
const Transport = lazy(() => import('./pages/Transport'))
const Cabins = lazy(() => import('./pages/Cabins'))
// FI-only vertailusivu — reitti on olemassa VAIN /fi/-puolella (ks. Igloos.tsx).
const Igloos = lazy(() => import('./pages/Igloos'))
// JA-only vertailusivu — reitti on olemassa VAIN /ja/-puolella (ks. GlassIgloos.tsx).
const GlassIgloos = lazy(() => import('./pages/GlassIgloos'))
const EditorialPolicy = lazy(() => import('./pages/EditorialPolicy'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const Terms = lazy(() => import('./pages/Terms'))
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'))
const NotFound = lazy(() => import('./pages/NotFound'))
import { trackPageView, initScrollDepth, initOutboundTracking } from './lib/analytics'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    trackPageView(pathname)
  }, [pathname])
  return null
}

function LocaleSync() {
  const lang = useHtmlLang()
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])
  return null
}

function AnalyticsBootstrap() {
  useEffect(() => {
    initScrollDepth()
    initOutboundTracking()
  }, [])
  return null
}

// Re-arm the TLS connection to the affiliate redirect on hover. The static
// <link rel="preconnect"> in index.html dies after ~10s idle, so users who
// scroll/read for a while would otherwise eat a full handshake on click.
// Hovering means a click is imminent — kick off a fresh preconnect.
function AffiliateLinkWarmup() {
  useEffect(() => {
    let last = 0
    const onHover = (e: Event) => {
      const a = (e.target as HTMLElement).closest?.('a[href*="go.laplandvibes.com"]')
      if (!a) return
      const now = Date.now()
      if (now - last < 5000) return // throttle to one warmup per 5s
      last = now
      const link = document.createElement('link')
      link.rel = 'preconnect'
      link.href = 'https://go.laplandvibes.com'
      link.crossOrigin = 'anonymous'
      document.head.appendChild(link)
      setTimeout(() => link.remove(), 12000)
    }
    document.addEventListener('mouseover', onHover, { passive: true })
    document.addEventListener('touchstart', onHover, { passive: true })
    return () => {
      document.removeEventListener('mouseover', onHover)
      document.removeEventListener('touchstart', onHover)
    }
  }, [])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <LocaleAutoRedirect />
      <LocaleSync />
      <AnalyticsBootstrap />
      <AffiliateLinkWarmup />
      <Nav />
      <div className="min-h-screen flex flex-col">
        <MainOrDiv>
          {/* Reserve viewport height while the lazy route chunk loads, otherwise
              the app-level Footer pins to the viewport bottom and then jumps down
              a full page when content arrives (CLS up to 1.0). */}
          <Suspense fallback={<div className="min-h-screen" />}>
            <Routes>
            {/* EN routes */}
            <Route path="/" element={<Home />} />
            <Route path="/destinations/levi" element={<Levi />} />
            <Route path="/destinations/yllas" element={<Yllas />} />
            <Route path="/destinations/saariselka" element={<Saariselka />} />
            <Route path="/destinations/inari" element={<Inari />} />
            <Route path="/destinations/rovaniemi" element={<Rovaniemi />} />
            <Route path="/property-types" element={<PropertyTypesPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/when-to-go" element={<WhenToGo />} />
            <Route path="/transport" element={<Transport />} />
            <Route path="/cabins" element={<Cabins />} />
            <Route path="/editorial-policy" element={<EditorialPolicy />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />

            {/* FI routes */}
            <Route path="/fi" element={<Home />} />
            <Route path="/fi/destinations/levi" element={<Levi />} />
            <Route path="/fi/destinations/yllas" element={<Yllas />} />
            <Route path="/fi/destinations/saariselka" element={<Saariselka />} />
            <Route path="/fi/destinations/inari" element={<Inari />} />
            <Route path="/fi/destinations/rovaniemi" element={<Rovaniemi />} />
            <Route path="/fi/property-types" element={<PropertyTypesPage />} />
            <Route path="/fi/about" element={<About />} />
            <Route path="/fi/when-to-go" element={<WhenToGo />} />
            <Route path="/fi/transport" element={<Transport />} />
            <Route path="/fi/cabins" element={<Cabins />} />
            <Route path="/fi/iglumajoitus" element={<Igloos />} />
            <Route path="/fi/editorial-policy" element={<EditorialPolicy />} />
            <Route path="/fi/privacy" element={<PrivacyPolicy />} />
            <Route path="/fi/terms" element={<Terms />} />
            <Route path="/fi/cookie-policy" element={<CookiePolicy />} />

            {/* DE routes */}
            <Route path="/de" element={<Home />} />
            <Route path="/de/destinations/levi" element={<Levi />} />
            <Route path="/de/destinations/yllas" element={<Yllas />} />
            <Route path="/de/destinations/saariselka" element={<Saariselka />} />
            <Route path="/de/destinations/inari" element={<Inari />} />
            <Route path="/de/destinations/rovaniemi" element={<Rovaniemi />} />
            <Route path="/de/property-types" element={<PropertyTypesPage />} />
            <Route path="/de/about" element={<About />} />
            <Route path="/de/when-to-go" element={<WhenToGo />} />
            <Route path="/de/transport" element={<Transport />} />
            <Route path="/de/cabins" element={<Cabins />} />
            <Route path="/de/editorial-policy" element={<EditorialPolicy />} />
            <Route path="/de/privacy" element={<PrivacyPolicy />} />
            <Route path="/de/terms" element={<Terms />} />
            <Route path="/de/cookie-policy" element={<CookiePolicy />} />

            {/* JA routes */}
            <Route path="/ja" element={<Home />} />
            <Route path="/ja/destinations/levi" element={<Levi />} />
            <Route path="/ja/destinations/yllas" element={<Yllas />} />
            <Route path="/ja/destinations/saariselka" element={<Saariselka />} />
            <Route path="/ja/destinations/inari" element={<Inari />} />
            <Route path="/ja/destinations/rovaniemi" element={<Rovaniemi />} />
            <Route path="/ja/property-types" element={<PropertyTypesPage />} />
            <Route path="/ja/about" element={<About />} />
            <Route path="/ja/when-to-go" element={<WhenToGo />} />
            <Route path="/ja/transport" element={<Transport />} />
            <Route path="/ja/cabins" element={<Cabins />} />
            <Route path="/ja/glass-igloos" element={<GlassIgloos />} />
            <Route path="/ja/editorial-policy" element={<EditorialPolicy />} />
            <Route path="/ja/privacy" element={<PrivacyPolicy />} />
            <Route path="/ja/terms" element={<Terms />} />
            <Route path="/ja/cookie-policy" element={<CookiePolicy />} />

            {/* ES routes */}
            <Route path="/es" element={<Home />} />
            <Route path="/es/destinations/levi" element={<Levi />} />
            <Route path="/es/destinations/yllas" element={<Yllas />} />
            <Route path="/es/destinations/saariselka" element={<Saariselka />} />
            <Route path="/es/destinations/inari" element={<Inari />} />
            <Route path="/es/destinations/rovaniemi" element={<Rovaniemi />} />
            <Route path="/es/property-types" element={<PropertyTypesPage />} />
            <Route path="/es/about" element={<About />} />
            <Route path="/es/when-to-go" element={<WhenToGo />} />
            <Route path="/es/transport" element={<Transport />} />
            <Route path="/es/cabins" element={<Cabins />} />
            <Route path="/es/editorial-policy" element={<EditorialPolicy />} />
            <Route path="/es/privacy" element={<PrivacyPolicy />} />
            <Route path="/es/terms" element={<Terms />} />
            <Route path="/es/cookie-policy" element={<CookiePolicy />} />

            {/* PT-BR routes (/br/...) */}
            <Route path="/br" element={<Home />} />
            <Route path="/br/destinations/levi" element={<Levi />} />
            <Route path="/br/destinations/yllas" element={<Yllas />} />
            <Route path="/br/destinations/saariselka" element={<Saariselka />} />
            <Route path="/br/destinations/inari" element={<Inari />} />
            <Route path="/br/destinations/rovaniemi" element={<Rovaniemi />} />
            <Route path="/br/property-types" element={<PropertyTypesPage />} />
            <Route path="/br/about" element={<About />} />
            <Route path="/br/when-to-go" element={<WhenToGo />} />
            <Route path="/br/transport" element={<Transport />} />
            <Route path="/br/cabins" element={<Cabins />} />
            <Route path="/br/editorial-policy" element={<EditorialPolicy />} />
            <Route path="/br/privacy" element={<PrivacyPolicy />} />
            <Route path="/br/terms" element={<Terms />} />
            <Route path="/br/cookie-policy" element={<CookiePolicy />} />

            {/* ZH-CN routes (/cn/...) */}
            <Route path="/cn" element={<Home />} />
            <Route path="/cn/destinations/levi" element={<Levi />} />
            <Route path="/cn/destinations/yllas" element={<Yllas />} />
            <Route path="/cn/destinations/saariselka" element={<Saariselka />} />
            <Route path="/cn/destinations/inari" element={<Inari />} />
            <Route path="/cn/destinations/rovaniemi" element={<Rovaniemi />} />
            <Route path="/cn/property-types" element={<PropertyTypesPage />} />
            <Route path="/cn/about" element={<About />} />
            <Route path="/cn/when-to-go" element={<WhenToGo />} />
            <Route path="/cn/transport" element={<Transport />} />
            <Route path="/cn/cabins" element={<Cabins />} />
            <Route path="/cn/editorial-policy" element={<EditorialPolicy />} />
            <Route path="/cn/privacy" element={<PrivacyPolicy />} />
            <Route path="/cn/terms" element={<Terms />} />
            <Route path="/cn/cookie-policy" element={<CookiePolicy />} />

            {/* KO routes (/kr/...) */}
            <Route path="/kr" element={<Home />} />
            <Route path="/kr/destinations/levi" element={<Levi />} />
            <Route path="/kr/destinations/yllas" element={<Yllas />} />
            <Route path="/kr/destinations/saariselka" element={<Saariselka />} />
            <Route path="/kr/destinations/inari" element={<Inari />} />
            <Route path="/kr/destinations/rovaniemi" element={<Rovaniemi />} />
            <Route path="/kr/property-types" element={<PropertyTypesPage />} />
            <Route path="/kr/about" element={<About />} />
            <Route path="/kr/when-to-go" element={<WhenToGo />} />
            <Route path="/kr/transport" element={<Transport />} />
            <Route path="/kr/cabins" element={<Cabins />} />
            <Route path="/kr/editorial-policy" element={<EditorialPolicy />} />
            <Route path="/kr/privacy" element={<PrivacyPolicy />} />
            <Route path="/kr/terms" element={<Terms />} />
            <Route path="/kr/cookie-policy" element={<CookiePolicy />} />

            {/* FR routes */}
            <Route path="/fr" element={<Home />} />
            <Route path="/fr/destinations/levi" element={<Levi />} />
            <Route path="/fr/destinations/yllas" element={<Yllas />} />
            <Route path="/fr/destinations/saariselka" element={<Saariselka />} />
            <Route path="/fr/destinations/inari" element={<Inari />} />
            <Route path="/fr/destinations/rovaniemi" element={<Rovaniemi />} />
            <Route path="/fr/property-types" element={<PropertyTypesPage />} />
            <Route path="/fr/about" element={<About />} />
            <Route path="/fr/when-to-go" element={<WhenToGo />} />
            <Route path="/fr/transport" element={<Transport />} />
            <Route path="/fr/cabins" element={<Cabins />} />
            <Route path="/fr/editorial-policy" element={<EditorialPolicy />} />
            <Route path="/fr/privacy" element={<PrivacyPolicy />} />
            <Route path="/fr/terms" element={<Terms />} />
            <Route path="/fr/cookie-policy" element={<CookiePolicy />} />

            {/* IT routes */}
            <Route path="/it" element={<Home />} />
            <Route path="/it/destinations/levi" element={<Levi />} />
            <Route path="/it/destinations/yllas" element={<Yllas />} />
            <Route path="/it/destinations/saariselka" element={<Saariselka />} />
            <Route path="/it/destinations/inari" element={<Inari />} />
            <Route path="/it/destinations/rovaniemi" element={<Rovaniemi />} />
            <Route path="/it/property-types" element={<PropertyTypesPage />} />
            <Route path="/it/about" element={<About />} />
            <Route path="/it/when-to-go" element={<WhenToGo />} />
            <Route path="/it/transport" element={<Transport />} />
            <Route path="/it/cabins" element={<Cabins />} />
            <Route path="/it/editorial-policy" element={<EditorialPolicy />} />
            <Route path="/it/privacy" element={<PrivacyPolicy />} />
            <Route path="/it/terms" element={<Terms />} />
            <Route path="/it/cookie-policy" element={<CookiePolicy />} />

            {/* NL routes */}
            <Route path="/nl" element={<Home />} />
            <Route path="/nl/destinations/levi" element={<Levi />} />
            <Route path="/nl/destinations/yllas" element={<Yllas />} />
            <Route path="/nl/destinations/saariselka" element={<Saariselka />} />
            <Route path="/nl/destinations/inari" element={<Inari />} />
            <Route path="/nl/destinations/rovaniemi" element={<Rovaniemi />} />
            <Route path="/nl/property-types" element={<PropertyTypesPage />} />
            <Route path="/nl/about" element={<About />} />
            <Route path="/nl/when-to-go" element={<WhenToGo />} />
            <Route path="/nl/transport" element={<Transport />} />
            <Route path="/nl/cabins" element={<Cabins />} />
            <Route path="/nl/editorial-policy" element={<EditorialPolicy />} />
            <Route path="/nl/privacy" element={<PrivacyPolicy />} />
            <Route path="/nl/terms" element={<Terms />} />
            <Route path="/nl/cookie-policy" element={<CookiePolicy />} />

            {/* SV routes */}
            <Route path="/sv" element={<Home />} />
            <Route path="/sv/destinations/levi" element={<Levi />} />
            <Route path="/sv/destinations/yllas" element={<Yllas />} />
            <Route path="/sv/destinations/saariselka" element={<Saariselka />} />
            <Route path="/sv/destinations/inari" element={<Inari />} />
            <Route path="/sv/destinations/rovaniemi" element={<Rovaniemi />} />
            <Route path="/sv/property-types" element={<PropertyTypesPage />} />
            <Route path="/sv/about" element={<About />} />
            <Route path="/sv/when-to-go" element={<WhenToGo />} />
            <Route path="/sv/transport" element={<Transport />} />
            <Route path="/sv/cabins" element={<Cabins />} />
            <Route path="/sv/editorial-policy" element={<EditorialPolicy />} />
            <Route path="/sv/privacy" element={<PrivacyPolicy />} />
            <Route path="/sv/terms" element={<Terms />} />
            <Route path="/sv/cookie-policy" element={<CookiePolicy />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
          </Suspense>
        </MainOrDiv>
        <FooterWrapper />
      </div>
      <MobileStickyCta />
      <LocalisedCookieBanner />
      <NewsletterPopup />
    <AppPromoNudge />
    </BrowserRouter>
  )
}
