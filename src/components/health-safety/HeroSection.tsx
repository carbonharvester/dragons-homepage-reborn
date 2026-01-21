import React from "react";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-20 md:py-28 bg-dragon-dark overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(34,197,94,0.3),_transparent_70%)]" />
      </div>

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-impact-green/20 flex items-center justify-center">
              <Shield className="w-6 h-6 text-impact-green" />
            </div>
            <span className="text-kapes-orange font-semibold text-sm uppercase tracking-wider">
              Your Safety Matters
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-academy text-white mb-6">
            Health and <span className="text-kapes-orange">Safety</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl">
            Your wellbeing is our top priority. Learn how we ensure a safe, transformative
            experience during our educational travel programs.
          </p>

          {/* Safety Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap gap-8 mt-10"
          >
            {[
              { number: '24/7', label: 'Support Available' },
              { number: '100%', label: 'Safety Record' },
              { number: 'Certified', label: 'First Aid Staff' },
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
