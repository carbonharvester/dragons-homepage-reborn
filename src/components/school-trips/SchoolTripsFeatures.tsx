
import React from 'react';
import { Book, GraduationCap, School } from "lucide-react";

const SchoolTripsFeatures = () => {
  const features = [
    {
      title: "Creativity",
      icon: Book,
      description: "Photography, storytelling, and artistic expression that connect students with local culture and spark a creative mindset.",
      points: [
        "Documentary photography and storytelling",
        "Collaborative art projects with communities",
        "Cultural immersion through creative expression"
      ]
    },
    {
      title: "Activity",
      icon: GraduationCap,
      description: "Immersive adventures that challenge students physically while exploring diverse landscapes and ecosystems.",
      points: [
        "Wildlife conservation activities",
        "Adventure challenges in natural environments",
        "Team-building through outdoor exploration"
      ]
    },
    {
      title: "Service",
      icon: School,
      description: "Meaningful community projects that create lasting impact while fostering global citizenship, leadership, and teamwork.",
      points: [
        "Community-identified projects with measurable outcomes, like clean water access for 100 people",
        "Sustainable development initiatives, such as solar energy projects",
        "Cross-cultural collaboration and exchange"
      ]
    }
  ];

  return (
    <section className="py-20 bg-dragon my-16 rounded-lg overflow-hidden">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-academy font-bold text-white mb-4">Educational Focus Areas</h2>
          <p className="text-lg md:text-xl text-white opacity-80 max-w-3xl mx-auto">
            Our trips are designed to foster global citizenship and personal growth in three key areas, with outcomes documented for college applications.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg overflow-hidden transform transition-transform hover:scale-[1.02]">
                <div className="flex items-center justify-center mb-4">
                  <span className="bg-dragon/10 text-dragon rounded-full p-3 flex items-center justify-center w-14 h-14">
                    <feature.icon className="w-7 h-7" />
                  </span>
                </div>
                <h3 className="text-2xl font-academy text-dragon-dark mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-dragon-gray mb-4 text-center">
                  {feature.description}
                </p>
                <ul className="space-y-2 mb-2">
                  {feature.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <span className="bg-dragon/10 text-dragon rounded-full p-1 mr-2 flex items-center justify-center w-6 h-6 text-xs mt-1">
                        {pointIndex + 1}
                      </span>
                      <span className="text-dragon-dark">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Navigation dots - similar to testimonials */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center gap-2">
              {features.map((_, index) => (
                <button 
                  key={index} 
                  className={`w-3 h-3 rounded-full ${index === 0 ? 'bg-white' : 'bg-white/40'}`} 
                  aria-label={`Focus area ${index + 1}`} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolTripsFeatures;
