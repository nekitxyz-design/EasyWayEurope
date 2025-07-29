import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export const useLanguageRoute = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  // Определяем язык из URL
  const getLanguageFromPath = (pathname: string): string => {
    const pathSegments = pathname.split('/').filter(Boolean);
    const language = pathSegments[0];
    
    if (['ru', 'bg', 'en'].includes(language)) {
      return language;
    }
    
    return 'en'; // По умолчанию английский
  };

  // Получаем текущий язык из URL
  const currentLanguage = getLanguageFromPath(location.pathname);

  // Синхронизируем i18n с URL при загрузке
  useEffect(() => {
    if (i18n.language !== currentLanguage) {
      i18n.changeLanguage(currentLanguage);
    }
  }, [currentLanguage, i18n]);

  // Функция для смены языка
  const changeLanguage = (newLanguage: string) => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    
    // Если первый сегмент - это язык, заменяем его
    if (['ru', 'bg', 'en'].includes(pathSegments[0])) {
      pathSegments[0] = newLanguage;
    } else {
      // Если языка нет в URL, добавляем его в начало
      pathSegments.unshift(newLanguage);
    }
    
    const newPath = '/' + pathSegments.join('/');
    navigate(newPath);
  };

  return {
    currentLanguage,
    changeLanguage,
  };
}; 