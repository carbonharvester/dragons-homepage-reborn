
import React from 'react';
import { Link } from "react-router-dom";
import { ChevronRight, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const BlogHome = () => {
  // Featured blog post data
  const featuredPost = {
    id: "sustainable-travel-education",
    title: "How Sustainable Travel Enhances Educational Experiences",
    excerpt: "Discover how our sustainable travel programs create deeper, more meaningful educational experiences while minimizing environmental impact.",
    date: "May 1, 2025",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    category: "Sustainability",
    readTime: "6 min read"
  };

  // Recent blog posts data
  const recentPosts = [
    {
      id: "kenya-food-program-impact",
      title: "The Impact of Our Food for Education Program in Kenya",
      excerpt: "Learn how our flagship program is transforming communities in Kenya through sustainable food initiatives and education.",
      date: "April 15, 2025",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      category: "Programs",
      readTime: "5 min read"
    },
    {
      id: "student-transformation-stories",
      title: "Student Transformation Stories: Beyond the Travel Experience",
      excerpt: "Hear from past participants about how their Kapes Adventures experience changed their perspective on global citizenship.",
      date: "April 5, 2025",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      category: "Student Stories",
      readTime: "8 min read"
    },
    {
      id: "planning-educational-travel",
      title: "Planning Meaningful Educational Travel in 2025",
      excerpt: "Our expert guides share insights on creating impactful educational travel experiences that align with curriculum goals.",
      date: "March 22, 2025",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      category: "Travel Tips",
      readTime: "4 min read"
    }
  ];

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

        {/* Featured post */}
        <section className="container-wide mb-16">
          <h2 className="text-2xl font-serif font-bold text-dragon-dark mb-8 border-b border-dragon-sand pb-4">
            Featured Article
          </h2>
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="h-64 md:h-full overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center mb-3">
                  <span className="bg-dragon-light/10 text-dragon text-xs font-medium px-3 py-1 rounded-full">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center text-dragon-gray text-sm ml-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{featuredPost.date}</span>
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-dragon-dark mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-dragon-gray mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="mt-auto">
                  <Button asChild className="text-white bg-dragon hover:bg-dragon-dark">
                    <Link to={`/blog/${featuredPost.id}`}>
                      Read Article <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent posts */}
        <section className="container-wide mb-16">
          <h2 className="text-2xl font-serif font-bold text-dragon-dark mb-8 border-b border-dragon-sand pb-4">
            Recent Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-dragon-light/10 text-dragon text-xs font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-dragon-gray text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-dragon-dark mb-3">
                    {post.title}
                  </h3>
                  <p className="text-dragon-gray text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center text-dragon-gray text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <Link to={`/blog/${post.id}`} className="text-dragon font-medium hover:text-dragon-dark transition-colors">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

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
