
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface BlogPostContentProps {
  content: string | undefined;
}

const BlogPostContent: React.FC<BlogPostContentProps> = ({ content }) => {
  return (
    <article className="prose prose-lg max-w-none prose-headings:font-academy prose-headings:text-dragon-dark prose-p:text-dragon-gray prose-li:text-dragon-gray prose-blockquote:text-dragon prose-blockquote:border-dragon-light">
      {content ? (
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ children }) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
            h2: ({ children }) => <h2 className="text-2xl font-bold mt-8 mb-4">{children}</h2>,
            h3: ({ children }) => <h3 className="text-xl font-bold mt-6 mb-3">{children}</h3>,
            p: ({ children }) => <p className="mb-6">{children}</p>,
            ul: ({ children }) => <ul className="list-disc pl-6 mb-6">{children}</ul>,
            ol: ({ children }) => <ol className="list-decimal pl-6 mb-6">{children}</ol>,
            li: ({ children }) => <li className="mb-1">{children}</li>,
            blockquote: ({ children }) => <blockquote className="border-l-4 border-dragon pl-4 italic my-6">{children}</blockquote>,
            a: ({ href, children }) => (
              <a href={href} className="text-dragon hover:underline">
                {children}
              </a>
            ),
            table: ({ children }) => (
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border-collapse border border-gray-200">{children}</table>
              </div>
            ),
            th: ({ children }) => <th className="border border-gray-200 px-4 py-2 bg-gray-50 font-bold text-left">{children}</th>,
            td: ({ children }) => <td className="border border-gray-200 px-4 py-2">{children}</td>,
            strong: ({ children }) => <strong className="font-bold text-dragon-dark">{children}</strong>,
          }}
        >
          {content}
        </ReactMarkdown>
      ) : (
        <p className="text-dragon-gray">This article has no content.</p>
      )}
    </article>
  );
};

export default BlogPostContent;
