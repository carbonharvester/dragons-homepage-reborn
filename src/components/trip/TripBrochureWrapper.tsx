
import React from 'react';
import Seeds2EducationData from '../seeds2education/Seeds2EducationData';
import EmpoweringWomenData from '../empowering-women/EmpoweringWomenData';
import CommunityConservationData from '../community-conservation/CommunityConservationData';
import FeedingTheFutureData from '../feeding-the-future/FeedingTheFutureData';
import CapturingKenyaData from '../capturing-kenya/CapturingKenyaData';
import EducationalLeadershipData from '../educational-leadership/EducationalLeadershipData';

// Define a single interface that captures all common props
interface BrochureDataProps {
  heroOnly?: boolean;
  contentOnly?: boolean;
  navigationOnly?: boolean;
  customThumbnails?: Record<string, string>;
}

interface TripBrochureWrapperProps extends BrochureDataProps {
  tripType?: 'seeds2education' | 'empowering-women' | 'community-conservation' | 'feeding-the-future' | 'capturing-kenya' | 'educational-leadership';
}

const TripBrochureWrapper: React.FC<TripBrochureWrapperProps> = ({
  tripType = 'seeds2education',
  heroOnly = false,
  contentOnly = false,
  navigationOnly = false,
  customThumbnails
}) => {
  // Remove wrapper padding when showing content only
  const wrapperClass = contentOnly ? "bg-white pt-0" : "bg-white";
  
  return (
    <div className={wrapperClass}>
      {tripType === 'seeds2education' && (
        <Seeds2EducationData
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
      {tripType === 'feeding-the-future' && (
        <FeedingTheFutureData 
          heroOnly={heroOnly} 
          contentOnly={contentOnly}
          navigationOnly={navigationOnly}
          customThumbnails={customThumbnails}
        />
      )}
      {tripType === 'capturing-kenya' && (
        <CapturingKenyaData 
          heroOnly={heroOnly} 
          contentOnly={contentOnly}
          navigationOnly={navigationOnly}
          customThumbnails={customThumbnails}
        />
      )}
      {tripType === 'educational-leadership' && (
        <EducationalLeadershipData 
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
