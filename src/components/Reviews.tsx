import { useLang, pick } from '../i18n/useLang'

const COPY = {
  en: {
    eyebrow: 'What you come for',
    h2: 'The Three Things Travellers Remember',
    lead: 'Whatever else you plan, huskies, skiing, reindeer, fine dining, these are the things guests write home about first.',
    items: [
      {
        tag: 'The quiet',
        headline: 'No hum. No traffic. No neighbour.',
        body: 'Step onto the terrace after dark and the world simply stops. Snow creaks underfoot, the sky, far from any street light, is thick with stars, and the silence is so complete your ears ring. The first night it almost startles you. By the third, you won’t want to give it back.',
      },
      {
        tag: 'The warmth',
        headline: 'A sauna, every single night.',
        body: 'You come in from the cold and the stove is already glowing. Steam rises, snow glitters past the window, and the day melts off your shoulders. Private saunas are the default here, not a luxury upsell, and by the second evening, it’s the part of the day you plan everything else around.',
      },
      {
        tag: 'The sky',
        headline: 'Aurora alarms and glass ceilings.',
        body: 'An alert hums in the small hours. You pull the duvet up to your chin and watch green light ripple across the glass above the bed. From September to April the Arctic sky is part of the stay, and the right room means you never have to step into the cold to see it.',
      },
    ],
  },
  fi: {
    eyebrow: 'Mitä tulet hakemaan',
    h2: 'Kolme asiaa jotka matkailijat muistavat',
    lead: 'Suunnittelet sitten mitä tahansa, huskeja, hiihtoa, poroja, hienoa ruokaa, nämä ovat asiat joista vieraat kirjoittavat kotiin ensimmäisenä.',
    items: [
      {
        tag: 'Hiljaisuus',
        headline: 'Ei huminaa. Ei liikennettä. Ei naapuria.',
        body: 'Astut pimeällä terassille ja maailma pysähtyy. Lumi narskuu askelten alla, kaukana katuvaloista taivas on sakeanaan tähtiä, ja hiljaisuus on niin täydellinen, että korvissa soi. Ensimmäisenä iltana sitä melkein säikähtää. Kolmantena et halua siitä enää luopua.',
      },
      {
        tag: 'Lämpö',
        headline: 'Sauna joka ikinen ilta.',
        body: 'Tulet pakkasesta sisään ja kiuas hehkuu jo. Löyly nousee, lumi kimaltaa ikkunan takana ja päivän kylmyys sulaa hartioista. Oma sauna on täällä vakiona, ei ylellisyyttä lisämaksusta, ja toisena iltana huomaat suunnittelevasi koko päivää sen ympärille.',
      },
      {
        tag: 'Taivas',
        headline: 'Revontulihälytyksiä ja lasikattoja.',
        body: 'Hälytys herättää keskellä yötä. Vedät peiton leukaan asti ja katsot, kun vihreä valo väreilee lasikaton yli suoraan sängyn yläpuolella. Syyskuusta huhtikuuhun arktinen taivas kuuluu majoitukseen, ja oikeassa huoneessa sitä ei tarvitse lähteä pakkaseen katsomaan.',
      },
    ],
  },
  ja: {
    eyebrow: '訪れる理由',
    h2: '旅行者が覚えている3つのこと',
    lead: 'ハスキー、スキー、トナカイ、グルメ料理。他に何を計画しても、お客様が真っ先に家族に書き送るのはこの3つです。',
    items: [
      {
        tag: '静けさ',
        headline: '機械音なし。交通音なし。隣人なし。',
        body: '日が暮れてテラスに出ると、世界が止まります。足元で雪がきしみ、街灯から遠く離れた空には星が満ちて、耳鳴りがするほど完全な静けさに包まれる。最初の夜は少し驚くほどです。3日目には、もう手放したくなくなります。',
      },
      {
        tag: '温もり',
        headline: '毎晩、サウナ。',
        body: '寒さの中から戻ると、ストーブはもう赤く灯っています。蒸気が立ちのぼり、窓の外では雪がきらめき、一日の冷えが肩から溶けていく。ここでは専用サウナは追加料金の贅沢ではなく標準装備。2日目の夜には、一日の予定をサウナ中心に組み立てている自分に気づくはずです。',
      },
      {
        tag: '空',
        headline: 'オーロラ通知とガラス天井。',
        body: '深夜、アラームがそっと鳴ります。羽毛布団を顎まで引き上げ、ベッドの真上のガラス越しに緑の光が揺らめくのを眺める。9月から4月まで、北極の空は滞在の一部です。適切な客室なら、寒さの中へ出ることなくその光に出会えます。',
      },
    ],
  },
  es: {
    eyebrow: 'A lo que vienes',
    h2: 'Las tres cosas que los viajeros recuerdan',
    lead: 'Planee lo que planee, huskies, esquí, renos, alta cocina, esto es lo primero que los huéspedes cuentan al volver a casa.',
    items: [
      { tag: 'El silencio', headline: 'Sin zumbido. Sin tráfico. Sin vecinos.', body: 'Sale a la terraza de noche y el mundo se detiene. La nieve cruje bajo los pies, lejos de cualquier farola el cielo está cuajado de estrellas, y el silencio es tan completo que le zumban los oídos. La primera noche casi asusta. A la tercera, no querrá devolverlo.' },
      { tag: 'El calor', headline: 'Una sauna, cada noche.', body: 'Entra del frío y la estufa ya está encendida. Sube el vapor, la nieve brilla tras la ventana y el día se le derrite de los hombros. Aquí la sauna privada es el estándar, no un extra de lujo, y a la segunda noche organizará el día entero en torno a ella.' },
      { tag: 'El cielo', headline: 'Avisos de aurora y techos de cristal.', body: 'Una alerta suena de madrugada. Se sube el edredón hasta la barbilla y mira cómo la luz verde ondea sobre el techo de cristal, justo encima de la cama. De septiembre a abril el cielo ártico forma parte de la estancia, y con la habitación adecuada no hace falta salir al frío para verlo.' },
    ],
  },
  'pt-BR': {
    eyebrow: 'O motivo da viagem',
    h2: 'As três coisas que os viajantes lembram',
    lead: 'Não importa o que mais você planeje, huskies, esqui, renas, alta gastronomia, essas são as coisas que os hóspedes contam primeiro ao voltar pra casa.',
    items: [
      { tag: 'O silêncio', headline: 'Sem zunido. Sem trânsito. Sem vizinho.', body: 'Você sai no terraço à noite e o mundo para. A neve range sob os pés, longe de qualquer poste o céu fica coalhado de estrelas, e o silêncio é tão completo que os ouvidos zumbem. Na primeira noite quase assusta. Na terceira, você não vai querer devolver.' },
      { tag: 'O calor', headline: 'Uma sauna, toda noite.', body: 'Você entra do frio e o fogão da sauna já está aceso. O vapor sobe, a neve brilha do lado de fora da janela e o dia derrete dos seus ombros. Aqui a sauna privativa é padrão, não um upsell de luxo, e na segunda noite você já organiza o dia inteiro em volta dela.' },
      { tag: 'O céu', headline: 'Alertas de aurora e tetos de vidro.', body: 'Um alerta toca de madrugada. Você puxa o edredom até o queixo e assiste à luz verde ondulando pelo teto de vidro, bem em cima da cama. De setembro a abril o céu ártico faz parte da estadia, e no quarto certo você nem precisa sair no frio para ver.' },
    ],
  },
  'zh-CN': {
    eyebrow: '您为何而来',
    h2: '旅行者记住的3件事',
    lead: '无论您计划什么。哈士奇、滑雪、驯鹿、精致餐饮。这些是客人回到家里首先要说起的事。',
    items: [
      { tag: '寂静', headline: '没有嗡鸣。没有车流。没有邻居。', body: '入夜后走上露台,世界仿佛静止。脚下积雪咯吱作响,远离路灯的夜空缀满星星。寂静完整得让耳朵嗡嗡作响。第一晚几乎会被它吓到;到第三晚,您已舍不得放手。' },
      { tag: '温暖', headline: '每个晚上,都有桑拿。', body: '从严寒中回到屋里,炉子已经烧得通红。蒸汽升腾,窗外雪光闪烁,一天的寒意从肩头融化。在这里,私人桑拿是标配而非奢华加价项。到第二个晚上,您会发现自己开始围绕它安排一整天。' },
      { tag: '天空', headline: '极光叫醒与玻璃天花板。', body: '深夜,提醒轻轻响起。您把被子拉到下巴,看着绿光在床顶的玻璃上流转。从9月到4月,北极天空就是住宿的一部分。选对房间,您甚至不必走进寒夜就能看到它。' },
    ],
  },
  de: {
    eyebrow: 'Weshalb Sie kommen',
    h2: 'Die drei Dinge, an die sich Reisende erinnern',
    lead: 'Was auch immer Sie sonst planen, Huskys, Skifahren, Rentiere, feine Küche, das sind die Dinge, über die Gäste zuerst nach Hause schreiben.',
    items: [
      {
        tag: 'Die Stille',
        headline: 'Kein Summen. Kein Verkehr. Kein Nachbar.',
        body: 'Sie treten abends auf die Terrasse, und die Welt hält an. Schnee knirscht unter den Schritten, weit weg von jeder Straßenlaterne steht der Himmel voller Sterne, und die Stille ist so vollkommen, dass die Ohren klingen. Am ersten Abend erschrickt man fast. Am dritten will man sie nicht mehr hergeben.',
      },
      {
        tag: 'Die Wärme',
        headline: 'Eine Sauna, jeden einzelnen Abend.',
        body: 'Sie kommen aus der Kälte herein, und der Ofen glüht schon. Der Aufguss zischt, hinter dem Fenster glitzert der Schnee, und der Tag schmilzt von den Schultern. Die eigene Sauna ist hier Standard, kein Luxus-Aufpreis, und ab dem zweiten Abend planen Sie den ganzen Tag um sie herum.',
      },
      {
        tag: 'Der Himmel',
        headline: 'Polarlicht-Wecker und Glasdecken.',
        body: 'Mitten in der Nacht summt ein Wecker. Sie ziehen die Decke bis zum Kinn und sehen zu, wie grünes Licht über das Glasdach direkt über dem Bett wandert. Von September bis April gehört der arktische Himmel zur Unterkunft, und im richtigen Zimmer müssen Sie dafür nicht einmal in die Kälte hinaus.',
      },
    ],
  },
  ko: {
    eyebrow: '여러분이 찾는 것',
    h2: '여행자들이 가장 오래 기억하는 세 가지',
    lead: '허스키, 스키, 순록, 파인 다이닝. 무엇을 계획하시든, 손님들이 집에 돌아가 가장 먼저 이야기하는 건 결국 이 세 가지입니다.',
    items: [
      { tag: '고요함', headline: '소음 없음. 차량 없음. 이웃 없음.', body: '해가 진 뒤 테라스에 나서면 세상이 멈춥니다. 발밑에서 눈이 뽀드득거리고, 가로등에서 멀리 떨어진 하늘엔 별이 가득합니다. 귀가 울릴 만큼 완전한 고요. 첫날 밤엔 살짝 놀라지만, 사흘째엔 놓아주고 싶지 않아집니다.' },
      { tag: '온기', headline: '매일 밤, 사우나.', body: '추위 속에서 돌아오면 사우나 스토브는 이미 달궈져 있습니다. 김이 피어오르고, 창밖엔 눈이 반짝이고, 하루의 추위가 어깨에서 녹아내립니다. 여기선 전용 사우나가 기본 사양이지 사치 옵션이 아닙니다. 이틀째 저녁이면 하루 일정을 사우나에 맞춰 짜고 있는 자신을 발견하게 됩니다.' },
      { tag: '하늘', headline: '오로라 알람과 유리 천장.', body: '한밤중에 알림이 울립니다. 이불을 턱까지 끌어올린 채, 침대 바로 위 유리 천장 너머로 초록빛이 일렁이는 걸 바라봅니다. 9월부터 4월까지 북극 하늘은 숙박의 일부입니다. 알맞은 객실이라면 추위 속으로 나가지 않아도 그 빛을 만날 수 있습니다.' },
    ],
  },
  fr: {
    eyebrow: 'Pourquoi vous venez',
    h2: 'Les trois choses dont les voyageurs se souviennent',
    lead: 'Quoi que vous prévoyiez d\'autre, huskys, ski, rennes, gastronomie, ce sont les souvenirs que les visiteurs racontent en premier.',
    items: [
      { tag: 'Le silence', headline: 'Pas de ronron. Pas de circulation. Pas de voisin.', body: "Vous sortez sur la terrasse à la nuit tombée, et le monde s'arrête. La neige crisse sous les pas, loin de tout lampadaire le ciel déborde d'étoiles, et le silence est si complet que les oreilles bourdonnent. Le premier soir, on sursaute presque. Le troisième, on ne veut plus le rendre.", },
      { tag: 'La chaleur', headline: 'Un sauna, chaque soir.', body: "Vous rentrez du froid, le poêle rougeoie déjà. La vapeur monte, la neige scintille derrière la fenêtre et la journée fond de vos épaules. Ici, le sauna privatif est la norme, pas un supplément de luxe, et dès le deuxième soir, c'est autour de lui que vous organisez la journée.", },
      { tag: 'Le ciel', headline: 'Réveils aurores et plafonds de verre.', body: "Une alerte vibre au milieu de la nuit. Vous remontez la couette jusqu'au menton et regardez la lumière verte onduler sur le plafond de verre, juste au-dessus du lit. De septembre à avril, le ciel arctique fait partie du séjour, et dans la bonne chambre, pas besoin de sortir dans le froid pour le voir.", },
    ],
  },
  it: {
    eyebrow: 'Ciò per cui si parte',
    h2: 'Le tre cose che i viaggiatori ricordano',
    lead: "Qualsiasi altra cosa abbiate in programma, husky, sci, renne, alta cucina, questi sono i ricordi che gli ospiti raccontano per primi al ritorno.",
    items: [
      { tag: 'Il silenzio', headline: 'Niente ronzio. Niente traffico. Niente vicini.', body: 'Esce sulla terrazza dopo il tramonto e il mondo si ferma. La neve scricchiola sotto i passi, lontano da ogni lampione il cielo è gremito di stelle, e il silenzio è così completo che le orecchie ronzano. La prima sera quasi spaventa. Alla terza, non vorrà più restituirlo.' },
      { tag: 'Il calore', headline: 'Una sauna, ogni sera.', body: "Rientra dal freddo e la stufa è già accesa. Il vapore sale, la neve brilla oltre la finestra e la giornata si scioglie dalle spalle. Qui la sauna privata è lo standard, non un extra di lusso, e dalla seconda sera l'intera giornata si organizza attorno a quel momento." },
      { tag: 'Il cielo', headline: 'Sveglie aurora e tetti di vetro.', body: "Un avviso suona nel cuore della notte. Tira su il piumone fino al mento e guarda la luce verde incresparsi sul tetto di vetro, proprio sopra il letto. Da settembre ad aprile il cielo artico fa parte del soggiorno, e nella camera giusta non serve nemmeno uscire al freddo per vederlo.", },
    ],
  },
  nl: {
    eyebrow: 'Waarvoor u komt',
    h2: 'De drie dingen die reizigers onthouden',
    lead: 'Wat u ook plant, husky\'s, skiën, rendieren, fine dining, dit zijn de dingen waar gasten als eerste over schrijven.',
    items: [
      { tag: 'De stilte', headline: 'Geen gezoem. Geen verkeer. Geen buren.', body: 'U stapt na zonsondergang het terras op en de wereld staat stil. Sneeuw knerpt onder uw voeten, ver van elke straatlantaarn staat de hemel vol sterren, en de stilte is zo volkomen dat uw oren suizen. De eerste avond schrikt u er bijna van. De derde avond wilt u haar niet meer kwijt.' },
      { tag: 'De warmte', headline: 'Een sauna, iedere avond.', body: 'U komt uit de kou naar binnen en de kachel gloeit al. De stoom stijgt op, achter het raam glinstert de sneeuw en de dag smelt van uw schouders. Een privésauna is hier standaard, geen luxe-upsell, en vanaf de tweede avond plant u de hele dag eromheen.' },
      { tag: 'De hemel', headline: 'Aurora-wekkers en glazen plafonds.', body: 'Een melding zoemt midden in de nacht. U trekt het dekbed tot uw kin en kijkt hoe groen licht over het glazen plafond golft, recht boven het bed. Van september tot april hoort de arctische hemel bij het verblijf, en in de juiste kamer hoeft u er niet eens voor de kou in.' },
    ],
  },
  sv: {
    eyebrow: 'Det du kommer för',
    h2: 'De tre sakerna resenärer minns',
    lead: 'Vad du än planerar, hundspann, skidåkning, renar, god mat, det här är sakerna gästerna berättar om först när de kommer hem.',
    items: [
      { tag: 'Tystnaden', headline: 'Inget brus. Ingen trafik. Ingen granne.', body: 'Du kliver ut på terrassen när mörkret fallit och världen stannar. Snön knarrar under fötterna, långt från varje gatlykta är himlen full av stjärnor, och tystnaden är så fullständig att det susar i öronen. Första kvällen skrämmer den nästan. Den tredje vill du inte lämna tillbaka den.' },
      { tag: 'Värmen', headline: 'En bastu, varenda kväll.', body: 'Du kommer in från kylan och kaminen glöder redan. Ångan stiger, snön glittrar utanför fönstret och dagen smälter av axlarna. Egen bastu är standard här, inte ett lyxtillägg, och från andra kvällen planerar du resten av dagen runt den.' },
      { tag: 'Himlen', headline: 'Norrskenslarm och glastak.', body: 'Ett larm surrar i de små timmarna. Du drar täcket upp till hakan och ser det gröna ljuset välla fram över glastaket, rakt ovanför sängen. Från september till april är den arktiska himlen en del av vistelsen, och i rätt rum behöver du aldrig gå ut i kylan för att se den.' },
    ],
  },
}

