// Copy for the PriceGuide home-page section (lang: fi).
import type { PriceGuideCopy } from './PriceGuide.copy.en'

const copy: PriceGuideCopy = {
  eyebrow: 'Lapin majoitushinnat',
  heading: 'Mitä yö Lapissa oikeasti maksaa',
  lead: 'Revontulet lasikaton läpi, sauna valmiiksi lämmitettynä ja aamulla lumihiljainen metsä ikkunan takana, tällainen yö Lapissa voi maksaa satasen tai puolitoista tuhatta. Kokosimme 15 kohteen todelliset hintahaarukat suoraan varauspalveluista, jotta näet yhdellä silmäyksellä, millaiseen unelmaan budjettisi riittää.',
  propertiesLabel: 'Kohteet:',
  tiers: [
    {
      name: 'Lasi-iglut',
      keyword: 'lasi-iglu lappi',
      range: '€250 – €1,500',
      note: 'per yö / iglu',
      examples: ['Kakslauttanen Arctic Resort', 'Levin Iglut', 'Star Arctic Hotel', 'Aurora Village Ivalo', 'Nova Skyland Rovaniemi'],
      body: 'Lasikattoiset huoneet ja iglut, jotka on rakennettu nimenomaan revontulien katselua varten. Kallein kategoria, lasikatot, syrjäiset sijainnit ja pieni kapasiteetti tarkoittavat, että Kakslauttanen varataan täyteen 8–12 kuukautta etukäteen.',
      ctaLabel: 'Katso lasi-iglut',
    },
    {
      name: 'Revontulimökit',
      keyword: 'revontulimökki',
      range: '€150 – €700',
      note: 'per yö / mökki',
      examples: ['Apukka Resort', 'Arctic TreeHouse Hotel', 'Arctic SnowHotel & Glass Igloos'],
      body: 'Klassista Lapin mökkimajoitusta revontuli-ikkunoilla, omalla saunalla ja metsän keskellä. Paras hinta–elämys-suhde pariskunnille ja pienille ryhmille revontulijahdissa.',
      ctaLabel: 'Katso revontulimökit',
    },
    {
      name: 'Lumi- ja jäähotellit',
      keyword: 'lumihotelli lappi',
      range: '€150 – €400',
      note: 'per yö, vain talvikausi',
      examples: ['Lainio Snow Village (Kittilä)', 'Torassieppi Winter Village (Muonio)'],
      body: 'Yhden yön elämys, veistetään jäästä joka joulukuu ja sulaa joka huhtikuu. Lämpimät pukuhuoneet, termomakuupussit ja tarina, jota kerrot vielä vuosien päästä.',
      ctaLabel: 'Katso lumihotellit',
    },
    {
      name: 'Erämaalodget',
      keyword: 'luksusmajoitus lappi',
      range: '€200 – €600',
      note: 'per yö, vain sviittejä',
      examples: ['Muotka Wilderness Lodge (Inari)', 'Nellim Wilderness Hotel', 'Lumi Resort (Kittilä)'],
      body: 'Rakennettu revontulimatkailijoille, jotka haluavat palvelua. Pieniä, syrjäisiä, opastettuja. Ajattele all inclusive -erämaata, keittiömestarin ruokaa, huskyja ja koko safarivalikoima suoraan aulasta.',
      ctaLabel: 'Katso erämaalodget',
    },
    {
      name: 'Lapin hotellit ja mökkiketjut',
      keyword: 'lapin hotelli',
      range: '€100 – €350',
      note: 'per yö / huone',
      examples: ['Lapland Hotels (useita kohteita)', 'Harriniva (Muonio)'],
      body: 'Luotettavin tapa aloittaa, tunnetut Lapin hotellit ja mökkiketjut Levillä, Ylläksellä, Saariselällä, Rovaniemellä ja Muoniossa. Ravintolat kävelymatkan päässä, safarit lähtevät ovelta.',
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
