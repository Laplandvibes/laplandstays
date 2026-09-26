// Copy for the PriceGuide home-page section (lang: es).
import type { PriceGuideCopy } from './PriceGuide.copy.en'

const copy: PriceGuideCopy = {
  eyebrow: 'Nivel de precio',
  heading: 'Alojamientos de Laponia, del más caro al más asequible',
  lead: 'Auroras cruzando el techo de cristal, una sauna ya caliente y, en el desayuno, un bosque nevado en silencio al otro lado de la ventana. Cinco tipos de noche en Laponia, ordenados de lo irrepetible a lo cotidiano, con los alojamientos que hay detrás de cada uno. Lo que cuesta una noche varía según la temporada y la semana, así que la tarifa sale de la página de reservas, para sus fechas.',
  scale: { low: 'Más asequible', high: 'Más caro' },
  tiers: [
    {
      name: 'Iglús de cristal',
      examples: ['Kakslauttanen Arctic Resort', 'Levin Iglut', 'Star Arctic Hotel', 'Aurora Village Ivalo', 'Nova Skyland Rovaniemi'],
      ctaLabel: 'Buscar iglús de cristal',
    },
    {
      name: 'Cabañas para auroras boreales',
      examples: ['Apukka Resort', 'Arctic TreeHouse Hotel', 'Arctic SnowHotel & Glass Igloos'],
      ctaLabel: 'Buscar cabañas para auroras',
    },
    {
      name: 'Hoteles de nieve y hielo',
      examples: ['Lainio Snow Village (Kittilä)', 'Torassieppi Winter Village (Muonio)'],
      ctaLabel: 'Buscar hoteles de nieve',
    },
    {
      name: 'Lodges en plena naturaleza',
      examples: ['Muotka Wilderness Lodge (Inari)', 'Nellim Wilderness Hotel', 'Lumi Resort (Kittilä)'],
      ctaLabel: 'Buscar lodges',
    },
    {
      name: 'Hoteles y cadenas de cabañas de Laponia',
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
