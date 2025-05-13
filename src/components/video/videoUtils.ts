
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
 * Checks if a URL is a Cloudinary video URL
 * @param url The URL to check
 * @returns boolean - true if it's a Cloudinary video URL
 */
export const isCloudinaryVideo = (url: string): boolean => {
  return url.includes('cloudinary.com') && (url.includes('/video/upload/') || url.includes('.mp4'));
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
    // Since we're not using Vimeo, just return an empty string for non-Shopify IDs
    console.warn('Non-Shopify video ID provided:', videoId);
    return '';
  }
};

/**
 * Generates a preview URL for a Cloudinary video
 * @param videoUrl The full Cloudinary video URL
 * @returns string - The preview URL with transformations for background preview
 */
export const generateCloudinaryPreviewUrl = (videoUrl: string): string => {
  if (!isCloudinaryVideo(videoUrl)) return videoUrl;
  
  // For Cloudinary videos, we can add transformation parameters
  // q_auto and f_auto for optimal delivery, and we mute the video for preview
  if (videoUrl.includes('/upload/')) {
    // Insert transformations after /upload/
    return videoUrl.replace('/upload/', '/upload/q_auto,f_auto/');
  }
  
  return videoUrl;
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
 * Generates a thumbnail URL for a Cloudinary video
 * @param videoUrl The Cloudinary video URL
 * @returns string - The thumbnail URL
 */
export const generateCloudinaryThumbnailUrl = (videoUrl: string): string => {
  if (!isCloudinaryVideo(videoUrl)) return '';
  
  // For Cloudinary videos, we can convert to image by changing the file extension
  // and adding transformation parameters for a thumbnail
  return videoUrl.replace('.mp4', '.jpg').replace('/video/upload/', '/video/upload/q_auto,f_auto,w_960,h_540,c_fill/');
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
