
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const MultiYearTab = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold mb-4 text-dragon-dark">Multi-Year Curriculums</h3>
      <p className="mb-6 text-lg">Our Multi-Year Curriculum offers a transformative educational journey that builds year after year, fostering a cohesive experience that deepens students' skills, knowledge, and global perspective over time.</p>
      
      <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
        <h4 className="text-xl font-bold mb-3 text-dragon-dark">Program Features:</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Progressive skill development across multiple years</li>
          <li>Curriculum integration with school standards and frameworks</li>
          <li>Scaffolded leadership opportunities and responsibilities</li>
          <li>Long-term relationship building with partner communities</li>
          <li>Comprehensive documentation for college applications</li>
          <li>Compatible with IB CAS requirements and Duke of Edinburgh Awards</li>
        </ul>
        
        <p className="mb-6">The Multi-Year Curriculum is designed for schools eager to weave global education into their core programming, empowering students with a transformative journey that prepares them for academic and professional success.</p>
      </div>
      
      <div className="text-center mt-8">
        <Button className="btn-primary" asChild>
          <Link to="/multi-year-curriculum">Explore Multi-Year Curriculums</Link>
        </Button>
      </div>
    </div>
  );
};

export default MultiYearTab;
