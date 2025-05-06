
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import TripBrochureWrapper from "@/components/trip/TripBrochureWrapper";

const EmpoweringWomen = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Exploring Women's Empowerment: Tsavo Women's Empowerment Journey"
        description="An 8-day journey to Tsavo, Kenya, to learn from rural women and support Zawadisha's life-changing microloan program for solar lamps, rainwater tanks, and clean cookstoves."
        keywords="women empowerment, Zawadisha, microloan, Tsavo, Kenya, water walk, cultural immersion, educational travel"
      />
      <Header />
      
      <main>
        <TripBrochureWrapper tripType="empowering-women" />
      </main>
      <Footer />
    </div>
  );
};

export default EmpoweringWomen;
