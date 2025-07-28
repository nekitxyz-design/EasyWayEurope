import React from "react";
import { Card, CardContent } from "../../../components/ui/card";

export const AboutUsSection = () => {
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
    <section className="bg-[#3141994c] w-full backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)] md:pt-10 md:pb-10">
      <div className="max-w-[1600px] mx-auto w-full md:px-16 gap-6 flex flex-col items-start px-6 py-12">
        <img 
          src="logo_lp.svg" 
          alt="EasyWay Europe Logo" 
          className="w-[88px] h-[88px]"
        />
        <h1 className="relative self-stretch font-font-h-1 text-font-h-1 text-[#f3fcf0]">
          О Нас
        </h1>
        <h2 className="relative self-stretch font-font-h-2 text-font-h-2 text-[#f3fcf0] mb-2">
          Ваш надежный партнер по релокации
        </h2>
        <Card className="w-full bg-transparent border-none shadow-none">
          <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-[8px] md:gap-6 p-0">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-row md:flex-col items-start gap-2 md:max-w-[320px]"
              >
                <span className="text-2xl md:text-4xl md:mb-1">{feature.icon}</span>
                <span className="font-font-body text-font-body text-[#f3fcf0]">{feature.text}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
