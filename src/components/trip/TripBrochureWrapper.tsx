
import React from 'react';
import FoodForEducationData from '../food-for-education/FoodForEducationData';
import EmpoweringWomenData from '../empowering-women/EmpoweringWomenData';

interface TripBrochureWrapperProps {
  tripType?: 'food-for-education' | 'empowering-women';
}

const TripBrochureWrapper: React.FC<TripBrochureWrapperProps> = ({ tripType = 'food-for-education' }) => {
  return (
    <div className="bg-white">
      {tripType === 'food-for-education' && <FoodForEducationData />}
      {tripType === 'empowering-women' && <EmpoweringWomenData />}
    </div>
  );
};

export default TripBrochureWrapper;
