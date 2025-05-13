
import React from 'react';
import DirectCalendlyEmbed from './DirectCalendlyEmbed';

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
  if (!isOpen) return null;
  
  return <DirectCalendlyEmbed url={url} />;
};

export default CalendlyWidget;
