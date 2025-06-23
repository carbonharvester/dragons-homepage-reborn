
import React from 'react';
import TripDetails from './TripDetails';
import { TripDetail } from './TripBrochureContent';

interface TripOverviewProps {
  tripDetails: TripDetail[];
  description?: string[];
  projectGoals?: string[];
  perfectFor?: string | string[];
  isSchoolTrip?: boolean;
  pdfBrochureLink?: string;
}

const TripOverview: React.FC<TripOverviewProps> = ({ 
  tripDetails, 
  description = [], 
  projectGoals = [], 
  perfectFor,
  isSchoolTrip,
  pdfBrochureLink 
}) => {
  const renderPerfectFor = () => {
    if (!perfectFor) return null;
    
    const items = Array.isArray(perfectFor) ? perfectFor : [perfectFor];
    
    return (
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4 text-dragon-dark">Perfect For</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="container-wide">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-3xl font-academy mb-6 text-dragon-dark">Trip Overview</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                {description.map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))}
              </div>
            </div>
            
            {projectGoals.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-dragon-dark">Project Goals</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {projectGoals.map((goal, index) => (
                    <li key={index}>{goal}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {renderPerfectFor()}
          </div>
          
          {/* Trip Details Sidebar */}
          <TripDetails 
            tripDetails={tripDetails} 
            isSchoolTrip={isSchoolTrip}
            pdfBrochureLink={pdfBrochureLink}
          />
        </div>
      </div>
    </section>
  );
};

export default TripOverview;
