
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from 'react';

interface TripHighlightProps {
  icon: ReactNode;
  title: string;
  description: string;
}

interface TripHighlightsProps {
  highlights: TripHighlightProps[];
}

const TripHighlights = ({ highlights }: TripHighlightsProps) => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-academy-bold mb-8 text-dragon-dark text-center hero-heading">Trip Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {highlights.map((highlight, index) => (
          <Card key={index} className="border-none shadow-md h-full">
            <CardContent className="p-6">
              <div className="w-16 h-16 rounded-full bg-dragon flex items-center justify-center mb-4">
                {highlight.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-dragon-dark">{highlight.title}</h3>
              <p className="text-dragon-gray">{highlight.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TripHighlights;
