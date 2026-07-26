import { useState } from 'react'
import { Search, MapPin, Calendar, Users, Car, Hotel, Plane, ArrowRight, ChevronDown } from 'lucide-react'
import { trackAffiliateClick } from '../lib/analytics'
import { buildAffiliateUrl } from '../lib/affiliate'
import { buildTripFlightUrl } from '../lib/tripcom'
import { useLang, type Lang } from '../i18n/useLang'
import { useCopy } from '../i18n/useCopy'
import enCopy from './TravelSearchWidget.copy.en'
import type { Copy } from './TravelSearchWidget.copy.types'


// Hotels search destinations. Values feed the Worker's ss= as-is: the fi
// locale routes to Sembo, whose autosuggest resolves ANY Finnish place, and
// the other locales route to Trip.com, which deep-links the towns in the
// Worker's TRIP_CITY map and falls back to a tracked trip.com front page
// (dates kept) for the rest. "Lapland, Finland" alone Helsinki-snaps, so the
// generic option stays anchored to Rovaniemi (regional capital, deep inventory).
// Values verified 2026-07-24 against Sembo's own place index (the autosuggest
// the Worker resolves ss= through) and its inventory count per polygon. Two
// traps this list now avoids:
//   • a thin namesake polygon — "Ylläs" resolves to a 3-property polygon while
//     the resort's actual village Äkäslompolo has 13;
//   • a "Town, Municipality, Finland" string matching a HOTEL instead of a
//     place, which then silently searches that hotel's home area: "Luosto,
//     Sodankylä, Finland" landed on Vuotso, ~100 km from Luosto.
// Counts in comments are Sembo properties in that polygon.
const HOTEL_RESORTS = [
  { label: 'Rovaniemi', value: 'Rovaniemi, Finland' },            // 81
  { label: 'Levi', value: 'Levi, Finland' },                      // 33
  { label: 'Ylläs (Äkäslompolo)', value: 'Äkäslompolo, Finland' },// 13
  { label: 'Saariselkä', value: 'Saariselkä, Finland' },          // 30
  { label: 'Ruka (Kuusamo)', value: 'Ruka, Finland' },            // 38
  { label: 'Pyhä', value: 'Pyhä, Finland' },                      // 11
  { label: 'Luosto', value: 'Luosto, Finland' },                  // 3
  { label: 'Ivalo', value: 'Ivalo, Finland' },                    // 5
  { label: 'Kilpisjärvi', value: 'Kilpisjärvi, Finland' },        // 4
]
// Every Lapland municipality, so no town is missing from the menu (Vesa
// 2026-07-24). Proper nouns render identically in all 12 locales.
const HOTEL_MUNICIPALITIES = [
  'Inari', 'Sodankylä', 'Kittilä', 'Kolari', 'Muonio', 'Enontekiö', 'Utsjoki',
  'Kemijärvi', 'Salla', 'Posio', 'Ranua', 'Pello', 'Ylitornio', 'Tornio',
  'Kemi', 'Keminmaa', 'Tervola', 'Simo', 'Savukoski', 'Pelkosenniemi',
].map((name) => ({ label: name, value: `${name}, Finland` }))

