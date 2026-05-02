
import React from 'react';

const CalendlyLoading = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-50 rounded-md">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-t-transparent border-dragon rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-dragon-gray font-medium">Loading your calendar...</p>
        <p className="text-sm text-gray-500 mt-2">This may take a moment</p>
      </div>
    </div>
  );
};

export default CalendlyLoading;
