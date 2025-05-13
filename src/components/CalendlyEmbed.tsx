
import React, { useEffect, useState, useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button, ButtonProps } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "@/components/ui/use-toast";

interface CalendlyEmbedProps extends ButtonProps {
  url?: string;
  text?: string;
}

// Singleton script loader to prevent multiple script loads
const calendlyLoader = (() => {
  let scriptPromise: Promise<boolean> | null = null;
  let scriptLoaded = false;

  return () => {
    if (scriptLoaded) {
      return Promise.resolve(true);
    }
    
    if (scriptPromise) {
      return scriptPromise;
    }
    
    scriptPromise = new Promise<boolean>((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      
      script.onload = () => {
        scriptLoaded = true;
        resolve(true);
      };
      
      script.onerror = (err) => {
        console.error('Failed to load Calendly script:', err);
        reject(err);
      };
      
      document.body.appendChild(script);
    });
    
    return scriptPromise;
  };
})();

// Preload the Calendly script when the component is first imported
calendlyLoader().catch(err => {
  console.warn('Failed to preload Calendly script:', err);
});

const CalendlyEmbed = ({ 
  url = "https://calendly.com/kapesuniforms/discoverymeeting", 
  text = "Schedule a Consultation", 
  className, 
  variant, 
  ...props 
}: CalendlyEmbedProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);

  // Initialize Calendly when the dialog opens
  useEffect(() => {
    if (!isOpen) return;
    
    setIsLoading(true);
    setLoadError(false);
    
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
              setIsLoading(false);
            } catch (error) {
              console.error('Error initializing Calendly widget:', error);
              setLoadError(true);
              setIsLoading(false);
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
        setLoadError(true);
        setIsLoading(false);
        toast({
          title: "Calendar service unavailable",
          description: "Please try again later or contact us directly.",
          variant: "destructive"
        });
      });
  }, [isOpen, url]);

  // Cleanup function when dialog closes
  useEffect(() => {
    return () => {
      if (!isOpen && calendarRef.current) {
        // Clean up any event listeners or unnecessary DOM elements
        calendarRef.current.innerHTML = '';
      }
    };
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant={variant} className={className} {...props}>{text}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] lg:max-w-[900px] max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">Schedule a Consultation</DialogTitle>
        </DialogHeader>
        <div className="mt-4 h-[500px] lg:h-[600px] overflow-hidden">
          {isLoading && (
            <div className="flex flex-col items-center justify-center h-full space-y-4">
              <Skeleton className="h-8 w-48 rounded-md" />
              <Skeleton className="h-4 w-64 rounded-md" />
              <Skeleton className="h-4 w-56 rounded-md" />
              <p className="text-sm text-gray-500 mt-4">Loading calendar...</p>
            </div>
          )}
          {loadError && (
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
                onClick={() => {
                  setIsLoading(true);
                  setLoadError(false);
                  calendlyLoader()
                    .then(() => {
                      if (window.Calendly && calendarRef.current) {
                        try {
                          window.Calendly.initInlineWidget({
                            url: `${url}?hide_event_type_details=1&hide_gdpr_banner=1&background_color=f8f8f8&primary_color=0d5533`,
                            parentElement: calendarRef.current,
                            prefill: {},
                            utm: {}
                          });
                          setIsLoading(false);
                        } catch (error) {
                          console.error('Error reinitializing Calendly widget:', error);
                          setLoadError(true);
                          setIsLoading(false);
                        }
                      }
                    })
                    .catch(() => {
                      setLoadError(true);
                      setIsLoading(false);
                    });
                }}
                className="mt-4 bg-dragon hover:bg-dragon-dark text-white"
              >
                Try Again
              </Button>
            </div>
          )}
          <div 
            ref={calendarRef}
            className="calendly-inline-widget w-full h-full" 
            style={{ visibility: isLoading || loadError ? 'hidden' : 'visible' }}
            data-url={`${url}?hide_event_type_details=1&hide_gdpr_banner=1&background_color=f8f8f8&primary_color=0d5533`}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

// Add this to global Window interface to use Calendly global object
declare global {
  interface Window {
    Calendly?: any;
  }
}

export default CalendlyEmbed;
