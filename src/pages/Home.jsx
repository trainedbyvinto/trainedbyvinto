import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Reveal from '../components/Reveal'

export default function Home() {
  const { t } = useTranslation()

  return (
    <>
      <section className="hero">
        <div className="wrap">
          <Reveal className="hero-tag">{t('home.hero.tag')}</Reveal>
          <Reveal as="h1" delay={80}>
            {t('home.hero.titleLine1')}<br />{t('home.hero.titleLine2')}<br /><em>{t('home.hero.titleEm')}</em>
          </Reveal>
          <Reveal as="p" className="hero-sub" delay={160}>{t('home.hero.subtitle')}</Reveal>
          <Reveal className="hero-actions" delay={240}>
            <Link className="btn-primary" to={t('paths.contact')}>{t('home.hero.ctaPrimary')}</Link>
            <Link className="btn-ghost" to={t('paths.results')}>{t('home.hero.ctaGhost')}</Link>
          </Reveal>
          <Reveal className="hero-stats" delay={320}>
            <div className="stat"><b>{t('home.hero.statClientsValue')}</b><span>{t('home.hero.statClientsLabel')}</span></div>
            <div className="stat"><b>{t('home.hero.statPlansValue')}</b><span>{t('home.hero.statPlansLabel')}</span></div>
          </Reveal>
        </div>
      </section>

      <section className="about" id="about">
        <div className="wrap">
          <Reveal as="span" className="eyebrow">{t('home.about.eyebrow')}</Reveal>
          <div className="about-grid">
            <Reveal className="about-portrait">
              <img src="/images/about-portrait.jpg" alt={t('home.about.portraitAlt')} />
            </Reveal>
            <Reveal delay={120}>
              <h2 style={{ color: 'var(--concrete)', fontSize: 'clamp(28px,4vw,42px)', marginBottom: '20px' }}>{t('home.about.name')}</h2>
              <p>{t('home.about.p1')}</p>
              <p>{t('home.about.p2')}</p>
              <div className="about-creds">
                <div>{t('home.about.cred1a')}<br />{t('home.about.cred1b')}</div>
                <div>{t('home.about.cred2a')}<br />{t('home.about.cred2b')}</div>
                <div>{t('home.about.cred3a')}<br />{t('home.about.cred3b')}</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
