import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import SEO from "@/components/SEO";
import TripHero from "@/components/trip/TripHero";
import TripItinerary from "@/components/trip/TripItinerary";
import TripGallery from "@/components/trip/TripGallery";

// Import refactored components
import ProgramIntro from "@/components/empowering-women/ProgramIntro";
import Accommodation from "@/components/empowering-women/Accommodation";
import ProgramSidebar from "@/components/empowering-women/ProgramSidebar";
import ProgramCTA from "@/components/empowering-women/ProgramCTA";
import TripHighlightsWrapper from "@/components/empowering-women/TripHighlightsWrapper";

// Import data
import { 
  tripItinerary, 
  galleryImages 
} from "@/components/empowering-women/ProgramData";

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
        <TripHero 
          title="Exploring Women's Empowerment"
          subtitle="Empower Women, Transform Lives through an 8-day journey in Tsavo, Kenya"
          category="School Trip"
          imagePath="https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        />
        
        <section className="py-16 bg-white">
          <div className="container-wide">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-2/3">
                <h1 className="text-3xl md:text-4xl font-bold text-dragon-dark mb-6">Live, Learn, and Empower in Tsavo</h1>
                
                <ProgramIntro />
                
                <TripHighlightsWrapper />
                
                <TripItinerary itineraryDays={tripItinerary} />
                
                <TripGallery images={galleryImages} />

                <Accommodation />
                
                <ProgramCTA />
              </div>
              
              <ProgramSidebar />
            </div>
          </div>
        </section>
        
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default EmpoweringWomen;
