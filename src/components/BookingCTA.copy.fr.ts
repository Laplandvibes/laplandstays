import type { Copy } from './BookingCTA.copy.types'

const copy: Copy = {
    eyebrow: 'Prêts quand vous l\'êtes',
    h2: "L'aurore n'attend pas",
    lead: "Les igloos de verre de Kakslauttanen et de Levin Iglut se réservent 8 à 12 mois à l'avance. Les chalets aurores se remplissent quatre à six mois avant le pic de saison. Lancez la recherche maintenant et bloquez vos dates sur une plateforme que vous connaissez déjà.",
    primaryCta: 'Voir prix et disponibilités',
    secondaryCta: 'Commencer par Levi',
    bestTimeLabel: 'Meilleur moment pour réserver : fin d\'été pour l\'hiver suivant',
    statsLabel: '5 destinations · plus de 12 hébergements piliers vérifiés',
    trust: [
      { title: 'Tarifs vérifiés', body: 'Prix recontrôlés sur les pages des opérateurs, pas de prix « à partir de » gonflés, pas de suppléments cachés.' },
      { title: 'Annulation gratuite', body: 'La majorité des chalets et des dates incluent une fenêtre d\'annulation. Chaque fiche affiche la date limite.' },
      { title: 'Confirmation immédiate', body: 'Réservez directement chez notre partenaire Hotels.com. Dates bloquées dès la validation du paiement.' },
      { title: 'Conseil sur place', body: 'Écrivez-nous avant de réserver. Les réponses partent de Laponie, généralement le jour même.' },
    ],
    seasonAnchors: [
      { label: 'Igloos de verre', value: '8–12 mois à l\'avance', sub: 'Kakslauttanen / Levin Iglut' },
      { label: 'Chalets aurores', value: 'À partir de 150 €/nuit', sub: '4 destinations' },
      { label: 'Hôtels de Laponie', value: 'À partir de 100 €/nuit', sub: 'Levi · Ylläs · Saariselkä' },
    ],
  }

export default copy