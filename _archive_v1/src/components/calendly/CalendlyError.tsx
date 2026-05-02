
import React from 'react';
import { Button } from "@/components/ui/button";

interface CalendlyErrorProps {
  onRetry: () => void;
}

const CalendlyError = ({ onRetry }: CalendlyErrorProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <p className="text-lg font-medium text-red-600">Unable to load calendar</p>
      <p className="text-sm text-gray-600 mt-2">Please try again or contact us directly:</p>
      <a 
        href="mailto:info@kapes.org" 
        className="text-dragon hover:underline mt-2"
      >
        info@kapes.org
      </a>
      <Button 
        onClick={onRetry}
        className="mt-4 bg-dragon hover:bg-dragon-dark text-white"
      >
        Try Again
      </Button>
    </div>
  );
};

export default CalendlyError;
