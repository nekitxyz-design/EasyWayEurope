import React from "react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent, CardHeader } from "../../../components/ui/card";

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
    buttonTextColor: string;
    headerBgColor: string;
    headerTextColor: string;
    features: PlanFeature[];
  }

export const IntroductionSection = ({ setSelectedTariff }: { setSelectedTariff: (value: string) => void }) => {
  // Basic plan features
  const basicPlanFeatures: PlanFeature[] = [
    { text: "♟️ Первичная консультация и стратегия", included: true },
    { text: "🏢 Регистрация  торг. представительства вашей компании", included: true },
    { text: "📍 Предоставление юридического адреса", included: true },
    { text: "📑 Подготовка пакета документов", included: true },
    { text: " 🤝 Сопровождение до получения ВНЖ", included: true },
    { text: "📍 Предоставление  адреса регистрации физ. лица", included: false },
    { text: "🏦 Помощь в открытии банковского счета", included: false },
    { text: "🛡️ Помощь в оформлении страховки", included: false },
  ];

  // Standard plan features
  const standardPlanFeatures: PlanFeature[] = [
    { text: "♟️ Первичная консультация и стратегия", included: true },
    { text: "🏢 Включение в существующее торг. представительство", included: true },
    { text: "📍 Предоставление юридического адреса", included: true },
    { text: "📑 Подготовка пакета документов", included: true },
    { text: " 🤝 Сопровождение до получения ВНЖ", included: true },
    { text: "📍 Предоставление  адреса регистрации физ. лица", included: true },
    { text: "🏦 Помощь в открытии банковского счета", included: true },
    { text: "🛡️ Помощь в оформлении страховки", included: true },
  ];

  // Individual plan benefits
  const individualPlanBenefits: string[] = [
    "👨 Релокация всей семьи",
    "📈 Решения для инвесторов",
    "💡 Помощь в сложных случаях",
    "🌍 Подача не из страны гражданства",
    "👵 ВНЖ для пенсионеров",
    "🇺🇦 Решения для граждан Украины с временной защитой",
    "✨ Любые другие уникальные запросы",
  ];

  // Plans data (включая Индивидуальный)
  const plans: Plan[] = [
    {
      title: "Базовый",
      description: "Для тех, у кого есть своя иностранная компания.",
      price: "— 1500 €",
      buttonText: "Выбрать",
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
      buttonTextColor: "text-black",
      headerBgColor: "bg-[#0023e9]",
      headerTextColor: "text-white",
      features: standardPlanFeatures,
    },
    {
      title: "Индивидуальный",
      description: "Для нестандартных ситуаций и особых запросов.",
      price: "По запросу",
      buttonText: "Связаться с нами",
      buttonTextColor: "text-[#f3fcf0]",
      headerBgColor: "bg-[#f0efef]",
      headerTextColor: "text-black",
      features: [], // Особые фичи ниже
    },
  ];

  // useRef для контейнера с карточками (оставляем только для возможного использования)
  const cardsScrollRef = React.useRef<HTMLDivElement>(null);

  return (
    <section id="plans" className="flex flex-col items-start gap-[22px] bg-[#ff22224c] w-full backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)] md:pt-10 md:pb-10">
      {/* Блок заголовка */}
      <div className="w-full md:max-w-[1600px] md:mx-auto md:px-16">
        <div className="px-4 pt-16">
          <h1 className="font-font-h-1 text-font-h-1 text-[#f3fcf0]">
            Тарифы
          </h1>
        </div>
      </div>

      {/* Удалена стрелка. Добавлен обработчик wheel/touchmove для горизонтального скролла карточек на мобилке */}
      
      {/* Карточки */}
      <div ref={cardsScrollRef} className="w-full overflow-x-auto hide-scrollbar md:max-w-[1600px] md:mx-auto md:px-16" style={{ WebkitOverflowScrolling: 'touch' }}>
        <div
          className="flex md:grid md:grid-cols-3 items-start gap-[22px] md:gap-6 xl:gap-12 pb-12 p-4 snap-x snap-mandatory justify-between"
          style={{ minWidth: `calc(${plans.length} * 323px + ${(plans.length - 1)} * 22px + 16px)` }}
        >
          {plans.map((plan, index) => {
            const isStandard = plan.title === 'Стандарт';
            const isIndividual = plan.title === 'Индивидуальный';
            const cardWidth = 'w-[323px] md:w-full md:min-w-[323px] md:max-w-[420px]';
            const highlight = isStandard ? 'md:shadow-2xl md:border-2 md:border-[#0023e9]' : '';
            return (
              <Card
                key={index}
                className={`${cardWidth} bg-[#ffffffe0] rounded-[10px] overflow-hidden flex-shrink-0 border-none ${highlight}`}
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
                    className={`self-stretch font-font-body text-font-body text-[18px] md:text-[18px] leading-normal md:leading-normal ${plan.headerTextColor}`}
                  >
                    {plan.description}
                  </p>
                  <p
                    className={`self-stretch font-font-h-2 text-font-h-2 ${plan.headerTextColor}`}
                  >
                    {plan.price}
                  </p>
                  <Button
                    variant={plan.title === 'Индивидуальный' ? 'primary' : 'white'}
                    size="full"
                    className={plan.title === 'Индивидуальный' ? 'text-[#f3fcf0]' : plan.buttonTextColor}
                    onClick={() => {
                      let value = '';
                      if (plan.title === 'Базовый') value = 'visa';
                      else if (plan.title === 'Стандарт') value = 'citizenship';
                      else if (plan.title === 'Индивидуальный') value = 'consultation';
                      setSelectedTariff(value);
                      setTimeout(() => {
                        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                  >
                    {plan.title === 'Индивидуальный' ? 'Связаться с нами' : 'Выбрать'}
                  </Button>
                </CardHeader>
                <CardContent className={`flex flex-col items-start gap-3 ${plan.title === 'Индивидуальный' ? 'p-4' : 'px-4 py-6'}`}>
                  {plan.features && plan.features.length > 0 && plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3 w-full">
                      <p className="w-full font-font-body text-font-body text-[18px] md:text-[18px] leading-normal md:leading-normal text-black">
                        {feature.text}
                      </p>
                      <span className="font-font-h-2 text-font-h-2 text-white whitespace-nowrap">
                        {feature.included ? '✅' : '❌'}
                      </span>
                    </div>
                  ))}
                  {plan.title === 'Индивидуальный' && (
                    <>
                      <p className="w-56 font-font-body text-font-body text-[18px] md:text-[18px] leading-normal md:leading-normal text-black">
                        Мы можем предложить:
                      </p>
                      {individualPlanBenefits.map((benefit, index) => (
                        <p
                          key={index}
                          className="w-[285px] font-font-body text-font-body text-[18px] md:text-[18px] leading-normal md:leading-normal text-black"
                        >
                          {benefit}
                        </p>
                      ))}
                    </>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
