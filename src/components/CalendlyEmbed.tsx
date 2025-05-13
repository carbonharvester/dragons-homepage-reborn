
import React, { useState } from 'react';
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
          {isOpen && (
            <div className="calendly-inline-widget" 
              data-url={`${url}?hide_event_type_details=1&hide_gdpr_banner=1`} 
              style={{minWidth:'320px', height:'700px'}}
            />
          )}
          {isOpen && (
            <script 
              type="text/javascript" 
              src="https://assets.calendly.com/assets/external/widget.js" 
              async 
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CalendlyEmbed;
