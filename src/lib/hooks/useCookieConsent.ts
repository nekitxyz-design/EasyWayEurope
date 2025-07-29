import { useState, useEffect } from 'react';

export type ConsentType = 'all' | 'necessary' | null;

export const useCookieConsent = () => {
  const [consent, setConsentState] = useState<ConsentType>(null);

  useEffect(() => {
    const storedConsent = localStorage.getItem('cookie_consent') as ConsentType;
    setConsentState(storedConsent);
  }, []);

  const setConsent = (type: 'all' | 'necessary') => {
    localStorage.setItem('cookie_consent', type);
    setConsentState(type);
  };

  const getConsent = (): ConsentType => {
    return localStorage.getItem('cookie_consent') as ConsentType;
  };

  const hasAnalyticsConsent = (): boolean => {
    return getConsent() === 'all';
  };

  const hasNecessaryConsent = (): boolean => {
    const currentConsent = getConsent();
    return currentConsent === 'all' || currentConsent === 'necessary';
  };

  const clearConsent = () => {
    localStorage.removeItem('cookie_consent');
    setConsentState(null);
  };

  return {
    consent,
    setConsent,
    getConsent,
    hasAnalyticsConsent,
    hasNecessaryConsent,
    clearConsent
  };
}; 