
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import { DollarSign, Users } from "lucide-react";

interface ProgramOverviewProps {
  programData: {
    title: string;
    description: string;
    duration: string;
    season: string;
    location: string;
    ages: string;
    goals: string[];
  };
}

const ProgramOverview = ({ programData }: ProgramOverviewProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-heading">Program Overview</h2>
          <p className="section-subheading">
            Kapes Creative Capture is designed for budding photographers and filmmakers who want to 
            develop their skills while exploring Kenya's natural wonders and diverse cultures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?q=80&w=2070&auto=format" 
              alt="Student photographer capturing wildlife in Kenya" 
              className="w-full h-[400px] object-cover rounded-lg shadow-md"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-dragon-dark mb-2">Program Highlights</h3>
              <ul className="space-y-3">
                {programData.goals.map((goal, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-dragon-beige rounded-full p-1 mr-2 mt-1"></span>
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-dragon-dark mb-2">Led by Experts</h3>
              <p className="text-dragon-gray">
                Learn from professional photographers and videographers with experience in wildlife, 
                landscapes, and cultural documentation. Receive personalized mentoring to develop your 
                unique creative vision and technical skills.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-dragon-dark mb-2">Community Impact</h3>
              <p className="text-dragon-gray">
                Your participation funds photography workshops for Kenyan youth, provides cameras to 
                local communities, and supports a community art exhibit in Nairobi. Make a lasting 
                difference while creating your portfolio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramOverview;
