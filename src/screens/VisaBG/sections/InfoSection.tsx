import React from "react";
import { Card, CardContent } from "../../../components/ui/card";

export const InfoSection = (): JSX.Element => {
  const features = [
    {
      icon: "🕒",
      text: "10+ лет в сфере иммиграционного и бизнес-права",
    },
    {
      icon: "👨",
      text: "Более 100 реализованных кейсов",
    },
    {
      icon: "⚖️",
      text: "Лучшие юристы Болгарии в команде",
    },
    {
      icon: "💻",
      text: "Понимание специфики и миграционного права",
    },
    {
      icon: "🤝",
      text: "Персонализированный подход",
    },
    {
      icon: "📑",
      text: "Поддержка на всех этапах",
    },
    {
      icon: "💡",
      text: "Работаем на 100% легально и прозрачно",
    },
  ];

  return (
    <section className="gap-6 px-6 py-12 bg-[#3141994c] flex flex-col items-start relative w-full backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)]">
      <img 
        src="/Logo_lp.svg" 
        alt="EasyWay Europe Logo" 
        className="w-[88px] h-[88px]"
      />

      <h1 className="relative self-stretch font-font-h-1 text-font-h-1 text-[#f3fcf0]">
        О Нас
      </h1>

      <h2 className="relative self-stretch font-font-h-2 text-font-h-2 text-[#f3fcf0]">
        Ваш надежный партнер по релокации
      </h2>

      <Card className="w-full bg-transparent border-none shadow-none">
        <CardContent className="flex flex-col items-start gap-3 p-0">
          {features.map((feature, index) => (
            <p
              key={index}
              className="relative self-stretch font-font-body text-font-body text-[#f3fcf0]"
            >
              {feature.icon} {feature.text}
            </p>
          ))}
        </CardContent>
      </Card>
    </section>
  );
};
