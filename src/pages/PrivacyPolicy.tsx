import SEO from '../components/SEO';
import PrivacyContent from '../shared/Legal/PrivacyContent';
import { useLang, type Lang } from '../i18n/useLang';

const META: Record<Lang, { title: string; description: string }> = {
  en: {
    title: 'Privacy Policy | LaplandStays',
    description:
      'How LaPeso Oy (LaplandStays) processes personal data: newsletter signups, analytics and affiliate cookies. GDPR / ePrivacy compliant.',
  },
  fi: {
    title: 'Tietosuojaseloste | LaplandStays',
    description:
      'Miten LaPeso Oy (LaplandStays) käsittelee henkilötietoja: uutiskirjetilaukset, analytiikka ja affiliate-evästeet. GDPR- ja ePrivacy-yhteensopiva.',
  },
  de: {
    title: 'Datenschutzerklärung | LaplandStays',
    description:
      'Wie LaPeso Oy (LaplandStays) personenbezogene Daten verarbeitet: Newsletter-Anmeldungen, Analytics und Affiliate-Cookies. DSGVO-/ePrivacy-konform.',
  },
  ja: {
    title: 'プライバシーポリシー。LaplandStays',
    description:
      'LaPeso Oy（LaplandStays）の個人データの取り扱い：ニュースレター登録、アナリティクス、アフィリエイトCookie。GDPR／ePrivacy準拠。',
  },
  es: {
    title: 'Política de privacidad | LaplandStays',
    description:
      'Cómo trata LaPeso Oy (LaplandStays) los datos personales: suscripciones al boletín, analítica y cookies de afiliados. Conforme al RGPD y ePrivacy.',
  },
  'pt-BR': {
    title: 'Política de privacidade | LaplandStays',
    description:
      'Como a LaPeso Oy (LaplandStays) trata dados pessoais: inscrições na newsletter, analytics e cookies de afiliados. Em conformidade com GDPR/ePrivacy.',
  },
  'zh-CN': {
    title: '隐私政策。LaplandStays',
    description:
      'LaPeso Oy（LaplandStays）如何处理个人数据：新闻通讯订阅、分析及联盟 Cookie。符合 GDPR/ePrivacy。',
  },
  ko: {
    title: '개인정보 처리방침. LaplandStays',
    description:
      'LaPeso Oy(LaplandStays)의 개인정보 처리: 뉴스레터 신청, 분석 및 제휴 쿠키. GDPR/ePrivacy 준수.',
  },
  fr: {
    title: 'Politique de confidentialité | LaplandStays',
    description:
      "Comment LaPeso Oy (LaplandStays) traite les données personnelles : inscriptions à la newsletter, analytics et cookies d'affiliation. Conforme RGPD/ePrivacy.",
  },
  it: {
    title: 'Informativa sulla privacy | LaplandStays',
    description:
      'Come LaPeso Oy (LaplandStays) tratta i dati personali: iscrizioni alla newsletter, analytics e cookie di affiliazione. Conforme a GDPR/ePrivacy.',
  },
  nl: {
    title: 'Privacybeleid | LaplandStays',
    description:
      'Hoe LaPeso Oy (LaplandStays) persoonsgegevens verwerkt: nieuwsbriefinschrijvingen, analytics en affiliate-cookies. AVG-/ePrivacy-conform.',
  },
  sv: {
    title: 'Integritetspolicy | LaplandStays',
    description:
      'Hur LaPeso Oy (LaplandStays) behandlar personuppgifter: nyhetsbrevsanmälningar, analys och affiliatecookies. Följer GDPR/ePrivacy.',
  },
};

export default function PrivacyPolicy() {
  const lang = useLang();
  const meta = META[lang];
  return (
    <>
      <SEO
        title={meta.title}
        description={meta.description}
        canonicalPath="/privacy"
        ogImage="https://laplandstays.com/og-privacy.jpg"
      />
      <PrivacyContent siteName="LaplandStays" lang={lang} />
    </>
  );
}
