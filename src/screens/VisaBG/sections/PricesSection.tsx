import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../../../components/ui/button";
import { Card, CardContent, CardHeader } from "../../../components/ui/card";
import { useTariff } from "../../../lib/contexts/TariffContext";

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
    planType: 'basic' | 'basic_plus' | 'standard' | 'individual';
  }

export const PricesSection = () => {
  const { t } = useTranslation();
  const { setSelectedTariff } = useTariff();

  // Basic plan features
  const basicPlanFeatures: PlanFeature[] = [
    { text: t('prices.basic.features.consultation'), included: true },
    { text: t('prices.basic.features.registration'), included: true },
    { text: t('prices.basic.features.address'), included: true },
    { text: t('prices.basic.features.documents'), included: true },
    { text: t('prices.basic.features.support'), included: true },
    { text: t('prices.basic.features.personal_address'), included: false },
    { text: t('prices.basic.features.bank_account'), included: false },
    { text: t('prices.basic.features.insurance'), included: false },
  ];

  // Basic+ plan features (initially same as Basic)
  const basicPlusPlanFeatures: PlanFeature[] = [
    { text: t('prices.basic.features.consultation'), included: true },
    { text: t('prices.standard.features.registration'), included: true },
    { text: t('prices.basic.features.address'), included: true },
    { text: t('prices.basic.features.documents'), included: true },
    { text: t('prices.basic.features.support'), included: true },
    { text: t('prices.basic.features.personal_address'), included: false },
    { text: t('prices.basic.features.bank_account'), included: false },
    { text: t('prices.basic.features.insurance'), included: false },
  ];

  // Standard plan features
  const standardPlanFeatures: PlanFeature[] = [
    { text: t('prices.standard.features.consultation'), included: true },
    { text: t('prices.standard.features.registration'), included: true },
    { text: t('prices.standard.features.address'), included: true },
    { text: t('prices.standard.features.documents'), included: true },
    { text: t('prices.standard.features.support'), included: true },
    { text: t('prices.standard.features.personal_address'), included: true },
    { text: t('prices.standard.features.bank_account'), included: true },
    { text: t('prices.standard.features.insurance'), included: true },
  ];

  // Individual plan benefits
  const individualPlanBenefits: string[] = [
    t('prices.individual.benefits.family'),
    t('prices.individual.benefits.investors'),
    t('prices.individual.benefits.complex_cases'),
    t('prices.individual.benefits.foreign_submission'),
    t('prices.individual.benefits.pensioners'),
    t('prices.individual.benefits.ukrainians'),
    t('prices.individual.benefits.unique_requests'),
  ];

  // Plans data (включая Индивидуальный)
  const plans: Plan[] = [
    {
      title: t('prices.basic.title'),
      description: t('prices.basic.description'),
      price: t('prices.basic.price'),
      buttonText: t('prices.basic.button'),
      buttonTextColor: "text-black",
      headerBgColor: "bg-[#f0efef]",
      headerTextColor: "text-black",
      features: basicPlanFeatures,
      planType: 'basic', // Добавляем тип плана для идентификации
    },
    {
      title: t('prices.basic_plus.title'),
      description: t('prices.basic_plus.description'),
      price: t('prices.basic_plus.price'),
      buttonText: t('prices.basic_plus.button'),
      buttonTextColor: "text-black",
      headerBgColor: "bg-[#ABB8FF]",
      headerTextColor: "text-black",
      features: basicPlusPlanFeatures,
      planType: 'basic_plus',
    },
    {
      title: t('prices.standard.title'),
      description: t('prices.standard.description'),
      price: t('prices.standard.price'),
      buttonText: t('prices.standard.button'),
      buttonTextColor: "text-black",
      headerBgColor: "bg-[#0023e9]",
      headerTextColor: "text-white",
      features: standardPlanFeatures,
      planType: 'standard', // Добавляем тип плана для идентификации
    },
    {
      title: t('prices.individual.title'),
      description: t('prices.individual.description'),
      price: t('prices.individual.price'),
      buttonText: t('prices.individual.button'),
      buttonTextColor: "text-[#f3fcf0]",
      headerBgColor: "bg-[#f0efef]",
      headerTextColor: "text-black",
      features: [], // Особые фичи ниже
      planType: 'individual', // Добавляем тип плана для идентификации
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
            {t('prices.title')}
          </h1>
        </div>
      </div>

      {/* Удалена стрелка. Добавлен обработчик wheel/touchmove для горизонтального скролла карточек на мобилке */}
      
      {/* Карточки */}
      <div ref={cardsScrollRef} className="w-full overflow-x-auto hide-scrollbar md:max-w-[1600px] md:mx-auto md:px-16" style={{ WebkitOverflowScrolling: 'touch' }}>
        <div
          className="flex md:grid md:grid-cols-4 items-start gap-[22px] md:gap-6 xl:gap-12 pb-12 p-4 snap-x snap-mandatory justify-between"
          style={{ minWidth: `calc(${plans.length} * 323px + ${(plans.length - 1)} * 22px + 16px)` }}
        >
          {plans.map((plan, index) => {
            const isStandard = plan.planType === 'standard';
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
                    variant={(plan.planType === 'individual' || plan.planType === 'basic_plus') ? 'primary' : 'white'}
                    size="full"
                    className={(plan.planType === 'individual' || plan.planType === 'basic_plus') ? 'text-[#f3fcf0]' : plan.buttonTextColor}
                    onClick={() => {
                      let value = '';
                      if (plan.planType === 'basic') value = 'visa';
                      else if (plan.planType === 'basic_plus') value = 'basic_plus';
                      else if (plan.planType === 'standard') value = 'citizenship';
                      else if (plan.planType === 'individual') value = 'consultation';
                      setSelectedTariff(value);
                      setTimeout(() => {
                        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                  >
                    {plan.buttonText}
                  </Button>
                </CardHeader>
                <CardContent className={`flex flex-col items-start gap-3 ${plan.planType === 'individual' ? 'p-4' : 'px-4 py-6'}`}>
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
                  {plan.planType === 'individual' && (
                    <>
                      <p className="w-56 font-font-body text-font-body text-[18px] md:text-[18px] leading-normal md:leading-normal text-black">
                        {t('prices.individual.we_can_offer')}:
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
