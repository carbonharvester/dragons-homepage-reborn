
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const AppHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Determine if we should show back button
  const showBackButton = location.pathname !== '/';
  
  // Determine current page title
  const getPageTitle = () => {
    const path = location.pathname;
    if (path === '/') return 'My Trips';
    if (path.includes('/itinerary')) return 'Itinerary';
    if (path.includes('/resources')) return 'Resources';
    if (path.includes('/profile')) return 'Profile';
    return 'Kapes Companion';
  };
  
  return (
    <header className="app-header">
      <div className="flex items-center justify-between px-4 h-16">
        <div className="w-10">
          {showBackButton && (
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center justify-center h-10 w-10 text-dragon-dark"
              aria-label="Go back"
            >
              <ChevronLeft size={24} />
            </button>
          )}
        </div>
        
        <h1 className="text-lg font-academy text-dragon-dark">{getPageTitle()}</h1>
        
        <div className="w-10">
          {/* Right side placeholder for balance */}
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
