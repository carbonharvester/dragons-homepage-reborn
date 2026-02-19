import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ClipboardCheck, Phone, Compass } from 'lucide-react';

const steps = [
  {
    number: 1,
    icon: ClipboardCheck,
    title: "Score Your Program",
    description: "Take our free 5-minute assessment to see where your current trips stand across 5 dimensions.",
    link: "/scorecard",
    linkLabel: "Take the Scorecard",
  },
  {
    number: 2,
    icon: Phone,
    title: "Talk to Our Kenya Team",
    description: "A 20-minute call about what's possible for your school. No pitch — just honest answers.",
    link: "https://calendly.com/kapesuniforms/kapes-uniforms-consultation-clone",
    linkLabel: "Book a Call",
    external: true,
  },
  {
    number: 3,
    icon: Compass,
    title: "Co-Design Your Trip",
    description: "We build a program around your curriculum, goals, and calendar. Your students join year-round work.",
    link: "/school-trips",
    linkLabel: "See How Trips Work",
  },
];

const GetStartedProcess = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-academy text-kapes-charcoal leading-tight">
            How to
            <br />
            <span className="text-kapes-orange">get started</span>
          </h2>
          <p className="text-xl text-dragon-gray mt-6 max-w-2xl mx-auto">
            From first conversation to boots on the ground — here's how schools partner with us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-[2px] bg-kapes-orange/20" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="text-center relative"
              >
                {/* Number circle */}
                <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-kapes-orange text-white flex items-center justify-center text-2xl font-academy relative z-10">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 mx-auto mb-4 text-dragon-gray">
                  <Icon className="w-full h-full stroke-[1.5]" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-academy text-kapes-charcoal mb-3">
                  {step.title}
                </h3>
                <p className="text-dragon-gray leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Link */}
                {step.external ? (
                  <a
                    href={step.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-kapes-orange font-semibold hover:underline"
                  >
                    {step.linkLabel} →
                  </a>
                ) : (
                  <Link
                    to={step.link}
                    className="text-kapes-orange font-semibold hover:underline"
                  >
                    {step.linkLabel} →
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GetStartedProcess;
