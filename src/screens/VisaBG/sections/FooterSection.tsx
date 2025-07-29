import React from "react";
import { Card, CardContent } from "../../../components/ui/card";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

export const FooterSection = () => {
  // Social media links
  const socialLinks = [
    "Instagram",
    "Написать в Telegram",
    "Написать в WhatsApp",
  ];

  const { t, i18n } = useTranslation();
  const location = useLocation();
  const lang = location.pathname.split("/")[1] || "en";

  return (
    <footer className="bg-[#171717] py-12 w-full backdrop-blur-[2px]">
      <div className="max-w-[1600px] mx-auto w-full px-6 md:px-16 flex flex-col md:flex-row gap-6">
        <div className="flex flex-col gap-6 md:w-1/2">
        {/* Logo and copyright */}
        <img 
          src="logo_lp.svg" 
          alt="EasyWayEurope Logo" 
          className="w-[88px] h-[88px]"
        />

        <div className="font-font-body text-font-body text-white">
          EasyWayEyrope.com
          <br />© 2020-2025
        </div>
        </div>
        <div className="flex flex-col gap-4 md:w-1/2 justify-end items-start md:items-end">
          <div className="flex flex-col gap-2">
            <a href={`/${lang}/privacy-policy`} className="text-white font-font-body text-font-body hover:underline">
              {t("privacy.title")}
            </a>
            <a href={`/${lang}/cookie-policy`} className="text-white font-font-body text-font-body hover:underline">
              {t("cookie.title")}
            </a>
            <a href={`/${lang}/terms-of-service`} className="text-white font-font-body text-font-body hover:underline">
              {t("terms.title")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
