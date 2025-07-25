import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { CurvedNavbar } from "./curved-navbar";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "../../lib/utils";

const navItems = [
  { title: "Как это работает", href: "#process" },
  { title: "Гарантии", href: "#guarantees" },
  { title: "Тарифы", href: "#plans" },
  { title: "FAQ", href: "#faq" },
];

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
  const [open, setOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("ru");

  return (
    <nav className="w-full h-16 flex items-center justify-between px-3.5 py-4 md:py-6 relative z-10">
      <div className="w-full md:max-w-[1600px] md:mx-auto px-6 md:px-16 flex items-center justify-between">
        {/* Логотип */}
        <img
          src="/logo_horiz.svg"
          alt="EasyWay Europe Logo"
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
                  const id = item.href.replace('#', '');
                  const el = document.getElementById(id);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        {/* Переключатель языка */}
        <div className="hidden md:flex items-center gap-2">
          <LanguageSelect value={selectedLanguage} onValueChange={setSelectedLanguage} />
        </div>
        {/* Мобильный бургер */}
        <button className="flex md:hidden text-white text-2xl" onClick={() => setOpen(true)}>
          <FaBarsStaggered />
        </button>
        {/* Мобильное меню */}
        <CurvedNavbar isActive={open} setIsActive={setOpen} />
      </div>
    </nav>
  );
}; 