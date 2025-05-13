
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
  const [autoplayAttempted, setAutoplayAttempted] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  
  const isCloudinary = showCloudinaryPreview && previewSrc && isCloudinaryVideo(previewSrc);
  
  // Add an event listener to detect any user interaction with the document
  useEffect(() => {
    const handleUserInteraction = () => {
      setUserInteracted(true);
      
      // If we have a video and haven't tried autoplay yet, try again after user interaction
      if (isCloudinary && videoRef.current && !autoplayAttempted) {
        playVideo();
      }
    };

    // Add event listeners for common user interactions
    document.addEventListener('click', handleUserInteraction, { once: true });
    document.addEventListener('touchstart', handleUserInteraction, { once: true });
    document.addEventListener('scroll', handleUserInteraction, { once: true });

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('scroll', handleUserInteraction);
    };
  }, [isCloudinary, autoplayAttempted]);

  // Function to handle video playback attempts
  const playVideo = () => {
    if (!videoRef.current) return;
    
    setAutoplayAttempted(true);
    
    videoRef.current.play()
      .then(() => {
        console.log('Cloudinary preview video autoplay successful');
      })
      .catch(err => {
        console.log('Autoplay prevented for Cloudinary preview:', err);
        
        // If autoplay failed and we have user interaction, try again after a short delay
        if (userInteracted) {
          setTimeout(() => {
            if (videoRef.current) {
              // Try one more time after a delay
              videoRef.current.muted = true; // Ensure video is muted as browsers are more likely to allow muted autoplay
              videoRef.current.play().catch(e => console.log('Second autoplay attempt failed:', e));
            }
          }, 1000);
        }
      });
  };
  
  // Effect to handle video preview autoplay
  useEffect(() => {
    // Auto-play the Cloudinary preview video when component mounts
    if (isCloudinary && videoRef.current) {
      // Short timeout to allow browser to process the video element
      setTimeout(() => playVideo(), 100);
    }
  }, [isCloudinary, previewSrc]);
  
  return (
    <div className="relative">
      <AspectRatio ratio={16 / 9}>
        <div className="w-full h-full bg-black">
          <div 
            className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center transition-opacity hover:bg-opacity-20 z-10 cursor-pointer"
            onClick={onPlayClick}
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
              autoPlay
              preload="auto"
              aria-hidden="true"
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
