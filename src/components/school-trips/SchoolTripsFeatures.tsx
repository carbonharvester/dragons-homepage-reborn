import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Mountain, Heart, Award } from 'lucide-react';

const features = [
  {
    icon: Camera,
    title: "Creativity",
    description: "Documentary photography, storytelling, and art projects that capture the experience.",
  },
  {
    icon: Mountain,
    title: "Adventure",
    description: "Wildlife safaris, hiking, and outdoor challenges that build resilience and teamwork.",
  },
  {
    icon: Heart,
    title: "Service",
    description: "Hands-on community projects with measurable outcomes students can track.",
  },
  {
    icon: Award,
    title: "Recognition",
    description: "CAS hours, Duke of Edinburgh credits, and certificates for college applications.",
  },
];

const SchoolTripsFeatures = () => {
  return (
    <section id="programs" className="py-16 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-academy text-kapes-charcoal mb-4">
          What students <span className="text-kapes-orange">experience</span>
        </h2>
        <p className="text-xl text-dragon-gray max-w-2xl mx-auto">
          Every journey balances adventure, creativity, and meaningful service.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all"
          >
            <div className="w-12 h-12 bg-kapes-orange/10 rounded-xl flex items-center justify-center mb-4">
              <feature.icon className="w-6 h-6 text-kapes-orange" />
            </div>
            <h3 className="text-xl font-semibold text-kapes-charcoal mb-2">{feature.title}</h3>
            <p className="text-dragon-gray">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SchoolTripsFeatures;
