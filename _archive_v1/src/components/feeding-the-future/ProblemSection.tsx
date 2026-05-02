import React from 'react';
import { problemData } from './data/problemData';

const ProblemSection: React.FC = () => {
  return (
    <section className="py-16 bg-sage-50">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dragon mb-4 font-academy">
              {problemData.title}
            </h2>
            <h3 className="text-xl text-dragon-dark mb-6 font-academy">
              {problemData.subtitle}
            </h3>
            <p className="text-lg text-dragon-gray leading-relaxed">
              {problemData.description}
            </p>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {problemData.statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-dragon mb-2 font-academy">
                  {stat.number}
                </div>
                <p className="text-dragon-gray">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

          {/* Key Issues */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-dragon mb-8 text-center font-academy">
              Key Challenges
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {problemData.keyIssues.map((issue, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-sage-200">
                  <h4 className="text-lg font-semibold text-dragon mb-3 font-academy">
                    {issue.title}
                  </h4>
                  <p className="text-dragon-gray leading-relaxed">
                    {issue.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Solution */}
          <div className="bg-dragon text-white p-8 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-4 font-academy">
              Our Solution
            </h3>
            <p className="text-lg leading-relaxed">
              {problemData.solution}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;