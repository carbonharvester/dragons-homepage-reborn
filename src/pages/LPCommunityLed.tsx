import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Users,
  Sprout,
  Droplets,
  Heart,
  CheckCircle2,
  Globe,
  HandHeart,
  TreePine,
  Shield,
  Quote,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import CalendlyEmbed from '@/components/CalendlyEmbed';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const LPCommunityLed = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const pillars = [
    {
      icon: Users,
      title: 'Kenyan-led teams run every project',
      description:
        'Our operations team, guides, educators, and coordinators are all Kenyan. Programs are designed by the people who live in and understand these communities — not by an overseas office.',
    },
    {
      icon: HandHeart,
      title: 'Communities set the agenda',
      description:
        'Local leaders decide what matters most. Whether it is water access, food security, or conservation — priorities come from the community, not from a curriculum designed abroad.',
    },
    {
      icon: Globe,
      title: 'Students arrive as learners, not saviours',
      description:
        'Your students join ongoing work led by community members. They learn by working alongside local experts — gaining perspective, not performing charity.',
    },
  ];

  const concreteExamples = [
    {
      icon: TreePine,
      text: 'Local rangers guide every conservation trip through the Kasigau Corridor',
    },
    {
      icon: Sprout,
      text: 'Permaculture teachers are from the community — your students learn from them',
    },
    {
      icon: Droplets,
      text: "Water cooperative leaders are women from the village — they run the projects, students support",
    },
    {
      icon: Heart,
      text: 'Students work alongside community members, not in front of them',
    },
  ];

  const identityStatements = [
    'Centre equity and justice in their travel programmes',
    'Want student trips that challenge the saviour narrative',
    'Believe communities should lead their own development',
    'Choose partners based on values — not just logistics',
    'See education as something that happens with people, not to them',
    'Want their students to return more humble, not more heroic',
  ];

  return (
    <>
      <SEO
        title="Community-Led School Trips to Kenya | Kapes Adventures"
        description="For schools that believe education should be led by the communities living it. Kenyan-led teams, community-set agendas, and students who arrive as learners — not saviours."
        keywords="community-led school trips, decolonized education, Kenya school trips, ethical school travel, IB service learning, CAS trips Kenya"
        ogImage="https://res.cloudinary.com/dng12bd0a/image/upload/v1768976012/KAPESVoifriday_klein-124_mayzid.jpg"
      />

      <Header />

      {/* ─────────────────────────────────────────────
          SECTION 1: VIDEO HERO — Identity Hook
      ───────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/dng12bd0a/image/upload/v1768976012/KAPESVoifriday_klein-124_mayzid.jpg"
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              videoLoaded ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            preload="auto"
            poster="https://res.cloudinary.com/dng12bd0a/image/upload/v1768976012/KAPESVoifriday_klein-124_mayzid.jpg"
            onLoadedData={() => setVideoLoaded(true)}
            className="w-full h-full object-cover"
          >
            <source
              src="https://res.cloudinary.com/dng12bd0a/video/upload/v1768975922/full_film_highlight_nov_2025_1_j3lear.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-kapes-charcoal via-kapes-charcoal/60 to-kapes-charcoal/30" />

        {/* Content */}
        <div className="container-wide relative z-10 pt-32 pb-20 md:pt-44 md:pb-28">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-kapes-orange font-semibold text-sm md:text-base uppercase tracking-widest mb-6"
            >
              A different kind of school trip
            </motion.p>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-academy text-white leading-[0.95] mb-8"
            >
              Community-led.
              <br />
              Student-joined.
              <br />
              <span className="text-kapes-orange">Kenya-rooted.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-white/85 max-w-xl leading-relaxed mb-10"
            >
              For schools that believe education should be led by the communities
              living it — not designed in a Western boardroom and shipped to Africa.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <CalendlyEmbed
                url="https://calendly.com/kapesuniforms/kapes-uniforms-consultation-clone"
                text="Talk to Our Kenya Team"
                className="btn-action text-lg px-10 py-6"
              />
              <Button className="btn-ghost text-lg h-14 px-8" asChild>
                <Link to="/scorecard">
                  Take the 5-Min Assessment
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 2: VALUES DECLARATION
      ───────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-kapes-cream">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-kapes-orange font-semibold text-sm uppercase tracking-wider">
              Our Belief
            </span>
            <h2 className="text-3xl md:text-5xl font-academy text-kapes-charcoal mt-4 mb-8 leading-tight">
              We believe the best education happens when{' '}
              <span className="text-kapes-orange">communities lead</span> and
              students listen.
            </h2>
            <p className="text-lg md:text-xl text-dragon-gray leading-relaxed">
              Most school trip companies design programmes in London, New York, or
              Geneva — then deliver them in Africa. We do the opposite. Our
              programmes are designed, led, and run by Kenyan teams and local
              communities. Revenue stays in communities. Local families benefit —
              not international operators.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 3: THE POWER FLIP
      ───────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-kapes-orange font-semibold text-sm uppercase tracking-wider">
              The Power Flip
            </span>
            <h2 className="text-3xl md:text-5xl font-academy text-kapes-charcoal mt-3 mb-4">
              Kenyan teams lead.{' '}
              <span className="text-kapes-orange">Your students join.</span>
            </h2>
            <p className="text-lg text-dragon-gray max-w-2xl mx-auto">
              Communities are not recipients. They are leaders. Local teams design
              programmes, set priorities, and run operations. Your students join a
              story already in motion — they don't direct it.
            </p>
          </motion.div>

          {/* Founder Visual + Quote */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="grid lg:grid-cols-2 gap-12 items-center mb-20"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/lovable-uploads/c0bdd0e5-7b79-492d-8c2d-d91d5b892cee.png"
                alt="Kapes Adventures founder with the local team in Kenya"
                className="w-full h-[400px] md:h-[480px] object-cover"
              />
            </div>
            <div>
              <Quote className="w-10 h-10 text-kapes-orange/30 mb-4" />
              <blockquote className="text-xl md:text-2xl text-kapes-charcoal leading-relaxed font-medium italic mb-6">
                "We don't bring solutions to communities. We ask communities what
                they need, and then we build programmes around their answers. Our
                team is Kenyan. Our priorities are set in Kenya. That's not a
                marketing line — it's how we operate."
              </blockquote>
              <p className="text-dragon-gray font-semibold">
                — Kapes Adventures Kenya Team
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 4: THREE PILLARS
      ───────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-dragon-dark">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-kapes-orange font-semibold text-sm uppercase tracking-wider">
              How It Works
            </span>
            <h2 className="text-3xl md:text-5xl font-academy text-white mt-3 mb-4">
              Three pillars of a community-led model
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8"
          >
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-kapes-orange/20 flex items-center justify-center mb-6">
                  <pillar.icon className="w-7 h-7 text-kapes-orange" />
                </div>
                <div className="text-kapes-orange font-gothic text-sm mb-2">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-academy text-white mb-4">
                  {pillar.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 5: WHAT THIS LOOKS LIKE
      ───────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-kapes-orange font-semibold text-sm uppercase tracking-wider">
              On the Ground
            </span>
            <h2 className="text-3xl md:text-5xl font-academy text-kapes-charcoal mt-3 mb-4">
              What community-led{' '}
              <span className="text-kapes-orange">actually looks like</span>
            </h2>
            <p className="text-lg text-dragon-gray max-w-2xl mx-auto">
              These are not talking points. This is what happens on every single trip.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {concreteExamples.map((example) => (
              <motion.div
                key={example.text}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="flex items-start gap-4 bg-kapes-cream rounded-xl p-6"
              >
                <div className="w-12 h-12 shrink-0 rounded-full bg-dragon/10 flex items-center justify-center">
                  <example.icon className="w-6 h-6 text-dragon" />
                </div>
                <p className="text-kapes-charcoal text-lg leading-relaxed">
                  {example.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 6: BELONGING STATEMENT
      ───────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-kapes-charcoal">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto"
          >
            <span className="text-kapes-orange font-semibold text-sm uppercase tracking-wider block text-center mb-6">
              Is this you?
            </span>
            <h2 className="text-3xl md:text-5xl font-academy text-white text-center mb-4 leading-tight">
              We're for schools that...
            </h2>
            <p className="text-white/60 text-center text-lg mb-12 max-w-xl mx-auto">
              We are not the kind of school that does voluntourism. We partner with
              communities. If that sounds like you, you are in the right place.
            </p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="space-y-4"
            >
              {identityStatements.map((statement) => (
                <motion.div
                  key={statement}
                  variants={fadeUp}
                  transition={{ duration: 0.4 }}
                  className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl px-6 py-5"
                >
                  <CheckCircle2 className="w-6 h-6 text-kapes-orange shrink-0 mt-0.5" />
                  <p className="text-white text-lg">{statement}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center text-white/70 text-lg mt-12"
            >
              If you checked every box, you are already part of our community. Let's
              make it official.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 7: PROGRAMS — Community-First Framing
      ───────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-kapes-cream">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-kapes-orange font-semibold text-sm uppercase tracking-wider">
              Our Programmes
            </span>
            <h2 className="text-3xl md:text-5xl font-academy text-kapes-charcoal mt-3 mb-4">
              Designed by communities.{' '}
              <span className="text-kapes-orange">Joined by students.</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Seeds2Education */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-[280px] overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dng12bd0a/image/upload/v1747160268/WhatsApp_Image_2025-05-13_at_12.07.56_m0epad.jpg"
                  alt="Students working alongside local permaculture teachers in a school garden"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-dragon text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium">
                  <Sprout className="w-4 h-4" />
                  Seeds2Education
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-academy text-kapes-charcoal mb-3">
                  Seeds2Education
                </h3>
                <p className="text-dragon-gray leading-relaxed mb-4">
                  Local permaculture educators lead this programme. They have been
                  growing food in this soil their entire lives. Your students join
                  them — planting school gardens, learning regenerative farming, and
                  supporting food security initiatives designed and run by the
                  community.
                </p>
                <p className="text-sm text-kapes-orange font-semibold">
                  Community-led food security and permaculture education
                </p>
              </div>
            </motion.div>

            {/* Water Empowering Women */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-[280px] overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dng12bd0a/image/upload/v1747159769/Filip-C-Agoo-Everland-Marketing-Kenya-13983_atg3tn.jpg"
                  alt="Women-led water cooperative members in the village"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium">
                  <Droplets className="w-4 h-4" />
                  Water Empowering Women
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-academy text-kapes-charcoal mb-3">
                  Water Empowering Women
                </h3>
                <p className="text-dragon-gray leading-relaxed mb-4">
                  Women from the village run these water cooperatives. They identify
                  the need, manage the projects, and lead your students through the
                  work. This is their programme — your students are honoured guests
                  who get to learn and contribute alongside them.
                </p>
                <p className="text-sm text-kapes-orange font-semibold">
                  Women-led water access and community empowerment
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <Button className="btn-action text-lg h-14 px-10" asChild>
              <Link to="/programs">
                Explore All Programmes
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 8: PROOF — Testimonial + Stats
      ───────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-wide">
          {/* Testimonial */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center mb-20"
          >
            <Quote className="w-12 h-12 text-kapes-orange/30 mx-auto mb-6" />
            <blockquote className="text-xl md:text-2xl text-kapes-charcoal leading-relaxed font-medium italic mb-6">
              "What struck me most was that our students weren't leading — they were
              learning. The community members were the experts, and our kids came
              back with genuine humility and understanding. That's the kind of
              experience we want for our students."
            </blockquote>
            <p className="text-dragon-gray font-semibold">
              — IB Coordinator, International School Partner
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { number: '100%', label: 'Kenyan-led operations' },
              { number: '350+', label: 'Students transformed' },
              { number: '15+', label: 'Partner schools' },
              { number: '10+', label: 'Communities served' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="text-center p-6 bg-kapes-cream rounded-xl"
              >
                <div className="text-3xl md:text-4xl font-gothic text-kapes-orange mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-dragon-gray">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 9: SCORECARD CTA
      ───────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-kapes-cream">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="w-16 h-16 rounded-full bg-kapes-orange/10 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-kapes-orange" />
            </div>
            <h2 className="text-3xl md:text-5xl font-academy text-kapes-charcoal mb-6">
              How does your current trip provider{' '}
              <span className="text-kapes-orange">score on impact?</span>
            </h2>
            <p className="text-lg text-dragon-gray max-w-xl mx-auto mb-10 leading-relaxed">
              Take our free 5-minute Global Impact Trip Scorecard and see how your
              school's travel programme measures up on community leadership, equity,
              and lasting impact.
            </p>
            <Button className="btn-action text-lg h-14 px-10" asChild>
              <Link to="/scorecard">
                Take the 5-Min Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 10: FINAL CTA
      ───────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-dragon-dark">
        <div className="container-wide text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-academy text-white mb-6 leading-tight">
              Ready to partner with a team that{' '}
              <span className="text-kapes-orange">puts communities first?</span>
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              Talk directly with our Kenya-based team. No sales deck. No pressure.
              Just an honest conversation about what community-led education looks
              like — and whether we are the right fit for your school.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CalendlyEmbed
                url="https://calendly.com/kapesuniforms/kapes-uniforms-consultation-clone"
                text="Talk to Our Kenya Team"
                className="btn-action text-lg px-10 py-6"
              />
              <Button className="btn-ghost text-lg h-14 px-8" asChild>
                <Link to="/scorecard">
                  Take the 5-Min Assessment
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

export default LPCommunityLed;
