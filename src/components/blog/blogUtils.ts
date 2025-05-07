
import { format, parseISO } from 'date-fns';

// Format image URL for Contentful images
export const getImageUrl = (imageField: any) => {
  if (!imageField || !imageField.fields || !imageField.fields.file) {
    return "https://images.unsplash.com/photo-1500673922987-e212871fec22"; // Fallback image
  }
  return imageField.fields.file.url.startsWith('//') 
    ? `https:${imageField.fields.file.url}` 
    : imageField.fields.file.url;
};

// Format date to d MMM yyyy format
export const formatDate = (dateString: string) => {
  try {
    // Try parsing the date string
    const date = parseISO(dateString);
    return format(date, 'd MMM yyyy');
  } catch (error) {
    // If parsing fails, return the original date string
    return dateString;
  }
};
