import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import SchoolTripsHero from '@/components/school-trips/SchoolTripsHero';
import SchoolTripsIntro from '@/components/school-trips/SchoolTripsIntro';
import SchoolTripsFeatures from '@/components/school-trips/SchoolTripsFeatures';
import SchoolTripsList from '@/components/school-trips/SchoolTripsList';
import SchoolTripsCTA from '@/components/school-trips/SchoolTripsCTA';

const SchoolTrips = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="School Trips | Kapes Adventures"
        description="Transformative journeys for students aged 12-18. Create real impact through hands-on community projects, wildlife encounters, and cultural immersion."
        keywords="school trips Kenya, student travel, CAS trips, IB service learning, educational travel Africa"
      />
      <Header />
      <main className="pt-16">
        <SchoolTripsHero />

        <section className="bg-kapes-cream">
          <div className="container-wide">
            <SchoolTripsIntro />
            <SchoolTripsFeatures />
            <SchoolTripsList />
            <SchoolTripsCTA />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SchoolTrips;
