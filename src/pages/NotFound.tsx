import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page not found — LaplandStays"
        description="The page you were looking for has moved or does not exist."
        canonicalPath="/404"
      />
      <section className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 bg-night text-white">
        <div className="max-w-xl text-center">
          <p className="text-pink uppercase tracking-[0.3em] text-sm font-semibold mb-3">404</p>
          <h1 className="font-heading text-6xl sm:text-7xl tracking-wide mb-4">Lost in Lapland</h1>
          <p className="text-white/70 mb-8 leading-relaxed">
            The page you were looking for has drifted off into the Arctic night. Try one of the
            routes below — they all lead somewhere warm.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-pink hover:bg-pink/90 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              style={{ background: '#EC4899' }}
            >
              Home <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/property-types"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-pink text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Browse property types
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
