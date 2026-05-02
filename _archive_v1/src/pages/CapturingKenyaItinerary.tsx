
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { weeks } from '@/components/capturing-kenya/WeekData';
import ItineraryHero from '@/components/capturing-kenya/ItineraryHero';
import ItineraryIntro from '@/components/capturing-kenya/ItineraryIntro';
import WeekToggleList from '@/components/capturing-kenya/WeekToggleList';
import ItineraryCTA from '@/components/capturing-kenya/ItineraryCTA';
import ParentPageNavigation from '@/components/navigation/ParentPageNavigation';

const CapturingKenyaItinerary = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // State for expanded weeks
  const [expandedWeeks, setExpandedWeeks] = useState<Record<string, boolean>>({
    'week1': true, // First week expanded by default
    'week2': false,
    'week3': false
  });

  // Toggle week details
  const toggleWeekDetails = (weekId: string) => {
    setExpandedWeeks(prev => ({
      ...prev,
      [weekId]: !prev[weekId]
    }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Capturing Kenya Program Itinerary"
        description="Detailed day-by-day itinerary for our 3-week photography and videography immersion program across Kenya's most stunning locations."
        keywords="Kenya itinerary, photography program, wildlife photography, travel itinerary, educational program"
      />
      <Header />
      <main>
        <ItineraryHero 
          title="Capturing Kenya"
          subtitle="Full Program Itinerary"
          duration="3 Weeks (Summer)"
          days={21}
          location="Kenya"
        />

        <div className="container-wide py-8">
          <ParentPageNavigation parentPath="/programs/capturing-kenya" parentName="Capturing Kenya" />
        </div>

        <section className="py-12 bg-white">
          <div className="container-wide">
            <ItineraryIntro 
              title="Detailed Program Itinerary"
              description="Our 3-week Capturing Kenya program takes you through stunning landscapes, wildlife encounters, and cultural 
              immersion while developing your photography and videography skills. Below is our comprehensive day-by-day itinerary."
            />
            
            <WeekToggleList 
              weeks={weeks}
              expandedWeeks={expandedWeeks}
              toggleWeekDetails={toggleWeekDetails}
            />
            
            <ItineraryCTA />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CapturingKenyaItinerary;
