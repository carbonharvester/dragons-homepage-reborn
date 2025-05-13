
import React, { useRef, useEffect } from 'react';

interface ShopifyVideoProps {
  src: string;
  title: string;
  muted?: boolean;
}

const ShopifyVideo = ({ src, title, muted = false }: ShopifyVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      
      videoRef.current.onloadeddata = () => {
        if (videoRef.current) {
          const playPromise = videoRef.current.play();
          
          if (playPromise !== undefined) {
            playPromise
              .then(() => console.log("Shopify video playback started successfully"))
              .catch(error => {
                console.log('Auto-play was prevented:', error);
              });
          }
        }
      };
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

export default ShopifyVideo;
