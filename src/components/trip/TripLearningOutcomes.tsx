
import React from 'react';

interface TripLearningOutcomeProps {
  title: string;
  description: string;
}

interface TripLearningOutcomesProps {
  outcomes: TripLearningOutcomeProps[];
}

const TripLearningOutcomes = ({ outcomes }: TripLearningOutcomesProps) => {
  return (
    <div className="mb-16 bg-dragon-beige p-8 md:p-12 rounded-lg">
      <h2 className="text-3xl font-academy-bold mb-8 text-dragon-dark text-center hero-heading">Learning Outcomes</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {outcomes.map((outcome, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold mb-2 text-dragon-dark">{outcome.title}</h3>
            <p className="text-dragon-gray">{outcome.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripLearningOutcomes;
