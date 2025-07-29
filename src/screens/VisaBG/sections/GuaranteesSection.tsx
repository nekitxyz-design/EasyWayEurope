import React from "react";
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "../../../components/ui/card";

export const GuaranteesSection = () => {
  const { t } = useTranslation();
  
  // Data for guarantee items
  const guaranteeItems = [
    {
      icon: "📄",
      title: t('guarantees.items.contract.title'),
      description: t('guarantees.items.contract.description'),
    },
    {
      icon: "💳",
      title: t('guarantees.items.payment.title'),
      description: t('guarantees.items.payment.description'),
    },
    {
      icon: "🔒",
      title: t('guarantees.items.legal.title'),
      description: t('guarantees.items.legal.description'),
    },
    {
      icon: "🤝",
      title: t('guarantees.items.support.title'),
      description: t('guarantees.items.support.description'),
    },
  ];

  return (
    <section id="guarantees" className="bg-[#4646464c] w-full backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)] md:pt-10 md:pb-10 relative z-10">
      <div className="max-w-[1600px] mx-auto w-full md:px-16 gap-6 flex flex-col items-start px-6 py-12">
        <h1 className="relative w-full mt-[-1.00px] font-font-h-1 text-font-h-1 text-[#f3fcf0]">
          {t('guarantees.title')}
        </h1>
        <h2 className="relative w-full font-font-h-2 text-font-h-2 text-[#f3fcf0]">
          {t('guarantees.subtitle')}
        </h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {guaranteeItems.map((item, index) => (
            <Card
              key={index}
              className="w-full bg-transparent border-none shadow-none"
            >
              <CardContent className="flex flex-col items-start gap-0.5 p-0">
                <h3 className="relative w-full mt-[-1.00px] font-font-h-2 text-font-h-2 text-[#f3fcf0]">
                  <span className="mr-1">{item.icon}</span> {item.title}
                </h3>
                <p className="relative w-full font-font-body text-font-body text-white">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
