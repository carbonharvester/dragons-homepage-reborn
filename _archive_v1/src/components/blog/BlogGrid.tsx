
import React from 'react';
import BlogCard from './BlogCard';
import { ContentfulBlogPost } from '@/services/contentful';

interface BlogGridProps {
  posts: ContentfulBlogPost[];
}

const BlogGrid: React.FC<BlogGridProps> = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {posts.map(post => (
        <BlogCard key={post.sys.id} post={post} />
      ))}
    </div>
  );
};

export default BlogGrid;
