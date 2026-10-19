import type { CabinAreaPageCopy } from './CabinArea.copy.types'

const copy: CabinAreaPageCopy = {
  eyebrow: 'Ur Lomarengas utbud',
  areas: {
    levi: {
      seo: {
        title: 'Stugor i Levi: timmerstugor, ski-in-boende och villor',
        description: 'Stugor och semesterbostäder i Levi på en sida: timmerstugor, ski-in-lägenheter och villor i Sirkka och Kittilä med antal personer, sovrum och storlek.',
      },
      h1: 'Stugor i Levi',
      intro: 'Lomarengas har {count} hyrstugor runt Levi, från byn Sirkka till Kittilä: timmerstugor på fjällsluttningarna, ski-in-lägenheter intill liftarna och stora villor för hela sällskapet. För varje stuga nedan ser du antal personer, sovrum, storlek och stjärnklassning; veckopris och lediga veckor finns på Lomarengas.',
    },
    yllas: {
      seo: {
        title: 'Stugor i Ylläs: boende i Äkäslompolo och Ylläsjärvi',
        description: 'Stugor i Ylläs: timmerstugor, sjönära stugor och ski-in-lägenheter i Äkäslompolo och Ylläsjärvi med antal personer, sovrum och storlek på en sida.',
      },
      h1: 'Stugor i Ylläs',
      intro: 'Lomarengas har {count} hyrstugor runt Ylläs och dess två byar: Äkäslompolo på fjällets norra sida och Ylläsjärvi vid de södra backarna. Timmerstugor på skogsklädda sluttningar, sjönära stugor och ski-in-lägenheter. För varje stuga nedan ser du antal personer, sovrum, storlek och stjärnklassning; veckopris och lediga veckor finns på Lomarengas.',
      split: {
        nearH2: 'Äkäslompolo och Ylläsjärvi med omnejd',
        nearNote: 'Stugor upp till 10 km från Äkäslompolo eller Ylläsjärvi.',
        farH2: 'Övriga Kolari',
        farNote: 'Mer än 10 km från Äkäslompolo och Ylläsjärvi. Från de här stugorna kör du oftast bil till Ylläs.',
      },
    },
    ruka: {
      seo: {
        title: 'Stugor i Ruka: boende runt Rukatunturi och i Kuusamo',
        description: 'Stugor och semesterbostäder i Ruka: skidbyn och Kuusamos sjölandskap med antal personer, sovrum och storlek på en sida. Bokning på Lomarengas.',
      },
      h1: 'Stugor i Ruka',
      intro: 'Lomarengas har {near} hyrstugor i Ruka och inom 10 km från byn Ruka, och ytterligare {far} längre ut i Kuusamos sjölandskap. Ruka öppnar sina backar bland de första på hösten och säsongen håller i sig in på våren, så det finns stugveckor att få under en lång period. Varje kort visar avståndet till Ruka, antal personer, sovrum, storlek och stjärnklassning; veckopris och lediga veckor finns på Lomarengas.',
      split: {
        nearH2: 'Ruka med omnejd',
        nearNote: 'Stugor i skidbyn Ruka och upp till 10 km därifrån.',
        farH2: 'Stugor i Kuusamos sjölandskap',
        farNote: 'Mer än 10 km från Ruka, på andra håll i Kuusamo. Från de här stugorna kör du oftast bil till Ruka.',
      },
    },
    saariselka: {
      seo: {
        title: 'Stugor i Saariselkä: boende nedanför Kaunispää',
        description: 'Stugor och semesterbostäder i Saariselkä: timmerstugor och lägenheter i byn och mot Kakslauttanen med antal personer, sovrum och storlek.',
      },
      h1: 'Stugor i Saariselkä',
      intro: 'Lomarengas har {count} hyrstugor runt Saariselkä och Kaunispää, i utkanten av Urho Kekkonens nationalpark. Det är den nordligaste av de fyra skidorterna, så här är norrskensnätterna mörkast. För varje stuga nedan ser du antal personer, sovrum, storlek och stjärnklassning; veckopris och lediga veckor finns på Lomarengas.',
      split: {
        nearH2: 'Saariselkä med omnejd',
        nearNote: 'Stugor i byn Saariselkä och upp till 10 km därifrån.',
        farH2: 'Längre från Saariselkä',
        farNote: 'Mer än 10 km från byn Saariselkä. Från de här stugorna kör du oftast bil till Saariselkä.',
      },
    },
    'pyha-luosto': {
      seo: {
        title: 'Stugor i Pyhä och Luosto: hyr stuga vid nationalparken',
        description: 'Stugor och semesterbostäder vid Pyhätunturi och Luosto i Pelkosenniemi, Sodankylä och Kemijärvi med antal personer, sovrum och storlek. Bokning på Lomarengas.',
      },
      h1: 'Stugor i Pyhä och Luosto',
      intro: 'Lomarengas har {count} hyrstugor mellan de två fjällen Pyhä och Luosto, intill Pyhä-Luosto nationalpark. Ett lugnare alternativ till Levi och Ruka, mindre än två timmar från Rovaniemi flygplats. För varje stuga nedan ser du antal personer, sovrum, storlek och stjärnklassning; veckopris och lediga veckor finns på Lomarengas.',
    },
    rovaniemi: {
      seo: {
        title: 'Stugor i Rovaniemi: boende vid polcirkeln',
        description: 'Stugor och semesterbostäder i Rovaniemi: älvnära stugor och vildmarksstugor längs Ounasjoki och Kemi älv med antal personer, sovrum och storlek.',
      },
      h1: 'Stugor i Rovaniemi',
      intro: 'Lomarengas har {near} hyrstugor inom 10 km från Rovaniemi centrum och ytterligare {far} längre ut i byarna runt Rovaniemi. Från stugorna nära centrum är det en kort bilresa till Jultomtens by och stadens service. Varje kort visar avståndet till centrum, antal personer, sovrum, storlek och stjärnklassning; veckopris och lediga veckor finns på Lomarengas.',
      split: {
        nearH2: 'Rovaniemi med omnejd',
        nearNote: 'Stugor upp till 10 km från Rovaniemi centrum.',
        farH2: 'Övriga Rovaniemi',
        farNote: 'Mer än 10 km från centrum, i byarna runt Rovaniemi. Från de här stugorna kör du bil in till stan.',
      },
    },
    inari: {
      seo: {
        title: 'Stugor i Inari: Inari by, Ivalo och resten av kommunen',
        description: 'Hyrstugor i Inari från Lomarengas: Inari by, Ivalo och resten av kommunen, med avstånd, antal personer, sovrum och storlek för varje stuga.',
      },
      h1: 'Stugor i Inari',
      intro: 'Lomarengas har {near} hyrstugor inom 10 km från Inari by eller Ivalo och ytterligare {far} längre ut i vildmarken och byarna i Finlands till ytan största kommun. Inari by ligger vid Inarisjöns strand, och där finns Samemuseet Siida; Ivalo flygplats är Finlands nordligaste. Saariselkä har en egen sida. Varje kort visar avståndet till Inari by eller Ivalo, antal personer, sovrum, storlek och stjärnklassning; veckopris och lediga veckor finns på Lomarengas.',
      split: {
        nearH2: 'Inari by och Ivalo med omnejd',
        nearNote: 'Stugor upp till 10 km från Inari by eller Ivalo.',
        farH2: 'Övriga Inari',
        farNote: 'Mer än 10 km från Inari by och Ivalo. Varje kort visar avståndet till den närmaste av de två.',
      },
    },
    enontekio: {
      seo: {
        title: 'Stugor i Enontekiö: boende i Kilpisjärvi, Hetta, Raattama',
        description: 'Hyrstugor i Enontekiö från Lomarengas: stugor nära Kilpisjärvi, Hetta och Raattama med avstånd, antal personer, sovrum och storlek på en sida.',
      },
      h1: 'Stugor i Enontekiö',
      intro: 'Lomarengas har {near} hyrstugor inom 10 km från Kilpisjärvi, Hetta eller Raattama och ytterligare {far} längre ut i byarna i Enontekiö. Kilpisjärvi är fjällbyn vid foten av Saana längst i nordvästra Finland, Hetta kommunens centralort vid norra änden av Pallas-Yllästunturi nationalpark och Raattama en by vid Ounasjoki. Varje kort visar avståndet till den närmaste av de här byarna, antal personer, sovrum, storlek och stjärnklassning; veckopris och lediga veckor finns på Lomarengas.',
      split: {
        nearH2: 'Kilpisjärvi, Hetta och Raattama med omnejd',
        nearNote: 'Stugor upp till 10 km från någon av de här byarna.',
        farH2: 'Övriga Enontekiö',
        farNote: 'Mer än 10 km från den närmaste av de här byarna. Varje kort visar vilken by avståndet är mätt från.',
      },
    },
    utsjoki: {
      seo: {
        title: 'Stugor i Utsjoki: Utsjoki by, Nuorgam och Karigasniemi',
        description: 'Hyrstugor i Utsjoki från Lomarengas: stugor nära Utsjoki by, Nuorgam och Karigasniemi med avstånd, antal personer, sovrum och storlek.',
      },
      h1: 'Stugor i Utsjoki',
      intro: 'Lomarengas har {near} hyrstugor inom 10 km från Utsjoki by, Nuorgam eller Karigasniemi och ytterligare {far} längre bort. Utsjoki är Finlands nordligaste kommun, vid Tana älv; Nuorgam är Finlands nordligaste by och Karigasniemi en by vid gränsen mot Norge. Varje kort visar avståndet till närmaste by, antal personer, sovrum, storlek och stjärnklassning; veckopris och lediga veckor finns på Lomarengas.',
      split: {
        nearH2: 'Utsjoki, Nuorgam och Karigasniemi med omnejd',
        nearNote: 'Stugor upp till 10 km från någon av de här byarna.',
        farH2: 'Övriga Utsjoki',
        farNote: 'Mer än 10 km från den närmaste av de här byarna. Varje kort visar vilken by avståndet är mätt från.',
      },
    },
    muonio: {
      seo: {
        title: 'Stugor i Muonio: Olos och Muonio centrum',
        description: 'Hyrstugor i Muonio från Lomarengas: stugor i Olos och nära Muonio centrum med avstånd, antal personer, sovrum och storlek på en sida.',
      },
      h1: 'Stugor i Muonio',
      intro: 'Lomarengas har {near} hyrstugor inom 10 km från skidorten Olos eller Muonio centrum och ytterligare {far} längre bort. Muonio ligger vid Muonio älv på gränsen mot Sverige, och Pallasfjällen ligger i kommunen. Varje kort visar avståndet till Olos eller centrum, antal personer, sovrum, storlek och stjärnklassning; veckopris och lediga veckor finns på Lomarengas.',
      split: {
        nearH2: 'Olos och Muonio centrum med omnejd',
        nearNote: 'Stugor upp till 10 km från Olos eller Muonio centrum.',
        farH2: 'Övriga Muonio',
        farNote: 'Mer än 10 km från Olos och centrum.',
      },
    },
    kittila: {
      seo: {
        title: 'Stugor i Kittilä: Raattama och byarna utanför Levi',
        description: 'Hyrstugor i Kittilä utanför skidbyn Levi från Lomarengas: Raattama och andra byar, med avstånd, antal personer, sovrum och storlek.',
      },
      h1: 'Stugor i Kittilä',
      intro: 'Lomarengas har {near} hyrstugor inom 10 km från Raattama eller Levi och ytterligare {far} längre ut i byarna i Kittilä. Stugorna i skidbyn Levi har en egen sida. Raattama är en by vid Ounasjoki, och Kittilä flygplats ligger strax norr om Kittilä centrum. Varje kort visar avståndet till den närmaste av de här orterna, antal personer, sovrum, storlek och stjärnklassning; veckopris och lediga veckor finns på Lomarengas.',
      split: {
        nearH2: 'Raattama och Levi med omnejd',
        nearNote: 'Stugor upp till 10 km från Raattama eller Levi.',
        farH2: 'Övriga Kittilä',
        farNote: 'Mer än 10 km från Raattama, Levi och Kittilä centrum. Varje kort visar vilken ort avståndet är mätt från.',
      },
    },
    sodankyla: {
      seo: {
        title: 'Stugor i Sodankylä utanför Luosto och Saariselkä',
        description: 'Hyrstugor i Sodankylä utanför Luosto och Saariselkä från Lomarengas: avstånd, antal personer, sovrum och storlek för varje stuga.',
      },
      h1: 'Stugor i Sodankylä',
      intro: 'Lomarengas har {count} hyrstugor i Sodankylä utanför Luosto och Saariselkä, som har egna sidor. I Sodankylä hålls Midnattssolens filmfestival varje juni. Varje kort visar avståndet till Sodankylä centrum, antal personer, sovrum, storlek och stjärnklassning; veckopris och lediga veckor finns på Lomarengas.',
    },
    salla: {
      seo: {
        title: 'Stugor i Salla: hyr stuga vid Sallatunturi',
        description: 'Hyrstugor i Salla från Lomarengas: stugor vid Sallatunturi och i Salla centrum med avstånd, antal personer, sovrum och storlek på en sida.',
      },
      h1: 'Stugor i Salla',
      intro: 'Lomarengas har {near} hyrstugor inom 10 km från Sallatunturi eller Salla centrum och ytterligare {far} längre ut i byarna i Salla. Skidorten Sallatunturi ligger intill Salla nationalpark i östra delen av finska Lappland. Varje kort visar avståndet till Sallatunturi eller centrum, antal personer, sovrum, storlek och stjärnklassning; veckopris och lediga veckor finns på Lomarengas.',
      split: {
        nearH2: 'Sallatunturi och Salla centrum med omnejd',
        nearNote: 'Stugor upp till 10 km från Sallatunturi eller Salla centrum.',
        farH2: 'Övriga Salla',
        farNote: 'Mer än 10 km från Sallatunturi och centrum. Från de här stugorna kör du oftast bil till backarna.',
      },
    },
    kemijarvi: {
      seo: {
        title: 'Stugor i Kemijärvi: Suomu och Kemijärvi',
        description: 'Hyrstugor i Kemijärvi från Lomarengas: stugor i Suomu och nära centrum med avstånd, antal personer, sovrum och storlek på en sida.',
      },
      h1: 'Stugor i Kemijärvi',
      intro: 'Lomarengas har {near} hyrstugor inom 10 km från skidorten Suomu eller Kemijärvi centrum och ytterligare {far} längre bort. Kemijärvi är Finlands nordligaste stad, vid sjön med samma namn, och Suomutunturi ligger sydost om staden. Kemijärvis stugor nära Pyhätunturi finns på sidan om Pyhä och Luosto. Varje kort visar avståndet till Suomu eller centrum, antal personer, sovrum, storlek och stjärnklassning; veckopris och lediga veckor finns på Lomarengas.',
      split: {
        nearH2: 'Suomu och Kemijärvi med omnejd',
        nearNote: 'Stugor upp till 10 km från Suomu eller Kemijärvi centrum.',
        farH2: 'Övriga Kemijärvi',
        farNote: 'Mer än 10 km från Suomu och centrum.',
      },
    },
    posio: {
      seo: {
        title: 'Stugor i Posio: hyr stuga i byn eller på landsbygden',
        description: 'Hyrstugor i Posio från Lomarengas, nära centrum och runt om i kommunen, med avstånd, antal personer, sovrum och storlek på en sida.',
      },
      h1: 'Stugor i Posio',
      intro: 'Lomarengas har {near} hyrstugor inom 10 km från Posio centrum och ytterligare {far} längre ut i byarna i Posio. I Posio finns Riisitunturi nationalpark och kanjonen Korouoma. Varje kort visar avståndet till Posio centrum, antal personer, sovrum, storlek och stjärnklassning; veckopris och lediga veckor finns på Lomarengas.',
      split: {
        nearH2: 'Posio centrum med omnejd',
        nearNote: 'Stugor upp till 10 km från Posio centrum.',
        farH2: 'Övriga Posio',
        farNote: 'Mer än 10 km från centrum.',
      },
    },
    pello: {
      seo: {
        title: 'Stugor i Pello: hyr stuga vid Torne älv',
        description: 'Hyrstugor i Pello från Lomarengas, med avståndet till Pello centrum, antal personer, sovrum och storlek för varje stuga.',
      },
      h1: 'Stugor i Pello',
      intro: 'Lomarengas har {count} hyrstugor i Pello. Pello ligger vid Torne älv på gränsen mot Sverige. Varje kort visar avståndet till Pello centrum, antal personer, sovrum, storlek och stjärnklassning; veckopris och lediga veckor finns på Lomarengas.',
    },
  },
  guestsLabel: 'personer',
  bedroomsLabel: 'sovrum',
  sizeLabel: 'storlek',
  starsLabel: 'stjärnor',
  viewCabin: 'Se stugan',
  weekFrom: 'vecka från {price} €',
  pricesDated: 'Veckopriserna hämtades den {date}; slutpriset beror på veckan.',
  priceOnPartner: 'Pris och lediga veckor på Lomarengas',
  browseAll: 'Bläddra bland alla stugor i området på Lomarengas (på engelska)',
  showMore: 'Visa fler stugor',
  dataNote: 'Bilder och uppgifter ur Lomarengas produktdata. Pris och lediga veckor finns på Lomarengas webbplats, där du också bokar. Lomarengas finns på finska och engelska; länkarna öppnar den engelska versionen.',
  distance: 'cirka {km} km {from}',
  distanceUnder1: 'under 1 km {from}',
  distanceNote: 'Avstånden är mätta fågelvägen från stugans läge (enligt dess sida på Lomarengas) till närmaste by, centrum eller skidort och avrundade till närmaste kilometer; vägavståndet är längre.',
  otherAreasH2: 'Stugor på andra orter',
  destinationLink: 'Hotell, igloor och guiden till resmålet',
  breadcrumbHome: 'Hem',
  breadcrumbCabins: 'Stugsemester',
}

export default copy
