import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Droplets,
  Heart,
  Leaf,
  MapPin,
  Quote,
  Sprout,
  Sun,
  Users,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import CalendlyEmbed from '@/components/CalendlyEmbed';

/* ─── Animation helpers ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

/* ─── Data ─── */
const mechanismSteps = [
  {
    number: '01',
    icon: Sun,
    title: 'Programs run year-round',
    description:
      'Kenyan-led teams operate Seeds2Education gardens, water cooperatives, and school feeding programs 365 days a year. The work never pauses.',
  },
  {
    number: '02',
    icon: Users,
    title: 'Students join the work',
    description:
      'Your students plug into programs already in motion. They contribute to real, ongoing projects — not activities invented for their visit.',
  },
  {
    number: '03',
    icon: Sprout,
    title: 'Impact continues after they leave',
    description:
      'When the bus pulls away, the gardens keep feeding. The water infrastructure keeps serving. The cooperatives keep operating. Nothing stops.',
  },
];

const calendarMonths = [
  { month: 'Jan', active: false },
  { month: 'Feb', active: true },
  { month: 'Mar', active: true },
  { month: 'Apr', active: false },
  { month: 'May', active: false },
  { month: 'Jun', active: true },
  { month: 'Jul', active: true },
  { month: 'Aug', active: false },
  { month: 'Sep', active: false },
  { month: 'Oct', active: true },
  { month: 'Nov', active: true },
  { month: 'Dec', active: false },
];

const faqs = [
  {
    q: 'What happens year-round when students aren\'t there?',
    a: 'Our Kenyan teams run every program daily. Seeds2Education gardens are tended and harvested to feed 200+ children each school day. Water cooperatives collect, purify, and distribute water to surrounding communities. Student trips are scheduled windows into this continuous work.',
  },
  {
    q: 'Who leads the programs on the ground?',
    a: 'All programs are led by Kenyan staff and community members. Seeds2Education is managed by local permaculture specialists and school staff. The water program is operated by women-led cooperatives. Kapes Adventures coordinates logistics, but communities own and run the impact work.',
  },
  {
    q: 'How is the trip fee actually spent?',
    a: 'We provide a transparent breakdown before you book. Funds cover program operations, community payments, local staff wages, accommodation, transport, meals, and safety infrastructure. No portion goes to middlemen or offshore accounts. We can share a detailed line-item budget on request.',
  },
  {
    q: 'How do you measure impact beyond anecdotes?',
    a: 'We track meals served per day, children enrolled in feeding programs, water access points built, cooperative membership, and school attendance data. We share these numbers in post-trip reports and can provide them to your board or accreditation body.',
  },
  {
    q: 'Can our trip be customised for IB CAS or service learning requirements?',
    a: 'Yes. Every trip is designed to meet IB CAS, Duke of Edinburgh, and common service learning criteria. We provide pre-trip learning modules, on-trip reflection frameworks, and post-trip documentation to support your curriculum requirements.',
  },
  {
    q: 'What group sizes do you accommodate?',
    a: 'We run trips for groups of 10-30 students, plus accompanying staff. This size ensures meaningful engagement without overwhelming community partners. Larger groups can be split across multiple trip windows.',
  },
];

