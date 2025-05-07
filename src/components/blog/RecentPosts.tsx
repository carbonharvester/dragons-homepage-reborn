
import React from 'react';
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { ContentfulBlogPost } from '@/services/contentful';
import { getImageUrl, formatDate } from '@/components/blog/blogUtils';

interface RecentPostsProps {
  posts: ContentfulBlogPost[];
}

const RecentPosts: React.FC<RecentPostsProps> = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section className="container-wide mb-16">
      <h2 className="text-2xl font-academy text-dragon-dark mb-8 border-b border-dragon-sand pb-4">
        Recent Articles
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div key={post.sys.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="h-48 overflow-hidden">
              <img 
                src={getImageUrl(post.fields.featuredImage)} 
                alt={post.fields.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="bg-dragon-light/10 text-dragon text-xs font-medium px-3 py-1 rounded-full">
                  {post.fields.category}
                </span>
                <span className="text-dragon-gray text-sm">{post.fields.readTime || "5 min read"}</span>
              </div>
              <h3 className="text-xl font-academy text-dragon-dark mb-3">
                {post.fields.title}
              </h3>
              <p className="text-dragon-gray text-sm mb-4 line-clamp-3">
                {post.fields.excerpt}
              </p>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center text-dragon-gray text-sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{formatDate(post.fields.date)}</span>
                </div>
                <Link to={`/blog/${post.fields.slug}`} className="text-dragon font-medium hover:text-dragon-dark transition-colors">
                  Read more
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentPosts;
