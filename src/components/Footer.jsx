import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer>
      <div className="wrap">
        <span>{t('footer.copyright')}</span>
        <span>
          <Link to={`${t('paths.home')}#about`}>{t('nav.about')}</Link> · <Link to={t('paths.programs')}>{t('nav.programs')}</Link> · <Link to={t('paths.contact')}>{t('nav.contact')}</Link>
        </span>
      </div>
    </footer>
  )
}
