import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink, Snowflake, Sparkles, Building2, Megaphone } from 'lucide-react'
import SEO from '../components/SEO'
import { localizeArticle } from '../lib/jsonLd'
import AffiliateDisclosure from '../components/AffiliateDisclosure'
import Newsletter from '../components/Newsletter'
import PageBreadcrumb from '../components/PageBreadcrumb'
import { buildLomarengasUrl, buildAffiliateUrl, propertyLodgingLink } from '../lib/affiliate'
import { PROPERTY_BOOKING } from '../data/propertyBooking'
import { trackAffiliateClick } from '../lib/analytics'
import { useLang, useLocalePath } from '../i18n/useLang'

/**
 * Iglumajoitus Lapissa — FINNISH-ONLY comparison page (/fi/iglumajoitus).
 *
 * Suomenkielinen vertailusivu, EI lokalisointikerrosta: reitti on olemassa vain
 * /fi/-puolella (App.tsx), prerender rajattu routes.jsonin "locales": ["fi"]
 * -kentällä ja SEO-komponentti saa hreflangLangs={FI_ONLY}, jottei sivu mainosta
 * yhtätoista aavevarianttia joita ei ole olemassa.
 *
 * Faktat verifioitu kohteiden OMILTA sivuilta 15.8.2026:
 *  - kakslauttanen.fi/prices: "Winter accommodation including breakfast & dinner
 *    from €501/night", "Flexible Autumn Rate from €278/night"
 *  - leviniglut.fi: 10 km Levin kylästä, 340 m korkeudessa, huoneluokat
 *    Superior / Prime Superior / Suite; "opens again on 1st of September 2026"
 *  - arcticsnowhotel.fi(/lumihotelli): lasi-iglut syyskuusta; lumihotelli
 *    15.12.–31.3., sisälämpötila 0…-5 °C, makuupussit talossa, ei suositella
 *    alle 5-v; päiväkäynti 35 €/aikuinen, 17 €/lapsi (2–12 v)
 *  - stararctichotel.com: 15 Aurora Glass Cabin -huonetta, 20 m², lämmitetty
 *    pohjoiseen suunnattu lasikatto
 *  - arcticlandadventure.com: 4 lasi-iglua + 6 hirsimökkiä Saanan juurella
 *  - tundrea.com: 3 kaksikerroksista iglutaloa 2–4 hengelle, oma sauna ja keittiö
 *
 * Kilpisjärven kohteilla EI ole kumppani-id:itä (propertyBooking.ts) eikä
 * Lomarengas-listauksia — kortti on tarkoituksella ilman affiliate-CTA:ta.
 * Älä keksi id:tä tyhjän tilalle (ks. data/propertyBooking.ts 🔴-sääntö).
 */

const FI_ONLY = ['fi']

const PAGE_URL = 'https://laplandstays.com/fi/iglumajoitus/'

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Iglumajoitus Lapissa: lasi-iglu, lumi-iglu vai igluhotelli',
  description:
    'Vertailussa Lapin iglumajoitus: miten lasi-iglu, lumi-iglu ja igluhotelli eroavat, missä iglut sijaitsevat ja milloin yö kannattaa varata.',
  author: {
    '@type': 'Person',
    name: 'Vesa Pesola',
    jobTitle: 'Editor / operator',
    worksFor: { '@type': 'Organization', name: 'Lapeso Oy' },
    url: 'https://laplandstays.com/editorial-policy',
  },
  publisher: { '@type': 'Organization', name: 'LaplandStays' },
  datePublished: '2026-08-15',
  dateModified: '2026-08-15',
  mainEntityOfPage: PAGE_URL,
  image: 'https://laplandstays.com/og-default.jpg',
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Etusivu', item: 'https://laplandstays.com/fi/' },
    { '@type': 'ListItem', position: 2, name: 'Iglumajoitus Lapissa', item: PAGE_URL },
  ],
}

const seo = {
  title: 'Iglumajoitus Lapissa: lasi-iglu, lumi-iglu vai igluhotelli | LaplandStays',
  description:
    'Iglumajoitus Lapissa vertailussa: lasi-iglun, lumi-iglun ja igluhotellin erot, kohteet Levillä, Saariselällä, Rovaniemellä ja Kilpisjärvellä sekä vinkit siihen, milloin iglu-yö kannattaa varata.',
}

// ---------- vertailukortit ----------

