
import React from 'react';
import { Calendar, Users, MapPin, DollarSign } from "lucide-react";
import { programData } from './ProgramData';

const ProgramSummary = () => {
  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Program Details */}
          <div>
            <h2 className="text-2xl font-academy text-dragon-dark mb-6">Program Overview</h2>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 bg-dragon-beige px-3 py-2 rounded-full">
                <Calendar className="h-5 w-5 text-dragon" />
                <span>4 Weeks</span>
              </div>
              <div className="flex items-center gap-2 bg-dragon-beige px-3 py-2 rounded-full">
                <Users className="h-5 w-5 text-dragon" />
                <span>Ages {programData.ages}</span>
              </div>
              <div className="flex items-center gap-2 bg-dragon-beige px-3 py-2 rounded-full">
                <MapPin className="h-5 w-5 text-dragon" />
                <span>{programData.location}</span>
              </div>
            </div>
            
            <p className="text-dragon-gray mb-6">
              Our Feeding the Future program is designed for students passionate about sustainable agriculture
              and food security. This immersive experience takes you across Kenya to learn from farmers, 
              conservation experts, and community leaders.
            </p>
            
            <ul className="list-disc pl-5 text-dragon-gray space-y-2">
              {programData.goals.map((goal, index) => (
                <li key={index}>{goal}</li>
              ))}
            </ul>
          </div>
          
          {/* Group Size and Tuition */}
          <div className="bg-dragon-beige rounded-lg p-8">
            <h3 className="text-2xl font-academy text-dragon-dark mb-6">Program Details</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 border-b border-dragon-sand pb-4">
                <Users className="h-6 w-6 text-dragon mt-1" />
                <div>
                  <h4 className="font-bold text-dragon-dark">Group Size</h4>
                  <p className="text-dragon-gray">12 Students / 3 Instructors</p>
                  <p className="text-sm text-dragon-gray mt-1">Small groups ensure personalized attention and deeper impact</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 border-b border-dragon-sand pb-4">
                <DollarSign className="h-6 w-6 text-dragon mt-1" />
                <div>
                  <h4 className="font-bold text-dragon-dark">Tuition</h4>
                  <p className="text-dragon-gray">$7,950</p>
                  <p className="text-sm text-dragon-gray mt-1">Plus airfare & insurance. Need-based scholarships available.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Calendar className="h-6 w-6 text-dragon mt-1" />
                <div>
                  <h4 className="font-bold text-dragon-dark">Season</h4>
                  <p className="text-dragon-gray">{programData.season}</p>
                  <p className="text-sm text-dragon-gray mt-1">Applications open now for the upcoming season</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSummary;
