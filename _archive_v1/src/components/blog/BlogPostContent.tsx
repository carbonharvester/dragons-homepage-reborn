
import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';
import { getRichTextRenderOptions } from './blogUtils';

interface BlogPostContentProps {
  content: Document | undefined;
}

const BlogPostContent: React.FC<BlogPostContentProps> = ({ content }) => {
  return (
    <article className="prose prose-lg max-w-none prose-headings:font-academy prose-headings:text-dragon-dark prose-p:text-dragon-gray prose-li:text-dragon-gray prose-blockquote:text-dragon prose-blockquote:border-dragon-light">
      {content ? (
        documentToReactComponents(content, getRichTextRenderOptions())
      ) : (
        <p className="text-dragon-gray">This article has no content.</p>
      )}
    </article>
  );
};

export default BlogPostContent;
