
import React, { useState, useRef, useEffect } from 'react';
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { isCloudinaryVideo } from './videoUtils';

interface VideoThumbnailProps {
  thumbnailUrl: string;
  title: string;
  onPlayClick: () => void;
  previewSrc?: string;
  isVimeo?: boolean;
  showCloudinaryPreview?: boolean;
}

const VideoThumbnail = ({ 
  thumbnailUrl, 
  title, 
  onPlayClick, 
  previewSrc, 
  showCloudinaryPreview = false
}: VideoThumbnailProps) => {
  const [thumbnailLoaded, setThumbnailLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPreviewPlaying, setIsPreviewPlaying] = useState(false);
  
  const isCloudinary = showCloudinaryPreview && previewSrc && isCloudinaryVideo(previewSrc);
  
  // Try to play the preview video
  const attemptAutoplay = () => {
    if (!videoRef.current || !isCloudinary) return;
    
    console.log('Attempting to play Cloudinary preview', previewSrc);
    
    // Ensure video is muted (required for autoplay in most browsers)
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.playsInline = true;
      
      videoRef.current.play()
        .then(() => {
          console.log('Cloudinary preview started successfully');
          setIsPreviewPlaying(true);
        })
        .catch(err => {
          console.error('Autoplay failed:', err);
          setIsPreviewPlaying(false);
        });
    }
  };
  
  // Handle play button click
  const handlePlayButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('Play button clicked');
    onPlayClick();
  };
  
  // Effect to handle initial autoplay attempt
  useEffect(() => {
    if (isCloudinary && videoRef.current) {
      // Give the browser a moment to load the video element
      const timer = setTimeout(() => {
        attemptAutoplay();
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [isCloudinary, previewSrc]);
  
  // Add event listeners for user interaction to help with autoplay
  useEffect(() => {
    if (!isCloudinary || isPreviewPlaying) return;
    
    const handleUserInteraction = () => {
      if (videoRef.current && !isPreviewPlaying) {
        attemptAutoplay();
      }
    };
    
    // Add these events to try autoplay after user interaction
    window.addEventListener('scroll', handleUserInteraction, { once: true });
    window.addEventListener('click', handleUserInteraction, { once: true });
    window.addEventListener('touchstart', handleUserInteraction, { once: true });
    
    return () => {
      window.removeEventListener('scroll', handleUserInteraction);
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
    };
  }, [isCloudinary, isPreviewPlaying]);
  
  return (
    <div className="relative">
      <AspectRatio ratio={16 / 9}>
        <div className="w-full h-full bg-black">
          <div 
            className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center transition-opacity hover:bg-opacity-20 z-10 cursor-pointer"
            onClick={handlePlayButtonClick}
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
          
          {isCloudinary ? (
            // Cloudinary preview video (muted, autoplay, loop)
            <video 
              ref={videoRef}
              src={previewSrc}
              className="w-full h-full object-cover"
              muted
              loop
              playsInline
              preload="auto"
              aria-hidden="true"
              poster={thumbnailUrl || undefined}
            />
          ) : thumbnailUrl ? (
            <>
              {!thumbnailLoaded && 
                <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                  <div className="w-8 h-8 border-4 border-dragon border-t-transparent rounded-full animate-spin"></div>
                </div>
              }
              <img 
                src={thumbnailUrl}
                alt={`${title} thumbnail`}
                className={`w-full h-full object-cover ${thumbnailLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setThumbnailLoaded(true)}
                width="960"
                height="540"
              />
            </>
          ) : (
            <div className="w-full h-full bg-gray-800"></div>
          )}
        </div>
      </AspectRatio>
    </div>
  );
};

export default VideoThumbnail;
