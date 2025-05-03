
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import SEO from '@/components/SEO';

// Import modular components
import ProgramHero from '@/components/capturing-kenya/ProgramHero';
import ProgramOverview from '@/components/capturing-kenya/ProgramOverview';
import ProgramItinerary from '@/components/capturing-kenya/ProgramItinerary';
import ProgramOutcomes from '@/components/capturing-kenya/ProgramOutcomes';
import ProgramDetails from '@/components/capturing-kenya/ProgramDetails';
import ProgramCTA from '@/components/capturing-kenya/ProgramCTA';

// Import data
import { programData, outcomes } from '@/components/capturing-kenya/ProgramData';
import { weeks } from '@/components/capturing-kenya/WeekData';

const CapturingKenya = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Capturing Kenya Photography Program"
        description="Develop your photography and videography skills while capturing Kenya's stunning landscapes, wildlife, and cultures in this immersive educational adventure."
        keywords="photography, videography, Kenya, safari, wildlife photography, educational travel, creative program"
      />
      <Header />
      <main>
        {/* Hero Section */}
        <ProgramHero />

        {/* Program Overview */}
        <ProgramOverview programData={programData} />

        {/* Itinerary Tabs */}
        <ProgramItinerary weeks={weeks} />
        
        {/* Program Outcomes */}
        <ProgramOutcomes outcomes={outcomes} />

        {/* Program Logistics */}
        <ProgramDetails />

        {/* Brochure Section */}
        <ProgramCTA programData={programData} />

        {/* Testimonials */}
        <Testimonials />
        
      </main>
      <Footer />
    </div>
  );
};

export default CapturingKenya;
