
import React from 'react';
import FoodForEducationData from '../food-for-education/FoodForEducationData';
import EmpoweringWomenData from '../empowering-women/EmpoweringWomenData';

interface TripBrochureWrapperProps {
  tripType?: 'food-for-education' | 'empowering-women';
  heroOnly?: boolean;
  contentOnly?: boolean;
  navigationOnly?: boolean;
}

const TripBrochureWrapper: React.FC<TripBrochureWrapperProps> = ({ 
  tripType = 'food-for-education',
  heroOnly = false,
  contentOnly = false,
  navigationOnly = false
}) => {
  // Remove wrapper padding when showing content only
  const wrapperClass = contentOnly ? "bg-white pt-0" : "bg-white";
  
  return (
    <div className={wrapperClass}>
      {tripType === 'food-for-education' && (
        <FoodForEducationData 
          heroOnly={heroOnly} 
          contentOnly={contentOnly}
          navigationOnly={navigationOnly} 
        />
      )}
      {tripType === 'empowering-women' && (
        <EmpoweringWomenData 
          heroOnly={heroOnly} 
          contentOnly={contentOnly}
          navigationOnly={navigationOnly}
        />
      )}
    </div>
  );
};

export default TripBrochureWrapper;
