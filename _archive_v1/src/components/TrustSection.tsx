import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Partner school logos
const partnerLogos = [
  { name: "The British International School Jeddah", id: 1, logo: "/logos/bisj-logo.jpg" },
  { name: "Fairgreen International School", id: 2, logo: "/logos/fairgreen-logo.png" },
  { name: "American Community School of Abu Dhabi", id: 3, logo: "/logos/acs-logo.jpg" },
  { name: "Cairo American College", id: 4, logo: "/logos/cac-logo.png" },
  { name: "North London Collegiate School Dubai", id: 5, logo: "/logos/nlcs-logo.png" },
];

const TrustSection = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container-wide">
        {/* Header - Justdiggit style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-academy text-kapes-charcoal leading-tight">
            Trips curated for
            <br />
            <span className="text-kapes-orange">leading schools</span>
          </h2>
        </motion.div>

        {/* Partner Schools Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 mb-16"
        >
          {partnerLogos.map((logo, index) => (
            <motion.div
              key={logo.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="flex items-center justify-center"
            >
              <img
                src={logo.logo}
                alt={logo.name}
                className="h-16 md:h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center"
        >
          <Button className="btn-action text-lg px-12 py-6" asChild>
            <Link to="/school-trips#programs">Explore Trips</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
