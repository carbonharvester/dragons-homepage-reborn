
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ChevronDown, ChevronRight, Calendar, MapPin, Clock, User } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

// Mock itinerary data
const MOCK_ITINERARY = [
  {
    day: 1,
    date: '2025-06-15',
    title: 'Arrival Day',
    description: 'Arrival in Nairobi, airport pickup and orientation.',
    activities: [
      {
        time: '14:00',
        title: 'Airport Pickup',
        location: 'Jomo Kenyatta International Airport',
        duration: '1 hour',
        description: 'Meet your trip leader at the international arrivals area.'
      },
      {
        time: '16:30',
        title: 'Check-in & Rest',
        location: 'Wildebeest Eco Camp',
        duration: '2 hours',
        description: 'Check in to accommodations and rest after the long flight.'
      },
      {
        time: '19:00',
        title: 'Welcome Dinner',
        location: 'Camp Restaurant',
        duration: '2 hours',
        description: 'Group welcome dinner and program orientation.'
      }
    ]
  },
  {
    day: 2,
    date: '2025-06-16',
    title: 'Nairobi Exploration',
    description: 'Introduction to Kenyan culture and history.',
    activities: [
      {
        time: '08:00',
        title: 'Breakfast',
        location: 'Camp Restaurant',
        duration: '1 hour',
        description: 'Group breakfast and day briefing.'
      },
      {
        time: '09:30',
        title: 'Nairobi National Museum',
        location: 'Museum Hill',
        duration: '3 hours',
        description: 'Guided tour of Kenyan culture and history.'
      },
      {
        time: '13:00',
        title: 'Lunch',
        location: 'Tamambo Karen Blixen',
        duration: '1.5 hours',
        description: 'Group lunch at historic Karen Blixen estate.'
      },
      {
        time: '15:00',
        title: 'Giraffe Centre',
        location: 'Karen',
        duration: '2 hours',
        description: 'Learn about and feed the endangered Rothschild Giraffes.'
      }
    ]
  },
  {
    day: 3,
    date: '2025-06-17',
    title: 'Community Project Day 1',
    description: 'Introduction to our partnered school and educational projects.',
    activities: [
      {
        time: '08:00',
        title: 'Breakfast',
        location: 'Camp Restaurant',
        duration: '1 hour',
        description: 'Group breakfast and project briefing.'
      },
      {
        time: '09:30',
        title: 'School Visit',
        location: 'Embakasi Community School',
        duration: '5 hours',
        description: 'Introduction to the school, teachers and students. Initial assessment of food program needs.'
      }
    ]
  }
];

const ItineraryOverview = () => {
  return (
    <div className="container px-4 pt-20 pb-24">
      <div className="mb-6">
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h2 className="text-xl font-academy text-dragon-dark mb-2">Food For Education</h2>
          <p className="text-sm text-dragon-gray mb-4">June 15-28, 2025 • Kenya</p>
          <div className="flex items-center text-sm mb-2">
            <User size={16} className="text-dragon mr-2" />
            <span>Trip Leader: Sarah Johnson</span>
          </div>
          <div className="flex items-center text-sm">
            <Calendar size={16} className="text-dragon mr-2" />
            <span>14 days total</span>
          </div>
        </div>
      </div>
      
      <h3 className="text-lg font-academy mb-3 text-dragon-dark">Daily Schedule</h3>
      
      <Accordion type="single" collapsible className="space-y-3">
        {MOCK_ITINERARY.map((day) => (
          <AccordionItem 
            key={day.day} 
            value={`day-${day.day}`}
            className="bg-white rounded-lg shadow-sm border-none"
          >
            <AccordionTrigger className="px-4 py-3 hover:no-underline">
              <div className="flex items-start">
                <div className="bg-dragon rounded-lg h-10 w-10 flex items-center justify-center text-white mr-3 flex-shrink-0">
                  <span className="font-medium">D{day.day}</span>
                </div>
                <div className="text-left">
                  <h4 className="font-medium text-dragon-dark text-base">{day.title}</h4>
                  <p className="text-xs text-dragon-gray">{new Date(day.date).toLocaleDateString()}</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
              <p className="text-sm mb-4 text-dragon-gray">{day.description}</p>
              
              <div className="space-y-3 mt-2">
                {day.activities.map((activity, idx) => (
                  <div key={idx} className="border-l-2 border-dragon-light pl-4 py-1">
                    <div className="flex items-center text-sm font-medium mb-1">
                      <Clock size={14} className="mr-2 text-dragon" />
                      <span>{activity.time}</span>
                      <span className="mx-2">•</span>
                      <span className="text-dragon-dark">{activity.title}</span>
                    </div>
                    <div className="flex items-center text-xs text-dragon-gray mb-1">
                      <MapPin size={12} className="mr-1" />
                      <span>{activity.location}</span>
                      <span className="mx-2">•</span>
                      <span>{activity.duration}</span>
                    </div>
                    <p className="text-xs text-dragon-gray">{activity.description}</p>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

const ItineraryPage = () => {
  return (
    <Routes>
      <Route path="/" element={<ItineraryOverview />} />
      {/* Additional routes can be added here */}
      {/* <Route path="/day/:dayId" element={<ItineraryDayDetail />} /> */}
      {/* <Route path="/map" element={<ItineraryMap />} /> */}
    </Routes>
  );
};

export default ItineraryPage;
