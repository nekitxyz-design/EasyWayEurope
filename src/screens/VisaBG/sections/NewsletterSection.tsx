import React from "react";
import { Card, CardContent } from "../../../components/ui/card";

export const NewsletterSection = (): JSX.Element => {
  // Social media links
  const socialLinks = [
    "Instagram",
    "Написать в Telegram",
    "Написать в WhatsApp",
  ];

  return (
    <footer className="bg-[#f3fcf0] py-12 px-6 flex flex-col md:flex-row gap-6 w-full backdrop-blur-[2px]">
      <div className="flex flex-col gap-6 md:w-1/2">
      {/* Logo and copyright */}
      <img 
        src={`${import.meta.env.BASE_URL}Logo_lp.svg`} 
        alt="EasyWay Europe Logo" 
        className="w-[88px] h-[88px]"
      />

      <div className="font-font-body text-font-body text-black">
        EasyWayEyrope.com
        <br />© 2020-2025
      </div>
      </div>

      <div className="flex flex-col gap-6 md:w-1/2">
      {/* Social media section */}
      <Card className="w-full bg-transparent border-none">
        <CardContent className="p-0 flex flex-col gap-4">
          <h2 className="font-font-body text-font-body text-black font-bold">
            Мы в:
          </h2>
          <div className="flex flex-col gap-3">
            {socialLinks.map((link, index) => (
              <a
                key={`social-${index}`}
                href="#"
                className="font-font-body text-font-body text-black"
              >
                {link}
              </a>
            ))}
          </div>
        </CardContent>
      </Card>
      </div>
    </footer>
  );
};
