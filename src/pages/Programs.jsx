import { useTranslation } from 'react-i18next'
import ProgramCard from '../components/ProgramCard'

export default function Programs() {
  const { t } = useTranslation()
  const programs = t('programs.list', { returnObjects: true })

  return (
    <section className="programs" id="programs">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">{t('programs.eyebrow')}</span>
          <h2>{t('programs.heading')}</h2>
          <p>{t('programs.subheading')}</p>
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
