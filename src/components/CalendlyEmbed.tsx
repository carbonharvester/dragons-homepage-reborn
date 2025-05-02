
import React, { useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button, ButtonProps } from "@/components/ui/button";

interface CalendlyEmbedProps extends ButtonProps {
  url: string;
  text?: string;
}

const CalendlyEmbed = ({ url, text = "Schedule a Consultation", className, ...props }: CalendlyEmbedProps) => {
  useEffect(() => {
    // Load Calendly script when component mounts
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={className} {...props}>{text}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] lg:max-w-[900px] max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-2xl">Schedule a Consultation</DialogTitle>
        </DialogHeader>
        <div className="mt-4 h-[500px] lg:h-[600px] overflow-hidden">
          <div 
            className="calendly-inline-widget w-full h-full" 
            data-url={`${url}?hide_event_type_details=1&hide_gdpr_banner=1&background_color=f8f8f8&primary_color=0d5533`}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CalendlyEmbed;
