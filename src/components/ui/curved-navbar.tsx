import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { Button } from "./button";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDownIcon } from "lucide-react";
import { useLanguageRoute } from "../../lib/hooks/useLanguageRoute";
// import { track } from '@amplitude/analytics-browser';

import { trackEvent } from '../../components/AnalyticsProvider';
import { cn } from "../../lib/utils";
import { getAssetPath } from "../../lib/utils";

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
      <SelectPrimitive.Trigger className="flex items-center gap-2 text-white hover:text-[#ffd23f] transition-colors duration-200 cursor-pointer bg-[#222b4c]/80 p-2 rounded-lg h-[60px]">
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

const menuSlide = {
  initial: { x: "100%" },
  enter: { x: 0, transition: { duration: 0.3 } },
  exit: { x: "100%", transition: { duration: 0.3 } },
};

function Curve() {
  const height = typeof window !== "undefined" ? window.innerHeight : 800;
  const curveAmount = 250;
  const initialPath = `M100 0 L200 0 L200 ${height} L100 ${height} Q-${curveAmount} ${height/2} 100 0`;
  const targetPath = `M100 0 L200 0 L200 ${height} L100 ${height} Q${curveAmount} ${height/2} 100 0`;

  return (
    <svg className="absolute top-0 -left-[99px] w-[100px] h-full fill-transparent pointer-events-none z-30">
      <motion.path
        d={targetPath}
      />
    </svg>
  );
}

export const CurvedNavbar = ({ isActive, setIsActive }: { isActive: boolean; setIsActive: (v: boolean) => void }) => {
  const { i18n, t } = useTranslation();
  const { currentLanguage, changeLanguage } = useLanguageRoute();
  const navItems = useNavItems();

  const handleLanguageChange = (value: string) => {
    // Track mobile language change
    track('Mobile Language Changed', {
      from: currentLanguage,
      to: value,
    });
    changeLanguage(value);
  };

  useEffect(() => {
    if (isActive) {
      document.body.classList.add("overflow-hidden");
      // Track mobile menu opened
      track('Mobile Menu Opened');
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isActive]);
  
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          variants={menuSlide}
          initial="initial"
          animate="enter"
          exit="exit"
          className="fixed inset-0 z-50 backdrop-blur-[8px] bg-black/60 text-white flex flex-col"
        >
          {/* Логотип-иконка в левом верхнем углу */}
          <img 
            src={getAssetPath("/logo_icon.svg")} 
            alt="Logo Icon" 
            className="absolute top-4 left-4 h-[46px] w-auto z-20 cursor-pointer hover:opacity-80 transition-opacity duration-200" 
            onClick={() => {
              setIsActive(false);
              setTimeout(() => {
                window.location.href = `/${currentLanguage}`;
              }, 300);
            }}
          />
          <div className="flex justify-between items-center px-4 py-2">
            <button onClick={() => setIsActive(false)} className="text-3xl text-white ml-auto h-[46px] flex items-center">
              <IoClose />
            </button>
          </div>
          <nav className="flex flex-col items-start justify-center flex-1 gap-8 px-6">
            {navItems.map((item) => (
              <h2
                key={item.title}
                className="font-font-h-1 text-font-h-1 text-white font-bold hover:text-[#ffd23f] transition-colors duration-200 cursor-pointer text-left"
                onClick={e => {
                  e.preventDefault();
                  track('Mobile Navigation Clicked', {
                    item: item.title,
                    href: item.href,
                    section: item.href.replace('/#', ''),
                  });
                  setIsActive(false);
                  // Плавный скролл, если уже на главной или языковой странице
                  const langPaths = ['/', '/en', '/ru', '/bg'];
                  if (langPaths.includes(window.location.pathname)) {
                    const anchor = item.href.replace('/#', '');
                    setTimeout(() => {
                      const el = document.getElementById(anchor);
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth' });
                      } else {
                        window.location.href = item.href;
                      }
                    }, 300);
                  } else {
                    window.location.href = item.href;
                  }
                }}
              >
                <a href={item.href}>{item.title}</a>
              </h2>
            ))}
          </nav>
          <div className="px-6 pb-8 w-full flex justify-center">
            <div className="w-full flex gap-2 items-center">
              <Button
                variant="primary"
                size="full"
                className="flex-1 min-w-0"
                onClick={() => {
                  track('Mobile Consultation Button Clicked', {
                    buttonText: t('process.cta_button'),
                    section: 'mobile-menu',
                  });
                  setIsActive(false);
                  const langPaths = ['/', '/en', '/ru', '/bg'];
                  if (langPaths.includes(window.location.pathname)) {
                    setTimeout(() => {
                      const el = document.getElementById('plans');
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth' });
                      } else {
                        window.location.href = '/#plans';
                      }
                    }, 300);
                  } else {
                    window.location.href = '/#plans';
                  }
                }}
              >
                {t('process.cta_button')}
              </Button>
              <div className="flex-shrink-0">
                <LanguageSelect value={currentLanguage} onValueChange={handleLanguageChange} />
              </div>
            </div>
          </div>
          <Curve />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
