
import React from 'react';
import { Calendar } from 'lucide-react';
import { ContentfulBlogPost } from '@/services/contentful';
import { formatDate, getAuthorImageUrl } from './blogUtils';

interface BlogPostHeaderProps {
  post: ContentfulBlogPost;
}

const BlogPostHeader: React.FC<BlogPostHeaderProps> = ({ post }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        <span className="bg-dragon-light/10 text-dragon text-sm font-medium px-3 py-1 rounded-full">
          {post.fields.category}
        </span>
        <div className="flex items-center text-dragon-gray text-sm">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{formatDate(post.fields.date)}</span>
        </div>
      </div>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-academy text-dragon-dark mb-6">
        {post.fields.title}
      </h1>
      
      {/* Author info */}
      <div className="flex items-center mb-8">
        <img 
          src={getAuthorImageUrl(post.fields.authorImage)} 
          alt={post.fields.author || "Author"}
          className="w-12 h-12 rounded-full object-cover mr-4" 
        />
        <div>
          <h3 className="font-medium text-dragon-dark">{post.fields.author}</h3>
          <p className="text-sm text-dragon-gray">{post.fields.authorTitle || "Author"}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPostHeader;
