
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TripBrochureWrapper from '@/components/trip/TripBrochureWrapper';
import SEO from '@/components/SEO';

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
        
        {/* Navigation and content in a continuous section */}
        <div className="bg-white">
          {/* Navigation section */}
          <div className="container-wide py-4">
            <TripBrochureWrapper tripType="empowering-women" navigationOnly={true} />
          </div>
          
          {/* Content section with no top padding */}
          <TripBrochureWrapper tripType="empowering-women" contentOnly={true} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EmpoweringWomen;
