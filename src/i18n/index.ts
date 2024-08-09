import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
  en: {
    translation: {
      hide: 'Hide',
      show: 'Show',
      hideDrawer: 'Hide Drawer',
      showDrawer: 'Show Drawer',
      chooseLanguage: 'Choose Language',
      languageEn: 'English',
      languageKa: 'ქართული',
      close: 'Close',
      download: 'Download',
      logout: 'Logout',
      uploadImage: 'Upload Image',
      decrease: 'Decrease',
      increase: 'Increase',
      hidePassword: 'Hide Password',
      showPassword: 'Show Password',
      darkTheme: 'Dark Theme',
      lightTheme: 'Light Theme',
    },
  },
  ka: {
    translation: {
      hide: 'დამალვა',
      show: 'ჩვენება',
      hideDrawer: 'მენიუს დამალვა',
      showDrawer: 'მენიუს ჩვენება',
      chooseLanguage: 'აირჩიეთ ენა',
      languageEn: 'English',
      languageKa: 'ქართული',
      close: 'დახურვა',
      download: 'გადმოწერა',
      logout: 'გამოსვლა',
      uploadImage: 'ათვირთეთ სურათი',
      decrease: 'შემცირება',
      increase: 'გაზრდა',
      hidePassword: 'პაროლის დამალვა',
      showPassword: 'პაროლის ჩვენება',
      darkTheme: 'მუქი თემა',
      lightTheme: 'ღია თემა',
    },
  },
}

type Language = keyof typeof resources

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'ka'],
    resources,
  })
  .then(() => {
    const currentLanguage = i18next.language as Language
    i18next.changeLanguage(currentLanguage)
    localStorage.setItem('i18nextLng', currentLanguage)
  })
