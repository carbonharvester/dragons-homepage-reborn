
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import TripCTA from '@/components/trip/TripCTA';
import MultiYearCurriculum from '@/components/programs/MultiYearCurriculum';
import { multiYearProgram } from '@/data/programsData';
import HeroSection from '@/components/multi-year/HeroSection';
import OverviewSection from '@/components/multi-year/OverviewSection';
import ProgramStructureSection from '@/components/multi-year/ProgramStructureSection';
import ParentPageNavigation from '@/components/navigation/ParentPageNavigation';

const MultiYearCurriculumPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Add a random query parameter to force image reload
  const imgTimestamp = Date.now();
  
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Multi-Year Curriculum" 
        description="A progressive three-year educational travel program that builds global citizenship skills through immersive experiences in Africa." 
        keywords="multi-year curriculum, educational travel, global citizenship, student development, progressive learning, africa travel" 
      />
      <Header />
      <main>
        <HeroSection imgTimestamp={imgTimestamp} />
        
        <div className="container-wide py-8">
          <ParentPageNavigation parentPath="/programs" parentName="Programs" />
        </div>
        
        <OverviewSection />
        <ProgramStructureSection />
        
        {/* Full curriculum details */}
        <section className="py-20 bg-white">
          <div className="container-wide">
            <MultiYearCurriculum data={multiYearProgram} />
          </div>
        </section>

        <TripCTA isSchoolTrip={true} />
      </main>
      <Footer />
    </div>
  );
};

export default MultiYearCurriculumPage;
