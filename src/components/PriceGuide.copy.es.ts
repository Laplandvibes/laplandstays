// Copy for the PriceGuide home-page section (lang: es).
import type { PriceGuideCopy } from './PriceGuide.copy.en'

const copy: PriceGuideCopy = {
  eyebrow: 'Precios de alojamiento en Laponia',
  heading: 'Lo que cuesta de verdad una noche en Laponia',
  lead: 'Auroras deslizándose sobre el techo de cristal, la sauna ya caliente, un bosque silenciado por la nieve al otro lado de la ventana durante el desayuno, una noche así en Laponia puede costar €100 o €1,500. Reunimos las horquillas de precio reales de 15 alojamientos directamente de las páginas de reserva, para que vea de un vistazo qué sueño está al alcance de su presupuesto.',
  propertiesLabel: 'Alojamientos:',
  tiers: [
    {
      name: 'Iglús de cristal',
      note: 'por noche, por iglú',
      examples: ['Kakslauttanen Arctic Resort', 'Levin Iglut', 'Star Arctic Hotel', 'Aurora Village Ivalo', 'Nova Skyland Rovaniemi'],
      body: 'Habitaciones e iglús con techo de cristal construidos específicamente para ver auroras. La categoría más cara, techos de cristal, ubicaciones remotas e inventario limitado hacen que Kakslauttanen se reserve con 8–12 meses de antelación.',
      ctaLabel: 'Buscar iglús de cristal',
    },
    {
      name: 'Cabañas para auroras boreales',
      note: 'por noche, por cabaña',
      examples: ['Apukka Resort', 'Arctic TreeHouse Hotel', 'Arctic SnowHotel & Glass Igloos'],
      body: 'La clásica cabaña lapona con ventanas orientadas a la aurora, sauna privada y bosque alrededor. La mejor relación precio-experiencia para parejas y grupos pequeños que persiguen la aurora.',
      ctaLabel: 'Buscar cabañas para auroras',
    },
    {
      name: 'Hoteles de nieve y hielo',
      note: 'por noche, solo en temporada',
      examples: ['Lainio Snow Village (Kittilä)', 'Torassieppi Winter Village (Muonio)'],
      body: 'Territorio de una sola noche, se esculpen en hielo cada diciembre y se derriten cada abril. Vestuarios calefactados, sacos de dormir térmicos y una historia que contará para siempre.',
      ctaLabel: 'Buscar hoteles de nieve',
    },
    {
      name: 'Lodges en plena naturaleza',
      note: 'por noche, solo suites',
      examples: ['Muotka Wilderness Lodge (Inari)', 'Nellim Wilderness Hotel', 'Lumi Resort (Kittilä)'],
      body: 'Pensados para cazadores de auroras que quieren servicio. Pequeños, remotos, con guías. Naturaleza salvaje en plan todo incluido, cocina de chef, huskies a mano y el menú completo de safaris desde la recepción.',
      ctaLabel: 'Buscar lodges',
    },
    {
      name: 'Hoteles y cadenas de cabañas de Laponia',
      note: 'por noche, por habitación',
      examples: ['Lapland Hotels (varios resorts)', 'Harriniva (Muonio)'],
      body: 'La puerta de entrada más fiable, hoteles y cadenas de cabañas consolidados en Levi, Ylläs, Saariselkä, Rovaniemi y Muonio. Restaurantes a pie y safaris que salen desde la puerta.',
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
