import React from "react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";

export const MainContentSection = (): JSX.Element => {
  // Data for the process steps
  const processSteps = [
    {
      title: "Консультация и стратегия",
      description:
        "Анализируем вашу ситуацию и подбираем оптимальный путь для получения ВНЖ.",
      highlighted: false,
    },
    {
      title: "Подготовка документов",
      description:
        "Помогаем собрать и безупречно оформить все документы, минимизируя риск отказа.",
      highlighted: false,
    },
    {
      title: "Регистрация бизнеса",
      description:
        "Регистрируем представительство вашей компании или интегрируем вас в существующую структуру.",
      highlighted: false,
    },
    {
      title: "Подача на визу D и ВНЖ",
      description:
        "Полностью сопровождаем вас при подаче документов в консульство и миграционную службу.",
      highlighted: false,
    },
    {
      title: "Получение карты резидента",
      description:
        "Вы получаете вашу личную карту ВНЖ. Поздравляем с новым статусом в Европе!",
      highlighted: true,
    },
  ];

  return (
    <section className="gap-6 px-6 py-12 bg-[#000000b2] flex flex-col items-start relative w-full backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)]">
      {/* Arrow SVG */}
      <img src="/arrow_lp.svg" alt="Arrow" className="w-6 h-8 mb-2" />

      <h1 className="self-stretch font-font-h-1 text-font-h-1 text-[#f3fcf0]">
        Процесс получения ВНЖ
      </h1>

      <div className="flex flex-col items-start gap-0.5 relative self-stretch w-full">
        <p className="relative self-stretch mt-[-1.00px] font-font-body text-font-body text-white md:text-[20px] md:leading-[28px]">
          <span className="font-bold">5 простых шагов</span>, чтобы стать резедентов Евросоюза
        </p>
      </div>

      {processSteps.map((step, index) => (
        <Card
          key={index}
          className="flex flex-col items-start gap-2 relative self-stretch w-full border-none bg-transparent"
        >
          <CardContent className="p-0">
            <h2
              className={`relative self-stretch mt-[-1.00px] font-font-h-2 text-font-h-2 ${step.highlighted ? "text-[#ffd23f]" : "text-[#f3fcf0]"} md:text-[32px] md:leading-[40px]`}
            >
              {`${index + 1}. ${step.title}`}
            </h2>
            <ul className="list-disc pl-6 mt-1">
              <li className="relative self-stretch font-font-body text-font-body text-white md:text-[20px] md:leading-[28px]">
                {step.description}
              </li>
            </ul>
          </CardContent>
        </Card>
      ))}

      <Button variant="accent" size="full" className="text-black font-bold">
        Записаться на консультацию
      </Button>
    </section>
  );
};
