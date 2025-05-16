
import React, { useEffect, useState } from 'react';

const SplashScreen = () => {
  const [loadingText, setLoadingText] = useState('Loading');
  
  useEffect(() => {
    // Animated loading text
    const interval = setInterval(() => {
      setLoadingText((prev) => {
        if (prev === 'Loading...') return 'Loading';
        return prev + '.';
      });
    }, 500);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-dragon-beige">
      <div className="text-center px-6">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/565e314b-84ac-43fe-9891-afbf53053bd3.png" 
            alt="Kapes Adventures Logo" 
            className="w-24 h-24 mx-auto"
          />
        </div>
        <h1 className="text-3xl font-academy text-dragon-dark mb-2">Kapes Companion</h1>
        <p className="text-dragon-gray mb-6">Your Personal Travel Guide</p>
        <div className="text-sm text-dragon-dark mt-8">{loadingText}</div>
      </div>
    </div>
  );
};

export default SplashScreen;
