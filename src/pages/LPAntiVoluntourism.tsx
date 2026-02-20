import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import CalendlyEmbed from '@/components/CalendlyEmbed';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Utensils,
  Droplets,
  CheckCircle2,
  XCircle,
  ChevronDown,
  MapPin,
  Users,
  BookOpen,
  Shield,
  Quote,
  AlertTriangle,
  X,
  Check,
  Calendar,
  Heart,
  Globe,
} from 'lucide-react';

// ─── Section 1: Hero (Hook — Anti-Voluntourism Challenge) ───────────────────
const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-black">
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="https://res.cloudinary.com/dng12bd0a/image/upload/v1768976012/KAPESVoifriday_klein-124_mayzid.jpg"
        >
          <source
            src="https://res.cloudinary.com/dng12bd0a/video/upload/v1768975922/full_film_highlight_nov_2025_1_j3lear.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
      </div>

      <div className="container-wide relative z-10 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-kapes-orange font-semibold text-sm md:text-base uppercase tracking-widest mb-6"
          >
            The antidote to voluntourism
          </motion.p>

          <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-academy leading-[0.88] tracking-tight mb-8">
            Your students don't need
            <br />
            <span className="text-kapes-orange">to save Africa</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/85 mb-12 max-w-3xl mx-auto leading-relaxed">
            We run year-round programs feeding schools and building water access
            for women across Kenya. Your students don't parachute in for two
            weeks — they join work that's already changing communities.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button className="btn-action text-lg px-10 py-6" asChild>
              <a href="#the-problem">
                See the Difference
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button className="btn-ghost text-lg px-10 py-6" asChild>
              <Link to="/scorecard">Take the 5-Min Assessment</Link>
            </Button>
          </motion.div>

          {/* Trust bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-16 flex flex-wrap justify-center gap-8 md:gap-12 text-white/60 text-sm"
          >
            {[
              'Year-round programs in Kenya',
              '200+ children fed daily',
              'Kenyan-led teams',
              'Not a voluntourism company',
            ].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-kapes-orange" />
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        onClick={() =>
          document
            .getElementById('the-problem')
            ?.scrollIntoView({ behavior: 'smooth' })
        }
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-white/50 hover:text-white transition-colors cursor-pointer"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.button>
    </section>
  );
};

// ─── Section 2: The Problem (Quantify the Voluntourism Problem) ─────────────
const ProblemSection = () => (
  <section id="the-problem" className="py-24 md:py-32 bg-white">
    <div className="container-wide">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-kapes-orange font-semibold text-sm uppercase tracking-wider">
            The problem nobody talks about
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-academy text-kapes-charcoal mt-3 mb-8 leading-tight">
            Most school trips call it{' '}
            <span className="text-kapes-orange">"service learning"</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="space-y-6 text-lg md:text-xl text-dragon-gray leading-relaxed"
        >
          <p>
            But the service is designed for the student, not the community.
          </p>
          <p>
            Projects get built for visitors. When the bus leaves,{' '}
            <strong className="text-kapes-charcoal">the project stops.</strong>{' '}
            Money flows to international operators, not local families. Students
            observe poverty but never learn why it exists. Parents can't explain
            what the trip actually accomplished.
          </p>
          <p>
            And the community? They host group after group, year after year,
            performing gratitude for an audience that will never return.
          </p>
        </motion.div>

        {/* Pain quantification */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {[
            { stat: '70%', label: 'of tourism revenue leaves local communities' },
            { stat: '1 in 3', label: 'children in Kenya go to school hungry' },
            { stat: '4M+', label: 'Kenyan children face food insecurity' },
            { stat: '60%', label: 'of farmers are women, often unsupported' },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              className="bg-kapes-cream rounded-xl p-6 text-center"
            >
              <span className="block text-3xl md:text-4xl font-gothic text-kapes-orange mb-2">
                {item.stat}
              </span>
              <span className="text-sm text-dragon-gray">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-10 text-lg text-kapes-charcoal font-semibold"
        >
          Sound familiar? There's a better way.
        </motion.p>
      </div>
    </div>
  </section>
);

// ─── Section 3: Us vs Them Comparison (Key Differentiator) ──────────────────
const voluntourismItems = [
  {
    them: 'Projects built for visiting students',
    us: 'Programs built for communities — students join what exists',
  },
  {
    them: 'Work stops when the bus leaves',
    us: 'Programs run 365 days a year, with or without visitors',
  },
  {
    them: 'International operators keep 70%+ of revenue',
    us: 'Kenyan-led teams. Revenue stays in communities',
  },
  {
    them: 'Students arrive as "helpers" to lead projects',
    us: 'Students arrive as learners alongside community members',
  },
  {
    them: 'Poverty is observed but never explained',
    us: 'Pre-trip curriculum, on-ground learning, post-trip reflection',
  },
  {
    them: 'Photo ops with local children',
    us: 'Real relationships with rangers and community leaders',
  },
  {
    them: 'One-off trips with no lasting connection',
    us: 'Long-term school partnerships with measurable outcomes',
  },
  {
    them: 'Community performs gratitude for visitors',
    us: 'Community leads. Students contribute where genuinely useful',
  },
];

const ComparisonSection = () => (
  <section className="py-24 md:py-32 bg-kapes-charcoal text-white">
    <div className="container-wide">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-kapes-orange font-semibold text-sm uppercase tracking-wider">
          Voluntourism vs. real impact
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-academy mt-3 mb-6 leading-tight">
          Two models.{' '}
          <span className="text-kapes-orange">One actually works.</span>
        </h2>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          Here's what happens on a typical "service learning" trip — and what
          happens when you partner with Kapes instead.
        </p>
      </motion.div>

      {/* Desktop Table */}
      <div className="max-w-5xl mx-auto hidden md:block">
        <div className="grid grid-cols-2 gap-6 mb-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-400 px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4" />
              Typical voluntourism trip
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4" />
              The Kapes model
            </div>
          </motion.div>
        </div>

        <div className="space-y-3">
          {voluntourismItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.4 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-white/5 border border-red-500/10 rounded-xl p-5 flex items-start gap-3">
                <X className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                <span className="text-white/70">{item.them}</span>
              </div>
              <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-5 flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                <span className="text-white/90">{item.us}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4 max-w-lg mx-auto">
        {voluntourismItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06, duration: 0.4 }}
            className="bg-white/5 rounded-xl overflow-hidden"
          >
            <div className="p-4 border-b border-white/10 flex items-start gap-3">
              <X className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
              <span className="text-white/60 text-sm">{item.them}</span>
            </div>
            <div className="p-4 bg-emerald-500/5 flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
              <span className="text-white/90 text-sm">{item.us}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-center mt-14"
      >
        <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
          Voluntourism is a $173 billion industry built on good intentions. We
          decided to build something built on good outcomes instead.
        </p>
        <Button className="btn-action text-lg px-10 py-6" asChild>
          <a href="#how-it-works">
            See Our Year-Round Model
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </Button>
      </motion.div>
    </div>
  </section>
);

// ─── Section 4: Credibility — Year-Round Mechanism ──────────────────────────
const MechanismSection = () => (
  <section id="how-it-works" className="py-24 md:py-32 bg-kapes-cream">
    <div className="container-wide">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-kapes-orange font-semibold text-sm uppercase tracking-wider">
          Our year-round model
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-academy text-kapes-charcoal mt-3 mb-6 leading-tight">
          The impact doesn't start when
          <br />
          <span className="text-kapes-orange">your students arrive</span>
        </h2>
        <p className="text-xl text-dragon-gray max-w-3xl mx-auto">
          And it doesn't stop when they leave. Our programs run 365 days a year
          with Kenyan-led teams. School trips plug into existing work — not the
          other way around.
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              step: '01',
              icon: Calendar,
              title: 'Programs run year-round',
              desc: 'Seeds2Education gardens, water cooperatives, and school feeding programs operate 365 days a year with Kenyan-led teams. This is not a project built for visitors.',
            },
            {
              step: '02',
              icon: Users,
              title: 'Your students join the work',
              desc: 'Small groups of 10-30 students arrive as learners. They work alongside local rangers and community members on programs already making a difference.',
            },
            {
              step: '03',
              icon: Heart,
              title: 'Impact continues after they leave',
              desc: 'The gardens keep feeding children. The water infrastructure keeps serving women. Your students go home with understanding — not hero stories.',
            },
          ].map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-5xl font-gothic text-kapes-orange/20">
                  {item.step}
                </span>
                <div className="w-12 h-12 bg-dragon rounded-xl flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-kapes-charcoal mt-4 mb-3">
                {item.title}
              </h3>
              <p className="text-dragon-gray">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Proof callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-kapes-charcoal text-white rounded-2xl p-8 md:p-12 text-center"
        >
          <p className="text-xl md:text-2xl font-academy leading-relaxed max-w-3xl mx-auto">
            This is the difference between voluntourism and partnership.{' '}
            <span className="text-kapes-orange">
              We don't build projects for your students. We build programs for
              communities — and your students are welcome to join.
            </span>
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

// ─── Section 5: Solution — Seeds2Education + Water Programs ─────────────────
const ProgramsSection = () => (
  <section className="py-24 md:py-32 bg-white">
    <div className="container-wide">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-kapes-orange font-semibold text-sm uppercase tracking-wider">
          What your students actually do
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-academy text-kapes-charcoal mt-3 mb-6 leading-tight">
          Two programs.{' '}
          <span className="text-kapes-orange">Real outcomes.</span>
        </h2>
        <p className="text-xl text-dragon-gray max-w-3xl mx-auto">
          Your students don't arrive to build something that will crumble. They
          join programs that are already feeding children and empowering women
          every single day.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group"
        >
          <Link to="/programs/seeds2education" className="block">
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://res.cloudinary.com/dng12bd0a/image/upload/v1747160268/WhatsApp_Image_2025-05-13_at_12.07.56_m0epad.jpg"
                alt="Seeds2Education program — children learning in permaculture garden"
                className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-impact-green rounded-full flex items-center justify-center">
                    <Utensils className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white/70 text-sm font-medium uppercase tracking-wider">
                    Year-round program
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-academy text-white mb-2">
                  Seeds2Education
                </h3>
                <p className="text-white/80 mb-4">
                  Permaculture gardens feeding 200+ children daily at Kenyan
                  schools. Hunger is the #1 barrier to learning. This program
                  runs every day — your students help expand what's already
                  working.
                </p>
                <span className="flex items-center text-kapes-orange font-semibold">
                  Learn more
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="group"
        >
          <Link to="/programs/empowering-women" className="block">
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://res.cloudinary.com/dng12bd0a/image/upload/v1747159769/Filip-C-Agoo-Everland-Marketing-Kenya-13983_atg3tn.jpg"
                alt="Water Empowering Women program — women at water cooperative"
                className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-impact-rose rounded-full flex items-center justify-center">
                    <Droplets className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white/70 text-sm font-medium uppercase tracking-wider">
                    Year-round program
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-academy text-white mb-2">
                  Water Empowering Women
                </h3>
                <p className="text-white/80 mb-4">
                  Women-led cooperatives building water infrastructure
                  year-round. When women have water, girls stay in school. Your
                  students work alongside the women leading this — not the other
                  way around.
                </p>
                <span className="flex items-center text-kapes-orange font-semibold">
                  Learn more
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  </section>
);

// ─── Section 6: Proof — Testimonial + Impact Stats ──────────────────────────
const ProofSection = () => (
  <section className="py-24 md:py-32 bg-kapes-cream">
    <div className="container-wide">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-kapes-orange font-semibold text-sm uppercase tracking-wider">
          What educators say
        </span>
        <h2 className="text-4xl md:text-5xl font-academy text-kapes-charcoal mt-3 mb-4">
          Don't take our word for it
        </h2>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-12 relative"
        >
          <Quote className="w-12 h-12 text-kapes-orange/20 mb-6" />
          <blockquote className="text-xl md:text-2xl text-kapes-charcoal leading-relaxed mb-8 font-light italic">
            "Experiential learning helps bring to life the things we can only do
            in theory. Seeing these enterprises firsthand, understanding how they
            contribute to a better world — the children can only do that
            firsthand, and it will change them as much as it's changed me."
          </blockquote>
          <div>
            <div className="font-bold text-lg text-kapes-charcoal">
              Brett Girven
            </div>
            <div className="text-dragon-gray">
              Former Principal, The Arbor School
            </div>
          </div>
        </motion.div>
      </div>

      {/* Impact stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto"
      >
        {[
          { number: '200+', label: 'Children fed daily' },
          { number: '365', label: 'Days a year our programs run' },
          { number: '10-30', label: 'Students per group' },
          { number: '2', label: 'Dedicated leaders per trip' },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            className="text-center"
          >
            <span className="block text-4xl md:text-5xl font-gothic text-dragon">
              {stat.number}
            </span>
            <span className="text-dragon-gray mt-1 block">{stat.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

// ─── Section 7: Founder Credibility ─────────────────────────────────────────
const FounderSection = () => (
  <section className="py-24 md:py-32 bg-dragon-dark text-white overflow-hidden">
    <div className="container-wide">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="rounded-2xl overflow-hidden">
            <img
              src="/lovable-uploads/c0bdd0e5-7b79-492d-8c2d-d91d5b892cee.png"
              alt="Matthew Benjamin with students from Marasi Primary School"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-kapes-orange font-semibold text-sm uppercase tracking-wider">
            Why we built this differently
          </span>
          <h2 className="text-3xl md:text-4xl font-academy mt-3 mb-6">
            From uniforms to year-round programs
          </h2>

          <div className="space-y-4 text-lg text-white/80 leading-relaxed">
            <p>
              In 2020, Matthew Benjamin founded{' '}
              <strong className="text-white">Kapes Uniforms</strong> to
              transform the uniform industry and break down barriers to
              education.
            </p>
            <p>
              A year later, he stood in Kenya's Kasigau Corridor — home to the
              world's first carbon neutral factory — and saw environmental
              conservation and community development working hand in hand. Not as
              theory. As daily reality.
            </p>
            <p>
              By 2022,{' '}
              <strong className="text-white">Kapes Adventures</strong> was born.
              Not as a trip company that bolted on a service component. As a
              community development organisation that invites schools to join the
              work.
            </p>
            <p>
              That distinction matters. It's the difference between voluntourism
              and partnership.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// ─── Section 8: Fit / Not Fit (Disqualification) ────────────────────────────
const FitSection = () => (
  <section className="py-24 md:py-32 bg-white">
    <div className="container-wide">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-academy text-kapes-charcoal mb-4">
          Is Kapes right for your school?
        </h2>
        <p className="text-xl text-dragon-gray max-w-2xl mx-auto">
          We're not for everyone. And that's by design. If you're uncomfortable
          with the voluntourism model, you're in the right place.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Good fit */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-kapes-cream rounded-2xl p-8 md:p-10 border-2 border-dragon/20"
        >
          <h3 className="text-2xl font-academy text-dragon mb-6">
            You're a great fit if:
          </h3>
          <ul className="space-y-4">
            {[
              'You want your students to learn alongside communities, not "help" them',
              'You\'re tired of trips that look like voluntourism — even if they\'re marketed differently',
              'You need curriculum-aligned trips with pre-trip and post-trip learning',
              'You want to explain to parents exactly where their money goes',
              'You care about what happens in the community after your students leave',
              'You\'re looking for a long-term partner, not a one-off trip vendor',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-dragon mt-0.5 shrink-0" />
                <span className="text-dragon-gray">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Not a fit */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-kapes-cream rounded-2xl p-8 md:p-10 border-2 border-impact-rose/20"
        >
          <h3 className="text-2xl font-academy text-impact-rose mb-6">
            We're probably not the right fit if:
          </h3>
          <ul className="space-y-4">
            {[
              'You want a safari with a service day bolted on',
              'You need 100+ student group sizes',
              'You want students to lead projects they\'re not qualified to run',
              'You\'re looking for the cheapest option regardless of community impact',
              'You want a trip that looks good on Instagram more than one that does good on the ground',
              'You\'re not willing to invest in pre-trip curriculum',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-impact-rose mt-0.5 shrink-0" />
                <span className="text-dragon-gray">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

// ─── Section 9: Scorecard CTA (Lead Magnet) ─────────────────────────────────
const ScorecardSection = () => (
  <section className="py-24 md:py-32 bg-dragon-dark text-white">
    <div className="container-wide">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-kapes-orange font-semibold text-sm uppercase tracking-wider">
            Free assessment
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-academy mt-3 mb-6 leading-tight">
            Are your school trips making
            <br />
            <span className="text-kapes-orange">a real difference?</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-4">
            Most school trips create photos and memories. But do they create
            lasting change for communities? Or do they just create lasting
            memories for students? Our free 5-minute assessment scores your
            programme across 5 dimensions and shows you where the gaps are.
          </p>
          <p className="text-white/60 mb-10">
            20 questions. 5 minutes. Honest results. No sugar-coating.
          </p>

          <Button className="btn-action text-lg px-12 py-6" asChild>
            <Link to="/scorecard">
              Take the Impact Scorecard
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>

          <p className="text-white/40 text-sm mt-4">
            Free. No credit card. Results delivered instantly.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

// ─── Section 10: FAQ (Objection Handling — Anti-Voluntourism Specific) ──────
const faqItems = [
  {
    q: 'How is this actually different from voluntourism?',
    a: 'Voluntourism builds projects for visiting students. We build programs for communities and invite students to participate. Your students arrive as learners, not helpers. Kenyan teams lead every project. The community sets the agenda — not us, and not your school. Most importantly: our programs run 365 days a year. They existed before your students arrived and they\'ll continue long after.',
  },
  {
    q: 'What happens when our students leave?',
    a: 'The same thing that was happening before they arrived. Our programs run year-round with Kenyan-led teams. Seeds2Education gardens feed children every day. Water cooperatives serve women every week. Your students join ongoing work — they don\'t create it or end it.',
  },
  {
    q: 'Won\'t our students feel like they\'re not making a difference?',
    a: 'The opposite. Students who understand the context of their work find it far more meaningful than painting a wall that didn\'t need painting. They leave with real understanding of systemic issues, genuine relationships with community members, and the humility that comes from learning alongside people rather than "serving" them.',
  },
  {
    q: 'How do you avoid the "white savior" dynamic?',
    a: 'By design. Kenyan teams lead every program. Students are positioned as learners from day one. Pre-trip curriculum covers colonial history, systemic inequality, and the ethics of international travel. We don\'t let students lead projects they\'re not qualified to run. And we never, ever use photos of your students "helping" local children in our marketing.',
  },
  {
    q: 'Where does our money actually go?',
    a: 'We can show you exactly where every dollar goes. Revenue stays in communities — not with international operators. We\'re building toward full pricing transparency because parents deserve to know. Ask us for a breakdown during your consultation.',
  },
  {
    q: 'What ages and group sizes do you work with?',
    a: 'We work with groups of 10-30 students, typically ages 14-18. Each group gets 2 dedicated Kapes leaders plus trained local rangers. Small groups mean real relationships — not a tourist bus experience.',
  },
  {
    q: 'Is there pre-trip and post-trip curriculum?',
    a: 'Yes. Every trip includes pre-trip learning modules covering the history, economics, and ethics of what they\'ll experience. On-ground sessions are led by Kenyan experts. Post-trip reflection frameworks help students process and apply what they learned. We align with SDGs and IB CAS hours.',
  },
  {
    q: 'How do you handle safety?',
    a: 'We share our full risk management plans, health protocols, and emergency procedures with parents before the trip. 24/7 local staff. Transparent from day one. No surprises.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-kapes-cream">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-kapes-orange font-semibold text-sm uppercase tracking-wider">
            Your questions, answered honestly
          </span>
          <h2 className="text-4xl md:text-5xl font-academy text-kapes-charcoal mt-3 mb-4">
            Questions schools ask us
          </h2>
          <p className="text-xl text-dragon-gray max-w-2xl mx-auto">
            Especially schools that have been burned by voluntourism before.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={item.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.5 }}
              className="bg-white rounded-xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-6 text-left font-bold text-lg text-kapes-charcoal hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <span className="pr-4">{item.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-dragon-gray shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-6 pb-6 text-dragon-gray leading-relaxed">
                  {item.a}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Section 11: Final CTA — CalendlyEmbed + Scorecard ──────────────────────
const FinalCTASection = () => (
  <section className="py-24 md:py-32 bg-kapes-charcoal text-white">
    <div className="container-wide text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-academy leading-tight mb-6">
          Stop sending students
          <br />
          <span className="text-kapes-orange">to save. Start sending them to learn.</span>
        </h2>
        <p className="text-xl text-white/80 mb-10">
          Our programs run year-round. Your students join when the time is right
          — and the community benefits long after they leave. Talk to our Kenya
          team about which program fits your school's goals.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <CalendlyEmbed
            url="https://calendly.com/kapesuniforms/kapes-uniforms-consultation-clone"
            text="Talk to Our Kenya Team"
            className="btn-action text-lg px-10 py-6"
          />
          <Button className="btn-ghost text-lg px-10 py-6" asChild>
            <Link to="/scorecard">Take the 5-Min Assessment</Link>
          </Button>
        </div>

        <p className="text-white/40 text-sm mt-6">
          No commitment. No sales pitch. Just a conversation about what's
          possible.
        </p>
      </motion.div>
    </div>
  </section>
);

// ─── Page Assembly ──────────────────────────────────────────────────────────
const LPAntiVoluntourism = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="The Antidote to Voluntourism | Kapes Adventures"
        description="Your students don't need to save Africa. Kapes Adventures runs year-round programs feeding schools and building water access for women. Students join work that's already changing communities — not pop-up projects built for visitors."
        keywords="anti-voluntourism, ethical school trips, Kenya school programs, service learning alternative, responsible travel, Kapes Adventures"
        ogUrl="https://kapesadventures.com/anti-voluntourism"
        canonicalUrl="https://kapesadventures.com/anti-voluntourism"
      />
      <Header />

      <main>
        <HeroSection />
        <ProblemSection />
        <ComparisonSection />
        <MechanismSection />
        <ProgramsSection />
        <ProofSection />
        <FounderSection />
        <FitSection />
        <ScorecardSection />
        <FAQSection />
        <FinalCTASection />
      </main>

      <Footer />
    </div>
  );
};

export default LPAntiVoluntourism;
