import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Импорт переводов
import ru from './locales/ru.json';
import bg from './locales/bg.json';
import en from './locales/en.json';

const resources = {
  ru: {
    translation: ru,
  },
  bg: {
    translation: bg,
  },
  en: {
    translation: en,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en', // Изменили на английский по умолчанию
    debug: false, // Отключаем debug логи
    
    interpolation: {
      escapeValue: false, // React уже экранирует значения
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n; 