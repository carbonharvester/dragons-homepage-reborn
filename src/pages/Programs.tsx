
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import ProgramsHero from '@/components/programs/ProgramsHero';
import ProgramsIntro from '@/components/programs/ProgramsIntro';
import TabsSection from '@/components/programs/TabsSection';
import ProgramsCTA from '@/components/programs/ProgramsCTA';

const Programs = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Our Programs" 
        description="Explore our transformative educational programs including School Trips, Summer Abroad, Multi-Year Curriculum, and Adult Programs." 
        keywords="educational programs, school trips, summer abroad, multi-year curriculum, adult programs, Kenya, educational travel" 
      />
      <Header />
      <main>
        {/* Hero Section */}
        <ProgramsHero />

        {/* Programs Content */}
        <section className="py-16 bg-dragon-beige">
          <div className="container-wide">
            <ProgramsIntro />
            <TabsSection />
          </div>
        </section>

        {/* Call to Action */}
        <ProgramsCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Programs;
