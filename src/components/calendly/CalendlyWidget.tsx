
import React from 'react';

interface CalendlyWidgetProps {
  url: string;
  isOpen: boolean;
  onLoadError: () => void;
  onLoadSuccess: () => void;
}

const CalendlyWidget = ({ 
  url, 
  isOpen, 
  onLoadError, 
  onLoadSuccess 
}: CalendlyWidgetProps) => {
  // Load the widget when the component mounts
  React.useEffect(() => {
    if (isOpen) {
      // The script loading is now handled via the inline script tag
      try {
        // Simulate a successful load since we're using the direct embed
        onLoadSuccess();
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
