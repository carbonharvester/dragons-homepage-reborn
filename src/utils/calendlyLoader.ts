
/**
 * Simple utility to check if Calendly is loaded
 */
const calendlyLoader = () => {
  return typeof window !== 'undefined' && !!window.Calendly;
};

export default calendlyLoader;

// Add this to global Window interface to use Calendly global object
declare global {
  interface Window {
    Calendly?: any;
  }
}
