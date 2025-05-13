
import React from 'react';
import DirectCalendlyEmbed from './DirectCalendlyEmbed';
import { calendlyConfig } from '@/config/calendlyConfig';

interface StandaloneCalendlyEmbedProps {
  url?: string;
  height?: string | number;
  className?: string;
}

const StandaloneCalendlyEmbed: React.FC<StandaloneCalendlyEmbedProps> = ({
  url = calendlyConfig.defaultUrl,
  height = calendlyConfig.defaultHeight,
  className = ""
}) => {
  return (
    <div className={`w-full ${className}`}>
      <DirectCalendlyEmbed url={url} height={height} />
    </div>
  );
};

export default StandaloneCalendlyEmbed;
