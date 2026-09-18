import type { Copy } from './Locations.copy.types'

const copy: Copy = {
    eyebrow: 'Wo Sie in Lappland übernachten',
    h2: 'Vier Reiseziele, vier verschiedene Reisen',
    lead: 'Levi für einfache Erreichbarkeit und Dorfleben. Ylläs für Stille. Saariselkä für Glasiglus unter dem Polarlicht. Inari für die Ruhe des hohen Nordens, die die meisten Reisenden nie erreichen.',
    checkAvailability: 'Verfügbarkeit prüfen',
    guideTo: (name: string) => `Reiseführer ${name}`,
    locations: [
      {
        name: 'Levi',
        tagline: 'Das Herz des Lappland-Luxus',
        description: 'Finnlands größtes Skizentrum mit einem fußläufigen Dorf am Fuß des Fjälls. Die Levi-Unterkünfte verteilen sich von Lapland-Hotels-Apartments im Zentrum bis zu Pisten-Chalets und Glashütten in Levin Iglut, nah genug fürs Abendessen im Ort, weit genug für Polarlicht-Beobachtung bei dunklem Himmel.',
        highlights: ['Pisten-Chalets', 'Restaurants & Nachtleben', 'Volles Safari-Programm'],
      },
      {
        name: 'Ylläs',
        tagline: 'Unberührte nordische Wildnis',
        description: 'Zwei Fjälls, die längsten Skipisten Finnlands und kein Resort-Overlay, Ylläs ist die ruhigere Schwester. Ylläs-Unterkünfte bedeuten Blockhütten, verteilt am Rand des Pallas-Yllästunturi-Nationalparks, ideal wenn Stille und Loipenzugang wichtiger sind als Dorfbetrieb.',
        highlights: ['Königreich des Langlaufs', 'Chalets mit Fjäll-Blick', 'Keine Menschenmassen'],
      },
      {
        name: 'Saariselkä',
        tagline: 'Tor zur Arktis',
        description: 'Grenzt an den Urho-Kekkonen-Nationalpark, eines der letzten großen Wildnisgebiete Europas. Saariselkä ist Glasiglu-Land: Kakslauttanen, Star Arctic und Muotka, wo Räume mit Glasdach auf Goldwasch-Flüsse treffen und die Luft richtig kalt wird.',
        highlights: ['Glasiglu-Land', 'Nationalpark-Zugang', 'Tiefe Polarlichtzone'],
      },
      {
        name: 'Inari',
        tagline: 'Sámi-Kultur, arktische Seen',
        description: 'Wo das Sámi-Erbe auf den weiten, gefrorenen Inarisee trifft. Das abgelegenste und exklusivste der vier, Inari-Hütten an privaten Seeufern, Wildnis-Lodge Nellim und Polarlicht-Villen in Ivalo für Reisende, die eine Reise an Stille messen, nicht an Stationen.',
        highlights: ['Inarisee', 'Sámi-Kultur', 'Abgeschiedenheit im hohen Norden'],
      },
    ],
  }

export default copy