import type { Copy } from './Locations.copy.types'

const copy: Copy = {
    eyebrow: 'Var du bor i Lappland',
    h2: 'Fyra destinationer, fyra olika resor',
    lead: 'Levi för enkel tillgänglighet och byliv. Ylläs för tystnaden. Saariselkä för glasiglos under norrskenet. Inari för lugnet i höga norr som de flesta resenärer aldrig når.',
    checkAvailability: 'Kontrollera tillgänglighet',
    guideTo: (name: string) => `Guide till ${name}`,
    locations: [
      { name: 'Levi', tagline: 'Hjärtat av Lapplands lyx', description: 'Finlands största skidort med en gångvänlig by vid fjällets fot. Boendet i Levi sträcker sig från Lapland Hotels lägenheter i centrum till ski-in-chalet och glasstugor på Levin Iglut – nära nog för middag i byn, långt nog för norrsken under mörk himmel.', highlights: ['Ski-in-chalet', 'Restauranger och uteliv', 'Fullt safariutbud'] },
      { name: 'Ylläs', tagline: 'Orörd nordisk vildmark', description: 'Två fjäll, Finlands längsta nedfarter och ingen resortprägel – Ylläs är den lugnare systern. Boendet i Ylläs är timmerstugor utspridda i utkanten av nationalparken Pallas-Yllästunturi, perfekt när tystnad och nära till lederna väger tyngre än livet i byn.', highlights: ['Längdåkningens rike', 'Chalet med fjällutsikt', 'Inga folkmassor'] },
      { name: 'Saariselkä', tagline: 'Porten till Arktis', description: 'Gränsar till nationalparken Urho Kekkonen, en av Europas sista stora vildmarker. Det här är Saariselkäs glasigloo-land – Kakslauttanen, Star Arctic och Muotka – där rum med glastak möter guldvaskningsälvar och luften blir riktigt kall.', highlights: ['Glasigloo-land', 'Nära nationalparken', 'Djup norrskenszon'] },
      { name: 'Inari', tagline: 'Samisk kultur, arktiska sjöar', description: 'Där det samiska arvet möter den vidsträckta, frusna Inarisjön. Det mest avlägsna och exklusiva av de fyra – stugor vid privata sjöstränder i Inari, Nellim vildmarkslodge och norrskensvillor i Ivalo för resenärer som mäter en resa i stillhet, inte i stopp.', highlights: ['Inarisjön', 'Samisk kultur', 'Avlägsenhet i höga norr'] },
    ],
  }

export default copy