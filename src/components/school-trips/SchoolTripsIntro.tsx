
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const SchoolTripsIntro = () => {
  const keyBenefits = [{
    title: "Authentic Cultural Engagement",
    content: "Students connect with communities, building genuine cross-cultural understanding"
  }, {
    title: "Curriculum Integration",
    content: "Programs that align with your educational goals and learning outcomes"
  }, {
    title: "Transformative Impact",
    content: "Projects that empower communities while expanding students' global perspective"
  }];

  return (
    <div className="max-w-3xl mx-auto text-center mb-16 mt-8">
      
      <h2 className="text-4xl md:text-5xl font-academy text-dragon-dark mb-6">Educational Journeys with Purpose</h2>
      <p className="text-lg text-dragon-gray mb-12">
        Our expert-led school trips connect curriculum to real-world challenges, fostering global citizenship while ensuring the highest standards of safety and support. Each program inspires and educates through meaningful experiences.
      </p>
      
      <div className="mt-12">
        <h3 className="text-2xl font-academy text-dragon-dark mb-8">Key Benefits</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {keyBenefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="bg-dragon-beige overflow-hidden transition-all group text-left"
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
    </div>
  );
};

export default SchoolTripsIntro;
