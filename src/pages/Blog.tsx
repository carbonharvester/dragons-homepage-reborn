
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { ChevronRight, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getAllBlogPosts, ContentfulBlogPost } from '@/services/contentful';
import { useQuery } from '@tanstack/react-query';

const BlogHome = () => {
  const { data: allPosts, isLoading, error } = useQuery({
    queryKey: ['blogPosts'],
    queryFn: getAllBlogPosts,
  });

  // Get featured post and recent posts
  const featuredPost = allPosts && allPosts.length > 0 ? allPosts[0] : null;
  const recentPosts = allPosts && allPosts.length > 1 ? allPosts.slice(1, 4) : [];

  // Format image URL for Contentful images
  const getImageUrl = (imageField: any) => {
    if (!imageField || !imageField.fields || !imageField.fields.file) {
      return "https://images.unsplash.com/photo-1500673922987-e212871fec22"; // Fallback image
    }
    return imageField.fields.file.url.startsWith('//') 
      ? `https:${imageField.fields.file.url}` 
      : imageField.fields.file.url;
  };

  return (
    <>
      <Header />
      <main className="pt-8 pb-16">
        {/* Hero section */}
        <section className="bg-dragon-beige py-12 mb-16">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-dragon-dark mb-6">
                Kapes Adventures Blog
              </h1>
              <p className="text-lg text-dragon-gray mb-6">
                Insights, stories, and resources for transformative educational travel and cultural immersion experiences.
              </p>
            </div>
          </div>
        </section>

        {isLoading ? (
          <div className="container-wide text-center py-12">
            <p>Loading blog posts...</p>
          </div>
        ) : error ? (
          <div className="container-wide text-center py-12">
            <p className="text-red-500">Error loading blog posts. Please try again later.</p>
          </div>
        ) : (
          <>
            {/* Featured post */}
            {featuredPost && (
              <section className="container-wide mb-16">
                <h2 className="text-2xl font-serif font-bold text-dragon-dark mb-8 border-b border-dragon-sand pb-4">
                  Featured Article
                </h2>
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="h-64 md:h-full overflow-hidden">
                      <img 
                        src={getImageUrl(featuredPost.fields.featuredImage)}
                        alt={featuredPost.fields.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                      />
                    </div>
                    <div className="p-6 md:p-8 flex flex-col justify-center">
                      <div className="flex items-center mb-3">
                        <span className="bg-dragon-light/10 text-dragon text-xs font-medium px-3 py-1 rounded-full">
                          {featuredPost.fields.category}
                        </span>
                        <div className="flex items-center text-dragon-gray text-sm ml-4">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{featuredPost.fields.date}</span>
                        </div>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-serif font-bold text-dragon-dark mb-4">
                        {featuredPost.fields.title}
                      </h3>
                      <p className="text-dragon-gray mb-6">
                        {featuredPost.fields.excerpt}
                      </p>
                      <div className="mt-auto">
                        <Button asChild className="text-white bg-dragon hover:bg-dragon-dark">
                          <Link to={`/blog/${featuredPost.fields.slug}`}>
                            Read Article <ChevronRight className="ml-1 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Recent posts */}
            {recentPosts.length > 0 && (
              <section className="container-wide mb-16">
                <h2 className="text-2xl font-serif font-bold text-dragon-dark mb-8 border-b border-dragon-sand pb-4">
                  Recent Articles
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {recentPosts.map((post) => (
                    <div key={post.sys.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={getImageUrl(post.fields.featuredImage)} 
                          alt={post.fields.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="bg-dragon-light/10 text-dragon text-xs font-medium px-3 py-1 rounded-full">
                            {post.fields.category}
                          </span>
                          <span className="text-dragon-gray text-sm">{post.fields.readTime || "5 min read"}</span>
                        </div>
                        <h3 className="text-xl font-serif font-bold text-dragon-dark mb-3">
                          {post.fields.title}
                        </h3>
                        <p className="text-dragon-gray text-sm mb-4 line-clamp-3">
                          {post.fields.excerpt}
                        </p>
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center text-dragon-gray text-sm">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{post.fields.date}</span>
                          </div>
                          <Link to={`/blog/${post.fields.slug}`} className="text-dragon font-medium hover:text-dragon-dark transition-colors">
                            Read more
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </>
        )}

        {/* Newsletter subscription */}
        <section className="bg-dragon-beige py-12">
          <div className="container-wide max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-dragon-dark mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-dragon-gray mb-8 max-w-2xl mx-auto">
              Stay updated with our latest articles, travel tips, program updates, and educational resources delivered directly to your inbox.
            </p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-12 px-4 rounded-md border border-dragon-sand focus:outline-none focus:ring-2 focus:ring-dragon focus:border-transparent"
                required
              />
              <Button type="submit" className="h-12 bg-dragon hover:bg-dragon-dark text-white font-medium px-6">
                Subscribe
              </Button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BlogHome;
