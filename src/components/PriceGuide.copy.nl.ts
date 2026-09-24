// Copy for the PriceGuide home-page section (lang: nl).
import type { PriceGuideCopy } from './PriceGuide.copy.en'

const copy: PriceGuideCopy = {
  eyebrow: 'Prijsniveau',
  heading: 'Lapland-accommodaties, van duur tot goedkoop',
  lead: 'Noorderlicht dat over het glazen dak trekt, een sauna die al warm is en bij het ontbijt een sneeuwstil bos achter het raam. Vijf soorten Laplandnacht, gerangschikt van eenmalig tot alledaags, met de accommodaties achter elke soort. Wat een nacht kost hangt af van het seizoen en de week, dus het tarief komt van de boekingspagina, voor uw eigen data.',
  scale: { low: 'Goedkoper', high: 'Duurder' },
  tiers: [
    {
      name: "Glasiglo's",
      examples: ['Kakslauttanen Arctic Resort', 'Levin Iglut', 'Star Arctic Hotel', 'Aurora Village Ivalo', 'Nova Skyland Rovaniemi'],
      ctaLabel: "Vind glasiglo's",
    },
    {
      name: 'Noorderlichthutten',
      examples: ['Apukka Resort', 'Arctic TreeHouse Hotel', 'Arctic SnowHotel & Glass Igloos'],
      ctaLabel: 'Vind noorderlichthutten',
    },
    {
      name: 'Sneeuw- en ijshotels',
      examples: ['Lainio Snow Village (Kittilä)', 'Torassieppi Winter Village (Muonio)'],
      ctaLabel: 'Vind sneeuwhotels',
    },
    {
      name: 'Wildernislodges',
      examples: ['Muotka Wilderness Lodge (Inari)', 'Nellim Wilderness Hotel', 'Lumi Resort (Kittilä)'],
      ctaLabel: 'Vind wildernislodges',
    },
    {
      name: 'Laplandse hotels en hutketens',
      examples: ['Lapland Hotels (meerdere resorts)', 'Harriniva (Muonio)'],
      ctaLabel: 'Vind hotels en hutten',
    },
  ],
  tip: {
    label: 'Boekingstip.',
    pre: "De glasiglo's van Kakslauttanen en Levin Iglut zitten voor het hoogseizoen van het noorderlicht (november – maart) ",
    strong: '8–12 maanden vooruit',
    post: ' vol. Is een van deze het anker van uw reis, reserveer die dan eerst en plan de rest van de reis rond die datum.',
  },
}

export default copy
