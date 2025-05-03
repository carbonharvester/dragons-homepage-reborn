
import React from 'react';
import { BookOpen } from 'lucide-react';

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
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <h2 className="text-3xl font-serif font-bold text-dragon-dark">Learning Outcomes</h2>
        <div className="flex items-center mt-4 md:mt-0">
          <BookOpen className="h-6 w-6 text-dragon mr-2" />
          <span className="text-dragon font-medium">Educational Value</span>
        </div>
      </div>
      
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
