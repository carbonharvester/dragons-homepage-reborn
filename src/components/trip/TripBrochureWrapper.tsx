
import React from 'react';
import FoodForEducationData from '../food-for-education/FoodForEducationData';
import EmpoweringWomenData from '../empowering-women/EmpoweringWomenData';
import CommunityConservationData from '../community-conservation/CommunityConservationData';

interface TripBrochureWrapperProps {
  tripType?: 'food-for-education' | 'empowering-women' | 'community-conservation';
  heroOnly?: boolean;
  contentOnly?: boolean;
  navigationOnly?: boolean;
  isSchoolTrip?: boolean;
}

const TripBrochureWrapper: React.FC<TripBrochureWrapperProps> = ({ 
  tripType = 'food-for-education',
  heroOnly = false,
  contentOnly = false,
  navigationOnly = false,
  isSchoolTrip = true
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
          isSchoolTrip={isSchoolTrip}
        />
      )}
      {tripType === 'empowering-women' && (
        <EmpoweringWomenData 
          heroOnly={heroOnly} 
          contentOnly={contentOnly}
          navigationOnly={navigationOnly}
          isSchoolTrip={isSchoolTrip}
        />
      )}
      {tripType === 'community-conservation' && (
        <CommunityConservationData 
          heroOnly={heroOnly} 
          contentOnly={contentOnly}
          navigationOnly={navigationOnly}
          isSchoolTrip={isSchoolTrip}
        />
      )}
    </div>
  );
};

export default TripBrochureWrapper;
