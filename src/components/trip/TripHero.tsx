import React from 'react';
import { motion } from 'framer-motion';

interface TripHeroProps {
  title: string;
  subtitle: string;
  category: string;
  imagePath: string;
}

const TripHero = ({ title, subtitle, category, imagePath }: TripHeroProps) => {
  return (
    <section className="relative py-32 md:py-40 bg-kapes-charcoal overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={imagePath}
          alt={`${title} project`}
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          width="1200"
          height="800"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-kapes-charcoal/20 to-kapes-charcoal/60" />
      </div>

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-block bg-kapes-orange text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
            {category}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-academy text-white leading-[0.95]">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mt-8">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TripHero;
