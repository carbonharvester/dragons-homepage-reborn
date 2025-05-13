
import React, { useEffect, useRef } from 'react';
import { preloadCalendlyScript } from '@/utils/calendlyLoader';
import CalendlyLoading from './CalendlyLoading';
import CalendlyError from './CalendlyError';
import { calendlyConfig } from '@/config/calendlyConfig';

interface DirectCalendlyEmbedProps {
  url?: string;
  height?: string | number;
  className?: string;
}

const DirectCalendlyEmbed: React.FC<DirectCalendlyEmbedProps> = ({
  url = calendlyConfig.defaultUrl,
  height = calendlyConfig.defaultHeight,
  className = ""
}) => {
  const [loadingState, setLoadingState] = React.useState<'loading' | 'loaded' | 'error'>('loading');
  const calendarRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);
  
  useEffect(() => {
    // Only run once
    if (initialized.current) return;
    initialized.current = true;
    
    const loadCalendly = async () => {
      try {
        await preloadCalendlyScript();
        
        if (window.Calendly && calendarRef.current) {
          // Small delay to ensure DOM is ready
          setTimeout(() => {
            console.log('Calendly initialized successfully');
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
  
  const fullUrl = `${url}${calendlyConfig.queryParams}`;
  
  return (
    <>
      {loadingState === 'loading' && <CalendlyLoading />}
      {loadingState === 'error' && <CalendlyError onRetry={handleRetry} />}
      
      <div 
        ref={calendarRef}
        className={`calendly-inline-widget ${className}`}
        data-url={fullUrl}
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
