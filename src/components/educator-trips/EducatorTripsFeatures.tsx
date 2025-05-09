
import React from 'react';
import { GraduationCap, Globe, Users, BookOpen } from "lucide-react";

const EducatorTripsFeatures = () => {
  const features = [
    {
      icon: <GraduationCap className="h-10 w-10 text-dragon" />,
      title: "Professional Development",
      description: "Earn continuing education credits while developing fresh teaching approaches and leadership skills."
    },
    {
      icon: <Globe className="h-10 w-10 text-dragon" />,
      title: "Global Perspective",
      description: "Expand your worldview and develop cross-cultural teaching competencies through meaningful immersion."
    },
    {
      icon: <Users className="h-10 w-10 text-dragon" />,
      title: "Educator Network",
      description: "Connect with like-minded educators from around the world and build lasting professional relationships."
    },
    {
      icon: <BookOpen className="h-10 w-10 text-dragon" />,
      title: "Classroom Resources",
      description: "Create authentic teaching materials and establish global classroom connections to bring back to your students."
    }
  ];

  return (
    <div className="mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="flex justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-dragon-dark mb-2">{feature.title}</h3>
            <p className="text-dragon-gray">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducatorTripsFeatures;
