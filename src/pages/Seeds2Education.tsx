import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import {
  Utensils,
  Leaf,
  Users,
  Calendar,
  Clock,
  MapPin,
  GraduationCap,
  ArrowRight,
  Check,
  ChevronDown,
  Mountain,
  Recycle,
  Binoculars,
  School,
  Quote,
} from 'lucide-react';

const Seeds2Education = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const highlights = [
    {
      icon: Leaf,
      title: 'Hands-On Permaculture',
      description: 'Create sustainable farming systems using permaculture principles that regenerate soil and maximise yields.',
    },
    {
      icon: School,
      title: 'Meaningful Impact',
      description: 'Directly contribute to a project that provides meals for students in need, improving nutrition and learning outcomes.',
    },
    {
      icon: Users,
      title: 'Cultural Exchange',
      description: 'Engage with local students, educators and community members while learning about Kenyan culture.',
    },
    {
      icon: Binoculars,
      title: 'Nairobi National Park',
      description: "Explore Kenya's unique wildlife sanctuary with Nairobi's skyline as backdrop.",
    },
    {
      icon: Mountain,
      title: 'Ngong Hills Hike',
      description: 'Trek across scenic hills, exploring Maasai culture and enjoying views of the Great Rift Valley.',
    },
    {
      icon: Recycle,
      title: 'Textile Upcycling',
      description: 'Visit Africa Collects Textiles for weaving workshops, transforming old uniforms into useful products.',
    },
  ];

  const itinerarySummary = [
    { day: 'Day 1', title: 'Arrival in Nairobi', highlight: 'Welcome dinner and orientation' },
    { day: 'Day 2', title: 'Seeds2Education HQ', highlight: 'Meet the team and visit partner school' },
    { day: 'Day 3', title: 'Permaculture Workshop', highlight: 'Design and plant school gardens' },
    { day: 'Day 4', title: 'Community Cooking', highlight: 'Prepare meals with local chefs' },
    { day: 'Day 5', title: 'Textile Upcycling', highlight: 'Africa Collects Textiles workshop' },
    { day: 'Day 6', title: 'Nairobi National Park', highlight: 'Safari with city skyline views' },
    { day: 'Day 7', title: 'Ngong Hills Adventure', highlight: 'Cultural hike with Maasai guides' },
    { day: 'Day 8', title: 'Departure', highlight: 'Farewell breakfast and airport transfer' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Seeds2Education Program"
        description="Transform degraded school land into thriving gardens. A journey where students tackle hunger by creating sustainable food sources for Kenyan schools."
        keywords="Seeds2Education, food security, sustainable agriculture, educational travel, Kenya, school gardens, permaculture"
      />
      <Header />

      <main className="pt-16">
        {/* Hero Section - Justdiggit inspired */}
        <section className="relative min-h-[90vh] flex items-center bg-kapes-charcoal overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://res.cloudinary.com/dng12bd0a/image/upload/v1747119030/WhatsApp_Image_2025-05-13_at_12.07.56_m0epad.jpg"
              alt="Students planting in school garden"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-kapes-charcoal/60 via-kapes-charcoal/40 to-kapes-charcoal" />
          </div>

          <div className="container-wide relative z-10 py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-impact-green rounded-full flex items-center justify-center">
                  <Utensils className="w-6 h-6 text-white" />
                </div>
                <span className="text-impact-green font-semibold uppercase tracking-wider">
                  School Trip
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-academy text-white leading-[0.95] mb-6">
                <span className="text-impact-green">Seeds2Education</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/80 max-w-2xl mb-10">
                Hungry children cannot learn. Your students will build permaculture gardens
                that feed 200+ children daily, tackling the #1 barrier to education.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Clock className="w-5 h-5 text-impact-green" />
                  <span className="text-white">8 Days</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <MapPin className="w-5 h-5 text-impact-green" />
                  <span className="text-white">Nairobi, Kenya</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Users className="w-5 h-5 text-impact-green" />
                  <span className="text-white">Ages 15-18</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <GraduationCap className="w-5 h-5 text-impact-green" />
                  <span className="text-white">CAS Eligible</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-action text-lg h-14 px-10" asChild>
                  <a
                    href="https://calendly.com/kapesuniforms/kapes-uniforms-consultation-clone"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book This Trip
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-kapes-charcoal text-lg h-14 px-10"
                  asChild
                >
                  <a
                    href="https://cdn.shopify.com/s/files/1/0777/3326/5724/files/Food_For_Education_2025.pdf?v=1750708949"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download Brochure
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <ChevronDown className="w-8 h-8 text-white/50 animate-bounce" />
          </motion.div>
        </section>

        {/* The Problem Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-impact-green font-semibold text-sm uppercase tracking-wider">
                  The Challenge
                </span>
                <h2 className="text-3xl md:text-5xl font-academy text-kapes-charcoal mt-3 mb-6">
                  1 in 4 Kenyan children
                  <span className="text-impact-green"> go to school hungry</span>
                </h2>
                <div className="space-y-4 text-lg text-dragon-gray">
                  <p>
                    Malnutrition causes stunted growth and limits focus, attendance, and long-term potential.
                    Hungry children cannot concentrate. They drop out. The cycle of poverty continues.
                  </p>
                  <p>
                    <strong className="text-kapes-charcoal">But it does not have to be this way.</strong>
                  </p>
                  <p>
                    The Seeds2Education program turns degraded school land into thriving gardens and food forests.
                    Your students will create sustainable food sources that provide daily meals for children in need.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/dng12bd0a/image/upload/v1747119188/WhatsApp_Image_2025-05-12_at_23.44.24_oouzku.jpg"
                    alt="Children enjoying school meals"
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-impact-green text-white p-6 rounded-xl shadow-xl">
                  <div className="text-4xl font-gothic mb-1">5,000+</div>
                  <div className="text-sm">meals provided by our programs</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What Your Students Will Do */}
        <section className="py-20 md:py-28 bg-kapes-cream">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-impact-green font-semibold text-sm uppercase tracking-wider">
                The Experience
              </span>
              <h2 className="text-3xl md:text-5xl font-academy text-kapes-charcoal mt-3">
                What your students
                <span className="text-impact-green"> will do</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 bg-impact-green/10 rounded-xl flex items-center justify-center mb-4">
                    <highlight.icon className="w-7 h-7 text-impact-green" />
                  </div>
                  <h3 className="text-xl font-semibold text-kapes-charcoal mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-dragon-gray">{highlight.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Itinerary Overview */}
        <section className="py-20 md:py-28 bg-kapes-charcoal text-white">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-impact-green font-semibold text-sm uppercase tracking-wider">
                8-Day Journey
              </span>
              <h2 className="text-3xl md:text-5xl font-academy mt-3">
                Your <span className="text-impact-green">itinerary</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {itinerarySummary.map((day, index) => (
                <motion.div
                  key={day.day}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-impact-green/50 transition-colors"
                >
                  <div className="text-impact-green font-gothic text-2xl mb-2">{day.day}</div>
                  <h4 className="font-semibold text-lg mb-1">{day.title}</h4>
                  <p className="text-white/60 text-sm">{day.highlight}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-kapes-charcoal"
                asChild
              >
                <a
                  href="https://cdn.shopify.com/s/files/1/0777/3326/5724/files/Food_For_Education_2025.pdf?v=1750708949"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Full Itinerary
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Learning Outcomes */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/dng12bd0a/image/upload/v1747126344/A7405558_q0ujnc.jpg"
                    alt="Students working in garden"
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-impact-green font-semibold text-sm uppercase tracking-wider">
                  Transformative Learning
                </span>
                <h2 className="text-3xl md:text-4xl font-academy text-kapes-charcoal mt-3 mb-8">
                  What students
                  <span className="text-impact-green"> take home</span>
                </h2>

                <div className="space-y-4">
                  {[
                    'Practical knowledge of sustainable agriculture and permaculture',
                    'Deep understanding of global food security challenges',
                    'Hands-on experience creating real, lasting change',
                    'Leadership, teamwork, and cross-cultural communication skills',
                    'CAS hours and Duke of Edinburgh accreditation (optional)',
                    'Kapes Food Stewardship Certificate',
                  ].map((outcome, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-6 h-6 bg-impact-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-lg text-dragon-gray">{outcome}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-20 md:py-28 bg-impact-green">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center text-white"
            >
              <Quote className="w-16 h-16 text-white/30 mx-auto mb-6" />
              <blockquote className="text-xl md:text-2xl lg:text-3xl leading-relaxed mb-8 font-light italic">
                "Seeing these enterprises firsthand, understanding how they contribute to a better world,
                the children can only do that firsthand, and it will change them as much as it's changed me."
              </blockquote>
              <div>
                <div className="font-semibold text-lg">Brett Girven</div>
                <div className="text-white/80 text-sm">Former Principal, The Arbor School</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Trip Details */}
        <section className="py-20 md:py-28 bg-kapes-cream">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-academy text-kapes-charcoal">
                Trip <span className="text-impact-green">details</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
              {[
                { icon: Clock, label: 'Duration', value: '8 Days' },
                { icon: Calendar, label: 'Season', value: 'January - October' },
                { icon: Users, label: 'Group Size', value: '10-30 Students' },
                { icon: GraduationCap, label: 'Age Range', value: '15-18 Years' },
              ].map((detail, index) => (
                <motion.div
                  key={detail.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 text-center shadow-sm"
                >
                  <div className="w-12 h-12 bg-impact-green/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <detail.icon className="w-6 h-6 text-impact-green" />
                  </div>
                  <div className="text-2xl font-gothic text-kapes-charcoal mb-1">{detail.value}</div>
                  <div className="text-dragon-gray text-sm">{detail.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 max-w-3xl mx-auto"
            >
              <h3 className="text-xl font-semibold text-kapes-charcoal mb-4">What's Included</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'All accommodation',
                  'All meals',
                  'Ground transportation',
                  'Expert local guides',
                  'All program activities',
                  'Safari experiences',
                  'Airport transfers',
                  'Travel insurance assistance',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-impact-green" />
                    <span className="text-dragon-gray">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-kapes-charcoal">
          <div className="container-wide text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-academy text-white mb-6">
                Ready to feed a school?
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
                Schedule a call to discuss how Seeds2Education can transform your students
                while creating lasting change for Kenyan communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-action text-lg h-14 px-10" asChild>
                  <a
                    href="https://calendly.com/kapesuniforms/kapes-uniforms-consultation-clone"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Schedule a Call
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-kapes-charcoal text-lg h-14 px-10"
                  asChild
                >
                  <Link to="/school-trips">View All School Trips</Link>
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

export default Seeds2Education;
