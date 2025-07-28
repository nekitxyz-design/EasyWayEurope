import React from "react";
import { HeroSection } from "./sections/HeroSection";
import { FeatBulgariaSection } from "./sections/FeatBulgariaSection";
import { BonusesBgSection } from "./sections/BonusesBgSection";
import { ProcessSection } from "./sections/ProcessSection";
import { AboutUsSection } from "./sections/AboutUsSection";
import { PricesSection } from "./sections/PricesSection";
import { FormSection } from "./sections/FormSection";
import { FAQSection } from "./sections/FAQSection";
import { GuaranteesSection } from "./sections/GuaranteesSection";
import { FooterSection } from "./sections/FooterSection";
import Background from "../../components/Background";

export const VisaBG = () => {
  return (
    <div className="flex flex-col w-full bg-transparent relative">
      <Background />
      <div style={{ paddingTop: 'env(safe-area-inset-top, 44px)', zIndex: 1, position: 'relative' }}>
        <HeroSection />
        <FeatBulgariaSection />
        <BonusesBgSection />
        <ProcessSection />
        <AboutUsSection />
        <PricesSection />
        <FormSection />
        <GuaranteesSection />
        <FAQSection />
        <FooterSection />
      </div>
    </div>
  );
};
