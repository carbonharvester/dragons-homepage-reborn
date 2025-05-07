
import React from 'react';
import BlogSectionHeader from './blog/BlogSectionHeader';
import BlogGrid from './blog/BlogGrid';
import BlogSectionCTA from './blog/BlogSectionCTA';
import BlogSectionLoading from './blog/BlogSectionLoading';
import useBlogPosts from './blog/useBlogPosts';

const BlogSection = () => {
  const { posts, isLoading, error, isEmpty } = useBlogPosts(3);

  // If loading or error, show minimal content
  if (isLoading || error || isEmpty) {
    return <BlogSectionLoading />;
  }

  return (
    <section className="py-20 bg-dragon-beige/30">
      <div className="container-wide">
        <BlogSectionHeader 
          title="Latest From Our Blog" 
          subtitle="Discover insights, stories, and updates from our adventures and impact initiatives."
        />

        <BlogGrid posts={posts} />

        <BlogSectionCTA linkText="View All Blog Posts" linkUrl="/blog" />
      </div>
    </section>
  );
};

export default BlogSection;
