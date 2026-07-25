// Copy for the PriceGuide home-page section (lang: fi).
import type { PriceGuideCopy } from './PriceGuide.copy.en'

const copy: PriceGuideCopy = {
  eyebrow: 'Lapin majoitushinnat',
  heading: 'Mitä yö Lapissa oikeasti maksaa',
  lead: 'Revontulet lasikaton läpi, sauna valmiiksi lämmitettynä ja aamulla lumihiljainen metsä ikkunan takana, tällainen yö Lapissa voi maksaa satasen tai puolitoista tuhatta. Kokosimme 15 kohteen todelliset hintahaarukat suoraan varauspalveluista, jotta näet yhdellä silmäyksellä, millaiseen unelmaan budjettisi riittää.',
  tiers: [
    {
      name: 'Lasi-iglut',
      note: 'per yö / iglu',
      examples: ['Kakslauttanen Arctic Resort', 'Levin Iglut', 'Star Arctic Hotel', 'Aurora Village Ivalo', 'Nova Skyland Rovaniemi'],
      ctaLabel: 'Katso lasi-iglut',
    },
    {
      name: 'Revontulimökit',
      note: 'per yö / mökki',
      examples: ['Apukka Resort', 'Arctic TreeHouse Hotel', 'Arctic SnowHotel & Glass Igloos'],
      ctaLabel: 'Katso revontulimökit',
    },
    {
      name: 'Lumi- ja jäähotellit',
      note: 'per yö, vain talvikausi',
      examples: ['Lainio Snow Village (Kittilä)', 'Torassieppi Winter Village (Muonio)'],
      ctaLabel: 'Katso lumihotellit',
    },
    {
      name: 'Erämaalodget',
      note: 'per yö, vain sviittejä',
      examples: ['Muotka Wilderness Lodge (Inari)', 'Nellim Wilderness Hotel', 'Lumi Resort (Kittilä)'],
      ctaLabel: 'Katso erämaalodget',
    },
    {
      name: 'Lapin hotellit ja mökkiketjut',
      note: 'per yö / huone',
      examples: ['Lapland Hotels (useita kohteita)', 'Harriniva (Muonio)'],
      ctaLabel: 'Katso hotellit ja mökit',
    },
  ],
  tip: {
    label: 'Varausvinkki.',
    pre: 'Kakslauttasen ja Levin Iglujen lasi-iglut varataan loppuun ',
    strong: '8–12 kuukautta etukäteen',
    post: ' revontulisesongiksi (marraskuu–maaliskuu). Jos jokin näistä on matkasi ankkuri, varaa se ensin ja rakenna loppumatka sen päivämäärän ympärille.',
  },
}

export default copy
