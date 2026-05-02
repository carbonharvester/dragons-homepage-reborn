
import React from 'react';
import { Globe, Leaf, Users, GraduationCap } from "lucide-react";

const ProgramObjectives = () => {
  const objectives = [
    {
      icon: Leaf,
      title: "Permaculture Development",
      description: "Turn degraded land at schools across Kenya into productive farms."
    },
    {
      icon: GraduationCap,
      title: "Skill Building",
      description: "Gain hands-on experience in advanced permaculture techniques including water management, waste management, and climate smart agriculture while developing leadership skills."
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "Strengthen ties with Kenyan students and communities through collaborative projects, workshops, and cultural exchange that support local food security initiatives."
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Foster cross-cultural collaboration and understanding through immersive experiences in both urban and rural Kenyan communities."
    }
  ];

  return (
    <section className="py-16 bg-dragon-beige">
      <div className="container-wide">
        <h2 className="text-3xl md:text-4xl font-academy text-dragon-dark text-center mb-4">
          Program Objectives
        </h2>
        
        <p className="text-center text-dragon-gray max-w-3xl mx-auto mb-12">
          Our Feeding the Future program is designed to create lasting impact through sustainable agriculture 
          while providing students with transformative learning experiences.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {objectives.map((objective, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-dragon h-12 w-12 rounded-full flex items-center justify-center mb-4">
                <objective.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-dragon-dark mb-2">{objective.title}</h3>
              <p className="text-dragon-gray">{objective.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramObjectives;
