import React from "react";
import {
  AdvantagesSection,
  HeroSection,
  ReviewSection,
  ServiceSection,
} from "./components";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <AdvantagesSection />
      <ReviewSection />
    </>
  );
};

export default HomePage;
