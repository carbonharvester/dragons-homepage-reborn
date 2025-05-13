
import React from 'react';

interface TripLearningOutcomeProps {
  title: string;
  description: string;
}

interface TripLearningOutcomesProps {
  outcomes: TripLearningOutcomeProps[];
}

const TripLearningOutcomes = ({
  outcomes
}: TripLearningOutcomesProps) => {
  return (
    <div className="my-16">
      <h2 className="text-3xl font-academy mb-8 text-dragon-dark text-center">Learning Outcomes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {outcomes.map((outcome, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3 text-dragon">{outcome.title}</h3>
            <p className="text-gray-700">{outcome.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripLearningOutcomes;
