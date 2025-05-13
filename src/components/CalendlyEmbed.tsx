
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button, ButtonProps } from "@/components/ui/button";
import CalendlyLoading from './calendly/CalendlyLoading';
import CalendlyError from './calendly/CalendlyError';
import CalendlyWidget from './calendly/CalendlyWidget';

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
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  const handleRetry = () => {
    setIsLoading(true);
    setLoadError(false);
  };

  const handleLoadSuccess = () => {
    setIsLoading(false);
  };

  const handleLoadError = () => {
    setLoadError(true);
    setIsLoading(false);
  };

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
          {isLoading && <CalendlyLoading />}
          {loadError && <CalendlyError onRetry={handleRetry} />}
          
          <div style={{ visibility: isLoading || loadError ? 'hidden' : 'visible' }}>
            <CalendlyWidget 
              url={url}
              isOpen={isOpen && !loadError}
              onLoadError={handleLoadError}
              onLoadSuccess={handleLoadSuccess}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CalendlyEmbed;