const TYPE_CARDS = [
  {
    icon: Sparkles,
    title: 'Lasi-iglu',
    tagline: 'Lämmin huone, lasikatto',
    body:
      'Lämmitetty huone, jonka katto tai koko yläosa on lasia: revontulia ja tähtitaivasta katsotaan sängystä peiton alta. Varustelu vaihtelee pienestä makuukopista sviittiin, jossa on oma kylpyhuone, keittonurkka ja terassi. Tämä on se iglutyyppi, jota useimmat hakevat — ja myös kallein.',
    forWho: 'Sopii: pariskunnille ja revontulimatkalle, kun mukavuudesta ei haluta tinkiä.',
  },
  {
    icon: Snowflake,
    title: 'Lumi-iglu ja lumihotelli',
    tagline: 'Yö lumen sisällä',
    body:
      'Huone on veistetty lumesta ja jäästä, ja se rakennetaan joka talvi uudelleen. Esimerkiksi Rovaniemen Arctic SnowHotelissa sisälämpötila pysyy 0 ja -5 asteen välissä ja talo antaa ääriolosuhteisiin suunnitellun makuupussin. Kokemus on ainutlaatuinen, mutta useimmille yksi yö riittää — eikä yöpymistä suositella alle 5-vuotiaille.',
    forWho: 'Sopii: elämyksen keräilijöille, jotka haluavat tarinan eivätkä sviittiä.',
  },
  {
    icon: Building2,
    title: 'Igluhotelli eli iglukylä',
    tagline: 'Iglut + palvelut ympärillä',
    body:
      'Kokonainen lomakylä iglujen ympärillä: vastaanotto, ravintola, sauna ja safarit lähtevät samasta pihasta. Kakslauttanen ja Levin Iglut ovat tätä mallia, ja Arctic SnowHotel yhdistää molemmat maailmat — samalta tontilta saa sekä lasi-iglun että lumihuoneen. Maksat paketista, et vain katosta.',
    forWho: 'Sopii: ensikertalaisille ja perheille, joille valmis ohjelma on helpotus.',
  },
]

// ---------- vertailutaulukko ----------

const TABLE_ROWS: { label: string; glass: string; snow: string; village: string }[] = [
  {
    label: 'Lämpötila sisällä',
    glass: 'Normaali huonelämpö',
    snow: '0…-5 °C (Arctic SnowHotel)',
    village: 'Iglutyypin mukaan',
  },
  {
    label: 'Mitä sängystä näkyy',
    glass: 'Taivas: revontulet ja tähdet',
    snow: 'Lumiveistokset ja jäävalot',
    village: 'Riippuu huoneesta',
  },
  {
    label: 'Sopiva kesto',
    glass: '1–3 yötä',
    snow: '1 yö',
    village: 'Koko loman tukikohdaksi',
  },
  {
    label: 'Kausi',
    glass: 'Tyypillisesti syyskuusta kevääseen',
    snow: 'Arctic SnowHotel: 15.12.–31.3.',
    village: 'Kohteen mukaan',
  },
  {
    label: 'Hintataso',
    glass: 'Korkein — ks. Kakslauttasen esimerkit alla',
    snow: 'Yleensä lasi-iglua edullisempi',
    village: 'Laaja haitari huonetyypin mukaan',
  },
]

// ---------- sijainnit ----------

type OperatorLink = { name: string; note: string; sid: string; bookingKey?: 'kakslauttanen' | 'levinIglut' | 'starArctic' | 'arcticSnowHotel' }

