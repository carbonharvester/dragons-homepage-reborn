
import React from 'react';

interface BlogHeroProps {
  title: string;
  description: string;
}

const BlogHero: React.FC<BlogHeroProps> = ({ title, description }) => {
  return (
    <section className="bg-dragon-beige py-12 mb-16">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-academy text-dragon-dark mb-6">
            {title}
          </h1>
          <p className="text-lg text-dragon-gray mb-6">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
