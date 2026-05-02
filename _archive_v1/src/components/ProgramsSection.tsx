import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const programs = [
  {
    title: "School Trips",
    subtitle: "Ages 12-18",
    description: "Immersive journeys where students work alongside community partners on real projects.",
    image: "https://cdn.shopify.com/s/files/1/0777/3326/5724/files/A7404093_2.jpg?v=1746502728",
    link: "/school-trips",
    tag: "CAS & Service Learning",
  },
  {
    title: "Summer Programs",
    subtitle: "Ages 16-21",
    description: "2-4 week intensive experiences in photography, permaculture, or community development.",
    image: "https://res.cloudinary.com/dng12bd0a/image/upload/v1747160176/Collection_5_s7opwi.jpg",
    link: "/summer-abroad",
    tag: "Gap Year Ready",
  },
  {
    title: "Educator Journeys",
    subtitle: "All Educators",
    description: "Professional development that transforms teaching through global perspectives.",
    image: "https://res.cloudinary.com/dng12bd0a/image/upload/v1747160296/WhatsApp_Image_2025-05-13_at_12.12.32_2_qbmzae.jpg",
    link: "/educator-trips",
    tag: "CPD Certified",
  },
];

const ProgramsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-kapes-cream">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-academy text-kapes-charcoal leading-tight">
            Join a
            <br />
            <span className="text-kapes-orange">journey</span>
          </h2>
          <p className="text-xl text-dragon-gray mt-6 max-w-2xl mx-auto">
            Every program is designed to create meaningful impact for both travelers and communities.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link to={program.link} className="block group h-full">
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-kapes-charcoal">
                      {program.tag}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-baseline justify-between mb-2">
                      <h3 className="text-2xl font-academy text-kapes-charcoal group-hover:text-kapes-orange transition-colors">
                        {program.title}
                      </h3>
                      <span className="text-sm text-dragon-gray">{program.subtitle}</span>
                    </div>
                    <p className="text-dragon-gray flex-1">
                      {program.description}
                    </p>
                    <div className="mt-4 flex items-center text-kapes-orange font-medium group-hover:gap-2 transition-all">
                      Learn more <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center"
        >
          <Button className="btn-action text-lg px-12 py-6" asChild>
            <Link to="/programs">View All Programs</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsSection;
