// Copy for the PriceGuide home-page section (lang: pt-BR).
import type { PriceGuideCopy } from './PriceGuide.copy.en'

const copy: PriceGuideCopy = {
  eyebrow: 'Nível de preço',
  heading: 'Hospedagens da Lapônia, da mais cara à mais barata',
  lead: 'Auroras passando pelo teto de vidro, uma sauna já quente e, no café da manhã, a floresta nevada em silêncio do lado de fora. Cinco tipos de noite na Lapônia, em ordem do inesquecível ao cotidiano, com as hospedagens por trás de cada um. O que uma noite custa varia com a temporada e a semana, então a tarifa vem da página de reserva, para as suas datas.',
  scale: { low: 'Mais barato', high: 'Mais caro' },
  tiers: [
    {
      name: 'Iglus de vidro',
      examples: ['Kakslauttanen Arctic Resort', 'Levin Iglut', 'Star Arctic Hotel', 'Aurora Village Ivalo', 'Nova Skyland Rovaniemi'],
      ctaLabel: 'Encontrar iglus de vidro',
    },
    {
      name: 'Cabanas para aurora boreal',
      examples: ['Apukka Resort', 'Arctic TreeHouse Hotel', 'Arctic SnowHotel & Glass Igloos'],
      ctaLabel: 'Encontrar cabanas de aurora',
    },
    {
      name: 'Hotéis de neve e gelo',
      examples: ['Lainio Snow Village (Kittilä)', 'Torassieppi Winter Village (Muonio)'],
      ctaLabel: 'Encontrar hotéis de neve',
    },
    {
      name: 'Lodges na natureza selvagem',
      examples: ['Muotka Wilderness Lodge (Inari)', 'Nellim Wilderness Hotel', 'Lumi Resort (Kittilä)'],
      ctaLabel: 'Encontrar lodges',
    },
    {
      name: 'Hotéis e redes de cabanas da Lapônia',
      examples: ['Lapland Hotels (vários resorts)', 'Harriniva (Muonio)'],
      ctaLabel: 'Encontrar hotéis e cabanas',
    },
  ],
  tip: {
    label: 'Dica de reserva.',
    pre: 'Os iglus de vidro do Kakslauttanen e do Levin Iglut esgotam com ',
    strong: '8–12 meses de antecedência',
    post: ' para a alta temporada de auroras (novembro – março). Se um deles é a âncora da sua viagem, reserve-o primeiro e planeje o resto em torno dessa data.',
  },
}

export default copy
