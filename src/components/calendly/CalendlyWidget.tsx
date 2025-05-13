
import React, { useEffect } from 'react';

interface CalendlyWidgetProps {
  url: string;
  isOpen: boolean;
  onLoadError?: () => void;
  onLoadSuccess?: () => void;
}

const CalendlyWidget = ({ 
  url, 
  isOpen, 
  onLoadError = () => {}, 
  onLoadSuccess = () => {} 
}: CalendlyWidgetProps) => {
  // Load the widget when the component mounts
  useEffect(() => {
    if (isOpen) {
      try {
        // Check if Calendly is loaded globally
        if (window.Calendly) {
          onLoadSuccess();
        } else {
          console.warn("Calendly not found in window object");
          onLoadError();
        }
      } catch (error) {
        console.error('Error initializing Calendly widget:', error);
        onLoadError();
      }
    }
  }, [isOpen, url, onLoadError, onLoadSuccess]);

  return (
    <div 
      className="calendly-inline-widget w-full h-full"
      data-url={`${url}?hide_event_type_details=1&hide_gdpr_banner=1`}
    />
  );
};

export default CalendlyWidget;
