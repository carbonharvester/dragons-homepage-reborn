
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import SEO from '@/components/SEO';
import SchoolTripsHero from '@/components/school-trips/SchoolTripsHero';
import SchoolTripsIntro from '@/components/school-trips/SchoolTripsIntro';
import SchoolTripsFeatures from '@/components/school-trips/SchoolTripsFeatures';
import SchoolTripsList from '@/components/school-trips/SchoolTripsList';
import SchoolTripsCTA from '@/components/school-trips/SchoolTripsCTA';
import ParentPageNavigation from '@/components/navigation/ParentPageNavigation';

const SchoolTrips = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="School Trips" 
        description="Immersive educational experiences that combine cultural engagement, wilderness exploration, and authentic learning opportunities for students." 
        keywords="school trips, student travel, cultural engagement, wilderness exploration, educational travel, Africa, Kenya" 
      />
      <Header />
      <main>
        <SchoolTripsHero />
        
        <section className="py-8 bg-gradient-to-b from-white to-dragon-beige/20">
          <div className="container-wide">
            <ParentPageNavigation parentPath="/programs" parentName="Programs" />
            <SchoolTripsIntro />
            <SchoolTripsFeatures />
            <SchoolTripsList />
            <SchoolTripsCTA />
          </div>
        </section>
        
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default SchoolTrips;
