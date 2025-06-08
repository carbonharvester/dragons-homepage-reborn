
import React from 'react';
import TripHighlights from '@/components/trip/TripHighlights';
import { Camera, Users, Mountain, Waves, Heart } from 'lucide-react';

const TripHighlightsWrapper = () => {
  // Updated highlights to match the new 3-week itinerary
  const tripHighlights = [
    {
      icon: (
        <div className="text-white">
          <Camera className="h-8 w-8" />
        </div>
      ),
      title: "Professional Photography Skills",
      description: "Learn advanced photography techniques from street photography in Nairobi to wildlife photography in national parks."
    },
    {
      icon: (
        <div className="text-white">
          <Users className="h-8 w-8" />
        </div>
      ),
      title: "Cultural Portrait Mastery",
      description: "Immerse yourself with the Samburu community, learning portrait photography and cultural storytelling through authentic experiences."
    },
    {
      icon: (
        <div className="text-white">
          <Mountain className="h-8 w-8" />
        </div>
      ),
      title: "Wildlife Photography Excellence",
      description: "Capture elephants against Mount Kilimanjaro in Amboseli and big cats in Tsavo, including unique hot air balloon perspectives."
    },
    {
      icon: (
        <div className="text-white">
          <Waves className="h-8 w-8" />
        </div>
      ),
      title: "Coastal & Marine Photography",
      description: "Document coastal life in Mombasa, underwater marine photography, and pristine beaches of Diani while exploring historic Old Town."
    },
    {
      icon: (
        <div className="text-white">
          <Heart className="h-8 w-8" />
        </div>
      ),
      title: "Portfolio Development",
      description: "Create a comprehensive portfolio showcasing diverse photography skills across urban, cultural, wildlife, and coastal environments."
    }
  ];

  return (
    <div className="mb-16 text-center flex flex-col items-center">
      <h2 className="text-3xl font-academy-bold mb-8 text-dragon-dark text-center hero-heading">Trip Highlights</h2>
      <TripHighlights highlights={tripHighlights} />
    </div>
  );
};

export default TripHighlightsWrapper;