// Mood image per memory, order matches items: [quiet, warmth, sky]. Quiet and
// sky come from the site's own previously-unused pool (the old FeaturedProperties
// card art); warmth is a purpose-generated sauna interior (Picsart gemini-2K,
// 2026-08-09). All AI-generated, unique to this site. They illustrate the THEME
// (alt = the card headline), they do not name or promise any property.
const IMAGES = [
  '/images/arctic-lakeside-retreat-inari.webp',
  '/images/sense-sauna.webp',
  '/images/aurora-class-villa-levi.webp',
]

export default function Reviews() {
  const lang = useLang()
  const c = pick(lang, COPY.en, COPY.fi, COPY.de, COPY.ja, COPY.es, COPY['pt-BR'], COPY['zh-CN'], COPY.ko, COPY.fr, COPY.it, COPY.nl, COPY.sv)

  return (
    // Dark "beat" mid-page: a run of pale cream sections (Locations → this →
    // Activities → FAQ) had no rhythm and read as empty (Vesa 2026-07-09). A
    // deep-night testimonial band breaks the monotony and reads as premium,
    // while the cream editorial look stays the page's default.
    <section className="py-14 sm:py-20 px-4 sm:px-6 bg-night">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-14 max-w-3xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-xs sm:text-sm font-semibold mb-3">{c.eyebrow}</p>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading text-snow tracking-wide">
            {c.h2}
          </h2>
          <p className="mt-4 sm:mt-5 text-snow/70 text-base sm:text-lg leading-relaxed">
            {c.lead}
          </p>
        </div>

        {/* Image-led cards (Vesa 2026-08-09: text-only dark cards had zero pull).
            The tag pill sits on the image over a bottom scrim; body stays below. */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          {c.items.map((v, i) => (
            <div
              key={v.tag}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]"
            >
              <div className="relative">
                <img
                  src={IMAGES[i]}
                  alt={v.headline}
                  width={1920}
                  height={1440}
                  loading="lazy"
                  decoding="async"
                  className="h-44 sm:h-52 w-full object-cover"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-night/70 via-transparent to-transparent" />
                <p className="absolute bottom-3 left-5 text-xs uppercase tracking-[0.25em] text-pink font-semibold [text-shadow:0_1px_8px_rgba(0,0,0,0.9)]">
                  {v.tag}
                </p>
              </div>
              <div className="p-5 sm:p-8">
                <h3 className="text-2xl font-heading text-snow tracking-wide mb-2.5">{v.headline}</h3>
                <p className="text-snow/70 text-[15px] sm:text-base leading-relaxed">{v.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
