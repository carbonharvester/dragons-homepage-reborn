import React from 'react';
import BulletList from '@/components/ui/BulletList';
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
      
      <div className="mt-12 p-8 bg-gradient-to-br from-dragon-beige/30 to-transparent rounded-lg shadow-sm">
        <h3 className="text-2xl font-academy text-dragon-dark mb-6 text-center relative">
          
          Key Benefits
        </h3>
        <BulletList items={keyBenefits} bulletColor="text-dragon" titleClassName="font-bold text-dragon-dark" contentClassName="text-dragon-gray" className="space-y-4" listItemClassName="flex items-start rounded-md p-3 transition-colors hover:bg-dragon-beige/40" />
      </div>
    </div>;
};
export default SchoolTripsIntro;