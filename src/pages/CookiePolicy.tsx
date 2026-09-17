import SEO from '../components/SEO';
import CookieContent from '../shared/Legal/CookieContent';
import { useLang, type Lang } from '../i18n/useLang';

const META: Record<Lang, { title: string; description: string }> = {
  en: {
    title: 'Cookie Policy | LaplandStays',
    description:
      'Which cookies LaplandStays uses and why: essential consent storage, Google Analytics 4 only after opt-in, and partner-network affiliate attribution.',
  },
  fi: {
    title: 'Evästekäytäntö | LaplandStays',
    description:
      'Mitä evästeitä LaplandStays käyttää ja miksi: suostumuksen tallennus, Google Analytics 4 vain luvalla ja kumppaniverkostojen affiliate-attribuutio.',
  },
  de: {
    title: 'Cookie-Richtlinie | LaplandStays',
    description:
      'Welche Cookies LaplandStays verwendet und warum: Consent-Speicherung, Google Analytics 4 (nur nach Opt-in) und Affiliate-Attribution der Partnernetzwerke.',
  },
  ja: {
    title: 'クッキーポリシー。LaplandStays',
    description:
      'LaplandStaysが使用するCookieとその目的。同意保存用の必須Cookie、Google Analytics 4（オプトイン後のみ）、パートナーネットワーク（Adtraction、Travelpayouts、Trip.com）のアフィリエイト計測。',
  },
  es: {
    title: 'Política de cookies y consentimiento | LaplandStays',
    description:
      'Qué cookies usa LaplandStays y por qué: consentimiento, Google Analytics 4 solo tras aceptar y atribución de afiliados de las redes asociadas.',
  },
  'pt-BR': {
    title: 'Política de cookies | LaplandStays',
    description:
      'Quais cookies o LaplandStays usa e por quê: consentimento essencial, Google Analytics 4 somente após opt-in e atribuição de afiliados das redes parceiras.',
  },
  'zh-CN': {
    title: 'Cookie 政策。LaplandStays',
    description:
      'LaplandStays 使用哪些 Cookie 及原因。必要的同意狀態儲存、Google Analytics 4（僅在同意後啟用）以及合作網路（Adtraction、Travelpayouts、Trip.com）的聯盟歸因。',
  },
  ko: {
    title: '쿠키 정책. LaplandStays',
    description:
      'LaplandStays가 사용하는 쿠키와 그 이유. 필수 동의 저장, Google Analytics 4(동의 후에만), 파트너 네트워크(Adtraction, Travelpayouts, Trip.com) 제휴 어트리뷰션.',
  },
  fr: {
    title: 'Politique relative aux cookies | LaplandStays',
    description:
      "Quels cookies LaplandStays utilise et pourquoi : consentement, Google Analytics 4 après opt-in uniquement et attribution d'affiliation des réseaux partenaires.",
  },
  it: {
    title: 'Cookie policy | LaplandStays',
    description:
      "Quali cookie usa LaplandStays e perché: salvataggio del consenso, Google Analytics 4 solo dopo l'opt-in e attribuzione affiliata delle reti partner.",
  },
  nl: {
    title: 'Cookiebeleid | LaplandStays',
    description:
      'Welke cookies LaplandStays gebruikt en waarom: opslag van toestemming, Google Analytics 4 alleen na opt-in en affiliate-attributie via partnernetwerken.',
  },
  sv: {
    title: 'Cookiepolicy | LaplandStays',
    description:
      'Vilka cookies LaplandStays använder och varför: lagring av samtycke, Google Analytics 4 endast efter opt-in och affiliateattribuering via partnernätverken.',
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
