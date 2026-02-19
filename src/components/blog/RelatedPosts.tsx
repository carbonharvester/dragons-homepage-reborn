
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import { formatDate, getImageUrl } from './blogUtils';
import { getAllBlogPosts } from '@/services/blogService';

interface RelatedPostsProps {
  currentPostId?: string;
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ currentPostId }) => {
  const blogPosts = getAllBlogPosts();

  const filteredPosts = currentPostId
    ? blogPosts.filter(post => post.id !== currentPostId)
    : blogPosts;

  const postsToDisplay = filteredPosts.slice(0, 3);

  if (postsToDisplay.length === 0) {
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
      </div>
    );
  }

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-academy text-dragon-dark mb-6">
        You might also like
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {postsToDisplay.map(post => (
          <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-48 overflow-hidden">
              <img
                src={getImageUrl(post.featuredImage)}
                alt={post.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center mb-2">
                <span className="bg-dragon-light/10 text-dragon text-xs font-medium px-2 py-1 rounded-full">
                  {post.category}
                </span>
                <div className="flex items-center text-dragon-gray text-xs ml-2">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>{formatDate(post.date)}</span>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2 text-dragon-dark line-clamp-2">
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              <p className="text-sm text-dragon-gray mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <Link to={`/blog/${post.slug}`} className="text-dragon font-medium hover:text-dragon-dark transition-colors">
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
