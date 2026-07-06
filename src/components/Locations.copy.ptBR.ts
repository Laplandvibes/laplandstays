import type { Copy } from './Locations.copy.types'

const copy: Copy = {
    eyebrow: 'Onde se hospedar na Lapônia',
    h2: 'Quatro destinos, quatro viagens diferentes',
    lead: 'Levi por acesso fácil e vida de vilarejo. Ylläs por silêncio. Saariselkä por iglus de vidro sob a aurora. Inari pelo silêncio do extremo norte que poucos viajantes alcançam.',
    pricesLabel: 'Preços:',
    checkAvailability: 'Ver disponibilidade',
    guideTo: (name: string) => `Guia de ${name}`,
    locations: [
      { name: 'Levi', tagline: 'O coração do luxo da Lapônia', description: 'A maior estação de esqui da Finlândia com um vilarejo a pé do fell. As hospedagens em Levi vão de apartamentos Lapland Hotels no centro a chalés ski-in e cabanas de vidro em Levin Iglut, perto o bastante para jantar na vila, longe o bastante para ver aurora sob céu escuro.', highlights: ['Chalés ski-in', 'Restaurantes e vida noturna', 'Cardápio completo de safáris'], priceFrom: 'Hotéis a partir de 100 €/noite · iglus de vidro a partir de 350 €' },
      { name: 'Ylläs', tagline: 'Natureza nórdica intacta', description: 'Dois fells, as pistas mais longas da Finlândia e sem camada de resort, Ylläs é a irmã mais quieta. As hospedagens são cabanas de tora espalhadas pelo Parque Nacional Pallas-Yllästunturi, ideal quando silêncio e acesso a trilhas importam mais do que agito de vilarejo.', highlights: ['Reino do cross-country', 'Chalés com vista do fell', 'Sem multidões'], priceFrom: 'Cabanas de tora a partir de 150 €/noite' },
      { name: 'Saariselkä', tagline: 'Porta para o Ártico', description: 'Faz fronteira com o Parque Nacional Urho Kekkonen, uma das últimas grandes naturezas da Europa. Esta é a região de iglus de vidro de Saariselkä, Kakslauttanen, Star Arctic e Muotka, onde os tetos de vidro encontram os rios de garimpo de ouro e o ar fica bem frio.', highlights: ['Região de iglus de vidro', 'Acesso a parque nacional', 'Zona profunda de aurora'], priceFrom: 'Iglus de Kakslauttanen a partir de 400 €/noite · lodges a partir de 200 €' },
      { name: 'Inari', tagline: 'Cultura sámi, lagos árticos', description: 'Onde a herança sámi encontra o vasto e congelado Lago Inari. O mais remoto e exclusivo dos quatro, cabanas em margens privadas, Nellim Wilderness Lodge e villas de aurora em Ivalo para viajantes que medem a viagem em quietude, não em paradas.', highlights: ['Lago Inari', 'Cultura sámi', 'Distância do norte extremo'], priceFrom: 'Cabanas à beira do lago a partir de 200 €/noite · Aurora Village a partir de 300 €' },
    ],
  }

export default copy