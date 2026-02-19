
import React from 'react';
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { BlogPost } from '@/services/blogService';
import { getImageUrl, formatDate } from '@/components/blog/blogUtils';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface RecentPostsProps {
  posts: BlogPost[];
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
          <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="overflow-hidden">
              <AspectRatio ratio={16 / 9} className="bg-muted">
                <img
                  src={getImageUrl(post.featuredImage)}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </AspectRatio>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <span className="bg-dragon-light/10 text-dragon text-xs font-medium px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
              <h3 className="text-xl font-academy text-dragon-dark mb-3">
                {post.title}
              </h3>
              <p className="text-dragon-gray text-sm mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center text-dragon-gray text-sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{formatDate(post.date)}</span>
                </div>
                <Link to={`/blog/${post.slug}`} className="text-dragon font-medium hover:text-dragon-dark transition-colors">
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
