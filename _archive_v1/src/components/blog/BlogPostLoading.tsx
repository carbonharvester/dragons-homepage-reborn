
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BlogPostLoading: React.FC = () => {
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
};

export default BlogPostLoading;
