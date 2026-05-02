import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, Handshake } from 'lucide-react';

const PartnerHero = () => {
  return (
    <section className="relative py-24 md:py-32 bg-dragon-dark overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(255,107,53,0.3),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_rgba(17,87,64,0.3),_transparent_50%)]" />
      </div>

      <div className="container-wide relative z-10 pt-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-kapes-orange/20 flex items-center justify-center">
              <Handshake className="w-6 h-6 text-kapes-orange" />
            </div>
          </div>
          <span className="text-kapes-orange font-semibold text-sm uppercase tracking-wider">
            Join Our Network
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-academy text-white mt-3 mb-6">
            Partner With <span className="text-kapes-orange">Kapes Adventures</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Expand your offering with purpose-driven travel experiences while sharing in the success
            through our generous profit-sharing model.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Button
              className="btn-action text-lg h-14 px-10"
              onClick={() => document.getElementById('partnership-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Become a Partner
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>

          {/* Partner Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-8 mt-12"
          >
            {[
              { number: '40%', label: 'Revenue Share' },
              { number: '10+', label: 'Active Partners' },
              { number: '100%', label: 'Support Included' },
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

export default PartnerHero;
