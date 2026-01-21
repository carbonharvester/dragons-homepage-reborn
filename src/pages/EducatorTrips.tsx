import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import EducatorTripsHero from '@/components/educator-trips/EducatorTripsHero';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, Users, Award, BookOpen } from 'lucide-react';

const benefits = [
  {
    icon: Globe,
    title: "Global Perspective",
    description: "Experience education through a different lens. Visit schools, meet local educators, and discover teaching approaches that transform your own practice.",
  },
  {
    icon: Users,
    title: "Lasting Connections",
    description: "Build relationships with fellow educators from around the world and with community members in Kenya that extend beyond the trip.",
  },
  {
    icon: Award,
    title: "CPD Certified",
    description: "Earn professional development credits while gaining experiences that make you a more effective, globally-minded educator.",
  },
  {
    icon: BookOpen,
    title: "Classroom Ready",
    description: "Return with resources, stories, and perspectives you can immediately bring into your teaching and share with students.",
  },
];

const EducatorTrips = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Educator Journeys | Kapes Adventures"
        description="Professional development experiences for educators. CPD certified journeys that expand perspectives and build global classroom connections."
        keywords="educator trips, teacher professional development, CPD travel, educational travel Kenya"
      />
      <Header />
      <main className="pt-16">
        <EducatorTripsHero />

        {/* Intro Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-academy text-kapes-charcoal mb-6">
                Teaching transforms when
                <span className="text-kapes-orange"> you do</span>
              </h2>
              <p className="text-xl text-dragon-gray leading-relaxed">
                The best educators are lifelong learners. Our educator journeys take you beyond
                the conference room into real communities, schools, and conservation projects.
                These experiences reshape how you teach and inspire your students.
              </p>
            </motion.div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-kapes-cream rounded-2xl p-6 text-center"
                >
                  <div className="w-14 h-14 bg-kapes-orange/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-7 h-7 text-kapes-orange" />
                  </div>
                  <h3 className="text-lg font-semibold text-kapes-charcoal mb-2">{benefit.title}</h3>
                  <p className="text-dragon-gray text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 md:py-28 bg-kapes-charcoal text-white">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-5xl font-academy mb-6">
                  What you'll
                  <span className="text-kapes-orange"> experience</span>
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      title: "School Visits & Exchanges",
                      description: "Spend time in Kenyan classrooms, observe different teaching methods, and share your own expertise with local educators.",
                    },
                    {
                      title: "Community Immersion",
                      description: "Work alongside women's cooperatives, conservation teams, and sustainable agriculture projects. Experience the challenges and solutions firsthand.",
                    },
                    {
                      title: "Wildlife & Conservation",
                      description: "Safari experiences in world-famous reserves, learning how education and conservation intersect in Kenya.",
                    },
                    {
                      title: "Reflection & Planning",
                      description: "Dedicated time to process your experiences and plan how to integrate new perspectives into your teaching.",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                      <p className="text-white/70">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="rounded-3xl overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/dng12bd0a/image/upload/v1747160296/WhatsApp_Image_2025-05-13_at_12.12.32_2_qbmzae.jpg"
                    alt="Educators in Kenya"
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trip Details */}
        <section className="py-20 md:py-28 bg-kapes-cream">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-academy text-kapes-charcoal mb-4">
                Trip <span className="text-kapes-orange">details</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              {[
                { label: "Duration", value: "7-14 Days" },
                { label: "Group Size", value: "6-12 Educators" },
                { label: "Certification", value: "CPD Credits" },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 text-center shadow-sm"
                >
                  <div className="text-3xl font-gothic text-kapes-orange mb-2">{item.value}</div>
                  <div className="text-dragon-gray">{item.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-lg text-dragon-gray mb-8 max-w-2xl mx-auto">
                Trips can be customized for individual educators or school groups.
                All meals, accommodation, and in-country transportation included.
              </p>
              <Button className="btn-action text-lg px-10 py-6" asChild>
                <a
                  href="https://calendly.com/kapesuniforms/kapes-uniforms-consultation-clone"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule a Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-kapes-orange">
          <div className="container-wide text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <h2 className="text-3xl md:text-5xl font-academy mb-6">
                Ready to expand your
                <br />
                teaching perspective?
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                Join our next educator journey and return with stories, resources,
                and connections that transform your classroom.
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

export default EducatorTrips;
