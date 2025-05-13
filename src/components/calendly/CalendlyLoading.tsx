
import React from 'react';

const CalendlyLoading = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-t-transparent border-dragon rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-dragon-gray">Loading calendar...</p>
      </div>
    </div>
  );
};

export default CalendlyLoading;
