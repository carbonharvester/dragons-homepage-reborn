import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const SchoolTripsCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-16"
    >
      <div className="bg-kapes-orange rounded-3xl p-8 md:p-16 text-center text-white">
        <h2 className="text-3xl md:text-5xl font-academy mb-6">
          Ready to bring your
          <br />
          students to Kenya?
        </h2>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
          Let's design a journey that aligns with your curriculum, creates real impact,
          and transforms your students' perspectives.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-white text-kapes-orange hover:bg-white/90 px-10 py-6 rounded-full font-bold text-lg" asChild>
            <a
              href="https://calendly.com/kapesuniforms/kapes-uniforms-consultation-clone"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule a Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default SchoolTripsCTA;
