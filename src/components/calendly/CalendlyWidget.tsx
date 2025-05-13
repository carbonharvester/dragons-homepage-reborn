
import React from 'react';
import DirectCalendlyEmbed from './DirectCalendlyEmbed';
import { calendlyConfig } from '@/config/calendlyConfig';

interface CalendlyWidgetProps {
  url?: string;
  isOpen: boolean;
  onLoadError?: () => void;
  onLoadSuccess?: () => void;
}

const CalendlyWidget = ({ 
  url = calendlyConfig.defaultUrl, 
  isOpen
}: CalendlyWidgetProps) => {
  if (!isOpen) return null;
  
  return <DirectCalendlyEmbed url={url} />;
};

export default CalendlyWidget;
