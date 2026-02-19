
import React from 'react';
import { Link } from "react-router-dom";
import { ChevronRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlogPost } from '@/services/blogService';
import { getImageUrl, formatDate } from '@/components/blog/blogUtils';

interface FeaturedPostProps {
  post: BlogPost;
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => {
  return (
    <section className="container-wide mb-16">
      <h2 className="text-2xl font-academy text-dragon-dark mb-8 border-b border-dragon-sand pb-4">
        Featured Article
      </h2>
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="h-64 md:h-full overflow-hidden">
            <img
              src={getImageUrl(post.featuredImage)}
              alt={post.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <div className="flex items-center mb-3">
              <span className="bg-dragon-light/10 text-dragon text-xs font-medium px-3 py-1 rounded-full">
                {post.category}
              </span>
              <div className="flex items-center text-dragon-gray text-sm ml-4">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{formatDate(post.date)}</span>
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-academy text-dragon-dark mb-4">
              {post.title}
            </h3>
            <p className="text-dragon-gray mb-6 line-clamp-3">
              {post.excerpt}
            </p>
            <div className="mt-auto">
              <Button asChild className="text-white bg-dragon hover:bg-dragon-dark">
                <Link to={`/blog/${post.slug}`}>
                  Read Article <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPost;
