import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import CalendlyEmbed from "@/components/CalendlyEmbed";

const EducatorTripsHero = () => {
  return (
    <section className="relative py-32 md:py-40 bg-kapes-charcoal overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070')`,
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
            Educator journeys that
            <br />
            <span className="text-kapes-orange">inspire</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mt-8">
            Professional development experiences that expand teaching perspectives and build global classroom connections.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
          >
            <Button className="btn-action text-lg px-10 py-6" asChild>
              <a href="#programs">Explore Programs</a>
            </Button>
            <CalendlyEmbed
              url="https://calendly.com/kapesuniforms/kapes-uniforms-consultation-clone"
              text="Schedule a Consultation"
            >
              <Button className="btn-ghost text-lg px-10 py-6">
                Schedule a Call
              </Button>
            </CalendlyEmbed>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-12 mt-16"
          >
            {[
              { number: '7-14 Days', label: 'Trip Duration' },
              { number: 'All Levels', label: 'Educators Welcome' },
              { number: 'CPD', label: 'Certified' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-gothic text-kapes-orange">{stat.number}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducatorTripsHero;
