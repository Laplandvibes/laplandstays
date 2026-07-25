// Copy for the PriceGuide home-page section (lang: es).
import type { PriceGuideCopy } from './PriceGuide.copy.en'

const copy: PriceGuideCopy = {
  eyebrow: 'Precios de alojamiento en Laponia',
  heading: 'Lo que cuesta de verdad una noche en Laponia',
  lead: 'Auroras deslizándose sobre el techo de cristal, la sauna ya caliente, un bosque silenciado por la nieve al otro lado de la ventana durante el desayuno, una noche así en Laponia puede costar 100 € o 1500 €. Reunimos las horquillas de precio reales de 15 alojamientos directamente de las páginas de reserva, para que vea de un vistazo qué sueño está al alcance de su presupuesto.',
  tiers: [
    {
      name: 'Iglús de cristal',
      note: 'por noche, por iglú',
      examples: ['Kakslauttanen Arctic Resort', 'Levin Iglut', 'Star Arctic Hotel', 'Aurora Village Ivalo', 'Nova Skyland Rovaniemi'],
      ctaLabel: 'Buscar iglús de cristal',
    },
    {
      name: 'Cabañas para auroras boreales',
      note: 'por noche, por cabaña',
      examples: ['Apukka Resort', 'Arctic TreeHouse Hotel', 'Arctic SnowHotel & Glass Igloos'],
      ctaLabel: 'Buscar cabañas para auroras',
    },
    {
      name: 'Hoteles de nieve y hielo',
      note: 'por noche, solo en temporada',
      examples: ['Lainio Snow Village (Kittilä)', 'Torassieppi Winter Village (Muonio)'],
      ctaLabel: 'Buscar hoteles de nieve',
    },
    {
      name: 'Lodges en plena naturaleza',
      note: 'por noche, solo suites',
      examples: ['Muotka Wilderness Lodge (Inari)', 'Nellim Wilderness Hotel', 'Lumi Resort (Kittilä)'],
      ctaLabel: 'Buscar lodges',
    },
    {
      name: 'Hoteles y cadenas de cabañas de Laponia',
      note: 'por noche, por habitación',
      examples: ['Lapland Hotels (varios resorts)', 'Harriniva (Muonio)'],
      ctaLabel: 'Buscar hoteles y cabañas',
    },
  ],
  tip: {
    label: 'Consejo de reserva.',
    pre: 'Los iglús de cristal de Kakslauttanen y Levin Iglut se agotan con ',
    strong: '8–12 meses de antelación',
    post: ' para la temporada alta de auroras (noviembre – marzo). Si uno de ellos es el ancla de su viaje, resérvelo primero y planifique el resto alrededor de esa fecha.',
  },
}

export default copy