// EconomyBookings pickup points with real inventory (hascontracts=true),
// harvested 2026-07-24 from EB's own /gapi searchLocations index — the same
// source the redirect Worker's EB_PLC map was verified against (2026-05-02).
// plc = EB MergedLocationId. The widget builds the /cars/results deep link
// itself and sends it via dest=, so the Worker's Travelpayouts click wrap
// keeps tracking identical to the IATA path while covering town offices the
// Worker's 4-airport map does not. Enontekiö (ENF) has no EB office → omitted.
const CAR_AIRPORTS = [
  { label: 'Rovaniemi (RVN)', plc: '61909' },
  { label: 'Kittilä (KTT)', plc: '61893' },
  { label: 'Ivalo (IVL)', plc: '61888' },
  { label: 'Kemi-Tornio (KEM)', plc: '61892' },
  { label: 'Kuusamo (KAO)', plc: '61897' },
  { label: 'Helsinki-Vantaa (HEL)', plc: '61885' },
]
const CAR_TOWNS = [
  { label: 'Rovaniemi', plc: '61911' },
  { label: 'Levi (Sirkka)', plc: '172926' },
  { label: 'Kittilä', plc: '440633' },
  { label: 'Saariselkä', plc: '371231' },
  { label: 'Ivalo', plc: '402167' },
  { label: 'Sodankylä', plc: '261587' },
  { label: 'Muonio', plc: '261574' },
  { label: 'Kemi', plc: '261566' },
  { label: 'Kemijärvi', plc: '261567' },
  { label: 'Tornio', plc: '172953' },
  { label: 'Pello', plc: '261578' },
]

// Flights tab (Trip.com): Helsinki → Lapland airport. Trip.com handles the
// fare comparison and booking. SID: snake_case, no domain prefix. Labels are
// proper nouns only, so they read correctly in all 12 locales.
const FLIGHT_DESTINATIONS = [
  { label: 'Rovaniemi (RVN)', iata: 'rvn', sid: 'hero_widget_flight_hel_rvn' },
  { label: 'Kittilä (KTT), Levi & Ylläs', iata: 'ktt', sid: 'hero_widget_flight_hel_ktt' },
  { label: 'Ivalo (IVL), Saariselkä & Inari', iata: 'ivl', sid: 'hero_widget_flight_hel_ivl' },
  { label: 'Enontekiö (ENF)', iata: 'enf', sid: 'hero_widget_flight_hel_enf' },
  { label: 'Kemi-Tornio (KEM)', iata: 'kem', sid: 'hero_widget_flight_hel_kem' },
]

// Hotels search → go.laplandvibes.com/go/hotels. The locale param makes the
// Worker route fi → Sembo and everything else → Trip.com, which is also what
// the provider chip under the search button claims.
function buildHotelsUrl(dest: string, checkIn: string, checkOut: string, adults: number, lang: Lang): string {
  return buildAffiliateUrl({
    partner: 'hotels',
    sid: 'hero_widget_hotels',
    destination: dest,
    query: { checkin: checkIn, checkout: checkOut, adults },
    lang,
  })
}

// EconomyBookings results-page deep link (plc/dlc = EB location id, date split
// py/pm/pd) — mirrors the Worker's own builder so the visitor lands on a
// results page with cars listed, never the empty EB front page.
function buildEbResultsUrl(plc: string, pickUpDate: string, dropOffDate: string, lang: Lang): string {
  const site = lang === 'fi' ? 'fi' : 'en'
  const [py, pm, pd] = pickUpDate.split('-')
  const [dy, dm, dd] = dropOffDate.split('-')
  const u = new URL(`https://www.economybookings.com/${site}/cars/results`)
  u.searchParams.set('plc', plc)
  u.searchParams.set('dlc', plc)
  u.searchParams.set('cr', '73')
  u.searchParams.set('crcy', 'EUR')
  u.searchParams.set('lang', site)
  u.searchParams.set('age', '35')
  u.searchParams.set('pcntry', 'FI')
  u.searchParams.set('pt', '1000')
  u.searchParams.set('dt', '1000')
  u.searchParams.set('py', py); u.searchParams.set('pm', pm); u.searchParams.set('pd', pd)
  u.searchParams.set('dy', dy); u.searchParams.set('dm', dm); u.searchParams.set('dd', dd)
  return u.toString()
}

function getDefaults() {
  const start = new Date()
  start.setDate(start.getDate() + 14)
  const end = new Date(start)
  end.setDate(end.getDate() + 4)
  return {
    checkIn: start.toISOString().split('T')[0],
    checkOut: end.toISOString().split('T')[0],
  }
}

