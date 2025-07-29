/// <reference types="vite/client" />
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaBarsStaggered } from "react-icons/fa6";
import { CurvedNavbar } from "./curved-navbar";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "../../lib/utils";
import { useLanguageRoute } from "../../lib/hooks/useLanguageRoute";
// import { track } from '@amplitude/analytics-browser';
import { AnimatePresence, motion } from "framer-motion";

import { trackEvent } from '../../components/AnalyticsProvider';

// Helper function for tracking
const track = (eventName: string, properties?: any) => {
  trackEvent(eventName, properties);
};

const useNavItems = () => {
  const { t } = useTranslation();
  
  return [
    { title: t('nav.how_it_works'), href: "/#process" },
    { title: t('nav.guarantees'), href: "/#guarantees" },
    { title: t('nav.prices'), href: "/#plans" },
    { title: t('nav.faq'), href: "/#faq" },
  ];
};

const LanguageSelect = ({ value, onValueChange }: { value: string; onValueChange: (value: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const getFlag = (lang: string) => {
    switch(lang) {
      case 'ru': return '🇷🇺';
      case 'bg': return '🇧🇬';
      case 'en': return '🇬🇧';
      default: return '🇷🇺';
    }
  };

  return (
    <SelectPrimitive.Root value={value} onValueChange={onValueChange} onOpenChange={setIsOpen}>
      <SelectPrimitive.Trigger className="flex items-center gap-2 text-white hover:text-[#ffd23f] transition-colors duration-200 cursor-pointer bg-[#222b4c]/80 p-2 rounded-lg">
        <span className="text-lg">{getFlag(value)}</span>
        <SelectPrimitive.Icon asChild>
          <ChevronDownIcon className="h-4 w-4 opacity-50 text-white" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content 
          className="bg-[#222b4c] rounded-xl shadow-2xl p-2 min-w-[120px] z-50"
          position="popper"
          sideOffset={5}
        >
          <SelectPrimitive.Viewport>
            <SelectPrimitive.Item value="ru" className="flex items-center gap-2 px-3 py-2 text-white hover:bg-white/10 rounded cursor-pointer outline-none">
              <span>🇷🇺</span>
              <span>Русский</span>
            </SelectPrimitive.Item>
            <SelectPrimitive.Item value="bg" className="flex items-center gap-2 px-3 py-2 text-white hover:bg-white/10 rounded cursor-pointer outline-none">
              <span>🇧🇬</span>
              <span>Български</span>
            </SelectPrimitive.Item>
            <SelectPrimitive.Item value="en" className="flex items-center gap-2 px-3 py-2 text-white hover:bg-white/10 rounded cursor-pointer outline-none">
              <span>🇬🇧</span>
              <span>English</span>
            </SelectPrimitive.Item>
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
};

export const MainNavbar: React.FC = () => {
  const { i18n } = useTranslation();
  const { currentLanguage, changeLanguage } = useLanguageRoute();
  const navItems = useNavItems();
  const [open, setOpen] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleLanguageChange = (value: string) => {
    // Track language change
    track('Language Changed', {
      from: currentLanguage,
      to: value,
    });
    changeLanguage(value);
  };

  // Handle scroll for mobile menu
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show mobile menu when scrolling up and not at the top
      if (currentScrollY < lastScrollY && currentScrollY > 100) {
        setShowMobileMenu(true);
      } else if (currentScrollY > lastScrollY || currentScrollY <= 100) {
        setShowMobileMenu(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav className="w-full h-16 flex items-center justify-between px-6 py-4 md:py-6 relative z-10">
        <div className="w-full md:max-w-[1600px] md:mx-auto px-0 md:px-16 flex items-center justify-between">
          {/* Логотип */}
          <img
            src="/logo_horiz.svg"
            alt="EasyWayEurope Logo"
            className="h-[46px] w-[164px] object-contain"
          />
          {/* Десктоп меню */}
          <ul className="hidden md:flex items-center gap-8 text-white">
            {navItems.map((item) => (
              <li key={item.title}>
                <a
                  href={item.href}
                  className="font-font-body text-font-body hover:text-[#ffd23f] transition-colors duration-200"
                  onClick={e => {
                    e.preventDefault();
                    
                    // Track navigation click
                    track('Navigation Clicked', {
                      item: item.title,
                      href: item.href,
                      section: item.href.replace('/#', ''),
                    });
                    
                    // Navigate to main page with anchor
                    window.location.href = item.href;
                  }}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          {/* Переключатель языка */}
          <div className="hidden md:flex items-center gap-2">
            <LanguageSelect value={currentLanguage} onValueChange={handleLanguageChange} />
          </div>
          {/* Мобильный бургер */}
          <button className="flex md:hidden text-white text-2xl" onClick={() => setOpen(true)}>
            <FaBarsStaggered />
          </button>
        </div>
      </nav>

      {/* Мобильное меню с эффектом React Bits */}
      <AnimatePresence>
        {showMobileMenu && (
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-40 md:hidden pointer-events-none"
            style={{ pointerEvents: 'none' }}
          >
            <div
              className="w-[calc(100vw-16px)] h-16 flex items-center justify-between px-6 py-4 backdrop-blur-lg bg-white/20 border-b border-white/10 shadow-lg rounded-[20px] mx-auto"
              style={{
                WebkitBackdropFilter: 'blur(16px)',
                backdropFilter: 'blur(16px)',
                marginTop: '8px',
                marginLeft: '8px',
                marginRight: '8px',
                borderRadius: '20px',
                pointerEvents: 'auto',
              }}
            >
              <img
                src="/logo_horiz.svg"
                alt="EasyWayEurope Logo"
                className="h-[46px] w-[164px] object-contain"
              />
              <button className="text-white text-2xl" onClick={() => setOpen(true)}>
                <FaBarsStaggered />
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      <CurvedNavbar isActive={open} setIsActive={setOpen} />
    </>
  );
}; 