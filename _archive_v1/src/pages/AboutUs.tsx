import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Heart, Leaf, Users, Sparkles, Equal, ArrowRight, Quote } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const values = [
  {
    icon: Heart,
    title: 'Authenticity',
    description: 'Creating genuine connections between students and communities.',
    color: 'bg-impact-rose',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Ensuring our programs benefit local environments and economies.',
    color: 'bg-impact-green',
  },
  {
    icon: Users,
    title: 'Reciprocity',
    description: 'Building mutually beneficial partnerships with communities.',
    color: 'bg-kapes-orange',
  },
  {
    icon: Sparkles,
    title: 'Transformation',
    description: 'Facilitating deep learning that changes perspectives.',
    color: 'bg-impact-purple',
  },
  {
    icon: Equal,
    title: 'Equality',
    description: 'Promoting fairness and inclusion in every cultural exchange.',
    color: 'bg-impact-blue',
  },
];

const AboutUs = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="About Us"
        description="From sustainable school uniforms to transformative travel experiences, we're reconnecting students with communities, nature, and what truly matters."
      />
      <Header />

      <main className="pt-16">
        {/* Hero Section - Justdiggit style */}
        <section className="relative py-32 md:py-40 bg-kapes-charcoal overflow-hidden">
          <div
            className="absolute inset-0 opacity-70"
            style={{
              backgroundImage: `url('/lovable-uploads/f40a88d4-343d-483d-a375-0f63c5154294.png')`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-kapes-charcoal/20 to-kapes-charcoal/60" />

          <div className="container-wide relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-academy text-white leading-[0.95]">
                Travel that
                <br />
                <span className="text-kapes-orange">transforms</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mt-8">
                Reconnecting students with communities, nature, and what truly matters.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Founder Story Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/lovable-uploads/c0bdd0e5-7b79-492d-8c2d-d91d5b892cee.png"
                    alt="Matthew Benjamin with students from Marasi Primary School"
                    className="w-full h-[400px] md:h-[500px] object-cover"
                  />
                </div>
                {!isMobile && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl max-w-xs"
                  >
                    <p className="text-sm text-dragon-gray">
                      <strong className="text-kapes-charcoal">2022:</strong> Our founder Matthew
                      with students from Marasi Primary School during our first trip.
                    </p>
                  </motion.div>
                )}
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-kapes-orange font-semibold text-sm uppercase tracking-wider">
                  How It Started
                </span>
                <h2 className="text-3xl md:text-4xl font-academy text-kapes-charcoal mt-3 mb-6">
                  From Uniforms to Adventures
                </h2>

                <div className="space-y-4 text-lg text-dragon-gray leading-relaxed">
                  <p>
                    Our story began with <strong className="text-kapes-charcoal">Kapes Uniforms</strong>,
                    founded by Matthew Benjamin in 2020 with a dual purpose: to transform the uniform
                    industry through sustainable practices and break down barriers to education.
                  </p>
                  <p>
                    In 2021, Matthew discovered a revolutionary carbon offset project in Kenya's
                    Kasigau Corridor, home to the world's first carbon neutral factory. Seeing how
                    environmental conservation and community development could work hand in hand
                    planted a seed.
                  </p>
                  <p>
                    A year later, <strong className="text-kapes-charcoal">Kapes Adventures</strong> was
                    born. We focus on Africa because it offers profound learning opportunities. Our
                    trips transform both participants and partner communities.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Button className="btn-action" asChild>
                    <Link to="/programs">
                      Explore Programs
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 md:py-28 bg-kapes-cream">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl p-8 md:p-10 shadow-sm"
              >
                <div className="w-14 h-14 bg-dragon rounded-xl flex items-center justify-center mb-6">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-academy text-kapes-charcoal mb-4">
                  Our Mission
                </h3>
                <p className="text-lg text-dragon-gray leading-relaxed">
                  To reconnect young people with nature, communities, and purpose through
                  transformative experiences that cultivate cultural understanding, environmental
                  stewardship, and global citizenship, while breaking down barriers to education
                  across Africa.
                </p>
              </motion.div>

              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="bg-dragon rounded-2xl p-8 md:p-10 shadow-sm"
              >
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-academy text-white mb-4">
                  Our Vision
                </h3>
                <p className="text-lg text-white/90 leading-relaxed">
                  A world where young people are empowered by deep connections to nature, vibrant
                  communities, and a global mindset to collaboratively shape a sustainable and
                  equitable future, where every child has access to a full education.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="text-kapes-orange font-semibold text-sm uppercase tracking-wider">
                What We Stand For
              </span>
              <h2 className="text-3xl md:text-5xl font-academy text-kapes-charcoal mt-3 mb-4">
                Our Core Values
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-kapes-cream rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
                >
                  <div
                    className={`w-14 h-14 ${value.color} rounded-xl flex items-center justify-center mx-auto mb-4`}
                  >
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="font-semibold text-lg text-kapes-charcoal mb-2">{value.title}</h4>
                  <p className="text-sm text-dragon-gray">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-20 md:py-28 bg-dragon-dark">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <Quote className="w-16 h-16 text-kapes-orange/30 mx-auto mb-6" />
              <blockquote className="text-xl md:text-2xl lg:text-3xl text-white leading-relaxed mb-8 font-light italic">
                "Experiential learning helps bring to life the things we can only do in theory.
                Seeing these enterprises firsthand, understanding how they contribute to a better
                world—the children can only do that firsthand, and it will change them as much as
                it's changed me."
              </blockquote>
              <div className="text-white/80">
                <div className="font-semibold text-lg">Brett Girven</div>
                <div className="text-sm">Former Principal, The Arbor School</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-kapes-cream">
          <div className="container-wide text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-academy text-kapes-charcoal mb-6">
                Ready to Transform Your Students?
              </h2>
              <p className="text-xl text-dragon-gray max-w-2xl mx-auto mb-8">
                Join the growing community of schools creating life-changing experiences for
                their students.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-action text-lg h-14 px-10" asChild>
                  <Link to="/programs">
                    Explore Programs
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
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

export default AboutUs;
