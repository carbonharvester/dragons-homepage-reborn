
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BlogPostError: React.FC = () => {
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
};

export default BlogPostError;
