
/**
 * Utility to load and manage the Calendly script
 */

// Track whether the script is loading or loaded
let scriptStatus: 'not_loaded' | 'loading' | 'loaded' | 'error' = 'not_loaded';
let loadPromise: Promise<void> | null = null;

/**
 * Preloads the Calendly script to improve performance
 */
export const preloadCalendlyScript = (): Promise<void> => {
  if (scriptStatus === 'loaded') {
    console.log('Calendly script already loaded, reusing');
    return Promise.resolve();
  }
  
  if (loadPromise) {
    console.log('Calendly script already loading, waiting for it to complete');
    return loadPromise;
  }
  
  console.log('Starting to load Calendly script');
  scriptStatus = 'loading';
  
  loadPromise = new Promise<void>((resolve, reject) => {
    // Don't load script during SSR
    if (typeof window === 'undefined') {
      resolve();
      return;
    }
    
    // If script already exists in DOM, mark as loaded
    if (document.querySelector('script[src*="calendly.com/assets/external/widget.js"]')) {
      console.log('Calendly script found in DOM, marking as loaded');
      scriptStatus = 'loaded';
      resolve();
      return;
    }
    
    // Create and append the script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    
    script.onload = () => {
      console.log('Calendly script loaded successfully');
      scriptStatus = 'loaded';
      resolve();
    };
    
    script.onerror = (error) => {
      console.error('Failed to load Calendly script', error);
      scriptStatus = 'error';
      reject(error);
    };
    
    document.body.appendChild(script);
  });
  
  return loadPromise;
};

/**
 * Checks if Calendly is loaded
 */
export const isCalendlyLoaded = (): boolean => {
  return typeof window !== 'undefined' && !!window.Calendly && scriptStatus === 'loaded';
};

// Add this to global Window interface to use Calendly global object
declare global {
  interface Window {
    Calendly?: any;
  }
}

export default isCalendlyLoaded;
