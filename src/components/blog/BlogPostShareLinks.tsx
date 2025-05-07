
import React from 'react';
import { Share, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlogPostShareLinks: React.FC = () => {
  return (
    <div className="mt-12 pt-6 border-t border-dragon-sand">
      <div className="flex items-center gap-4">
        <span className="font-medium text-dragon-dark flex items-center">
          <Share className="h-4 w-4 mr-2" />
          Share this article:
        </span>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" className="rounded-full h-8 w-8 p-0">
            <Facebook className="h-4 w-4 text-dragon" />
            <span className="sr-only">Share on Facebook</span>
          </Button>
          <Button variant="outline" size="icon" className="rounded-full h-8 w-8 p-0">
            <Twitter className="h-4 w-4 text-dragon" />
            <span className="sr-only">Share on Twitter</span>
          </Button>
          <Button variant="outline" size="icon" className="rounded-full h-8 w-8 p-0">
            <Linkedin className="h-4 w-4 text-dragon" />
            <span className="sr-only">Share on LinkedIn</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogPostShareLinks;
