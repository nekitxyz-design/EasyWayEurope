import React from "react";
import { Avatar, AvatarFallback } from "../../../components/ui/avatar";
import { Badge } from "../../../components/ui/badge";
import { Card, CardContent } from "../../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../../components/ui/carousel";

export const TestimonialsSection = (): JSX.Element => {
  // Testimonial data for mapping
  const testimonials = [
    {
      quote: '"Ребята помогли переехать в болгарию, ебать тут кайф"',
      name: "Алина К.",
      movedDate: "Moved to Bulgaria in May 2025",
      avatarSize: "w-[42px] h-[41px]",
      avatarRadius: "rounded-[21px/20.5px]",
    },
    {
      quote: '"Ребята помогли переехать в болгарию, ебать тут кайф"',
      name: "Алина К.",
      movedDate: "Moved to Bulgaria in May 2025",
      avatarSize: "w-[42px] h-[41px]",
      avatarRadius: "rounded-[21px/20.5px]",
    },
    {
      quote: '"Ребята помогли переехать в болгарию, ебать тут кайф"',
      name: "Алина К.",
      movedDate: "Moved to Bulgaria in May 2025",
      avatarSize: "w-[38px] h-[37px]",
      avatarRadius: "rounded-[19px/18.5px]",
    },
  ];

  // Navigation dots data
  const dots = [
    { active: true, bg: "bg-[#0023e9]" },
    { active: false, bg: "bg-[#f3fcf0]" },
    { active: false, bg: "bg-[#f3fcf0]" },
    { active: false, bg: "bg-[#f3fcf0]" },
  ];

  return (
    <section className="gap-6 px-6 py-12 bg-[#ff6201b2] overflow-hidden flex flex-col items-start relative w-full flex-[0_0_auto] backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)]">
      <img 
        src="/dots_co.svg" 
        alt="Dots decoration" 
        className="w-6 h-6 mb-2"
      />

      <h1 className="self-stretch font-font-h-1 text-font-h-1 text-[#f3fcf0]">
        Наши Клиенты
      </h1>

      <h2 className="self-stretch font-font-h-2 text-font-h-2 text-[#f3fcf0]">
        Нам доверяют
      </h2>

      <Carousel className="w-full">
        <CarouselContent className="w-[868px] mr-[-522.00px]">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="flex-1 grow">
              <Card className="border-none bg-transparent">
                <CardContent className="p-0 flex flex-col items-start gap-2">
                  <p className="mt-[-1.00px] self-stretch font-font-body text-font-body text-white">
                    {testimonial.quote}
                  </p>

                  <div className="flex items-center gap-2 self-stretch w-full">
                    <Avatar
                      className={`${testimonial.avatarSize} ${testimonial.avatarRadius} bg-[#d9d9d9]`}
                    >
                      <AvatarFallback className="bg-[#d9d9d9]"></AvatarFallback>
                    </Avatar>

                    <span className="font-font-body text-font-body text-white text-lg leading-[18px]">
                      {testimonial.name}{" "}
                    </span>
                  </div>

                  <p className="self-stretch font-font-body-s text-font-body-s text-white">
                    {testimonial.movedDate}
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="inline-flex items-start gap-3">
        {dots.map((dot, index) => (
          <div key={index} className={`w-3 h-3 ${dot.bg} rounded-md`} />
        ))}
      </div>

      <Badge className="inline-flex flex-col items-start justify-center gap-1 px-3 py-2 bg-[#00000099] rounded">
        <div className="inline-flex items-center">
          {[...Array(5)].map((_, index) => (
            <img
              key={index}
              src="/star-icon.svg"
              alt="Star"
              className="w-[20.92px] h-[19.9px]"
            />
          ))}
        </div>

        <div className="w-fit [font-family:'Manrope',Helvetica] font-normal text-white text-lg leading-[18px]">
          <span className="tracking-[-0.03px]">Мы на </span>
          <span className="font-[number:var(--body-font-weight)] tracking-[var(--body-letter-spacing)] font-body [font-style:var(--body-font-style)] leading-[var(--body-line-height)] text-[length:var(--body-font-size)]">
            Trustpilot
          </span>
        </div>
      </Badge>
    </section>
  );
};
