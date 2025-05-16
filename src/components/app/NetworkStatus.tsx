
import React, { useState, useEffect } from 'react';
import { Wifi, WifiOff } from 'lucide-react';

const NetworkStatus = () => {
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    // Auto-hide after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (!isVisible) return null;
  
  return (
    <div className="fixed bottom-20 left-0 right-0 mx-auto w-11/12 max-w-sm bg-white rounded-md shadow-lg p-3 flex items-center gap-3 border border-amber-200 animate-fade-in">
      <div className="bg-amber-100 rounded-full p-2">
        <WifiOff size={18} className="text-amber-700" />
      </div>
      <div className="flex-grow">
        <h4 className="text-sm font-medium">You're offline</h4>
        <p className="text-xs text-gray-500">Some features may be limited</p>
      </div>
      <button 
        onClick={() => setIsVisible(false)} 
        className="text-dragon p-1"
        aria-label="Dismiss"
      >
        &times;
      </button>
    </div>
  );
};

export default NetworkStatus;
