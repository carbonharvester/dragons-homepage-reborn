import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ImpactStrip from '@/components/ImpactStrip';
import HowItWorks from '@/components/HowItWorks';
import GetStartedProcess from '@/components/GetStartedProcess';
import ProgramsSection from '@/components/ProgramsSection';
import StoriesSection from '@/components/StoriesSection';
import BlogSection from '@/components/BlogSection';
import TrustSection from '@/components/TrustSection';
import PhotoStrip from '@/components/PhotoStrip';
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
        {/* Hero - Impact-first statement */}
        <Hero />

        {/* Impact Numbers - Animated counters */}
        <ImpactStrip />

        {/* Photo Grid - Image-forward strip */}
        <PhotoStrip />

        {/* Two Programs - Seeds2Education & Water Empowering Women */}
        <HowItWorks />

        {/* How to Get Started - 3-step process */}
        <GetStartedProcess />

        {/* Programs - "Join a journey" */}
        <ProgramsSection />

        {/* Stories/Testimonials */}
        <StoriesSection />

        {/* Blog Preview - Latest 3 posts */}
        <BlogSection />

        {/* Trust Section - Partner logos */}
        <TrustSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
