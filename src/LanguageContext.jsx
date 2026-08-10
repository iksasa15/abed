import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import content from './i18n'

const LanguageContext = createContext(null)
const STORAGE_KEY = 'abeer-locale'

function applyDocumentLocale(locale) {
  const root = document.documentElement
  root.setAttribute('lang', locale)
  root.setAttribute('dir', locale === 'ar' ? 'rtl' : 'ltr')
  document.title = locale === 'ar' ? 'عبير اليعيش' : 'Abeer Al-Yaeesh'
}

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved === 'en' || saved === 'ar' ? saved : 'ar'
    } catch {
      return 'ar'
    }
  })

  useEffect(() => {
    applyDocumentLocale(locale)
    try {
      localStorage.setItem(STORAGE_KEY, locale)
    } catch {
      /* ignore */
    }
  }, [locale])

  const value = useMemo(
    () => ({
      locale,
      t: content[locale],
      isAr: locale === 'ar',
      toggleLocale: () => setLocale((prev) => (prev === 'ar' ? 'en' : 'ar')),
      setLocale,
    }),
    [locale],
  )

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
