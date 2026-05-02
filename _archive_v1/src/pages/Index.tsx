import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import ProgramsSection from '@/components/ProgramsSection';
import StoriesSection from '@/components/StoriesSection';
import TrustSection from '@/components/TrustSection';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO />
      <Header />

      <main className="pt-16">
        {/* Hero - Impact-first statement with key metrics */}
        <Hero />

        {/* Two Programs - Seeds2Education & Water Empowering Women */}
        <HowItWorks />

        {/* Programs - "Join a journey" */}
        <ProgramsSection />

        {/* Stories/Testimonials */}
        <StoriesSection />

        {/* Trust Section - Partner logos */}
        <TrustSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
