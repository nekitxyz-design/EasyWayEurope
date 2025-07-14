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
      <div className="relative w-2.5 h-[31px] bg-white/20 rounded"></div>

      <h1 className="self-stretch text-[#f3fcf0] relative font-h-1">
        Процесс получения ВНЖ
      </h1>

      <div className="flex flex-col items-start gap-0.5 relative self-stretch w-full">
        <p className="relative self-stretch mt-[-1.00px] font-body text-white">
          <span>
            5 простых шагов,{" "}
          </span>
          <span className="tracking-[-0.03px]">чтобы стать резедентов </span>
          <span className="font-body">
            Евросоюза
          </span>
        </p>
      </div>

      {processSteps.map((step, index) => (
        <Card
          key={index}
          className="flex flex-col items-start gap-2 relative self-stretch w-full border-none bg-transparent"
        >
          <CardContent className="p-0">
            <h2
              className={`relative self-stretch mt-[-1.00px] font-h-2 ${step.highlighted ? "text-[#ffd23f]" : "text-[#f3fcf0]"}`}
            >
              {step.title}
            </h2>
            <p className="relative self-stretch font-body text-white">
              {step.description}
            </p>
          </CardContent>
        </Card>
      ))}

      <Button className="w-full bg-[#ffd23f] text-black hover:bg-[#ffd23f]/90 font-bold text-lg tracking-[-0.18px] py-[18px] h-auto rounded-none">
        Записаться на консультацию
      </Button>
    </section>
  );
};
