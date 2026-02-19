
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllBlogPosts } from '@/services/blogService';
import SEO from "@/components/SEO";

import BlogHero from "@/components/blog/BlogHero";
import FeaturedPost from "@/components/blog/FeaturedPost";
import RecentPosts from "@/components/blog/RecentPosts";

const BlogHome = () => {
  const allPosts = getAllBlogPosts();
  const featuredPost = allPosts.length > 0 ? allPosts[0] : null;
  const recentPosts = allPosts.length > 1 ? allPosts.slice(1, 4) : [];

  return (
    <>
      <SEO
        title="Blog | Kapes Adventures"
        description="Insights on ethical school travel, community-led impact, and how to plan trips that actually benefit the communities you visit."
        keywords="ethical school trips, service learning, voluntourism, school trip planning, Kenya school trips"
      />
      <Header />
      <main className="pt-16 pb-16">
        <BlogHero
          title="Blog"
          description="Insights on ethical school travel, community-led impact, and planning trips that actually work — for students and communities."
        />

        <>
          {featuredPost && <FeaturedPost post={featuredPost} />}
          {recentPosts.length > 0 && <RecentPosts posts={recentPosts} />}
        </>
      </main>
      <Footer />
    </>
  );
};

export default BlogHome;
