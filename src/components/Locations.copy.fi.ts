import type { Copy } from './Locations.copy.types'

const copy: Copy = {
    eyebrow: 'Missä yöpyä Lapissa',
    h2: 'Neljä kohdetta, neljä erilaista matkaa',
    lead: 'Levi helppoon saavutettavuuteen ja kyläelämään. Ylläs hiljaisuuteen. Saariselkä lasi-igluihin revontulten alla. Inari pohjoisen hiljaisuuteen jonne useimmat matkailijat eivät pääse.',
    pricesLabel: 'Hinnat:',
    checkAvailability: 'Tarkista saatavuus',
    guideTo: (name: string) => {
      const allative: Record<string, string> = {
        'Levi': 'Leville',
        'Ylläs': 'Ylläkselle',
        'Saariselkä': 'Saariselälle',
        'Rovaniemi': 'Rovaniemelle',
        'Inari': 'Inariin',
      }
      const inflected = allative[name]
      return inflected ? `Opas ${inflected}` : `Opas: ${name}`
    },
    locations: [
      {
        name: 'Levi',
        tagline: 'Lapin luksuksen sydän',
        description: 'Suomen suurin hiihtokeskus kävelyetäisyydellä olevalla kylällä tunturin juurella. Levin majoitus sijoittuu Lapland Hotels -huoneistoista keskustasta aina rinneasuntoihin ja lasimökkeihin Levin Iglutissa, riittävän lähellä kyläravintoloita, riittävän kaukana revontulien katseluun pimeällä taivaalla.',
        highlights: ['Rinneasunnot', 'Ravintolat ja yöelämä', 'Täysi safariohjelma'],
        priceFrom: 'Lapin hotellit alkaen 100 €/yö · lasi-iglut alkaen 350 €',
      },
      {
        name: 'Ylläs',
        tagline: 'Koskematonta pohjoismaista erämaata',
        description: 'Kaksi tunturia, Suomen pisimmät rinteet eikä yhtä keskustaa, Ylläs on hiljaisempi sisar. Ylläksen majoitus tarkoittaa hirsimökkejä jotka ovat hajallaan Pallas-Yllästunturin kansallispuiston reunalla, ihanteellinen kun hiljaisuus ja latupääsy ovat tärkeämpiä kuin kylähumu.',
        highlights: ['Hiihtoladun valtakunta', 'Tunturinäköalamökit', 'Ei ruuhkaa'],
        priceFrom: 'Hirsimökit alkaen 150 €/yö',
      },
      {
        name: 'Saariselkä',
        tagline: 'Portti Arktikseen',
        description: 'Urho Kekkosen kansallispuiston rajalla, yhdellä Euroopan viimeisistä suurista erämaista. Tämä on Saariselän lasi-iglu-maata, Kakslauttanen, Star Arctic ja Muotka, jossa lasikattoiset huoneet kohtaavat kullanhuuhdontajoet ja ilma kylmenee kunnolla.',
        highlights: ['Lasi-iglu-maata', 'Kansallispuiston portti', 'Syvä revontulivyöhyke'],
        priceFrom: 'Kakslauttasen lasi-iglut alkaen 400 €/yö · erämaakohteet alkaen 200 €',
      },
      {
        name: 'Inari',
        tagline: 'Saamelaiskulttuuri, arktiset järvet',
        description: 'Missä saamelaisperintö kohtaa valtavan Inarijärven. Neljästä kohteesta syrjäisin ja eksklusiivisin, Inarin mökit yksityisillä järvenrannoilla, Nellimin erämaahotelli ja aurora-villat Ivalossa matkailijoille jotka mittaavat matkaa hiljaisuudella, ei pysähdyksillä.',
        highlights: ['Inarijärvi', 'Saamelaiskulttuuri', 'Pohjoisen syrjäisyys'],
        priceFrom: 'Rantamökit alkaen 200 €/yö · Aurora Village alkaen 300 €',
      },
    ],
  }

export default copy