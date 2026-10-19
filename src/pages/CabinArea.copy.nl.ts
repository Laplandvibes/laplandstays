import type { CabinAreaPageCopy } from './CabinArea.copy.types'

// Nederlands (u-vorm). Titels en h1 met "vakantiehuisje(s)": gemeten vraag 19.10.2026
// (OpenSEO NL) vakantiehuisje lapland 90, huisje (huren) lapland 70, vakantiehuis finland 70.
// In de lopende tekst "huisje(s)" / "huurhuisjes", zoals de hubpagina Cabins.copy.nl.ts.
const copy: CabinAreaPageCopy = {
  eyebrow: 'Uit het aanbod van Lomarengas',
  areas: {
    levi: {
      seo: {
        title: 'Vakantiehuisjes in Levi: blokhutten en chalets huren',
        description: 'Vakantiehuisjes en vakantiehuizen in Levi: blokhutten, ski-in-appartementen en villa’s in Sirkka en Kittilä, met aantal personen, slaapkamers en oppervlakte.',
      },
      h1: 'Vakantiehuisjes in Levi',
      intro: 'Lomarengas biedt {count} huurhuisjes aan rond Levi, van het dorp Sirkka tot Kittilä: blokhutten op de hellingen van de fjäll, ski-in-appartementen naast de liften en grote villa’s voor een hele groep. Bij elk huisje hieronder ziet u het aantal personen en slaapkamers, de oppervlakte en de sterrenclassificatie; de weekprijs en de vrije weken staan op Lomarengas.',
    },
    yllas: {
      seo: {
        title: 'Vakantiehuisjes in Ylläs: Äkäslompolo en Ylläsjärvi',
        description: 'Vakantiehuisjes in Ylläs: blokhutten, huisjes aan het meer en ski-in-appartementen in Äkäslompolo en Ylläsjärvi, met personen, slaapkamers en oppervlakte.',
      },
      h1: 'Vakantiehuisjes in Ylläs',
      intro: 'Lomarengas biedt {count} huurhuisjes aan rond Ylläs en zijn twee dorpen: Äkäslompolo aan de noordkant van de fjäll en Ylläsjärvi bij de zuidelijke hellingen. Blokhutten op beboste hellingen, huisjes aan het meer en ski-in-appartementen. Bij elk huisje hieronder ziet u het aantal personen en slaapkamers, de oppervlakte en de sterrenclassificatie; de weekprijs en de vrije weken staan op Lomarengas.',
      split: {
        nearH2: 'Äkäslompolo, Ylläsjärvi en omgeving',
        nearNote: 'Huisjes tot 10 km van Äkäslompolo of Ylläsjärvi.',
        farH2: 'Elders in Kolari',
        farNote: 'Meer dan 10 km van Äkäslompolo en Ylläsjärvi. Vanaf deze huisjes rijdt u meestal met de auto naar Ylläs.',
      },
    },
    ruka: {
      seo: {
        title: 'Vakantiehuisjes in Ruka, rond de Rukatunturi',
        description: 'Vakantiehuisjes en vakantiehuizen in Ruka: het skidorp en het merengebied van Kuusamo, met aantal personen, slaapkamers en oppervlakte. Boeken via Lomarengas.',
      },
      h1: 'Vakantiehuisjes in Ruka',
      intro: 'Lomarengas biedt {near} huurhuisjes aan in Ruka en tot 10 km van het dorp Ruka, en nog {far} verder weg in het merengebied van Kuusamo. Ruka opent zijn pistes in de herfst als een van de eerste skigebieden en het seizoen loopt door tot in het voorjaar, zodat er over een lange periode huisjesweken te boeken zijn. Bij elk huisje hieronder ziet u de afstand tot Ruka, het aantal personen en slaapkamers, de oppervlakte en de sterrenclassificatie; de weekprijs en de vrije weken staan op Lomarengas.',
      split: {
        nearH2: 'Ruka en omgeving',
        nearNote: 'Huisjes in het skidorp Ruka en tot 10 km daarvandaan.',
        farH2: 'Huisjes in het merengebied van Kuusamo',
        farNote: 'Meer dan 10 km van Ruka, elders in Kuusamo. Vanaf deze huisjes rijdt u meestal met de auto naar Ruka.',
      },
    },
    saariselka: {
      seo: {
        title: 'Vakantiehuisjes in Saariselkä: aan de voet van Kaunispää',
        description: 'Vakantiehuisjes in Saariselkä: blokhutten en appartementen rond het dorp en richting Kakslauttanen, met aantal personen, slaapkamers en oppervlakte.',
      },
      h1: 'Vakantiehuisjes in Saariselkä',
      intro: 'Lomarengas biedt {count} huurhuisjes aan rond Saariselkä en Kaunispää, aan de rand van het nationaal park Urho Kekkonen. Het is de noordelijkste van de vier grote skigebieden, dus de noorderlichtnachten zijn hier het donkerst. Bij elk huisje hieronder ziet u het aantal personen en slaapkamers, de oppervlakte en de sterrenclassificatie; de weekprijs en de vrije weken staan op Lomarengas.',
      split: {
        nearH2: 'Saariselkä en omgeving',
        nearNote: 'Huisjes in het dorp Saariselkä en tot 10 km daarvandaan.',
        farH2: 'Verder van Saariselkä',
        farNote: 'Meer dan 10 km van het dorp Saariselkä. Vanaf deze huisjes rijdt u meestal met de auto naar Saariselkä.',
      },
    },
    'pyha-luosto': {
      seo: {
        title: 'Vakantiehuisjes huren in Pyhä en Luosto',
        description: 'Vakantiehuisjes bij de Pyhätunturi en in Luosto, in Pelkosenniemi, Sodankylä en Kemijärvi, met personen, slaapkamers en oppervlakte. Boeken via Lomarengas.',
      },
      h1: 'Vakantiehuisjes in Pyhä en Luosto',
      intro: 'Lomarengas biedt {count} huurhuisjes aan tussen de twee fjälls Pyhä en Luosto, naast het nationaal park Pyhä-Luosto. Een rustiger alternatief voor Levi en Ruka, en op minder dan twee uur van de luchthaven van Rovaniemi. Bij elk huisje hieronder ziet u het aantal personen en slaapkamers, de oppervlakte en de sterrenclassificatie; de weekprijs en de vrije weken staan op Lomarengas.',
    },
    rovaniemi: {
      seo: {
        title: 'Vakantiehuisjes in Rovaniemi, op de poolcirkel',
        description: 'Vakantiehuisjes in Rovaniemi: rivierhuisjes en wildernishutten langs de Ounasjoki en de Kemijoki, met aantal personen, slaapkamers en oppervlakte.',
      },
      h1: 'Vakantiehuisjes in Rovaniemi',
      intro: 'Lomarengas biedt {near} huurhuisjes aan tot 10 km van het centrum van Rovaniemi, en nog {far} verder weg in de dorpen van Rovaniemi. Vanaf de huisjes dicht bij het centrum liggen het Kerstmandorp en de voorzieningen van de stad op korte rijafstand. Bij elk huisje hieronder ziet u de afstand tot het centrum, het aantal personen en slaapkamers, de oppervlakte en de sterrenclassificatie; de weekprijs en de vrije weken staan op Lomarengas.',
      split: {
        nearH2: 'Rovaniemi en omgeving',
        nearNote: 'Huisjes tot 10 km van het centrum van Rovaniemi.',
        farH2: 'Elders in Rovaniemi',
        farNote: 'Meer dan 10 km van het centrum, in de dorpen van Rovaniemi. Vanaf deze huisjes rijdt u met de auto naar de stad.',
      },
    },
    inari: {
      seo: {
        title: 'Vakantiehuisjes in Inari: het dorp Inari, Ivalo en verder',
        description: 'Huurhuisjes van Lomarengas in Inari: het dorp Inari, Ivalo en de rest van de gemeente, met afstand, aantal personen, slaapkamers en oppervlakte per huisje.',
      },
      h1: 'Vakantiehuisjes in Inari',
      intro: 'Lomarengas biedt {near} huurhuisjes aan tot 10 km van het dorp Inari of van Ivalo, en nog {far} verder weg in de wildernis en de dorpen van de qua oppervlakte grootste gemeente van Finland. Het dorp Inari ligt aan het Inarimeer en daar staat ook het Samisch museum Siida; de luchthaven van Ivalo is de noordelijkste van Finland. Saariselkä heeft een eigen pagina. Bij elk huisje hieronder ziet u de afstand tot het dorp Inari of tot Ivalo, het aantal personen en slaapkamers, de oppervlakte en de sterrenclassificatie; de weekprijs en de vrije weken staan op Lomarengas.',
      split: {
        nearH2: 'Het dorp Inari, Ivalo en omgeving',
        nearNote: 'Huisjes tot 10 km van het dorp Inari of van Ivalo.',
        farH2: 'Elders in Inari',
        farNote: 'Meer dan 10 km van het dorp Inari en van Ivalo. Bij elk huisje staat de afstand tot de dichtstbijzijnde van beide plaatsen.',
      },
    },
    enontekio: {
      seo: {
        title: 'Vakantiehuisjes in Enontekiö: Kilpisjärvi, Hetta, Raattama',
        description: 'Huurhuisjes van Lomarengas in Enontekiö: huisjes bij Kilpisjärvi, Hetta en Raattama, met afstand, aantal personen, slaapkamers en oppervlakte op één pagina.',
      },
      h1: 'Vakantiehuisjes in Enontekiö',
      intro: 'Lomarengas biedt {near} huurhuisjes aan tot 10 km van Kilpisjärvi, Hetta of Raattama, en nog {far} verder weg in de dorpen van Enontekiö. Kilpisjärvi is het fjälldorp aan de voet van de Saana in het uiterste noordwesten van Finland, Hetta het gemeentecentrum aan de noordkant van het nationaal park Pallas-Yllästunturi en Raattama een dorp aan de rivier de Ounasjoki. Bij elk huisje hieronder ziet u de afstand tot het dichtstbijzijnde van deze dorpen, het aantal personen en slaapkamers, de oppervlakte en de sterrenclassificatie; de weekprijs en de vrije weken staan op Lomarengas.',
      split: {
        nearH2: 'Kilpisjärvi, Hetta, Raattama en omgeving',
        nearNote: 'Huisjes tot 10 km van een van deze dorpen.',
        farH2: 'Elders in Enontekiö',
        farNote: 'Meer dan 10 km van het dichtstbijzijnde van deze dorpen. Bij elk huisje staat vanaf welk dorp de afstand is gemeten.',
      },
    },
    utsjoki: {
      seo: {
        title: 'Vakantiehuisjes in Utsjoki, Nuorgam en Karigasniemi',
        description: 'Huurhuisjes van Lomarengas in Utsjoki: huisjes bij het dorp Utsjoki, Nuorgam en Karigasniemi, met afstand, aantal personen, slaapkamers en oppervlakte.',
      },
      h1: 'Vakantiehuisjes in Utsjoki',
      intro: 'Lomarengas biedt {near} huurhuisjes aan tot 10 km van het dorp Utsjoki, Nuorgam of Karigasniemi, en nog {far} verder weg. Utsjoki is de noordelijkste gemeente van Finland, aan de rivier de Teno; Nuorgam is het noordelijkste dorp van Finland en Karigasniemi een dorp aan de Noorse grens. Bij elk huisje hieronder ziet u de afstand tot het dichtstbijzijnde dorp, het aantal personen en slaapkamers, de oppervlakte en de sterrenclassificatie; de weekprijs en de vrije weken staan op Lomarengas.',
      split: {
        nearH2: 'Utsjoki, Nuorgam, Karigasniemi en omgeving',
        nearNote: 'Huisjes tot 10 km van een van deze dorpen.',
        farH2: 'Elders in Utsjoki',
        farNote: 'Meer dan 10 km van het dichtstbijzijnde van deze dorpen. Bij elk huisje staat vanaf welk dorp de afstand is gemeten.',
      },
    },
    muonio: {
      seo: {
        title: 'Vakantiehuisjes in Muonio: Olos en het dorp Muonio',
        description: 'Huurhuisjes van Lomarengas in Muonio: huisjes in Olos en bij het dorp Muonio, met afstand, aantal personen, slaapkamers en oppervlakte op één pagina.',
      },
      h1: 'Vakantiehuisjes in Muonio',
      intro: 'Lomarengas biedt {near} huurhuisjes aan tot 10 km van het skigebied Olos of het dorp Muonio, en nog {far} verder weg. Muonio ligt aan de Zweedse grens, aan de rivier de Muonionjoki, en de fjälls van Pallas liggen in de gemeente. Bij elk huisje hieronder ziet u de afstand tot Olos of tot het dorp, het aantal personen en slaapkamers, de oppervlakte en de sterrenclassificatie; de weekprijs en de vrije weken staan op Lomarengas.',
      split: {
        nearH2: 'Olos, het dorp Muonio en omgeving',
        nearNote: 'Huisjes tot 10 km van Olos of het dorp Muonio.',
        farH2: 'Elders in Muonio',
        farNote: 'Meer dan 10 km van Olos en van het dorp.',
      },
    },
    kittila: {
      seo: {
        title: 'Vakantiehuisjes in Kittilä: Raattama en de dorpen',
        description: 'Huurhuisjes van Lomarengas in Kittilä, buiten het skidorp Levi: Raattama en andere dorpen, met afstand, aantal personen, slaapkamers en oppervlakte.',
      },
      h1: 'Vakantiehuisjes in Kittilä',
      intro: 'Lomarengas biedt {near} huurhuisjes aan tot 10 km van Raattama of Levi, en nog {far} verder weg in de dorpen van Kittilä. De huisjes in het skidorp Levi staan op een eigen pagina. Raattama is een dorp aan de rivier de Ounasjoki, en de luchthaven van Kittilä ligt net ten noorden van het dorp Kittilä. Bij elk huisje hieronder ziet u de afstand tot de dichtstbijzijnde van deze plaatsen, het aantal personen en slaapkamers, de oppervlakte en de sterrenclassificatie; de weekprijs en de vrije weken staan op Lomarengas.',
      split: {
        nearH2: 'Raattama, Levi en omgeving',
        nearNote: 'Huisjes tot 10 km van Raattama of Levi.',
        farH2: 'Elders in Kittilä',
        farNote: 'Meer dan 10 km van Raattama, Levi en het dorp Kittilä. Bij elk huisje staat vanaf welke plaats de afstand is gemeten.',
      },
    },
    sodankyla: {
      seo: {
        title: 'Vakantiehuisjes in Sodankylä, buiten Luosto en Saariselkä',
        description: 'Huurhuisjes van Lomarengas in Sodankylä, buiten Luosto en Saariselkä: per huisje de afstand, het aantal personen, de slaapkamers en de oppervlakte.',
      },
      h1: 'Vakantiehuisjes in Sodankylä',
      intro: 'Lomarengas biedt {count} huurhuisjes aan in Sodankylä buiten Luosto en Saariselkä; Saariselkä heeft een eigen pagina en Luosto staat op de pagina van Pyhä en Luosto. In Sodankylä wordt elk jaar in juni het Midnight Sun Film Festival gehouden. Bij elk huisje hieronder ziet u de afstand tot het dorp Sodankylä, het aantal personen en slaapkamers, de oppervlakte en de sterrenclassificatie; de weekprijs en de vrije weken staan op Lomarengas.',
    },
    salla: {
      seo: {
        title: 'Vakantiehuisjes in Salla en bij Sallatunturi',
        description: 'Huurhuisjes van Lomarengas in Salla: huisjes bij Sallatunturi en in het dorp Salla, met afstand, aantal personen, slaapkamers en oppervlakte op één pagina.',
      },
      h1: 'Vakantiehuisjes in Salla',
      intro: 'Lomarengas biedt {near} huurhuisjes aan tot 10 km van Sallatunturi of het dorp Salla, en nog {far} verder weg in de dorpen van Salla. Het skigebied Sallatunturi ligt naast het nationaal park Salla in Oost-Lapland. Bij elk huisje hieronder ziet u de afstand tot Sallatunturi of tot het dorp, het aantal personen en slaapkamers, de oppervlakte en de sterrenclassificatie; de weekprijs en de vrije weken staan op Lomarengas.',
      split: {
        nearH2: 'Sallatunturi, het dorp Salla en omgeving',
        nearNote: 'Huisjes tot 10 km van Sallatunturi of het dorp Salla.',
        farH2: 'Elders in Salla',
        farNote: 'Meer dan 10 km van Sallatunturi en van het dorp. Vanaf deze huisjes rijdt u meestal met de auto naar de pistes.',
      },
    },
    kemijarvi: {
      seo: {
        title: 'Vakantiehuisjes in Kemijärvi en bij Suomu',
        description: 'Huurhuisjes van Lomarengas in Kemijärvi: huisjes in Suomu en bij het stadscentrum, met afstand, aantal personen, slaapkamers en oppervlakte op één pagina.',
      },
      h1: 'Vakantiehuisjes in Kemijärvi',
      intro: 'Lomarengas biedt {near} huurhuisjes aan tot 10 km van het skigebied Suomu of het centrum van Kemijärvi, en nog {far} verder weg. Kemijärvi is de noordelijkste stad van Finland, aan het gelijknamige meer, en de Suomutunturi ligt ten zuidoosten ervan. De huisjes in Kemijärvi bij de Pyhätunturi staan op de pagina van Pyhä en Luosto. Bij elk huisje hieronder ziet u de afstand tot Suomu of tot het stadscentrum, het aantal personen en slaapkamers, de oppervlakte en de sterrenclassificatie; de weekprijs en de vrije weken staan op Lomarengas.',
      split: {
        nearH2: 'Suomu, Kemijärvi en omgeving',
        nearNote: 'Huisjes tot 10 km van Suomu of het centrum van Kemijärvi.',
        farH2: 'Elders in Kemijärvi',
        farNote: 'Meer dan 10 km van Suomu en van het stadscentrum.',
      },
    },
    posio: {
      seo: {
        title: 'Vakantiehuisjes in Posio, rond het dorp en daarbuiten',
        description: 'Huurhuisjes van Lomarengas in Posio, bij het dorp en verspreid over de gemeente, met afstand, aantal personen, slaapkamers en oppervlakte op één pagina.',
      },
      h1: 'Vakantiehuisjes in Posio',
      intro: 'Lomarengas biedt {near} huurhuisjes aan tot 10 km van het dorp Posio, en nog {far} verder weg in de dorpen van Posio. Het nationaal park Riisitunturi en de kloof van Korouoma liggen in Posio. Bij elk huisje hieronder ziet u de afstand tot het dorp Posio, het aantal personen en slaapkamers, de oppervlakte en de sterrenclassificatie; de weekprijs en de vrije weken staan op Lomarengas.',
      split: {
        nearH2: 'Het dorp Posio en omgeving',
        nearNote: 'Huisjes tot 10 km van het dorp Posio.',
        farH2: 'Elders in Posio',
        farNote: 'Meer dan 10 km van het dorp.',
      },
    },
    pello: {
      seo: {
        title: 'Vakantiehuisjes huren in Pello via Lomarengas',
        description: 'Huurhuisjes van Lomarengas in Pello, met per huisje de afstand tot het dorp Pello, het aantal personen, de slaapkamers en de oppervlakte.',
      },
      h1: 'Vakantiehuisjes in Pello',
      intro: 'Lomarengas biedt {count} huurhuisjes aan in Pello. Pello ligt aan de rivier de Tornionjoki, op de grens met Zweden. Bij elk huisje hieronder ziet u de afstand tot het dorp Pello, het aantal personen en slaapkamers, de oppervlakte en de sterrenclassificatie; de weekprijs en de vrije weken staan op Lomarengas.',
    },
  },
  guestsLabel: 'personen',
  bedroomsLabel: 'slaapkamers',
  sizeLabel: 'oppervlakte',
  starsLabel: 'sterren',
  viewCabin: 'Bekijk het huisje',
  weekFrom: 'week vanaf {price} €',
  pricesDated: 'Weekprijzen opgehaald op {date}; de uiteindelijke prijs hangt af van de week.',
  priceOnPartner: 'Prijs en vrije weken op Lomarengas',
  browseAll: 'Bekijk alle huisjes in het gebied op Lomarengas (in het Engels)',
  showMore: 'Meer huisjes tonen',
  dataNote: 'Foto’s en gegevens uit de productfeed van Lomarengas. De prijs en de vrije weken staan op de website van Lomarengas, waar u boekt. Lomarengas is alleen in het Fins en het Engels beschikbaar; de links openen de Engelstalige site.',
  distance: 'ongeveer {km} km {from}',
  distanceUnder1: 'minder dan 1 km {from}',
  distanceNote: 'Afstanden zijn hemelsbreed gemeten vanaf de locatie van het huisje (zoals vermeld op de Lomarengas-pagina) tot het dichtstbijzijnde dorp, stadscentrum of skigebied, en afgerond op hele kilometers; over de weg is de afstand groter.',
  otherAreasH2: 'Vakantiehuisjes in andere gebieden',
  destinationLink: 'Hotels, iglo’s en de reisgids voor deze bestemming',
  breadcrumbHome: 'Home',
  breadcrumbCabins: 'Huisjesvakantie',
}

export default copy
