import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const stories = [
  {
    id: 1,
    name: "Emma Thompson",
    role: "Student, Class of 2024",
    quote:
      "This wasn't just a trip. It was a complete shift in how I see the world. Working alongside the women's group in Tsavo showed me what real community means.",
    image: "https://res.cloudinary.com/dng12bd0a/image/upload/v1747160176/Collection_5_s7opwi.jpg",
  },
  {
    id: 2,
    name: "Mary Mwende",
    role: "Community Leader, Kasigau",
    quote:
      "When students come to learn from us, it reminds our children that our traditions have value. The garden they helped plant now feeds 200 students daily.",
    image: "https://res.cloudinary.com/dng12bd0a/image/upload/v1747159769/Filip-C-Agoo-Everland-Marketing-Kenya-13983_atg3tn.jpg",
  },
  {
    id: 3,
    name: "Dr. Sarah Williams",
    role: "Environmental Science Teacher",
    quote:
      "Bringing my students to Kenya with Kapes was the most impactful professional development I've ever experienced. My students are now advocates for sustainability.",
    image: "https://res.cloudinary.com/dng12bd0a/image/upload/v1747200052/IMG_0252_gstfij.jpg",
  },
];

const StoriesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextStory = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const currentStory = stories[currentIndex];

  return (
    <section className="py-24 md:py-32 bg-kapes-sand">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-academy text-kapes-charcoal leading-tight">
            Stories of
            <br />
            <span className="text-kapes-orange">change</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStory.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
            >
              {/* Image — clean, no overlay */}
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={currentStory.image}
                  alt={currentStory.name}
                  className="w-full h-[350px] md:h-[450px] object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center">
                <blockquote className="text-2xl md:text-3xl text-kapes-charcoal leading-relaxed mb-8 font-academy">
                  &ldquo;{currentStory.quote}&rdquo;
                </blockquote>

                <div>
                  <div className="font-bold text-lg text-kapes-charcoal">
                    {currentStory.name}
                  </div>
                  <div className="text-dragon-gray">{currentStory.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prevStory}
              className="w-11 h-11 rounded-full border-2 border-kapes-charcoal/20 text-kapes-charcoal flex items-center justify-center hover:border-kapes-charcoal hover:bg-kapes-charcoal hover:text-white transition-all"
              aria-label="Previous story"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {stories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-kapes-orange w-8'
                      : 'bg-kapes-charcoal/20 w-2'
                  }`}
                  aria-label={`Go to story ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextStory}
              className="w-11 h-11 rounded-full border-2 border-kapes-charcoal/20 text-kapes-charcoal flex items-center justify-center hover:border-kapes-charcoal hover:bg-kapes-charcoal hover:text-white transition-all"
              aria-label="Next story"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
