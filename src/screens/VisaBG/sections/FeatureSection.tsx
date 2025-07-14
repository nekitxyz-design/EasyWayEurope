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
      icon: "☀",
      title: "Отличный климат",
      description: "Европейская зима и теплое лето без дождей.",
    },
    {
      icon: "🇪",
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
        <h1 className="text-white font-h-1 font-[number:var(--h-1-font-weight)] text-[length:var(--h-1-font-size)] tracking-[var(--h-1-letter-spacing)] leading-[var(--h-1-line-height)] [font-style:var(--h-1-font-style)]">
          Преимущества Болагарии 🇧
        </h1>

        <div className="flex flex-col items-start gap-6 w-full">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-0.5 w-full"
            >
              <h2 className="self-stretch mt-[-1.00px] font-h2 font-[number:var(--h2-font-weight)] text-white text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
                {feature.icon}
                {feature.title}
              </h2>
              <p className="self-stretch font-body font-[number:var(--body-font-weight)] text-white text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
