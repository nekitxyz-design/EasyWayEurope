import React from "react";
import { Button } from "../../../components/ui/button";

export const OverviewSection = (): JSX.Element => {
  return (
    <section className="flex flex-col h-[847px] items-start justify-between w-full bg-transparent">
      <header className="w-full h-16 flex items-center justify-between px-3.5">
        <img 
          src="/logo.svg" 
          alt="EasyWay Logo" 
          className="h-[43px] w-[153px]"
        />
        <div className="w-11 h-[29px] flex flex-col items-end gap-3">
          <div className="w-[39px] h-[5px] bg-[#ffffff99] rounded-[5px]" />
          <div className="w-[39px] h-[5px] bg-[#ffffff99] rounded ml-[5px]" />
          <div className="w-[39px] h-[5px] bg-[#ffffff99] rounded" />
        </div>
      </header>

      <div className="flex flex-col items-start gap-4 pt-8 pb-12 px-6 w-full">
        <h1 className="w-full font-font-h-1 text-font-h-1 text-white md:text-[56px] md:leading-[66px]">
          Ваш путь в Европу через ВНЖ Болгарии
        </h1>

        <p className="w-full font-font-body text-font-body text-white md:text-[20px] md:leading-[28px]">
          Обеспечим полное юридическое сопровождение для получения вида на
          жительство. Прозрачно, надежно и с гарантией результата.
        </p>

        <Button variant="primary" size="compact" className="text-white">
          <span className="[font-family:'Space_Grotesk',Helvetica] font-bold text-white text-lg tracking-[-0.18px]">
            Хочу ВНЖ Болгарии
          </span>
        </Button>
      </div>
    </section>
  );
};
