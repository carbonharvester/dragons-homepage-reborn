
import { format, parseISO } from 'date-fns';

// Get image URL - now handles direct URL strings
export const getImageUrl = (imageField: any) => {
  if (!imageField) {
    return "https://images.unsplash.com/photo-1500673922987-e212871fec22";
  }
  // If it's a direct string URL (markdown blog)
  if (typeof imageField === 'string') {
    return imageField;
  }
  // Legacy Contentful format
  if (imageField.fields?.file?.url) {
    const url = imageField.fields.file.url;
    return url.startsWith('//') ? `https:${url}` : url;
  }
  return "https://images.unsplash.com/photo-1500673922987-e212871fec22";
};

// Format date to d MMM yyyy format
export const formatDate = (dateString: string) => {
  try {
    const date = parseISO(dateString);
    return format(date, 'd MMM yyyy');
  } catch (error) {
    return dateString;
  }
};

// Get author image URL with fallback
export const getAuthorImageUrl = (authorImageField: any) => {
  if (typeof authorImageField === 'string') {
    return authorImageField;
  }
  if (authorImageField?.fields?.file) {
    return getImageUrl(authorImageField);
  }
  return "/lovable-uploads/5de3bb89-b98b-471d-b489-b486b74a96b8.png";
};
