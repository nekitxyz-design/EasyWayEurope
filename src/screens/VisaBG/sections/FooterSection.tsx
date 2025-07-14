import React from "react";
import { Card, CardContent } from "../../../components/ui/card";

export const FooterSection = (): JSX.Element => {
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
    <section className="gap-6 px-6 py-12 bg-[#ffffff4c] flex flex-col items-start relative w-full backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)]">
      <h1 className="relative w-full mt-[-1.00px] font-h-1 font-[number:var(--h-1-font-weight)] text-[#f3fcf0] text-[length:var(--h-1-font-size)] tracking-[var(--h-1-letter-spacing)] leading-[var(--h-1-line-height)] [font-style:var(--h-1-font-style)]">
        Гарантии
      </h1>

      <h2 className="relative w-full font-h2 font-[number:var(--h2-font-weight)] text-[#f3fcf0] text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
        Мы ценим Ваше доверие
      </h2>

      {guaranteeItems.map((item, index) => (
        <Card
          key={index}
          className="w-full bg-transparent border-none shadow-none"
        >
          <CardContent className="flex flex-col items-start gap-0.5 p-0">
            <h3 className="relative w-full mt-[-1.00px] font-h2 font-[number:var(--h2-font-weight)] text-[#f3fcf0] text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
              {item.icon} {item.title}
            </h3>
            <p className="relative w-full font-body font-[number:var(--body-font-weight)] text-white text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
              {item.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
