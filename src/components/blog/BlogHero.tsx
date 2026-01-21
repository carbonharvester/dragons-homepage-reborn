import React from 'react';
import { motion } from 'framer-motion';

interface BlogHeroProps {
  title: string;
  description: string;
}

const BlogHero: React.FC<BlogHeroProps> = ({ title, description }) => {
  return (
    <section className="relative py-20 md:py-28 bg-dragon-dark overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,107,53,0.3),_transparent_70%)]" />
      </div>

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-kapes-orange font-semibold text-sm uppercase tracking-wider">
            Stories & Insights
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-academy text-white mt-3 mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/80">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogHero;
