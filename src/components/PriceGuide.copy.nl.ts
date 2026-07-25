// Copy for the PriceGuide home-page section (lang: nl).
import type { PriceGuideCopy } from './PriceGuide.copy.en'

const copy: PriceGuideCopy = {
  eyebrow: 'Accommodatieprijzen in Lapland',
  heading: 'Wat een nacht in Lapland echt kost',
  lead: "Het noorderlicht dat langs uw glazen dak schuift, een sauna die al warm is, bij het ontbijt een sneeuwstil bos achter het raam, zo'n nacht in Lapland kan €100 kosten of €1,500. We verzamelden de werkelijke prijsmarges van 15 accommodaties rechtstreeks van de boekingspagina's, zodat u in één oogopslag ziet welke droom binnen uw budget valt.",
  propertiesLabel: 'Accommodaties:',
  tiers: [
    {
      name: "Glasiglo's",
      note: 'per nacht, per iglo',
      examples: ['Kakslauttanen Arctic Resort', 'Levin Iglut', 'Star Arctic Hotel', 'Aurora Village Ivalo', 'Nova Skyland Rovaniemi'],
      body: "Kamers en iglo's met glazen dak, speciaal gebouwd om het noorderlicht te bekijken. De duurste categorie, glazen daken, afgelegen locaties en beperkt aanbod betekenen dat Kakslauttanen 8–12 maanden vooruit volgeboekt is.",
      ctaLabel: "Vind glasiglo's",
    },
    {
      name: 'Noorderlichthutten',
      note: 'per nacht, per hut',
      examples: ['Apukka Resort', 'Arctic TreeHouse Hotel', 'Arctic SnowHotel & Glass Igloos'],
      body: 'Klassiek Laplands hutverblijf met ramen op het noorderlicht, privésauna en bos rondom. De beste prijs-belevingsverhouding voor stellen en kleine groepen die het noorderlicht najagen.',
      ctaLabel: 'Vind noorderlichthutten',
    },
    {
      name: 'Sneeuw- en ijshotels',
      note: 'per nacht, alleen in het seizoen',
      examples: ['Lainio Snow Village (Kittilä)', 'Torassieppi Winter Village (Muonio)'],
      body: 'Het domein van één enkele nacht, elke december uit ijs gehouwen, elke april gesmolten. Verwarmde kleedruimtes, thermische slaapzakken en een verhaal dat u voor altijd blijft vertellen.',
      ctaLabel: 'Vind sneeuwhotels',
    },
    {
      name: 'Wildernislodges',
      note: 'per nacht, alleen suites',
      examples: ['Muotka Wilderness Lodge (Inari)', 'Nellim Wilderness Hotel', 'Lumi Resort (Kittilä)'],
      body: "Gebouwd voor noorderlichtjagers die service willen. Klein, afgelegen, met gids. Wildernis in all-inclusive-stijl, chef-koks, husky's binnen handbereik en het volledige safari-aanbod vanuit de lobby.",
      ctaLabel: 'Vind wildernislodges',
    },
    {
      name: 'Laplandse hotels en hutketens',
      note: 'per nacht, per kamer',
      examples: ['Lapland Hotels (meerdere resorts)', 'Harriniva (Muonio)'],
      body: "De betrouwbaarste eerste keuze, gevestigde Laplandse hotels en hutketens in Levi, Ylläs, Saariselkä, Rovaniemi en Muonio. Restaurants op loopafstand, safari's vertrekken vanaf de deur.",
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
