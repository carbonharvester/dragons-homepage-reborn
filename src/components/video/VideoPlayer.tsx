
import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface VideoPlayerProps {
  videoId: string;
  title: string;
  customThumbnail?: string;
}

const VideoPlayer = ({ videoId, title, customThumbnail }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Check if the video ID is from Vimeo or from Shopify
  const isShopifyVideo = !videoId.match(/^\d+$/);
  
  // Generate appropriate video source URL based on the video ID format
  const videoSrc = isShopifyVideo
    ? `https://cdn.shopify.com/videos/c/o/v/${videoId}.mp4`
    : `https://player.vimeo.com/video/${videoId}?h=c4bc497777&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1`;
  
  const previewSrc = isShopifyVideo
    ? `https://cdn.shopify.com/videos/c/o/v/${videoId}.mp4`
    : `https://player.vimeo.com/video/${videoId}?h=c4bc497777&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&background=1&muted=1`;

  // Set thumbnail URL when component mounts
  useEffect(() => {
    if (customThumbnail) {
      setThumbnailUrl(customThumbnail);
    } else if (isShopifyVideo) {
      setThumbnailUrl(`https://cdn.shopify.com/videos/c/o/v/${videoId}.jpg`);
    }
  }, [videoId, isShopifyVideo, customThumbnail]);
  
  const handlePlayClick = () => {
    // Set playing state immediately
    setIsPlaying(true);
  };
  
  // Use a separate useEffect to handle video playback when isPlaying changes
  // This creates a more reliable trigger for playback
  useEffect(() => {
    if (isPlaying && isShopifyVideo && videoRef.current) {
      // Ensure the video is ready to play
      videoRef.current.load();
      
      // Give a tiny delay to ensure DOM is ready
      const playVideo = () => {
        if (videoRef.current) {
          const playPromise = videoRef.current.play();
          
          if (playPromise !== undefined) {
            playPromise.catch(error => {
              console.log('Auto-play was prevented:', error);
            });
          }
        }
      };
      
      // Execute immediately but use setTimeout to break the call stack
      setTimeout(playVideo, 0);
    }
  }, [isPlaying, isShopifyVideo]);
  
  return (
    <div className="relative mx-auto max-w-4xl overflow-hidden rounded-xl shadow-xl">
      {isPlaying ? (
        <div className="aspect-video w-full">
          {isShopifyVideo ? (
            <video 
              ref={videoRef}
              src={videoSrc}
              className="w-full h-full" 
              controls 
              playsInline
              preload="auto"
              autoPlay
              title={title}
            ></video>
          ) : (
            <iframe 
              src={videoSrc}
              className="w-full h-full" 
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
              allowFullScreen 
              title={title}
            ></iframe>
          )}
        </div>
      ) : (
        <div className="relative">
          <AspectRatio ratio={16 / 9}>
            <div className="w-full h-full bg-black">
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center transition-opacity hover:bg-opacity-20 z-10">
                <Button 
                  className="h-16 w-16 rounded-full bg-dragon-yellow hover:bg-amber-400 text-dragon-dark" 
                  onClick={handlePlayClick} 
                  aria-label="Play video"
                >
                  <Play className="h-8 w-8" />
                </Button>
              </div>
              {isShopifyVideo ? (
                thumbnailUrl ? (
                  <div 
                    className="w-full h-full" 
                    style={{ 
                      backgroundImage: `url(${thumbnailUrl})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  ></div>
                ) : (
                  <div className="w-full h-full bg-gray-800"></div>
                )
              ) : (
                <iframe 
                  src={previewSrc}
                  className="w-full h-full pointer-events-none" 
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  title={`${title} background preview`}
                ></iframe>
              )}
            </div>
          </AspectRatio>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
