import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav'
import Footer from '../../shared/Footer'
import CookieBanner from '../../shared/CookieBanner'
import MobileStickyCta from './components/MobileStickyCta'
import NewsletterPopup from './components/NewsletterPopup'

// Footer pillar links — mix of internal LaplandStays guides and external
// sister-site URLs. Auto-detected as external by Footer.tsx.
const FOOTER_PILLARS = [
  { name: 'Property Types', href: '/property-types' },
  { name: 'When to Go', href: '/when-to-go' },
  { name: 'Transport', href: '/transport' },
  { name: 'About', href: '/about' },
  { name: 'Husky Safaris', href: 'https://laplandhuskysafaris.com' },
  { name: 'Ski Resorts', href: 'https://laplandskiresorts.com' },
]

// Editorial closure shown above the affiliate disclosure in Footer.
const FOOTER_EDITORIAL_NOTE = 'Independently maintained by Lapeso Oy in Finnish Lapland · last reviewed April 2026 · we earn an affiliate commission on some bookings, but it never shapes which properties we recommend.'

// Extra legal links rendered next to Privacy / Cookie / Terms in Footer bottom strip.
const FOOTER_EXTRA_LEGAL = [
  { to: '/editorial-policy', label: 'Editorial Policy' },
  { to: '/about', label: 'About' },
]
import Home from './pages/Home'
import Levi from './pages/Levi'
import Yllas from './pages/Yllas'
import Saariselka from './pages/Saariselka'
import Inari from './pages/Inari'
import Rovaniemi from './pages/Rovaniemi'
import PropertyTypesPage from './pages/PropertyTypesPage'
import About from './pages/About'
import WhenToGo from './pages/WhenToGo'
import Transport from './pages/Transport'
import EditorialPolicy from './pages/EditorialPolicy'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import CookiePolicy from './pages/CookiePolicy'
import NotFound from './pages/NotFound'
import { trackPageView, initScrollDepth, initOutboundTracking } from './lib/analytics'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    trackPageView(pathname)
  }, [pathname])
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
      <AnalyticsBootstrap />
      <AffiliateLinkWarmup />
      <Nav />
      <div className="min-h-screen flex flex-col">
        <main className="flex-1">
          <Routes>
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
            <Route path="/editorial-policy" element={<EditorialPolicy />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer pillarLinks={FOOTER_PILLARS} editorialNote={FOOTER_EDITORIAL_NOTE} extraLegalLinks={FOOTER_EXTRA_LEGAL} />
      </div>
      <MobileStickyCta />
      <CookieBanner consentKey="laplandstays_cookie_consent" />
      <NewsletterPopup />
    </BrowserRouter>
  )
}
