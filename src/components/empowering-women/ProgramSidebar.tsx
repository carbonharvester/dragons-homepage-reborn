
import React from 'react';
import { Users, GraduationCap, Award, Heart, Calendar, Route, Map } from 'lucide-react';
import TripDetailsCard from '@/components/trip/TripDetails';
import { tripDetails } from './ProgramData';

const ProgramSidebar = () => {
  // Add icons to tripDetails
  const detailsWithIcons = tripDetails.map((detail, index) => {
    let icon;
    switch(index) {
      case 0:
        icon = <Calendar className="w-5 h-5 text-dragon" />;
        break;
      case 1:
        icon = <Route className="w-5 h-5 text-dragon" />;
        break;
      case 2:
        icon = <Map className="w-5 h-5 text-dragon" />;
        break;
      case 3:
        icon = <Users className="w-5 h-5 text-dragon" />;
        break;
      case 4:
        icon = <GraduationCap className="w-5 h-5 text-dragon" />;
        break;
      case 5:
        icon = <Award className="w-5 h-5 text-dragon" />;
        break;
      default:
        icon = null;
    }
    return { ...detail, icon };
  });

  return (
    <div className="lg:w-1/3">
      <TripDetailsCard tripDetails={detailsWithIcons} isSchoolTrip={true} />

      <div className="bg-dragon-beige p-8 rounded-lg shadow-md mt-8">
        <h3 className="text-xl font-bold text-dragon-dark mb-4">Perfect For</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <div className="bg-dragon rounded-full p-1 mt-1">
              <Users className="h-4 w-4 text-white" />
            </div>
            <span>Students ages 14-18 interested in global citizenship</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="bg-dragon rounded-full p-1 mt-1">
              <GraduationCap className="h-4 w-4 text-white" />
            </div>
            <span>Year 2 of the Kapes Multi-Year Travel Curriculum (Development Trip)</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="bg-dragon rounded-full p-1 mt-1">
              <Award className="h-4 w-4 text-white" />
            </div>
            <span>IB students seeking meaningful CAS experiences</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="bg-dragon rounded-full p-1 mt-1">
              <Heart className="h-4 w-4 text-white" />
            </div>
            <span>Schools focused on social entrepreneurship and gender equity</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProgramSidebar;
