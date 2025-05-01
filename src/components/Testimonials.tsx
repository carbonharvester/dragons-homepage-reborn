
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "It was a once in a lifetime experience. I learned how to be grateful for the things I have and the things that are around me. because the people and the things we saw in Kenya, they didn't have too much, but they were still happy. And with the things that we have, we can still be happy even without wanting more.",
    author: "Loki",
    program: "Bolivia Semester Program"
  },
  {
    quote: "Dragons isn't a typical study abroad program—it's a transformative journey that pushed me out of my comfort zone in the best possible way. The mentorship from our instructors was invaluable.",
    author: "Michael T.",
    program: "China Gap Year"
  },
  {
    quote: "The combination of wilderness exploration, cultural immersion, and intentional reflection created a powerful learning environment unlike anything I've experienced before.",
    author: "Emma K.",
    program: "Nepal Summer Program"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="stories" className="py-20 bg-dragon">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Student Stories</h2>
          <p className="text-lg md:text-xl text-white opacity-80 max-w-3xl mx-auto">
            Hear directly from past participants about their transformative experiences abroad.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 md:p-12 shadow-lg">
            <div className="text-dragon-yellow mb-6">
              <Quote size={48} />
            </div>
            <blockquote className="mb-8">
              <p className="text-xl md:text-2xl font-serif text-dragon-dark mb-6">
                {testimonials[currentIndex].quote}
              </p>
              <footer>
                <p className="font-bold text-dragon">
                  {testimonials[currentIndex].author}
                </p>
                <p className="text-dragon-gray">
                  {testimonials[currentIndex].program}
                </p>
              </footer>
            </blockquote>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={handlePrev}
              className="p-3 rounded-full bg-white text-dragon hover:bg-dragon-beige transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentIndex === index ? 'bg-white' : 'bg-white/40'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={handleNext}
              className="p-3 rounded-full bg-white text-dragon hover:bg-dragon-beige transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
