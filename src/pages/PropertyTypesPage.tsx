import { Link } from 'react-router-dom'
import { useEffect, useState, type ComponentType, type SVGProps } from 'react'
import { ArrowRight, Sparkles, TreePine, Mountain, Gem, Check, X, MapPin } from 'lucide-react'
import PropertyTypes from '../components/PropertyTypes'
import AmenitiesShowcase from '../components/AmenitiesShowcase'
import Newsletter from '../components/Newsletter'
import SEO from '../components/SEO'
import PageBreadcrumb from '../components/PageBreadcrumb'
import AffiliateDisclosure from '../components/AffiliateDisclosure'
import ReviewedBy from '../components/ReviewedBy'
import { HOTEL_SEARCH, buildAffiliateUrl } from '../lib/affiliate'
import { trackAffiliateClick } from '../lib/analytics'
import { useLang, useLocalePath, type Lang } from '../i18n/useLang'
import type { PageCopy } from './PropertyTypesPage.copy.types'
import enCopy from './PropertyTypesPage.copy.en'

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Property Types in Finnish Lapland, Aurora Villas, Log Cabins, Ski Chalets, Designer Lodges',
  description:
    'A guide to the four main accommodation categories in Finnish Lapland: which properties anchor each category, what they cost, and which one suits your trip.',
  author: {
    '@type': 'Person',
    name: 'Vesa Pesola',
    jobTitle: 'Editor / operator',
    worksFor: { '@type': 'Organization', name: 'Lapeso Oy' },
    url: 'https://laplandstays.com/editorial-policy',
  },
  publisher: { '@type': 'Organization', name: 'LaplandStays' },
  datePublished: '2026-01-10',
  dateModified: '2026-04-26',
  mainEntityOfPage: 'https://laplandstays.com/property-types',

  image: "https://laplandstays.com/og/property-types-1200x630.jpg",
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://laplandstays.com/' },
    { '@type': 'ListItem', position: 2, name: 'Property Types', item: 'https://laplandstays.com/property-types' },
  ],
}

interface Anchor {
  name: string
  propertyQuery: string
  sid: string
}
interface Concentration { name: string; to: string }

interface CategoryProps {
  id: string
  eyebrow: string
  title: string
  Icon: ComponentType<SVGProps<SVGSVGElement>>
  body: string
  priceRange: string
  priceNote: string
  bestForLabel: string
  avoidIfLabel: string
  anchorLabel: string
  concentratedLabel: string
  bestFor: string[]
  avoidIf: string[]
  anchors: Anchor[]
  concentratedIn: Concentration[]
  ctaHref: string
  ctaSid: string
  ctaLabel: string
  image: string
  imageAlt: string
  bg: string
  imageSide: 'left' | 'right'
}

function AnchorPill({ name, propertyQuery, sid }: Anchor) {
  const href = buildAffiliateUrl({ partner: 'hotels', sid, destination: propertyQuery })
  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored nofollow noopener"
      onClick={() => trackAffiliateClick('hotelscom', sid, href)}
      className="text-[13px] px-3 py-1.5 rounded-full bg-pink/10 text-pink font-semibold hover:bg-pink hover:text-white transition-colors"
    >
      {name}
    </a>
  )
}

