
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TripBrochure from '@/components/TripBrochure';
import SEO from '@/components/SEO';
import { EditableText } from '@/components/ui/editable-text';

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
        <TripBrochure />
      </main>
      <Footer />
    </div>
  );
};

export default FoodForEducation;
