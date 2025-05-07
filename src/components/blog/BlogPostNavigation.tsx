
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlogPostNavigation: React.FC = () => {
  return (
    <div className="my-6">
      <Button 
        variant="ghost" 
        asChild 
        className="text-dragon hover:text-dragon-dark hover:bg-dragon-beige"
      >
        <Link to="/blog">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
      </Button>
    </div>
  );
};

export default BlogPostNavigation;
