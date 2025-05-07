
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { getAllBlogPosts, ContentfulBlogPost } from '@/services/contentful';
import { useQuery } from '@tanstack/react-query';
import { format, parseISO } from 'date-fns';

const BlogSection = () => {
  const { data: blogPosts, isLoading, error } = useQuery({
    queryKey: ['blogPostsHome'],
    queryFn: getAllBlogPosts,
  });

  // Format image URL for Contentful images
  const getImageUrl = (imageField: any) => {
    if (!imageField || !imageField.fields || !imageField.fields.file) {
      return "/lovable-uploads/15e3c0c3-6461-43da-866c-88c8a2129885.png"; // Fallback image
    }
    return imageField.fields.file.url.startsWith('//') 
      ? `https:${imageField.fields.file.url}` 
      : imageField.fields.file.url;
  };

  // Format date to d MMM yyyy format
  const formatDate = (dateString: string) => {
    try {
      // Try parsing the date string
      const date = parseISO(dateString);
      return format(date, 'd MMM yyyy');
    } catch (error) {
      // If parsing fails, return the original date string
      return dateString;
    }
  };

  // Get the first 3 blog posts to display
  const displayPosts = blogPosts?.slice(0, 3) || [];

  // If loading or error, show minimal content
  if (isLoading || error || displayPosts.length === 0) {
    return (
      <section className="py-20 bg-dragon-beige/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="section-heading">Latest From Our Blog</h2>
            <p className="section-subheading mx-auto">Discover insights, stories, and updates from our adventures and impact initiatives.</p>
          </div>
          <div className="text-center">
            <Button asChild className="btn-secondary">
              <Link to="/blog">View Our Blog</Link>
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-dragon-beige/30">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="section-heading">Latest From Our Blog</h2>
          <p className="section-subheading mx-auto">Discover insights, stories, and updates from our adventures and impact initiatives.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayPosts.map(post => (
            <div key={post.sys.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={getImageUrl(post.fields.featuredImage)} 
                  alt={post.fields.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-dragon text-white px-3 py-1 rounded-full text-xs font-medium">
                  {post.fields.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-dragon-gray mb-3">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{formatDate(post.fields.date)}</span>
                  </div>
                </div>
                <Link to={`/blog/${post.fields.slug}`}>
                  <h3 className="text-xl font-bold mb-2 text-dragon-dark hover:text-dragon transition-colors">{post.fields.title}</h3>
                </Link>
                <p className="text-dragon-gray mb-4 line-clamp-2">{post.fields.excerpt}</p>
                <Link to={`/blog/${post.fields.slug}`} className="text-dragon font-medium hover:underline">
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
