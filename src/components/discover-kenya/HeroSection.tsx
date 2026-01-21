import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const HeroSection = () => {
  const heroImage = "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2070&auto=format&fit=crop";

  return (
    <section className="relative py-24 md:py-32 bg-dragon-dark overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Discover Kenya landscape"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          width="2070"
          height="1380"
          fetchPriority="high"
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
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-kapes-orange/20 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-kapes-orange" />
            </div>
            <span className="text-kapes-orange font-semibold text-sm uppercase tracking-wider">
              Your Destination
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-academy text-white mb-6">
            Discover <span className="text-kapes-orange">Kenya</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl">
            Explore the incredible diversity of landscapes, wildlife, and cultures that make Kenya
            a world-renowned destination for transformative educational travel.
          </p>

          {/* Kenya Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap gap-8 mt-10"
          >
            {[
              { number: '54M+', label: 'Population' },
              { number: '580,000 km²', label: 'Total Area' },
              { number: '50+', label: 'National Parks' },
              { number: '42+', label: 'Ethnic Groups' },
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
