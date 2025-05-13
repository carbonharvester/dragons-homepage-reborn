
import React, { useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button, ButtonProps } from "@/components/ui/button";

interface CalendlyEmbedProps extends ButtonProps {
  url?: string;
  text?: string;
}

const CalendlyEmbed = ({ 
  url = "https://calendly.com/kapesuniforms/discoverymeeting", 
  text = "Schedule a Consultation", 
  className, 
  variant, 
  ...props 
}: CalendlyEmbedProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const calendlyContainerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef<boolean>(false);

  useEffect(() => {
    if (isOpen && !scriptLoadedRef.current) {
      // Load the Calendly script
      const script = document.createElement('script');
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = () => {
        scriptLoadedRef.current = true;
        console.log("Calendly script loaded successfully");
        
        // Initialize Calendly if it exists in window and container exists
        if (calendlyContainerRef.current) {
          console.log("Initializing Calendly widget");
          // Force a repaint of the container to ensure Calendly initializes properly
          calendlyContainerRef.current.style.display = 'none';
          setTimeout(() => {
            if (calendlyContainerRef.current) {
              calendlyContainerRef.current.style.display = 'block';
            }
          }, 100);
        }
      };
      
      script.onerror = () => {
        console.error("Failed to load Calendly script");
      };
      
      document.body.appendChild(script);
    }

    return () => {
      // Cleanup is not needed for the script as it should stay loaded for future use
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
        <div className="mt-4 h-[700px] overflow-hidden">
          <div 
            ref={calendlyContainerRef}
            className="calendly-inline-widget w-full h-full" 
            data-url={`${url}?hide_event_type_details=1&hide_gdpr_banner=1`}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CalendlyEmbed;
