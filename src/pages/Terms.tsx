import SEO from '../components/SEO';
import TermsContent from '../shared/Legal/TermsContent';
import { useLang, type Lang } from '../i18n/useLang';

const META: Record<Lang, { title: string; description: string }> = {
  en: {
    title: 'Terms of Use',
    description:
      'Terms of use for laplandstays.com: an editorial affiliate travel guide operated by LaPeso Oy. Bookings are handled by partner platforms, not by us.',
  },
  fi: {
    title: 'Käyttöehdot',
    description:
      'Laplandstays.comin käyttöehdot: LaPeso Oy:n ylläpitämä toimituksellinen affiliate-matkaopas. Varaukset hoitavat kumppanialustat, eivät me.',
  },
  de: {
    title: 'Nutzungsbedingungen',
    description:
      'Nutzungsbedingungen für laplandstays.com: ein redaktioneller Affiliate-Reiseführer von LaPeso Oy. Buchungen laufen über Partnerplattformen, nicht über uns.',
  },
  ja: {
    title: '利用規約',
    description:
      'laplandstays.comの利用規約：LaPeso Oyが運営する編集型アフィリエイト旅行ガイド。予約は当サイトではなく提携プラットフォームが取り扱います。',
  },
  es: {
    title: 'Términos de uso',
    description:
      'Términos de uso de laplandstays.com: una guía de viaje editorial de afiliados operada por LaPeso Oy.',
  },
  'pt-BR': {
    title: 'Termos de uso',
    description:
      'Termos de uso do laplandstays.com: um guia de viagem editorial de afiliados operado pela LaPeso Oy.',
  },
  'zh-CN': {
    title: '使用條款',
    description:
      'laplandstays.com 使用條款：由 LaPeso Oy 營運的編輯型聯盟旅行指南。預訂由合作平臺處理，而非本站。訪問或使用本網站，即表示您同意本條款。',
  },
  ko: {
    title: '이용약관',
    description:
      'laplandstays.com 이용약관: LaPeso Oy가 운영하는 에디토리얼 제휴 여행 가이드입니다. 예약은 저희가 아닌 파트너 플랫폼에서 처리합니다.',
  },
  fr: {
    title: "Conditions d'utilisation",
    description:
      "Conditions d'utilisation de laplandstays.com : un guide de voyage éditorial affilié exploité par LaPeso Oy.",
  },
  it: {
    title: 'Termini di utilizzo',
    description:
      'Termini di utilizzo di laplandstays.com: una guida di viaggio editoriale in affiliazione gestita da LaPeso Oy.',
  },
  nl: {
    title: 'Gebruiksvoorwaarden',
    description:
      'Gebruiksvoorwaarden van laplandstays.com: een redactionele affiliate-reisgids beheerd door LaPeso Oy. Boekingen lopen via partnerplatforms, niet via ons.',
  },
  sv: {
    title: 'Användarvillkor',
    description:
      'Användarvillkor för laplandstays.com: en redaktionell affiliate-reseguide som drivs av LaPeso Oy. Bokningar hanteras av partnerplattformar, inte av oss.',
  },
};

export default function Terms() {
  const lang = useLang();
  const meta = META[lang];
  return (
    <>
      <SEO
        title={meta.title}
        description={meta.description}
        canonicalPath="/terms"
      />
      <TermsContent siteName="LaplandStays" siteUrl="laplandstays.com" lang={lang} />
    </>
  );
}
