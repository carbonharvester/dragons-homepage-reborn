
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, ChevronDown } from "lucide-react";
import CalendlyEmbed from "@/components/CalendlyEmbed";

interface Week {
  number: number;
  title: string;
  subtitle: string;
  description: string;
  base: string;
  impact: string;
  image: string;
  highlights: string[];
  days: {
    day: number;
    title: string;
    activities: string[];
  }[];
}

interface ProgramItineraryProps {
  weeks: Week[];
}

const ProgramItinerary = ({ weeks = [] }: ProgramItineraryProps) => {
  // State for expanded day details
  const [expandedDays, setExpandedDays] = useState<Record<string, boolean>>({});

  // Toggle day details
  const toggleDayDetails = (dayId: string) => {
    setExpandedDays(prev => ({
      ...prev,
      [dayId]: !prev[dayId]
    }));
  };

  // Defensive check to ensure weeks is an array and limit to 3 weeks
  const safeWeeks = Array.isArray(weeks) ? weeks.slice(0, 3) : [];

  return (
    <section id="itinerary" className="py-16 bg-dragon-beige">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-heading">Program Itinerary</h2>
          <p className="section-subheading">
            Journey through Kenya over three weeks, capturing stunning landscapes, wildlife, and cultural moments 
            while developing your photography and videography skills.
          </p>
        </div>

        {safeWeeks.length > 0 ? (
          <Tabs defaultValue={`week${safeWeeks[0]?.number || 1}`} className="w-full">
            <TabsList className="grid grid-cols-3 w-full max-w-2xl mx-auto mb-12 h-auto p-2 bg-white/50 backdrop-blur-sm border border-dragon/10">
              {safeWeeks.map((week) => (
                <TabsTrigger 
                  key={week.number} 
                  value={`week${week.number}`} 
                  className="flex items-center justify-center py-4 px-3 text-center data-[state=active]:bg-dragon data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-200 rounded-lg"
                >
                  <span className="font-bold text-sm">Week {week.number}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {safeWeeks.map((week) => (
              <TabsContent key={week.number} value={`week${week.number}`} className="mt-0">
                <Card className="border-none shadow-md overflow-hidden">
                  <div className="grid md:grid-cols-2">
                    <div className="h-80 md:h-auto overflow-hidden">
                      <img 
                        src={week.number === 1 ? "https://res.cloudinary.com/dng12bd0a/image/upload/v1749400855/KleinNettoh--8_1_gtxyvk.jpg" : week.image} 
                        alt={`Week ${week.number}: ${week.title}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6 md:p-8">
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-dragon-dark mb-1">
                          Week {week.number}: {week.number === 3 ? week.title.replace('Coastal & Marine Photography', 'Coastal Photography') : week.title}
                        </h3>
                        <p className="text-dragon mb-3">{week.number === 3 ? week.subtitle.replace('Coastal and Marine Photography Excellence', 'Coastal Photography Excellence') : week.subtitle}</p>
                        <p className="text-dragon-gray mb-4">{week.description}</p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex gap-2">
                          <Clock className="h-5 w-5 text-dragon shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium">Base Location:</p>
                            <p className="text-dragon-gray">{week.base}</p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6">
                        <h4 className="font-bold mb-3">Week Highlights:</h4>
                        <ul className="space-y-2">
                          {week.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-center">
                              <span className="bg-dragon rounded-full p-1 mr-2"></span>
                              <span className="text-sm">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mt-6">
                        <Button 
                          variant="outline" 
                          className="w-full flex justify-between items-center border-dragon text-dragon"
                          asChild
                        >
                          <Link to="/programs/capturing-kenya/itinerary">
                            <span>View Detailed Daily Itinerary</span>
                            <ChevronDown className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        ) : (
          <div className="text-center bg-white p-8 rounded-lg shadow-sm">
            <p className="text-dragon-gray">Itinerary details coming soon...</p>
          </div>
        )}
        
        <div className="mt-8 text-center">
          <p className="text-dragon-gray mb-4">
            Ready to embark on this creative journey? Apply Here
          </p>
          <div className="flex justify-center">
            <CalendlyEmbed 
              url="https://calendly.com/kapesuniforms/discoverymeeting"
              text="Apply Now"
              className="btn-primary"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramItinerary;
