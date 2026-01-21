
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/health-safety/HeroSection";
import SafetyApproach from "@/components/health-safety/SafetyApproach";
import RiskAssessment from "@/components/health-safety/RiskAssessment";
import SafeTravels from "@/components/health-safety/SafeTravels";
import HealthInformation from "@/components/health-safety/HealthInformation";
import SafetyGuidelines from "@/components/health-safety/SafetyGuidelines";
import GuideQualifications from "@/components/health-safety/GuideQualifications";
import OurPartner from "@/components/health-safety/OurPartner";

const HealthAndSafety = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <HeroSection />
        <SafetyApproach />
        <RiskAssessment />
        <GuideQualifications />
        <OurPartner />
        <SafeTravels />
        <HealthInformation />
        <SafetyGuidelines />
      </main>
      <Footer />
    </div>
  );
};

export default HealthAndSafety;
