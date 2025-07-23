import React from "react";
import { CallToActionSection } from "./sections/CallToActionSection";
import { ContentWrapperSection } from "./sections/ContentWrapperSection";
import { FeatureSection } from "./sections/FeatureSection";
import { FooterSection } from "./sections/FooterSection";
import { InfoSection } from "./sections/InfoSection";
import { IntroductionSection } from "./sections/IntroductionSection";
import { MainContentSection } from "./sections/MainContentSection";
import { NewsletterSection } from "./sections/NewsletterSection";
import { OverviewSection } from "./sections/OverviewSection";
import { ServicesSection } from "./sections/ServicesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import Background from "../../components/Background";

export const VisaBG = () => {
  const [selectedTariff, setSelectedTariff] = React.useState<string>("");
  return (
    <div className="flex flex-col w-full bg-transparent relative">
      <Background />
      <OverviewSection />
      <FeatureSection />
      <ContentWrapperSection />
      <MainContentSection />
      <InfoSection />
      <FooterSection />
      <IntroductionSection setSelectedTariff={setSelectedTariff} />
      <ServicesSection selectedTariff={selectedTariff} setSelectedTariff={setSelectedTariff} />
      {/* <TestimonialsSection /> */}
      <CallToActionSection />
      <NewsletterSection />
    </div>
  );
};
