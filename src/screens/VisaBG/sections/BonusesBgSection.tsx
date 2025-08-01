import React from "react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";

export const BonusesBgSection = () => {
  // Data for the "This is for you if you are" section
  const targetAudienceItems = [
    "IT-специалисты и цифровые кочевники",
    "Предприниматели и бизнесмены",
    "Фрилансеры и самозанятые",
    "Удалённые сотрудники, ищущие стабильную базу в Европе",
    "Семьи, стремящиеся к высокому качеству жизни и возможностям в ЕС",
  ];

  // Data for the "Benefits" section
  const benefitsItems = [
    "Легальное проживание и работа",
    "Доступ к европейским банкам",
    "Свободное передвижение по странам Шенгена",
    "Возможность перевезти семью",
    "Путь к ПМЖ и гражданству ЕС",
  ];

  return (
    <section id="what-vnz" className="w-full bg-[#ffffffb2] md:pt-10 md:pb-10">
      <div className="max-w-[1600px] mx-auto w-full md:px-16">
        <Card className="gap-6 px-6 py-12 flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)] rounded-none border-none bg-transparent">
          <CardContent className="flex flex-col items-start gap-6 p-0 w-full">
            <h1 className="self-stretch mt-[-1.00px] font-font-h-1 text-font-h-1 text-black md:text-[56px] md:leading-[66px]">
              Что дает ВНЖ Болгарии?
            </h1>

            <div className="flex flex-col items-start gap-0.5 relative self-stretch w-full">
              <p className="relative self-stretch mt-[-1.00px] font-font-body text-font-body text-black md:text-[20px] md:leading-[28px]">
                Вид на жительство в Болгарии — это ваш официальный статус резидента
                Европейского Союза.
              </p>
            </div>

{/* Две колонки на десктопе, одна на мобилке */}
<div className="w-full grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12">
  {/* Левая колонка (остаётся как есть) */}
  <div className="bg-[#5353531A] p-4 md:px-6 md:py-8 rounded flex flex-col gap-2">
    <h2 className="relative self-stretch mt-[-1.00px] font-font-h-2 text-font-h-2 text-black">
      Это для вас, если вы:
    </h2>
    <ul className="relative self-stretch font-font-body text-font-body text-black list-disc pl-6">
      {targetAudienceItems.map((item, index) => {
        const parts = item.split(/(IT-специалисты|Предприниматели|бизнесмены|Фрилансеры|самозанятые|Удалённые сотрудники|высокому качеству жизни и возможностям в ЕС)/);
        return (
          <li key={index}>
            {parts.map((part, i) => (
              part.match(/(IT-специалисты|Предприниматели|бизнесмены|Фрилансеры|самозанятые|Удалённые сотрудники|высокому качеству жизни и возможностям в ЕС)/) ? <span key={i} className="font-bold">{part}</span> : part
            ))}
          </li>
        );
      })}
    </ul>
  </div>
  {/* Правая колонка (теперь гибкая, без фиксированной ширины) */}
  <div className="bg-[#5353531A] p-4 md:px-6 md:py-8 rounded flex flex-col gap-2">
    <h2 className="relative self-stretch mt-[-1.00px] font-font-h-2 text-font-h-2 text-black">
      Преимущества
    </h2>
    <ul className="relative self-stretch font-font-body text-font-body text-black list-disc pl-6">
      {benefitsItems.map((item, index) => {
        const parts = item.split(/ (Легальное|европейским банкам|Шенгена|перевезти семью|ПМЖ и гражданству ЕС)/);
        return (
          <li key={index}>
            {parts.map((part, i) => (
              part.match(/Легальное|европейским банкам|Шенгена|перевезти семью|ПМЖ и гражданству ЕС/) ? <span key={i} className="font-bold">{part}</span> : part
            ))}
          </li>
        );
      })}
    </ul>
  </div>
</div>


            <Button 
              variant="primary" 
              size="full" 
              className="text-white md:w-[420px]"
              onClick={() => {
                const el = document.getElementById('plans');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Узнать цену
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
