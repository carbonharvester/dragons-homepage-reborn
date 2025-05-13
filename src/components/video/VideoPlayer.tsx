
import React, { useState, useEffect, useRef } from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import VideoThumbnail from './VideoThumbnail';
import ShopifyVideo from './ShopifyVideo';
import VimeoVideo from './VimeoVideo';
import { 
  isShopifyVideo, 
  generateVideoSrc, 
  generateThumbnailUrl,
  preloadVideo
} from './videoUtils';

interface VideoPlayerProps {
  videoId: string;
  title: string;
  customThumbnail?: string;
  initialPlaying?: boolean;
}

const VideoPlayer = ({ 
  videoId, 
  title, 
  customThumbnail, 
  initialPlaying = false 
}: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(initialPlaying);
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Check if the video ID is from Shopify or from Vimeo
  const shopifyVideo = isShopifyVideo(videoId);
  
  // Generate appropriate video source URLs
  const videoSrc = generateVideoSrc(videoId, true);
  const previewSrc = shopifyVideo 
    ? generateVideoSrc(videoId, false)
    : generateVideoSrc(videoId, false) + '&background=1&muted=1';
  
  // Set thumbnail URL when component mounts
  useEffect(() => {
    setThumbnailUrl(generateThumbnailUrl(videoId, customThumbnail));
  }, [videoId, customThumbnail]);
  
  // Handle play button click
  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  // Setup IntersectionObserver for lazy loading and pausing when offscreen
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && isPlaying && shopifyVideo) {
          // Only pause for Shopify videos - we can't control Vimeo directly
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
  }, [isPlaying, shopifyVideo]);

  // Preload video when in viewport
  useEffect(() => {
    if (!shopifyVideo) return; // Only preload Shopify videos
    
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
  }, [videoSrc, shopifyVideo]);
  
  return (
    <div 
      ref={containerRef}
      className="relative mx-auto max-w-4xl overflow-hidden rounded-xl shadow-xl video-container"
    >
      {isPlaying ? (
        <div className="aspect-video w-full">
          {shopifyVideo ? (
            <ShopifyVideo src={videoSrc} title={title} />
          ) : (
            <VimeoVideo src={videoSrc} title={title} />
          )}
        </div>
      ) : (
        <VideoThumbnail
          thumbnailUrl={thumbnailUrl}
          title={title}
          onPlayClick={handlePlayClick}
          previewSrc={!shopifyVideo ? previewSrc : undefined}
          isVimeo={!shopifyVideo}
        />
      )}
    </div>
  );
};

export default VideoPlayer;
