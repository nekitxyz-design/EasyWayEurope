import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useCookieConsent } from '../lib/hooks/useCookieConsent';

export const CookieConsent = () => {
  const { t, i18n } = useTranslation();
  const { getConsent, setConsent } = useCookieConsent();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Проверяем, было ли уже принято согласие
    const hasConsent = getConsent();
    if (!hasConsent) {
      setIsVisible(true);
    }
  }, [i18n.language, getConsent]);

  const handleAcceptAll = () => {
    setConsent('all');
    setIsVisible(false);
    // Перезагружаем страницу для инициализации аналитики
    window.location.reload();
  };

  const handleAcceptNecessary = () => {
    setConsent('necessary');
    setIsVisible(false);
  };

  const getTranslations = () => {
    const currentLang = i18n.language;
    
    const translations = {
      ru: {
        title: 'Мы используем файлы cookie',
        description: 'Мы используем файлы cookie для улучшения работы сайта, анализа трафика и персонализации контента.',
        acceptAll: 'Принять все',
        acceptNecessary: 'Только необходимые',
        learnMore: 'Узнать больше'
      },
      bg: {
        title: 'Използваме бисквитки',
        description: 'Използваме бисквитки за подобряване на работата на сайта, анализ на трафика и персонализиране на съдържанието.',
        acceptAll: 'Приеми всички',
        acceptNecessary: 'Само необходимите',
        learnMore: 'Научи повече'
      },
      en: {
        title: 'We use cookies',
        description: 'We use cookies to improve website performance, analyze traffic and personalize content.',
        acceptAll: 'Accept all',
        acceptNecessary: 'Necessary only',
        learnMore: 'Learn more'
      }
    };

    return translations[currentLang as keyof typeof translations] || translations.en;
  };

  const translations = getTranslations();

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 md:right-4 md:bottom-4 left-4 md:left-auto z-[9999] max-w-md mx-auto md:mx-0 bg-black/90 backdrop-blur-lg border border-white/10 rounded-lg p-6 shadow-2xl animate-slide-in">
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-white font-font-h-2 text-font-h-2 mb-2">
            {translations.title}
          </h2>
          <p className="text-white/80 font-font-body text-font-body leading-relaxed">
            {translations.description}
          </p>
        </div>
        
                     <div className="flex flex-col sm:flex-row gap-3">
               <button
                 onClick={handleAcceptAll}
                 className="bg-blue-600 hover:bg-blue-700 text-white font-font-body text-font-body font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex-1"
               >
                 {translations.acceptAll}
               </button>
               <button
                 onClick={handleAcceptNecessary}
                 className="bg-white/10 hover:bg-white/20 text-white font-font-body text-font-body font-semibold py-3 px-4 rounded-lg border border-white/20 transition-colors duration-200 flex-1"
               >
                 {translations.acceptNecessary}
               </button>
             </div>
        
        <div className="text-center">
          <a
            href={`/${i18n.language}/privacy-policy`}
            className="text-blue-400 hover:text-blue-300 font-font-body text-font-body underline"
          >
            {translations.learnMore}
          </a>
        </div>
      </div>
    </div>
  );
}; 