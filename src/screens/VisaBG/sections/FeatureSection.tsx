import React from "react";
import { Card, CardContent } from "../../../components/ui/card";

export const FeatureSection = () => {
  // Feature data for mapping
  const features = [
    {
      icon: "🛡",
      title: "Безопасность и Стабильность",
      description: "Низкий уровень преступности в стабильной стране ЕС.",
    },
    {
      icon: "☀️",
      title: "Отличный климат",
      description: "Европейская зима и теплое лето без дождей.",
    },
    {
      icon: "🇪🇺",
      title: "Доступ в Евросоюз",
      description:
        "Свобода передвижения и ведения бизнеса в ЕС и Шенгенской зоне",
    },
    {
      icon: "💶",
      title: "Выгодный налоговый режим",
      description:
        "10% налог на прибыль и личные доходы — один из самых низких в Европе.",
    },
    {
      icon: "🤝",
      title: "Простая бизнес-интеграция",
      description: "Понятная юридическая среда и развитое бизнес-сообщество",
    },
  ];

  return (
    <section className="w-full bg-[#50913bb8] rounded backdrop-blur-[22px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(22px)_brightness(100%)] md:pt-10 md:pb-10">
      <div className="max-w-[1600px] mx-auto w-full md:px-16">
        <Card className="flex flex-col gap-8 px-4 py-12 relative self-stretch w-full bg-transparent border-none">
          <CardContent className="flex flex-col gap-8 p-0 w-full">
            <h1 className="self-start text-white font-font-h-1 text-font-h-1 md:text-[56px] md:leading-[66px] md:mb-4">
              Преимущества Болагарии 🇧🇬
            </h1>
            {/* Desktop: 2-2-1 layout, карточки по 440px, последняя по центру */}
            <div className="hidden md:grid grid-cols-2 gap-8 w-full">
              {features.slice(0, 4).map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start gap-0.5 w-[440px]"
                >
                  <h2 className="self-stretch mt-[-1.00px] text-white font-font-h-2 text-font-h-2">
                    <span className="mr-2">{feature.icon}</span>
                    {feature.title}
                  </h2>
                  <p className="self-stretch text-white font-font-body text-font-body">
                    {feature.description}
                  </p>
                </div>
              ))}
              {/* Последняя карточка — на отдельной строке, по центру */}
              <div className="col-span-2 flex justify-start">
                <div className="flex flex-col items-start gap-0.5 w-[440px]">
                  <h2 className="self-stretch mt-[-1.00px] text-white font-font-h-2 text-font-h-2">
                    <span className="mr-2">{features[4].icon}</span>
                    {features[4].title}
                  </h2>
                  <p className="self-stretch text-white font-font-body text-font-body">
                    {features[4].description}
                  </p>
                </div>
              </div>
            </div>
            {/* Mobile: одна колонка */}
            <div className="flex flex-col items-start gap-6 w-full md:hidden">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start gap-0.5 w-full"
                >
                  <h2 className="self-stretch mt-[-1.00px] text-white font-font-h-2 text-font-h-2">
                    <span className="mr-2">{feature.icon}</span>
                    {feature.title}
                  </h2>
                  <p className="self-stretch text-white font-font-body text-font-body">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
