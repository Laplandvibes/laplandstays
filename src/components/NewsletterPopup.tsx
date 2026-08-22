import SharedNewsletterPopup from '../shared/NewsletterPopup'
import { trackNewsletterSignup } from '../lib/analytics'
import { useLang } from '../i18n/useLang'

/**
 * Site wrapper for the shared ecosystem newsletter popup.
 *
 * Routes the signup through the same-origin Pages Function `/api/newsletter`
 * (functions/api/newsletter.ts) instead of calling Supabase directly. This
 * sidesteps the CORS allowlist on the shared `send-welcome-email` Edge
 * Function, laplandstays.com isn't in that list, so a direct call would
 * fail with "Failed to fetch" in the browser. The proxy handles auth + CORS
 * server-side and returns the same {message, alreadySubscribed?} payload.
 *
 * Trigger: 25 s delay OR 55 % scroll depth, whichever first.
 * Suppressed on /privacy, /terms, /cookie-policy, /unsubscribe.
 * Welcome email is the master #LaplandVibes-branded one (single audience).
 */
export default function NewsletterPopup() {
  const langRaw = useLang();
  return (
    <SharedNewsletterPopup
lang={langRaw as 'en' | 'fi' | 'de' | 'ja' | 'es' | 'pt-BR' | 'zh-CN' | 'ko' | 'fr' | 'it' | 'nl' | 'sv'}
            siteId="laplandstays"
      brandWord="STAYS"
      endpoint="/api/newsletter"
      onSubscribed={(source) => trackNewsletterSignup(source)}
    />
  )
}
