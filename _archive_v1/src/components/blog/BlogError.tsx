
import React from 'react';

const BlogError: React.FC = () => {
  return (
    <div className="container-wide text-center py-12">
      <p className="text-red-500">Error loading blog posts. Please try again later.</p>
    </div>
  );
};

export default BlogError;
