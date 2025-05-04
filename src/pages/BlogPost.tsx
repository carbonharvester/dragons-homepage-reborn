
import React from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";
import { Calendar, ArrowLeft, Share, Facebook, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getBlogPostBySlug, ContentfulBlogPost } from '@/services/contentful';
import { useQuery } from '@tanstack/react-query';

const BlogPost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

  const { data: post, isLoading, error } = useQuery({
    queryKey: ['blogPost', postId],
    queryFn: () => getBlogPostBySlug(postId || ''),
  });

  // Format image URL for Contentful images
  const getImageUrl = (imageField: any) => {
    if (!imageField || !imageField.fields || !imageField.fields.file) {
      return "https://images.unsplash.com/photo-1500673922987-e212871fec22"; // Fallback image
    }
    return imageField.fields.file.url.startsWith('//') 
      ? `https:${imageField.fields.file.url}` 
      : imageField.fields.file.url;
  };

  // If post is loading, show loading message
  if (isLoading) {
    return (
      <>
        <Header />
        <main className="py-16">
          <div className="container-wide text-center">
            <p>Loading blog post...</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // If post doesn't exist or there's an error, show not found message
  if (error || !post) {
    return (
      <>
        <Header />
        <main className="py-16">
          <div className="container-wide text-center">
            <h1 className="text-3xl font-serif font-bold text-dragon-dark mb-6">
              Blog Post Not Found
            </h1>
            <p className="text-dragon-gray mb-8">
              The blog post you're looking for doesn't exist or has been moved.
            </p>
            <Button asChild className="bg-dragon hover:bg-dragon-dark text-white">
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="pb-16">
        {/* Hero section */}
        <div className="w-full h-64 md:h-96 bg-gray-200 relative">
          <img 
            src={getImageUrl(post.fields.featuredImage)} 
            alt={post.fields.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        <div className="container-wide max-w-4xl">
          {/* Back to blog */}
          <div className="my-6">
            <Button 
              variant="ghost" 
              asChild 
              className="text-dragon hover:text-dragon-dark hover:bg-dragon-beige"
            >
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>

          {/* Article header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-dragon-light/10 text-dragon text-sm font-medium px-3 py-1 rounded-full">
                {post.fields.category}
              </span>
              <div className="flex items-center text-dragon-gray text-sm">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{post.fields.date}</span>
              </div>
              <span className="text-dragon-gray text-sm">
                {post.fields.readTime || "5 min read"}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-dragon-dark mb-6">
              {post.fields.title}
            </h1>
            
            {/* Author info */}
            <div className="flex items-center mb-8">
              <img 
                src={post.fields.authorImage ? getImageUrl(post.fields.authorImage) : "/lovable-uploads/5de3bb89-b98b-471d-b489-b486b74a96b8.png"} 
                alt={post.fields.author}
                className="w-12 h-12 rounded-full object-cover mr-4" 
              />
              <div>
                <h3 className="font-medium text-dragon-dark">{post.fields.author}</h3>
                <p className="text-sm text-dragon-gray">{post.fields.authorTitle || "Author"}</p>
              </div>
            </div>
          </div>
          
          {/* Article content */}
          <article className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-dragon-dark prose-p:text-dragon-gray prose-li:text-dragon-gray prose-blockquote:text-dragon prose-blockquote:border-dragon-light">
            <div dangerouslySetInnerHTML={{ __html: post.fields.content }} />
          </article>
          
          {/* Share links */}
          <div className="mt-12 pt-6 border-t border-dragon-sand">
            <div className="flex items-center gap-4">
              <span className="font-medium text-dragon-dark flex items-center">
                <Share className="h-4 w-4 mr-2" />
                Share this article:
              </span>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="rounded-full h-8 w-8 p-0">
                  <Facebook className="h-4 w-4 text-dragon" />
                  <span className="sr-only">Share on Facebook</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full h-8 w-8 p-0">
                  <Twitter className="h-4 w-4 text-dragon" />
                  <span className="sr-only">Share on Twitter</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full h-8 w-8 p-0">
                  <Linkedin className="h-4 w-4 text-dragon" />
                  <span className="sr-only">Share on LinkedIn</span>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Related posts - placeholder for future expansion */}
          <div className="mt-16">
            <h2 className="text-2xl font-serif font-bold text-dragon-dark mb-6">
              You might also like
            </h2>
            <div className="bg-dragon-beige p-8 text-center rounded-lg">
              <p className="text-dragon-dark mb-4">More blog posts coming soon!</p>
              <Button asChild className="bg-dragon hover:bg-dragon-dark text-white">
                <Link to="/blog">Return to Blog Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogPost;
