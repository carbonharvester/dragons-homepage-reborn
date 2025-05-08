
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TripBrochureWrapper from '@/components/trip/TripBrochureWrapper';
import SEO from '@/components/SEO';

const FoodForEducation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Food For Education Program"
        description="Explore sustainable food systems and contribute to food security initiatives while learning about traditional and modern agricultural practices in Kenya."
        keywords="food security, sustainable agriculture, educational travel, Kenya, food systems"
      />
      <Header />
      
      <main>
        {/* Hero section is part of TripBrochureWrapper */}
        <TripBrochureWrapper tripType="food-for-education" heroOnly={true} isSchoolTrip={true} />
        
        {/* Navigation and content in a continuous section */}
        <div className="bg-white">
          {/* Navigation section */}
          <div className="container-wide py-4">
            <TripBrochureWrapper tripType="food-for-education" navigationOnly={true} isSchoolTrip={true} />
          </div>
          
          {/* Content section with no top padding */}
          <TripBrochureWrapper tripType="food-for-education" contentOnly={true} isSchoolTrip={true} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FoodForEducation;
