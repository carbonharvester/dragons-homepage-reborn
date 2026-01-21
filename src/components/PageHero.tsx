import React from 'react';
import { motion } from 'framer-motion';

interface PageHeroProps {
  tagline: string;
  title: string;
  highlightedText?: string;
  description: string;
  backgroundImage?: string;
  stats?: Array<{ number: string; label: string }>;
}

const PageHero: React.FC<PageHeroProps> = ({
  tagline,
  title,
  highlightedText,
  description,
  backgroundImage,
  stats,
}) => {
  return (
    <section className="relative py-24 md:py-32 bg-dragon-dark overflow-hidden">
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-70"
            style={{ backgroundImage: `url('${backgroundImage}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dragon-dark/20 to-dragon-dark/60" />
        </div>
      )}

      <div className="container-wide relative z-10 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="text-kapes-orange font-semibold text-sm uppercase tracking-wider">
            {tagline}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-academy text-white mt-3 mb-6">
            {title}{' '}
            {highlightedText && (
              <span className="text-kapes-orange">{highlightedText}</span>
            )}
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">{description}</p>

          {/* Stats */}
          {stats && stats.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap gap-8 mt-10"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-gothic text-kapes-orange">{stat.number}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;
