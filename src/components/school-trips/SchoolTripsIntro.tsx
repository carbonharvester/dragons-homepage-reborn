

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import BulletList from '@/components/ui/BulletList';

const SchoolTripsIntro = () => {
  const keyBenefits = [{
    title: "Authentic Cultural Engagement",
    content: "Students connect with communities, building genuine cross-cultural understanding through homestays and collaborative projects."
  }, {
    title: "Curriculum Integration",
    content: "Programs align with IB, Common Core, and national standards, integrating with subjects like geography, history, and science."
  }, {
    title: "Transformative Impact",
    content: "Projects empower communities—like building classrooms for 50 students or planting 300 trees—while expanding students' global perspective."
  }];

  return (
    <div className="max-w-3xl mx-auto text-center mb-16 mt-8">
      
      <h2 className="text-4xl md:text-5xl font-academy text-dragon-dark mb-6">Educational Journeys with Purpose</h2>
      <p className="text-lg text-dragon-gray mb-12">
        Our expert-led school trips for ages 12–18 connect curriculum to real-world challenges, fostering global citizenship while ensuring the highest standards of safety and support. Each program inspires and educates through meaningful experiences, with comprehensive pre- and post-trip resources.
      </p>
      
      <div className="mt-12">
        <h3 className="text-3xl md:text-4xl font-academy font-bold text-dragon-dark mb-8">Key Benefits</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {keyBenefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="bg-dragon-beige overflow-hidden transition-all group text-left hover:scale-[1.02] transform transition-transform"
            >
              <CardContent className="p-6">
                <div className="flex items-start mb-3">
                  <CheckCircle className="text-dragon mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                  <h4 className="font-bold text-dragon-dark">{benefit.title}</h4>
                </div>
                <p className="text-dragon-gray pl-8">{benefit.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <div className="mt-8 flex flex-col md:flex-row gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm flex-1">
          <h3 className="text-2xl font-academy text-dragon-dark mb-4">Global Education Network</h3>
          <p className="text-dragon-gray">
            Kapes Adventures has delivered and designed educational journeys implemented through our network of trusted partners for several leading international schools, ensuring authentic and impactful experiences for students worldwide.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm flex-1">
          <h3 className="text-2xl font-academy text-dragon-dark mb-4">Safety and Support</h3>
          <p className="text-dragon-gray">
            We prioritise safety with 24/7 support, experienced guides trained in first aid, vetted accommodations, and a robust emergency response system.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SchoolTripsIntro;
