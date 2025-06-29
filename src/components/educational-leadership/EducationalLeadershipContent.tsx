
import React from 'react';
import TripHero from '../trip/TripHero';
import ParentPageNavigation from '../navigation/ParentPageNavigation';
import { 
  tripDetails,
  tripHighlights,
  galleryImages,
  learningOutcomes,
  tripItinerary,
  programData,
  detailsPerfectFor as perfectFor
} from './data';
import TripBrochureContent from '../trip/TripBrochureContent';
import { Button } from '../ui/button';
import { CalendarIcon } from 'lucide-react';
import WaitingListForm from '../WaitingListForm';

const EducationalLeadershipContent = () => {
  // Create updated description and goals based on the itinerary
  const description = [
    "Our Educational Leadership program is an immersive 10-day professional development journey for teachers of environmental science, sustainability, geography, and related disciplines. Starting in Nairobi and traversing through Voi, Maungu, and Tsavo East, educators experience first-hand the impact of student-led projects in Kenyan communities.",
    "Participants will engage with organisations tackling food and water insecurity, deforestation, and local community groups while experiencing the same transformative activities that students engage in through Kapes programs. From sustainable gardens and water harvesting systems to conservation initiatives and cultural exchanges, this program bridges classroom theory with authentic global experiences."
  ];
  
  const projectGoals = [
    "Experience student-initiated projects at a number of schools and learn more about food security's role in education",
    "Develop practical conservation skills through hands-on activities with permaculture and agroforestry team experts",
    "Engage with local women's groups and understand gender empowerment through cultural exchange",
    "Learn field-based teaching strategies for environmental education through guided hikes and wildlife observation",
    "Connect classroom curriculum to water access challenges through community experiences and water walks"
  ];

  // Convert Lucide icons to JSX elements
  const processedHighlights = tripHighlights.map(highlight => ({
    ...highlight,
    icon: (
      <div className="text-white">
        <highlight.icon className="h-8 w-8" />
      </div>
    )
  }));

  return (
    <>
      {/* Hero Section */}
      <TripHero 
        title="Educational Leadership"
        subtitle="An immersive professional development program for educators. Experience Kenya's diverse ecosystems and learn how student-led projects create lasting impact."
        category="Educator Trip"
        imagePath="https://res.cloudinary.com/dng12bd0a/image/upload/v1747130203/IMG_0252_gstfij.jpg"
      />
      
      {/* Main Content */}
      <div className="bg-white">
        <div className="container-wide py-4">
          <ParentPageNavigation parentPath="/educator-trips" parentName="Educator Trips" />
        </div>
        
        {/* Join Waiting List Button */}
        <div className="container mb-8">
          <div className="flex justify-center">
            <WaitingListForm>
              <Button className="bg-dragon hover:bg-dragon-dark text-white px-8 py-6 text-lg flex items-center gap-2">
                <CalendarIcon className="h-5 w-5" /> Join Waiting List
              </Button>
            </WaitingListForm>
          </div>
        </div>
        
        <div className="container py-[6px]">
          <TripBrochureContent 
            tripDetails={tripDetails}
            tripHighlights={processedHighlights}
            galleryImages={galleryImages}
            learningOutcomes={learningOutcomes}
            tripItinerary={tripItinerary}
            programData={programData}
            perfectFor={perfectFor}
            isEducatorTrip={true}
            description={description}
            projectGoals={projectGoals}
          />
        </div>
      </div>
    </>
  );
};

export default EducationalLeadershipContent;
