
import React from 'react';

interface ItineraryIntroProps {
  title: string;
  description: string;
}

const ItineraryIntro = ({ title, description }: ItineraryIntroProps) => {
  return (
    <div className="max-w-3xl mx-auto mb-12">
      <h2 className="text-3xl font-bold text-dragon-dark mb-4 font-academy">{title}</h2>
      <p className="text-lg text-dragon-gray">{description}</p>
    </div>
  );
};

export default ItineraryIntro;
