
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const RelatedPosts: React.FC = () => {
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
};

export default RelatedPosts;
