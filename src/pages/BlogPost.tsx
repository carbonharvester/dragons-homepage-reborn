
import React from 'react';
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { getBlogPostBySlug } from '@/services/blogService';

import BlogPostHero from '@/components/blog/BlogPostHero';
import BlogPostHeader from '@/components/blog/BlogPostHeader';
import BlogPostContent from '@/components/blog/BlogPostContent';
import BlogInlineCTA from '@/components/blog/BlogInlineCTA';
import BlogPostShareLinks from '@/components/blog/BlogPostShareLinks';
import RelatedPosts from '@/components/blog/RelatedPosts';
import BlogPostCTA from '@/components/blog/BlogPostCTA';
import BlogPostNavigation from '@/components/blog/BlogPostNavigation';
import BlogPostError from '@/components/blog/BlogPostError';
import BlogStickyCTA from '@/components/blog/BlogStickyCTA';
import LeadMagnetPopup from '@/components/LeadMagnetPopup';

const BlogPost = () => {
  const { postId } = useParams();
  const post = getBlogPostBySlug(postId || '');

  if (!post) {
    return <BlogPostError />;
  }

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        canonicalUrl={`https://kapesadventures.com/blog/${post.slug}`}
        ogUrl={`https://kapesadventures.com/blog/${post.slug}`}
        ogImage={post.featuredImage}
      />
      <Header />
      <main className="pb-16">
        <BlogPostHero post={post} />

        <div className="container-wide max-w-4xl">
          <BlogPostNavigation />
          <BlogPostHeader post={post} />
          <BlogPostContent content={post.content} />
          <BlogInlineCTA category={post.category} />
          <BlogPostShareLinks title={post.title} />
          <RelatedPosts currentPostId={post.id} />
          <BlogPostCTA />
        </div>
      </main>
      <Footer />
      <BlogStickyCTA />
      <LeadMagnetPopup />
    </>
  );
};

export default BlogPost;
