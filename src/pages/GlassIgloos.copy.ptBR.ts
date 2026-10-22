import type { GlassIgloosCopy } from './GlassIgloos.copy.types'

/**
 * Página de iglus de vidro em português do Brasil, /br/glass-igloos. Traduzida do EN
 * (GlassIgloos.copy.en.ts) em 22.10.2026. Demanda medida com OpenSEO (17.9. + 22.10.2026, buscas
 * por mês, pt-BR): iglu de vidro 110, iglu aurora boreal 110, hotel iglu finlandia 110, iglu de
 * vidro aurora boreal 70, iglu finlandia 70, kakslauttanen 90. Título e h1 abrem com "iglu de
 * vidro" + "Finlândia"; "hotéis" no título cobre "hotel iglu"; a descrição leva "aurora boreal". "iglu de gelo" (2 900) é outro
 * produto e fica de fora.
 *
 * Tratamento: você (padrão BR da rede). Termos do site: fjäll (como em Cabins/CabinArea pt-BR),
 * traslado, Vila do Papai Noel, lago Inari, Helsinque. Mesmos fatos do EN, verificados nos sites
 * dos hotéis em 18.10.2026; nenhum número que não esteja no EN (numeroportti). Sem preços
 * gravados. Os botões abrem o Trip.com, por isso o tableNote cita o Trip.com.
 */
