
import React from 'react';
import ShopifyVideo from './ShopifyVideo';
import CloudinaryVideo from './CloudinaryVideo';

interface VideoContainerProps {
  videoUrl?: string;
  videoSrc: string;
  title: string;
  muted: boolean;
  shopifyVideo: boolean;
  videoRef: React.RefObject<HTMLVideoElement>;
}

const VideoContainer = ({ 
  videoUrl, 
  videoSrc, 
  title, 
  muted, 
  shopifyVideo,
  videoRef
}: VideoContainerProps) => {
  if (videoUrl) {
    return (
      <video 
        ref={videoRef}
        src={videoUrl}
        className="w-full h-full" 
        controls 
        playsInline
        autoPlay
        muted={muted}
        title={title}
      ></video>
    );
  }
  
  if (shopifyVideo) {
    return <ShopifyVideo src={videoSrc} title={title} muted={muted} />;
  }
  
  return (
    <div className="w-full h-full bg-gray-800 flex items-center justify-center text-white">
      No valid video source available
    </div>
  );
};

export default VideoContainer;
