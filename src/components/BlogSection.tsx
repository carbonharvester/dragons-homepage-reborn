
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Magic of Kenya Wildlife Conservation",
    excerpt: "Discover how our conservation efforts are helping protect Kenya's magnificent wildlife.",
    date: "April 10, 2025",
    author: "Sarah Johnson",
    image: "/lovable-uploads/15e3c0c3-6461-43da-866c-88c8a2129885.png",
    category: "Conservation"
  },
  {
    id: 2,
    title: "Permaculture Designs Transforming Lives",
    excerpt: "How sustainable agriculture practices are changing communities across East Africa.",
    date: "March 28, 2025",
    author: "Michael Thompson",
    image: "/lovable-uploads/9754806b-a818-4c3f-bb62-aeffe98e97f5.png",
    category: "Education"
  },
  {
    id: 3,
    title: "Student Stories: Life-Changing Adventures",
    excerpt: "Read the transformative experiences of students on our educational journeys.",
    date: "March 15, 2025",
    author: "Emma Williams",
    image: "/lovable-uploads/fc764836-7162-400c-a486-00fe9d99f975.png",
    category: "Student Stories"
  }
];

const BlogSection = () => {
  return (
    <section className="py-20 bg-dragon-beige/30">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="section-heading">Latest From Our Blog</h2>
          <p className="section-subheading mx-auto">Discover insights, stories, and updates from our adventures and impact initiatives.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-dragon text-white px-3 py-1 rounded-full text-xs font-medium">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-dragon-gray mb-3 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                </div>
                <Link to={`/blog/${post.id}`}>
                  <h3 className="text-xl font-bold mb-2 text-dragon-dark hover:text-dragon transition-colors">{post.title}</h3>
                </Link>
                <p className="text-dragon-gray mb-4 line-clamp-2">{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="text-dragon font-medium hover:underline">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild className="btn-secondary">
            <Link to="/blog">View All Blog Posts</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
