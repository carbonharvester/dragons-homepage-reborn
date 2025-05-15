
import React from 'react';
import { Share, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocation } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

interface BlogPostShareLinksProps {
  title?: string;
}

const BlogPostShareLinks: React.FC<BlogPostShareLinksProps> = ({ title = '' }) => {
  const location = useLocation();
  const currentUrl = window.location.origin + location.pathname;
  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(title || 'Check out this blog post from Kapes Adventures');

  const handleShare = (platform: string, url: string) => {
    window.open(url, `Share on ${platform}`, 'width=600,height=400');
    toast({
      title: `Shared on ${platform}`,
      description: `You've successfully shared this article on ${platform}.`,
    });
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentUrl)
      .then(() => {
        toast({
          title: "Link copied!",
          description: "The article link has been copied to your clipboard.",
        });
      })
      .catch(() => {
        toast({
          title: "Copy failed",
          description: "Failed to copy to clipboard. Please try again.",
          variant: "destructive",
        });
      });
  };

  return (
    <div className="mt-12 pt-6 border-t border-dragon-sand">
      <div className="flex items-center gap-4 flex-wrap">
        <span className="font-medium text-dragon-dark flex items-center">
          <Share className="h-4 w-4 mr-2" />
          Share this article:
        </span>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full h-8 w-8 p-0"
            onClick={() => handleShare('Facebook', `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`)}
          >
            <Facebook className="h-4 w-4 text-dragon" />
            <span className="sr-only">Share on Facebook</span>
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full h-8 w-8 p-0"
            onClick={() => handleShare('Twitter', `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`)}
          >
            <Twitter className="h-4 w-4 text-dragon" />
            <span className="sr-only">Share on Twitter</span>
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full h-8 w-8 p-0"
            onClick={() => handleShare('LinkedIn', `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`)}
          >
            <Linkedin className="h-4 w-4 text-dragon" />
            <span className="sr-only">Share on LinkedIn</span>
          </Button>
          <Button 
            variant="outline"
            className="text-sm ml-1 rounded-full px-3"
            onClick={copyToClipboard}
          >
            Copy link
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogPostShareLinks;
