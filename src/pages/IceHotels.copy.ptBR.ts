import type { IceHotelsCopy } from './IceHotels.copy.types'

/**
 * Página de hotéis de gelo e de neve em português do Brasil, /br/ice-hotels. Traduzida do EN
 * (IceHotels.copy.en.ts) em 22.10.2026. Demanda medida com OpenSEO (22.10.2026, buscas por mês, pt-BR):
 * hotel de gelo 720, icehotel 590 (= o ICEHOTEL da Suécia), hotel de gelo finlandia 390, hotel de gelo
 * suécia 140, hotel de gelo finlândia 40. Título abre com "hotel de gelo" + "Finlândia", porque o termo
 * sozinho leva à Suécia. "iglu de gelo" (2 900) é genérico e fica de fora.
 *
 * Tratamento: você. Termos como em GlassIgloos pt-BR: hotel de neve, iglu de vidro, traslado, Vila do
 * Papai Noel, Ver disponibilidade. Mesmos fatos do EN, nenhum número a mais ou a menos (numeroportti);
 * datas e horários no formato brasileiro (15 de dezembro de 2026, das 10h às 22h). O botão abre o
 * Trip.com, por isso o ctaNote cita o Trip.com.
 */
const ptBR: IceHotelsCopy = {
  seo: {
    title: 'Hotel de gelo na Finlândia: onde dormir na neve da Lapônia',
    description:
      'Hotéis de gelo na Lapônia finlandesa no inverno 2026–27: Arctic SnowHotel em Rovaniemi, SnowVillage perto de Ylläs, iglus de neve em Pyhä e visitas de um dia.',
  },
  breadcrumbHome: 'Início',
  breadcrumbPage: 'Hotéis de gelo na Lapônia finlandesa',
  keywords: ['hotel de gelo', 'hotel de gelo finlandia', 'hotel de gelo finlândia', 'hotel de gelo lapônia', 'arctic snowhotel', 'hotel de neve finlândia', 'hotel de gelo rovaniemi'],
  adBadge: 'Contém links de afiliados',
  h1: 'Hotéis de gelo e neve na Lapônia finlandesa',
  lead:
    'No inverno de 2026–27, há três lugares na Lapônia finlandesa onde você pode dormir num quarto feito de neve: o Arctic SnowHotel, perto de Rovaniemi; o SnowVillage, perto de Ylläs; e os iglus de neve do Lucky Ranch, perto de Pyhä. O hotel de gelo mais famoso, o ICEHOTEL, fica na Suécia. Aqui você vê o que cada noite inclui e onde dá para visitar sem se hospedar.',
  heroAlt: 'Uma suíte de neve do Arctic SnowHotel, perto de Rovaniemi: uma cama com mantas de pele entre esculturas de gelo e uma ave de asas abertas esculpida na parede de neve',

  staysEyebrow: 'Inverno 2026–27',
  staysH2: 'Onde dá para dormir na neve',
  staysIntro:
    'Os três são reconstruídos todo inverno, então os quartos, os temas e as datas mudam de um ano para outro. Abaixo está o que cada lugar informa no próprio site sobre a próxima temporada.',
  arctic: {
    name: 'Arctic SnowHotel & Glass Igloos',
    place: 'Lehtoahontie 27, Rovaniemi: a cerca de 26 km (30 min) do centro da cidade e da Vila do Papai Noel, e a 40 min do aeroporto',
    facts: [
      'O hotel de neve abre em 15 de dezembro de 2026, e a temporada vai até 31 de março.',
      'Dentro do hotel de neve e gelo, a temperatura fica entre 0 e −5 °C.',
      'A noite inclui sacos de dormir feitos para frio extremo, acesso ao Snowhotel Lounge aquecido, uma sauna finlandesa compartilhada e bufê de café da manhã.',
      'O quarto de neve fica só para você a partir das 21h. O jantar e os traslados a partir de Rovaniemi estão nos pacotes do resort, não na diária do quarto.',
      'O pernoite não é recomendado para crianças menores de 5 anos.',
    ],
    glassNote: [
      'O mesmo resort também tem iglus de vidro aquecidos, abertos a partir de 1º de setembro. Eles são comparados com outros dez resorts na nossa ',
      { to: '/glass-igloos', label: 'página de iglus de vidro' },
      '.',
    ],
    ctaLabel: 'Ver preços e disponibilidade',
    ctaNote: 'Abre a página do próprio resort no nosso parceiro de reservas, o Trip.com, com preços para as suas datas de viagem.',
  },
  snowVillage: {
    name: 'Lapland Hotels SnowVillage',
    place: 'Lainio, Kittilä, perto de Ylläs',
    facts: [
      'Aberto de 25 de dezembro de 2026 a 4 de abril de 2027, todos os dias, das 10h às 22h.',
      'Reconstruído do zero todo ano desde 2001, com neve e gelo natural. O tema de 2026–27 ainda não foi anunciado.',
      'Para pernoitar, há só uma suíte de gelo de luxo para duas pessoas, vendida em pacote com visita guiada, jantar no Restaurante de Gelo, café da manhã num restaurante aquecido e cabana kota com sauna e hidromassagem. A reserva é feita por e-mail com o próprio SnowVillage, e a página da suíte ainda descreve o inverno de 2025–26.',
      'Durante o horário de funcionamento, um ônibus sai todos os dias de Levi e de Ylläs.',
    ],
  },
  luckyRanch: {
    name: 'Iglus de neve do Lucky Ranch',
    place: 'Vilarejo de Pyhäjärvi, Pelkosenniemi, a cerca de 10 km de Pyhä',
    facts: [
      'Os iglus de neve são reconstruídos todo mês de dezembro, e a temperatura lá dentro fica sempre abaixo de 0 °C.',
      'Você dorme numa cama comum, com saco de dormir quente e bolsa de água quente, e a diária inclui um café da manhã leve.',
      'Ao lado dos iglus fica um abrigo aquecido, e os banheiros e chuveiros do saloon do rancho ficam abertos a noite toda para os hóspedes dos iglus.',
      'O rancho recomenda os iglus para adultos e crianças saudáveis e vende os pernoites no próprio site.',
    ],
  },

  nightEyebrow: 'Antes de reservar',
  nightH2: 'Como é uma noite na neve',
  night: [
    { title: 'A temperatura fica abaixo de zero', body: 'No Arctic SnowHotel, o quarto fica entre 0 e −5 °C a noite toda; no Lucky Ranch, sempre abaixo de 0 °C. O frio é justamente a graça: quarto aquecido é iglu de vidro, não hotel de neve.' },
    { title: 'Quem esquenta é o saco de dormir', body: 'O Arctic SnowHotel fornece sacos de dormir feitos para frio extremo, e o Lucky Ranch, sacos de dormir quentes e bolsas de água quente. Você não precisa levar os seus.' },
    { title: 'Há um lugar quente ao lado', body: 'O Arctic SnowHotel tem o Snowhotel Lounge aquecido e uma sauna; o Lucky Ranch, um abrigo aquecido ao lado dos iglus. Se a noite ficar fria demais, você tem para onde ir.' },
    { title: 'Crianças', body: 'O Arctic SnowHotel não recomenda uma noite nos seus quartos de neve para crianças menores de 5 anos. O Lucky Ranch recomenda os iglus para adultos e crianças saudáveis. O SnowVillage não informa restrição de idade, então pergunte antes de reservar.' },
  ],

  visitsEyebrow: 'Sem pernoitar',
  visitsH2: 'Neve e gelo para visitar de dia',
  visitsIntro:
    'Também dá para conhecer salas de neve e gelo sem dormir nelas. O Arctic SnowHotel e o SnowVillage vendem ingressos para visitas diurnas; no Snowman World e no SnowCastle of Kemi, só dá para visitar durante o dia.',
  visitHeaders: { name: 'Lugar', place: 'Onde', season: 'Temporada', what: 'O que você vê' },
  visits: [
    {
      name: 'Arctic SnowHotel',
      place: 'Rovaniemi, a 26 km do centro',
      season: 'De 15 de dezembro a 31 de março, todos os dias, das 10h às 20h',
      what: 'Ingresso para ver a arte em neve e gelo, a capela de gelo, o Restaurante de Gelo e o Bar de Gelo; a visita guiada de 45 minutos é cobrada à parte.',
    },
    {
      name: 'Lapland Hotels SnowVillage',
      place: 'Lainio, Kittilä',
      season: 'De 25 de dezembro de 2026 a 4 de abril de 2027, todos os dias, das 10h às 22h',
      what: 'Arte em neve e gelo, o bar de gelo, um espaço para casamentos, uma suíte de neve, um cinema e um escorregador de gelo. Os ingressos são vendidos só na recepção; as visitas guiadas são reservadas com antecedência.',
    },
    {
      name: 'Snowman World',
      place: 'Vila do Papai Noel, a 8 km do centro de Rovaniemi',
      season: 'De 6 de dezembro de 2026 a 17 de março de 2027',
      what: 'Um parque de neve e gelo com atividades, comida e bebida. Não vende pernoites.',
    },
    {
      name: 'SnowCastle of Kemi',
      place: 'Kemi, a 8 km do aeroporto de Kemi-Tornio',
      season: 'Parque de inverno de janeiro ao início de abril (datas de 2027 ainda não divulgadas); SnowExperience o ano todo',
      what: 'O castelo de neve em si não é construído há anos, e no momento não há hotel de neve. A SnowExperience, em ambiente fechado, é mantida a −5 °C o ano todo.',
    },
  ],

  swedenEyebrow: 'Bom saber',
  swedenH2: 'O ICEHOTEL fica na Suécia',
  swedenBody: [
    'Quando se fala em “hotel de gelo”, muitas vezes a referência é o ICEHOTEL de Jukkasjärvi, perto de Kiruna, na Lapônia sueca. O hotel de inverno abre de dezembro a abril, e o ICEHOTEL 365 tem quartos de gelo e neve o ano todo.',
    'Ele não fica na Finlândia, por isso não está na lista acima. Este site é sobre a Lapônia finlandesa.',
  ],

  nextEyebrow: 'Opções mais quentes',
  nextH2: 'Se uma noite de frio já basta',
  next: [
    [
      'Um iglu de vidro é um quarto aquecido com o céu sobre a cama. Comparamos 11 resorts com iglus de vidro na ',
      { to: '/glass-igloos', label: 'página de iglus de vidro' },
      '.',
    ],
    [
      'Para o resto da semana, as ',
      { to: '/cabins', label: 'páginas de cabanas' },
      ' listam as cabanas de aluguel de cada região da Lapônia, com a distância até o vilarejo mais próximo.',
    ],
  ],

  checkedNote:
    'Informações conferidas no site de cada lugar em 22 de outubro de 2026. Os hotéis de neve são reconstruídos todo inverno, então as datas e o que a noite inclui podem mudar: confirme na página do próprio hotel antes de reservar.',
}

export default ptBR
