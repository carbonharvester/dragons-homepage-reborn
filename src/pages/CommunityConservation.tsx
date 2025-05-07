
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import SEO from "@/components/SEO";
import TripBrochureWrapper from "@/components/trip/TripBrochureWrapper";

const CommunityConservation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Community Conservation Program"
        description="Work alongside local conservation experts to protect endangered ecosystems while learning traditional ecological knowledge and sustainable practices."
        keywords="conservation, ecological knowledge, sustainable practices, Kenya, educational travel, wildlife conservation"
      />
      <Header />
      
      <main>
        {/* Hero section is part of TripBrochureWrapper */}
        <TripBrochureWrapper tripType="community-conservation" heroOnly={true} />
        
        {/* Navigation and content in a continuous section */}
        <div className="bg-white">
          {/* Navigation section */}
          <div className="container-wide py-4">
            <TripBrochureWrapper tripType="community-conservation" navigationOnly={true} />
          </div>
          
          {/* Content section with no top padding */}
          <TripBrochureWrapper tripType="community-conservation" contentOnly={true} />
        </div>

        {/* Student Stories (Testimonials) Section */}
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default CommunityConservation;
