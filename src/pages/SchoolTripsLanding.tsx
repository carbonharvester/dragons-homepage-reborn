
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import HeroSection from '@/components/school-trips-landing/HeroSection';
import BenefitsSection from '@/components/school-trips-landing/BenefitsSection';
import TestimonialsSection from '@/components/school-trips-landing/TestimonialsSection';
import ProgramsSection from '@/components/school-trips-landing/ProgramsSection';
import ResourcesSection from '@/components/school-trips-landing/ResourcesSection';
import CTASection from '@/components/school-trips-landing/CTASection';

const SchoolTripsLanding = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Educational School Trips to Kenya | Mission Kapes"
        description="Transform your students with immersive educational school trips to Kenya. Curriculum-aligned programs featuring cultural immersion, community service, and wildlife conservation. Safe, impactful, and unforgettable learning experiences."
        keywords="school trips Kenya, educational travel Kenya, student trips Africa, curriculum school trips, cultural immersion programs, service learning trips, school travel Kenya, educational tours Kenya"
      />
      <Header />
      
      <main>
        <HeroSection />
        <BenefitsSection />
        <TestimonialsSection />
        <ProgramsSection />
        <ResourcesSection />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default SchoolTripsLanding;
