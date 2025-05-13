
// Video utility functions

/**
 * Determines if a video ID is from Shopify or Vimeo based on its format
 * @param videoId The video ID to check
 * @returns boolean - true if it's a Shopify video ID
 */
export const isShopifyVideo = (videoId: string): boolean => {
  return !videoId.match(/^\d+$/);
};

/**
 * Generates the appropriate video source URL based on the video ID format
 * @param videoId The video ID
 * @param autoplay Whether to enable autoplay (for Vimeo videos)
 * @returns string - The complete video source URL
 */
export const generateVideoSrc = (videoId: string, autoplay: boolean = false): string => {
  if (isShopifyVideo(videoId)) {
    return `https://cdn.shopify.com/videos/c/o/v/${videoId}.mp4`;
  } else {
    return `https://player.vimeo.com/video/${videoId}?h=c4bc497777&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479${autoplay ? '&autoplay=1' : ''}`;
  }
};

/**
 * Generates a thumbnail URL for a video
 * @param videoId The video ID
 * @param customThumbnail Optional custom thumbnail URL
 * @returns string - The thumbnail URL
 */
export const generateThumbnailUrl = (videoId: string, customThumbnail?: string): string => {
  if (customThumbnail) {
    return customThumbnail;
  } else if (isShopifyVideo(videoId)) {
    return `https://cdn.shopify.com/videos/c/o/v/${videoId}.jpg`;
  }
  return '';
};

/**
 * Preloads a video for better performance
 * @param videoSrc The video source URL to preload
 */
export const preloadVideo = (videoSrc: string): void => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = videoSrc;
  link.as = 'video';
  document.head.appendChild(link);
};
