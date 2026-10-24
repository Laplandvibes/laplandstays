/**
 * FeaturedPartnerSlot — myytävä "Esittelykumppani"-paikka nostopinnan kärjessä.
 *
 * Miksi (Vesa 2026-07-26): sivuston nimetyt kohteet saivat isot toimitukselliset
 * pinnat ilmaiseksi ("Missä yöpyä Levillä", ankkurikohteet, kohdekortit) samalla
 * kun molemmat myydyt mainospaikat olivat tyhjinä. Nyt jokainen sellainen pinta
 * alkaa yhdellä myytävällä paikalla, ja toimituksellinen kärkivalinta on pelkkä
 * ANSAITTU chip normaalikortilla (ks. `bestGoogleRated` / `copy.editorial` —
 * sitä ei myydä; peruste on aito Google-arvio, ei toimituksen mieltymys).
 *
 * Kanoninen malli: laplanddining `/restaurants` → `CityFeaturedSlot`
 * (commit `bdf9b37`), sellaisenaan portattuna laplandhoteldealsin
 * `FeaturedPartnerSlot`ista (commit `f67c6d6`). Sama rakenne, konteksti
 * kaupungin sijasta pinta.
 *
 * KKV: maksettu paikka on merkitty selvästi mainokseksi (pinkki "Mainos"
 * -pilleri + "Esittelykumppani · <pinta>"), samalla muotoilulla kuin verkoston
 * muut maksetut paikat.
 *
 * Tyhjä paikka renderöi kanonisen VAALEAN house-adin `shared/PartnerSlot`ista
 * (bg #F9FAFB, dashed-pinkki reunus, pinkki pilleri-CTA; hehku inline-tyylinä
 * koska arbitrary `shadow-[…]` ei emitoidu kaikissa repoissa).
 *
 * Lokaalirajaus: `adLocaleEnabled` (fi/en/sv) on PAKOLLINEN — ilman sitä
 * fi/en/sv-copy vuotaisi 9 muulle kielelle. Muilla kielillä komponentti ei
 * renderöi mitään, eikä pintaan jää aukkoa: toimituksellinen kortisto on
 * erillään tästä ja renderöityy kaikilla 12 kielellä ennallaan.
 */
import PartnerSlot from '../shared/PartnerSlot'
import FeaturedPartnerCard from './FeaturedPartnerCard'
import { adLocaleEnabled, normalizeAdLocale, type AdLocale } from '../shared/adSlotsCopy'
import {
  AD_SLOTS,
  FEATURED_CONTEXT,
  FEATURED_PARTNERS,
  type FeaturedPlacement,
} from '../data/adSlots'

/**
 * Mainosmerkintä (KKV) jokaisella sivuston kielellä. Myyty kumppanikortti näkyy kaikilla 12 kielellä
 * (Partner.i18n kantaa käännökset, kuten HomeAdSlotsin myydyt kortit); vain tyhjä house-ad on fi/en/sv
 * (Vesa 2026-07-13). 23.10.2026: tämä komponentti piilotti myös myydyn kortin 9 kieleltä.
 */
const MARKER: Record<AdLocale, { ad: string; featured: string }> = {
  fi: { ad: 'Mainos', featured: 'Esittelykumppani' },
  en: { ad: 'Advertisement', featured: 'Featured partner' },
  sv: { ad: 'Annons', featured: 'Utvald partner' },
  de: { ad: 'Anzeige', featured: 'Vorgestellter Partner' },
  fr: { ad: 'Publicité', featured: 'Partenaire à la une' },
  it: { ad: 'Pubblicità', featured: 'Partner in evidenza' },
  es: { ad: 'Anuncio', featured: 'Socio destacado' },
  nl: { ad: 'Advertentie', featured: 'Uitgelichte partner' },
  pt: { ad: 'Anúncio', featured: 'Parceiro em destaque' },
  ja: { ad: '広告', featured: '注目のパートナー' },
  ko: { ad: '광고', featured: '추천 파트너' },
  zh: { ad: '廣告', featured: '精選合作夥伴' },
}

function markerCopy(locale: string) {
  return MARKER[normalizeAdLocale(locale)]
}

