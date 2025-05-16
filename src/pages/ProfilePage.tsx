
import React, { useState, useEffect } from 'react';
import { User, LogOut, Settings, Download, Clock, Bell } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { toast } from '@/hooks/use-toast';

interface UserProfile {
  name: string;
  email: string;
  photoUrl?: string;
  tripId: string;
}

const ProfilePage = () => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [offlineEnabled, setOfflineEnabled] = useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  
  useEffect(() => {
    // Load user from localStorage
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);
  
  const handleLogout = () => {
    localStorage.removeItem('user');
    // Force page reload to trigger authentication flow
    window.location.href = '/';
  };
  
  const toggleOfflineMode = () => {
    setOfflineEnabled(!offlineEnabled);
    toast({
      title: offlineEnabled ? "Offline mode disabled" : "Offline mode enabled",
      description: offlineEnabled 
        ? "App will now require internet connection for all features" 
        : "Trip data will be saved for offline access"
    });
  };
  
  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
    toast({
      title: notificationsEnabled ? "Notifications disabled" : "Notifications enabled",
      description: notificationsEnabled 
        ? "You won't receive push notifications" 
        : "You will receive important trip updates"
    });
  };
  
  if (!user) {
    return (
      <div className="container px-4 pt-20 pb-24 flex justify-center items-center">
        <p>Loading profile...</p>
      </div>
    );
  }
  
  return (
    <div className="container px-4 pt-20 pb-24">
      {/* Profile header */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6 text-center">
        <div className="mb-4">
          {user.photoUrl ? (
            <img 
              src={user.photoUrl} 
              alt={user.name} 
              className="w-20 h-20 rounded-full mx-auto border-2 border-dragon"
            />
          ) : (
            <div className="w-20 h-20 rounded-full bg-dragon-light text-white flex items-center justify-center mx-auto">
              <User size={32} />
            </div>
          )}
        </div>
        
        <h2 className="text-xl font-academy text-dragon-dark">{user.name}</h2>
        <p className="text-sm text-dragon-gray mb-2">{user.email}</p>
        <div className="inline-block bg-dragon-beige text-dragon-dark rounded-full px-3 py-1 text-xs">
          Trip ID: {user.tripId}
        </div>
      </div>
      
      {/* Settings section */}
      <h3 className="text-lg font-academy mb-3 text-dragon-dark">Settings</h3>
      <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center">
            <Download size={20} className="text-dragon mr-3" />
            <div>
              <p className="text-sm font-medium">Offline Mode</p>
              <p className="text-xs text-dragon-gray">Save trip data for offline access</p>
            </div>
          </div>
          <Switch 
            checked={offlineEnabled}
            onCheckedChange={toggleOfflineMode}
          />
        </div>
        
        <Separator />
        
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center">
            <Bell size={20} className="text-dragon mr-3" />
            <div>
              <p className="text-sm font-medium">Notifications</p>
              <p className="text-xs text-dragon-gray">Receive trip updates and alerts</p>
            </div>
          </div>
          <Switch 
            checked={notificationsEnabled}
            onCheckedChange={toggleNotifications}
          />
        </div>
      </div>
      
      {/* App info section */}
      <div className="mb-6 bg-white rounded-lg shadow-sm p-4">
        <h3 className="text-base font-medium mb-3">App Information</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-dragon-gray">Version</span>
            <span>1.0.0</span>
          </div>
          <div className="flex justify-between">
            <span className="text-dragon-gray">Last Updated</span>
            <span>May 16, 2025</span>
          </div>
          <div className="flex justify-between">
            <span className="text-dragon-gray">Terms of Service</span>
            <a href="#" className="text-dragon">View</a>
          </div>
          <div className="flex justify-between">
            <span className="text-dragon-gray">Privacy Policy</span>
            <a href="#" className="text-dragon">View</a>
          </div>
        </div>
      </div>
      
      {/* Logout button */}
      <button 
        onClick={handleLogout}
        className="w-full bg-white border border-red-300 text-red-600 rounded-md py-3 flex items-center justify-center"
      >
        <LogOut size={18} className="mr-2" />
        <span>Log Out</span>
      </button>
    </div>
  );
};

export default ProfilePage;
