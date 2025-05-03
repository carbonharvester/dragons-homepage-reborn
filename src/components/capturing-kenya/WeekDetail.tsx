
import React from 'react';
import { Week } from './types';
import { Sunrise, Sun, Sunset } from "lucide-react";

interface WeekDetailProps {
  week: Week;
  expanded: boolean;
}

const WeekDetail = ({ week, expanded }: WeekDetailProps) => {
  if (!expanded) return null;

  return (
    <div className="p-6 bg-white">
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div>
          <img 
            src={week.image} 
            alt={`Week ${week.number}: ${week.title}`} 
            className="w-full h-60 object-cover rounded-lg"
          />
        </div>
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-lg text-dragon-dark mb-1 font-gothic uppercase tracking-wide">Week Overview</h4>
            <p className="text-dragon-gray">{week.description}</p>
          </div>
          <div>
            <h4 className="font-bold text-lg text-dragon-dark mb-1 font-gothic uppercase tracking-wide">Base Location</h4>
            <p className="text-dragon-gray">{week.base}</p>
          </div>
          <div>
            <h4 className="font-bold text-lg text-dragon-dark mb-1 font-gothic uppercase tracking-wide">Community Impact</h4>
            <p className="text-dragon-gray">{week.impact}</p>
          </div>
        </div>
      </div>
      
      <h4 className="font-bold text-lg text-dragon-dark mb-4 font-gothic uppercase tracking-wide">Week {week.number} Highlights</h4>
      <ul className="grid md:grid-cols-2 gap-3 mb-8">
        {week.highlights.map((highlight, index) => (
          <li key={index} className="flex items-center">
            <span className="bg-dragon-beige rounded-full p-1 mr-2"></span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
      
      <h4 className="font-bold text-lg text-dragon-dark mb-4 font-gothic uppercase tracking-wide">Daily Schedule</h4>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Day</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Title</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Activities</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {week.days.map((day) => (
              <tr key={day.day} className="hover:bg-gray-50">
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="bg-dragon-beige text-dragon font-medium rounded-full w-8 h-8 flex items-center justify-center">
                      {day.day}
                    </div>
                    {day.day === 1 || day.day === 8 || day.day === 15 || day.day === 22 ? 
                      <span className="ml-2 text-xs bg-blue-100 text-blue-800 rounded-full px-2 py-0.5">Start</span> : null
                    }
                    {day.day === 7 || day.day === 14 || day.day === 21 || day.day === 28 ? 
                      <span className="ml-2 text-xs bg-amber-100 text-amber-800 rounded-full px-2 py-0.5">Travel</span> : null
                    }
                  </div>
                </td>
                <td className="px-4 py-4 font-medium">
                  {day.title}
                </td>
                <td className="px-4 py-4">
                  <ul className="space-y-3">
                    {day.activities.map((activity, i) => {
                      // Parse the activity to extract time of day if present
                      const isMorning = activity.includes("Morning:");
                      const isAfternoon = activity.includes("Afternoon:");
                      const isEvening = activity.includes("Evening:");
                      
                      // Choose icon based on time of day
                      let Icon = null;
                      if (isMorning) Icon = Sunrise;
                      else if (isAfternoon) Icon = Sun;
                      else if (isEvening) Icon = Sunset;
                      
                      // Format activity text, removing time prefix if present
                      let activityText = activity;
                      if (isMorning) activityText = activity.replace("Morning:", "");
                      if (isAfternoon) activityText = activity.replace("Afternoon:", "");
                      if (isEvening) activityText = activity.replace("Evening:", "");
                      
                      return (
                        <li key={i} className="flex items-start gap-2">
                          {Icon ? (
                            <div className="bg-dragon-beige/50 rounded-full p-1 text-dragon shrink-0 mt-0.5">
                              <Icon className="h-3 w-3" />
                            </div>
                          ) : (
                            <div className="bg-dragon-beige/50 rounded-full w-2 h-2 shrink-0 mt-2"></div>
                          )}
                          <div className="text-sm">
                            {(isMorning || isAfternoon || isEvening) && (
                              <span className="font-medium">
                                {isMorning ? "Morning: " : isAfternoon ? "Afternoon: " : "Evening: "}
                              </span>
                            )}
                            {activityText}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WeekDetail;
