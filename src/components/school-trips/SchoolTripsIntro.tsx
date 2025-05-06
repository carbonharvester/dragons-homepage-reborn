
import React from 'react';
import BulletList from '@/components/ui/BulletList';

const SchoolTripsIntro = () => {
  const keyBenefits = [
    { 
      title: "Authentic Cultural Engagement",
      content: "Students connect with local communities and develop genuine cross-cultural understanding"
    },
    {
      title: "Curriculum Integration",
      content: "Programs that align with your educational goals and learning outcomes"
    },
    {
      title: "Transformative Impact",
      content: "Projects that benefit communities while developing students' global perspective"
    }
  ];

  return (
    <div className="max-w-3xl mx-auto text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-academy text-dragon-dark mb-6">Educational Journeys with Purpose</h2>
      <p className="text-lg text-dragon-gray mb-8">
        Our expert-led school trips connect curriculum to real-world challenges in Africa, developing global citizenship while ensuring the highest standards of safety and support. Each program is designed to create meaningful experiences that inspire and educate.
      </p>
      
      <div className="mt-8 text-left">
        <h3 className="text-2xl font-academy text-dragon-dark mb-4 text-center">Key Benefits</h3>
        <BulletList 
          items={keyBenefits}
          bulletColor="text-dragon"
          titleClassName="font-bold text-dragon-dark"
          contentClassName="text-dragon-gray"
        />
      </div>
    </div>
  );
};

export default SchoolTripsIntro;
