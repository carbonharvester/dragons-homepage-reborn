
import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface VideoPlayerProps {
  videoId: string;
  title: string;
  customThumbnail?: string;
  initialPlaying?: boolean;
}

const VideoPlayer = ({ videoId, title, customThumbnail, initialPlaying = false }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(initialPlaying);
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
  
  // Handle play button click
  const handlePlayClick = () => {
    console.log("Play button clicked");
    setIsPlaying(true);
  };
  
  // Handle actual video playback when isPlaying state changes
  useEffect(() => {
    if (isPlaying) {
      console.log("isPlaying changed to true");
      if (isShopifyVideo && videoRef.current) {
        console.log("Loading and playing Shopify video");
        videoRef.current.load();
        
        videoRef.current.onloadeddata = () => {
          console.log("Video data loaded, attempting to play");
          if (videoRef.current) {
            const playPromise = videoRef.current.play();
            
            if (playPromise !== undefined) {
              playPromise
                .then(() => console.log("Playback started successfully"))
                .catch(error => {
                  console.log('Auto-play was prevented:', error);
                });
            }
          }
        };
      }
      // For Vimeo videos, the iframe's autoplay parameter handles playback
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
              <div 
                className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center transition-opacity hover:bg-opacity-20 z-10 cursor-pointer"
                onClick={handlePlayClick}
                role="button"
                tabIndex={0}
                aria-label="Play video"
              >
                <Button 
                  className="h-16 w-16 rounded-full bg-dragon-yellow hover:bg-amber-400 text-dragon-dark pointer-events-none" 
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
