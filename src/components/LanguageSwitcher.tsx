import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguageRoute } from '../lib/hooks/useLanguageRoute';
import { Button } from './ui/button';

const languages = [
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'bg', name: 'Български', flag: '🇧🇬' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
];

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const { currentLanguage, changeLanguage } = useLanguageRoute();

  return (
    <div className="flex gap-2">
      {languages.map((language) => (
        <Button
          key={language.code}
          variant={(currentLanguage || i18n.language) === language.code ? "default" : "outline"}
          size="sm"
          onClick={() => changeLanguage(language.code)}
          className="flex items-center gap-2 min-w-0 px-3 py-1 text-sm"
        >
          <span className="text-lg">{language.flag}</span>
          <span className="hidden sm:inline">{language.name}</span>
        </Button>
      ))}
    </div>
  );
}; 