import ProgramCard from '../components/ProgramCard'

const programs = [
  {
    tag: 'Vor Ort',
    title: '1:1 Personal Training',
    features: [
      'Individuelles Training im Studio',
      'Laufende Technik-Optimierung',
      'Persönliche Begleitung bei jeder Einheit',
    ],
    price: 'Ab CHF 60',
    priceUnit: '/ Session',
  },
  {
    tag: 'Ortsunabhängig',
    title: 'Online Coaching',
    features: [
      'Individueller Trainings- und Ernährungsplan',
      'Wöchentliche Check-ins',
      'Direkter WhatsApp Chat-Support',
    ],
    price: 'Ab CHF 100',
    priceUnit: '/ Monat',
  },
  {
    tag: 'Kombination',
    title: 'Hybrid Coaching',
    features: [
      'Online Coaching plus regelmässige PT-Sessions',
      'Persönliches Technik-Feedback',
      'Individuelle Anpassungen & Support im Gym',
    ],
    price: 'Ab CHF 250',
    priceUnit: '/ Monat',
  },
]

export default function Programs() {
  return (
    <section className="programs" id="programs">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Programme</span>
          <h2>Wähle deine Betreuung</h2>
          <p>Drei Coaching-Modelle. Ein Prinzip: Fortschritt mit System.</p>
        </div>
        <div className="programs-grid">
          {programs.map((program) => (
            <ProgramCard key={program.title} {...program} />
          ))}
        </div>
      </div>
    </section>
  )
}
