import { ArrowRight, ShieldCheck, Compass, Bed } from 'lucide-react'
import { HOTEL_SEARCH_FOR } from '../lib/affiliate'
import { trackAffiliateClick } from '../lib/analytics'
import { useLang, pick } from '../i18n/useLang'

const COPY = {
  en: {
    eyebrow: 'Why Lapland, why now',
    h2: 'A Stay That Earns Its Own Memory',
    lead: 'Most travellers only get one shot at the Arctic. The right cabin turns it into the trip you talk about for a decade. Here is how we help you pick it.',
    cta: 'See available stays',
    reasons: [
      {
        title: 'Editorially curated',
        body: 'Written from inside Finnish Lapland. The forgettable properties are filtered out, what is left are the cabins, villas and lodges worth the flight.',
      },
      {
        title: 'The right kind of room',
        body: 'Glass cabin for the aurora, ski-in chalet for Levi, lakeside cottage for silence, matched to what the trip actually calls for.',
      },
      {
        title: 'Booked on trusted platforms',
        body: 'Every search opens directly with a trusted booking partner. Transparent pricing, free cancellation windows, and the protections you already know.',
      },
    ],
  },
  fi: {
    eyebrow: 'Miksi Lappi, miksi nyt',
    h2: 'Yöpyminen joka jää mieleen',
    lead: 'Useimmilla matkailijoilla on vain yksi mahdollisuus Lappiin. Oikea mökki tekee siitä matkan josta puhutaan vielä vuosikymmenen päästä. Näin autamme sinua valitsemaan sen.',
    cta: 'Katso saatavilla olevat majoitukset',
    reasons: [
      {
        title: 'Toimituksen poiminta',
        body: 'Kirjoitettu Suomen Lapista käsin. Unohdettavat kohteet on suodatettu pois, jäljelle jäävät mökit, villat ja erämaakohteet jotka ovat lennon arvoisia.',
      },
      {
        title: 'Oikea huone matkalle',
        body: 'Lasimökki revontulia varten, rinneasunto Levillä, rantamökki hiljaisuudelle, sovitettu siihen mitä matka oikeasti vaatii.',
      },
      {
        title: 'Varaus luotettavilla alustoilla',
        body: 'Jokainen haku aukeaa suoraan tunnetulla varauskumppanilla. Läpinäkyvät hinnat, maksuttomat peruutusehdot ja suojaukset jotka jo tunnet.',
      },
    ],
  },
  ja: {
    eyebrow: 'なぜラップランド、なぜ今',
    h2: '記憶に残る滞在を',
    lead: 'ほとんどの旅行者にとって、北極を訪れる機会は一度きりです。適切なロッジを選べば、10年後も語り続けたい旅になります。私たちがそのお手伝いをいたします。',
    cta: '空室のある宿泊施設を見る',
    reasons: [
      {
        title: '編集者が厳選',
        body: 'フィンランド・ラップランドの現地から執筆。印象に残らない施設は除外し、空の旅に値するロッジ、ヴィラ、ウィルダネス・ロッジだけをご紹介します。',
      },
      {
        title: '旅に合った客室',
        body: 'オーロラ用のガラスロッジ、レヴィのスキーイン・シャレー、静けさを求める湖畔のコテージ。実際に旅が求めるものに合わせてご提案します。',
      },
      {
        title: '信頼の予約プラットフォーム',
        body: 'すべての検索は信頼できる予約パートナーで直接開きます。透明な価格設定、無料キャンセル枠、そして既にご存じの安心感のある保護があります。',
      },
    ],
  },
  es: {
    eyebrow: 'Por qué Laponia, por qué ahora',
    h2: 'Un alojamiento que merece recordarse',
    lead: 'La mayoría de los viajeros solo tiene una oportunidad en el Ártico. La cabaña adecuada lo convierte en el viaje del que hablará durante una década. Así le ayudamos a elegirla.',
    cta: 'Ver alojamientos disponibles',
    reasons: [
      { title: 'Selección editorial', body: 'Escrito desde la Laponia finlandesa. Los alojamientos olvidables quedan fuera, solo permanecen las cabañas, villas y lodges que valen el vuelo.' },
      { title: 'El tipo correcto de habitación', body: 'Cabaña de cristal para la aurora, chalet ski-in para Levi, cottage junto al lago para el silencio, adaptado a lo que el viaje realmente necesita.' },
      { title: 'Reservas en plataformas de confianza', body: 'Cada búsqueda abre directamente con un socio de reservas de confianza. Precios transparentes, ventanas de cancelación gratuita y las protecciones que ya conoce.' },
    ],
  },
  'pt-BR': {
    eyebrow: 'Por que Lapônia, por que agora',
    h2: 'Uma hospedagem que merece ser lembrada',
    lead: 'A maioria dos viajantes tem só uma chance no Ártico. A cabana certa transforma isso na viagem sobre a qual você falará por uma década. Veja como te ajudamos a escolher.',
    cta: 'Ver hospedagens disponíveis',
    reasons: [
      { title: 'Curadoria editorial', body: 'Escrito de dentro da Lapônia finlandesa. As hospedagens esquecíveis ficam de fora, sobram cabanas, villas e lodges que valem o voo.' },
      { title: 'O tipo certo de quarto', body: 'Cabana de vidro para a aurora, chalé ski-in para Levi, casinha à beira do lago para o silêncio, adequado ao que a viagem realmente pede.' },
      { title: 'Reservado em plataformas confiáveis', body: 'Cada busca abre direto com um parceiro de reservas confiável. Preço transparente, janelas de cancelamento grátis e as proteções que você já conhece.' },
    ],
  },
  'zh-CN': {
    eyebrow: '为何拉普兰、为何现在',
    h2: '留下回忆的住宿',
    lead: '大多数旅行者只有一次北极之旅的机会。合适的小屋会让它成为您十年里都在讲述的旅程。我们就是这样帮您挑选的。',
    cta: '查看可订住宿',
    reasons: [
      { title: '编辑精选', body: '从芬兰拉普兰内部撰写。容易遗忘的住宿被过滤掉。留下的是值得这趟飞行的小屋、别墅和旅馆。' },
      { title: '合适的房型', body: '观赏极光的玻璃小屋、莱维的滑入式木屋、追求宁静的湖畔小屋。与旅程的真实需求相匹配。' },
      { title: '在可信平台预订', body: '每次搜索都直接打开可信的预订合作方。价格透明、有免费取消窗口,以及您已熟知的保障。' },
    ],
  },
  de: {
    eyebrow: 'Warum Lappland, warum jetzt',
    h2: 'Ein Aufenthalt, der seine eigene Erinnerung verdient',
    lead: 'Die meisten Reisenden haben nur einen Versuch in der Arktis. Die richtige Hütte macht daraus die Reise, von der Sie ein Jahrzehnt lang erzählen. So helfen wir Ihnen, sie zu wählen.',
    cta: 'Verfügbare Aufenthalte ansehen',
    reasons: [
      {
        title: 'Redaktionell kuratiert',
        body: 'Geschrieben aus Finnisch-Lappland. Die vergesslichen Häuser sind herausgefiltert, übrig bleiben die Hütten, Villen und Lodges, die den Flug wert sind.',
      },
      {
        title: 'Die richtige Art von Zimmer',
        body: 'Glashütte fürs Polarlicht, Pisten-Chalet für Levi, Hütte am See für Stille, abgestimmt auf das, was die Reise tatsächlich verlangt.',
      },
      {
        title: 'Buchung auf vertrauenswürdigen Plattformen',
        body: 'Jede Suche öffnet sich direkt bei einem vertrauenswürdigen Buchungspartner. Transparente Preise, kostenlose Stornierungsfenster und die Schutzmechanismen, die Sie bereits kennen.',
      },
    ],
  },
  ko: {
    eyebrow: '왜 라플란드, 왜 지금인가',
    h2: '오랫동안 기억되는 숙박',
    lead: '대부분의 여행자에게 북극은 단 한 번의 기회입니다. 알맞은 캐빈을 만나면 10년 뒤에도 이야기하게 될 여행이 됩니다. 그 선택을 저희가 돕습니다.',
    cta: '예약 가능한 숙소 보기',
    reasons: [
      { title: '에디터 직접 큐레이션', body: '핀란드 라플란드 현지에서 작성합니다. 기억에 남지 않는 숙소는 걸러내고, 비행기 값을 치를 가치가 있는 캐빈과 빌라, 로지만 남깁니다.' },
      { title: '여행에 꼭 맞는 객실', body: '오로라를 위한 글래스 캐빈, 레비의 스키 인 샬레, 호숫가의 고요한 코티지. 이번 여행이 진짜로 필요로 하는 형태를 골라드립니다.' },
      { title: '신뢰할 수 있는 플랫폼 예약', body: '모든 검색은 신뢰할 수 있는 예약 파트너에서 바로 열립니다. 투명한 가격, 무료 취소 가능 기간, 익숙한 보호 정책 그대로입니다.' },
    ],
  },
  fr: {
    eyebrow: 'Pourquoi la Laponie, pourquoi maintenant',
    h2: 'Un séjour qui mérite sa propre mémoire',
    lead: "La plupart des voyageurs n'auront qu'une seule chance dans l'Arctique. Le bon chalet en fait le voyage dont on parle pendant dix ans. Voici comment nous vous aidons à le choisir.",
    cta: 'Voir les séjours disponibles',
    reasons: [
      { title: 'Sélection éditoriale', body: 'Écrit depuis la Laponie finlandaise. Les adresses oubliables sont écartées, il reste les chalets, villas et lodges qui valent vraiment le vol.' },
      { title: 'La bonne chambre pour le voyage', body: "Chalet en verre pour les aurores, chalet ski-in pour Levi, cottage au bord du lac pour le silence, accordé à ce que le séjour réclame réellement.", },
      { title: 'Réservé sur des plateformes de confiance', body: "Chaque recherche s'ouvre directement chez un partenaire de réservation reconnu. Prix transparents, fenêtres d'annulation gratuite et les protections que vous connaissez déjà.", },
    ],
  },
  it: {
    eyebrow: 'Perché la Lapponia, perché ora',
    h2: 'Un soggiorno che merita di restare',
    lead: "La maggior parte dei viaggiatori ha una sola occasione in Artico. Lo chalet giusto trasforma quel viaggio in un racconto che durerà dieci anni. Le mostriamo come sceglierlo.",
    cta: 'Vedi i soggiorni disponibili',
    reasons: [
      { title: 'Selezione editoriale', body: 'Scritto dalla Lapponia finlandese. Le strutture dimenticabili vengono escluse, restano chalet, ville e lodge che valgono il volo.' },
      { title: 'Il tipo giusto di camera', body: "Chalet di vetro per l'aurora, chalet ski-in a Levi, cottage in riva al lago per il silenzio, accordato a ciò che il viaggio chiede davvero.", },
      { title: 'Prenotato su piattaforme affidabili', body: 'Ogni ricerca si apre direttamente presso un partner di prenotazione affidabile. Prezzi trasparenti, finestre di cancellazione gratuita e le tutele che già conosce.' },
    ],
  },
  nl: {
    eyebrow: 'Waarom Lapland, waarom nu',
    h2: 'Een verblijf dat zijn eigen herinnering verdient',
    lead: 'De meeste reizigers krijgen maar één kans op het Noordpoolgebied. De juiste cabin maakt er de reis van waar u tien jaar over praat. Zo helpen wij u kiezen.',
    cta: 'Beschikbare verblijven bekijken',
    reasons: [
      { title: 'Redactioneel samengesteld', body: 'Geschreven vanuit Fins Lapland. De vergeetbare adressen vallen af, overblijven de cabins, villa\'s en lodges die de vlucht waard zijn.' },
      { title: 'De juiste kamer voor de reis', body: 'Glascabin voor het noorderlicht, ski-in chalet voor Levi, cottage aan het meer voor de stilte, afgestemd op wat de reis werkelijk vraagt.' },
      { title: 'Geboekt op vertrouwde platforms', body: 'Elke zoekopdracht opent direct bij een vertrouwde boekingspartner. Transparante prijzen, gratis annuleringsvensters en de bescherming die u al kent.' },
    ],
  },
  sv: {
    eyebrow: 'Varför Lappland, varför nu',
    h2: 'Ett boende som blir ett minne i sig',
    lead: 'De flesta resenärer får bara ett försök i Arktis. Rätt stuga gör det till resan du berättar om i tio år. Så här hjälper vi dig att välja den.',
    cta: 'Se lediga boenden',
    reasons: [
      { title: 'Redaktionellt utvalt', body: 'Skrivet inifrån finska Lappland. De glömda boendena sållas bort, kvar blir stugorna, villorna och lodgerna som är värda flygresan.' },
      { title: 'Rätt sorts rum för resan', body: 'Glasstuga för norrskenet, ski-in-chalet för Levi, sjöstuga för tystnaden, matchat mot vad resan faktiskt kräver.' },
      { title: 'Bokat hos pålitliga plattformar', body: 'Varje sökning öppnas direkt hos en pålitlig bokningspartner. Transparenta priser, fria avbokningsfönster och skyddet du redan känner till.' },
    ],
  },
}

