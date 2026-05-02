
import React from 'react';
import { School, Users, GraduationCap } from 'lucide-react';

const ProgramStructureSection = () => {
  return (
    <section className="py-20 bg-dragon-beige">
      <div className="container-wide">
        <h2 className="section-heading text-center mb-16">Three-Year Program Structure</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex justify-center mb-6">
              <School className="h-16 w-16 text-dragon" />
            </div>
            <h3 className="text-2xl font-bold text-dragon-dark text-center mb-4">Year 1: Foundation</h3>
            <p className="text-lg text-center text-dragon-gray mb-4">Ages 11-13</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="bg-dragon-beige rounded-full p-1 mt-1 mr-3"></span>
                <span>Introduction to Kenya through cultural activities</span>
              </li>
              <li className="flex items-start">
                <span className="bg-dragon-beige rounded-full p-1 mt-1 mr-3"></span>
                <span>Guided wildlife conservation experiences</span>
              </li>
              <li className="flex items-start">
                <span className="bg-dragon-beige rounded-full p-1 mt-1 mr-3"></span>
                <span>Tree planting and environmental workshops</span>
              </li>
              <li className="flex items-start">
                <span className="bg-dragon-beige rounded-full p-1 mt-1 mr-3"></span>
                <span>Kapes Foundation Certificate</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex justify-center mb-6">
              <Users className="h-16 w-16 text-dragon" />
            </div>
            <h3 className="text-2xl font-bold text-dragon-dark text-center mb-4">Year 2: Development</h3>
            <p className="text-lg text-center text-dragon-gray mb-4">Ages 14-16</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="bg-dragon-beige rounded-full p-1 mt-1 mr-3"></span>
                <span>Community-based construction project</span>
              </li>
              <li className="flex items-start">
                <span className="bg-dragon-beige rounded-full p-1 mt-1 mr-3"></span>
                <span>Host family experience in Tanzania</span>
              </li>
              <li className="flex items-start">
                <span className="bg-dragon-beige rounded-full p-1 mt-1 mr-3"></span>
                <span>Leadership and teamwork challenges</span>
              </li>
              <li className="flex items-start">
                <span className="bg-dragon-beige rounded-full p-1 mt-1 mr-3"></span>
                <span>Kapes Development Certificate</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex justify-center mb-6">
              <GraduationCap className="h-16 w-16 text-dragon" />
            </div>
            <h3 className="text-2xl font-bold text-dragon-dark text-center mb-4">Year 3: Leadership</h3>
            <p className="text-lg text-center text-dragon-gray mb-4">Ages 17-18</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="bg-dragon-beige rounded-full p-1 mt-1 mr-3"></span>
                <span>Student-designed and led health workshop</span>
              </li>
              <li className="flex items-start">
                <span className="bg-dragon-beige rounded-full p-1 mt-1 mr-3"></span>
                <span>Cross-cultural leadership experience in Ghana</span>
              </li>
              <li className="flex items-start">
                <span className="bg-dragon-beige rounded-full p-1 mt-1 mr-3"></span>
                <span>Advanced project planning and execution</span>
              </li>
              <li className="flex items-start">
                <span className="bg-dragon-beige rounded-full p-1 mt-1 mr-3"></span>
                <span>Kapes Leadership Certificate & Gold Award</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramStructureSection;
