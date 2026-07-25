// Copy for the PriceGuide home-page section (lang: nl).
import type { PriceGuideCopy } from './PriceGuide.copy.en'

const copy: PriceGuideCopy = {
  eyebrow: 'Accommodatieprijzen in Lapland',
  heading: 'Wat een nacht in Lapland echt kost',
  lead: "Het noorderlicht dat langs uw glazen dak schuift, een sauna die al warm is, bij het ontbijt een sneeuwstil bos achter het raam, zo'n nacht in Lapland kan € 100 kosten of € 1.500. We verzamelden de werkelijke prijsmarges van 15 accommodaties rechtstreeks van de boekingspagina's, zodat u in één oogopslag ziet welke droom binnen uw budget valt.",
  tiers: [
    {
      name: "Glasiglo's",
      note: 'per nacht, per iglo',
      examples: ['Kakslauttanen Arctic Resort', 'Levin Iglut', 'Star Arctic Hotel', 'Aurora Village Ivalo', 'Nova Skyland Rovaniemi'],
      ctaLabel: "Vind glasiglo's",
    },
    {
      name: 'Noorderlichthutten',
      note: 'per nacht, per hut',
      examples: ['Apukka Resort', 'Arctic TreeHouse Hotel', 'Arctic SnowHotel & Glass Igloos'],
      ctaLabel: 'Vind noorderlichthutten',
    },
    {
      name: 'Sneeuw- en ijshotels',
      note: 'per nacht, alleen in het seizoen',
      examples: ['Lainio Snow Village (Kittilä)', 'Torassieppi Winter Village (Muonio)'],
      ctaLabel: 'Vind sneeuwhotels',
    },
    {
      name: 'Wildernislodges',
      note: 'per nacht, alleen suites',
      examples: ['Muotka Wilderness Lodge (Inari)', 'Nellim Wilderness Hotel', 'Lumi Resort (Kittilä)'],
      ctaLabel: 'Vind wildernislodges',
    },
    {
      name: 'Laplandse hotels en hutketens',
      note: 'per nacht, per kamer',
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
