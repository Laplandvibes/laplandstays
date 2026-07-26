/**
 * EditorsPickChip — ansaittu toimituksellinen kärkimerkintä. EI MYYNNISSÄ.
 *
 * Tämä on tuotteistuksen (Vesa 2026-07-26) toinen puoli: nimettyjen kohteiden
 * isot ilmaiset pinnat saivat kärkeensä myytävän Esittelykumppani-paikan
 * (`FeaturedPartnerSlot`), ja toimituksellinen kärkivalinta kutistui
 * normaalikortin kokoiseksi chipiksi. Chipin arvo on nimenomaan se ettei sitä
 * voi ostaa — jos sen saisi rahalla, koko sivuston suositus menettäisi
 * merkityksensä ja samalla myytävän paikan hinnan peruste.
 *
 * Valinta johdetaan datasta: `bestGoogleRated` (src/data/properties.ts)
 * palauttaa pinnan parhaan AIDON Google-arvion (tasapelissä suurempi
 * arvostelumäärä). Chippiä EI renderöidä kun kelvollista arviodataa on alle
 * kahdella kohteella — eikä myöskään jos jokin pinnan kortti näyttää
 * korkeampaa arviota kuin voittaja.
 *
 * `note` on NÄKYVÄ perustelurivi ("Sivun paras Google-arvio · Tarkistettu
 * 26.7.2026"). Väite "pinnan paras arvio" on tarkistettavissa vain jos lukija
 * näkee myös muiden korttien arviot (`GoogleRatingRow` renderöidään pinnan
 * JOKAISEEN korttiin) ja tietää milloin luvut on haettu.
 *
 * Visuaalinen ero maksettuun paikkaan on tarkoituksellinen: maksettu = pinkki
 * "Mainos"-pilleri, ansaittu = lumi/amber ilman pinkkiä.
 */
import { Award } from 'lucide-react'

export default function EditorsPickChip({
  label,
  reason,
  note,
  className,
}: {
  label: string
  reason: string
  /** Näkyvä perustelu, esim. "Sivun paras Google-arvio · Tarkistettu 26.7.2026". */
  note?: string
  className?: string
}) {
  return (
    <div className={['flex flex-col gap-1 items-start', className].filter(Boolean).join(' ')}>
      <span
        title={reason}
        data-editors-pick="earned"
        className={[
          // `relative` ankkuroi sr-only-absoluutin tähän pilleriin: ilman sitä se
          // ankkuroituisi ylempään positioituun esi-isään (Lomarengas-oppi 25.7.).
          'relative inline-flex items-center gap-1.5 self-start rounded-full',
          'bg-snow text-night px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em]',
          'ring-1 ring-amber/60 shadow-sm',
        ].join(' ')}
      >
        <Award className="w-3 h-3 text-amber" aria-hidden="true" />
        {label}
        <span className="sr-only"> ({reason})</span>
      </span>
      {note && (
        <span data-editors-pick-note="" className="text-[11px] leading-snug text-white/65">
          {note}
        </span>
      )}
    </div>
  )
}
