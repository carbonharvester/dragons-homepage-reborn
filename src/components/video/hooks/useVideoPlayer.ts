
import { useState, useEffect, useRef } from 'react';
import { 
  isShopifyVideo, 
  generateVideoSrc, 
  generateThumbnailUrl,
  preloadVideo,
  isCloudinaryVideo,
  generateCloudinaryPreviewUrl,
  generateCloudinaryThumbnailUrl
} from '../videoUtils';

interface UseVideoPlayerProps {
  videoId?: string;
  videoUrl?: string;
  initialPlaying: boolean;
  customThumbnail?: string;
  showPreview: boolean;
  autoplayOnScroll: boolean;
}

export const useVideoPlayer = ({
  videoId,
  videoUrl,
  initialPlaying,
  customThumbnail,
  showPreview,
  autoplayOnScroll
}: UseVideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(initialPlaying);
  const [isInView, setIsInView] = useState(false);
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Check if the video ID is from Shopify (only if videoId provided)
  const shopifyVideo = videoId ? isShopifyVideo(videoId) : false;
  
  // Check if it's a Cloudinary video URL
  const cloudinaryVideo = videoUrl ? isCloudinaryVideo(videoUrl) : false;
  
  // Generate appropriate video source URLs
  const videoSrc = videoUrl || (videoId ? generateVideoSrc(videoId, true) : '');
  
  // Generate preview sources based on video type
  const previewSrc = (() => {
    if (videoUrl && cloudinaryVideo && showPreview) {
      return generateCloudinaryPreviewUrl(videoUrl);
    } else if (videoId && showPreview) {
      return shopifyVideo ? generateVideoSrc(videoId, false) : '';
    }
    return '';
  })();

  // Set thumbnail URL when component mounts
  useEffect(() => {
    if (videoId) {
      setThumbnailUrl(generateThumbnailUrl(videoId, customThumbnail));
    } else if (customThumbnail) {
      setThumbnailUrl(customThumbnail);
    } else if (videoUrl && cloudinaryVideo) {
      setThumbnailUrl(generateCloudinaryThumbnailUrl(videoUrl));
    }
  }, [videoId, customThumbnail, videoUrl, cloudinaryVideo]);

  // Effect to handle initial autoplay for videos when initialPlaying is true
  useEffect(() => {
    if (initialPlaying && videoRef.current) {
      console.log('Auto-playing video on initial render');
      videoRef.current.muted = true; // Must be muted for autoplay to work reliably
      videoRef.current.play()
        .then(() => console.log('Autoplay started successfully'))
        .catch(err => console.error('Autoplay failed:', err));
    }
  }, [initialPlaying]);

  // Handle autoplay on scroll
  useEffect(() => {
    if (!autoplayOnScroll) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        const wasInView = isInView;
        setIsInView(entry.isIntersecting);
        
        // Autoplay when in view if that option is enabled
        if (entry.isIntersecting && autoplayOnScroll && !isPlaying) {
          console.log('Auto-playing video on scroll into view');
          setIsPlaying(true);
        } else if (!entry.isIntersecting && wasInView && isPlaying && (shopifyVideo || cloudinaryVideo)) {
          // Pause when scrolled out of view (for videos we control)
          console.log('Pausing video on scroll out of view');
          setIsPlaying(false);
        }
      },
      { threshold: 0.3 } // Play when 30% of video is visible
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, [autoplayOnScroll, isPlaying, isInView, shopifyVideo, cloudinaryVideo]);

  // Setup IntersectionObserver for lazy loading and pausing when offscreen
  useEffect(() => {
    if (!videoId && !cloudinaryVideo) return; // Skip for non-controllable videos
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && isPlaying && (shopifyVideo || cloudinaryVideo)) {
          // Only pause for videos we can control directly
          setIsPlaying(false);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [isPlaying, shopifyVideo, videoId, cloudinaryVideo]);

  // Preload video when in viewport
  useEffect(() => {
    if ((!shopifyVideo && !cloudinaryVideo) || (!videoId && !videoUrl)) return;
    
    const preloadObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          preloadVideo(videoSrc);
          preloadObserver.disconnect();
        }
      },
      { rootMargin: '200px 0px', threshold: 0.1 }
    );

    if (containerRef.current) {
      preloadObserver.observe(containerRef.current);
    }

    return () => {
      preloadObserver.disconnect();
    };
  }, [videoSrc, shopifyVideo, videoId, cloudinaryVideo, videoUrl]);

  // Handle play button click
  const handlePlayClick = () => {
    console.log('Play button clicked in VideoPlayer');
    setIsPlaying(true);
  };

  return {
    isPlaying,
    videoRef,
    containerRef,
    thumbnailUrl,
    videoSrc,
    previewSrc,
    handlePlayClick,
    shopifyVideo,
    cloudinaryVideo
  };
};
