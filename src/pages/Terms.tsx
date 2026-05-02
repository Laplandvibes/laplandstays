import SEO from '../components/SEO';
import TermsContent from '../../../shared/Legal/TermsContent';

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms of Use — LaplandStays"
        description="Terms of use for laplandstays.com: an editorial affiliate travel guide operated by Lapeso Oy. Bookings are handled by partner platforms, not by us."
        canonicalPath="/terms"
      />
      <TermsContent siteName="LaplandStays" siteUrl="laplandstays.com" />
    </>
  );
}
