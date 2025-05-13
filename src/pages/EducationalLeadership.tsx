
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import TripBrochureWrapper from '@/components/trip/TripBrochureWrapper';

const EducationalLeadership = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Educational Leadership Program"
        description="An immersive professional development program for teachers of environmental science, sustainability, and geography in Kenya's diverse ecosystems."
        keywords="educational leadership, professional development, teachers, environmental science, sustainability, geography, Kenya, field-based curriculum"
      />
      <Header />
      
      <main>
        {/* Hero section is part of TripBrochureWrapper */}
        <TripBrochureWrapper tripType="educational-leadership" heroOnly={true} />
        
        {/* Navigation and content in a continuous section */}
        <div className="bg-white">
          {/* Navigation section */}
          <div className="container-wide py-4">
            <TripBrochureWrapper tripType="educational-leadership" navigationOnly={true} />
          </div>
          
          {/* Content section with no top padding */}
          <TripBrochureWrapper tripType="educational-leadership" contentOnly={true} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EducationalLeadership;
