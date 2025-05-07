
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface VideoPlayerProps {
  videoId: string;
  title: string;
}

const VideoPlayer = ({ videoId, title }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVimeoLoaded, setIsVimeoLoaded] = useState(false);
  
  // Load Vimeo script only when needed
  useEffect(() => {
    if (isPlaying && !isVimeoLoaded) {
      const script = document.createElement('script');
      script.src = 'https://player.vimeo.com/api/player.js';
      script.async = true;
      script.onload = () => setIsVimeoLoaded(true);
      document.body.appendChild(script);
      
      return () => {
        // Clean up script if component unmounts while loading
        if (!script.onload) {
          document.body.removeChild(script);
        }
      };
    }
  }, [isPlaying, isVimeoLoaded]);
  
  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  // Use a lightweight preview image when not playing
  const previewUrl = `https://vumbnail.com/${videoId}.jpg`;
  
  return (
    <div className="relative mx-auto max-w-4xl overflow-hidden rounded-xl shadow-xl">
      {isPlaying ? (
        <div className="aspect-video w-full">
          <iframe 
            src={`https://player.vimeo.com/video/${videoId}?h=c4bc497777&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1`}
            className="w-full h-full" 
            frameBorder="0" 
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
            allowFullScreen 
            title={title}
          ></iframe>
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
              <img 
                src={previewUrl}
                alt={`${title} preview`}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  // Fallback to iframe if thumbnail fails to load
                  const iframe = document.createElement('iframe');
                  iframe.src = `https://player.vimeo.com/video/${videoId}?h=c4bc497777&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&background=1&muted=1`;
                  iframe.className = "w-full h-full pointer-events-none";
                  iframe.frameBorder = "0";
                  iframe.allow = "autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media";
                  iframe.title = `${title} background preview`;
                  e.currentTarget.parentNode?.appendChild(iframe);
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </AspectRatio>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
