import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SEO from '../components/SEO'
import { useLang, useLocalePath, pick } from '../i18n/useLang'

const COPY = {
  en: {
    title: 'Page not found, LaplandStays',
    description: 'The page you were looking for has moved or does not exist.',
    h1: 'Lost in Lapland',
    body: 'The page you were looking for has drifted off into the Arctic night. Try one of the routes below, they all lead somewhere warm.',
    home: 'Home',
    browseTypes: 'Browse property types',
  },
  fi: {
    title: 'Sivua ei löytynyt, LaplandStays',
    description: 'Etsimäsi sivu on siirretty tai sitä ei ole olemassa.',
    h1: 'Eksyksissä Lapissa',
    body: 'Etsimäsi sivu on ajautunut arktiseen yöhön. Kokeile alla olevia reittejä, ne kaikki vievät jonnekin lämpimään.',
    home: 'Etusivu',
    browseTypes: 'Selaa majoitustyyppejä',
  },
  de: {
    title: 'Seite nicht gefunden, LaplandStays',
    description: 'Die gesuchte Seite wurde verschoben oder existiert nicht.',
    h1: 'Verloren in Lappland',
    body: 'Die Seite, die Sie suchen, ist in die arktische Nacht entschwunden. Versuchen Sie einen der Wege unten, sie führen alle ins Warme.',
    home: 'Start',
    browseTypes: 'Unterkunftsarten durchsuchen',
  },
  ja: {
    title: 'ページが見つかりません。LaplandStays',
    description: 'お探しのページは移動したか、存在しません。',
    h1: 'ラップランドで迷子',
    body: 'お探しのページは北極の夜に流れていってしまいました。下のリンクをお試しください。すべて暖かい場所へつながっています。',
    home: 'ホーム',
    browseTypes: '宿泊タイプを見る',
  },
  es: {
    title: 'Página no encontrada, LaplandStays',
    description: 'La página que busca se ha movido o no existe.',
    h1: 'Perdido en Laponia',
    body: 'La página que buscaba se ha desvanecido en la noche ártica. Pruebe una de las rutas siguientes, todas llevan a un lugar cálido.',
    home: 'Inicio',
    browseTypes: 'Ver tipos de alojamiento',
  },
  'pt-BR': {
    title: 'Página não encontrada, LaplandStays',
    description: 'A página que você procura foi movida ou não existe.',
    h1: 'Perdido na Lapônia',
    body: 'A página que você procurava se perdeu na noite ártica. Tente um dos caminhos abaixo, todos levam a algum lugar quente.',
    home: 'Início',
    browseTypes: 'Ver tipos de hospedagem',
  },
  'zh-CN': {
    title: '页面未找到。LaplandStays',
    description: '您要查找的页面已移动或不存在。',
    h1: '迷失在拉普兰',
    body: '您要查找的页面已飘入北极之夜。请尝试下方的链接。每一条都通向温暖的地方。',
    home: '首页',
    browseTypes: '浏览住宿类型',
  },
  ko: {
    title: '페이지를 찾을 수 없습니다. LaplandStays',
    description: '찾으시는 페이지가 이동되었거나 존재하지 않습니다.',
    h1: '라플란드에서 길을 잃었습니다',
    body: '찾으시는 페이지가 북극의 밤 속으로 흘러가 버렸습니다. 아래 경로 중 하나를 이용해 보세요. 모두 따뜻한 곳으로 이어집니다.',
    home: '홈',
    browseTypes: '숙소 유형 둘러보기',
  },
  fr: {
    title: 'Page introuvable, LaplandStays',
    description: 'La page que vous cherchez a été déplacée ou n\'existe pas.',
    h1: 'Perdu·e en Laponie',
    body: "La page que vous cherchiez s'est égarée dans la nuit arctique. Empruntez l'un des chemins ci-dessous, ils mènent tous vers le chaud.",
    home: 'Accueil',
    browseTypes: "Voir les types d'hébergement",
  },
  it: {
    title: 'Pagina non trovata, LaplandStays',
    description: 'La pagina che sta cercando è stata spostata o non esiste.',
    h1: 'Persi in Lapponia',
    body: 'La pagina che cercava si è dispersa nella notte artica. Provi uno dei percorsi qui sotto, portano tutti in un luogo caldo.',
    home: 'Home',
    browseTypes: 'Vedi i tipi di alloggio',
  },
  nl: {
    title: 'Pagina niet gevonden, LaplandStays',
    description: 'De pagina die u zoekt is verplaatst of bestaat niet.',
    h1: 'Verdwaald in Lapland',
    body: 'De pagina die u zocht is afgedreven in de arctische nacht. Probeer een van de routes hieronder, ze leiden allemaal naar iets warms.',
    home: 'Home',
    browseTypes: 'Accommodatietypes bekijken',
  },
}

export default function NotFound() {
  const lang = useLang()
  const to = useLocalePath()
  const c = pick(lang, COPY.en, COPY.fi, COPY.de, COPY.ja, COPY.es, COPY['pt-BR'], COPY['zh-CN'], COPY.ko, COPY.fr, COPY.it, COPY.nl)

  // 404 pages must not be indexed. SEO.tsx doesn't manage robots, so inject
  // the meta here (same direct-head pattern) and remove it on route change.
  useEffect(() => {
    const el = document.createElement('meta')
    el.setAttribute('name', 'robots')
    el.setAttribute('content', 'noindex')
    document.head.appendChild(el)
    return () => {
      el.remove()
    }
  }, [])

  return (
    <>
      <SEO
        title={c.title}
        description={c.description}
        canonicalPath="/404"
      />
      <section className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 bg-night text-white">
        <div className="max-w-xl text-center">
          <p className="text-pink uppercase tracking-[0.3em] text-sm font-semibold mb-3">404</p>
          <h1 className="font-heading text-6xl sm:text-7xl tracking-wide mb-4">{c.h1}</h1>
          <p className="text-white/70 mb-8 leading-relaxed">
            {c.body}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to={to('/')}
              className="inline-flex items-center justify-center gap-2 bg-pink hover:bg-pink/90 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              style={{ background: '#EC4899' }}
            >
              {c.home} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to={to('/property-types')}
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-pink text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              {c.browseTypes}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
