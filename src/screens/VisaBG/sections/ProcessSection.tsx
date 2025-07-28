import React from "react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";

export const ProcessSection = () => {
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
        "Сопровождаем при подаче документов в консульство и миграционную службу.",
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
    <section id="process" className="bg-[#000000b2] w-full backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)] md:pt-10 md:pb-10">
      <div className="max-w-[1600px] mx-auto w-full md:px-16 gap-6 flex flex-col items-start px-6 py-12">
        {/* Arrow SVG */}
        <img src={`${import.meta.env.BASE_URL}arrow_lp.svg`} alt="Arrow" className="w-6 h-8 mb-2" />
        <h1 className="self-stretch font-font-h-1 text-font-h-1 text-[#f3fcf0]">
          Процесс получения ВНЖ
        </h1>
        <div className="flex flex-col items-start gap-0.5 relative self-stretch w-full">
          <p className="relative self-stretch mt-[-1.00px] font-font-body text-font-body text-white">
            <span className="font-bold">5 простых шагов</span>, чтобы стать резедентов Евросоюза
          </p>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Первый столбец: первые 3 шага */}
          <div className="flex flex-col gap-8">
            {processSteps.slice(0, Math.ceil(processSteps.length / 2)).map((step, index) => (
              <Card
                key={index}
                className="flex flex-col items-start gap-2 w-full max-w-[500px] border-none bg-transparent"
              >
                <CardContent className="p-0">
                  <h2
                    className={`relative self-stretch mt-[-1.00px] font-font-h-2 text-font-h-2 ${step.highlighted ? "text-[#ffd23f]" : "text-[#f3fcf0]"}`}
                  >
                    {`${index + 1}. ${step.title}`}
                  </h2>
                  <ul className="list-disc pl-6 mt-1">
                    <li className="relative self-stretch font-font-body text-font-body text-white">
                      {step.description}
                    </li>
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* Второй столбец: оставшиеся шаги */}
          <div className="flex flex-col gap-8">
            {processSteps.slice(Math.ceil(processSteps.length / 2)).map((step, index) => (
              <Card
                key={index + Math.ceil(processSteps.length / 2)}
                className="flex flex-col items-start gap-2 w-full max-w-[500px] border-none bg-transparent"
              >
                <CardContent className="p-0">
                  <h2
                    className={`relative self-stretch mt-[-1.00px] font-font-h-2 text-font-h-2 ${step.highlighted ? "text-[#ffd23f]" : "text-[#f3fcf0]"}`}
                  >
                    {`${index + 1 + Math.ceil(processSteps.length / 2)}. ${step.title}`}
                  </h2>
                  <ul className="list-disc pl-6 mt-1">
                    <li className="relative self-stretch font-font-body text-font-body text-white">
                      {step.description}
                    </li>
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <Button 
          variant="accent" 
          size="full" 
          className="text-black font-bold md:w-[420px]"
          onClick={() => {
            const el = document.getElementById('services');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Записаться на консультацию
        </Button>
      </div>
    </section>
  );
};
