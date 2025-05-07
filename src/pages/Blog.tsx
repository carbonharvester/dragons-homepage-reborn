
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllBlogPosts } from '@/services/contentful';
import { useQuery } from '@tanstack/react-query';
import SEO from "@/components/SEO";

// Import our new components
import BlogHero from "@/components/blog/BlogHero";
import FeaturedPost from "@/components/blog/FeaturedPost";
import RecentPosts from "@/components/blog/RecentPosts";
import BlogNewsletter from "@/components/blog/BlogNewsletter";
import BlogLoading from "@/components/blog/BlogLoading";
import BlogError from "@/components/blog/BlogError";

const BlogHome = () => {
  const { data: allPosts, isLoading, error } = useQuery({
    queryKey: ['blogPosts'],
    queryFn: getAllBlogPosts,
  });

  // Get featured post and recent posts
  const featuredPost = allPosts && allPosts.length > 0 ? allPosts[0] : null;
  const recentPosts = allPosts && allPosts.length > 1 ? allPosts.slice(1, 4) : [];

  return (
    <>
      <SEO 
        title="Blog | Mission Kapes"
        description="Insights, stories, and resources for transformative educational travel and cultural immersion experiences."
        keywords="educational travel, student trips, blog, mission kapes blog, Africa travel"
      />
      <Header />
      <main className="pt-8 pb-16">
        <BlogHero 
          title="Kapes Adventures Blog" 
          description="Insights, stories, and resources for transformative educational travel and cultural immersion experiences."
        />

        {isLoading ? (
          <BlogLoading />
        ) : error ? (
          <BlogError />
        ) : (
          <>
            {featuredPost && <FeaturedPost post={featuredPost} />}
            {recentPosts.length > 0 && <RecentPosts posts={recentPosts} />}
          </>
        )}

        <BlogNewsletter />
      </main>
      <Footer />
    </>
  );
};

export default BlogHome;
