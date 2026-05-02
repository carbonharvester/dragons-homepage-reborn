import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { summerAbroad } from '@/data/programsData';
import ProgramCard from '@/components/programs/ProgramCard';
import { Button } from '@/components/ui/button';
import WaitingListForm from '@/components/WaitingListForm';
import { ArrowRight, Camera, Leaf, Users, Award } from "lucide-react";

const SummerAbroad = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Summer Programs | Kapes Adventures"
        description="2-4 week immersive summer experiences in Kenya for ages 16-21. Photography, permaculture, and community impact."
        keywords="summer abroad, gap year Kenya, photography program, permaculture course, student travel Africa"
      />
      <Header />
      <main className="pt-16">
        {/* Hero Section - Justdiggit Style */}
        <section className="relative py-32 md:py-40 bg-kapes-charcoal overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://res.cloudinary.com/dng12bd0a/image/upload/v1747126747/Klein-08863_ef3b4d.jpg"
              alt=""
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-kapes-charcoal/20 to-kapes-charcoal/60" />
          </div>

          <div className="container-wide relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-academy text-white leading-[0.95]">
                A summer that
                <br />
                <span className="text-kapes-orange">changes everything</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mt-8">
                2-4 weeks of hands-on learning, adventure, and real impact.
                Return with skills, stories, and a new perspective.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
              >
                <WaitingListForm>
                  <Button className="btn-action text-lg px-10 py-6">
                    Apply Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </WaitingListForm>
                <Button className="btn-ghost text-lg px-10 py-6" asChild>
                  <a href="#programs">View Programs</a>
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-wrap justify-center gap-12 mt-16"
              >
                {[
                  { number: '2-4 Weeks', label: 'Duration' },
                  { number: '16-21', label: 'Age Range' },
                  { number: '8-15', label: 'Group Size' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl md:text-3xl font-gothic text-kapes-orange">{stat.number}</div>
                    <div className="text-sm text-white/70">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Two Tracks */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-academy text-kapes-charcoal">
                Choose your <span className="text-kapes-orange">path</span>
              </h2>
              <p className="text-xl text-dragon-gray mt-4 max-w-2xl mx-auto">
                Two immersive tracks, each designed to develop real skills while creating lasting impact.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Photography Track */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-kapes-cream rounded-3xl overflow-hidden"
              >
                <div className="aspect-[4/3] relative">
                  <img
                    src="https://res.cloudinary.com/dng12bd0a/image/upload/v1747126747/Klein-08863_ef3b4d.jpg"
                    alt="Photography program"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                    <Camera className="w-5 h-5 text-kapes-orange" />
                    <span className="font-semibold">Photography</span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-academy text-kapes-charcoal mb-4">
                    Capturing Kenya
                  </h3>
                  <p className="text-dragon-gray mb-6">
                    Learn documentary photography from professional mentors while capturing
                    wildlife, communities, and conservation stories. Build a portfolio that
                    tells meaningful stories.
                  </p>
                  <Button className="btn-action" asChild>
                    <a href="/programs/capturing-kenya">
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </motion.div>

              {/* Permaculture Track */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-kapes-cream rounded-3xl overflow-hidden"
              >
                <div className="aspect-[4/3] relative">
                  <img
                    src="https://res.cloudinary.com/dng12bd0a/image/upload/v1747160268/WhatsApp_Image_2025-05-13_at_12.07.56_m0epad.jpg"
                    alt="Permaculture program"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                    <Leaf className="w-5 h-5 text-impact-green" />
                    <span className="font-semibold">Permaculture</span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-academy text-kapes-charcoal mb-4">
                    Feeding the Future
                  </h3>
                  <p className="text-dragon-gray mb-6">
                    Hands-on sustainable agriculture training. Work with local farmers,
                    help build school gardens, and learn food systems that nourish
                    communities for generations.
                  </p>
                  <Button className="btn-action" asChild>
                    <a href="/programs/feeding-the-future">
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What You'll Gain */}
        <section className="py-20 md:py-28 bg-kapes-charcoal text-white">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-academy">
                What you'll <span className="text-kapes-orange">gain</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: Award,
                  title: "Skills That Stand Out",
                  description: "Return with a portfolio, certificates, and experiences that make college applications and job interviews shine.",
                },
                {
                  icon: Users,
                  title: "Global Connections",
                  description: "Build friendships with peers from around the world and lasting relationships with community members.",
                },
                {
                  icon: Leaf,
                  title: "Real Impact",
                  description: "Your work contributes to school gardens feeding 200+ students daily and conservation projects protecting wildlife.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-kapes-orange" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-white/70">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="py-20 md:py-28 bg-kapes-cream scroll-mt-24">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-academy text-kapes-charcoal mb-4">
                Summer 2026 <span className="text-kapes-orange">Programs</span>
              </h2>
              <p className="text-xl text-dragon-gray max-w-2xl mx-auto">
                Limited spots available. Applications open now.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
              {summerAbroad.map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ProgramCard program={program} />
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <WaitingListForm>
                <Button className="btn-action text-lg px-12 py-6">
                  Start Your Application
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </WaitingListForm>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SummerAbroad;
