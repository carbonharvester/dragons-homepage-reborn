import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import {
  Users,
  Heart,
  TreePine,
  Droplets,
  GraduationCap,
  Home,
  Leaf,
  MapPin,
  ArrowRight,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Impact categories with detailed information
const impactCategories = [
  {
    id: 'food',
    title: 'Food Security',
    icon: Leaf,
    color: 'bg-impact-green',
    textColor: 'text-impact-green',
    stats: [
      { number: '5,000+', label: 'School meals supported' },
      { number: '8', label: 'School gardens established' },
      { number: '200+', label: 'Students fed daily' },
    ],
    description:
      'Through our Food for Education program, we work with schools to establish sustainable permaculture gardens that provide nutritious meals for students year-round.',
    image: 'https://res.cloudinary.com/dng12bd0a/image/upload/v1747160268/WhatsApp_Image_2025-05-13_at_12.07.56_m0epad.jpg',
  },
  {
    id: 'women',
    title: 'Women Empowerment',
    icon: Heart,
    color: 'bg-impact-rose',
    textColor: 'text-impact-rose',
    stats: [
      { number: '50+', label: 'Women supported' },
      { number: '3', label: "Women's cooperatives partnered" },
      { number: '100%', label: 'Of water projects led by women' },
    ],
    description:
      'Our Water Empowering Women program addresses both water scarcity and gender equality, supporting women-led initiatives that provide clean water access to communities.',
    image: 'https://res.cloudinary.com/dng12bd0a/image/upload/v1747159769/Filip-C-Agoo-Everland-Marketing-Kenya-13983_atg3tn.jpg',
  },
  {
    id: 'conservation',
    title: 'Conservation',
    icon: TreePine,
    color: 'bg-impact-green',
    textColor: 'text-impact-green',
    stats: [
      { number: '1,000+', label: 'Trees planted' },
      { number: '50+', label: 'Tons CO2 offset' },
      { number: '1', label: 'Carbon-neutral factory partnership' },
    ],
    description:
      'Our conservation trips connect students with local wildlife and reforestation efforts, partnering with the first carbon-neutral factory in the Kasigau Corridor.',
    image: 'https://res.cloudinary.com/dng12bd0a/image/upload/v1747160176/Collection_5_s7opwi.jpg',
  },
  {
    id: 'education',
    title: 'Education',
    icon: GraduationCap,
    color: 'bg-impact-purple',
    textColor: 'text-impact-purple',
    stats: [
      { number: '350+', label: 'Students transformed' },
      { number: '15+', label: 'Partner schools' },
      { number: '100%', label: 'CAS/Service Learning eligible' },
    ],
    description:
      'Every trip is designed as an educational experience, meeting IB CAS requirements and Duke of Edinburgh criteria while providing life-changing perspectives.',
    image: 'https://res.cloudinary.com/dng12bd0a/image/upload/v1747200052/IMG_0252_gstfij.jpg',
  },
];

// Community partners
const communityPartners = [
  { name: 'Kasigau Women\'s Cooperative', focus: 'Water access & women\'s empowerment' },
  { name: 'Food4Education Kenya', focus: 'School meal programs' },
  { name: 'Tsavo Conservation Trust', focus: 'Wildlife & habitat protection' },
  { name: 'Maungu Community School', focus: 'Permaculture education' },
];

const Impact = () => {
  return (
    <>
      <Helmet>
        <title>Our Impact | Kapes Adventures</title>
        <meta
          name="description"
          content="See the real, measurable impact of Kapes Adventures trips. From school gardens to women's cooperatives, discover how travel creates lasting change."
        />
      </Helmet>

      <Header />

      {/* Hero Section - Justdiggit style */}
      <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 bg-kapes-charcoal overflow-hidden">
        <div className="absolute inset-0 opacity-70">
          <img
            src="https://res.cloudinary.com/dng12bd0a/image/upload/v1747160296/WhatsApp_Image_2025-05-13_at_12.12.32_2_qbmzae.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-kapes-charcoal/20 to-kapes-charcoal/60" />
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-academy text-white leading-[0.95]">
              Real change,
              <br />
              <span className="text-kapes-orange">real numbers</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mt-8">
              Every adventure creates measurable, lasting impact.
            </p>
          </motion.div>

          {/* Summary Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto"
          >
            {[
              { icon: Users, number: '350+', label: 'Students Impacted' },
              { icon: Home, number: '10+', label: 'Communities' },
              { icon: Leaf, number: '5,000+', label: 'Meals Supported' },
              { icon: TreePine, number: '1,000+', label: 'Trees Planted' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-white/10 flex items-center justify-center">
                  <stat.icon className="w-7 h-7 text-kapes-orange" />
                </div>
                <div className="text-3xl md:text-4xl font-gothic text-white">{stat.number}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Impact Categories */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-kapes-orange font-semibold text-sm uppercase tracking-wider">
              Impact Areas
            </span>
            <h2 className="text-3xl md:text-5xl font-academy text-kapes-charcoal mt-3 mb-4">
              Four Pillars of Change
            </h2>
            <p className="text-lg text-dragon-gray max-w-2xl mx-auto">
              Our programs focus on interconnected challenges, creating holistic impact
              that addresses root causes, not just symptoms.
            </p>
          </motion.div>

          {/* Category Cards */}
          <div className="space-y-16">
            {impactCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-[350px] md:h-[400px] object-cover"
                    />
                    <div className={`absolute top-4 left-4 ${category.color} text-white px-4 py-2 rounded-full flex items-center gap-2`}>
                      <category.icon className="w-5 h-5" />
                      <span className="font-medium">{category.title}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h3 className="text-2xl md:text-3xl font-academy text-kapes-charcoal mb-4">
                    {category.title}
                  </h3>
                  <p className="text-dragon-gray text-lg leading-relaxed mb-6">
                    {category.description}
                  </p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {category.stats.map((stat) => (
                      <div key={stat.label} className="text-center p-4 bg-kapes-cream rounded-xl">
                        <div className={`text-2xl font-gothic ${category.textColor}`}>
                          {stat.number}
                        </div>
                        <div className="text-xs text-dragon-gray mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Partners */}
      <section className="py-20 md:py-28 bg-kapes-cream">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-kapes-orange font-semibold text-sm uppercase tracking-wider">
              Our Partners
            </span>
            <h2 className="text-3xl md:text-5xl font-academy text-kapes-charcoal mt-3 mb-4">
              Community-Led Impact
            </h2>
            <p className="text-lg text-dragon-gray max-w-2xl mx-auto">
              We don't impose solutions—we partner with local organizations who know
              their communities best.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <MapPin className="w-8 h-8 text-kapes-orange mb-4" />
                <h4 className="font-semibold text-kapes-charcoal mb-2">{partner.name}</h4>
                <p className="text-sm text-dragon-gray">{partner.focus}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-kapes-charcoal">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-academy text-white mb-6">
              Be Part of the Change
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Every trip we run adds to these numbers. Join the next journey
              and create impact that lasts long after you return home.
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

      <Footer />
    </>
  );
};

export default Impact;
