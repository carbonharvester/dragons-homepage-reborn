import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Utensils, Droplets, ArrowRight } from 'lucide-react';

const programs = [
  {
    title: "Seeds2Education",
    description: "Year-round permaculture gardens feeding 200+ children daily at partner schools. Hunger is the #1 barrier to learning.",
    image: "https://res.cloudinary.com/dng12bd0a/image/upload/v1747160268/WhatsApp_Image_2025-05-13_at_12.07.56_m0epad.jpg",
    link: "/programs/seeds2education",
    icon: Utensils,
    iconBg: "bg-impact-green",
    tag: "Year-Round Program",
  },
  {
    title: "Water Empowering Women",
    description: "Women-led cooperatives building water infrastructure year-round. When women have water, girls stay in school.",
    image: "https://res.cloudinary.com/dng12bd0a/image/upload/v1747159769/Filip-C-Agoo-Everland-Marketing-Kenya-13983_atg3tn.jpg",
    link: "/programs/empowering-women",
    icon: Droplets,
    iconBg: "bg-impact-rose",
    tag: "Year-Round Program",
  },
];

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
          className="text-lg md:text-xl text-dragon-gray text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          Most trip companies build projects for visitors. We build programs
          for communities — then invite your students to join. These programs
          run year-round, with or without a school group on the ground.
        </motion.p>

        {/* Two Programs — Clean card layout, no text overlay */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link to={program.link} className="block">
                  <div className="rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow duration-300">
                    {/* Image — no overlay */}
                    <div className="relative overflow-hidden">
                      <img
                        src={program.image}
                        alt={`${program.title} program`}
                        className="w-full aspect-[16/10] object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <div className={`w-8 h-8 ${program.iconBg} rounded-full flex items-center justify-center`}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="bg-white/90 backdrop-blur-sm text-kapes-charcoal text-sm font-medium px-3 py-1 rounded-full">
                          {program.tag}
                        </span>
                      </div>
                    </div>

                    {/* Content — below image */}
                    <div className="p-6 md:p-8">
                      <h3 className="text-2xl md:text-3xl font-academy text-kapes-charcoal mb-3 group-hover:text-kapes-orange transition-colors">
                        {program.title}
                      </h3>
                      <p className="text-dragon-gray text-base md:text-lg mb-4 leading-relaxed">
                        {program.description}
                      </p>
                      <div className="flex items-center text-kapes-orange font-semibold">
                        Learn more <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
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
