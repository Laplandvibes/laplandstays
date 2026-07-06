import type { Copy } from './Locations.copy.types'

const copy: Copy = {
    eyebrow: 'Waar verblijven in Lapland',
    h2: 'Vier bestemmingen, vier verschillende reizen',
    lead: 'Levi voor makkelijke bereikbaarheid en dorpsleven. Ylläs voor stilte. Saariselkä voor glasiglo\'s onder het noorderlicht. Inari voor de rust van het hoge noorden waar bijna geen reiziger komt.',
    pricesLabel: 'Prijzen:',
    checkAvailability: 'Beschikbaarheid bekijken',
    guideTo: (name: string) => `Gids voor ${name}`,
    locations: [
      { name: 'Levi', tagline: 'Het hart van Laplandse luxe', description: 'De grootste skiresort van Finland met een loopdorp aan de voet van de fjell. De accommodaties lopen uiteen van Lapland Hotels-appartementen in het centrum tot ski-in chalets en glascabins in Levin Iglut, dichtbij genoeg voor het diner in het dorp, ver genoeg voor noorderlicht onder een donkere hemel.', highlights: ['Ski-in chalets', 'Restaurants en uitgaan', 'Volledig safariaanbod'], priceFrom: 'Hotels vanaf €100/nacht · glasiglo\'s vanaf €350' },
      { name: 'Ylläs', tagline: 'Onaangetaste Noord-Europese wildernis', description: 'Twee fjells, de langste skipistes van Finland, en geen resortsuperlaag, Ylläs is de stillere zus. De accommodaties zijn houten cabins verspreid over het Pallas-Yllästunturi-nationaal park, ideaal wanneer stilte en directe toegang tot de loipes zwaarder wegen dan de drukte van het dorp.', highlights: ['Koninkrijk van langlauf', 'Chalets met fjellzicht', 'Geen drukte'], priceFrom: 'Houten cabins vanaf €150/nacht' },
      { name: 'Saariselkä', tagline: 'Poort naar het Noordpoolgebied', description: 'Grenst aan het Urho Kekkonen-nationaal park, een van de laatste grote wildernissen van Europa. Dit is het glasiglo-land van Saariselkä, Kakslauttanen, Star Arctic en Muotka, waar glazen daken rivieren met goudwasplekken ontmoeten en de lucht echt koud wordt.', highlights: ['Land van glasiglo\'s', 'Toegang tot nationaal park', 'Diepe aurorazone'], priceFrom: 'Glasiglo\'s Kakslauttanen vanaf €400/nacht · wildernislodges vanaf €200' },
      { name: 'Inari', tagline: 'Sámi-cultuur, arctische meren', description: 'Waar het Sámi-erfgoed het uitgestrekte, bevroren Inari-meer raakt. De meest afgelegen en exclusieve van de vier, cabins op privé-oevers, Nellim Wilderness Lodge en aurora-villa\'s in Ivalo, voor reizigers die een reis afmeten aan stilte, niet aan haltes.', highlights: ['Inari-meer', 'Sámi-cultuur', 'Afgelegenheid van het hoge noorden'], priceFrom: 'Cabins aan het meer vanaf €200/nacht · Aurora Village vanaf €300' },
    ],
  }

export default copy