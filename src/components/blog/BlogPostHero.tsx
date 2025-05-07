
import React from 'react';
import { getImageUrl } from './blogUtils';
import { ContentfulBlogPost } from '@/services/contentful';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface BlogPostHeroProps {
  post: ContentfulBlogPost;
}

const BlogPostHero: React.FC<BlogPostHeroProps> = ({ post }) => {
  return (
    <div className="w-full bg-gray-200 relative mb-8">
      <AspectRatio ratio={16 / 9} className="bg-muted">
        <img 
          src={getImageUrl(post.fields.featuredImage)} 
          alt={post.fields.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </AspectRatio>
    </div>
  );
};

export default BlogPostHero;
