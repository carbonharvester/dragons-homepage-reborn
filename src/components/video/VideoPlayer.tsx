
import React, { useState, useEffect, useRef } from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import VideoThumbnail from './VideoThumbnail';
import ShopifyVideo from './ShopifyVideo';
import VimeoVideo from './VimeoVideo';
import { 
  isShopifyVideo, 
  generateVideoSrc, 
  generateThumbnailUrl,
  preloadVideo,
  isCloudinaryVideo,
  generateCloudinaryPreviewUrl,
  generateCloudinaryThumbnailUrl
} from './videoUtils';

interface VideoPlayerProps {
  videoId?: string;
  videoUrl?: string;
  title: string;
  customThumbnail?: string;
  initialPlaying?: boolean;
  showPreview?: boolean;
}

const VideoPlayer = ({ 
  videoId, 
  videoUrl,
  title, 
  customThumbnail, 
  initialPlaying = false,
  showPreview = true
}: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(initialPlaying);
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  
  // If direct videoUrl is provided, use that instead of videoId processing
  const isDirectUrl = !!videoUrl;
  
  // Check if the video ID is from Shopify or from Vimeo (only if videoId provided)
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
      return shopifyVideo 
        ? generateVideoSrc(videoId, false)
        : `https://player.vimeo.com/video/${videoId}?background=1&muted=1&autopause=0&loop=1&transparent=0&responsive=1&autoplay=1`;
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
  
  // Handle play button click
  const handlePlayClick = () => {
    setIsPlaying(true);
  };

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
  
  return (
    <div 
      ref={containerRef}
      className="relative mx-auto max-w-4xl overflow-hidden rounded-xl shadow-xl video-container"
    >
      {isPlaying ? (
        <div className="aspect-video w-full">
          {videoUrl ? (
            <video 
              src={videoUrl}
              className="w-full h-full" 
              controls 
              playsInline
              autoPlay
              title={title}
            ></video>
          ) : shopifyVideo ? (
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
          previewSrc={showPreview ? previewSrc : undefined}
          isVimeo={!shopifyVideo && !cloudinaryVideo}
          showCloudinaryPreview={cloudinaryVideo && showPreview}
        />
      )}
    </div>
  );
};

export default VideoPlayer;
