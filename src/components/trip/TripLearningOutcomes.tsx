
import React from 'react';

interface TripLearningOutcomesProps {
  outcomes: {
    title: string;
    description: string;
  }[];
}

const TripLearningOutcomes: React.FC<TripLearningOutcomesProps> = ({ outcomes }) => {
  if (!outcomes || outcomes.length === 0) {
    return null;
  }

  return (
    <div className="mb-16">
      <h2 className="text-3xl font-academy-bold mb-8 text-dragon-dark text-center hero-heading">Learning Outcomes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {outcomes.map((outcome, index) => (
          <div key={index} className="bg-dragon-beige p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-dragon-dark">{outcome.title}</h3>
            <p className="text-dragon-gray">{outcome.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripLearningOutcomes;
