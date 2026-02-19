
import React from 'react';
import { getImageUrl } from './blogUtils';
import { BlogPost } from '@/services/blogService';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface BlogPostHeroProps {
  post: BlogPost;
}

const BlogPostHero: React.FC<BlogPostHeroProps> = ({ post }) => {
  return (
    <div className="container-wide max-w-4xl mx-auto mb-8">
      <AspectRatio ratio={16 / 9} className="bg-muted">
        <img
          src={getImageUrl(post.featuredImage)}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </AspectRatio>
    </div>
  );
};

export default BlogPostHero;
