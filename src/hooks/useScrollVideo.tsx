
import { useEffect, useRef, useState } from 'react';

interface UseScrollVideoOptions {
  startOffset?: number;
  endOffset?: number;
}

export const useScrollVideo = (options: UseScrollVideoOptions = {}) => {
  const { startOffset = 0, endOffset = window.innerHeight } = options;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Wait for video metadata to load
    const handleLoadedMetadata = () => {
      setIsReady(true);
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    const handleScroll = () => {
      if (!isReady || !video.duration) return;

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollRange = endOffset - startOffset;
      const scrollProgress = Math.max(0, Math.min(1, (scrollTop - startOffset) / scrollRange));
      
      // Map scroll progress to video time
      const targetTime = scrollProgress * video.duration;
      
      // Only update if the difference is significant to avoid jittery playback
      if (Math.abs(video.currentTime - targetTime) > 0.1) {
        video.currentTime = targetTime;
      }
    };

    // Initial setup
    if (video.readyState >= 1) {
      handleLoadedMetadata();
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [startOffset, endOffset, isReady]);

  return { videoRef, isReady };
};

export default useScrollVideo;
