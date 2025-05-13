
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
  isVimeo = false,
  showCloudinaryPreview = false
}: VideoThumbnailProps) => {
  const [thumbnailLoaded, setThumbnailLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  const isCloudinary = showCloudinaryPreview && previewSrc && isCloudinaryVideo(previewSrc);
  
  // Effect to handle video preview autoplay
  useEffect(() => {
    // Auto-play the Cloudinary preview video when component mounts
    if (isCloudinary && videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log('Auto-play prevented for preview:', err);
      });
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
              aria-hidden="true"
            />
          ) : isVimeo && previewSrc ? (
            <iframe 
              ref={iframeRef}
              src={previewSrc}
              className="w-full h-full pointer-events-none" 
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              title={`${title} background preview`}
              loading="lazy"
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
