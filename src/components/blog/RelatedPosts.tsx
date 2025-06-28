
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import { formatDate, getImageUrl } from './blogUtils';
import { useQuery } from '@tanstack/react-query';
import { getAllBlogPosts } from '@/services/contentful';

interface RelatedPostsProps {
  currentPostId?: string;
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ currentPostId }) => {
  const { data: blogPosts, isLoading, error } = useQuery({
    queryKey: ['relatedBlogPosts'],
    queryFn: getAllBlogPosts,
  });

  // Filter out the current post if its ID is provided and get up to 3 posts
  const filteredPosts = currentPostId && blogPosts
    ? blogPosts.filter(post => post.sys.id !== currentPostId)
    : blogPosts || [];
  
  const postsToDisplay = filteredPosts.slice(0, 3);

  if (isLoading) {
    return (
      <div className="mt-16">
        <h2 className="text-2xl font-academy text-dragon-dark mb-6">
          You might also like
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm animate-pulse">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-5">
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-6 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error || !blogPosts || postsToDisplay.length === 0) {
    return (
      <div className="mt-16">
        <h2 className="text-2xl font-academy text-dragon-dark mb-6">
          You might also like
        </h2>
        <div className="bg-dragon-beige p-8 text-center rounded-lg">
          <p className="text-dragon-dark mb-4">More blog posts coming soon!</p>
          <Button asChild className="bg-dragon hover:bg-dragon-dark text-white">
            <Link to="/blog">Return to Blog Home</Link>
          </Button>
        </div>
      );
    }
  }

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-academy text-dragon-dark mb-6">
        You might also like
      </h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {postsToDisplay.map(post => (
          <div key={post.sys.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-48 overflow-hidden">
              <img 
                src={getImageUrl(post.fields.featuredImage)} 
                alt={post.fields.title} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center mb-2">
                <span className="bg-dragon-light/10 text-dragon text-xs font-medium px-2 py-1 rounded-full">
                  {post.fields.category}
                </span>
                <div className="flex items-center text-dragon-gray text-xs ml-2">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>{formatDate(post.fields.date)}</span>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2 text-dragon-dark line-clamp-2">
                <Link to={`/blog/${post.fields.slug}`}>{post.fields.title}</Link>
              </h3>
              <p className="text-sm text-dragon-gray mb-4 line-clamp-3">
                {post.fields.excerpt}
              </p>
              <Link to={`/blog/${post.fields.slug}`} className="text-dragon font-medium hover:text-dragon-dark transition-colors">
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
