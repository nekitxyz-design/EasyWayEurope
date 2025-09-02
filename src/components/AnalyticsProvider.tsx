import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useCookieConsent } from '../lib/hooks/useCookieConsent';

// Google Analytics инициализация
const initializeGoogleAnalytics = () => {
  if (typeof window !== 'undefined' && !window.gtag) {
    // Создаем gtag функцию
    window.gtag = function() {
      (window.dataLayer = window.dataLayer || []).push(arguments);
    };
    
    // Добавляем Google Analytics скрипт
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID'; // Замените на ваш ID
    document.head.appendChild(script);
    
    // Инициализируем GA
    window.gtag('js', new Date());
    window.gtag('config', 'GA_MEASUREMENT_ID'); // Замените на ваш ID
  }
};

// Amplitude инициализация
const initializeAmplitude = () => {
  if (typeof window !== 'undefined' && !window.amplitude) {
    // Добавляем Amplitude скрипт
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://cdn.amplitude.com/libs/amplitude-8.5.0-min.gz.js';
    script.onload = () => {
      if (window.amplitude) {
        window.amplitude.init('AMPLITUDE_API_KEY'); // Замените на ваш ключ
      }
    };
    document.head.appendChild(script);
  }
};

// Трекинг событий
export const trackEvent = (eventName: string, properties?: any) => {
  // Проверяем согласие напрямую
  const consent = localStorage.getItem('cookie_consent');
  if (consent !== 'all') {
    return;
  }

  // Google Analytics
  if (window.gtag) {
    window.gtag('event', eventName, properties);
  }

  // Amplitude
  if (window.amplitude) {
    window.amplitude.track(eventName, properties);
  }

  // Meta Pixel
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    try {
      const standardEvents = new Set([
        'PageView',
        'Lead',
        'Contact',
        'CompleteRegistration',
        'SubmitApplication',
        'ViewContent',
        'Purchase'
      ]);
      if (standardEvents.has(eventName)) {
        window.fbq('track', eventName as any, properties || {});
      } else {
        window.fbq('trackCustom', eventName as any, properties || {});
      }
    } catch {}
  }
};

export const AnalyticsProvider = () => {
  const { hasAnalyticsConsent } = useCookieConsent();
  const location = useLocation();

  useEffect(() => {
    if (hasAnalyticsConsent()) {
      initializeGoogleAnalytics();
      initializeAmplitude();
      // Ensure Meta Pixel exists and optionally grant consent
      if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
        try {
          window.fbq('consent', 'grant');
        } catch {}
      }
    }
  }, [hasAnalyticsConsent]);

  // Track SPA PageView on route changes for Meta Pixel
  useEffect(() => {
    if (!hasAnalyticsConsent()) return;
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      try {
        window.fbq('track', 'PageView');
      } catch {}
    }
  }, [location.pathname, hasAnalyticsConsent]);

  return null;
};

// Обновляем глобальные типы
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    amplitude: any;
    dataLayer: any[];
    fbq: (...args: any[]) => void;
  }
} 