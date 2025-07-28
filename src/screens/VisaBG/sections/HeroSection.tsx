import React from "react";
import { Button } from "../../../components/ui/button";
import { MainNavbar } from "../../../components/ui/main-navbar";
// import { track } from '@amplitude/analytics-browser';

// Helper function for tracking
const track = (eventName: string, properties?: any) => {
  if ((window as any).amplitude) {
    (window as any).amplitude.track(eventName, properties);
  }
};

export const HeroSection = () => {
  const handleHeroButtonClick = () => {
    // Track hero button click
    track('Hero Button Clicked', {
      buttonText: 'Хочу жить в Болгарии',
      section: 'hero',
    });
    
    const el = document.getElementById('what-vnz');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="flex flex-col h-screen w-full bg-transparent">
      <MainNavbar />
      <div className="flex-1 flex">
        <div className="max-w-[1600px] mx-auto w-full md:px-16 flex flex-col justify-end h-full">
          <div className="flex flex-col items-start gap-4 pt-8 pb-12 px-6 w-full">
            <h1 className="w-full font-font-h-1 text-font-h-1 text-white md:text-[56px] md:leading-[66px] md:max-w-[700px]">
              Ваш путь в Европу через ВНЖ Болгарии
            </h1>
            <p className="w-full font-font-body text-font-body text-white md:text-[20px] md:leading-[28px] md:max-w-[500px]">
              Обеспечим полное юридическое сопровождение для получения вида на
              жительство. Прозрачно, надежно и с гарантией результата.
            </p>
            <div className="mb-1"></div>
            <Button 
              variant="primary" 
              size="compact"
              className="text-white w-full md:w-auto"
              onClick={handleHeroButtonClick}
            >
              <span className="[font-family:'Space_Grotesk',Helvetica] font-bold text-white text-lg tracking-[-0.18px]">
                Хочу жить в Болгарии
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
