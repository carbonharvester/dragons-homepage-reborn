
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import TripBrochureWrapper from '@/components/trip/TripBrochureWrapper';

const FeedingTheFuture = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Feeding the Future: Sustainable Agriculture Program" 
        description="A 4-week immersive experience in sustainable agriculture and food security initiatives across Kenya." 
        keywords="sustainable agriculture, food security, educational travel, Kenya, summer program"
      />
      <Header />
      
      <main>
        {/* Hero section is part of TripBrochureWrapper */}
        <TripBrochureWrapper tripType="feeding-the-future" heroOnly={true} />
        
        {/* Navigation and content in a continuous section */}
        <div className="bg-white">
          {/* Navigation section */}
          <div className="container-wide py-4">
            <TripBrochureWrapper tripType="feeding-the-future" navigationOnly={true} />
          </div>
          
          {/* Content section with no top padding */}
          <TripBrochureWrapper tripType="feeding-the-future" contentOnly={true} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FeedingTheFuture;
