import type { Copy } from './BookingCTA.copy.types'

const copy: Copy = {
    eyebrow: 'Valmis kun olet',
    h2: 'Revontulet eivät odota',
    lead: 'Kakslauttasen ja Levin Iglutin lasi-iglut varataan 8–12 kuukautta etukäteen. Revontulimökit täyttyvät 4–6 kuukautta ennen sesongin huippua. Aloita haku nyt ja lukitse päivät alustalla johon jo luotat.',
    primaryCta: 'Katso hinnat ja saatavuus',
    secondaryCta: 'Aloita Leviltä',
    bestTimeLabel: 'Paras varausaika: loppukesä seuraavaa talvea varten',
    statsLabel: '5 kohdetta · yli 12 tarkistettua ankkurikohdetta',
    trust: [
      { title: 'Tarkistetut hinnat', body: 'Hinnat tarkistetaan operaattorien sivuilta, ei paisuteltuja "alkaen"-hintoja, ei piilolisämaksuja.' },
      { title: 'Maksuton peruutus', body: 'Useimmilla mökeillä ja päivillä on peruutusikkuna. Jokainen kohde näyttää määräajan.' },
      { title: 'Välitön vahvistus', body: 'Varaa suoraan kumppanimme Sembon kautta. Päivät lukitaan heti kun maksu menee läpi.' },
      { title: 'Paikallinen opastus', body: 'Lähetä sähköpostia ennen varausta. Vastaukset tulevat Lapista, yleensä samana päivänä.' },
    ],
    seasonAnchors: [
      { label: 'Lasi-iglut', value: 'Varaa 8–12 kk etukäteen', sub: 'Kakslauttanen / Levin Iglut' },
      { label: 'Revontulimökit', value: '4 kohdetta', sub: '' },
      { label: 'Lapin hotellit', value: 'Levi · Ylläs · Saariselkä', sub: '' },
    ],
  }

export default copy