const LOCATIONS: {
  name: string
  tagline: string
  body: string
  operators: OperatorLink[]
  extraNote?: string
}[] = [
  {
    name: 'Levi',
    tagline: 'Iglut tunturin rinteessä, kylä kympin päässä',
    body:
      'Levin Iglut sijaitsee noin 10 kilometrin päässä Levin kylästä, 340 metrin korkeudessa — valosaastetta on vähemmän kuin keskustassa, ja rinteet ja ravintolat ovat silti lyhyen ajomatkan päässä. Huoneluokkia on kolme (Superior, Prime Superior ja Suite), ja kausi alkaa syyskuun alussa.',
    operators: [
      { name: 'Levin Iglut', note: 'lasi-iglut, 10 km Levin kylästä', sid: 'iglu_levin_iglut', bookingKey: 'levinIglut' },
    ],
  },
  {
    name: 'Saariselkä',
    tagline: 'Iglukylien klassikko',
    body:
      'Saariselän suunnalla on Lapin tunnetuin iglukeskittymä. Kakslauttanen Arctic Resort on rakentanut kokonaisen kylän lasi- ja kelo-iglujen ympärille, ja resortin omalla hintasivulla talvimajoitus aamiaisella ja illallisella alkaa 501 eurosta per yö — syksyn joustohinta alkaa 278 eurosta (tarkistettu elokuussa 2026). Kylän keskustassa Star Arctic Hotelilla on 15 Aurora Glass Cabin -huonetta, joissa on 20 neliötä ja pohjoiseen suunnattu lämmitetty lasikatto.',
    operators: [
      { name: 'Kakslauttanen Arctic Resort', note: 'iglukylä, hintaesimerkit yllä', sid: 'iglu_kakslauttanen', bookingKey: 'kakslauttanen' },
      { name: 'Star Arctic Hotel', note: '15 lasikattoista Aurora Glass Cabinia', sid: 'iglu_star_arctic', bookingKey: 'starArctic' },
    ],
  },
  {
    name: 'Rovaniemi',
    tagline: 'Lasi-iglu ja lumihotelli samasta pihasta',
    body:
      'Rovaniemen Lehtoahossa Arctic SnowHotel & Glass Igloos tarjoaa molemmat vertailun ääripäät: lämmitetyt lasi-iglut syyskuusta alkaen ja joka talvi uudelleen veistettävän lumihotellin 15.12.–31.3. Jos et halua yöpyä lumessa, lumihotelliin pääsee myös päiväkäynnille (35 € aikuiset, 17 € lapset 2–12 v).',
    operators: [
      { name: 'Arctic SnowHotel & Glass Igloos', note: 'lasi-iglut + lumihotelli', sid: 'iglu_snowhotel', bookingKey: 'arcticSnowHotel' },
    ],
  },
  {
    name: 'Kilpisjärvi',
    tagline: 'Iglut Saanan juurella',
    body:
      'Käsivarren suurtuntureilla iglut ovat pieniä perhekohteita, eivät resortteja. Arctic Land Adventurella on neljä lasi-iglua ja kuusi hirsimökkiä Saanan juurella, ja Tundrealla kolme kaksikerroksista iglutaloa 2–4 hengelle omalla saunalla ja keittiöllä. Molemmat varataan suoraan kohteen omilta sivuilta — siksi tässä kortissa ei ole varauslinkkiä.',
    operators: [],
    extraNote:
      'Kilpisjärvelle ajaa Kittilän ja Rovaniemen kentiltä useita tunteja, joten iglu-yö kannattaa kytkeä pidempään Käsivarren-reissuun.',
  },
]

// ---------- milloin varata ----------

const BOOKING_ROWS = [
  {
    period: 'Syys–marraskuu',
    body: 'Revontulikausi alkaa jo syyskuussa, kun iglujen kaudet aukeavat (Levin Iglut ja Arctic SnowHotelin lasi-iglut syyskuun alusta). Kakslauttasen omat alkaen-hinnat kertovat suunnan: syksyllä 278 €/yö, talvella 501 €/yö puolihoidolla.',
  },
  {
    period: 'Joulu ja uusivuosi',
    body: 'Sesongin huippu. Varaa iglu-yö niin aikaisin kuin pystyt — ja jos joulun viikot ovat jo täynnä tai hinnat karkaavat, tammikuu tarjoaa samat pimeät yöt pienemmällä tungoksella.',
  },
  {
    period: 'Tammi–maaliskuu',
    body: 'Pisin lumivarma jakso: lumihotellit ovat auki (Arctic SnowHotel 15.12.–31.3.) ja revontuliyöt jatkuvat. Maaliskuussa päivät pitenevät, mikä helpottaa safarien yhdistämistä iglu-yöhön.',
  },
  {
    period: 'Huhtikuusta eteenpäin',
    body: 'Lumirakenteet sulavat ja moni iglukohde sulkee kautensa kevääseen. Kesän valoisina öinä revontulia ei näy — jos matkasi osuu kesään, lasikaton sijaan kannattaa katsoa järvenrantamökkiä.',
  },
]

