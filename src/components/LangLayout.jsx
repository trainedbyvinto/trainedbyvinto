import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function LangLayout({ lang }) {
  const { i18n } = useTranslation()

  useEffect(() => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang)
    }
    document.documentElement.lang = lang
    document.title = i18n.t('meta.title', { lng: lang })
  }, [lang, i18n])

  return <Outlet />
}
