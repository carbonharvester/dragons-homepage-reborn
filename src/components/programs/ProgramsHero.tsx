import React from 'react';
import { motion } from 'framer-motion';

const ProgramsHero = () => {
  return (
    <section className="relative py-32 md:py-40 bg-kapes-charcoal overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{
            backgroundImage: `url('https://cdn.shopify.com/s/files/1/0777/3326/5724/files/A7404516.jpg?v=1746515670')`,
          }}
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
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-academy text-white leading-[0.95]">
            Programs that
            <br />
            <span className="text-kapes-orange">create impact</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mt-8">
            From school trips to summer adventures, each journey creates lasting change.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsHero;
