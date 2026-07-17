import { useTranslation } from 'react-i18next'
import ProgramCard from '../components/ProgramCard'
import Reveal from '../components/Reveal'

export default function Programs() {
  const { t } = useTranslation()
  const programs = t('programs.list', { returnObjects: true })

  return (
    <section className="programs" id="programs">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">{t('programs.eyebrow')}</span>
          <h2>{t('programs.heading')}</h2>
          <p>{t('programs.subheading')}</p>
        </Reveal>
        <div className="programs-grid">
          {programs.map((program, i) => (
            <Reveal key={program.title} delay={i * 100}>
              <ProgramCard {...program} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
