
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import EducationalLeadershipContent from "@/components/educational-leadership/EducationalLeadershipContent";

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
        <EducationalLeadershipContent />
      </main>
      <Footer />
    </div>
  );
};

export default EducationalLeadership;
