
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(() => ["transforms", "connects", "uplifts", "awakens", "challenges", "empowers"], []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  const scrollToPrograms = () => {
    const programsSection = document.getElementById('programs');
    if (programsSection) {
      programsSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center">
      {/* Black background behind the image */}
      <div className="absolute inset-0 z-0 bg-black">
        {/* Use preloaded hero image - critical for page load */}
        <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{
          backgroundImage: 'url(https://res.cloudinary.com/dng12bd0a/image/upload/v1747118794/klein-500-2_l4o6ap.jpg)'
        }}>
          {/* Add hidden image for SEO with proper attributes */}
          <img src="https://res.cloudinary.com/dng12bd0a/image/upload/v1747118794/klein-500-2_l4o6ap.jpg" alt="Kapes Adventures hero image" className="hidden" width="1920" height="1080" fetchPriority="high" />
        </div>
        {/* Enhanced overlay for better text visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className="container-wide relative z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="hero-heading block">Travel that</span>
            <span className="relative flex w-full justify-start overflow-hidden md:pb-4 md:pt-1">
              &nbsp;
              {titles.map((title, index) => (
                <motion.span 
                  key={index} 
                  className="absolute font-semibold text-dragon-yellow" 
                  initial={{
                    opacity: 0,
                    y: "100"
                  }} 
                  transition={{
                    type: "spring",
                    stiffness: 50
                  }} 
                  animate={titleNumber === index ? {
                    y: 0,
                    opacity: 1
                  } : {
                    y: titleNumber > index ? -150 : 150,
                    opacity: 0
                  }}
                >
                  {title}
                </motion.span>
              ))}
            </span>
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl">Cultural immersion, wilderness exploration, and sustainable projects that empower communities and transforms lives</p>
          
          <div className="flex flex-wrap gap-4">
            <Button className="btn-primary text-lg h-12 w-full sm:w-auto" onClick={scrollToPrograms}>Explore Programs</Button>
            <Button className="bg-white text-dragon hover:bg-gray-100 px-6 py-3 rounded-md font-medium text-lg h-12 w-full sm:w-auto" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Hero };