export default function Igloos() {
  const lang = useLang()
  const to = useLocalePath()

  const mokkiHref = buildLomarengasUrl('lapland', 'iglu_mokki_lappi', lang)
  const ctaMokkiHref = buildLomarengasUrl('lapland', 'iglu_cta_mokki', lang)
  const hotelsHref = buildAffiliateUrl({ partner: 'hotels', sid: 'iglu_hotels_saariselka', destination: 'Saariselkä, Finland', lang })

  const operatorHref = (op: OperatorLink): string | null => {
    if (!op.bookingKey) return null
    const b = PROPERTY_BOOKING[op.bookingKey]
    return b ? propertyLodgingLink(b, op.sid, lang) : null
  }

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        canonicalPath="/iglumajoitus"
        ogImage="https://laplandstays.com/og-default.jpg"
        keywords={['iglumajoitus', 'iglumajoitus lappi', 'lasi-iglu', 'lumi-iglu', 'igluhotelli', 'iglu levi', 'iglu saariselkä', 'iglu rovaniemi', 'iglu kilpisjärvi']}
        jsonLd={[localizeArticle(articleJsonLd, seo), breadcrumbJsonLd]}
        hreflangLangs={FI_ONLY}
      />

      {/* Hero: CSS-gradientti (ei kuvaa — uusi sivu, ei kierrätetä toisen sivun heroa) */}
      <section className="relative overflow-hidden bg-night text-white">
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-[#0d2818] via-night to-[#1e1b4b]" />
        <div aria-hidden="true" className="absolute -top-24 left-1/4 w-[36rem] h-[36rem] rounded-full bg-aurora-green/15 blur-3xl" />
        <div aria-hidden="true" className="absolute -bottom-32 right-1/5 w-[30rem] h-[30rem] rounded-full bg-pink/10 blur-3xl" />
        <div className="relative min-h-[62svh] flex items-center justify-center px-4 sm:px-6 pt-24 sm:pt-28 pb-14 sm:pb-16">
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <p className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] uppercase tracking-widest text-white/85 bg-night/45 border border-white/25 rounded-full px-3 py-1 mb-5 max-w-full">
              <Megaphone className="w-3 h-3 shrink-0" aria-hidden="true" />
              <span className="min-w-0">Sisältää mainoslinkkejä</span>
            </p>
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl tracking-wide mb-5 [text-shadow:0_2px_18px_rgba(0,0,0,0.75)]">
              Iglumajoitus Lapissa
            </h1>
            <p className="text-white/85 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-6 [text-shadow:0_1px_10px_rgba(0,0,0,0.8)]">
              Lasi-iglu, lumi-iglu vai kokonainen iglukylä? Tässä vertailussa käydään läpi, miten kolme iglutyyppiä eroavat, missä iglut oikeasti sijaitsevat ja milloin yö kannattaa varata.
            </p>
            <AffiliateDisclosure variant="compact" className="text-white/70 [&>svg]:text-white/70 [text-shadow:0_1px_8px_rgba(0,0,0,0.8)]" />
          </div>
        </div>
      </section>

      <PageBreadcrumb />

      {/* Kolme iglutyyppiä */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3">Vertailu</p>
          <h2 className="font-heading text-4xl sm:text-5xl text-night tracking-wide mb-6">Kolme tapaa nukkua iglussa</h2>
          <p className="text-charcoal/70 text-lg leading-relaxed mb-10 max-w-3xl">
            Sana "iglu" kattaa Lapissa kolme aika erilaista yötä. Ennen kuin vertailet hintoja, päätä kumpaa olet ostamassa: lämmintä lasikattoa, yötä lumen sisällä vai valmista lomakylää.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TYPE_CARDS.map((card) => {
              const Icon = card.icon
              return (
                <div key={card.title} className="flex flex-col bg-gradient-to-b from-pink/5 to-white border border-pink/10 rounded-2xl p-6">
                  <div className="w-11 h-11 rounded-xl bg-pink/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-pink" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-2xl text-night tracking-wide mb-1">{card.title}</h3>
                  <p className="text-pink text-xs font-semibold uppercase tracking-widest mb-3">{card.tagline}</p>
                  <p className="text-charcoal/75 text-[15px] leading-relaxed mb-4">{card.body}</p>
                  <p className="text-charcoal/60 text-[13px] italic leading-relaxed mt-auto">{card.forWho}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Vertailutaulukko */}
      <section className="py-14 sm:py-16 px-4 sm:px-6 bg-gradient-to-b from-white to-pink/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-3xl sm:text-4xl text-night tracking-wide mb-6">Erot yhdellä silmäyksellä</h2>
          <div className="overflow-x-auto rounded-2xl border border-pink/10 bg-white">
            <table className="w-full min-w-[640px] text-left text-[14px]">
              <thead>
                <tr className="border-b border-pink/10">
                  <th scope="col" className="p-4 text-charcoal/60 font-semibold uppercase tracking-wider text-xs"></th>
                  <th scope="col" className="p-4 font-heading text-lg text-night tracking-wide">Lasi-iglu</th>
                  <th scope="col" className="p-4 font-heading text-lg text-night tracking-wide">Lumi-iglu</th>
                  <th scope="col" className="p-4 font-heading text-lg text-night tracking-wide">Igluhotelli</th>
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map((row) => (
                  <tr key={row.label} className="border-b border-gray-100 last:border-b-0 align-top">
                    <th scope="row" className="p-4 text-charcoal/60 font-semibold text-[13px] whitespace-nowrap">{row.label}</th>
                    <td className="p-4 text-charcoal/80">{row.glass}</td>
                    <td className="p-4 text-charcoal/80">{row.snow}</td>
                    <td className="p-4 text-charcoal/80">{row.village}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-charcoal/55 text-[13px] leading-relaxed mt-4 max-w-3xl">
            Lämpötila-, kausi- ja hintatiedot on tarkistettu kohteiden omilta sivuilta elokuussa 2026. Iglukohteet eivät pääsääntöisesti julkaise kiinteitä hinnastoja, vaan yökohtainen hinta näkyy varauskalenterista.
          </p>
        </div>
      </section>

      {/* Sijainnit */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3">Missä iglut ovat</p>
          <h2 className="font-heading text-4xl sm:text-5xl text-night tracking-wide mb-6">Levi, Saariselkä, Rovaniemi ja Kilpisjärvi</h2>
          <p className="text-charcoal/70 text-lg leading-relaxed mb-10 max-w-3xl">
            Iglut eivät ole hiihtokeskusten keskustoissa vaan niiden laidoilla, jossa taivas on pimeä. Nämä neljä suuntaa kattavat valtaosan Lapin iglumajoituksesta.
          </p>
          <div className="space-y-5">
            {LOCATIONS.map((loc) => (
              <div key={loc.name} className="bg-gradient-to-r from-pink/5 to-white border border-pink/10 rounded-2xl p-6 sm:p-7">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
                  <h3 className="font-heading text-3xl text-night tracking-wide">{loc.name}</h3>
                  <p className="text-pink text-sm font-semibold uppercase tracking-widest">{loc.tagline}</p>
                </div>
                <p className="text-charcoal/80 text-[15px] leading-relaxed mb-4 max-w-4xl">{loc.body}</p>
                {loc.extraNote && (
                  <p className="text-charcoal/60 text-[13px] italic leading-relaxed mb-4 max-w-3xl">{loc.extraNote}</p>
                )}
                {loc.operators.length > 0 && (
                  <div className="flex flex-wrap gap-2.5">
                    {loc.operators.map((op) => {
                      const href = operatorHref(op)
                      if (!href) return null
                      return (
                        <a
                          key={op.sid}
                          href={href}
                          target="_blank"
                          rel="sponsored nofollow noopener"
                          onClick={() => trackAffiliateClick('lodging', op.sid, href)}
                          className="inline-flex max-w-full items-center gap-1.5 text-sm px-4 py-2 rounded-full bg-pink/10 text-pink font-semibold hover:bg-pink hover:text-white transition-colors"
                        >
                          <span className="truncate">{op.name} · hinnat ja vapaat yöt</span>
                          <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        </a>
                      )
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="mt-8">
            <a
              href={hotelsHref}
              target="_blank"
              rel="sponsored nofollow noopener"
              onClick={() => trackAffiliateClick('lodging', 'iglu_hotels_saariselka', hotelsHref)}
              className="inline-flex items-center gap-2 text-sm text-charcoal/70 hover:text-pink transition-colors underline underline-offset-4"
            >
              Vertaile Saariselän majoitushintoja kumppanihaussa
              <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            </a>
          </p>
        </div>
      </section>

      {/* Lomarengas: iglu-yö + mökkiviikko */}
      <section className="py-14 sm:py-16 px-4 sm:px-6 bg-gradient-to-b from-white to-pink/5">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-pink/15 rounded-2xl p-6 sm:p-8 shadow-[0_10px_40px_rgba(15,23,42,0.06)]">
            <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3">Näin useimmat sen tekevät</p>
            <h2 className="font-heading text-3xl sm:text-4xl text-night tracking-wide mb-4">Iglu-yö + mökkiviikko</h2>
            <img
              src="/images/partners/lomarengas.png"
              alt="Lomarengas"
              width={472}
              height={150}
              loading="lazy"
              decoding="async"
              className="h-9 sm:h-11 w-auto mb-4"
            />
            <p className="text-charcoal/80 text-[15px] leading-relaxed mb-4">
              Iglu hinnoitellaan elämyksenä, ei viikkomajoituksena. Siksi toimivin Lapin-loma on usein yksi tai kaksi yötä iglussa ja loput mökissä saman alueen tuntumassa: mökkiin mahtuu koko porukka, ja samalla rahalla saa oman saunan ja keittiön koko viikoksi. Lomarenkaan Lapin mökkihausta näet kohteiden oikeat kuvat, sijainnit ja viikkohinnat.
            </p>
            <p className="text-charcoal/60 text-[13px] leading-relaxed mb-6">
              Linkki vie lomarengas.fi-sivustolle, jossa haku, hinnat ja varaus hoituvat Lomarenkaan kautta. Jos varaat linkin kautta, LaplandStays saa kiinteän provision ilman lisäkustannuksia sinulle.
            </p>
            <a
              href={mokkiHref}
              target="_blank"
              rel="sponsored nofollow noopener"
              onClick={() => trackAffiliateClick('lomarengas', 'iglu_mokki_lappi', mokkiHref)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-pink hover:bg-pink/90 text-white font-semibold py-3.5 px-6 rounded-xl transition-colors text-sm uppercase tracking-wider"
            >
              Selaa Lapin mökkejä
              <ExternalLink className="w-4 h-4 shrink-0" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* Milloin varata */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3">Ajoitus</p>
          <h2 className="font-heading text-4xl sm:text-5xl text-night tracking-wide mb-6">Milloin iglu-yö kannattaa varata</h2>
          <p className="text-charcoal/70 text-lg leading-relaxed mb-8">
            Iglukausi seuraa pimeyttä, ei hiihtolomia. Nyrkkisääntö: mitä pimeämpi yö, sitä kovempi kysyntä lasikatoille.
          </p>
          <div className="space-y-3 text-[15px]">
            {BOOKING_ROWS.map((s) => (
              <div key={s.period} className="flex flex-wrap items-baseline gap-x-3 gap-y-1 p-3 rounded-lg bg-gray-50 border border-gray-100">
                <span className="font-heading text-base text-pink shrink-0 w-40 sm:w-44">{s.period}</span>
                <span className="text-charcoal/75 text-[14px] leading-snug min-w-0 basis-full sm:basis-auto sm:flex-1">{s.body}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loppu-CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-night text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-4xl sm:text-5xl tracking-wide mb-4">Rakenna loma iglun ympärille</h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            Valitse ensin iglutyyppi ja alue, varaa iglu-yö kohteen kalenterista — ja hae loppuviikon tukikohta Lapin mökkihausta.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
            <a
              href={ctaMokkiHref}
              target="_blank"
              rel="sponsored nofollow noopener"
              onClick={() => trackAffiliateClick('lomarengas', 'iglu_cta_mokki', ctaMokkiHref)}
              className="bg-pink hover:bg-pink/90 text-white font-semibold py-4 px-6 sm:px-8 rounded-xl transition-colors text-sm uppercase tracking-wider inline-flex items-center justify-center gap-2"
            >
              Selaa Lapin mökkejä
              <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
            </a>
            <Link
              to={to('/when-to-go')}
              className="border border-white/30 hover:border-pink/60 text-white hover:text-pink font-semibold py-4 px-6 sm:px-8 rounded-xl transition-colors text-sm uppercase tracking-wider text-center"
            >
              Milloin Lappiin?
            </Link>
          </div>
          <p className="mt-6">
            <span className="inline-flex items-center bg-white rounded-lg px-3.5 py-2">
              <img
                src="/images/partners/lomarengas.png"
                alt="Lomarengas"
                width={472}
                height={150}
                loading="lazy"
                decoding="async"
                className="h-6 w-auto"
              />
            </span>
          </p>
        </div>
      </section>

      <Newsletter />
    </>
  )
}
