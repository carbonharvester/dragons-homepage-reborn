
import React, { useRef, useEffect } from 'react';

interface CloudinaryVideoProps {
  src: string;
  title: string;
  muted?: boolean;
}

const CloudinaryVideo = ({ src, title, muted = false }: CloudinaryVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      
      if (videoRef.current.autoplay) {
        const playPromise = videoRef.current.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => console.log("Cloudinary video playback started successfully"))
            .catch(error => {
              console.log('Auto-play was prevented:', error);
            });
        }
      }
    }
  }, [src]);

  return (
    <video 
      ref={videoRef}
      src={src}
      className="w-full h-full" 
      controls 
      playsInline
      preload="auto"
      autoPlay
      muted={muted}
      title={title}
    ></video>
  );
};

export default CloudinaryVideo;
