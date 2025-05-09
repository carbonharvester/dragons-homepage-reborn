
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import SEO from '@/components/SEO';
import EducatorTripsHero from '@/components/educator-trips/EducatorTripsHero';
import EducatorTripsIntro from '@/components/educator-trips/EducatorTripsIntro';
import EducatorTripsFeatures from '@/components/educator-trips/EducatorTripsFeatures';
import EducatorTripsList from '@/components/educator-trips/EducatorTripsList';
import EducatorTripsCTA from '@/components/educator-trips/EducatorTripsCTA';
import ParentPageNavigation from '@/components/navigation/ParentPageNavigation';

const EducatorTrips = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Educator Trips" 
        description="Professional development experiences for teachers and school staff that combine cultural immersion, educational leadership, and global classroom connections." 
        keywords="educator trips, teacher professional development, educational travel, cultural immersion, global education, Kenya" 
      />
      <Header />
      <main>
        <EducatorTripsHero />
        
        <section className="py-8 bg-gradient-to-b from-white to-dragon-beige/20">
          <div className="container-wide">
            <ParentPageNavigation parentPath="/programs" parentName="Programs" />
            <EducatorTripsIntro />
            <EducatorTripsFeatures />
            <EducatorTripsList />
            <EducatorTripsCTA />
          </div>
        </section>
        
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default EducatorTrips;
