import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { Button } from "./button";

const navItems = [
  { title: "Как это работает", href: "#process" },
  { title: "Гарантии", href: "#guarantees" },
  { title: "Тарифы", href: "#plans" },
  { title: "FAQ", href: "#faq" },
];

const menuSlide = {
  initial: { x: "100%" },
  enter: { x: 0, transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } },
  exit: { x: "100%", transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } },
};

function Curve() {
  const height = typeof window !== "undefined" ? window.innerHeight : 800;
  const curveAmount = 250;
  const initialPath = `M100 0 L200 0 L200 ${height} L100 ${height} Q-${curveAmount} ${height/2} 100 0`;
  const targetPath = `M100 0 L200 0 L200 ${height} L100 ${height} Q${curveAmount} ${height/2} 100 0`;

  const curve = {
    initial: { d: initialPath },
    enter: { d: targetPath, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
    exit: { d: initialPath, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
  };

  return (
    <svg className="absolute top-0 -left-[99px] w-[100px] h-full fill-[#314199cc] pointer-events-none z-30">
      <motion.path
        variants={curve}
        initial="initial"
        animate="enter"
        exit="exit"
        transition={curve.enter.transition}
      />
    </svg>
  );
}

export const CurvedNavbar = ({ isActive, setIsActive }: { isActive: boolean; setIsActive: (v: boolean) => void }) => {
  useEffect(() => {
    if (isActive) {
      document.body.classList.add("overflow-hidden");
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
          className="fixed inset-0 z-50 bg-[#314199cc] backdrop-blur-[8px] text-white flex flex-col"
        >
          {/* Логотип-иконка в левом верхнем углу */}
          <img src="/logo_icon.svg" alt="Logo Icon" className="absolute top-4 left-4 h-[46px] w-auto z-20" />
          <div className="flex justify-between items-center p-4">
            <button onClick={() => setIsActive(false)} className="text-3xl text-white ml-auto">
              <IoClose />
            </button>
          </div>
          <nav className="flex flex-col items-start justify-center flex-1 gap-8 pl-6">
            {navItems.map((item, idx) => (
              <h2
                key={item.title}
                className="font-font-h-1 text-font-h-1 text-white font-bold hover:text-[#ffd23f] transition-colors duration-200 cursor-pointer text-left"
                onClick={e => {
                  e.preventDefault();
                  setIsActive(false);
                  setTimeout(() => {
                    const id = item.href.replace('#', '');
                    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                  }, 200);
                }}
              >
                <a href={item.href}>{item.title}</a>
              </h2>
            ))}
          </nav>
          <div className="pl-6 pb-8 w-full flex flex-col items-start">
            <Button
              variant="primary"
              size="full"
              className="w-[90%] mt-2"
              onClick={() => {
                setIsActive(false);
                setTimeout(() => {
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }, 200);
              }}
            >
              Записаться на консультацию
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}; 