/* ─── Component ─── */
const LPYearRoundImpact = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);
  const pageUrl = 'https://kapesadventures.com/year-round-impact';

  return (
    <>
      <SEO
        title="Year-Round Impact Programs | School Trips to Kenya"
        description="Kapes Adventures runs year-round community programs in Kenya. Student trips plug into ongoing work — Seeds2Education, water access, and school feeding. See the mechanism behind real impact."
        keywords="school trips Kenya, year-round impact, Seeds2Education, service learning, IB CAS trips, ethical school travel, Kapes Adventures"
        ogUrl={pageUrl}
        canonicalUrl={pageUrl}
      />

      <Header />

      {/* ════════════════════════════════════════════════════════
          SECTION 1 — VIDEO HERO
      ════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-kapes-charcoal">
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://res.cloudinary.com/dng12bd0a/image/upload/v1768976012/KAPESVoifriday_klein-124_mayzid.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source
            src="https://res.cloudinary.com/dng12bd0a/video/upload/v1768975922/full_film_highlight_nov_2025_1_j3lear.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-kapes-charcoal/40 via-kapes-charcoal/30 to-kapes-charcoal/80" />

        <div className="container-wide relative z-10 py-32 md:py-44">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-kapes-orange font-semibold text-sm uppercase tracking-wider mb-6">
              Year-Round Impact Engine
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-academy text-white leading-[0.95] mb-6">
              The impact doesn't start when your students arrive.
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mb-4">
              And it doesn't stop when they leave.
            </p>
            <p className="text-lg text-white/70 max-w-2xl mb-10">
              Most trip companies build projects for visitors. We build programs for communities — then invite your students to join.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CalendlyEmbed
                url="https://calendly.com/kapesuniforms/kapes-uniforms-consultation-clone"
                text="Book a Call"
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

      {/* ════════════════════════════════════════════════════════
          SECTION 2 — MECHANISM REVEAL: 3-Step Process
      ════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-kapes-orange font-semibold text-sm uppercase tracking-wider">
              The Mechanism
            </span>
            <h2 className="text-3xl md:text-5xl font-academy text-kapes-charcoal mt-3 mb-6">
              How year-round programs make every trip count
            </h2>
            <p className="text-lg text-dragon-gray">
              Our programs run 365 days a year with Kenyan-led teams. Student trips are windows into ongoing work — not the work itself.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8 lg:gap-12"
          >
            {mechanismSteps.map((step, idx) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className="relative text-center p-8 rounded-2xl bg-kapes-cream"
              >
                {/* Connector line */}
                {idx < mechanismSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 lg:-right-8 w-12 lg:w-16 h-[2px] bg-kapes-orange/30" />
                )}
                <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-dragon flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <span className="text-sm font-gothic text-kapes-orange font-bold">{step.number}</span>
                <h3 className="text-xl font-academy text-kapes-charcoal mt-2 mb-3">{step.title}</h3>
                <p className="text-dragon-gray leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SECTION 3 — PROGRAM DEEP DIVE
      ════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-kapes-cream">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-kapes-orange font-semibold text-sm uppercase tracking-wider">
              Our Programs
            </span>
            <h2 className="text-3xl md:text-5xl font-academy text-kapes-charcoal mt-3 mb-6">
              Two programs. One mission.
            </h2>
            <p className="text-lg text-dragon-gray">
              These aren't trip add-ons. They are standalone community programs your students get the privilege of joining.
            </p>
          </motion.div>

          {/* Seeds2Education */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://res.cloudinary.com/dng12bd0a/image/upload/v1747160268/WhatsApp_Image_2025-05-13_at_12.07.56_m0epad.jpg"
                alt="Seeds2Education permaculture garden with students"
                className="w-full h-[350px] md:h-[420px] object-cover"
              />
              <div className="absolute top-4 left-4 bg-dragon text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium">
                <Leaf className="w-4 h-4" />
                Seeds2Education
              </div>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-academy text-kapes-charcoal mb-4">
                Seeds2Education
              </h3>
              <p className="text-lg text-dragon-gray leading-relaxed mb-4">
                Permaculture gardens established at partner schools in the Kasigau Corridor. Local staff tend and harvest these gardens every school day. The food goes directly into school meals.
              </p>
              <p className="text-lg text-dragon-gray leading-relaxed mb-6">
                200+ children eat from these gardens daily. Not during trip season. Every day.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { stat: '200+', label: 'Children fed daily' },
                  { stat: '8', label: 'School gardens' },
                  { stat: '365', label: 'Days a year' },
                ].map((item) => (
                  <div key={item.label} className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-2xl font-gothic text-dragon">{item.stat}</div>
                    <div className="text-xs text-dragon-gray mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Water Empowering Women */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
          >
            <div className="lg:order-2 relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://res.cloudinary.com/dng12bd0a/image/upload/v1747159769/Filip-C-Agoo-Everland-Marketing-Kenya-13983_atg3tn.jpg"
                alt="Women-led water cooperative in Kenya"
                className="w-full h-[350px] md:h-[420px] object-cover"
              />
              <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium">
                <Droplets className="w-4 h-4" />
                Water Empowering Women
              </div>
            </div>
            <div className="lg:order-1">
              <h3 className="text-2xl md:text-3xl font-academy text-kapes-charcoal mb-4">
                Water Empowering Women
              </h3>
              <p className="text-lg text-dragon-gray leading-relaxed mb-4">
                Women-led cooperatives manage water collection, purification, and distribution for surrounding communities. These cooperatives create income, independence, and infrastructure.
              </p>
              <p className="text-lg text-dragon-gray leading-relaxed mb-6">
                When women have water, girls stay in school. This is not a metaphor. It is a documented, measurable outcome.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { stat: '50+', label: 'Women supported' },
                  { stat: '3', label: 'Cooperatives' },
                  { stat: '100%', label: 'Women-led' },
                ].map((item) => (
                  <div key={item.label} className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-2xl font-gothic text-blue-600">{item.stat}</div>
                    <div className="text-xs text-dragon-gray mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SECTION 4 — TIMELINE / CALENDAR VISUAL
      ════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-kapes-charcoal">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-kapes-orange font-semibold text-sm uppercase tracking-wider">
              365 Days a Year
            </span>
            <h2 className="text-3xl md:text-5xl font-academy text-white mt-3 mb-6">
              Programs never stop. Trips are windows.
            </h2>
            <p className="text-lg text-white/70">
              The green bar runs all year. The orange windows are when students visit. See the difference?
            </p>
          </motion.div>

          {/* Calendar visual */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            {/* Continuous program bar */}
            <div className="mb-4 flex items-center gap-3">
              <div className="w-4 h-4 rounded-sm bg-dragon" />
              <span className="text-sm text-white/70">Programs running (365 days)</span>
              <div className="w-4 h-4 rounded-sm bg-kapes-orange ml-4" />
              <span className="text-sm text-white/70">Student trip windows</span>
            </div>

            <div className="relative">
              {/* Year-round bar */}
              <div className="w-full h-3 bg-dragon/60 rounded-full mb-4" />

              {/* Month grid */}
              <div className="grid grid-cols-12 gap-1 md:gap-2">
                {calendarMonths.map((m) => (
                  <div key={m.month} className="text-center">
                    <div
                      className={`h-16 md:h-20 rounded-lg flex items-center justify-center transition-all ${
                        m.active
                          ? 'bg-kapes-orange text-white shadow-lg shadow-kapes-orange/20'
                          : 'bg-white/5 text-white/40'
                      }`}
                    >
                      <Calendar className={`w-4 h-4 md:w-5 md:h-5 ${m.active ? 'text-white' : 'text-white/30'}`} />
                    </div>
                    <span className={`text-xs mt-2 block ${m.active ? 'text-kapes-orange font-semibold' : 'text-white/50'}`}>
                      {m.month}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-center text-white/60 text-sm mt-8">
              Trip windows are flexible. Programs are constant.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SECTION 5 — WHAT HAPPENS WHEN STUDENTS LEAVE
      ════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <span className="text-kapes-orange font-semibold text-sm uppercase tracking-wider">
              The #1 Question We Get
            </span>
            <h2 className="text-3xl md:text-5xl font-academy text-kapes-charcoal mt-3 mb-6">
              "What happens when the students leave?"
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {[
              {
                icon: Leaf,
                title: 'The gardens keep feeding',
                desc: 'Seeds2Education gardens are tended by local staff every school day. 200+ children eat whether or not visitors are present.',
              },
              {
                icon: Droplets,
                title: 'The water keeps flowing',
                desc: 'Women-led cooperatives operate independently. Water infrastructure serves communities year-round.',
              },
              {
                icon: Heart,
                title: 'The cooperatives keep growing',
                desc: 'Income-generating programs continue. Women gain economic independence regardless of trip schedules.',
              },
              {
                icon: Users,
                title: 'Local teams stay employed',
                desc: 'Our Kenyan staff work full-time, year-round. They are not seasonal hires brought in for student visits.',
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="flex gap-5 p-6 rounded-xl bg-kapes-cream"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-dragon/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-dragon" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-kapes-charcoal mb-2">{item.title}</h3>
                  <p className="text-dragon-gray leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center text-lg font-semibold text-kapes-charcoal mt-12 max-w-2xl mx-auto"
          >
            Nothing stops. That is the mechanism. That is why the impact claims are real.
          </motion.p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SECTION 6 — FOUNDER / CREDIBILITY
      ════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-kapes-cream">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            <div className="relative">
              <img
                src="/lovable-uploads/c0bdd0e5-7b79-492d-8c2d-d91d5b892cee.png"
                alt="Matthew Benjamin, Founder of Kapes Adventures"
                className="w-full max-w-md mx-auto rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <span className="text-kapes-orange font-semibold text-sm uppercase tracking-wider">
                Origin Story
              </span>
              <h2 className="text-3xl md:text-4xl font-academy text-kapes-charcoal mt-3 mb-6">
                Built from the ground up
              </h2>
              <div className="space-y-4 text-lg text-dragon-gray leading-relaxed">
                <p>
                  In 2020, Matthew Benjamin founded Kapes Uniforms — a social enterprise producing school uniforms in Kenya while creating local employment.
                </p>
                <p>
                  A visit to the Kasigau Corridor changed everything. The communities there needed more than uniforms. They needed food security, water access, and economic opportunity for women.
                </p>
                <p>
                  Kapes Adventures was born in 2022 to connect international schools with these communities — not as charity tourists, but as participants in work that was already happening.
                </p>
                <p className="font-semibold text-kapes-charcoal">
                  The programs came first. The trips came second. That order matters.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SECTION 7 — PROOF (Stats + Testimonial)
      ════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-dragon-dark">
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
              The Numbers
            </span>
            <h2 className="text-3xl md:text-5xl font-academy text-white mt-3">
              Proof, not promises
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-20"
          >
            {[
              { number: '200+', label: 'Children fed daily' },
              { number: '365', label: 'Days a year' },
              { number: '10-30', label: 'Students per group' },
              { number: '100%', label: 'Kenyan-led programs' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-gothic text-kapes-orange">{stat.number}</div>
                <div className="text-sm text-white/70 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonial */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-3xl mx-auto bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10"
          >
            <Quote className="w-10 h-10 text-kapes-orange/40 mb-4" />
            <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-6">
              "Kapes Adventures provided an experience that was authentic, well-organised, and genuinely impactful. Our students didn't just visit a project — they joined something real. The year-round commitment to these communities sets them apart from every other provider we evaluated."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-kapes-orange/20 flex items-center justify-center">
                <span className="text-kapes-orange font-bold text-lg">BG</span>
              </div>
              <div>
                <div className="text-white font-semibold">Brett Girven</div>
                <div className="text-white/60 text-sm">School Trip Coordinator</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SECTION 8 — SCORECARD CTA (Lead Magnet)
      ════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto bg-kapes-cream rounded-2xl p-8 md:p-14 text-center"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-dragon flex items-center justify-center">
              <ClipboardCheck className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-academy text-kapes-charcoal mb-4">
              How does your current trip compare?
            </h2>
            <p className="text-lg text-dragon-gray max-w-2xl mx-auto mb-8">
              Take our 5-minute School Trip Impact Scorecard. Get a clear, research-informed assessment of your program's learning quality, ethics, and community impact — with actionable next steps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-action text-lg h-14 px-10" asChild>
                <Link to="/scorecard">
                  Take the 5-Min Assessment
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
            <p className="text-sm text-dragon-gray/60 mt-4">
              Free. No email required. Results are instant.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SECTION 9 — FAQ
      ════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-kapes-cream">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-kapes-orange font-semibold text-sm uppercase tracking-wider">
              Common Questions
            </span>
            <h2 className="text-3xl md:text-5xl font-academy text-kapes-charcoal mt-3">
              What decision-makers ask
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-kapes-cream/50 transition-colors"
                >
                  <span className="font-semibold text-kapes-charcoal pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-dragon-gray flex-shrink-0 transition-transform duration-300 ${
                      openFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === idx ? 'max-h-96 pb-6' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 text-dragon-gray leading-relaxed">{faq.a}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SECTION 10 — FINAL CTA
      ════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-dragon">
        <div className="container-wide text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-5xl font-academy text-white mb-6">
              Your students deserve a trip that matters
              <br />
              <span className="text-kapes-orange">before, during, and after.</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Talk to our Kenya-based team. Ask the hard questions. We have the answers because we do the work every single day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CalendlyEmbed
                url="https://calendly.com/kapesuniforms/kapes-uniforms-consultation-clone"
                text="Book a Call"
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

export default LPYearRoundImpact;
