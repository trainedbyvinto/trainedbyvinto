import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getAlternatePath } from '../i18n/routes'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const { t, i18n } = useTranslation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <header>
      <nav>
        <Link className="logo" to={t('paths.home')}>TRAINED<span>BY</span>VINTO</Link>
        <button
          className={`nav-toggle${menuOpen ? ' open' : ''}`}
          aria-label={t('nav.menuToggle')}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(o => !o)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`navlinks${menuOpen ? ' open' : ''}`}>
          <li><Link to={`${t('paths.home')}#about`}>{t('nav.about')}</Link></li>
          <li><Link to={t('paths.programs')}>{t('nav.programs')}</Link></li>
          <li><Link to={t('paths.results')}>{t('nav.results')}</Link></li>
          <li><Link to={t('paths.contact')}>{t('nav.contact')}</Link></li>
          <li className="navlinks-cta"><Link className="navcta" to={t('paths.contact')}>{t('nav.cta')}</Link></li>
          <li className="navlinks-cta">
            <a
              className="navcta navcta-outline"
              href="https://app.trainedbyvinto.com/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              App Login
            </a>
          </li>
          <li className="lang-switch">
            <Link to={getAlternatePath(location.pathname, 'de')} className={i18n.language === 'de' ? 'active' : ''}>DE</Link>
            {' / '}
            <Link to={getAlternatePath(location.pathname, 'en')} className={i18n.language === 'en' ? 'active' : ''}>EN</Link>
          </li>
        </ul>
        <div className="nav-ctas-desktop">
          <a
            className="navcta navcta-outline navcta-desktop"
            href="https://app.trainedbyvinto.com/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            App Login
          </a>
          <Link className="navcta navcta-desktop" to={t('paths.contact')}>{t('nav.cta')}</Link>
        </div>
      </nav>
    </header>
  )
}
