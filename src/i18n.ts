import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
  en: {
    translation: {
      save: 'Enter code',
    },
  },
  ka: {
    translation: {
      save: 'შეიყვანე კოდი',
    },
  },
}

type Language = keyof typeof resources

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    lng: 'ka',
    fallbackLng: 'en',
    supportedLngs: ['en', 'ka'],
    resources,
  })
  .then(() => {
    const currentLanguage = i18next.language as Language
    i18next.changeLanguage(currentLanguage)
    localStorage.setItem('i18nextLng', currentLanguage)
  })
