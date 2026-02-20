import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const steps = [
  {
    number: 1,
    title: "Score Your Program",
    description: "Take our free 5-minute assessment to see where your current trips stand.",
    image: "https://res.cloudinary.com/dng12bd0a/image/upload/v1747160296/WhatsApp_Image_2025-05-13_at_12.12.32_2_qbmzae.jpg",
    link: "/scorecard",
    linkLabel: "Take the Scorecard",
  },
  {
    number: 2,
    title: "Have a Conversation",
    description: "A 20-minute call. No pitch — just honest answers about what's possible.",
    image: "https://res.cloudinary.com/dng12bd0a/image/upload/v1747200052/IMG_0252_gstfij.jpg",
    link: "https://calendly.com/kapesuniforms/kapes-uniforms-consultation-clone",
    linkLabel: "Book a Call",
    external: true,
  },
  {
    number: 3,
    title: "Co-Design Your Trip",
    description: "We build a program around your curriculum, goals, and calendar.",
    image: "https://res.cloudinary.com/dng12bd0a/image/upload/v1747160176/Collection_5_s7opwi.jpg",
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
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-academy text-kapes-charcoal leading-tight">
            How to
            <br />
            <span className="text-kapes-orange">get started</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-8 lg:gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="text-center"
            >
              {/* Step Image */}
              <div className="rounded-2xl overflow-hidden mb-5 aspect-[4/3]">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Step Label */}
              <div className="inline-block bg-kapes-sand text-kapes-charcoal text-sm font-semibold tracking-wide uppercase px-4 py-1.5 rounded-full mb-3">
                Step {step.number}
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-academy text-kapes-charcoal mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-dragon-gray text-sm leading-relaxed mb-4 max-w-xs mx-auto">
                {step.description}
              </p>

              {/* Link */}
              {step.external ? (
                <a
                  href={step.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-kapes-orange font-semibold text-sm hover:underline"
                >
                  {step.linkLabel} &rarr;
                </a>
              ) : (
                <Link
                  to={step.link}
                  className="text-kapes-orange font-semibold text-sm hover:underline"
                >
                  {step.linkLabel} &rarr;
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetStartedProcess;
