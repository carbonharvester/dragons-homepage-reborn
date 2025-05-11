
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import ParentPageNavigation from '@/components/navigation/ParentPageNavigation';

// Import modular components
import ProgramHero from '@/components/capturing-kenya/ProgramHero';
import ProgramOverview from '@/components/capturing-kenya/ProgramOverview';
import ProgramItinerary from '@/components/capturing-kenya/ProgramItinerary';
import ProgramOutcomes from '@/components/capturing-kenya/ProgramOutcomes';
import ProgramDetails from '@/components/capturing-kenya/ProgramDetails';
import ProgramCTA from '@/components/capturing-kenya/ProgramCTA';

// Import data
import { programData, outcomes } from '@/components/capturing-kenya/ProgramData';
import { weeks } from '@/components/capturing-kenya/data';

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

        <div className="container-wide py-8">
          <ParentPageNavigation parentPath="/summer-abroad" parentName="Summer Abroad" />
        </div>

        {/* Program Overview */}
        <div className="container-wide">
          <ProgramOverview programData={programData} />
        </div>

        {/* Itinerary Tabs */}
        <ProgramItinerary weeks={weeks} />
        
        {/* Program Outcomes */}
        <ProgramOutcomes outcomes={outcomes} />

        {/* Program Logistics */}
        <ProgramDetails />

        {/* Brochure Section */}
        <ProgramCTA />
        
      </main>
      <Footer />
    </div>
  );
};

export default CapturingKenya;
