import React from "react";
import { Button } from "../../../components/ui/button";
import { Card } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";

export const ServicesSection = (): JSX.Element => {
  // Contact method options data
  const contactOptions = [
    {
      icon: "/group-2.svg",
      text: "Написать в Telegram",
    },
    {
      icon: "/vector.svg",
      text: "Написать в WhatsApp",
    },
  ];

  return (
    <section className="gap-6 px-6 py-12 bg-[#0023e9] flex flex-col items-start relative w-full backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)]">
      <img 
        src="/logo.svg" 
        alt="EasyWay Logo" 
        className="w-[153px] h-[43px]"
      />

      <h1 className="self-stretch font-h-1 text-[#f3fcf0]">
        Записаться на Консультацию
      </h1>

      <h2 className="self-stretch font-h2 text-[#f3fcf0]">
        Начните свой&nbsp;&nbsp;по получению ВНЖ в Болагрии
      </h2>

      <Input
        className="w-full p-4 rounded border-2 border-solid border-white bg-transparent text-white font-body placeholder:text-white"
        placeholder="Ваше Имя"
      />

      <div className="flex flex-col items-start gap-2 w-full">
        <Input
          className="w-full p-4 rounded border-2 border-solid border-white bg-transparent text-white font-body placeholder:text-white"
          placeholder="Удобный способ связи"
        />

        <p className="self-stretch font-body-s text-[#f3fcf0]">
          Введите любой удобный способ связи, от e-mail до телеграма, просто
          укажите детали.
        </p>
      </div>

      <Select>
        <SelectTrigger className="w-full flex items-center justify-between p-4 rounded border-2 border-solid border-white bg-transparent text-white font-body">
          <SelectValue placeholder="Что вас интересует?" />
        </SelectTrigger>
      </Select>

      <Button className="w-full bg-[#ffd23f] hover:bg-[#ffd23f]/90 text-black font-medium text-lg tracking-[-0.18px] py-[18px] px-[42px] rounded-none [font-family:'Space_Grotesk',Helvetica]">
        Записаться на консультацию
      </Button>

      <div className="self-stretch [font-family:'Space_Grotesk',Helvetica] font-medium text-white text-lg text-center tracking-[-0.18px]">
        — или просто&nbsp;&nbsp;—
      </div>

      <div className="flex flex-col items-start gap-4 w-full">
        {contactOptions.map((option, index) => (
          <Card
            key={index}
            className="flex items-center justify-center gap-4 px-3 py-2 w-full bg-[#0000004f] rounded overflow-hidden backdrop-blur-[32px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(32px)_brightness(100%)] border-none cursor-pointer"
          >
            <img 
              src={index === 0 ? "/telegram-icon.svg" : "/whatsapp-icon.svg"} 
              alt={option.text} 
              className="w-8 h-8"
            />
            <div className="w-[228px] [font-family:'Roboto',Helvetica] font-medium text-[#f3fcf0] text-[22px] tracking-[-0.22px]">
              {option.text}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
