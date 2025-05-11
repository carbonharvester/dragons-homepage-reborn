
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import ParentPageNavigation from '@/components/navigation/ParentPageNavigation';

// Import modular components
import ProgramHero from '@/components/roots-of-change/ProgramHero';
import ProgramSummary from '@/components/roots-of-change/ProgramSummary';
import ProgramOverview from '@/components/capturing-kenya/ProgramOverview';
import ProgramOutcomes from '@/components/capturing-kenya/ProgramOutcomes';
import ProgramCTA from '@/components/capturing-kenya/ProgramCTA';
import ProgramObjectives from '@/components/roots-of-change/ProgramObjectives';
import ProgramLocations from '@/components/roots-of-change/ProgramLocations';
import ProgramItinerary from '@/components/roots-of-change/ProgramItinerary';

// Import data
import { programData, outcomes } from '@/components/roots-of-change/ProgramData';

const FeedingTheFuture = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div className="min-h-screen flex flex-col">
      <SEO title="Feeding the Future: Sustainable Agriculture Program" description="A 4-week immersive experience in sustainable agriculture and food security initiatives across Kenya." keywords="sustainable agriculture, food security, educational travel, Kenya, summer program" />
      <Header />
      <main>
        {/* Hero Section */}
        <ProgramHero />

        <div className="container-wide py-8 bg-white">
          <ParentPageNavigation parentPath="/summer-abroad" parentName="Summer Abroad" />
        </div>

        {/* Program Summary - New section with details moved from hero */}
        <ProgramSummary />

        {/* Program Objectives */}
        <ProgramObjectives />
        
        {/* Program Locations */}
        <ProgramLocations />
        
        {/* Program Itinerary */}
        <ProgramItinerary />

        {/* Program Overview */}
        <ProgramOverview />
        
        {/* Program Outcomes */}
        <ProgramOutcomes outcomes={outcomes} />

        {/* Brochure Section */}
        <ProgramCTA />
      </main>
      <Footer />
    </div>;
};

export default FeedingTheFuture;
