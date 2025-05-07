
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TripBrochureWrapper from '@/components/trip/TripBrochureWrapper';
import SEO from '@/components/SEO';
import ParentPageNavigation from '@/components/navigation/ParentPageNavigation';

const EmpoweringWomen = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Empowering Women Program"
        description="Partner with Zawadisha and engage with rural Kenyan women through microfinance initiatives that provide life-changing clean technologies."
        keywords="women empowerment, microfinance, educational travel, Kenya, social entrepreneurship"
      />
      <Header />
      
      <main>
        {/* Hero section is part of TripBrochureWrapper */}
        <TripBrochureWrapper tripType="empowering-women" heroOnly={true} />
        
        {/* Navigation positioned directly after the hero, with minimal padding */}
        <div className="container-wide py-4 bg-white">
          <ParentPageNavigation parentPath="/school-trips" parentName="School Trips" />
        </div>
        
        {/* Content section directly after navigation with no top margin */}
        <TripBrochureWrapper tripType="empowering-women" contentOnly={true} />
      </main>
      <Footer />
    </div>
  );
};

export default EmpoweringWomen;
