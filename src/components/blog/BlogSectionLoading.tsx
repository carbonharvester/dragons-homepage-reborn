
import React from 'react';
import BlogSectionHeader from './BlogSectionHeader';
import BlogSectionCTA from './BlogSectionCTA';

const BlogSectionLoading: React.FC = () => {
  return (
    <section className="py-20 bg-dragon-beige/30">
      <div className="container-wide">
        <BlogSectionHeader 
          title="Latest From Our Blog" 
          subtitle="Discover insights, stories, and updates from our adventures and impact initiatives."
        />
        <BlogSectionCTA linkText="View Our Blog" linkUrl="/blog" />
      </div>
    </section>
  );
};

export default BlogSectionLoading;
