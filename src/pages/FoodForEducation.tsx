
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TripBrochure from '@/components/TripBrochure';

const FoodForEducation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <TripBrochure />
      </main>
      <Footer />
    </div>
  );
};

export default FoodForEducation;
