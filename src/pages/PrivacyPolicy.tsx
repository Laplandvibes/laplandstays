import SEO from '../components/SEO';
import PrivacyContent from '../../../shared/Legal/PrivacyContent';

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy — LaplandStays"
        description="How Lapeso Oy (LaplandStays) processes personal data: newsletter signups, analytics and affiliate cookies. GDPR / ePrivacy compliant."
        canonicalPath="/privacy"
        ogImage="https://laplandstays.com/og-privacy.jpg"
      />
      <PrivacyContent siteName="LaplandStays" />
    </>
  );
}
