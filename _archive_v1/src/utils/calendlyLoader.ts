
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
      
      // Add a small timeout to make sure Calendly is fully initialized
      setTimeout(() => {
        if (window.Calendly) {
          scriptStatus = 'loaded';
          resolve();
        } else {
          // If window.Calendly is not available, remove the script and try again
          const existingScript = document.querySelector('script[src*="calendly.com/assets/external/widget.js"]');
          if (existingScript) {
            existingScript.remove();
            loadScript(resolve, reject);
          }
        }
      }, 200);
      return;
    }
    
    loadScript(resolve, reject);
  });
  
  return loadPromise;
};

// Helper function to load the script
const loadScript = (resolve: () => void, reject: (error: any) => void) => {
  // Create and append the script
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://assets.calendly.com/assets/external/widget.js';
  script.async = true;
  
  script.onload = () => {
    // Wait for Calendly to be available in the window object
    const checkCalendly = () => {
      if (window.Calendly) {
        console.log('Calendly script loaded successfully');
        scriptStatus = 'loaded';
        resolve();
      } else {
        setTimeout(checkCalendly, 100);
      }
    };
    
    checkCalendly();
  };
  
  script.onerror = (error) => {
    console.error('Failed to load Calendly script', error);
    scriptStatus = 'error';
    reject(error);
  };
  
  document.body.appendChild(script);
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