function CategorySection(p: CategoryProps) {
  const imageBlock = (
    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
      <img src={p.image} alt={p.imageAlt} loading="lazy" className="w-full h-full object-cover"  decoding="async" width="800" height="600"/>
      <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-pink/95 backdrop-blur-sm flex items-center justify-center shadow-lg">
        <p.Icon className="w-6 h-6 text-white" />
      </div>
    </div>
  )

  const content = (
    <div>
      <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3">{p.eyebrow}</p>
      <h2 className="font-heading text-4xl sm:text-5xl text-night tracking-wide mb-4">{p.title}</h2>
      <p className="text-charcoal/75 leading-relaxed text-lg mb-6">{p.body}</p>

      <div className="flex items-baseline gap-3 mb-7 pb-7 border-b border-night/10">
        <p className="font-heading text-3xl text-[#B45309] tracking-wide whitespace-nowrap">{p.priceRange}</p>
        <p className="text-xs text-charcoal/70 uppercase tracking-widest">{p.priceNote}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 mb-7">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-widest text-night mb-3">{p.bestForLabel}</p>
          <ul className="space-y-2">
            {p.bestFor.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-charcoal/80 leading-relaxed">
                <Check className="w-4 h-4 text-pink shrink-0 mt-0.5" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[11px] font-bold uppercase tracking-widest text-night mb-3">{p.avoidIfLabel}</p>
          <ul className="space-y-2">
            {p.avoidIf.map((a) => (
              <li key={a} className="flex items-start gap-2 text-sm text-charcoal/80 leading-relaxed">
                <X className="w-4 h-4 text-charcoal/40 shrink-0 mt-0.5" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="text-[11px] font-bold uppercase tracking-widest text-charcoal/70 mb-3">{p.anchorLabel}</p>
      <div className="flex flex-wrap gap-2 mb-7">
        {p.anchors.map((a) => (
          <AnchorPill key={a.name} {...a} />
        ))}
      </div>

      <div className="flex items-center gap-3 mb-7 text-sm">
        <MapPin className="w-4 h-4 text-charcoal/45 shrink-0" />
        <span className="text-charcoal/70 uppercase text-xs tracking-widest font-semibold">{p.concentratedLabel}</span>
        <div className="flex items-center gap-3">
          {p.concentratedIn.map((c, i) => (
            <span key={c.to} className="flex items-center gap-3">
              {i > 0 && <span className="text-charcoal/30">·</span>}
              <Link to={c.to} className="text-pink font-semibold hover:underline">
                {c.name}
              </Link>
            </span>
          ))}
        </div>
      </div>

      <a
        href={p.ctaHref}
        target="_blank"
        rel="sponsored nofollow noopener"
        onClick={() => trackAffiliateClick('hotelscom', p.ctaSid, p.ctaHref)}
        className="inline-flex items-center gap-2.5 bg-pink hover:bg-pink/90 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 text-sm uppercase tracking-widest shadow-md hover:shadow-lg hover:-translate-y-0.5"
      >
        {p.ctaLabel}
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  )

  return (
    <section id={p.id} className={`py-20 sm:py-24 px-4 sm:px-6 ${p.bg}`}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {p.imageSide === 'left' ? (
          <>
            {imageBlock}
            {content}
          </>
        ) : (
          <>
            <div className="lg:order-2">{imageBlock}</div>
            <div className="lg:order-1">{content}</div>
          </>
        )}
      </div>
    </section>
  )
}

// ---------- copy (lazy-loaded per locale) ----------

const cache: Partial<Record<Lang, PageCopy>> = { en: enCopy }
const loaders: Record<Lang, () => Promise<{ default: PageCopy }>> = {
  en: () => import('./PropertyTypesPage.copy.en'),
  fi: () => import('./PropertyTypesPage.copy.fi'),
  de: () => import('./PropertyTypesPage.copy.de'),
  ja: () => import('./PropertyTypesPage.copy.ja'),
  es: () => import('./PropertyTypesPage.copy.es'),
  'pt-BR': () => import('./PropertyTypesPage.copy.ptBR'),
  'zh-CN': () => import('./PropertyTypesPage.copy.zhCN'),
  ko: () => import('./PropertyTypesPage.copy.ko'),
  fr: () => import('./PropertyTypesPage.copy.fr'),
  it: () => import('./PropertyTypesPage.copy.it'),
  nl: () => import('./PropertyTypesPage.copy.nl'),
}

function usePageCopy(): PageCopy {
  const lang = useLang()
  const [copy, setCopy] = useState<PageCopy>(() => cache[lang] ?? cache.en!)
  useEffect(() => {
    const cached = cache[lang]
    if (cached) {
      setCopy(cached)
      return
    }
    let cancelled = false
    loaders[lang]().then((mod) => {
      cache[lang] = mod.default
      if (!cancelled) setCopy(mod.default)
    })
    return () => {
      cancelled = true
    }
  }, [lang])
  return copy
}


const CATEGORY_META = [
  {
    id: 'aurora-villas',
    Icon: Sparkles,
    priceNoteKey: 'perIgloo',
    anchors: [
      { name: 'Kakslauttanen Arctic Resort', propertyQuery: 'Kakslauttanen Arctic Resort', sid: 'property_aurora_kakslauttanen' },
      { name: 'Levin Iglut', propertyQuery: 'Levin Iglut', sid: 'property_aurora_levin_iglut' },
      { name: 'Star Arctic Hotel', propertyQuery: 'Star Arctic Hotel', sid: 'property_aurora_star_arctic' },
      { name: 'Aurora Village Ivalo', propertyQuery: 'Aurora Village Ivalo', sid: 'property_aurora_village' },
      { name: 'Nova Skyland', propertyQuery: 'Novasky Land Rovaniemi', sid: 'property_aurora_nova_skyland' },
      { name: 'Northern Lights Ranch', propertyQuery: 'Northern Lights Ranch Köngäs', sid: 'property_aurora_nlr' },
      { name: 'Arctic SnowHotel & Glass Igloos', propertyQuery: 'Arctic Snow Hotel', sid: 'property_aurora_arctic_snow' },
    ],
    concentratedSlugs: ['saariselka', 'levi', 'inari', 'rovaniemi'],
    ctaHref: HOTEL_SEARCH.auroraGlass,
    ctaSid: 'property_aurora_glass_section_cta',
    image: '/images/aurora-villas.webp',
    bg: 'bg-white',
    imageSide: 'left' as const,
  },
  {
    id: 'lakeside-cabins',
    Icon: TreePine,
    priceNoteKey: 'perCabin',
    anchors: [
      { name: 'Wilderness Hotel Nellim', propertyQuery: 'Wilderness Hotel Nellim', sid: 'property_lakeside_nellim' },
      { name: 'Wilderness Hotel Muotka', propertyQuery: 'Wilderness Hotel Muotka', sid: 'property_lakeside_muotka' },
      { name: 'Apukka Resort', propertyQuery: 'Apukka Resort Rovaniemi', sid: 'property_lakeside_apukka' },
      { name: 'Inari Lake Cottages', propertyQuery: 'Inari Lake', sid: 'property_lakeside_inari_lake' },
      { name: 'Lapland Hotels Ounasvaara', propertyQuery: 'Lapland Hotels Ounasvaara', sid: 'property_lakeside_ounasvaara' },
      { name: 'Harriniva (Muonio)', propertyQuery: 'Harriniva', sid: 'property_lakeside_harriniva' },
    ],
    concentratedSlugs: ['inari', 'rovaniemi', 'saariselka'],
    ctaHref: HOTEL_SEARCH.lakesideCabin,
    ctaSid: 'property_lakeside_cabin_section_cta',
    image: '/images/lakeside-cabins.webp',
    bg: 'bg-gradient-to-b from-white to-pink/5',
    imageSide: 'right' as const,
  },
  {
    id: 'mountain-chalets',
    Icon: Mountain,
    priceNoteKey: 'perRoom',
    anchors: [
      { name: 'Hotel Levi Panorama', propertyQuery: 'Hotel Levi Panorama', sid: 'property_chalet_levi_panorama' },
      { name: 'Levi Hotel Spa', propertyQuery: 'Levi Hotel Spa', sid: 'property_chalet_levi_spa' },
      { name: 'Lapland Hotels Sirkantähti', propertyQuery: 'Lapland Hotels Sirkantähti', sid: 'property_chalet_sirkantahti' },
      { name: 'K5 Levi', propertyQuery: 'K5 Levi', sid: 'property_chalet_k5_levi' },
      { name: 'Lapland Hotels Saaga (Ylläs)', propertyQuery: 'Lapland Hotels Saaga', sid: 'property_chalet_saaga' },
      { name: 'Lapland Hotels Ylläskaltio', propertyQuery: 'Lapland Hotels Ylläskaltio', sid: 'property_chalet_yllaskaltio' },
      { name: 'Harriniva (Muonio)', propertyQuery: 'Harriniva', sid: 'property_chalet_harriniva' },
    ],
    concentratedSlugs: ['levi', 'yllas'],
    ctaHref: HOTEL_SEARCH.mountainChalet,
    ctaSid: 'property_mountain_chalet_section_cta',
    image: '/images/mountain-chalets.webp',
    bg: 'bg-white',
    imageSide: 'left' as const,
  },
  {
    id: 'designer-lodges',
    Icon: Gem,
    priceNoteKey: 'perSuite',
    anchors: [
      { name: 'Arctic TreeHouse Hotel', propertyQuery: 'Arctic TreeHouse Hotel', sid: 'property_designer_arctic_treehouse' },
      { name: 'Wilderness Hotel Muotka', propertyQuery: 'Wilderness Hotel Muotka', sid: 'property_designer_muotka' },
      { name: 'Wilderness Hotel Nellim', propertyQuery: 'Wilderness Hotel Nellim', sid: 'property_designer_nellim' },
      { name: 'Northern Lights Ranch', propertyQuery: 'Northern Lights Ranch Köngäs', sid: 'property_designer_nlr' },
      { name: 'Star Arctic Hotel', propertyQuery: 'Star Arctic Hotel', sid: 'property_designer_star_arctic' },
    ],
    concentratedSlugs: ['rovaniemi', 'inari'],
    ctaHref: HOTEL_SEARCH.designerLodge,
    ctaSid: 'property_designer_lodge_section_cta',
    image: '/images/designer-lodges.webp',
    bg: 'bg-gradient-to-b from-white to-pink/5',
    imageSide: 'right' as const,
  },
] as const

const SLUG_NAME: Record<string, Record<Lang, string>> = {
  saariselka: { en: 'Saariselkä', fi: 'Saariselkä', de: 'Saariselkä', ja: 'サーリセルカ', es: 'Saariselkä', 'pt-BR': 'Saariselkä', 'zh-CN': '萨利色尔卡', ko: '사리셀카',  fr: 'Saariselkä', it: 'Saariselkä', nl: 'Saariselkä' },
  levi:       { en: 'Levi',       fi: 'Levi',       de: 'Levi',       ja: 'レヴィ',     es: 'Levi',       'pt-BR': 'Levi',       'zh-CN': '莱维',     ko: '레비',      fr: 'Levi',       it: 'Levi',       nl: 'Levi' },
  inari:      { en: 'Inari',      fi: 'Inari',      de: 'Inari',      ja: 'イナリ',     es: 'Inari',      'pt-BR': 'Inari',      'zh-CN': '伊纳里',   ko: '이나리',    fr: 'Inari',      it: 'Inari',      nl: 'Inari' },
  rovaniemi:  { en: 'Rovaniemi',  fi: 'Rovaniemi',  de: 'Rovaniemi',  ja: 'ロヴァニエミ', es: 'Rovaniemi',  'pt-BR': 'Rovaniemi',  'zh-CN': '罗瓦涅米', ko: '로바니에미',fr: 'Rovaniemi',  it: 'Rovaniemi',  nl: 'Rovaniemi' },
  yllas:      { en: 'Ylläs',      fi: 'Ylläs',      de: 'Ylläs',      ja: 'ウッラス',   es: 'Ylläs',      'pt-BR': 'Ylläs',      'zh-CN': '于拉斯',   ko: '일래스',    fr: 'Ylläs',      it: 'Ylläs',      nl: 'Ylläs' },
}

/** Short per-night suffix for the hero stat subtitle (price-range context). */
const PER_NIGHT: Record<Lang, string> = {
  en: '/ night', fi: '/ yö', de: '/ Nacht', ja: '/泊', es: '/ noche', 'pt-BR': '/ noite', 'zh-CN': '/晚', ko: '/박', fr: '/ nuit', it: '/ notte', nl: '/ nacht',
}

export default function PropertyTypesPage() {
  const lang = useLang()
  const to = useLocalePath()
  const copy = usePageCopy()
  const { seo, ui, categories: cats } = copy

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        canonicalPath="/property-types"
        ogImage="https://laplandstays.com/og-property-types.jpg"
        keywords={['Lapland aurora villa', 'Finnish log cabin', 'ski-in chalet Finland', 'designer lodge Lapland', 'glass igloo Finland']}
        jsonLd={[articleJsonLd, breadcrumbJsonLd]}
      />

      {/* Editorial hero, background image with a soft directional scrim */}
      <section className="relative overflow-hidden bg-night text-white">
        {/* Background image */}
        <picture>
          <source
            type="image/avif"
            srcSet="/images/hero-alt-800.avif 800w, /images/hero-alt-1200.avif 1200w"
            sizes="100vw"
          />
          <img
            src="/images/hero-alt-1200.webp"
            srcSet="/images/hero-alt-800.webp 800w, /images/hero-alt-1200.webp 1200w"
            sizes="100vw"
            alt={lang === 'fi'
              ? 'Lasikattoinen aurora-villa ja luminen tunturimaisema Suomen Lapissa'
              : 'Glass-roofed aurora villa above a snow-lit fell in Finnish Lapland'}
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width="1200"
            height="800"
          />
        </picture>

        {/* Soft directional scrim: light at top so the image reads, deeper at the
            base where the copy and stat row sit. Replaces the old flat dark band. */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-night/85" />
        {/* Warm aurora glow, low opacity, adds depth without hiding the photo */}
        <div
          aria-hidden="true"
          className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[760px] max-w-[120%] h-[320px] bg-pink opacity-[0.18] blur-[130px] rounded-full pointer-events-none"
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 pt-32 sm:pt-40 pb-16 sm:pb-20">
          <p className="text-amber uppercase tracking-[0.32em] text-xs sm:text-sm font-semibold mb-5 [text-shadow:0_2px_14px_rgba(0,0,0,0.85)]">
            {ui.eyebrow}
          </p>
          <h1 className="font-heading font-bold text-[2.75rem] leading-[1.05] sm:text-6xl md:text-7xl tracking-tight mb-6 [text-shadow:0_3px_30px_rgba(0,0,0,0.7),0_1px_4px_rgba(0,0,0,0.55)]">
            {ui.h1}
          </h1>
          <p className="text-white/90 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-7 [text-shadow:0_2px_16px_rgba(0,0,0,0.8)]">
            {ui.lead}
          </p>

          {/* Single-line editorial stat subtitle, replaces the old boxy stat pill */}
          <p className="text-snow/80 uppercase text-xs sm:text-sm font-medium tracking-[0.18em] [text-shadow:0_2px_12px_rgba(0,0,0,0.8)]">
            4 {ui.statCategories}
            <span className="mx-2.5 text-snow/45">·</span>
            12+ {ui.statAnchors}
            <span className="mx-2.5 text-snow/45">·</span>
            €100–€1,500 {PER_NIGHT[lang]}
          </p>
        </div>
      </section>

      {/* Ecosystem breadcrumb (network trail), below the hero */}
      <PageBreadcrumb />

      {/* Affiliate disclosure, sits with the first CTA section (the quick-pick
          cards below link straight to partner searches) */}
      <div className="bg-white px-4 sm:px-6 pt-8 -mb-12 sm:-mb-16">
        <AffiliateDisclosure variant="compact" className="justify-center" />
      </div>

      {/* Quick-pick cards */}
      <PropertyTypes />

      {cats.map((cat, i) => {
        const meta = CATEGORY_META[i]
        return (
          <CategorySection
            key={meta.id}
            id={meta.id}
            eyebrow={cat.eyebrow}
            title={cat.title}
            Icon={meta.Icon}
            body={cat.body}
            priceRange={cat.priceRange}
            priceNote={ui[meta.priceNoteKey as 'perIgloo' | 'perCabin' | 'perRoom' | 'perSuite']}
            bestForLabel={ui.bestForLabel}
            avoidIfLabel={ui.avoidIfLabel}
            anchorLabel={ui.anchorLabel}
            concentratedLabel={ui.concentratedLabel}
            bestFor={cat.bestFor}
            avoidIf={cat.avoidIf}
            anchors={meta.anchors as unknown as Anchor[]}
            concentratedIn={meta.concentratedSlugs.map((slug) => ({
              name: SLUG_NAME[slug][lang],
              to: to(`/destinations/${slug}`),
            }))}
            ctaHref={meta.ctaHref}
            ctaSid={meta.ctaSid}
            ctaLabel={cat.ctaLabel}
            image={meta.image}
            imageAlt={cat.imageAlt}
            bg={meta.bg}
            imageSide={meta.imageSide}
          />
        )
      })}

      <AmenitiesShowcase />
      <Newsletter />

      {/* E-E-A-T byline, bottom-of-page placement; pairs with the Article
          JSON-LD author entity above */}
      <section className="bg-[#FAFAF8] py-10 px-4 sm:px-6 flex justify-center">
        <ReviewedBy />
      </section>
    </>
  )
}
