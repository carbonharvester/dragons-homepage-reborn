
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/health-safety/HeroSection";
import SafetyApproach from "@/components/health-safety/SafetyApproach";
import HealthInformation from "@/components/health-safety/HealthInformation";
import SafetyGuidelines from "@/components/health-safety/SafetyGuidelines";

const HealthAndSafety = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <SafetyApproach />
        <HealthInformation />
        <SafetyGuidelines />
      </main>
      <Footer />
    </div>
  );
};

export default HealthAndSafety;
