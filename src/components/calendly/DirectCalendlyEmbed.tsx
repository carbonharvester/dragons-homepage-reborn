
import React, { useEffect, useRef, useState } from 'react';
import { preloadCalendlyScript, isCalendlyLoaded } from '@/utils/calendlyLoader';
import CalendlyLoading from './CalendlyLoading';
import CalendlyError from './CalendlyError';

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
  const [loadingState, setLoadingState] = useState<'loading' | 'loaded' | 'error'>('loading');
  const calendarRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);
  
  // Effect to load and initialize Calendly
  useEffect(() => {
    // Only run once
    if (initialized.current) return;
    initialized.current = true;
    
    const loadCalendly = async () => {
      try {
        await preloadCalendlyScript();
        
        // Initialize Calendly after script is loaded
        if (calendarRef.current && window.Calendly) {
          // Small delay to ensure DOM is ready
          setTimeout(() => {
            setLoadingState('loaded');
          }, 300);
        }
      } catch (error) {
        console.error('Failed to initialize Calendly widget:', error);
        setLoadingState('error');
      }
    };
    
    loadCalendly();
    
    return () => {
      // Cleanup if needed
    };
  }, [url]);
  
  // Handle retry on error
  const handleRetry = () => {
    setLoadingState('loading');
    initialized.current = false;
    preloadCalendlyScript()
      .then(() => setLoadingState('loaded'))
      .catch(() => setLoadingState('error'));
  };
  
  return (
    <>
      {loadingState === 'loading' && <CalendlyLoading />}
      {loadingState === 'error' && <CalendlyError onRetry={handleRetry} />}
      
      <div 
        ref={calendarRef}
        className={`calendly-inline-widget ${className}`}
        data-url={`${url}?hide_event_type_details=1&hide_gdpr_banner=1&background_color=ffffff&primary_color=357566`}
        style={{ 
          minWidth: '320px', 
          height,
          display: loadingState === 'loaded' ? 'block' : 'none'
        }}
      />
    </>
  );
};

export default DirectCalendlyEmbed;
