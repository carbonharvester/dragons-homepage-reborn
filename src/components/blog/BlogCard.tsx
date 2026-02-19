
import React from 'react';
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { BlogPost } from '@/services/blogService';
import { getImageUrl, formatDate } from '@/components/blog/blogUtils';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img
          src={getImageUrl(post.featuredImage)}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-dragon text-white px-3 py-1 rounded-full text-xs font-medium">
          {post.category}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-dragon-gray mb-3">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{formatDate(post.date)}</span>
          </div>
        </div>
        <Link to={`/blog/${post.slug}`}>
          <h3 className="text-xl font-bold mb-2 text-dragon-dark hover:text-dragon transition-colors">
            {post.title}
          </h3>
        </Link>
        <p className="text-dragon-gray mb-4 line-clamp-2">{post.excerpt}</p>
        <Link to={`/blog/${post.slug}`} className="text-dragon font-medium hover:underline">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
