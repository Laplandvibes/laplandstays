import Breadcrumbs from '../../../shared/Breadcrumbs'
import { useLang, useLocalePath } from '../i18n/useLang'
import { useCopy } from '../locales/copy'

/**
 * Ecosystem breadcrumb, rendered BELOW the hero (mounted once per inline hero,
 * right after the hero's closing </section>) so it reads as the first line of
 * page content instead of a bar wedged between the nav and the hero. Self-hides
 * on home + unmapped routes (shared/Breadcrumbs returns null there), so each
 * page can mount it unconditionally after its hero.
 */
export default function PageBreadcrumb() {
  const lang = useLang()
  const to = useLocalePath()
  const c = useCopy().nav
  const labelMap: Record<string, string> = {
    '/property-types': c.propertyTypes,
    '/destinations/levi': c.levi,
    '/destinations/yllas': c.yllas,
    '/destinations/saariselka': c.saariselka,
    '/destinations/inari': c.inari,
    '/destinations/rovaniemi': c.rovaniemi,
    '/when-to-go': c.whenToGo,
    '/transport': c.transport,
    '/cabins': c.cabins,
    '/about': c.about,
  }
  return (
    <Breadcrumbs
      lang={lang}
      to={to}
      labelMap={labelMap}
      className="bg-white text-deep-night border-b border-deep-night/10"
      accentClassName="hover:text-vibe-pink hover:opacity-100"
    />
  )
}
