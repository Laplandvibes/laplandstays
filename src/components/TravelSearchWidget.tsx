import { useState } from 'react'
import { Search, MapPin, Calendar, Users, Car, Hotel, Plane, ArrowRight, ChevronDown } from 'lucide-react'
import { trackAffiliateClick } from '../lib/analytics'
import { buildAffiliateUrl } from '../lib/affiliate'
import { buildTripFlightUrl } from '../lib/tripcom'
import { useLang, type Lang } from '../i18n/useLang'
import { useCopy } from '../i18n/useCopy'
import enCopy from './TravelSearchWidget.copy.en'
import type { Copy } from './TravelSearchWidget.copy.types'


const HOTEL_DESTINATIONS = [
  // "Lapland, Finland" alone Helsinki-snaps on Hotels.com, anchor the
  // generic option to Rovaniemi (regional capital, deep inventory).
  { label: 'All of Finnish Lapland (Rovaniemi)', value: 'Rovaniemi%2C+Finland' },
  { label: 'Rovaniemi', value: 'Rovaniemi%2C+Finland' },
  { label: 'Levi', value: 'Levi%2C+Kittil%C3%A4%2C+Finland' },
  { label: 'Saariselka', value: 'Saariselk%C3%A4%2C+Finland' },
  { label: 'Yllas', value: 'Yll%C3%A4s%2C+Finland' },
  { label: 'Inari', value: 'Inari%2C+Finland' },
  { label: 'Luosto', value: 'Luosto%2C+Sodankyl%C3%A4%2C+Finland' },
  { label: 'Pyha', value: 'Pyh%C3%A4%2C+Finland' },
  { label: 'Sodankyla', value: 'Sodankyl%C3%A4%2C+Finland' },
  { label: 'Kemi', value: 'Kemi%2C+Finland' },
  { label: 'Kilpisjarvi', value: 'Kilpisj%C3%A4rvi%2C+Finland' },
  { label: 'Muonio', value: 'Muonio%2C+Finland' },
]

const CAR_LOCATIONS = [
  { label: 'Rovaniemi Airport', value: 'Rovaniemi+Airport%2C+Finland' },
  { label: 'Kittila Airport', value: 'Kittila+Airport%2C+Finland' },
  { label: 'Ivalo Airport', value: 'Ivalo+Airport%2C+Finland' },
  { label: 'Enontekio Airport', value: 'Enontekio+Airport%2C+Finland' },
  { label: 'Kemi Airport', value: 'Kemi+Airport%2C+Finland' },
]

// Flights tab (Trip.com): Helsinki → Lapland airport. Trip.com handles the
// fare comparison and booking. SID: snake_case, no domain prefix.
const FLIGHT_DESTINATIONS = [
  { label: 'Rovaniemi (RVN), gateway to all of Lapland', iata: 'rvn', sid: 'hero_widget_flight_hel_rvn' },
  { label: 'Kittilä (KTT), Levi & Ylläs', iata: 'ktt', sid: 'hero_widget_flight_hel_ktt' },
  { label: 'Ivalo (IVL), Saariselkä & Inari', iata: 'ivl', sid: 'hero_widget_flight_hel_ivl' },
  { label: 'Enontekiö (ENF), far north fells', iata: 'enf', sid: 'hero_widget_flight_hel_enf' },
  { label: 'Kemi (KEM), sea Lapland', iata: 'kem', sid: 'hero_widget_flight_hel_kem' },
]

// Hotels search → go.laplandvibes.com/go/hotels (CJ Hotels.com via Worker)
function buildHotelsComUrl(dest: string, checkIn: string, checkOut: string, adults: number): string {
  // The HOTEL_DESTINATIONS values are URL-encoded already (e.g. "Levi%2C+Kittil%C3%A4%2C+Finland"),
  // so decode before passing to URLSearchParams (which encodes again).
  const decoded = decodeURIComponent(dest.replace(/\+/g, ' '))
  return buildAffiliateUrl({
    partner: 'hotels',
    sid: 'hero_widget_hotels',
    destination: decoded,
    query: { checkin: checkIn, checkout: checkOut, adults },
  })
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
}

const cache: Partial<Record<Lang, Copy>> = {}

export default function TravelSearchWidget({ defaultTab = 'hotels', className = '' }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>(defaultTab)
  const defaults = getDefaults()
  const lang = useLang()
  const wc = useCopy<Copy>(enCopy, loaders, cache)

  const [hotelDest, setHotelDest] = useState(HOTEL_DESTINATIONS[0].value)
  const [hotelCheckIn, setHotelCheckIn] = useState(defaults.checkIn)
  const [hotelCheckOut, setHotelCheckOut] = useState(defaults.checkOut)
  const [hotelGuests, setHotelGuests] = useState(2)

  const [flightDest, setFlightDest] = useState(FLIGHT_DESTINATIONS[0].iata)
  const [flightDepart, setFlightDepart] = useState(defaults.checkIn)
  const [flightReturn, setFlightReturn] = useState(defaults.checkOut)

  const [carLocation, setCarLocation] = useState(CAR_LOCATIONS[0].value)
  const [carPickUp, setCarPickUp] = useState(defaults.checkIn)
  const [carDropOff, setCarDropOff] = useState(defaults.checkOut)

  const handleSearch = () => {
    let url = ''
    let partner = ''
    let type = ''
    if (activeTab === 'hotels') {
      url = buildHotelsComUrl(hotelDest, hotelCheckIn, hotelCheckOut, hotelGuests)
      partner = 'hotelscom'
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
      const decoded = decodeURIComponent(carLocation.replace(/\+/g, ' '))
      url = buildAffiliateUrl({
        partner: 'cars',
        sid: 'hero_widget_cars',
        query: {
          pickup_location: decoded,
          pickup_date: carPickUp,
          dropoff_date: carDropOff,
        },
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
    { key: 'hotels', label: wc.tabs.hotels, icon: Hotel, provider: 'Hotels.com' },
    { key: 'flights', label: wc.tabs.flights, icon: Plane, provider: 'Trip.com' },
    { key: 'cars', label: wc.tabs.cars, icon: Car, provider: 'EconomyBookings' },
  ]
  // Translate first destination label only, the others are place names
  const hotelDestOptions = HOTEL_DESTINATIONS.map((d, i) =>
    i === 0 ? { ...d, label: wc.destOptions.all } : d
  )

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
                    {hotelDestOptions.map((d) => (
                      <option key={d.label} value={d.value} style={optStyle}>{d.label}</option>
                    ))}
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
                    {CAR_LOCATIONS.map(l => <option key={l.value} value={l.value} style={optStyle}>{l.label}</option>)}
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
