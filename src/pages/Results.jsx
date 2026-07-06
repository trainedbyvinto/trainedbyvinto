import BeforeAfterSlider from '../components/BeforeAfterSlider'

const transformations = [
  {
    before: '/images/transformation-1-before.jpg',
    after: '/images/transformation-1-after.jpg',
    label: 'Meine Reise',
    duration: '4 Jahre',
  },
  {
    before: '/images/transformation-2-before.jpg',
    after: '/images/transformation-2-after.jpg',
    label: '–9 kg',
    duration: '5 Wochen',
  },
  {
    before: '/images/transformation-3-before.jpg',
    after: '/images/transformation-3-after.jpg',
    label: '–12 kg',
    duration: '4 Monate',
  },
]

export default function Results() {
  return (
    <section className="transformations" id="transformations">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Ergebnisse</span>
          <h2>Echte Fortschritte</h2>
          <p>Zieh die Trennlinie nach rechts, um vorher/nachher zu vergleichen.</p>
        </div>

        <div className="slider-grid">
          {transformations.map((t) => (
            <div className="slide-card" key={t.label}>
              <BeforeAfterSlider
                beforeSrc={t.before}
                afterSrc={t.after}
                beforeAlt={`${t.label} vorher`}
                afterAlt={`${t.label} nachher`}
              />
              <div className="slide-meta"><b>{t.label}</b><span>{t.duration}</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
