import { Link } from 'react-router-dom'
import { ShieldCheck } from 'lucide-react'

interface ReviewedByProps {
  /** Last review date in human format, e.g. "April 2026". */
  date?: string
  /** Optional override of the default reviewer name. */
  reviewer?: string
  /** Visual variant — `dark` for white-bg pages, `light` for night-bg pages. */
  variant?: 'dark' | 'light'
  className?: string
}

/**
 * Visible E-E-A-T attribution stamp shown on guide-style pages right under
 * the H1 / intro. Pairs with the Person `author` in the page's Article
 * JSON-LD so search engines can connect the visible byline to the structured
 * author entity.
 *
 * Reviewer defaults to "Vesa Pesola" who edits and operates Lapeso Oy
 * from Finnish Lapland. Date defaults to "April 2026" — override per page.
 */
export default function ReviewedBy({
  date = 'April 2026',
  reviewer = 'Vesa Pesola',
  variant = 'dark',
  className = '',
}: ReviewedByProps) {
  const dim = variant === 'light' ? 'text-white/55' : 'text-charcoal/55'
  const strong = variant === 'light' ? 'text-white/85' : 'text-charcoal/80'
  const link = variant === 'light' ? 'text-pink hover:text-pink/80' : 'text-pink hover:text-pink/80'
  const border = variant === 'light' ? 'border-white/15' : 'border-pink/20'
  const bg = variant === 'light' ? 'bg-white/[0.04]' : 'bg-pink/[0.04]'

  return (
    <div
      className={`inline-flex items-center gap-2.5 ${bg} border ${border} rounded-full px-4 py-1.5 ${className}`}
      role="note"
      aria-label="Editorial attribution"
    >
      <ShieldCheck className="w-3.5 h-3.5 text-pink shrink-0" />
      <p className={`text-[12px] ${dim} font-medium leading-snug`}>
        Reviewed by <span className={`${strong} font-semibold`}>{reviewer}</span> · {date} ·{' '}
        <Link to="/editorial-policy" className={`${link} font-semibold underline-offset-2 hover:underline`}>
          editorial policy
        </Link>
      </p>
    </div>
  )
}
