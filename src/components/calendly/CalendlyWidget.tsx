
import React, { useRef, useEffect } from 'react';
import calendlyLoader from '@/utils/calendlyLoader';
import { toast } from "@/components/ui/use-toast";

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
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    
    calendlyLoader()
      .then(() => {
        if (window.Calendly && isOpen && calendarRef.current) {
          // Short timeout to allow dialog animation to complete
          setTimeout(() => {
            try {
              window.Calendly.initInlineWidget({
                url: `${url}?hide_event_type_details=1&hide_gdpr_banner=1&background_color=f8f8f8&primary_color=0d5533`,
                parentElement: calendarRef.current,
                prefill: {},
                utm: {}
              });
              onLoadSuccess();
            } catch (error) {
              console.error('Error initializing Calendly widget:', error);
              onLoadError();
              toast({
                title: "Error loading calendar",
                description: "Please try again or contact us directly.",
                variant: "destructive"
              });
            }
          }, 300);
        }
      })
      .catch(err => {
        console.error('Failed to load Calendly script:', err);
        onLoadError();
        toast({
          title: "Calendar service unavailable",
          description: "Please try again later or contact us directly.",
          variant: "destructive"
        });
      });
      
    // Cleanup function when dialog closes
    return () => {
      if (!isOpen && calendarRef.current) {
        // Clean up any event listeners or unnecessary DOM elements
        calendarRef.current.innerHTML = '';
      }
    };
  }, [isOpen, url, onLoadError, onLoadSuccess]);

  return (
    <div 
      ref={calendarRef}
      className="calendly-inline-widget w-full h-full"
      data-url={`${url}?hide_event_type_details=1&hide_gdpr_banner=1&background_color=f8f8f8&primary_color=0d5533`}
    />
  );
};

export default CalendlyWidget;
