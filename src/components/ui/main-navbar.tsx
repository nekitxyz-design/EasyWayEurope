import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { CurvedNavbar } from "./curved-navbar";

const navItems = [
  { title: "Как это работает", href: "#process" },
  { title: "Гарантии", href: "#guarantees" },
  { title: "Тарифы", href: "#plans" },
  { title: "FAQ", href: "#faq" },
];

export const MainNavbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full h-16 flex items-center justify-between px-3.5 py-4 md:py-6 relative z-10">
      {/* Логотип */}
      <img
        src="/Logo_desktop.svg"
        alt="EasyWay Europe Logo"
        className="h-[46px] w-[164px] object-contain"
      />
      {/* Десктоп меню */}
      <ul className="hidden md:flex items-center gap-8 font-font-body text-font-body text-white">
        {navItems.map((item) => (
          <li key={item.title}>
            <a
              href={item.href}
              className="hover:text-[#ffd23f] transition-colors duration-200"
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
      {/* Мобильный бургер */}
      <button className="flex md:hidden text-white text-2xl" onClick={() => setOpen(true)}>
        <FaBarsStaggered />
      </button>
      {/* Мобильное меню */}
      <CurvedNavbar isActive={open} setIsActive={setOpen} />
    </nav>
  );
}; 