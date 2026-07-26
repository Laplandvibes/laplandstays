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
import PartnerSlot from '../../../shared/PartnerSlot'
import { adLocaleEnabled } from '../../../shared/adSlotsCopy'
import {
  AD_SLOTS,
  FEATURED_CONTEXT,
  FEATURED_PARTNERS,
  type FeaturedPlacement,
} from '../data/adSlots'

/** fi/en/sv mainosmerkinnän copy. Ei 12-kielisissä tiedostoissa: paikka on gatettu. */
function markerCopy(locale: string) {
  const l = (locale || 'en').toLowerCase()
  if (l.startsWith('fi')) return { ad: 'Mainos', featured: 'Esittelykumppani' }
  if (l.startsWith('sv')) return { ad: 'Annons', featured: 'Utvald partner' }
  return { ad: 'Advertisement', featured: 'Featured partner' }
}

function contextLabel(placement: FeaturedPlacement, locale: string): string {
  const l = (locale || 'en').toLowerCase()
  const c = FEATURED_CONTEXT[placement]
  if (l.startsWith('fi')) return c.fi
  if (l.startsWith('sv')) return c.sv
  return c.en
}

export default function FeaturedPartnerSlot({
  placement,
  locale,
  surface = 'light',
  className,
}: {
  /** `undefined` = tuntematon pinta → ei renderöidä mitään (fail closed). */
  placement: FeaturedPlacement | undefined
  locale: string
  /** Sivun pohja: `light` = cream-sivu, `dark` = night-osio. */
  surface?: 'light' | 'dark'
  className?: string
}) {
  if (!placement) return null
  if (!adLocaleEnabled(locale)) return null

  const m = markerCopy(locale)
  const context = contextLabel(placement, locale)
  const partner = FEATURED_PARTNERS[placement]
  const wrap = ['mb-10 sm:mb-12', className].filter(Boolean).join(' ')
  const markerTone = surface === 'dark' ? 'text-white/45' : 'text-charcoal/55'

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
            {m.featured} · {context}
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
          variant="banner"
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
