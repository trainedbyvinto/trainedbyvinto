import { useTranslation } from 'react-i18next'
import BeforeAfterSlider from '../components/BeforeAfterSlider'

export default function Results() {
  const { t } = useTranslation()
  const transformations = t('results.transformations', { returnObjects: true })

  return (
    <section className="transformations" id="transformations">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">{t('results.eyebrow')}</span>
          <h2>{t('results.heading')}</h2>
          <p>{t('results.subheading')}</p>
        </div>

        <div className="slider-grid">
          {transformations.map((tf) => (
            <div className="slide-card" key={tf.label}>
              <BeforeAfterSlider
                beforeSrc={tf.before}
                afterSrc={tf.after}
                beforeAlt={t('results.altBefore', { label: tf.label })}
                afterAlt={t('results.altAfter', { label: tf.label })}
              />
              <div className="slide-meta"><b>{tf.label}</b><span>{tf.duration}</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
