
import React from 'react';
import FoodForEducationData from '../food-for-education/FoodForEducationData';
import EmpoweringWomenData from '../empowering-women/EmpoweringWomenData';

interface TripBrochureWrapperProps {
  tripType?: 'food-for-education' | 'empowering-women';
  heroOnly?: boolean;
  contentOnly?: boolean;
}

const TripBrochureWrapper: React.FC<TripBrochureWrapperProps> = ({ 
  tripType = 'food-for-education',
  heroOnly = false,
  contentOnly = false
}) => {
  return (
    <div className="bg-white">
      {tripType === 'food-for-education' && (
        <FoodForEducationData heroOnly={heroOnly} contentOnly={contentOnly} />
      )}
      {tripType === 'empowering-women' && (
        <EmpoweringWomenData heroOnly={heroOnly} contentOnly={contentOnly} />
      )}
    </div>
  );
};

export default TripBrochureWrapper;
