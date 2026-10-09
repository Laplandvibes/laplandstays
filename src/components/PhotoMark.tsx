import { useLang, type Lang } from '../i18n/useLang'
import { PHOTO_CREDITS, type PlaceNames } from '../data/photoCredits'

/**
 * Valokuvan merkintä (kuvavaihto 9.10.2026): "Kuvassa: paikka" ja CC BY / CC BY-SA -kuvista tekijä + lisenssi
 * linkkeineen. Pieni, aina kuvan oikeassa alakulmassa, tumma levy luettavuuteen (valkoinen text-white
 * bg-black/60 -levyllä on puhtaan valkoisen kuvan päälläkin ≥ 5,7:1).
 *
 * CC BY ja CC BY-SA vaativat tekijän, lisenssin nimen ja linkin lisenssiin. Linkki tiedostosivulle kertoo
 * alkuperäisen kuvauksen. CC0/PD-kuvilla ei ole tekijäriviä, vain paikka kun se on varmistettu.
 * `rel` on `noopener` ilman `noreferrer`ia (verkoston sääntö), lisenssille `license`.
 * Kuvan päälle EI saa laittaa tätä linkin sisään: ei sisäkkäisiä linkkejä (kortit ovat <div>).
 */
const PICTURED: Record<Lang, string> = {
  en: 'Pictured: ', fi: 'Kuvassa: ', de: 'Im Bild: ', ja: '写真：', es: 'En la foto: ', 'pt-BR': 'Na foto: ',
  'zh-CN': '圖：', ko: '사진: ', fr: 'Sur la photo : ', it: 'Nella foto: ', nl: 'Op de foto: ', sv: 'På bilden: ',
}
const BY: Record<Lang, string> = {
  en: 'Photo: ', fi: 'Kuva: ', de: 'Foto: ', ja: '撮影：', es: 'Foto: ', 'pt-BR': 'Foto: ',
  'zh-CN': '攝影：', ko: '촬영: ', fr: 'Photo : ', it: 'Foto: ', nl: 'Foto: ', sv: 'Foto: ',
}
const LINK = 'lv-tap after:-z-10 underline decoration-white/50 underline-offset-2 hover:decoration-white'

const placeText = (p: PlaceNames, lang: Lang) => (lang === 'ja' || lang === 'ko' || lang === 'zh-CN' ? p[lang] : undefined) ?? p.latin

export default function PhotoMark({ id, className = '' }: { id: string; className?: string }) {
  const lang = useLang()
  const e = PHOTO_CREDITS[id]
  if (!e || (!e.credit && !e.place)) return null
  return (
    <span className={`block w-fit max-w-full rounded bg-black/60 px-1.5 py-[3px] text-right text-[10px] font-normal normal-case tracking-normal leading-tight text-white ${className}`}>
      {e.place && <span className="block">{PICTURED[lang] + placeText(e.place, lang)}</span>}
      {e.credit && (
        <span className="block">
          {BY[lang]}
          <a href={e.credit.sourceUrl} target="_blank" rel="noopener" className={LINK}>
            {e.credit.author}
          </a>
          {', '}
          <a href={e.credit.licenseUrl} target="_blank" rel="license noopener" className={`${LINK} whitespace-nowrap`}>
            {e.credit.license}
          </a>
        </span>
      )}
    </span>
  )
}
