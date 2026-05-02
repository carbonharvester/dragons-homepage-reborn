
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import HeroSection from "@/components/discover-kenya/HeroSection";
import AboutKenya from "@/components/discover-kenya/AboutKenya";
import WildlifeSection from "@/components/discover-kenya/WildlifeSection";
import CultureSection from "@/components/discover-kenya/CultureSection";
import GeographySection from "@/components/discover-kenya/GeographySection";
import CTASection from "@/components/discover-kenya/CTASection";

const DiscoverKenya = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Discover Kenya"
        description="Explore the incredible diversity of landscapes, wildlife, cultures, and experiences that make Kenya a world-renowned destination for educational travel."
        keywords="Kenya, safari, wildlife, landscapes, culture, travel, Africa"
      />
      <Header />
      <main className="flex-grow pt-16">
        <HeroSection />
        <AboutKenya />
        <WildlifeSection />
        <CultureSection />
        <GeographySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default DiscoverKenya;
