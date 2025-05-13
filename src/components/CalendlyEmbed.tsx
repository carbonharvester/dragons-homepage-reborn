
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button, ButtonProps } from "@/components/ui/button";
import DirectCalendlyEmbed from './calendly/DirectCalendlyEmbed';
import { calendlyConfig } from '@/config/calendlyConfig';

interface CalendlyEmbedProps extends ButtonProps {
  url?: string;
  text?: string;
}

const CalendlyEmbed = ({ 
  url = calendlyConfig.defaultUrl, 
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
          {/* Always render the component but conditionally show it when dialog is open */}
          <DirectCalendlyEmbed url={url} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CalendlyEmbed;
