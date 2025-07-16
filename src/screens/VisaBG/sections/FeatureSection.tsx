import React from "react";
import { Card, CardContent } from "../../../components/ui/card";

export const FeatureSection = (): JSX.Element => {
  // Feature data for mapping
  const features = [
    {
      icon: "🛡",
      title: "безопасность & Стабильность",
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
    <Card className="flex flex-col items-center gap-8 px-4 py-12 relative self-stretch w-full bg-[#50913bb8] rounded backdrop-blur-[22px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(22px)_brightness(100%)] border-none">
      <CardContent className="flex flex-col items-center gap-8 p-0 w-full">
        <h1 className="text-white font-font-h-1 text-font-h-1 md:text-[56px] md:leading-[66px]">
          Преимущества Болагарии 🇧🇬
        </h1>

        <div className="flex flex-col items-start gap-6 w-full">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-0.5 w-full"
            >
              <h2 className="self-stretch mt-[-1.00px] text-white font-font-h-2 text-font-h-2 md:text-[32px] md:leading-[40px]">
                <span className="mr-2">{feature.icon}</span>
                {feature.title}
              </h2>
              <p className="self-stretch text-white font-font-body text-font-body md:text-[20px] md:leading-[28px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
