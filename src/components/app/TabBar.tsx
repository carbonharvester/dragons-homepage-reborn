
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Home, Calendar, BookOpen, User } from 'lucide-react';

const TabBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  
  const tabs = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Calendar, label: 'Itinerary', path: '/itinerary' },
    { icon: BookOpen, label: 'Resources', path: '/resources' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];
  
  return (
    <footer className="app-footer">
      <nav className="tab-bar">
        {tabs.map((tab) => {
          const isActive = currentPath === tab.path || 
                          (tab.path !== '/' && currentPath.startsWith(tab.path));
          return (
            <button 
              key={tab.path}
              onClick={() => navigate(tab.path)}
              className={`tab-item ${isActive ? 'tab-active' : ''}`}
              aria-label={tab.label}
            >
              <tab.icon className="tab-icon" size={20} />
              <span className="tab-text">{tab.label}</span>
            </button>
          );
        })}
      </nav>
    </footer>
  );
};

export default TabBar;
