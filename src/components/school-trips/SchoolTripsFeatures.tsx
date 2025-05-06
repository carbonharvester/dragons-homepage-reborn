
import React from 'react';

const SchoolTripsFeatures = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 mb-20">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-[1.02] border-t-4 border-dragon-yellow">
        <img src="https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?q=80&w=2070&auto=format" alt="Students on a field trip" className="w-full h-64 object-cover" />
        <div className="p-6">
          <h2 className="text-2xl font-academy text-dragon-dark mb-3 flex items-center">
            <span className="w-3 h-3 rounded-full bg-dragon-rust mr-2"></span>
            Service-Led Experiences
          </h2>
          <p className="text-dragon-gray mb-4">
            Immersive service-learning journeys where students collaborate with local communities on meaningful projects that create lasting positive impact while developing critical global competencies.
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center">
              <span className="bg-dragon-beige text-dragon-rust rounded-full p-1 mr-2 flex items-center justify-center w-6 h-6 text-xs">01</span>
              <span>Community-identified projects with measurable outcomes</span>
            </li>
            <li className="flex items-center">
              <span className="bg-dragon-beige text-dragon-rust rounded-full p-1 mr-2 flex items-center justify-center w-6 h-6 text-xs">02</span>
              <span>Cultural immersion and authentic connections</span>
            </li>
            <li className="flex items-center">
              <span className="bg-dragon-beige text-dragon-rust rounded-full p-1 mr-2 flex items-center justify-center w-6 h-6 text-xs">03</span>
              <span>Curriculum-linked learning and reflection</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-[1.02] border-t-4 border-dragon-navy">
        <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format" alt="Students working together" className="w-full h-64 object-cover" />
        <div className="p-6">
          <h2 className="text-2xl font-academy text-dragon-dark mb-3 flex items-center">
            <span className="w-3 h-3 rounded-full bg-dragon-navy mr-2"></span>
            Educational Focus Areas
          </h2>
          <p className="text-dragon-gray mb-4">
            Our school trips are designed around key educational themes that promote global citizenship and experiential learning.
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center">
              <span className="bg-dragon-beige text-dragon-navy rounded-full p-1 mr-2 flex items-center justify-center w-6 h-6 text-xs">01</span>
              <span>Environmental conservation and sustainability</span>
            </li>
            <li className="flex items-center">
              <span className="bg-dragon-beige text-dragon-navy rounded-full p-1 mr-2 flex items-center justify-center w-6 h-6 text-xs">02</span>
              <span>Cultural immersion and community engagement</span>
            </li>
            <li className="flex items-center">
              <span className="bg-dragon-beige text-dragon-navy rounded-full p-1 mr-2 flex items-center justify-center w-6 h-6 text-xs">03</span>
              <span>Adventure and personal growth</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SchoolTripsFeatures;
