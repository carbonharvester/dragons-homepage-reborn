
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
  
  return (
    <div 
      ref={containerRef}
      className="relative mx-auto max-w-4xl overflow-hidden rounded-xl shadow-xl video-container"
    >
      {isPlaying ? (
        <div className="aspect-video w-full">
          <VideoContainer
            videoUrl={videoUrl}
            videoSrc={videoSrc}
            title={title}
            muted={muted}
            shopifyVideo={shopifyVideo}
            videoRef={videoRef}
          />
        </div>
      ) : (
        <VideoThumbnail
          thumbnailUrl={thumbnailUrl}
          title={title}
          onPlayClick={handlePlayClick}
          previewSrc={showPreview ? previewSrc : undefined}
          showCloudinaryPreview={cloudinaryVideo && showPreview}
        />
      )}
    </div>
  );
};

export default VideoPlayer;
