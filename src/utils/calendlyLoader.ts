
/**
 * Singleton script loader to prevent multiple script loads for Calendly
 */
const calendlyLoader = (() => {
  let scriptPromise: Promise<boolean> | null = null;
  let scriptLoaded = false;

  return () => {
    if (scriptLoaded) {
      return Promise.resolve(true);
    }
    
    if (scriptPromise) {
      return scriptPromise;
    }
    
    scriptPromise = new Promise<boolean>((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      
      script.onload = () => {
        scriptLoaded = true;
        resolve(true);
      };
      
      script.onerror = (err) => {
        console.error('Failed to load Calendly script:', err);
        reject(err);
      };
      
      document.body.appendChild(script);
    });
    
    return scriptPromise;
  };
})();

// This function is exported but we no longer need to manually preload
// as the embed code handles this automatically
export default calendlyLoader;

// Add this to global Window interface to use Calendly global object
declare global {
  interface Window {
    Calendly?: any;
  }
}
