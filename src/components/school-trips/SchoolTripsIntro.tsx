
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const SchoolTripsIntro = () => {
  const keyBenefits = [{
    title: "Authentic Cultural Engagement",
    content: "Students connect with local communities and develop genuine cross-cultural understanding"
  }, {
    title: "Curriculum Integration",
    content: "Programs that align with your educational goals and learning outcomes"
  }, {
    title: "Transformative Impact",
    content: "Projects that benefit communities while developing students' global perspective"
  }];
  
  return <div className="max-w-3xl mx-auto text-center mb-16 mt-8">
      <div className="bg-gradient-to-r from-dragon-beige to-white p-1 w-24 h-1 mx-auto mb-6"></div>
      <h2 className="text-4xl md:text-5xl font-academy text-dragon-dark mb-6">Educational Journeys with Purpose</h2>
      <p className="text-lg text-dragon-gray mb-12">
        Our expert-led school trips connect curriculum to real-world challenges in Africa, developing global citizenship while ensuring the highest standards of safety and support. Each program is designed to create meaningful experiences that inspire and educate.
      </p>
      
      <div className="mt-12">
        <h3 className="text-2xl font-academy text-dragon-dark mb-8">Key Benefits</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {keyBenefits.map((benefit, index) => (
            <Card key={index} className="border-t-4 border-dragon overflow-hidden transition-all hover:shadow-lg group text-left">
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
    </div>;
};

export default SchoolTripsIntro;
