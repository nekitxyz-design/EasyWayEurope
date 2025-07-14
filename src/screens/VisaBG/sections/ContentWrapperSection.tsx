import React from "react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";

export const ContentWrapperSection = (): JSX.Element => {
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
    <Card className="gap-6 px-6 py-12 bg-[#ffffffb2] flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)] rounded-none border-none">
      <CardContent className="flex flex-col items-start gap-6 p-0 w-full">
        <h1 className="self-stretch mt-[-1.00px] text-black relative font-h-1 font-[number:var(--font-h-1-weight)] text-[length:var(--font-h-1-size)] tracking-[var(--font-h-1-letter-spacing)] leading-[var(--font-h-1-line-height)] [font-style:var(--font-h-1-style)]">
          Что дает ВНЖ Болгарии?
        </h1>

        <div className="flex flex-col items-start gap-0.5 relative self-stretch w-full">
          <p className="relative self-stretch mt-[-1.00px] font-body font-[number:var(--font-body-weight)] text-black text-[length:var(--font-body-size)] tracking-[var(--font-body-letter-spacing)] leading-[var(--font-body-line-height)] [font-style:var(--font-body-style)]">
            Вид на жительство в Болгарии — это ваш официальный статус резидента
            Европейского Союза.
          </p>
        </div>

        <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
          <h2 className="relative self-stretch mt-[-1.00px] font-h-2 font-[number:var(--font-h-2-weight)] text-black text-[length:var(--font-h-2-size)] tracking-[var(--font-h-2-letter-spacing)] leading-[var(--font-h-2-line-height)] [font-style:var(--font-h-2-style)]">
            Это для вас, если вы:
          </h2>

          <div className="relative self-stretch [font-family:'Manrope',Helvetica] font-normal text-black text-lg leading-[18px]">
            {targetAudienceItems.map((item, index) => (
              <React.Fragment key={`audience-${index}`}>
                {item}
                <br />
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
          <h2 className="relative self-stretch mt-[-1.00px] font-h-2 font-[number:var(--font-h-2-weight)] text-black text-[length:var(--font-h-2-size)] tracking-[var(--font-h-2-letter-spacing)] leading-[var(--font-h-2-line-height)] [font-style:var(--font-h-2-style)]">
            Преимущества
          </h2>

          <div className="relative self-stretch [font-family:'Manrope',Helvetica] font-normal text-black text-lg leading-[18px]">
            {benefitsItems.map((item, index) => (
              <React.Fragment key={`benefit-${index}`}>
                {item}
                <br />
              </React.Fragment>
            ))}
          </div>
        </div>

        <Button className="w-full h-auto px-[42px] py-[18px] bg-[#0023e9] rounded-none hover:bg-[#0023e9]/90 [font-family:'Space_Grotesk',Helvetica] font-bold text-white text-lg tracking-[-0.18px]">
          Получить ВНЖ сейчас
        </Button>
      </CardContent>
    </Card>
  );
};
