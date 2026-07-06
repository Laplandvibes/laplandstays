import SEO from '../components/SEO';
import TermsContent from '../../../shared/Legal/TermsContent';
import { useLang, type Lang } from '../i18n/useLang';

const META: Record<Lang, { title: string; description: string }> = {
  en: {
    title: 'Terms of Use | LaplandStays',
    description:
      'Terms of use for laplandstays.com: an editorial affiliate travel guide operated by Lapeso Oy. Bookings are handled by partner platforms, not by us.',
  },
  fi: {
    title: 'Käyttöehdot | LaplandStays',
    description:
      'Laplandstays.comin käyttöehdot: Lapeso Oy:n ylläpitämä toimituksellinen affiliate-matkaopas. Varaukset hoitavat kumppanialustat, eivät me.',
  },
  de: {
    title: 'Nutzungsbedingungen | LaplandStays',
    description:
      'Nutzungsbedingungen für laplandstays.com: ein redaktioneller Affiliate-Reiseführer von Lapeso Oy. Buchungen laufen über Partnerplattformen, nicht über uns.',
  },
  ja: {
    title: '利用規約。LaplandStays',
    description:
      'laplandstays.comの利用規約：Lapeso Oyが運営する編集型アフィリエイト旅行ガイド。予約は当サイトではなく提携プラットフォームが取り扱います。',
  },
  es: {
    title: 'Términos de uso | LaplandStays',
    description:
      'Términos de uso de laplandstays.com: una guía de viaje editorial de afiliados operada por Lapeso Oy. Las reservas las gestionan plataformas asociadas, no nosotros.',
  },
  'pt-BR': {
    title: 'Termos de uso | LaplandStays',
    description:
      'Termos de uso do laplandstays.com: um guia de viagem editorial de afiliados operado pela Lapeso Oy. As reservas são feitas por plataformas parceiras, não por nós.',
  },
  'zh-CN': {
    title: '使用条款。LaplandStays',
    description:
      'laplandstays.com 使用条款：由 Lapeso Oy 运营的编辑型联盟旅行指南。预订由合作平台处理，而非本站。',
  },
  ko: {
    title: '이용약관. LaplandStays',
    description:
      'laplandstays.com 이용약관: Lapeso Oy가 운영하는 에디토리얼 제휴 여행 가이드입니다. 예약은 저희가 아닌 파트너 플랫폼에서 처리합니다.',
  },
  fr: {
    title: "Conditions d'utilisation | LaplandStays",
    description:
      "Conditions d'utilisation de laplandstays.com : un guide de voyage éditorial affilié exploité par Lapeso Oy. Les réservations sont gérées par des plateformes partenaires, pas par nous.",
  },
  it: {
    title: 'Termini di utilizzo | LaplandStays',
    description:
      'Termini di utilizzo di laplandstays.com: una guida di viaggio editoriale in affiliazione gestita da Lapeso Oy. Le prenotazioni sono gestite da piattaforme partner, non da noi.',
  },
  nl: {
    title: 'Gebruiksvoorwaarden | LaplandStays',
    description:
      'Gebruiksvoorwaarden van laplandstays.com: een redactionele affiliate-reisgids beheerd door Lapeso Oy. Boekingen lopen via partnerplatforms, niet via ons.',
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
