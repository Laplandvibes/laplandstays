import { Link } from 'react-router-dom'
import { ShieldCheck } from 'lucide-react'
import { useLocalePath } from '../i18n/useLang'
import { useCopy } from '../locales/copy'

interface ReviewedByProps {
  /** Last review date in human format, e.g. "April 2026". */
  date?: string
  /** Optional override of the default reviewer name. */
  reviewer?: string
  /** Visual variant, `dark` for white-bg pages, `light` for night-bg pages. */
  variant?: 'dark' | 'light'
  className?: string
}

/**
 * Visible E-E-A-T attribution stamp shown on guide-style pages right under
 * the H1 / intro. Pairs with the Person `author` in the page's Article
 * JSON-LD so search engines can connect the visible byline to the structured
 * author entity.
 */
export default function ReviewedBy({
  date,
  reviewer = 'Vesa Pesola',
  variant = 'dark',
  className = '',
}: ReviewedByProps) {
  const to = useLocalePath()
  const c = useCopy().reviewedBy
  const dim = variant === 'light' ? 'text-white/55' : 'text-charcoal/55'
  const strong = variant === 'light' ? 'text-white/85' : 'text-charcoal/80'
  const link = variant === 'light' ? 'text-pink hover:text-pink/80' : 'text-pink hover:text-pink/80'
  const border = variant === 'light' ? 'border-white/15' : 'border-pink/20'
  const bg = variant === 'light' ? 'bg-white/[0.04]' : 'bg-pink/[0.04]'

  const reviewedLabel = c.reviewedLabel
  const policyLabel = c.policyLabel
  const resolvedDate = date ?? c.resolvedDate

  return (
    <div
      className={`inline-flex items-center gap-2.5 ${bg} border ${border} rounded-2xl px-4 py-1.5 ${className}`}
      role="note"
      aria-label="Editorial attribution"
    >
      <ShieldCheck className="w-3.5 h-3.5 text-pink shrink-0" />
      <p className={`text-[12px] ${dim} font-medium leading-snug`}>
        <span className="whitespace-nowrap">
          {reviewedLabel} <span className={`${strong} font-semibold`}>{reviewer}</span>
        </span>
        <span aria-hidden="true"> · </span>
        <span className="whitespace-nowrap">{resolvedDate}</span>
        <span aria-hidden="true"> · </span>
        <Link
          to={to('/editorial-policy')}
          className={`${link} font-semibold underline-offset-2 hover:underline whitespace-nowrap`}
        >
          {policyLabel}
        </Link>
      </p>
    </div>
  )
}
