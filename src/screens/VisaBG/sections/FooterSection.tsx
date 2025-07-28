import React from "react";
import { Card, CardContent } from "../../../components/ui/card";

export const FooterSection = () => {
  // Social media links
  const socialLinks = [
    "Instagram",
    "Написать в Telegram",
    "Написать в WhatsApp",
  ];

  return (
    <footer className="bg-[#171717] py-12 w-full backdrop-blur-[2px]">
      <div className="max-w-[1600px] mx-auto w-full px-6 md:px-16 flex flex-col md:flex-row gap-6">
        <div className="flex flex-col gap-6 md:w-1/2">
        {/* Logo and copyright */}
        <img 
          src="/logo_lp.svg" 
          alt="EasyWay Europe Logo" 
          className="w-[88px] h-[88px]"
        />

        <div className="font-font-body text-font-body text-white">
          EasyWayEyrope.com
          <br />© 2020-2025
        </div>
        </div>

        {/*
        <div className="flex flex-col gap-6 md:w-1/2">
          <Card className="w-full bg-transparent border-none">
            <CardContent className="p-0 flex flex-col gap-4">
              <h2 className="font-font-body text-font-body text-white font-bold">
                Мы в:
              </h2>
              <div className="flex flex-col gap-3">
                {socialLinks.map((link, index) => (
                  <a
                    key={`social-${index}`}
                    href="#"
                    className="font-font-body text-font-body text-white"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        */}
      </div>
    </footer>
  );
};
