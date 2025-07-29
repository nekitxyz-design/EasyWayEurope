import React, { useState, useEffect } from "react";
import { SEOHead } from "../../components/SEOHead";
import { TariffProvider } from "../../lib/contexts/TariffContext";
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
import FluidGlassBackground from "../../components/FluidGlassBackground";

export const VisaBG = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <TariffProvider>
      <div className="flex flex-col w-full bg-transparent relative">
        <SEOHead />
        <FluidGlassBackground mode="lens" isScrolled={isScrolled} />
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
    </TariffProvider>
  );
};
