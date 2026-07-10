import de from './locales/de.json'
import en from './locales/en.json'

export const LANGUAGES = ['de', 'en']

export const ROUTES = {
  de: de.paths,
  en: en.paths,
}

export function detectLangFromPath(pathname) {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'de'
}

function findRouteKey(lang, pathname) {
  const entry = Object.entries(ROUTES[lang]).find(([, path]) => path === pathname)
  return entry ? entry[0] : 'home'
}

export function getAlternatePath(pathname, targetLang) {
  const currentLang = detectLangFromPath(pathname)
  const key = findRouteKey(currentLang, pathname)
  return ROUTES[targetLang][key] ?? ROUTES[targetLang].home
}