const ICONS = [Compass, Bed, ShieldCheck]

export default function WhyBookWithUs() {
  const lang = useLang()
  const c = pick(lang, COPY.en, COPY.fi, COPY.de, COPY.ja, COPY.es, COPY['pt-BR'], COPY['zh-CN'], COPY.ko, COPY.fr, COPY.it, COPY.nl, COPY.sv)
  const onClick = () => {
    trackAffiliateClick('lodging', 'why_book_cta', HOTEL_SEARCH_FOR(lang).lapland)
  }

  return (
    // Mobile is deliberately COMPACT: this section is pure reassurance copy, and
    // as three tower cards it filled ~3 phone screens without giving the reader
    // anything concrete (Vesa 2026-08-09). Below md each reason is an icon-left
    // ROW (network rule: rivi > tornikortti), md+ keeps the 3-card grid.
    <section className="py-14 sm:py-20 lg:py-28 px-4 sm:px-6 bg-gradient-to-b from-white to-pink/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-14 max-w-3xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-xs sm:text-sm font-semibold mb-3">{c.eyebrow}</p>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading text-night tracking-wide">
            {c.h2}
          </h2>
          <p className="mt-4 sm:mt-5 text-charcoal/70 text-base sm:text-lg leading-relaxed">
            {c.lead}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12">
          {c.reasons.map((r, i) => {
            const Icon = ICONS[i] ?? Compass
            return (
              <div
                key={r.title}
                className="bg-white rounded-2xl p-5 md:p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-pink/30 transition-all duration-300 flex items-start gap-4 md:block"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-pink/10 flex items-center justify-center shrink-0 md:mb-5">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-pink" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl md:text-2xl font-heading text-night tracking-wide mb-1 md:mb-3">{r.title}</h3>
                  <p className="text-charcoal/70 leading-relaxed text-sm md:text-base">{r.body}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <a
            href={HOTEL_SEARCH_FOR(lang).lapland}
            target="_blank"
            rel="sponsored nofollow noopener"
            onClick={onClick}
            className="inline-flex items-center gap-3 bg-pink hover:bg-pink/90 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 text-sm uppercase tracking-widest shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            {c.cta}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
