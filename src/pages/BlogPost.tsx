
import React from 'react';
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getBlogPostBySlug } from '@/services/contentful';
import { useQuery } from '@tanstack/react-query';

// Import our new components
import BlogPostHero from '@/components/blog/BlogPostHero';
import BlogPostHeader from '@/components/blog/BlogPostHeader';
import BlogPostContent from '@/components/blog/BlogPostContent';
import BlogPostShareLinks from '@/components/blog/BlogPostShareLinks';
import RelatedPosts from '@/components/blog/RelatedPosts';
import BlogPostNavigation from '@/components/blog/BlogPostNavigation';
import BlogPostLoading from '@/components/blog/BlogPostLoading';
import BlogPostError from '@/components/blog/BlogPostError';

const BlogPost = () => {
  const { postId } = useParams();

  const { data: post, isLoading, error } = useQuery({
    queryKey: ['blogPost', postId],
    queryFn: () => getBlogPostBySlug(postId || ''),
  });

  // If post is loading, show loading component
  if (isLoading) {
    return <BlogPostLoading />;
  }

  // If post doesn't exist or there's an error, show error component
  if (error || !post) {
    return <BlogPostError />;
  }

  return (
    <>
      <Header />
      <main className="pb-16">
        <BlogPostHero post={post} />

        <div className="container-wide max-w-4xl">
          <BlogPostNavigation />
          <BlogPostHeader post={post} />
          <BlogPostContent content={post.fields.content} />
          <BlogPostShareLinks title={post.fields.title} />
          <RelatedPosts currentPostId={post.sys.id} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogPost;
