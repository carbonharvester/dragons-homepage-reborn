import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  imgTimestamp: number;
}

const HeroSection = ({ imgTimestamp }: HeroSectionProps) => {
  return (
    <section className="relative py-24 md:py-32 bg-dragon-dark overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop&t=${imgTimestamp}')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dragon-dark/20 to-dragon-dark/60" />
      </div>

      <div className="container-wide relative z-10 pt-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="text-kapes-orange font-semibold text-sm uppercase tracking-wider">
            Progressive Learning
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-academy text-white mt-3 mb-6">
            Multi-Year <span className="text-kapes-orange">Curriculum</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mb-8">
            A progressive educational journey that builds skills, confidence, and global
            citizenship over three transformative years.
          </p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap gap-8 mt-10"
          >
            {[
              { number: '3 Years', label: 'Program Duration' },
              { number: 'Progressive', label: 'Skill Building' },
              { number: 'Global', label: 'Citizenship' },
              { number: 'Certified', label: 'Curriculum' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-gothic text-kapes-orange">{stat.number}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
