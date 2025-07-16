import React from "react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent, CardHeader } from "../../../components/ui/card";
import { ScrollArea, ScrollBar } from "../../../components/ui/scroll-area";

// Define plan features data structure
interface PlanFeature {
  text: string;
  included: boolean;
}

// Define plan data structure
interface Plan {
  title: string;
  description: string;
  price: string;
  buttonText: string;
  buttonVariant:
    | "default"
    | "primary"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "destructive";
  buttonTextColor: string;
  headerBgColor: string;
  headerTextColor: string;
  features: PlanFeature[];
}

export const IntroductionSection = (): JSX.Element => {
  // Basic plan features
  const basicPlanFeatures: PlanFeature[] = [
    { text: "♟ Первичная консультация и стратегия", included: true },
    { text: "📑 Подготовка пакета документов", included: true },
    { text: "🤝 Сопровождение до получения ВНЖ", included: true },
    { text: "📍 Предоставление юридического адреса", included: false },
    { text: "🏦 Помощь в открытии банковского счета", included: false },
    { text: "🛡 Помощь в оформлении страховки", included: false },
    { text: "🏢 Регистрация вашего торг. представительства", included: true },
  ];

  // Standard plan features
  const standardPlanFeatures: PlanFeature[] = [
    { text: "♟ Первичная консультация и стратегия", included: true },
    { text: "📑 Подготовка пакета документов", included: true },
    { text: "🤝 Сопровождение до получения ВНЖ", included: true },
    { text: "📍 Предоставление юридического адреса", included: true },
    { text: "🏦 Помощь в открытии банковского счета", included: true },
    { text: "🛡 Помощь в оформлении страховки", included: true },
    { text: "👥 Включение в наше торг. представительство", included: true },
  ];

  // Individual plan benefits
  const individualPlanBenefits: string[] = [
    "👨 Релокация всей семьи",
    "📈 Решения для инвесторов",
    "💡 Помощь в сложных случаях",
    "✨ Любые другие уникальные запросы",
  ];

  // Plans data
  const plans: Plan[] = [
    {
      title: "Базовый",
      description: "Для тех, у кого есть своя иностранная компания.",
      price: "— 1500 €",
      buttonText: "Выбрать",
      buttonVariant: "default",
      buttonTextColor: "text-black",
      headerBgColor: "bg-[#f0efef]",
      headerTextColor: "text-black",
      features: basicPlanFeatures,
    },
    {
      title: "Стандарт",
      description: "Комплексное решение «под ключ» для максимального удобства.",
      price: "— 4500 €",
      buttonText: "Выбрать",
      buttonVariant: "default",
      buttonTextColor: "text-black",
      headerBgColor: "bg-[#0023e9]",
      headerTextColor: "text-white",
      features: standardPlanFeatures,
    },
  ];

  return (
    <section className="flex flex-col items-start gap-[22px] px-4 py-12 bg-[#ff22224c] w-full backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)]">
      <h1 className="font-font-h-1 text-font-h-1 text-[#f3fcf0]">
        Тарифы
      </h1>

      <div className="flex items-start gap-[22px] w-full bg-white rounded">
        <div className="w-[106px] h-[5px] bg-[#0023e9] rounded-[4px_0px_0px_4px]" />
      </div>

      <ScrollArea className="w-full">
        <div className="flex items-start gap-[22px] pb-4">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className="w-[323px] bg-[#ffffffe0] rounded-[10px] overflow-hidden flex-shrink-0"
            >
              <CardHeader
                className={`flex flex-col items-start justify-center gap-[19px] px-[15px] py-6 ${plan.headerBgColor}`}
              >
                <h2
                  className={`self-stretch font-font-h-2 text-font-h-2 ${plan.headerTextColor}`}
                >
                  {plan.title}
                </h2>
                <p
                  className={`self-stretch font-font-body text-font-body ${plan.headerTextColor}`}
                >
                  {plan.description}
                </p>
                <p
                  className={`self-stretch font-font-h-2 text-font-h-2 ${plan.headerTextColor}`}
                >
                  {plan.price}
                </p>
                <Button
                  variant="accent"
                  size="full"
                  className={`${plan.buttonTextColor}`}
                >
                  {plan.buttonText}
                </Button>
              </CardHeader>
              <CardContent className="flex flex-col items-start gap-3 px-4 py-6">
                {plan.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-start gap-3 w-full"
                  >
                    <p className="w-56 font-font-body text-font-body text-black">
                      {feature.text}
                    </p>
                    <span className="font-font-h-2 text-font-h-2 text-white whitespace-nowrap">
                      {feature.included ? "✅" : "❌"}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}

          <div className="flex flex-col items-start justify-center gap-4 flex-shrink-0">
            <Card className="w-[323px] bg-[#ffffffe0] rounded-[10px] overflow-hidden">
              <CardHeader className="flex flex-col items-start justify-center gap-[19px] px-[15px] py-6 bg-[#f0efef]">
                <h2 className="self-stretch font-font-h-2 text-font-h-2 text-black">
                  Индивидуальный
                </h2>
                <p className="self-stretch font-font-body text-font-body text-black">
                  Для нестандартных ситуаций и особых запросов.
                </p>
                <p className="self-stretch font-font-h-2 text-font-h-2 text-black">
                  По запросу
                </p>
                <Button variant="primary" size="full" className="text-[#f3fcf0]">
                  Связаться с нами
                </Button>
              </CardHeader>
              <CardContent className="flex flex-col items-start gap-3 p-4">
                <p className="w-56 font-font-body text-font-body text-black">
                  Мы можем предложить:
                </p>
                {individualPlanBenefits.map((benefit, index) => (
                  <p
                    key={index}
                    className="w-[285px] font-font-body text-font-body text-black"
                  >
                    {benefit}
                  </p>
                ))}
              </CardContent>
            </Card>

            {/* Удаляю блок с подачей документов из другой страны */}
          </div>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
};
