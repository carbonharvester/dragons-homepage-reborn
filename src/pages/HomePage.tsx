
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Info, AlertTriangle, Check } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

// Mock data for development
const MOCK_TRIP = {
  id: 'TRIP001',
  title: 'Food For Education',
  status: 'active',
  location: 'Kenya, Africa',
  startDate: '2025-06-15',
  endDate: '2025-06-28',
  daysUntil: 22,
  progress: 0,
  checklistComplete: 4,
  checklistTotal: 12,
  alerts: [
    {
      id: 'alert1',
      type: 'warning',
      message: 'Complete your health form by June 1st'
    },
    {
      id: 'alert2',
      type: 'info',
      message: 'Group meeting scheduled for May 24th'
    }
  ],
  weatherForecast: {
    temperature: '24°C',
    condition: 'Sunny',
    humidity: '45%'
  }
};

const HomePage = () => {
  const navigate = useNavigate();
  const [trip, setTrip] = useState(MOCK_TRIP);
  const [countdown, setCountdown] = useState<string>('');
  
  useEffect(() => {
    // Calculate and format countdown
    const calculateCountdown = () => {
      const start = new Date(trip.startDate);
      const now = new Date();
      const diffTime = start.getTime() - now.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays < 0) {
        return 'Trip in progress';
      } else if (diffDays === 0) {
        return 'Trip starts today!';
      } else {
        return `${diffDays} days until departure`;
      }
    };
    
    setCountdown(calculateCountdown());
  }, [trip]);

  return (
    <div className="container px-4 pt-20 pb-24">
      {/* Trip overview card */}
      <Card className="rounded-xl overflow-hidden mb-6">
        <div className="bg-dragon p-4 text-white">
          <Badge className="bg-white text-dragon border-0 mb-2">
            Active Trip
          </Badge>
          <h2 className="text-2xl font-academy mb-1">{trip.title}</h2>
          <div className="flex items-center text-sm opacity-90">
            <MapPin size={14} className="mr-1" />
            <span>{trip.location}</span>
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center text-sm text-dragon-dark">
              <Calendar size={16} className="mr-2 text-dragon" />
              <span>{new Date(trip.startDate).toLocaleDateString()} - {new Date(trip.endDate).toLocaleDateString()}</span>
            </div>
          </div>
          
          <div className="mt-3">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium text-dragon">{countdown}</span>
              <span className="text-xs text-dragon-gray">Trip Preparation</span>
            </div>
            <Progress value={(trip.checklistComplete / trip.checklistTotal) * 100} className="h-2" />
            <div className="text-xs text-right mt-1 text-dragon-gray">
              {trip.checklistComplete}/{trip.checklistTotal} tasks completed
            </div>
          </div>
        </div>
      </Card>
      
      {/* Quick actions */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <button 
          onClick={() => navigate('/itinerary')}
          className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center"
        >
          <Calendar size={24} className="text-dragon mb-2" />
          <span className="text-sm font-medium">Itinerary</span>
        </button>
        
        <button 
          onClick={() => navigate('/resources')}
          className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center"
        >
          <Info size={24} className="text-dragon mb-2" />
          <span className="text-sm font-medium">Resources</span>
        </button>
      </div>
      
      {/* Alerts section */}
      <h3 className="text-lg font-academy mb-3 text-dragon-dark">Important Updates</h3>
      <div className="space-y-3 mb-6">
        {trip.alerts.map((alert) => (
          <div 
            key={alert.id} 
            className="bg-white p-3 rounded-lg shadow-sm flex items-start"
          >
            {alert.type === 'warning' ? (
              <AlertTriangle size={20} className="text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
            ) : (
              <Info size={20} className="text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
            )}
            <div>
              <p className="text-sm">{alert.message}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Pre-departure checklist summary */}
      <h3 className="text-lg font-academy mb-3 text-dragon-dark">Trip Preparation</h3>
      <Card className="p-3">
        <div className="flex justify-between items-center mb-3">
          <h4 className="font-medium">Pre-departure Checklist</h4>
          <Badge variant="outline" className="font-normal">
            {trip.checklistComplete}/{trip.checklistTotal}
          </Badge>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center">
            <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-3">
              <Check size={14} className="text-green-600" />
            </div>
            <span className="text-sm">Passport information updated</span>
          </div>
          <div className="flex items-center">
            <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-3">
              <Check size={14} className="text-green-600" />
            </div>
            <span className="text-sm">Emergency contacts provided</span>
          </div>
          <div className="flex items-center text-dragon-gray">
            <div className="h-5 w-5 rounded-full border border-gray-200 mr-3"></div>
            <span className="text-sm">Complete health questionnaire</span>
          </div>
          <div className="flex items-center text-dragon-gray">
            <div className="h-5 w-5 rounded-full border border-gray-200 mr-3"></div>
            <span className="text-sm">Review packing list</span>
          </div>
        </div>
        
        <button className="w-full text-dragon text-sm mt-4 font-medium">
          View full checklist
        </button>
      </Card>
    </div>
  );
};

export default HomePage;
