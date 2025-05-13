
/**
 * Simple utility to check if Calendly is loaded
 */
const calendlyLoader = () => {
  return typeof window !== 'undefined' && !!window.Calendly;
};

// This function is exported but is now simplified
export default calendlyLoader;

// Add this to global Window interface to use Calendly global object
declare global {
  interface Window {
    Calendly?: any;
  }
}
