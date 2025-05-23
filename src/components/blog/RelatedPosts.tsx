
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import { formatDate } from './blogUtils';

// Create sample blog post data
const samplePosts = [
  {
    id: 'exploring-maasai-mara',
    title: 'Exploring the Maasai Mara on a Budget',
    excerpt: 'Discover how to experience Kenya\'s world-famous wildlife reserve without breaking the bank.',
    slug: 'exploring-maasai-mara-budget',
    date: '2024-05-10',
    category: 'Travel Tips',
    image: 'https://res.cloudinary.com/dng12bd0a/image/upload/v1747126747/Klein-08863_ef3b4d.jpg'
  },
  {
    id: 'student-diaries-nairobi',
    title: 'Student Travel Diaries: My Semester in Nairobi',
    excerpt: 'Personal stories and insights from students who spent a transformative semester studying abroad in Kenya\'s capital.',
    slug: 'student-diaries-nairobi',
    date: '2024-04-15',
    category: 'Student Stories',
    image: 'https://res.cloudinary.com/dng12bd0a/image/upload/v1747126747/Klein-08863_ef3b4d.jpg'
  },
  {
    id: 'hidden-gems-kenya',
    title: 'Hidden Gems of Kenya: Off-the-Beaten-Path Adventures',
    excerpt: 'Venture beyond the tourist hotspots and discover Kenya\'s lesser-known but equally spectacular destinations.',
    slug: 'hidden-gems-kenya-adventures',
    date: '2024-03-22',
    category: 'Destinations',
    image: 'https://res.cloudinary.com/dng12bd0a/image/upload/v1747126747/Klein-08863_ef3b4d.jpg'
  }
];

interface RelatedPostsProps {
  currentPostId?: string;
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ currentPostId }) => {
  // Filter out the current post if its ID is provided
  const filteredPosts = currentPostId 
    ? samplePosts.filter(post => post.id !== currentPostId)
    : samplePosts;
  
  // Display only up to 3 posts
  const postsToDisplay = filteredPosts.slice(0, 3);

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-academy text-dragon-dark mb-6">
        You might also like
      </h2>
      
      {postsToDisplay.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-6">
          {postsToDisplay.map(post => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
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
      ) : (
        <div className="bg-dragon-beige p-8 text-center rounded-lg">
          <p className="text-dragon-dark mb-4">More blog posts coming soon!</p>
          <Button asChild className="bg-dragon hover:bg-dragon-dark text-white">
            <Link to="/blog">Return to Blog Home</Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default RelatedPosts;
