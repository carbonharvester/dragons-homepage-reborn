import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Utensils, Droplets, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section id="what-we-do" className="py-24 md:py-32 bg-white">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-academy text-kapes-charcoal leading-tight">
            The impact doesn't start when
            <br />
            <span className="text-kapes-orange">your students arrive.</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-xl text-dragon-gray text-center max-w-3xl mx-auto mb-16"
        >
          Most trip companies build projects for visitors. We build programs
          for communities — then invite your students to join. These programs
          run year-round, with or without a school group on the ground.
        </motion.p>

        {/* Two Programs */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Seeds2Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group"
          >
            <Link to="/programs/seeds2education" className="block">
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dng12bd0a/image/upload/v1747160268/WhatsApp_Image_2025-05-13_at_12.07.56_m0epad.jpg"
                  alt="Seeds2Education program"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-impact-green rounded-full flex items-center justify-center">
                      <Utensils className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-white/80 font-medium">School Trip</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-academy text-white mb-3">
                    Seeds2Education
                  </h3>
                  <p className="text-white/80 text-lg mb-4">
                    Year-round permaculture gardens feeding 200+ children daily
                    at partner schools. Hunger is the #1 barrier to learning.
                    Your students help expand what's already working.
                  </p>
                  <div className="flex items-center text-kapes-orange font-semibold">
                    Learn more <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>

          </motion.div>

          {/* Water Empowering Women */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group"
          >
            <Link to="/programs/empowering-women" className="block">
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dng12bd0a/image/upload/v1747159769/Filip-C-Agoo-Everland-Marketing-Kenya-13983_atg3tn.jpg"
                  alt="Water Empowering Women program"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-impact-rose rounded-full flex items-center justify-center">
                      <Droplets className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-white/80 font-medium">School Trip</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-academy text-white mb-3">
                    Water Empowering Women
                  </h3>
                  <p className="text-white/80 text-lg mb-4">
                    Women-led cooperatives building water infrastructure year-round.
                    When women have water, girls stay in school. Your students
                    work alongside the women leading this.
                  </p>
                  <div className="flex items-center text-kapes-orange font-semibold">
                    Learn more <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>

          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center"
        >
          <Button className="btn-primary text-lg px-12 py-6" asChild>
            <Link to="/school-trips">View All School Trips</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
