import React from "react";
import { Card, CardContent } from "../../../components/ui/card";

export const NewsletterSection = (): JSX.Element => {
  // Pages section links
  const pages = [
    "Открытие счета в Болагрии",
    "Подбор машины в ЕС",
    "ВНЖ Черногории",
  ];

  // Social media links
  const socialLinks = [
    "Instagram",
    "Написать в Telegram",
    "Написать в WhatsApp",
  ];

  return (
    <footer className="bg-[#f3fcf0] py-12 px-6 flex flex-col gap-6 w-full backdrop-blur-[2px]">
      {/* Logo and copyright */}
      <img 
        src="/company-logo.svg" 
        alt="EasyWay Europe Logo" 
        className="w-[88px] h-[88px]"
      />

      <div className="font-body font-[number:var(--body-font-weight)] text-black text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
        EasyWayEyrope.com
        <br />© 2020-2025
      </div>

      {/* Pages section */}
      <Card className="w-full border-none bg-transparent">
        <CardContent className="p-0 flex flex-col gap-4">
          <h2 className="font-h2 font-[number:var(--h2-font-weight)] text-black text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
            Страницы
          </h2>
          <div className="flex flex-col gap-3">
            {pages.map((page, index) => (
              <a
                key={`page-${index}`}
                href="#"
                className="font-body font-[number:var(--body-font-weight)] text-black text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]"
              >
                {page}
              </a>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Social media section */}
      <Card className="w-full border-none bg-transparent">
        <CardContent className="p-0 flex flex-col gap-4">
          <h2 className="font-h2 font-[number:var(--h2-font-weight)] text-black text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
            Мы в:
          </h2>
          <div className="flex flex-col gap-3">
            {socialLinks.map((link, index) => (
              <a
                key={`social-${index}`}
                href="#"
                className="font-body font-[number:var(--body-font-weight)] text-black text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]"
              >
                {link}
              </a>
            ))}
          </div>
        </CardContent>
      </Card>
    </footer>
  );
};
