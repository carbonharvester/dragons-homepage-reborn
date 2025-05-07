
import React from 'react';
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { ContentfulBlogPost } from '@/services/contentful';
import { format, parseISO } from 'date-fns';

interface BlogCardProps {
  post: ContentfulBlogPost;
}

// Helper functions
const getImageUrl = (imageField: any) => {
  if (!imageField || !imageField.fields || !imageField.fields.file) {
    return "/lovable-uploads/15e3c0c3-6461-43da-866c-88c8a2129885.png"; // Fallback image
  }
  return imageField.fields.file.url.startsWith('//') 
    ? `https:${imageField.fields.file.url}` 
    : imageField.fields.file.url;
};

const formatDate = (dateString: string) => {
  try {
    const date = parseISO(dateString);
    return format(date, 'd MMM yyyy');
  } catch (error) {
    return dateString;
  }
};

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={getImageUrl(post.fields.featuredImage)} 
          alt={post.fields.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-dragon text-white px-3 py-1 rounded-full text-xs font-medium">
          {post.fields.category}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-dragon-gray mb-3">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{formatDate(post.fields.date)}</span>
          </div>
        </div>
        <Link to={`/blog/${post.fields.slug}`}>
          <h3 className="text-xl font-bold mb-2 text-dragon-dark hover:text-dragon transition-colors">
            {post.fields.title}
          </h3>
        </Link>
        <p className="text-dragon-gray mb-4 line-clamp-2">{post.fields.excerpt}</p>
        <Link to={`/blog/${post.fields.slug}`} className="text-dragon font-medium hover:underline">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
