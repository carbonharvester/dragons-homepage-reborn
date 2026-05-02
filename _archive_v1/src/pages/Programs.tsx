import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import ProgramsHero from '@/components/programs/ProgramsHero';
import { Button } from '@/components/ui/button';
import { ArrowRight, GraduationCap, Sun, Users } from 'lucide-react';

const programCategories = [
  {
    title: "School Trips",
    subtitle: "Ages 12-18",
    description: "Immersive journeys designed for schools. Students work on real community projects while earning CAS hours and developing global citizenship.",
    impact: "350+ students transformed",
    image: "https://cdn.shopify.com/s/files/1/0777/3326/5724/files/A7404093_2.jpg?v=1746502728",
    link: "/school-trips",
    icon: GraduationCap,
    features: ["CAS/IB Accredited", "10-28 students", "Curriculum aligned"],
  },
  {
    title: "Summer Programs",
    subtitle: "Ages 16-21",
    description: "2-4 week intensive experiences in photography or permaculture. Build a portfolio, gain certificates, and create lasting impact.",
    impact: "Gap year ready",
    image: "https://res.cloudinary.com/dng12bd0a/image/upload/v1747126747/Klein-08863_ef3b4d.jpg",
    link: "/summer-abroad",
    icon: Sun,
    features: ["Photography track", "Permaculture track", "Small groups"],
  },
  {
    title: "Educator Journeys",
    subtitle: "All educators",
    description: "Professional development that expands perspectives. Experience Kenya firsthand and bring global connections back to your classroom.",
    impact: "CPD certified",
    image: "https://res.cloudinary.com/dng12bd0a/image/upload/v1747160296/WhatsApp_Image_2025-05-13_at_12.12.32_2_qbmzae.jpg",
    link: "/educator-trips",
    icon: Users,
    features: ["7-14 days", "All levels welcome", "Leadership focus"],
  },
];

const Programs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Programs | Kapes Adventures"
        description="Transformative educational programs in Kenya. School trips, summer programs, and educator journeys that create real impact."
      />
      <Header />

      <main className="pt-16">
        <ProgramsHero />

        {/* Programs Grid */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-academy text-kapes-charcoal mb-4">
                Find your <span className="text-kapes-orange">journey</span>
              </h2>
              <p className="text-xl text-dragon-gray max-w-2xl mx-auto">
                Every program is designed to create meaningful impact for travelers and communities alike.
              </p>
            </motion.div>

            <div className="space-y-16">
              {programCategories.map((program, index) => (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Image */}
                    <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                      <Link to={program.link} className="block group">
                        <div className="relative rounded-3xl overflow-hidden">
                          <img
                            src={program.image}
                            alt={program.title}
                            className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                            <program.icon className="w-5 h-5 text-kapes-orange" />
                            <span className="font-semibold text-kapes-charcoal">{program.subtitle}</span>
                          </div>
                        </div>
                      </Link>
                    </div>

                    {/* Content */}
                    <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                      <Link to={program.link} className="block group">
                        <h3 className="text-3xl md:text-4xl font-academy text-kapes-charcoal mb-4 group-hover:text-kapes-orange transition-colors">
                          {program.title}
                        </h3>
                      </Link>
                      <p className="text-lg text-dragon-gray mb-6 leading-relaxed">
                        {program.description}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {program.features.map((feature) => (
                          <span
                            key={feature}
                            className="bg-kapes-cream px-4 py-2 rounded-full text-sm font-medium text-kapes-charcoal"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Impact & CTA */}
                      <div className="flex items-center gap-6">
                        <Button className="btn-action" asChild>
                          <Link to={program.link}>
                            Explore
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Link>
                        </Button>
                        <span className="text-kapes-orange font-gothic text-lg">
                          {program.impact}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-kapes-orange">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center text-white"
            >
              <h2 className="text-3xl md:text-5xl font-academy mb-6">
                Not sure which program
                <br />
                is right for you?
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                Let's chat. We'll help you find the perfect fit based on your goals,
                group size, and timeline.
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
                <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-kapes-orange px-10 py-6 rounded-full font-bold text-lg" asChild>
                  <Link to="/faq">View FAQ</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Programs;
