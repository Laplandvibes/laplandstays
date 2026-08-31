import { Info } from 'lucide-react'
import { useLang, type Lang } from '../i18n/useLang'

interface AffiliateDisclosureProps {
  /** Override the auto-detected language. If omitted, uses the current route's lang. */
  lang?: Lang
  className?: string
  /** `compact` for inline-near-CTA placement, `full` for footer/page-top blocks. */
  variant?: 'compact' | 'full'
}

const TEXT: Record<Lang, { compact: string; full: string }> = {
  fi: {
    compact: 'Kumppanuuslinkkejä: saamme pienen provision varauksistasi ilman lisäkustannuksia.',
    full: 'Tämä sivu sisältää kumppanuuslinkkejä. Kun varaat näiden kautta, saamme pienen provision ilman lisäkustannuksia sinulle.',
  },
  en: {
    compact: 'Affiliate links: we earn a small commission at no extra cost when you book.',
    full: 'This page contains affiliate links. If you book through these links, LaplandStays may receive a commission at no extra cost to you.',
  },
  de: {
    compact: 'Partnerlinks: wir erhalten eine kleine Provision ohne Mehrkosten, wenn Sie buchen.',
    full: 'Diese Seite enthält Partnerlinks. Wenn Sie darüber buchen, erhält LaplandStays möglicherweise eine Provision ohne Mehrkosten für Sie.',
  },
  ja: {
    compact: 'アフィリエイトリンク：ご予約いただくと追加費用なしで手数料を受け取ります。',
    full: 'このページにはアフィリエイトリンクが含まれます。リンク経由でご予約いただいた場合、追加費用なしでLaplandStaysに手数料が支払われることがあります。',
  },
  es: {
    compact: 'Enlaces de afiliación: recibimos una pequeña comisión sin coste adicional cuando reserva.',
    full: 'Esta página contiene enlaces de afiliación. Si reserva a través de ellos, LaplandStays puede recibir una comisión sin coste adicional para usted.',
  },
  'pt-BR': {
    compact: 'Links de afiliados: recebemos uma pequena comissão sem custo extra quando você reserva.',
    full: 'Esta página contém links de afiliados. Se você reservar por eles, o LaplandStays pode receber uma comissão sem custo adicional para você.',
  },
  'zh-CN': {
    compact: '联盟链接：您预订时我们获得少量佣金，您本人不会有额外费用。',
    full: '本页面包含联盟链接。如果您通过这些链接预订，LaplandStays可能获得佣金，您本人不会产生额外费用。',
  },
  ko: {
    compact: '제휴 링크：예약 시 추가 비용 없이 소액의 수수료를 받습니다.',
    full: '이 페이지에는 제휴 링크가 포함되어 있습니다. 이 링크를 통해 예약하시면 LaplandStays가 추가 비용 없이 수수료를 받을 수 있습니다.',
  },
  fr: {
    compact: "Liens d'affiliation: nous percevons une petite commission sans coût supplémentaire lorsque vous réservez.",
    full: "Cette page contient des liens d'affiliation. Si vous réservez via ces liens, LaplandStays peut percevoir une commission sans coût supplémentaire pour vous.",
  },
  it: {
    compact: 'Link di affiliazione: riceviamo una piccola commissione senza costi aggiuntivi quando prenota.',
    full: 'Questa pagina contiene link di affiliazione. Se prenota tramite questi link, LaplandStays può ricevere una commissione senza costi aggiuntivi per Lei.',
  },
  nl: {
    compact: 'Affiliate links: we ontvangen een kleine commissie zonder extra kosten wanneer u boekt.',
    full: 'Deze pagina bevat affiliate links. Als u via deze links boekt, kan LaplandStays een commissie ontvangen zonder extra kosten voor u.',
  },
  sv: {
    compact: 'Affiliatelänkar: vi får en liten provision utan extra kostnad när du bokar.',
    full: 'Den här sidan innehåller affiliatelänkar. Om du bokar via dem kan LaplandStays få en provision utan extra kostnad för dig.',
  },
}

export default function AffiliateDisclosure({
  lang,
  className = '',
  variant = 'full',
}: AffiliateDisclosureProps) {
  const auto = useLang()
  const resolved: Lang = lang ?? auto
  const text = TEXT[resolved][variant]

  return (
    <p
      className={`flex items-center justify-center gap-2 text-xs text-charcoal/70 ${className}`}
      role="note"
    >
      <Info className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
      <span>{text}</span>
    </p>
  )
}
