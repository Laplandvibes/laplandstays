import SEO from '../components/SEO';
import CookieContent from '../../../shared/Legal/CookieContent';
import { useLang, type Lang } from '../i18n/useLang';

const META: Record<Lang, { title: string; description: string }> = {
  en: {
    title: 'Cookie Policy | LaplandStays',
    description:
      'Which cookies LaplandStays uses and why, essential consent storage, Google Analytics 4 (only after opt-in), and partner-network affiliate attribution (Adtraction, Travelpayouts, Trip.com).',
  },
  fi: {
    title: 'Evästekäytäntö | LaplandStays',
    description:
      'Mitä evästeitä LaplandStays käyttää ja miksi, välttämätön suostumuksen tallennus, Google Analytics 4 (vain luvalla) ja kumppaniverkostojen affiliate-attribuutio (Adtraction, Travelpayouts, Trip.com).',
  },
  de: {
    title: 'Cookie-Richtlinie | LaplandStays',
    description:
      'Welche Cookies LaplandStays verwendet und warum, essenzielle Consent-Speicherung, Google Analytics 4 (nur nach Opt-in) und Affiliate-Attribution der Partnernetzwerke (Adtraction, Travelpayouts, Trip.com).',
  },
  ja: {
    title: 'クッキーポリシー。LaplandStays',
    description:
      'LaplandStaysが使用するCookieとその目的。同意保存用の必須Cookie、Google Analytics 4（オプトイン後のみ）、パートナーネットワーク（Adtraction、Travelpayouts、Trip.com）のアフィリエイト計測。',
  },
  es: {
    title: 'Política de cookies | LaplandStays',
    description:
      'Qué cookies usa LaplandStays y por qué: almacenamiento esencial del consentimiento, Google Analytics 4 (solo tras aceptar) y atribución de afiliados de las redes asociadas (Adtraction, Travelpayouts, Trip.com).',
  },
  'pt-BR': {
    title: 'Política de cookies | LaplandStays',
    description:
      'Quais cookies o LaplandStays usa e por quê, armazenamento essencial de consentimento, Google Analytics 4 (somente após opt-in) e atribuição de afiliados das redes parceiras (Adtraction, Travelpayouts, Trip.com).',
  },
  'zh-CN': {
    title: 'Cookie 政策。LaplandStays',
    description:
      'LaplandStays 使用哪些 Cookie 及原因。必要的同意状态存储、Google Analytics 4（仅在同意后启用）以及合作网络（Adtraction、Travelpayouts、Trip.com）的联盟归因。',
  },
  ko: {
    title: '쿠키 정책. LaplandStays',
    description:
      'LaplandStays가 사용하는 쿠키와 그 이유. 필수 동의 저장, Google Analytics 4(동의 후에만), 파트너 네트워크(Adtraction, Travelpayouts, Trip.com) 제휴 어트리뷰션.',
  },
  fr: {
    title: 'Politique relative aux cookies | LaplandStays',
    description:
      "Quels cookies LaplandStays utilise et pourquoi, stockage essentiel du consentement, Google Analytics 4 (après opt-in uniquement) et attribution d'affiliation des réseaux partenaires (Adtraction, Travelpayouts, Trip.com).",
  },
  it: {
    title: 'Cookie policy | LaplandStays',
    description:
      "Quali cookie usa LaplandStays e perché, salvataggio essenziale del consenso, Google Analytics 4 (solo dopo l'opt-in) e attribuzione affiliata delle reti partner (Adtraction, Travelpayouts, Trip.com).",
  },
  nl: {
    title: 'Cookiebeleid | LaplandStays',
    description:
      'Welke cookies LaplandStays gebruikt en waarom, essentiële opslag van toestemming, Google Analytics 4 (alleen na opt-in) en affiliate-attributie via partnernetwerken (Adtraction, Travelpayouts, Trip.com).',
  },
  sv: {
    title: 'Cookiepolicy | LaplandStays',
    description:
      'Vilka cookies LaplandStays använder och varför: nödvändig lagring av samtycke, Google Analytics 4 (endast efter opt-in) och affiliateattribuering via partnernätverken (Adtraction, Travelpayouts, Trip.com).',
  },
};

export default function CookiePolicy() {
  const lang = useLang();
  const meta = META[lang];
  return (
    <>
      <SEO
        title={meta.title}
        description={meta.description}
        canonicalPath="/cookie-policy"
      />
      <CookieContent siteId="laplandstays" siteName="LaplandStays" lang={lang} />
    </>
  );
}
