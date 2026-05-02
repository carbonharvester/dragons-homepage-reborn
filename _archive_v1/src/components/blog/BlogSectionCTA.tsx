
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface BlogSectionCTAProps {
  linkText: string;
  linkUrl: string;
}

const BlogSectionCTA: React.FC<BlogSectionCTAProps> = ({ linkText, linkUrl }) => {
  return (
    <div className="mt-12 text-center">
      <Button asChild className="btn-secondary">
        <Link to={linkUrl}>{linkText}</Link>
      </Button>
    </div>
  );
};

export default BlogSectionCTA;
