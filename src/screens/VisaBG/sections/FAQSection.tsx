import React from "react";
import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";
import { Button } from "../../../components/ui/button";
import * as Dialog from '@radix-ui/react-dialog';
import { ConsultationForm } from '../../../components/ConsultationForm';

export const FAQSection = (): JSX.Element => {
  const { t } = useTranslation();
  
  // FAQ data for mapping
  const faqItems = [
    {
      question: t('faq.questions.representation.question'),
      answer: t('faq.questions.representation.answer'),
    },
    {
      question: t('faq.questions.representatives.question'),
      answer: t('faq.questions.representatives.answer'),
    },
    {
      question: t('faq.questions.documents.question'),
      answer: t('faq.questions.documents.answer'),
    },
    {
      question: t('faq.questions.validity.question'),
      answer: t('faq.questions.validity.answer'),
    },
    {
      question: t('faq.questions.costs.question'),
      answer: t('faq.questions.costs.answer'),
    },
    {
      question: t('faq.questions.timeline.question'),
      answer: t('faq.questions.timeline.answer'),
    },
    {
      question: t('faq.questions.presence.question'),
      answer: t('faq.questions.presence.answer'),
    },
    {
      question: t('faq.questions.additional_services.question'),
      answer: t('faq.questions.additional_services.answer'),
    },
  ];

  return (
    <section id="faq" className="flex flex-col items-start gap-4 px-6 py-12 md:pt-16 md:pb-16 bg-[#000000c4] relative w-full backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)]">
      <div className="w-full md:max-w-[1600px] md:mx-auto md:px-16">
        <h1 className="self-stretch mt-[-1.00px] font-font-h-1 text-font-h-1 text-[#f3fcf0] mb-6">
          {t('faq.title')}
        </h1>

        <h2 className="self-stretch font-font-h-2 text-font-h-2 text-[#f3fcf0] mb-6">
          {t('faq.subtitle')}
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
              <AccordionTrigger className="p-4 font-font-body text-font-body text-[#f3fcf0] font-bold">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 pt-0 font-font-body text-font-body text-white whitespace-pre-line">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button variant="white" size="full" className="text-black w-full md:w-[500px] mt-1">
              {t('faq.ask_question')}
            </Button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/60 z-50" />
            <Dialog.Content className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 bg-[#222b4c] rounded-xl shadow-2xl p-6 w-full min-w-[320px] max-w-[800px] max-h-[90vh] overflow-y-auto flex flex-col">
              <ConsultationForm
                title={t('form.faq.title')}
                subtitle={t('form.faq.subtitle')}
                namePlaceholder={t('form.fields.name')}
                emailPlaceholder={t('form.fields.email')}
                selectPlaceholder=""
                buttonText={t('form.button')}
                textareaEnabled={true}
                textareaLabel={t('form.faq.question_label')}
                textareaPlaceholder={t('form.faq.question_placeholder')}
                textareaRequired={true}
              />
              <Dialog.Close asChild>
                <button className="absolute top-4 right-4 text-white text-2xl" aria-label="Закрыть">×</button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </section>
  );
};