function contextLabel(placement: FeaturedPlacement, locale: string): string {
  const l = (locale || 'en').toLowerCase()
  const c = FEATURED_CONTEXT[placement]
  if (l.startsWith('fi')) return c.fi
  if (l.startsWith('sv')) return c.sv
  if (l.startsWith('en')) return c.en
  // Kontekstiotsikot ovat vain fi/en/sv; muilla kielillä merkintä ilman kontekstia, ei englantia.
  return ''
}

export default function FeaturedPartnerSlot({
  placement,
  locale,
  surface = 'light',
  className,
  cardLayout = false,
}: {
  /** `undefined` = tuntematon pinta → ei renderöidä mitään (fail closed). */
  placement: FeaturedPlacement | undefined
  locale: string
  /** Sivun pohja: `light` = cream-sivu, `dark` = night-osio. */
  surface?: 'light' | 'dark'
  className?: string
  /**
   * Myyty paikka isona korttina (kuva, kuvaus, CTA ja juttulinkki) bannerin sijaan.
   * 23.10.2026 Visit Inari: kohdesivun myyty paikka johdannon jälkeen täysleveänä; banneri
   * näytti maksavasta kumppanista vain pikkukuvan ja otsikon. Tyhjä paikka pysyy bannerina.
   */
  cardLayout?: boolean
}) {
  if (!placement) return null
  const partner = FEATURED_PARTNERS[placement]
  // Myyty kortti kaikilla 12 kielellä, tyhjä house-ad vain fi/en/sv (Vesa 2026-07-13).
  if (!partner && !adLocaleEnabled(locale)) return null

  const m = markerCopy(locale)
  const context = contextLabel(placement, locale)
  const wrap = ['mb-10 sm:mb-12', className].filter(Boolean).join(' ')
  const markerTone = surface === 'dark' ? 'text-white/45' : 'text-charcoal/55'

  // Myyty paikka isona korttina: oma kuvavetoinen asettelu, yksi mainosmerkintä oikeassa alakulmassa
  // (Vesa 24.10.2026: merkintä oli kahdesti ja teksti valkoisella laatikolla valkoisella sivulla).
  if (partner && cardLayout) {
    return (
      <div className={wrap} data-featured-partner={placement}>
        <FeaturedPartnerCard partner={partner} locale={locale} marker={`${m.ad} · ${m.featured}`} />
      </div>
    )
  }

  if (partner) {
    return (
      <div className={wrap} data-featured-partner={placement}>
        <p
          className={`flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] mb-2 ${markerTone}`}
        >
          <span className="inline-flex items-center rounded-full bg-pink/90 px-2 py-0.5 text-white">
            {m.ad}
          </span>
          <span>
            {m.featured}{context ? ` · ${context}` : ''}
          </span>
        </p>
        {/* Kanoninen PartnerSlot-banneri on tummalla pinnalla hyvin vähäeleinen
            `bg-white/5` -lasikortti. Lisätään sivuston oma amber-hiusviiva
            PELKKÄNÄ LISÄYKSENÄ (ring + varjo eivät kilpaile minkään olemassa
            olevan declarationin kanssa, joten Tailwind-luokkajärjestys ei voi
            kumota sitä) → maksava kumppani ei huku pintaan. Vaalealla
            cream-pinnalla PartnerSlot renderöi jo oman valkoisen korttinsa,
            joten siellä riittää kevyt reunus. */}
        <PartnerSlot
          variant={cardLayout ? 'card' : 'banner'}
          layout={cardLayout ? 'wide' : undefined}
          partner={partner}
          locale={locale}
          surface={surface}
          className={
            surface === 'dark'
              ? 'ring-1 ring-amber/40 shadow-lg shadow-black/40'
              : 'ring-1 ring-night/10 shadow-md shadow-night/5'
          }
        />
      </div>
    )
  }

  return (
    <div className={wrap} data-featured-partner={placement}>
      <PartnerSlot
        variant="banner"
        partner={null}
        locale={locale}
        surface={surface}
        placeholder={{
          siteSlug: AD_SLOTS.siteSlug,
          slotId: `featured_${placement}`,
          level: 'premium',
          label: `${m.featured} · ${context}`,
        }}
      />
    </div>
  )
}
