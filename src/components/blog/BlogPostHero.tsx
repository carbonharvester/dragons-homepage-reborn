
import React from 'react';
import { getImageUrl } from './blogUtils';
import { ContentfulBlogPost } from '@/services/contentful';

interface BlogPostHeroProps {
  post: ContentfulBlogPost;
}

const BlogPostHero: React.FC<BlogPostHeroProps> = ({ post }) => {
  return (
    <div className="w-full h-64 md:h-96 bg-gray-200 relative">
      <img 
        src={getImageUrl(post.fields.featuredImage)} 
        alt={post.fields.title} 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
    </div>
  );
};

export default BlogPostHero;