const ptBR: GlassIgloosCopy = {
  seo: {
    title: 'Iglu de vidro na Finlândia: 11 hotéis da Lapônia comparados',
    description:
      'Iglus de vidro sob a aurora boreal na Lapônia finlandesa: 11 hotéis em Rovaniemi, Saariselkä, Inari e Levi, com aeroporto, tipo de quarto e quando reservar.',
  },
  breadcrumbHome: 'Início',
  breadcrumbPage: 'Iglus de vidro na Finlândia',
  keywords: ['iglu de vidro', 'iglu aurora boreal', 'hotel iglu finlandia', 'iglu de vidro aurora boreal', 'iglu finlandia', 'kakslauttanen'],
  adBadge: 'Contém links de afiliados',
  h1: 'Iglus de vidro na Finlândia',
  lead:
    'Na Lapônia finlandesa, um iglu de vidro pode ser uma unidade pequena para duas ou três pessoas ou um chalé de troncos ligado a um iglu de vidro. O nome é o mesmo, mas a construção, o tamanho do pedaço de céu sobre a cama e o que a diária inclui variam muito. Esta página reúne 11 hotéis por região, aeroporto mais próximo e tipo de quarto, e ajuda você a escolher a região que combina com a sua viagem.',
  heroAlt: 'Iglus de vidro na floresta coberta de neve do Kakslauttanen Arctic Resort, em Saariselkä, com duas pessoas caminhando pela trilha',

  typesEyebrow: 'Primeiro, os tipos',
  typesH2: 'O que conta como iglu de vidro',
  typesIntro:
    'Na Lapônia, três coisas diferentes são vendidas como “iglu”. A maior parte da diferença de conforto vem do tipo e do tamanho da unidade: um iglu pequeno para duas ou três pessoas ou uma cabana para a família.',
  typeCards: [
    {
      title: 'Iglu de vidro independente',
      tagline: 'Cúpula ou cabana pequena, com o teto todo de vidro',
      body: 'Uma unidade aquecida, sozinha na neve, com vidro sobre a cama e muitas vezes também nas paredes. O Kakslauttanen Arctic Resort, em Saariselkä, e o Golden Crown Levin Iglut, perto de Levi, são desse tipo. Você vê o céu sem sair da cama.',
      forWho: 'Ideal para: casais numa viagem atrás da aurora e quem quer fotografar o céu da cama.',
    },
    {
      title: 'Cabana ou quarto com teto de vidro',
      tagline: 'Cabana ou quarto de hotel com parte do teto em vidro',
      body: 'Uma cabana ou um quarto de hotel comum em que parte do teto é de vidro. A Wilderness Hotels chama as suas de Aurora Cabins, com teto de vidro aquecido, e o Star Arctic Hotel, no fjäll Kaunispää, tem um teto de vidro de três painéis sobre a cama. Em geral, uma parte menor do quarto é de vidro, o que pode facilitar o controle do calor, da escuridão e da privacidade.',
      forWho: 'Ideal para: quem põe o conforto em primeiro lugar e estadias mais longas.',
    },
    {
      title: 'Iglu de neve (hotel de neve)',
      tagline: 'Nome parecido, outro produto',
      body: 'Um quarto feito de neve e gelo, reconstruído todo inverno, onde a temperatura fica entre 0 e −5 °C. O hotel de neve do Arctic SnowHotel & Glass Igloos, perto de Rovaniemi, abre em 15 de dezembro de cada ano, fornece sacos de dormir feitos para frio extremo e não recomenda o pernoite para crianças menores de 5 anos. Um iglu de vidro é um quarto quente com vista para o céu; aqui, a experiência é a própria noite fria.',
      forWho: 'Ideal para: uma noite de aventura. Para a maioria das pessoas, uma noite basta.',
    },
  ],
  typesNote: [
    'O Arctic SnowHotel tem iglus de vidro e o hotel de neve no mesmo lugar, então dá para experimentar os dois. Para ver todas as formas de se hospedar na Lapônia, consulte o ',
    { to: '/property-types', label: 'guia de tipos de hospedagem' },
    ' deste site e o ',
    { href: 'https://laplandvibes.com/br/blog/lapland-glass-cabin-categories/', label: 'artigo da LaplandVibes sobre as categorias de cabanas de vidro' },
    '.',
  ],
  kidsNote:
    'Com crianças, quem merece atenção é o hotel de neve: o Arctic SnowHotel não recomenda uma noite nos quartos de neve para crianças menores de 5 anos. Os iglus de vidro são quartos aquecidos, mas as regras de idade e a possibilidade de a criança dormir na mesma cama variam de hotel para hotel, então pergunte na hora de reservar.',

  seasonEyebrow: 'Temporada',
  seasonH2: 'A temporada dos iglus de vidro começa com a escuridão, não com a neve',
  seasonBody: [
    'A temporada dos iglus de vidro acompanha as noites escuras, não a neve. No guia mês a mês deste site, a temporada de auroras vai de setembro a abril, e alguns hotéis seguem o mesmo calendário: o Levin Iglut e os iglus de vidro do Arctic SnowHotel abrem em 1º de setembro. Só o hotel de neve espera até 15 de dezembro.',
    'Não é preciso esperar pela neve. Em setembro e outubro, as cores do outono e as primeiras noites de aurora chegam juntas, e ainda há disponibilidade. De junho a meados de julho, o sol não se põe e não dá para ver a aurora de jeito nenhum. Sob um teto de vidro no verão, você vê o sol da meia-noite, uma experiência à parte, mas provavelmente não a que você veio buscar.',
  ],

  tableH2: 'Os hotéis: região, aeroporto e tipo de quarto',
  tableIntro:
    'A tabela traz os 11 hotéis com link para o parceiro de reservas deste site, agrupados por região nas seções abaixo.',
  tableHeaders: { name: 'Hotel', area: 'Região', airport: 'Aeroporto mais próximo', feature: 'Quartos', book: 'Reservar' },
  bookLabel: 'Ver disponibilidade',
  rows: {
    kakslauttanen: {
      name: 'Kakslauttanen Arctic Resort',
      area: 'Saariselkä, 10 km ao sul do vilarejo',
      airport: 'Ivalo (IVL), 35 km, cerca de 30 min',
      feature: 'Iglus de vidro para até 3 ou 5 hóspedes e Kelo-Glass Igloos: um chalé de troncos ligado a um iglu de vidro',
    },
    starArctic: {
      name: 'Star Arctic Hotel',
      area: 'Saariselkä, no topo do fjäll Kaunispää',
      airport: 'Ivalo (IVL)',
      feature: 'Aurora Glass Cabins de 20 m², com teto de vidro de três painéis sobre a cama',
    },
    muotka: {
      name: 'Wilderness Hotel Muotka',
      area: 'Perto de Saariselkä',
      airport: 'Ivalo (IVL), cerca de 45 min',
      feature: 'Aurora Cabins de 30 m² para até 4 pessoas, com teto de vidro aquecido',
    },
    auroraVillage: {
      name: 'Aurora Village Ivalo',
      area: 'Ivalo',
      airport: 'Ivalo (IVL), 15 min',
      feature: 'Aurora Cabins de 28 m² com teto de vidro e alertas de aurora por aplicativo',
    },
    nellim: {
      name: 'Wilderness Hotel Nellim',
      area: 'Nellim, às margens do lago Inari',
      airport: 'Ivalo (IVL), cerca de 45 min',
      feature: 'Aurora Cabins com teto de vidro aquecido e villas à beira do lago',
    },
    wildernessInari: {
      name: 'Wilderness Hotel Inari',
      area: 'Lago Inari, a 5 min do vilarejo de Inari',
      airport: 'Ivalo (IVL), cerca de 45 min',
      feature: 'Aurora Cabins de 29 m² para até 4 pessoas, com teto de vidro aquecido',
    },
    arcticSnowHotel: {
      name: 'Arctic SnowHotel & Glass Igloos',
      area: 'Lehtojärvi, a 30 min do centro de Rovaniemi',
      airport: 'Rovaniemi (RVN), 40 min',
      feature: 'Iglus de vidro aquecidos a partir de 1º de setembro e um hotel de neve reconstruído todo inverno (a partir de 15 de dezembro, de 0 a −5 °C)',
    },
    apukka: {
      name: 'Apukka Resort',
      area: 'Rovaniemi, a 18 km (15 min) do centro',
      airport: 'Rovaniemi (RVN), 10 km',
      feature: 'Aurora Cabins com teto panorâmico de vidro aquecido e suítes em iglu de vidro com vista de 360°',
    },
    santasIgloosArcticCircle: {
      name: 'Santa’s Igloos Arctic Circle',
      area: 'Vila do Papai Noel, Rovaniemi',
      airport: 'Rovaniemi (RVN), 5 km',
      feature: '71 iglus de vidro com teto de vidro aquecido',
    },
    levinIglut: {
      name: 'Golden Crown Levin Iglut',
      area: 'Levi, a 10 km do vilarejo, 340 m acima do nível do mar',
      airport: 'Kittilä (KTT), 15 min',
      feature: 'Iglus Superior, Prime Superior e Suite',
    },
    northernLightsRanch: {
      name: 'Northern Lights Ranch',
      area: 'Köngäs, a 15 km de Levi',
      airport: 'Kittilä (KTT), 30 km',
      feature: 'Sky View Cabins: cabanas em formato de iglu com teto de vidro aquecido, em seis estilos',
    },
  },
  tableNote:
    'Cada linha abre a página do próprio hotel no nosso parceiro de reservas, o Trip.com, com preços e disponibilidade para as suas datas de viagem. Os preços dos iglus mudam muito de uma semana para outra, por isso não os publicamos aqui. As distâncias, os tempos e os detalhes dos quartos vêm do site de cada hotel, e as distâncias dos aeroportos vêm da Finavia, tudo conferido em 18 de outubro de 2026.',

  areas: {
    rovaniemi: {
      eyebrow: 'Para uma viagem curta',
      title: 'Arredores de Rovaniemi: perto do aeroporto',
      intro:
        'O aeroporto de Rovaniemi (RVN) fica a 10 km do centro da cidade. Um iglu nos arredores de Rovaniemi é a escolha sensata se a sua viagem for curta, se você também quiser conhecer a Vila do Papai Noel ou se quiser passar o mínimo de tempo possível em traslados.',
      properties: [
        {
          name: 'Arctic SnowHotel & Glass Igloos (Lehtojärvi)',
          body: 'Iglus de vidro a partir de 1º de setembro e um hotel de neve a partir de 15 de dezembro, a 30 minutos do centro da cidade e a 40 do aeroporto. O hotel lista um alarme de aurora entre as comodidades dos seus iglus de vidro.',
        },
        {
          name: 'Apukka Resort',
          body: 'O resort fica a 18 km (15 minutos) do centro e a 10 km do aeroporto. As Aurora Cabins têm teto panorâmico de vidro aquecido; as suítes em iglu de vidro Kammi e Komsio têm vista de 360°.',
        },
        {
          name: 'Santa’s Igloos Arctic Circle',
          body: 'Na Vila do Papai Noel, a 5 km do aeroporto: 71 iglus de vidro com teto de vidro aquecido.',
        },
      ],
      outro:
        'O único ponto a pesar é a poluição luminosa da cidade. Os hotéis nos arredores de Rovaniemi ficam afastados do centro, mas, se você quer um céu mais escuro, vá mais para o norte.',
      ctaLabel: 'Buscar hospedagem em Rovaniemi',
      guideLinks: [{ to: '/destinations/rovaniemi', label: 'Guia de Rovaniemi' }],
    },
    north: {
      eyebrow: 'Se o céu escuro vem primeiro',
      title: 'Saariselkä, Ivalo e Inari: rumo ao norte',
      intro:
        'O aeroporto de Ivalo (IVL) fica a 25 km de Saariselkä e a 11 km do centro de Ivalo. Inari fica mais ao norte: a Wilderness Hotels informa cerca de 45 minutos do aeroporto até os seus hotéis de Inari e Nellim. Os dados de luz do dia do guia mês a mês deste site são de Rovaniemi (66,5° N), e o inverno em Saariselkä e Inari é ainda mais escuro. Se a aurora é o grande motivo da viagem, é isso que justifica ir mais ao norte.',
      properties: [
        {
          name: 'Kakslauttanen Arctic Resort',
          body: 'O resort fica a 10 km ao sul do vilarejo de Saariselkä e a 35 km (cerca de 30 minutos) do aeroporto de Ivalo. Iglus de vidro para até 3 ou 5 hóspedes e Kelo-Glass Igloos, em que um chalé de troncos é ligado a um iglu de vidro. Uma das tarifas de inverno inclui café da manhã e jantar.',
        },
        {
          name: 'Star Arctic Hotel',
          body: 'No topo do fjäll Kaunispää, em Saariselkä. A Aurora Glass Cabin tem 20 m², acomoda dois adultos e uma criança de até 11 anos e tem um teto de vidro de três painéis bem em cima da cama.',
        },
        {
          name: 'Wilderness Hotel Muotka',
          body: 'Perto de Saariselkä, a cerca de 45 minutos do aeroporto de Ivalo. As Aurora Cabins têm 30 m², acomodam até quatro pessoas e têm teto de vidro aquecido.',
        },
        {
          name: 'Aurora Village Ivalo',
          body: 'Em Ivalo, a 15 minutos do aeroporto. Aurora Cabins de 28 m² com teto de vidro e alertas de aurora por aplicativo.',
        },
        {
          name: 'Wilderness Hotel Nellim e Wilderness Hotel Inari',
          body: 'Os dois ficam às margens do lago Inari, a cerca de 45 minutos do aeroporto de Ivalo. O Wilderness Hotel Inari fica a cinco minutos do vilarejo de Inari; Nellim é um vilarejo à parte. Os dois têm Aurora Cabins com teto de vidro aquecido.',
        },
      ],
      ctaLabel: 'Buscar hospedagem em Saariselkä',
      guideLinks: [
        { to: '/destinations/saariselka', label: 'Guia de Saariselkä' },
        { to: '/destinations/inari', label: 'Guia de Inari' },
      ],
    },
    levi: {
      eyebrow: 'Se você também quer esquiar',
      title: 'Levi: pistas de dia, teto de vidro à noite',
      intro:
        'O aeroporto de Kittilä (KTT) fica a 15 km de Levi. Escolha Levi quando o esqui for o plano principal e o iglu, o mimo do fim da viagem.',
      properties: [
        {
          name: 'Golden Crown Levin Iglut',
          body: 'Iglus de vidro a 10 km do vilarejo de Levi, a 340 m acima do nível do mar e a 15 minutos do aeroporto de Kittilä. Três categorias de quarto: Superior, Prime Superior e Suite. A temporada de iglus 2026–27 vai de 1º de setembro a 13 de abril; em setembro e outubro, o hotel abre só de terça a sábado.',
        },
        {
          name: 'Northern Lights Ranch',
          body: 'Em Köngäs, a 15 km de Levi e a 30 km do aeroporto de Kittilä. As Sky View Cabins são cabanas em formato de iglu com teto de vidro aquecido, em seis estilos.',
        },
      ],
      outro:
        'Uma noite no iglu é mais um mimo do que uma base para a semana, então raramente faz sentido passar todas as noites em um. Fique no vilarejo ou num chalé perto das pistas e acrescente uma ou duas noites de iglu no fim: esqui de dia, a última noite sob o vidro.',
      ctaLabel: 'Buscar hospedagem em Levi',
      guideLinks: [{ to: '/destinations/levi', label: 'Guia de Levi' }],
    },
  },

  questionsEyebrow: 'Como escolher',
  questionsH2: 'Qual região: três perguntas',
  questionsIntro: 'Com as três regiões diante de você, a escolha se resume a três perguntas.',
  questions: [
    {
      title: 'Quantas noites você tem?',
      body: 'Com três noites ou menos, comece por Rovaniemi: os traslados são os mais curtos, então você gasta menos tempo da viagem em deslocamentos. Com quatro noites ou mais, voar até Ivalo e seguir para o norte, até Saariselkä ou Inari, passa a ser viável.',
    },
    {
      title: 'A viagem é pela aurora ou pelo esqui?',
      body: 'Se a aurora vem primeiro, vá para o norte: o inverno em Saariselkä e Inari é mais escuro que em Rovaniemi. Se o esqui vem primeiro, escolha Levi. Se você quer as duas coisas, combine uma semana de esqui em Levi com uma ou duas noites no Golden Crown Levin Iglut, ou vá para o norte em março, quando os dias são mais longos.',
    },
    {
      title: 'Onde gastar o orçamento?',
      body: 'O mesmo dinheiro rende viagens diferentes conforme a forma de gastar: todas as noites num iglu mais barato, ou quartos comuns e uma noite num iglu melhor. Compare o total com refeições e traslados, não a diária. O Kakslauttanen, por exemplo, vende uma tarifa de inverno com café da manhã e jantar incluídos, então confira o que cada tarifa cobre.',
    },
  ],

  cabinCombo: {
    eyebrow: 'Um plano simples',
    h2: 'Uma ou duas noites de iglu e uma cabana para o resto da semana',
    body: 'Uma noite no iglu funciona melhor como um mimo do que como base para a semana inteira. Uma forma de planejar a Lapônia é passar uma ou duas noites num iglu e o resto da semana numa cabana de aluguel na mesma região: o grupo todo cabe, e você pode ter sauna e cozinha próprias a semana toda. Este site lista as cabanas de cada região com a distância até o vilarejo mais próximo.',
    linkLabel: 'Cabanas na Lapônia por região',
  },

  accessEyebrow: 'Como chegar',
  accessH2: 'Como chegar: voos, trem noturno e traslados',
  access: [
    [
      'Os hotéis de iglu desta página são atendidos por três aeroportos: Rovaniemi (RVN), Kittilä (KTT) para Levi e Ivalo (IVL) para Saariselkä e Inari. Rovaniemi tem voos de Helsinque o ano todo. No inverno, os três aeroportos também recebem voos diretos de várias cidades europeias, e as rotas mudam de um ano para outro, então confira os voos que saem do seu aeroporto.',
    ],
    [
      'Os tempos de traslado até cada hotel estão nas seções de cada região, mais acima. Como referência, o RVN fica a 10 km do centro de Rovaniemi, o KTT a 15 km de Levi e o IVL a 25 km de Saariselkä.',
    ],
    [
      'Para quem não quer voar, o trem noturno da VR, a ferrovia finlandesa, vai de Helsinque a Rovaniemi e pode levar o seu carro. De Rovaniemi a Saariselkä são mais umas quatro horas de ônibus, então, para os hotéis do norte, voar até Ivalo é mais rápido. Alguns hotéis vendem traslados do aeroporto, em pacote ou como extra; as outras opções estão no ',
      { to: '/transport', label: 'guia de transporte' },
      '.',
    ],
  ],

  itinerariesEyebrow: 'Planejamento',
  itinerariesH2: 'Roteiros de exemplo: onde encaixar as noites de iglu',
  itinerariesIntro:
    'Deixe as noites de iglu para a segunda metade da viagem, por dois motivos: na primeira noite, o cansaço da viagem pesa e é mais difícil ficar acordado até tarde esperando a aurora, e as noites do fim servem de reserva se as primeiras forem nubladas.',
  itineraries: [
    {
      title: '3 noites em Rovaniemi',
      body: 'Primeira noite na cidade ou perto da Vila do Papai Noel, com o museu Arktikum e um safári. Segunda e terceira noites num iglu de vidro fora da cidade, deixando a última noite livre para a aurora.',
    },
    {
      title: '4 noites em Saariselkä',
      body: 'Primeira e segunda noites num hotel do vilarejo, para caminhar com raquetes de neve no Parque Nacional Urho Kekkonen e fazer um safári de huskies, os dois saindo do vilarejo. Terceira e quarta noites num iglu.',
    },
    {
      title: '5 noites em Levi',
      body: 'Três dias de esqui com base num hotel do vilarejo ou num chalé perto das pistas e, por fim, uma ou duas noites no Golden Crown Levin Iglut. O deslocamento é de 10 km, então um táxi resolve e você não precisa de carro alugado.',
    },
  ],

  inclusionsEyebrow: 'Mesma noite, tarifa diferente',
  inclusionsH2: 'O que a diária inclui: jantar, traslados, sauna',
  inclusionsBody: [
    'Exemplos que conseguimos confirmar nos sites dos próprios hotéis: o Kakslauttanen vende uma tarifa de inverno com café da manhã e jantar incluídos. No Kakslauttanen, os traslados privativos do aeroporto estão incluídos apenas no preço do Luxury Kelo-Glass Igloo, e o Aurora Adventure Break do Wilderness Hotel Muotka, um pacote de três noites, inclui traslados do aeroporto de Ivalo. Nos quartos de neve do Arctic SnowHotel, os sacos de dormir para frio extremo vêm com o quarto.',
    'O que a diária inclui depende da tarifa escolhida, não só do hotel. Vale conferir três coisas antes de reservar:',
  ],
  inclusions: [
    {
      title: 'Jantar',
      body: 'Dá para ir a pé a restaurantes num vilarejo, ou o restaurante do próprio hotel é a única opção? Se for a única, uma tarifa com jantar incluído faz mais diferença.',
    },
    {
      title: 'Traslado do aeroporto',
      body: 'Incluído, pago à parte ou por sua conta? O transporte público é escasso em Ivalo e Kittilä, então isso muda o total.',
    },
    {
      title: 'Sauna',
      body: 'Sauna compartilhada ou privativa, no quarto ou na cabana? Saunas são comuns nas hospedagens finlandesas, mas ter uma só para você muda a estadia.',
    },
  ],
  inclusionsNote:
    'Não colocamos esses três itens numa tabela fixa de propósito: eles mudam a cada tarifa, e uma tabela fixa ficaria desatualizada antes das páginas dos próprios hotéis. Confirme sempre na página de reserva do hotel.',

  bookingEyebrow: 'Antecedência',
  bookingH2: 'Quando reservar: 8–12 meses antes para as semanas de pico',
  bookingIntro:
    'Para as semanas de pico, o Kakslauttanen e o Levin Iglut são reservados com 8 a 12 meses de antecedência. Em novembro, os iglus para as semanas de pico do inverno seguinte já começam a lotar, então as opções diminuem muito antes da virada do ano. Com base no guia mês a mês deste site:',
  bookingRows: [
    { period: 'Semana do Natal', body: 'Cerca de 12 meses antes.' },
    { period: 'Ano Novo', body: 'Cerca de 10 meses antes.' },
    { period: 'Meados de fevereiro', body: 'Férias escolares europeias. Cerca de 6 a 8 meses antes.' },
    { period: 'Março', body: '4 a 6 meses antes. Um dos meses favoritos de quem volta à Lapônia: noites escuras e dias mais longos ao mesmo tempo.' },
    { period: 'Setembro e outubro', body: 'Ainda há quartos disponíveis, e é o melhor equilíbrio entre aurora e preço da temporada.' },
  ],
  bookingOutro: [
    'O panorama completo de luz do dia, aurora, neve e reservas mês a mês está no ',
    { to: '/when-to-go', label: 'guia de quando ir' },
    '. Se você começar a procurar um iglu de vidro para dezembro dois ou três meses antes da viagem, vai sobrar muito pouco. Mudar a viagem para março costuma ajudar mais do que se contentar com outro hotel.',
  ],

  cloudyEyebrow: 'Com franqueza',
  cloudyH2: 'E se estiver nublado?',
  cloudyIntro:
    'Só dá para ver a aurora numa noite de céu limpo, e nenhum iglu de vidro vende céu limpo. Nenhum hotel inclui a aurora no preço. Há três coisas práticas que você pode fazer.',
  cloudy: [
    {
      title: 'Reserve mais de uma noite',
      body: 'Uma noite é uma aposta; duas ou três aumentam as suas chances. Deixe as noites de iglu para o fim da viagem e elas darão outra oportunidade se as noites anteriores estiverem nubladas.',
    },
    {
      title: 'Use um alerta de aurora',
      body: 'Alguns hotéis avisam quando a aurora aparece: o Aurora Village Ivalo, por aplicativo, e o Arctic SnowHotel lista um alarme de aurora nos seus iglus de vidro. Antes de reservar, veja se o seu hotel tem esse recurso. Se as suas datas forem flexíveis, a aurora costuma ser mais ativa perto dos equinócios, por isso março é um bom mês.',
    },
    {
      title: 'Planeje a noite nublada com antecedência',
      body: 'Uma sauna, um jantar no hotel, uma caminhada ao ar livre: ter um plano que funcione com o céu encoberto evita que a noite pareça perdida.',
    },
  ],
  cloudyOutro: [
    'Mesmo numa noite nublada, você tem uma cama quente sob o vidro e, no inverno, árvores iluminadas pela neve ao redor. A sensação depende do que você esperava. Para saber quando a aurora é mais provável e quais são as chances, veja o ',
    { href: 'https://laplandvibes.com/br/northern-lights/', label: 'guia da aurora boreal' },
    ' da LaplandVibes.',
  ],

  ctaH2: 'Escolha a região, depois o mês',
  ctaBody:
    'Depois de definir o tipo e a região, só falta escolher o mês. Confira luz do dia, aurora e reservas mês a mês e, então, coloque as suas datas de viagem no calendário de reservas do hotel.',
  ctaPrimary: 'Quando ir',
  ctaSecondary: 'Tipos de hospedagem',
  checkedNote:
    'Informações dos hotéis conferidas no site de cada hotel em 18 de outubro de 2026. Temporadas, quartos e o que cada tarifa inclui mudam: confirme no site e na página de reserva do hotel.',
}

export default ptBR
