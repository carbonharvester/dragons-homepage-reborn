
import React from 'react';
import { Button } from "@/components/ui/button";

const BlogNewsletter: React.FC = () => {
  return (
    <section className="bg-dragon-beige py-12">
      <div className="container-wide max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-academy text-dragon-dark mb-4">
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
  );
};

export default BlogNewsletter;
