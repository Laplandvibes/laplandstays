// Guia de férias em cabana (artigo parceiro Lomarengas), português do Brasil.
import type { PageCopy } from './Cabins.copy.types'

const copy: PageCopy = {
  seo: {
    title: 'Cabanas na Lapônia: Levi, Ylläs, Ruka e Saariselkä',
    description: 'Como funcionam as férias em cabana na Finlândia: o que um mökki inclui, como Levi, Ylläs, Ruka e Saariselkä se diferenciam e como buscar cabanas pela Lomarengas.',
  },
  ui: {
    adNotice: 'Contém links publicitários · Parceria com a Lomarengas',
    eyebrow: 'Férias em cabana',
    h1: 'Férias em cabana na Lapônia',
    heroAlt: 'Cabana de troncos na Lapônia nevada na hora azul, luz quente nas janelas e uma aurora fraca no céu',
    lead: 'Suas próprias paredes de troncos, sua própria sauna e ninguém em cima, embaixo ou do outro lado da parede.',

    whyEyebrow: 'Por que uma cabana',
    whyH2: 'O que um mökki oferece que um hotel não consegue',
    whyLead: 'O mökki é a cabana de férias finlandesa, e vem com seus próprios rituais. Quatro razões pelas quais ele ganha de um quarto de hotel para uma semana no norte:',
    whyCards: [
      {
        title: 'Sua própria sauna',
        body: 'A maioria das cabanas de aluguel inclui sauna privativa, e nas melhores ela é aquecida a lenha. Esqui, sauna, jantar e vigília da aurora: esse é o ritmo diário de uma semana de cabana finlandesa.',
      },
      {
        title: 'Espaço para o grupo todo',
        body: 'As cabanas acomodam de duas a doze pessoas ou mais. Uma cozinha, uma lareira e uma conta dividida entre amigos costumam valer mais que três ou quatro quartos de hotel.',
      },
      {
        title: 'Sua própria cozinha',
        body: 'Os preços dos restaurantes de estação se acumulam rápido em uma semana. Uma cozinha de cabana significa cafés da manhã sem pressa, lanches para as pistas e uma grande compra no supermercado do vilarejo.',
      },
      {
        title: 'O silêncio',
        body: 'Desça da varanda e você está na neve, sob as estrelas, muitas vezes com a aurora acima. Sem corredores, sem lobby, sem outros hóspedes. Esse silêncio é exatamente o objetivo.',
      },
    ],

    partnerEyebrow: 'Onde procuramos primeiro',
    partnerH2: 'Busca de cabanas: Lomarengas',
    partnerBody: 'A Lomarengas é uma agência finlandesa de aluguel de cabanas com mais de 8.000 casas de temporada listadas por todo o país, de chalés de esqui junto às pistas de Levi a cabanas à beira de lago no extremo norte. Os anúncios mostram fotos reais, localização exata e preços semana a semana, e cada cabana detalha o que está incluído.',
    partnerNote: 'Os links abaixo levam ao lomarengas.fi, onde a busca, os preços e a reserva ficam por conta da Lomarengas. Se você reservar por esses links, a LaplandStays recebe uma comissão fixa sem custo adicional para você.',
    partnerCta: 'Ver cabanas da Lapônia',

    areasEyebrow: 'Os quatro clássicos',
    areasH2: 'Levi, Ylläs, Ruka ou Saariselkä?',
    areasLead: 'Os quatro oferecem pistas, trilhas de esqui cross-country e cabanas a poucos minutos de carro de um vilarejo. A diferença está no clima: quanto de vilarejo você quer do lado de fora da porta da cabana.',
    areas: [
      {
        name: 'Levi',
        tagline: 'A estação completa',
        body: 'A estação de esqui mais movimentada da Finlândia, com o slalom da Copa do Mundo todo novembro e um vilarejo onde restaurantes, lojas de aluguel e pontos de saída de safáris ficam a pé. As cabanas cercam o fell, então dá para escolher entre locais ski-in perto da gôndola e terrenos mais tranquilos a alguns quilômetros.',
        bullets: [
          'Ideal para: quem vem pela primeira vez e grupos que querem restaurantes e vida noturna perto da cabana',
          'Serviços do vilarejo a pé a partir das áreas de cabanas mais próximas',
          'O aeroporto de Kittilä fica a uns 15 minutos, o traslado mais fácil da Lapônia',
        ],
        note: '',
        cta: 'Cabanas em Levi · Lomarengas',
      },
      {
        name: 'Ylläs',
        tagline: 'A terra tranquila dos fells',
        body: 'As pistas mais longas da Finlândia em um único fell, dois vilarejos discretos (Äkäslompolo e Ylläsjärvi) ao pé dele e o parque nacional Pallas-Yllästunturi começando na borda da rede de trilhas. A vida de cabana aqui é mais esquiar desde a porta e menos après-ski.',
        bullets: [
          'Ideal para: esquiadores cross-country, famílias e alérgicos a multidão',
          'Dois vilarejos significam lojas e restaurantes sem o agito de estação',
          'O mesmo aeroporto de Kittilä de Levi, traslado de uns 50 minutos',
        ],
        note: '',
        cta: 'Cabanas em Ylläs · Lomarengas',
      },
      {
        name: 'Ruka',
        tagline: 'O trator do início de temporada',
        body: 'Ruka abre em outubro e o esqui vai até maio, uma das temporadas mais longas da Finlândia, e o vilarejo compacto junto às pistas mantém tudo perto. Abaixo do fell, a região de lagos de Kuusamo é terreno clássico de cabanas, com o parque nacional de Oulanka e a trilha Karhunkierros por perto para os dias sem esqui.',
        bullets: [
          'Ideal para: esquiar no início e no fim da temporada, trilhas na ruska de outono e pescadores',
          'O aeroporto de Kuusamo fica a uns 25 minutos das pistas',
          'Enorme oferta de cabanas à beira de lago no interior ao redor de Kuusamo',
        ],
        note: 'A rigor, Ruka fica em Kuusamo, logo ao sul da divisa administrativa da Lapônia. A neve não parece se importar, e quem aluga cabana também não.',
        cta: 'Cabanas em Ruka · Lomarengas',
      },
      {
        name: 'Saariselkä',
        tagline: 'A base de auroras do extremo norte',
        body: 'A mais setentrional das quatro grandes, a cerca de 68°N, o que coloca você sob o oval auroral: numa noite limpa, as chances aqui são simplesmente melhores. O vilarejo é compacto, o parque nacional Urho Kekkonen começa logo atrás e os fells se estendem cem quilômetros para o leste sem nada construído à vista.',
        bullets: [
          'Ideal para: caçadores de aurora, fãs de caminhada com raquetes e natureza selvagem, segundas visitas',
          'O aeroporto de Ivalo fica a uns 30 minutos',
          'O topo do Kaunispää e a pista de trenó mais longa da Finlândia ficam logo acima do vilarejo',
        ],
        note: '',
        cta: 'Cabanas em Saariselkä · Lomarengas',
      },
    ],

    practicalEyebrow: 'Antes de reservar',
    practicalH2: 'Como ler um anúncio de cabana',
    practicalLead: 'Os anúncios de cabana finlandeses são honestos, mas econômicos nas palavras. Estes são os detalhes que valem conferir antes de fechar uma semana:',
    checkTitle: 'Confira no anúncio',
    checkList: [
      'Tipo de sauna: a lenha é a experiência completa, elétrica é a do dia a dia',
      'Roupa de cama e limpeza final: muitas vezes cobradas à parte, some antes de comparar totais',
      'Distância até as pistas, trilhas e o mercado mais próximo, em quilômetros e não em adjetivos',
      'Lareira e lenha: geralmente incluídas, mas confirme se for importante para você',
      'Acesso por estrada no inverno e estacionamento, principalmente em cabanas fora dos vilarejos',
    ],
    knowTitle: 'Bom saber',
    knowList: [
      'Um carro vale a pena para cabanas longe de um vilarejo, veja nosso guia de transporte',
      'Na alta temporada, as semanas de cabana costumam ir de sábado a sábado',
      'De dezembro a março é alta temporada; reserve as semanas concorridas com muitos meses de antecedência',
      'A ruska de setembro e o sol da meia-noite de junho são os achados da baixa temporada',
      'Leve pantufas. A cabana finlandesa é zona sem sapatos, e o piso sabe disso.',
    ],

    seasonEyebrow: 'Época',
    seasonH2: 'Quando fazer sua semana de cabana',
    seasonLead: 'Não existe estação errada para um mökki, só estações diferentes:',
    seasons: [
      { period: 'Dezembro a março', body: 'Inverno pleno: pistas abertas, trilhas preparadas e temporada de auroras no auge. É quando a procura por cabanas é maior, então quanto antes reservar, melhor a escolha.' },
      { period: 'Abril', body: 'Esqui de primavera: dias longos, neve firme e clima de óculos de sol no terraço. Os locais chamam de segredo mais bem guardado do ano de esqui.' },
      { period: 'Junho a agosto', body: 'Luz de verão: caminhadas, pesca e mergulhos do deque da cabana. O sol da meia-noite vai até meados de julho e os fins de tarde seguem claros por boa parte de agosto. As cabanas à beira de lago estão no melhor momento.' },
      { period: 'Setembro a outubro', body: 'A ruska, a estação das cores de outono: os fells ficam vermelhos e dourados, o ar é cortante e as primeiras auroras voltam aos céus escuros.' },
    ],

    ctaH2: 'Escolha primeiro o fell, depois a cabana',
    ctaLead: 'Comece pela região que combina com o seu grupo e depois compare as cabanas nas páginas da Lomarengas. A reserva é feita no lomarengas.fi.',
    ctaPrimary: 'Todas as cabanas na Lomarengas',
    ctaSecondary: 'Quando ir',

    showcase: {
      eyebrow: 'Direto do catálogo',
      h2: 'Cabanas reais, fotos reais',
      lead: 'Uma seleção atualizada diariamente das ofertas da Lomarengas ao redor de cada estação, tirada direto do feed de produtos. Os preços são semanais «a partir de»; o valor final depende da semana.',
      weekFrom: 'semana a partir de {price} €',
      guestsLabel: 'pessoas',
      bedroomsLabel: 'quartos',
      sizeLabel: 'área',
      viewCabin: 'Ver cabana',
      browseAll: 'Ver todas as {count} cabanas da região',
      dataNote: 'Fotos e preços: dados de produto da Lomarengas, atualizados diariamente.',
    },
  },
}

export default copy
