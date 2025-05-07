
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TripBrochureWrapper from '@/components/trip/TripBrochureWrapper';
import SEO from '@/components/SEO';
import ParentPageNavigation from '@/components/navigation/ParentPageNavigation';

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
        <TripBrochureWrapper tripType="food-for-education" heroOnly={true} />
        
        {/* Navigation positioned directly after the hero, with proper padding */}
        <div className="container-wide py-8">
          <ParentPageNavigation parentPath="/school-trips" parentName="School Trips" />
        </div>
        
        {/* Main content after the navigation */}
        <TripBrochureWrapper tripType="food-for-education" contentOnly={true} />
      </main>
      <Footer />
    </div>
  );
};

export default FoodForEducation;
