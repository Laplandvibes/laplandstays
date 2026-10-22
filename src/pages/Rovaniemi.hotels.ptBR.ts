import type { RovaniemiHotelsCopy } from './Rovaniemi.hotels.types'

/**
 * Hotéis em Rovaniemi por região, português do Brasil (22.10.2026). Traduzido do EN
 * (Rovaniemi.hotels.en.ts); mesmos fatos, dos sites dos próprios hotéis (22.10.2026), nenhum número
 * que não esteja no EN. Tratamento você; termos do site pt-BR: fjäll Ounasvaara, Vila do Papai Noel,
 * Círculo Polar Ártico, moto de neve, parceiro de reservas.
 */
const ptBR: RovaniemiHotelsCopy = {
  intro: '20 hotéis em quatro regiões. Cada nome abre a página do próprio hotel no nosso parceiro de reservas, com preços para as suas datas de viagem.',
  groups: [
    {
      title: 'Centro da cidade',
      items: [
        { key: 'arcticLight', note: 'A antiga prefeitura de Rovaniemi, construída em 1949, hoje um hotel boutique com 57 quartos; alguns têm sauna própria.' },
        { key: 'scandicRovaniemiCity', note: 'Na Koskikatu, ao lado dos shoppings; o ônibus do aeroporto para na porta, e os quartos Superior Sauna têm sauna privativa.' },
        { key: 'scandicPohjanhovi', note: 'À margem do rio Kemijoki; muitos quartos têm vista para o rio, e no inverno as rotas de moto de neve começam na frente do hotel.' },
        { key: 'arcticCityHotel', note: '90 quartos na Pekankatu. Café da manhã, sauna, estacionamento e Wi-Fi estão incluídos em todas as tarifas, e o ponto do ônibus do aeroporto fica a 300 m.' },
        { key: 'sokosVaakuna', note: '159 quartos na Koskikatu, com saunas compartilhadas abertas todas as noites.' },
        { key: 'santasHotelSantaClaus', note: 'No centro, na Korkalonkatu, a cerca de 10 km do aeroporto, com área de sauna própria.' },
        { key: 'postmasterHotel', note: 'Antigo prédio dos correios dos anos 1950, restaurado, com 49 quartos; algumas suítes têm cozinha compacta e sauna.' },
        { key: 'hotelAakenus', note: 'Administrado por uma família, numa área tranquila a uma curta caminhada do centro: 45 quartos e 20 apartamentos com cozinha.' },
      ],
    },
    {
      title: 'Fjäll Ounasvaara',
      items: [
        { key: 'skyOunasvaara', note: 'No alto do Ounasvaara, a 4 km do centro e a 20 m da pista mais próxima; quartos com sauna e quartos familiares.' },
        { key: 'laplandHotelsOunasvaara', note: 'Cabanas e apartamentos de temporada entre o rio Kemijoki e as pistas de esqui, todos com sauna privativa e cozinha; a 3 km do centro.' },
        { key: 'santasport', note: 'Um centro de treinamento olímpico ao lado das trilhas do Ounasvaara, a 2 km do centro; alguns quartos têm sauna e varanda.' },
      ],
    },
    {
      title: 'Vila do Papai Noel e Círculo Polar Ártico',
      items: [
        { key: 'santaClausHolidayVillage', note: 'Sobre o Círculo Polar Ártico, na Vila do Papai Noel: chalés, suítes e chalés-iglu de vidro, todos com sauna privativa.' },
        { key: 'santasIgloosArcticCircle', note: 'Iglus de vidro voltados para o norte na Vila do Papai Noel, cada um com alarme de aurora; a 5 km do aeroporto.' },
        { key: 'arcticTreeHouse', note: 'Suítes com uma parede inteira de vidro numa encosta arborizada, a 100 m do SantaPark e a 2,2 km da Vila do Papai Noel.' },
        { key: 'novaSkyland', note: 'Todos os quartos e cabanas têm sauna privativa; a cerca de 300 m da Vila do Papai Noel e a 5 minutos de carro do aeroporto.' },
        { key: 'glassResort', note: 'Apartamentos de vidro com sauna privativa e banheira externa, numa floresta dentro da Vila do Papai Noel.' },
      ],
    },
    {
      title: 'Fora da cidade',
      items: [
        { key: 'apukka', note: 'Iglus de vidro entre dois lagos em plena natureza, a 18 km da cidade; o resort tem ônibus próprio até o centro.' },
        { key: 'arcticSnowHotel', note: 'Hotel de neve e gelo a partir de 15 de dezembro e iglus de vidro aquecidos com teto de vidro de 360°, a 26 km do centro.' },
        { key: 'invisibleForest', note: 'Suítes de vidro espelhado com sauna privativa, banheira externa e cozinha, à beira do rio Ounasjoki, a menos de 10 minutos de carro do centro.' },
        { key: 'silverBirch', note: 'Apenas cinco cabanas de vidro, a três metros do chão, à beira de um lago perto de Oikarainen, vendidas para estadias de várias noites.' },
      ],
    },
  ],
}

export default ptBR
