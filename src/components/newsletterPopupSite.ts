import type { NewsletterPopupCopy } from '../shared/NewsletterPopup';

/**
 * laplandstays.com: uutiskirjepopupin oma teksti.
 *
 * Vesa 23.9.2026: "tekstit ja värimaailma sivustokohtaisiksi" → "kyllä, vie
 * kaikille". Kuva, lomake, nappi ja #LAPLAND-merkki pysyvät verkoston yhteisinä.
 * Teksti = sivun oma aihe lukijan näkökulmasta, 12 kielellä natiivina.
 * 🔴 Ei hälytyksiä, ei lähetystahtia, ei "ensimmäisenä" (9.8.2026 lupauspurku):
 * uutiskirje lähtee vain kun on kerrottavaa. Otsikko tulee jaetusta komponentista.
 */
export const POPUP_COPY: NewsletterPopupCopy = {
  en: {
    description: 'Founder of LaplandVibes. Glass igloos, log cabins and hotels at the foot of the fells. I tell you where to look for a place to stay, when to book and where you wake up to the best view.',
  },
  fi: {
    description: 'LaplandVibesin perustaja. Lasi-iglut, hirsimökit ja hotellit tuntureiden juurella. Kerron, mistä majoitus kannattaa etsiä, milloin varata ja missä herää parhaaseen maisemaan.',
  },
  de: {
    description: 'Gründer von LaplandVibes. Glas-Iglus, Blockhütten und Hotels am Fuß der Fjälls. Ich zeige Ihnen, wo sich die Suche nach einer Unterkunft lohnt, wann Sie buchen sollten und wo Sie mit der besten Aussicht aufwachen.',
  },
  ja: {
    description: 'LaplandVibes創業者。グラスイグルー、ログキャビン、フェルのふもとのホテル。宿をどこで探すとよいか、予約のタイミング、いちばんの景色で目覚められるのはどこかをご案内します。',
  },
  es: {
    description: 'Fundador de LaplandVibes. Iglús de cristal, cabañas de troncos y hoteles al pie de los fjäll. Le cuento dónde buscar alojamiento, cuándo reservar y dónde despertarse con la mejor vista.',
  },
  'pt-BR': {
    description: 'Fundador do LaplandVibes. Iglus de vidro, cabanas de madeira e hotéis ao pé dos montes. Mostro onde procurar hospedagem, quando reservar e onde você acorda com a melhor vista.',
  },
  'zh-CN': {
    description: 'LaplandVibes創始人。玻璃屋、原木小屋，還有山腳下的飯店。我會告訴你去哪裡找住處、何時預訂，以及在哪裡一覺醒來就能看到最好的風景。',
  },
  ko: {
    description: 'LaplandVibes 창립자. 글래스 이글루와 통나무집, 펠 기슭의 호텔. 숙소는 어디서 찾으면 좋은지, 언제 예약할지, 눈을 뜨자마자 가장 좋은 풍경이 보이는 곳은 어디인지 알려드립니다.',
  },
  fr: {
    description: 'Fondateur de LaplandVibes. Igloos de verre, chalets en rondins et hôtels au pied des fjälls. Je vous dis où chercher un hébergement, quand réserver et où l\'on se réveille face à la plus belle vue.',
  },
  it: {
    description: 'Fondatore di LaplandVibes. Igloo di vetro, chalet di tronchi e hotel ai piedi dei fjäll. Le indico dove cercare un alloggio, quando prenotare e dove ci si sveglia con la vista più bella.',
  },
  nl: {
    description: 'Oprichter van LaplandVibes. Glazen iglo\'s, blokhutten en hotels aan de voet van de fjälls. Ik vertel u waar u het best accommodatie zoekt, wanneer u boekt en waar u wakker wordt met het mooiste uitzicht.',
  },
  sv: {
    description: 'Grundare av LaplandVibes. Glasigloor, timmerstugor och hotell vid foten av fjällen. Jag tipsar om var du ska leta efter boende, när du ska boka och var du vaknar upp till den bästa utsikten.',
  },
};
