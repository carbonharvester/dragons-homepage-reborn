
import React from 'react';

interface BlogSectionHeaderProps {
  title: string;
  subtitle: string;
}

const BlogSectionHeader: React.FC<BlogSectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-16">
      <h2 className="section-heading">{title}</h2>
      <p className="section-subheading mx-auto">{subtitle}</p>
    </div>
  );
};

export default BlogSectionHeader;