type Tab = 'hotels' | 'flights' | 'cars'

interface Props {
  defaultTab?: Tab
  className?: string
}


const loaders: Record<Lang, () => Promise<{ default: Copy }>> = {
  'en': () => import('./TravelSearchWidget.copy.en'),
  'fi': () => import('./TravelSearchWidget.copy.fi'),
  'de': () => import('./TravelSearchWidget.copy.de'),
  'ja': () => import('./TravelSearchWidget.copy.ja'),
  'es': () => import('./TravelSearchWidget.copy.es'),
  'pt-BR': () => import('./TravelSearchWidget.copy.ptBR'),
  'zh-CN': () => import('./TravelSearchWidget.copy.zhCN'),
  'ko': () => import('./TravelSearchWidget.copy.ko'),
  'fr': () => import('./TravelSearchWidget.copy.fr'),
  'it': () => import('./TravelSearchWidget.copy.it'),
  'nl': () => import('./TravelSearchWidget.copy.nl'),
  'sv': () => import('./TravelSearchWidget.copy.sv'),
}

const cache: Partial<Record<Lang, Copy>> = {}

export default function TravelSearchWidget({ defaultTab = 'hotels', className = '' }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>(defaultTab)
  const defaults = getDefaults()
  const lang = useLang()
  const wc = useCopy<Copy>(enCopy, loaders, cache)

  const [hotelDest, setHotelDest] = useState(HOTEL_RESORTS[0].value)
  const [hotelCheckIn, setHotelCheckIn] = useState(defaults.checkIn)
  const [hotelCheckOut, setHotelCheckOut] = useState(defaults.checkOut)
  const [hotelGuests, setHotelGuests] = useState(2)

  const [flightDest, setFlightDest] = useState(FLIGHT_DESTINATIONS[0].iata)
  const [flightDepart, setFlightDepart] = useState(defaults.checkIn)
  const [flightReturn, setFlightReturn] = useState(defaults.checkOut)

  const [carLocation, setCarLocation] = useState(CAR_AIRPORTS[0].plc)
  const [carPickUp, setCarPickUp] = useState(defaults.checkIn)
  const [carDropOff, setCarDropOff] = useState(defaults.checkOut)

  const handleSearch = () => {
    let url = ''
    let partner = ''
    let type = ''
    if (activeTab === 'hotels') {
      url = buildHotelsUrl(hotelDest, hotelCheckIn, hotelCheckOut, hotelGuests, lang)
      partner = 'lodging'
      type = 'accommodation'
    } else if (activeTab === 'flights') {
      const opt = FLIGHT_DESTINATIONS.find((f) => f.iata === flightDest) ?? FLIGHT_DESTINATIONS[0]
      url = buildTripFlightUrl({
        from: 'hel',
        to: opt.iata,
        sid: opt.sid,
        depart: flightDepart,
        returnDate: flightReturn,
        triptype: 'rt',
        lang,
      })
      partner = 'tripcom'
      type = `flight:hel_${opt.iata}`
    } else {
      const ebUrl = buildEbResultsUrl(carLocation, carPickUp, carDropOff, lang)
      url = buildAffiliateUrl({
        partner: 'cars',
        sid: 'hero_widget_cars',
        query: { dest: ebUrl },
        lang,
      })
      partner = 'economybookings'
      type = 'car-rental'
    }
    trackAffiliateClick(partner, type, url)
    // `noopener` only, the redirect Worker reads Referer to attribute clicks per-domain;
    // `noreferrer` would strip that and break sub_site tracking.
    window.open(url, '_blank', 'noopener')
  }

  const tabs: { key: Tab; label: string; icon: typeof Hotel; provider: string }[] = [
    // Hotels brand follows the Worker's locale routing: fi → Sembo, rest → Trip.com.
    { key: 'hotels', label: wc.tabs.hotels, icon: Hotel, provider: lang === 'fi' ? 'Sembo' : 'Trip.com' },
    { key: 'flights', label: wc.tabs.flights, icon: Plane, provider: 'Trip.com' },
    { key: 'cars', label: wc.tabs.cars, icon: Car, provider: 'EconomyBookings' },
  ]

  const selectCls = 'w-full bg-white/[0.07] text-white rounded-xl pl-12 pr-10 py-4 text-[15px] border border-white/25 hover:border-vibe-pink/50 focus:border-vibe-pink/70 outline-none appearance-none cursor-pointer transition-colors'
  // appearance-none hides the OS arrow, so every <select> draws its own chevron
  const chevronCls = 'absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60 pointer-events-none'
  const dateCls = 'w-full bg-white/[0.07] text-white rounded-xl pl-12 pr-3 py-4 text-[15px] border border-white/25 hover:border-vibe-pink/50 focus:border-vibe-pink/70 outline-none [color-scheme:dark] transition-colors'
  const iconCls = 'absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-vibe-pink pointer-events-none'
  const labelCls = 'block text-[11px] uppercase tracking-[0.18em] text-white/85 font-semibold mb-2'
  const optStyle = { background: '#0a1628', color: '#f8fafc' }

  return (
    <div className={`relative rounded-3xl overflow-hidden shadow-2xl shadow-black/40 ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0f1d32] to-[#0a1628]" />
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-vibe-pink opacity-60" />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-vibe-pink opacity-[0.06] blur-[80px] rounded-full" />

      <div className="relative z-10">
        <div className="flex">
          {tabs.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex-1 min-w-0 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2.5 px-1 py-3 sm:py-6 text-[11px] sm:text-[16px] font-bold tracking-wide uppercase leading-tight text-center transition-all border-b-2 ${
                activeTab === key
                  ? 'bg-vibe-pink/20 text-white border-vibe-pink'
                  : 'text-white/85 hover:text-white hover:bg-white/10 border-transparent'
              }`}
            >
              <Icon className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              <span>{label}</span>
            </button>
          ))}
        </div>

        <div className="h-px bg-white/10" />

        <div className="p-5 sm:p-8">
          {activeTab === 'hotels' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>{wc.destination}</label>
                <div className="relative">
                  <MapPin className={iconCls} />
                  <select aria-label={wc.destination} value={hotelDest} onChange={(e) => setHotelDest(e.target.value)} className={selectCls}>
                    <option value={HOTEL_RESORTS[0].value} style={optStyle}>{wc.destOptions.all}</option>
                    <optgroup label={wc.groups.resorts} style={optStyle}>
                      {HOTEL_RESORTS.map((d) => (
                        <option key={d.label} value={d.value} style={optStyle}>{d.label}</option>
                      ))}
                    </optgroup>
                    <optgroup label={wc.groups.municipalities} style={optStyle}>
                      {HOTEL_MUNICIPALITIES.map((d) => (
                        <option key={d.label} value={d.value} style={optStyle}>{d.label}</option>
                      ))}
                    </optgroup>
                  </select>
                  <ChevronDown className={chevronCls} aria-hidden="true" />
                </div>
              </div>
              <div>
                <label className={labelCls}>{wc.guests}</label>
                <div className="relative">
                  <Users className={iconCls} />
                  <select aria-label={wc.guests} value={hotelGuests} onChange={(e) => setHotelGuests(Number(e.target.value))} className={selectCls}>
                    {[1, 2, 3, 4, 5, 6].map(n => <option key={n} value={n} style={optStyle}>{n} {n === 1 ? wc.guestSingular : wc.guestPlural}</option>)}
                  </select>
                  <ChevronDown className={chevronCls} aria-hidden="true" />
                </div>
              </div>
              <div>
                <label className={labelCls}>{wc.checkIn}</label>
                <div className="relative">
                  <Calendar className={iconCls} />
                  <input aria-label={wc.checkIn} type="date" value={hotelCheckIn} onChange={(e) => setHotelCheckIn(e.target.value)} className={dateCls} />
                </div>
              </div>
              <div>
                <label className={labelCls}>{wc.checkOut}</label>
                <div className="relative">
                  <Calendar className={iconCls} />
                  <input aria-label={wc.checkOut} type="date" value={hotelCheckOut} onChange={(e) => setHotelCheckOut(e.target.value)} className={dateCls} />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'flights' && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className={labelCls}>{wc.helsinkiTo}</label>
                <div className="relative">
                  <Plane className={iconCls} />
                  <select aria-label={wc.helsinkiTo} value={flightDest} onChange={(e) => setFlightDest(e.target.value)} className={selectCls}>
                    {FLIGHT_DESTINATIONS.map((d) => (
                      <option key={d.iata} value={d.iata} style={optStyle}>{d.label}</option>
                    ))}
                  </select>
                  <ChevronDown className={chevronCls} aria-hidden="true" />
                </div>
              </div>
              <div>
                <label className={labelCls}>{wc.depart}</label>
                <div className="relative">
                  <Calendar className={iconCls} />
                  <input aria-label={wc.depart} type="date" value={flightDepart} onChange={(e) => setFlightDepart(e.target.value)} className={dateCls} />
                </div>
              </div>
              <div>
                <label className={labelCls}>{wc.return}</label>
                <div className="relative">
                  <Calendar className={iconCls} />
                  <input aria-label={wc.return} type="date" value={flightReturn} onChange={(e) => setFlightReturn(e.target.value)} className={dateCls} />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'cars' && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className={labelCls}>{wc.pickUpLocation}</label>
                <div className="relative">
                  <Car className={iconCls} />
                  <select aria-label={wc.pickUpLocation} value={carLocation} onChange={(e) => setCarLocation(e.target.value)} className={selectCls}>
                    <optgroup label={wc.groups.airports} style={optStyle}>
                      {CAR_AIRPORTS.map(l => <option key={l.plc} value={l.plc} style={optStyle}>{l.label}</option>)}
                    </optgroup>
                    <optgroup label={wc.groups.towns} style={optStyle}>
                      {CAR_TOWNS.map(l => <option key={l.plc} value={l.plc} style={optStyle}>{l.label}</option>)}
                    </optgroup>
                  </select>
                  <ChevronDown className={chevronCls} aria-hidden="true" />
                </div>
              </div>
              <div>
                <label className={labelCls}>{wc.pickUpDate}</label>
                <div className="relative">
                  <Calendar className={iconCls} />
                  <input aria-label={wc.pickUpDate} type="date" value={carPickUp} onChange={(e) => setCarPickUp(e.target.value)} className={dateCls} />
                </div>
              </div>
              <div>
                <label className={labelCls}>{wc.dropOffDate}</label>
                <div className="relative">
                  <Calendar className={iconCls} />
                  <input aria-label={wc.dropOffDate} type="date" value={carDropOff} onChange={(e) => setCarDropOff(e.target.value)} className={dateCls} />
                </div>
              </div>
            </div>
          )}

          <button
            onClick={handleSearch}
            className="mt-6 w-full bg-vibe-pink hover:bg-vibe-pink/90 text-white font-bold py-4 sm:py-5 rounded-xl transition-all duration-300 text-[15px] sm:text-base uppercase tracking-wider inline-flex items-center justify-center gap-2.5 hover:shadow-xl hover:shadow-vibe-pink/30 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Search className="w-5 h-5" />
            {activeTab === 'hotels' ? wc.searchHotels : activeTab === 'flights' ? wc.searchFlights : wc.compareCars}
            <ArrowRight className="w-4 h-4" />
          </button>

          <p className="text-center text-white/65 text-xs mt-4">
            {wc.poweredBy(tabs.find(t => t.key === activeTab)?.provider || '')}
          </p>
        </div>
      </div>
    </div>
  )
}
