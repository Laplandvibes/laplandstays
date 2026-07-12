import SharedNotFound from '../../../shared/NotFound'
import { useLang, useLocalePath } from '../i18n/useLang'
import { useCopy } from '../locales/copy'

export default function NotFound() {
  const lang = useLang()
  const to = useLocalePath()
  const c = useCopy()

  return (
    <SharedNotFound
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
