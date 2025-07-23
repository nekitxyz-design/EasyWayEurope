import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";
import { Button } from "../../../components/ui/button";

export const CallToActionSection = (): JSX.Element => {
  // FAQ data for mapping
  const faqItems = [
    {
      question:
        "1. Что такое торговое представительство и кому подходит этот способ получения ВНЖ?",
      answer:
        "Торговое представительство — это филиал иностранной компании, зарегистрированный в Болгарии. На его основании возможно получение временного ВНЖ для официальных представителей компании. Программа подходит владельцам или директорам иностранных компаний, индивидуальным предпринимателям и тем, кто хочет легально проживать в Болгарии с возможностью продления статуса.",
    },
    {
      question:
        "2. Сколько представителей можно зарегистрировать от одного торгового представительства?",
      answer: "Закон допускает регистрацию до двух официальных представителей с правом подачи на ВНЖ.",
    },
    {
      question:
        "3. Какие документы необходимы для регистрации представительства?",
        answer: `Вам понадобятся:
• учредительные документы иностранной компании
• подтверждение её деятельности
• паспортные данные заявителей
• доверенности, переводы и апостили
Мы предоставим точный список и поможем в подготовке.`,
    },
    {
      question: "4. Каков срок действия ВНЖ и можно ли перевезти семью?",
      answer: `ВНЖ выдается на 1 год с правом ежегодного продления. Через 5 лет можно подать на ПМЖ и гражданство. После получения ВНЖ возможно воссоединение семьи (супруг/супруга и несовершеннолетние дети).`
    },
    {
      question: "5. Какие расходы нужно учитывать при оформлении ВНЖ?",
      answer: `Основные затраты:
      • Регистрация представительства
      • Госпошлины
      • Переводы, нотариус, апостили
      • Юридический адрес и офис
      • Медицинская страховка
      • Услуги сопровождения
      • Подтверждение финансовой состоятельности (депозит на счёте)`,
    },
    {
      question: "6. Сколько времени занимает процесс оформления ВНЖ?",
      answer: `Ориентировочные сроки:
      • Подготовка документов: 2–4 недели
      • Регистрация представительства: до 1 месяца
      • Рассмотрение заявления на ВНЖ: 1–2 месяца
      Общий срок — от 2 до 3 месяцев.`,
    },
    {
      question: "7. Нужно ли лично приезжать в Болгарию для оформления ВНЖ?",
      answer: "Да, личное присутствие обязательно для подачи документов, оформления биометрических данных и получения карты ВНЖ. Мы сопровождаем клиентов на всех этапах.",
    },
    {
      question:
        "8. Помогаете ли вы с открытием банковского счёта, страховкой и жильём?",
      answer: "Да, мы предлагаем полное сопровождение: помощь в открытии счёта, подбор страховой, аренду жилья, переводчика и сопровождение по инстанциям.",
    },
  ];

  return (
    <section id="faq" className="flex flex-col items-start gap-6 px-6 py-12 bg-[#000000c4] relative w-full backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)]">
      <h1 className="self-stretch mt-[-1.00px] font-font-h-1 text-font-h-1 text-[#f3fcf0]">
        FAQ
      </h1>

      <h2 className="self-stretch font-font-h-2 text-font-h-2 text-[#f3fcf0]">
        Ваши вопросы, наши ответы
      </h2>

      <Accordion
        type="single"
        collapsible
        defaultValue="item-0"
        className="w-full"
      >
        {faqItems.map((item, index) => (
          <AccordionItem
            key={`item-${index}`}
            value={`item-${index}`}
            className="mb-3 rounded border-[3px] border-solid border-white overflow-hidden"
          >
            <AccordionTrigger className="p-4 font-font-body text-font-body text-[#f3fcf0]">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 pt-0 font-font-body text-font-body text-white whitespace-pre-line">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <Button variant="white" size="full" className="text-black">
        Задать Вопрос
      </Button>
    </section>
  );
};
