import React from "react";
import { Card, CardContent } from "../../../components/ui/card";

export const FooterSection = () => {
  // Data for guarantee items
  const guaranteeItems = [
    {
      icon: "📄",
      title: "Работа по договору",
      description: "Договор с болгарским юридическим лицом для вашей защиты",
    },
    {
      icon: "💳",
      title: "Оплата поэтапно",
      description: "Платите часть по завершению каждого этапа",
    },
    {
      icon: "🔒",
      title: "Гарантия легальности",
      description:
        "Все процедуры на 100% соответствуют миграционному законодательству Болгарии и ЕС.",
    },
    {
      icon: "🤝",
      title: "Сопровождение до результата",
      description:
        "Мы с вами на каждом шагу — от первого звонка до получения карты ВНЖ.",
    },
  ];

  return (
    <section id="guarantees" className="bg-[#ffffff4c] w-full backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)] md:pt-10 md:pb-10">
      <div className="max-w-[1600px] mx-auto w-full md:px-16 gap-6 flex flex-col items-start px-6 py-12">
        <h1 className="relative w-full mt-[-1.00px] font-font-h-1 text-font-h-1 text-[#f3fcf0]">
          Гарантии
        </h1>
        <h2 className="relative w-full font-font-h-2 text-font-h-2 text-[#f3fcf0]">
          Мы ценим Ваше доверие
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
