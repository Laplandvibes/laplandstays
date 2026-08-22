import SharedNotFound from '../shared/NotFound'
import { useLang, useLocalePath } from '../i18n/useLang'
import { useCopy } from '../locales/copy'

export default function NotFound() {
  const lang = useLang()
  const to = useLocalePath()
  const c = useCopy()

  // landmark={false} because this site's app layout already renders the
  // page's <main>. Without it the 404 route shipped two nested landmarks --
  // measured from the rendered DOM 2026-08-13, invisible to grep.
  return (
    <SharedNotFound
      landmark={false}
      lang={lang}
      siteName="LaplandStays"
      homeHref={to('/')}
      variant="light"
      links={[
        { href: to('/property-types'), label: c.nav.propertyTypes },
        { href: to('/when-to-go'), label: c.nav.whenToGo },
        { href: to('/transport'), label: c.nav.transport },
      ]}
    />
  )
}
