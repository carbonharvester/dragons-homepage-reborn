
import React, { useEffect, useRef } from 'react';

interface DirectCalendlyEmbedProps {
  url?: string;
  height?: string | number;
  className?: string;
}

const DirectCalendlyEmbed: React.FC<DirectCalendlyEmbedProps> = ({
  url = "https://calendly.com/kapesuniforms/discoverymeeting",
  height = "700px",
  className = ""
}) => {
  const scriptRef = useRef<HTMLScriptElement | null>(null);
  const initialized = useRef(false);
  
  useEffect(() => {
    // Only load the script once
    if (!initialized.current) {
      initialized.current = true;
      
      // Create and append the Calendly script
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      
      script.onload = () => {
        console.log('Calendly script loaded successfully');
      };
      
      script.onerror = () => {
        console.error('Failed to load Calendly script');
      };
      
      document.body.appendChild(script);
      scriptRef.current = script;
    }
    
    return () => {
      // We don't remove the script on unmount as it should remain available for future use
    };
  }, []);
  
  return (
    <div 
      className={`calendly-inline-widget ${className}`} 
      data-url={`${url}?hide_event_type_details=1&hide_gdpr_banner=1`}
      style={{ minWidth: '320px', height }}
    />
  );
};

export default DirectCalendlyEmbed;
