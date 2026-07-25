// Copy for the PriceGuide home-page section (lang: pt-BR).
import type { PriceGuideCopy } from './PriceGuide.copy.en'

const copy: PriceGuideCopy = {
  eyebrow: 'Preços de hospedagem na Lapônia',
  heading: 'Quanto custa de verdade uma noite na Lapônia',
  lead: 'Auroras deslizando sobre o teto de vidro, a sauna já quente, uma floresta silenciada pela neve do lado de fora da janela na hora do café da manhã, uma noite assim na Lapônia pode custar € 100 ou € 1.500. Reunimos as faixas de preço reais de 15 hospedagens direto das páginas de reserva, para você ver de uma olhada só qual sonho cabe no seu orçamento.',
  tiers: [
    {
      name: 'Iglus de vidro',
      note: 'por noite, por iglu',
      examples: ['Kakslauttanen Arctic Resort', 'Levin Iglut', 'Star Arctic Hotel', 'Aurora Village Ivalo', 'Nova Skyland Rovaniemi'],
      ctaLabel: 'Encontrar iglus de vidro',
    },
    {
      name: 'Cabanas para aurora boreal',
      note: 'por noite, por cabana',
      examples: ['Apukka Resort', 'Arctic TreeHouse Hotel', 'Arctic SnowHotel & Glass Igloos'],
      ctaLabel: 'Encontrar cabanas de aurora',
    },
    {
      name: 'Hotéis de neve e gelo',
      note: 'por noite, apenas na temporada',
      examples: ['Lainio Snow Village (Kittilä)', 'Torassieppi Winter Village (Muonio)'],
      ctaLabel: 'Encontrar hotéis de neve',
    },
    {
      name: 'Lodges na natureza selvagem',
      note: 'por noite, só suítes',
      examples: ['Muotka Wilderness Lodge (Inari)', 'Nellim Wilderness Hotel', 'Lumi Resort (Kittilä)'],
      ctaLabel: 'Encontrar lodges',
    },
    {
      name: 'Hotéis e redes de cabanas da Lapônia',
      note: 'por noite, por quarto',
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
