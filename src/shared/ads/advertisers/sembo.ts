import { Package } from 'lucide-react'
import type { AdSpec } from '../AdUnit'

// Sembo — hotels, apartments and holiday homes; combine stay + flight into one
// trip. FI-ONLY copy for now (our Adtraction deep-link lands on sembo.fi, the
// Finnish storefront). Logo: _affiliate/logos/adtraction-sembo.png
// → public/images/partners/sembo.png.
const sembo: AdSpec = {
  key: 'sembo',
  brand: 'Sembo',
  logo: '/images/partners/sembo.png',
  // ss=Lapland: ilman hakua Adtraction-wrap pudottaa sembo.fi:n ETUSIVULLE
  // (lv_permanent_rules §5). Worker resolvoi ss:n Sembon Lappi-aluepolygoniin
  // 359987 (~120 kohdetta) hotel-selection-plan-sivulle — verifioitu probella
  // 2026-08-09. "Lapland, Finland" on 25.7. validoitu aluetermi.
  linkFor: (sid) => `https://go.laplandvibes.com/go/sembo?sid=${encodeURIComponent(sid)}&ss=${encodeURIComponent('Lapland, Finland')}`,
  accent: '#0EA5E9',
  accentDark: '#0369A1',
  icon: Package,
  copy: {
    fi: {
      eyebrow: 'Koko matka kerralla',
      headline: 'Sembo, kokoa hotelli, lento ja loma-asunto samaan varaukseen',
      sub: 'Hotellit, huoneistot ja lomakodit ympäri Eurooppaa, ja majoituksen voi yhdistää lentoihin samaan varaukseen. Koko perheen reissu yhdellä maksulla ja yhdellä vahvistuksella.',
      trust: ['Hotellit ja lomakodit', 'Lennot samaan varaukseen', 'Yksi maksu, yksi vahvistus'],
      cta: 'Kokoa matkasi',
      poweredBy: 'Varaus Sembolta',
    },
  },
}

export default sembo
