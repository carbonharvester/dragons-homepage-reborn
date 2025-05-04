
import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button, ButtonProps } from "@/components/ui/button";

interface CalendlyEmbedProps extends ButtonProps {
  url?: string;
  text?: string;
}

// Create a script loader utility to prevent multiple script loads
const loadCalendlyScript = (() => {
  let loaded = false;
  let loading = false;
  let callbacks: Array<() => void> = [];

  return (onLoad: () => void) => {
    // If already loaded, call callback right away
    if (loaded) {
      onLoad();
      return;
    }

    // Add callback to queue
    callbacks.push(onLoad);

    // If already loading, wait for it
    if (loading) return;

    // Start loading
    loading = true;
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    
    script.onload = () => {
      loaded = true;
      loading = false;
      callbacks.forEach(cb => cb());
      callbacks = [];
    };
    
    script.onerror = (err) => {
      console.error('Failed to load Calendly script:', err);
      loading = false;
      // Reset callbacks so they can try again
      callbacks = [];
    };
    
    document.body.appendChild(script);
  };
})();

const CalendlyEmbed = ({ 
  url = "https://calendly.com/kapesuniforms/discoverymeeting", 
  text = "Schedule a Consultation", 
  className, 
  variant, 
  ...props 
}: CalendlyEmbedProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Initialize Calendly when the dialog opens
  useEffect(() => {
    if (!isOpen) return;
    
    // Initialize Calendly when script is loaded and dialog is open
    loadCalendlyScript(() => {
      if (window.Calendly && isOpen) {
        // Reset any previous instances
        if (document.querySelector('.calendly-inline-widget')) {
          window.Calendly.initInlineWidget({
            url: `${url}?hide_event_type_details=1&hide_gdpr_banner=1&background_color=f8f8f8&primary_color=0d5533`,
            parentElement: document.querySelector('.calendly-inline-widget'),
            prefill: {},
            utm: {}
          });
        }
      }
    });
  }, [isOpen, url]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant={variant} className={className} {...props}>{text}</Button>
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

// Add this to global Window interface to use Calendly global object
declare global {
  interface Window {
    Calendly?: any;
  }
}

export default CalendlyEmbed;
