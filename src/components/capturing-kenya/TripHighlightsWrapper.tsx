
import React from 'react';
import TripHighlights from '@/components/trip/TripHighlights';
import { Camera, Globe, BookOpen, Mountain, Users } from 'lucide-react';

const TripHighlightsWrapper = () => {
  // Define the highlights with icons
  const tripHighlights = [
    {
      icon: (
        <div className="text-white">
          <Camera className="h-8 w-8" />
        </div>
      ),
      title: "Professional Photography Skills",
      description: "Learn advanced photography techniques from professional photographers while documenting Kenya's spectacular wildlife and landscapes."
    },
    {
      icon: (
        <div className="text-white">
          <Globe className="h-8 w-8" />
        </div>
      ),
      title: "Conservation Photography",
      description: "Contribute to real conservation efforts by creating visual resources that help document and protect Kenya's wildlife."
    },
    {
      icon: (
        <div className="text-white">
          <BookOpen className="h-8 w-8" />
        </div>
      ),
      title: "Portfolio Development",
      description: "Build a professional photography portfolio that showcases your skills and can be used for college applications or professional purposes."
    },
    {
      icon: (
        <div className="text-white">
          <Mountain className="h-8 w-8" />
        </div>
      ),
      title: "Diverse Environments",
      description: "Experience a variety of landscapes from the Maasai Mara savanna to the foothills of Mount Kenya, capturing diverse ecosystems."
    },
    {
      icon: (
        <div className="text-white">
          <Users className="h-8 w-8" />
        </div>
      ),
      title: "Cultural Immersion",
      description: "Engage with local communities and document their traditions, creating meaningful cultural connections through visual storytelling."
    }
  ];

  return (
    <div className="mb-16 text-center flex flex-col items-center">
      <h2 className="text-3xl font-academy mb-8 text-dragon-dark text-center">Trip Highlights</h2>
      <TripHighlights highlights={tripHighlights} />
    </div>
  );
};

export default TripHighlightsWrapper;
