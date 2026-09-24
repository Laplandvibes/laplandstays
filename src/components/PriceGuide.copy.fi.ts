// Copy for the PriceGuide home-page section (lang: fi).
import type { PriceGuideCopy } from './PriceGuide.copy.en'

const copy: PriceGuideCopy = {
  eyebrow: 'Hintataso',
  heading: 'Majoitustyypit kalleimmasta edullisimpaan',
  lead: 'Revontulet lasikaton läpi, sauna valmiiksi lämmitettynä ja aamulla lumihiljainen metsä ikkunan takana. Viisi erilaista Lapin yötä järjestyksessä kerran elämässä -luokasta arkiseen, ja kunkin luokan kohteet. Yön hinta heittelee kauden ja viikon mukaan, joten se tulee varaussivulta omille päivillesi.',
  scale: { low: 'Edullisempi', high: 'Kalliimpi' },
  tiers: [
    {
      name: 'Lasi-iglut',
      examples: ['Kakslauttanen Arctic Resort', 'Levin Iglut', 'Star Arctic Hotel', 'Aurora Village Ivalo', 'Nova Skyland Rovaniemi'],
      ctaLabel: 'Katso lasi-iglut',
    },
    {
      name: 'Revontulimökit',
      examples: ['Apukka Resort', 'Arctic TreeHouse Hotel', 'Arctic SnowHotel & Glass Igloos'],
      ctaLabel: 'Katso revontulimökit',
    },
    {
      name: 'Lumi- ja jäähotellit',
      examples: ['Lainio Snow Village (Kittilä)', 'Torassieppi Winter Village (Muonio)'],
      ctaLabel: 'Katso lumihotellit',
    },
    {
      name: 'Erämaalodget',
      examples: ['Muotka Wilderness Lodge (Inari)', 'Nellim Wilderness Hotel', 'Lumi Resort (Kittilä)'],
      ctaLabel: 'Katso erämaalodget',
    },
    {
      name: 'Lapin hotellit ja mökkiketjut',
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
