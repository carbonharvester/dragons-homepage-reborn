
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import AppHeader from '@/components/app/AppHeader';
import TabBar from '@/components/app/TabBar';
import SplashScreen from '@/pages/SplashScreen';
import AuthScreen from '@/pages/AuthScreen';
import HomePage from '@/pages/HomePage';
import ItineraryPage from '@/pages/ItineraryPage';
import ResourcesPage from '@/pages/ResourcesPage';
import ProfilePage from '@/pages/ProfilePage';
import NetworkStatus from '@/components/app/NetworkStatus';
import { useNetworkStatus } from '@/hooks/useNetworkStatus';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();
  const { isOnline } = useNetworkStatus();

  // Simulating app initialization
  useEffect(() => {
    // Check if user is authenticated (from local storage, etc.)
    const checkAuth = () => {
      const user = localStorage.getItem('user');
      setIsAuthenticated(!!user);
    };
    
    // Simulate loading resources
    setTimeout(() => {
      checkAuth();
      setIsLoading(false);
    }, 2000);
  }, []);

  // Decide whether to show tab bar based on route
  const shouldShowTabBar = () => {
    const noTabRoutes = ['/auth', '/splash'];
    return !noTabRoutes.some(route => location.pathname.startsWith(route));
  };

  // Show splash screen while loading
  if (isLoading) {
    return <SplashScreen />;
  }

  // Show authentication if not authenticated
  if (!isAuthenticated) {
    return (
      <>
        <AuthScreen onAuthenticate={() => setIsAuthenticated(true)} />
        <Sonner />
      </>
    );
  }

  return (
    <div className="app-container">
      <AppHeader />
      
      <main className="app-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/itinerary/*" element={<ItineraryPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </main>
      
      {shouldShowTabBar() && <TabBar />}
      {!isOnline && <NetworkStatus />}
      
      <Toaster />
      <Sonner />
    </div>
  );
};

export default App;
