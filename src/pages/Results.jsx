import { useTranslation } from 'react-i18next'
import BeforeAfterSlider from '../components/BeforeAfterSlider'
import Reveal from '../components/Reveal'

export default function Results() {
  const { t } = useTranslation()
  const transformations = t('results.transformations', { returnObjects: true })

  return (
    <section className="transformations" id="transformations">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">{t('results.eyebrow')}</span>
          <h2>{t('results.heading')}</h2>
          <p>{t('results.subheading')}</p>
        </Reveal>

        <div className="slider-grid">
          {transformations.map((tf, i) => (
            <Reveal as="div" className="slide-card" key={tf.label} delay={i * 100}>
              <BeforeAfterSlider
                beforeSrc={tf.before}
                afterSrc={tf.after}
                beforeAlt={t('results.altBefore', { label: tf.label })}
                afterAlt={t('results.altAfter', { label: tf.label })}
              />
              <div className="slide-meta"><b>{tf.label}</b><span>{tf.duration}</span></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
