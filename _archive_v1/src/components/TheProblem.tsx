import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const TheProblem = () => {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://res.cloudinary.com/dng12bd0a/image/upload/v1747160268/WhatsApp_Image_2025-05-13_at_12.07.56_m0epad.jpg"
                  alt="Children in Kenya community"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
              </div>

              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute -bottom-6 -right-6 bg-kapes-orange text-white p-6 rounded-xl shadow-xl"
              >
                <div className="text-4xl font-gothic mb-1">1 in 3</div>
                <div className="text-sm font-medium opacity-90">
                  children in Kenya<br />go to school hungry
                </div>
              </motion.div>

              {/* Decorative accent */}
              <div className="absolute -z-10 -top-6 -left-6 w-full h-full border-2 border-dragon/20 rounded-2xl"></div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <span className="text-kapes-orange font-semibold text-sm uppercase tracking-wider">
              The Challenge
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-academy text-kapes-charcoal mt-3 mb-6 leading-tight">
              Communities need more than tourists—they need partners
            </h2>

            <div className="space-y-4 text-lg text-dragon-gray leading-relaxed">
              <p>
                Across Kenya, rural communities face interconnected challenges:
                <strong className="text-kapes-charcoal"> food insecurity, limited water access,
                and few economic opportunities</strong>—especially for women.
              </p>

              <p>
                Traditional tourism often bypasses these communities entirely.
                Travelers see wildlife but never connect with the people who share
                this land. Money flows to big operators, not local families.
              </p>

              <p>
                <strong className="text-kapes-charcoal">We believe travel can do better.</strong>
              </p>
            </div>

            {/* Key challenges list */}
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                { stat: "30%", label: "of rural Kenyans lack clean water" },
                { stat: "4M+", label: "children face food insecurity" },
                { stat: "60%", label: "of farmers are women, often unsupported" },
                { stat: "70%", label: "of tourism revenue leaves communities" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3 p-4 bg-kapes-cream rounded-lg"
                >
                  <span className="text-2xl font-gothic text-kapes-orange">{item.stat}</span>
                  <span className="text-sm text-dragon-gray">{item.label}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-10"
            >
              <Button className="btn-action" asChild>
                <Link to="/about">Learn How We're Different</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TheProblem;
