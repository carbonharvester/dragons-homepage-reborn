import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Shield, Award, BookOpen } from 'lucide-react';

// Partner school logos
const partnerLogos = [
  { name: "The British International School Jeddah", id: 1, logo: "/logos/bisj-logo.jpg" },
  { name: "Fairgreen International School", id: 2, logo: "/logos/fairgreen-logo.png" },
  { name: "American Community School of Abu Dhabi", id: 3, logo: "/logos/acs-logo.jpg" },
  { name: "Cairo American College", id: 4, logo: "/logos/cac-logo.png" },
  { name: "North London Collegiate School Dubai", id: 5, logo: "/logos/nlcs-logo.png" },
];

const badges = [
  { icon: Shield, label: "BS 8848 Compliant" },
  { icon: Award, label: "IB CAS Aligned" },
  { icon: BookOpen, label: "Published Impact Reports" },
];

const TrustSection = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-academy text-kapes-charcoal leading-tight">
            Trips curated for
            <br />
            <span className="text-kapes-orange">leading schools</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-lg text-dragon-gray text-center mb-12"
        >
          Trusted by international schools across 8 countries
        </motion.p>

        {/* Partner Schools Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 mb-12"
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
                className="h-16 md:h-20 w-auto object-contain hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Compliance Badges */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mb-16"
        >
          {badges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div key={badge.label} className="flex items-center gap-2 text-dragon-gray">
                <Icon className="w-5 h-5 text-kapes-orange" />
                <span className="text-sm font-medium">{badge.label}</span>
              </div>
            );
          })}
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
