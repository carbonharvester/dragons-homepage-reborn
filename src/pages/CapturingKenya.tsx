
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import TripBrochureWrapper from '@/components/trip/TripBrochureWrapper';

const CapturingKenya = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Capturing Kenya Photography Program" 
        description="Develop your photography and videography skills while capturing Kenya's stunning landscapes, wildlife, and cultures in this immersive educational adventure." 
        keywords="photography, videography, Kenya, safari, wildlife photography, educational travel, creative program"
      />
      <Header />
      
      <main className="flex-grow">
        {/* Hero section is part of TripBrochureWrapper */}
        <TripBrochureWrapper tripType="capturing-kenya" heroOnly={true} />
        
        {/* Navigation and content in a continuous section */}
        <div className="bg-white">
          {/* Navigation section */}
          <div className="container-wide py-4">
            <TripBrochureWrapper tripType="capturing-kenya" navigationOnly={true} />
          </div>
          
          {/* Content section with no top padding */}
          <TripBrochureWrapper tripType="capturing-kenya" contentOnly={true} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CapturingKenya;
