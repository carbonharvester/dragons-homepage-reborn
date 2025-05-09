
import React from 'react';
import FoodForEducationData from '../food-for-education/FoodForEducationData';
import EmpoweringWomenData from '../empowering-women/EmpoweringWomenData';
import CommunityConservationData from '../community-conservation/CommunityConservationData';

// Define a single interface that captures all common props
interface BrochureDataProps {
  heroOnly?: boolean;
  contentOnly?: boolean;
  navigationOnly?: boolean;
  customThumbnails?: Record<string, string>;
}

interface TripBrochureWrapperProps extends BrochureDataProps {
  tripType?: 'food-for-education' | 'empowering-women' | 'community-conservation';
}

const TripBrochureWrapper: React.FC<TripBrochureWrapperProps> = ({ 
  tripType = 'food-for-education',
  heroOnly = false,
  contentOnly = false,
  navigationOnly = false,
  customThumbnails
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
          customThumbnails={customThumbnails}
        />
      )}
      {tripType === 'empowering-women' && (
        <EmpoweringWomenData 
          heroOnly={heroOnly} 
          contentOnly={contentOnly}
          navigationOnly={navigationOnly}
          customThumbnails={customThumbnails}
        />
      )}
      {tripType === 'community-conservation' && (
        <CommunityConservationData 
          heroOnly={heroOnly} 
          contentOnly={contentOnly}
          navigationOnly={navigationOnly}
          customThumbnails={customThumbnails}
        />
      )}
    </div>
  );
};

export default TripBrochureWrapper;
