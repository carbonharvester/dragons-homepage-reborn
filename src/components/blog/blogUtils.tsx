
import { format, parseISO } from 'date-fns';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { Options } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';

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

// Rich text rendering options for blog content
export const getRichTextRenderOptions = (): Options => {
  return {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
        <p className="mb-6">{children}</p>
      ),
      [BLOCKS.HEADING_1]: (node: any, children: any) => (
        <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node: any, children: any) => (
        <h2 className="text-2xl font-bold mt-8 mb-4">{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node: any, children: any) => (
        <h3 className="text-xl font-bold mt-6 mb-3">{children}</h3>
      ),
      [BLOCKS.UL_LIST]: (node: any, children: any) => (
        <ul className="list-disc pl-6 mb-6">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node: any, children: any) => (
        <ol className="list-decimal pl-6 mb-6">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (node: any, children: any) => (
        <li className="mb-1">{children}</li>
      ),
      [BLOCKS.QUOTE]: (node: any, children: any) => (
        <blockquote className="border-l-4 border-dragon pl-4 italic my-6">{children}</blockquote>
      ),
      [INLINES.HYPERLINK]: (node: any, children: any) => (
        <a 
          href={node.data.uri} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-dragon hover:underline"
        >
          {children}
        </a>
      ),
    },
  };
};

// Get author image URL with fallback
export const getAuthorImageUrl = (authorImageField: any) => {
  if (authorImageField && authorImageField.fields && authorImageField.fields.file) {
    return getImageUrl(authorImageField);
  }
  return "/lovable-uploads/5de3bb89-b98b-471d-b489-b486b74a96b8.png"; // Default author image
};
