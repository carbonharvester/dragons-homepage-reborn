
import React from 'react';
import VideoThumbnail from './VideoThumbnail';
import VideoContainer from './VideoContainer';
import { useVideoPlayer } from './hooks/useVideoPlayer';

interface VideoPlayerProps {
  videoId?: string;
  videoUrl?: string;
  title: string;
  customThumbnail?: string;
  initialPlaying?: boolean;
  showPreview?: boolean;
  muted?: boolean;
  autoplayOnScroll?: boolean;
}

const VideoPlayer = ({ 
  videoId, 
  videoUrl,
  title, 
  customThumbnail, 
  initialPlaying = false,
  showPreview = true,
  muted = initialPlaying, // Default to muted when autoplay is enabled
  autoplayOnScroll = false
}: VideoPlayerProps) => {
  const {
    isPlaying,
    videoRef,
    containerRef,
    thumbnailUrl,
    videoSrc,
    previewSrc,
    handlePlayClick,
    shopifyVideo,
    cloudinaryVideo
  } = useVideoPlayer({
    videoId,
    videoUrl,
    initialPlaying,
    customThumbnail,
    showPreview,
    autoplayOnScroll
  });
  
  // Determine which video component to use
  const renderVideoContent = () => {
    if (!videoUrl && !videoId) {
      return (
        <div className="w-full h-full bg-gray-800 flex items-center justify-center text-white">
          No valid video source available
        </div>
      );
    }

    if (isPlaying) {
      if (cloudinaryVideo) {
        return (
          <div className="aspect-video w-full">
            <VideoContainer
              videoUrl={videoUrl}
              videoSrc={videoSrc}
              title={title}
              muted={muted}
              shopifyVideo={false}
              videoRef={videoRef}
            />
          </div>
        );
      } else if (videoUrl) {
        return (
          <div className="aspect-video w-full">
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
          </div>
        );
      } else if (shopifyVideo) {
        return (
          <div className="aspect-video w-full">
            <VideoContainer
              videoUrl={undefined}
              videoSrc={videoSrc}
              title={title}
              muted={muted}
              shopifyVideo={true}
              videoRef={videoRef}
            />
          </div>
        );
      }
    }
    
    return (
      <VideoThumbnail
        thumbnailUrl={thumbnailUrl}
        title={title}
        onPlayClick={handlePlayClick}
        previewSrc={showPreview ? previewSrc : undefined}
        showCloudinaryPreview={cloudinaryVideo && showPreview}
      />
    );
  };
  
  return (
    <div 
      ref={containerRef}
      className="relative mx-auto max-w-4xl overflow-hidden rounded-xl shadow-xl video-container"
    >
      {renderVideoContent()}
    </div>
  );
};

export default VideoPlayer;
