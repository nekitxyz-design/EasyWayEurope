import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  ogImage = '/og-image.png',
  canonicalUrl
}) => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  
  const currentLanguage = i18n.language;
  const baseUrl = 'https://ewe.com';
  
  // Определяем язык для HTML атрибута
  const getHtmlLang = () => {
    switch (currentLanguage) {
      case 'ru': return 'ru';
      case 'bg': return 'bg';
      case 'en': return 'en';
      default: return 'en';
    }
  };

  // Получаем переводы для SEO
  const getSEOTitle = () => {
    if (title) return title;
    return t('seo.title');
  };

  const getSEODescription = () => {
    if (description) return description;
    return t('seo.description');
  };

  const getSEOKeywords = () => {
    if (keywords) return keywords;
    return t('seo.keywords');
  };

  const getCanonicalUrl = () => {
    if (canonicalUrl) return canonicalUrl;
    return `${baseUrl}${location.pathname}`;
  };

  useEffect(() => {
    // Обновляем HTML lang атрибут
    document.documentElement.lang = getHtmlLang();

    // Обновляем title
    document.title = getSEOTitle();

    // Обновляем meta теги
    const updateMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    const updatePropertyTag = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Обновляем основные meta теги
    updateMetaTag('description', getSEODescription());
    updateMetaTag('keywords', getSEOKeywords());
    updateMetaTag('author', 'EasyWay Europe');

    // Обновляем Open Graph теги
    updatePropertyTag('og:title', getSEOTitle());
    updatePropertyTag('og:description', getSEODescription());
    updatePropertyTag('og:type', 'website');
    updatePropertyTag('og:url', getCanonicalUrl());
    updatePropertyTag('og:image', `${baseUrl}${ogImage}`);
    updatePropertyTag('og:locale', getHtmlLang());
    updatePropertyTag('og:locale:alternate', currentLanguage === 'ru' ? 'en' : 'ru');

    // Обновляем Twitter Card теги
    updatePropertyTag('twitter:card', 'summary_large_image');
    updatePropertyTag('twitter:title', getSEOTitle());
    updatePropertyTag('twitter:description', getSEODescription());
    updatePropertyTag('twitter:image', `${baseUrl}${ogImage}`);

    // Обновляем canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', getCanonicalUrl());

    // Добавляем hreflang теги для языковых версий
    const addHreflang = (lang: string, url: string) => {
      let hreflang = document.querySelector(`link[rel="alternate"][hreflang="${lang}"]`);
      if (!hreflang) {
        hreflang = document.createElement('link');
        hreflang.setAttribute('rel', 'alternate');
        hreflang.setAttribute('hreflang', lang);
        document.head.appendChild(hreflang);
      }
      hreflang.setAttribute('href', url);
    };

    // Добавляем hreflang для всех языковых версий
    const currentPath = location.pathname.replace(/^\/[a-z]{2}/, '');
    addHreflang('ru', `${baseUrl}/ru${currentPath}`);
    addHreflang('bg', `${baseUrl}/bg${currentPath}`);
    addHreflang('en', `${baseUrl}/en${currentPath}`);
    addHreflang('x-default', `${baseUrl}/en${currentPath}`);

  }, [currentLanguage, location.pathname, title, description, keywords]);

  return null; // Этот компонент не рендерит ничего в DOM
}; 