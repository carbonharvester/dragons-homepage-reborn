
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface VideoPlayerProps {
  videoId: string;
  title: string;
}

const VideoPlayer = ({ videoId, title }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  const handlePlayClick = () => {
    setIsPlaying(true);
  };
  
  // Check if the video ID is from Vimeo or from Shopify
  const isShopifyVideo = !videoId.match(/^\d+$/);
  
  // Generate appropriate video source URL based on the video ID format
  const videoSrc = isShopifyVideo
    ? `https://cdn.shopify.com/videos/c/o/v/${videoId}.mp4`
    : `https://player.vimeo.com/video/${videoId}?h=c4bc497777&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1`;
  
  const previewSrc = isShopifyVideo
    ? `https://cdn.shopify.com/videos/c/o/v/${videoId}.mp4`
    : `https://player.vimeo.com/video/${videoId}?h=c4bc497777&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&background=1&muted=1`;
  
  return (
    <div className="relative mx-auto max-w-4xl overflow-hidden rounded-xl shadow-xl">
      {isPlaying ? (
        <div className="aspect-video w-full">
          {isShopifyVideo ? (
            <video 
              src={videoSrc}
              className="w-full h-full" 
              autoPlay
              controls 
              playsInline
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
                <video 
                  src={previewSrc}
                  className="w-full h-full object-cover pointer-events-none" 
                  muted
                  loop
                  autoPlay
                  playsInline
                  title={`${title} background preview`}
                ></video>
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
