import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import CalendlyEmbed from '@/components/CalendlyEmbed';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Calendar,
  FileText,
  Users,
  Award,
  CheckCircle2,
  ChevronDown,
  Quote,
  Utensils,
  Droplets,
  Shield,
  Plane,
  ClipboardList,
  MessageSquare,
} from 'lucide-react';

// ─── Section 1: Hero (Hook) ──────────────────────────────────────────────────
const HeroSection = () => (
  <section className="relative min-h-[85vh] flex flex-col items-center justify-center bg-dragon-dark overflow-hidden">
    {/* Subtle pattern overlay */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,119,0,0.06)_0%,transparent_50%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(17,87,64,0.08)_0%,transparent_50%)]" />

    <div className="container-wide relative z-10 text-white text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <BookOpen className="w-5 h-5 text-kapes-orange" />
          <span className="text-kapes-orange font-semibold text-sm md:text-base uppercase tracking-widest">
            Educator Partnership Programme
          </span>
          <BookOpen className="w-5 h-5 text-kapes-orange" />
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-academy leading-[0.88] tracking-tight mb-8">
          Built with educators.
          <br />
          <span className="text-kapes-orange">For educators.</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/85 mb-12 max-w-3xl mx-auto leading-relaxed">
          Because a trip without curriculum is just tourism.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <CalendlyEmbed
            url="https://calendly.com/kapesuniforms/kapes-uniforms-consultation-clone"
            text="Talk to Our Education Team"
            className="btn-action text-lg px-10 py-6"
          />
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
            'SDG-aligned curriculum',
            'IB CAS hours included',
            'Pre-trip & post-trip modules',
            'Multi-year partnerships',
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
          .getElementById('educator-problem')
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

// ─── Section 2: The Educator's Problem ───────────────────────────────────────
const ProblemSection = () => (
  <section id="educator-problem" className="py-24 md:py-32 bg-white">
    <div className="container-wide">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-kapes-orange font-semibold text-sm uppercase tracking-wider">
            The educator's reality
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-academy text-kapes-charcoal mt-3 mb-8 leading-tight">
            You're treated like a{' '}
            <span className="text-kapes-orange">chaperone</span>, not a
            curriculum partner
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
            You spend months planning trips. You justify budgets to admin. You
            write risk assessments. You manage parent anxiety. You align
            everything to your learning outcomes and accreditation requirements.
          </p>
          <p>
            And then the trip provider treats you like a{' '}
            <strong className="text-kapes-charcoal">chaperone</strong> — not a
            curriculum partner. They hand you a glossy itinerary, bolt on a
            "service day," and call it experiential learning.
          </p>
          <p className="text-kapes-charcoal font-semibold">
            You deserve better than that. Your students deserve better than that.
          </p>
        </motion.div>

        {/* Educator pain points */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-12 grid sm:grid-cols-2 gap-4"
        >
          {[
            {
              icon: ClipboardList,
              label: 'Risk assessments with no provider transparency',
            },
            {
              icon: FileText,
              label: 'No pre-trip or post-trip curriculum support',
            },
            {
              icon: MessageSquare,
              label: 'Parent communication left entirely to you',
            },
            {
              icon: Award,
              label: 'CAS/SDG alignment is your problem, not theirs',
            },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              className="bg-kapes-cream rounded-xl p-6 flex items-start gap-4"
            >
              <div className="w-10 h-10 bg-kapes-orange/10 rounded-lg flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-kapes-orange" />
              </div>
              <span className="text-dragon-gray">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 bg-kapes-charcoal text-white rounded-2xl p-8 md:p-12"
        >
          <p className="text-xl md:text-2xl font-academy leading-relaxed">
            Most trip providers treat teachers as chaperones.{' '}
            <span className="text-kapes-orange">
              We treat you as curriculum partners.
            </span>
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

// ─── Section 3: How Kapes Is Different for Educators ─────────────────────────
const DifferenceSection = () => (
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
          How Kapes is different
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-academy text-kapes-charcoal mt-3 mb-6 leading-tight">
          We build <span className="text-kapes-orange">with</span> you,
          <br />
          not just <span className="text-kapes-orange">for</span> you
        </h2>
        <p className="text-xl text-dragon-gray max-w-3xl mx-auto">
          We don't sell one-off trips. We build multi-year partnerships with
          educators who want to embed global citizenship into their teaching.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          {
            icon: BookOpen,
            title: 'Pre-Trip Curriculum Modules',
            desc: 'Co-designed with your learning goals. Aligned to SDGs, IB frameworks, and your school\'s specific accreditation requirements. Ready to teach, not boilerplate.',
          },
          {
            icon: GraduationCap,
            title: 'IB CAS & SDG Integration',
            desc: 'Full CAS hours documentation. SDG alignment mapped to every activity. Your students get credit for real learning, not just attendance.',
          },
          {
            icon: FileText,
            title: 'Post-Trip Reflection Frameworks',
            desc: 'Structured reflection tools that turn experience into understanding. Assessment-ready, not an afterthought. Built for your reporting needs.',
          },
          {
            icon: Users,
            title: 'On-Ground Kenyan Experts',
            desc: 'Your students learn from community leaders, conservationists, and social entrepreneurs. Not from a tour guide reading a script.',
          },
          {
            icon: Shield,
            title: 'Risk Management Shared Upfront',
            desc: 'Full documentation, emergency protocols, and health standards shared before you present to admin or parents. No chasing. No surprises.',
          },
          {
            icon: MessageSquare,
            title: 'Parent Communication Materials',
            desc: 'Pre-written parent information packs, FAQ documents, and impact reports. We help you make the case — not leave you to figure it out alone.',
          },
        ].map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="w-14 h-14 bg-dragon rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <feature.icon className="w-7 h-7 text-white" />
            </div>
            <h4 className="font-bold text-lg text-kapes-charcoal mb-3">
              {feature.title}
            </h4>
            <p className="text-dragon-gray text-[15px] leading-relaxed">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ─── Section 4: The Partnership Model (Multi-Year Timeline) ──────────────────
const PartnershipSection = () => (
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
          The partnership model
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-academy text-kapes-charcoal mt-3 mb-6 leading-tight">
          Not a vendor.{' '}
          <span className="text-kapes-orange">A partner.</span>
        </h2>
        <p className="text-xl text-dragon-gray max-w-3xl mx-auto">
          We think in years, not bookings. Here is what a Kapes partnership
          looks like over time.
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto">
        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-kapes-orange/20 -translate-x-1/2" />

          {[
            {
              year: 'Year 1',
              title: 'First Trip + Curriculum Integration',
              items: [
                'Co-design curriculum modules aligned to your learning outcomes',
                'First student trip to Kenya with full educator support',
                'Post-trip debrief and programme evaluation',
                'Risk management and parent communication templates established',
                'CAS/SDG documentation provided for accreditation',
              ],
              icon: Calendar,
            },
            {
              year: 'Year 2',
              title: 'Expanded Programmes + Student Ambassadors',
              items: [
                'Refined curriculum based on Year 1 feedback',
                'Student ambassador programme launched at your school',
                'Expanded on-ground activities based on learning goals',
                'Cross-school collaboration opportunities introduced',
                'Deeper integration with department-wide objectives',
              ],
              icon: Users,
            },
            {
              year: 'Year 3',
              title: 'Deep Partnership + Educator Trips',
              items: [
                'Dedicated educator reconnaissance trip to Kenya',
                'Co-created content for school marketing and reporting',
                'Long-term impact tracking and shared reporting',
                'Multi-department programme integration',
                'Your school becomes a reference partner',
              ],
              icon: Award,
            },
          ].map((phase, index) => (
            <motion.div
              key={phase.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={`relative grid lg:grid-cols-2 gap-8 mb-16 last:mb-0 ${
                index % 2 === 1 ? 'lg:direction-rtl' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 w-12 h-12 bg-kapes-orange rounded-full items-center justify-center z-10">
                <phase.icon className="w-6 h-6 text-white" />
              </div>

              {/* Card */}
              <div
                className={`${
                  index % 2 === 1 ? 'lg:col-start-2' : 'lg:col-start-1'
                }`}
              >
                <div className="bg-kapes-cream rounded-2xl p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="lg:hidden w-10 h-10 bg-kapes-orange rounded-full flex items-center justify-center">
                      <phase.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-kapes-orange font-gothic text-2xl font-bold">
                      {phase.year}
                    </span>
                  </div>
                  <h3 className="text-2xl font-academy text-kapes-charcoal mb-4">
                    {phase.title}
                  </h3>
                  <ul className="space-y-3">
                    {phase.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-dragon mt-0.5 shrink-0" />
                        <span className="text-dragon-gray text-[15px]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div
                className={`hidden lg:block ${
                  index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
                }`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// ─── Section 5: What's Included (Deliverables) ──────────────────────────────
const DeliverablesSection = () => (
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
          What you get
        </span>
        <h2 className="text-4xl md:text-5xl font-academy mt-3 mb-6 leading-tight">
          Concrete deliverables.{' '}
          <span className="text-kapes-orange">No ambiguity.</span>
        </h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          Every educator partnership includes the following. No upsells. No
          hidden extras.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[
          {
            icon: BookOpen,
            title: 'Pre-Trip Learning Modules',
            desc: 'Curriculum-aligned materials designed with your learning outcomes. Ready to teach in your classroom before departure.',
          },
          {
            icon: GraduationCap,
            title: 'On-Ground Expert Sessions',
            desc: 'Sessions led by Kenyan community leaders, conservationists, and social entrepreneurs. Real expertise, not scripted tours.',
          },
          {
            icon: FileText,
            title: 'Post-Trip Reflection Tools',
            desc: 'Structured reflection frameworks for assessment. Designed for IB, AP, and other accreditation standards.',
          },
          {
            icon: MessageSquare,
            title: 'Parent Communication Pack',
            desc: 'Pre-written materials for parent evenings, FAQ documents, and impact summaries. Ready to send.',
          },
          {
            icon: Shield,
            title: 'Risk Management Documentation',
            desc: 'Full risk assessments, emergency protocols, and health standards. Shared upfront — not on request.',
          },
          {
            icon: Award,
            title: 'CAS/SDG Alignment Documentation',
            desc: 'Every activity mapped to Sustainable Development Goals and IB CAS requirements. Documentation ready for your coordinator.',
          },
        ].map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
          >
            <item.icon className="w-8 h-8 text-kapes-orange mb-5" />
            <h4 className="font-bold text-lg text-white mb-3">{item.title}</h4>
            <p className="text-white/70 text-[15px] leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ─── Section 6: Educator Testimonial ─────────────────────────────────────────
const TestimonialSection = () => (
  <section className="py-24 md:py-32 bg-white">
    <div className="container-wide">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-kapes-cream rounded-3xl p-8 md:p-12 relative"
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
    </div>
  </section>
);

// ─── Section 7: The Two Programs ─────────────────────────────────────────────
const ProgramsSection = () => (
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
          Two flagship programmes
        </span>
        <h2 className="text-4xl md:text-5xl font-academy text-kapes-charcoal mt-3 mb-6 leading-tight">
          Programmes designed for{' '}
          <span className="text-kapes-orange">learning outcomes</span>
        </h2>
        <p className="text-xl text-dragon-gray max-w-3xl mx-auto">
          Both programmes run year-round with Kenyan-led teams. Your students
          join work that is already making a difference — and every activity is
          mapped to curriculum objectives.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
                alt="Seeds2Education programme — students learning in permaculture garden"
                className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-dragon rounded-full flex items-center justify-center">
                    <Utensils className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white/70 text-sm font-medium uppercase tracking-wider">
                    Curriculum-Aligned Programme
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-academy text-white mb-2">
                  Seeds2Education
                </h3>
                <p className="text-white/80 mb-2">
                  Year-round permaculture gardens feeding 200+ children daily.
                  Students explore food security, sustainable agriculture, and
                  community development through hands-on learning.
                </p>
                <p className="text-white/60 text-sm mb-4">
                  SDGs: 1, 2, 4, 12, 15 | CAS: Creativity, Activity, Service
                </p>
                <span className="flex items-center text-kapes-orange font-semibold">
                  Explore programme
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
                alt="Water Empowering Women programme — women at water cooperative"
                className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-dragon rounded-full flex items-center justify-center">
                    <Droplets className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white/70 text-sm font-medium uppercase tracking-wider">
                    Curriculum-Aligned Programme
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-academy text-white mb-2">
                  Water Empowering Women
                </h3>
                <p className="text-white/80 mb-2">
                  Women-led cooperatives building water infrastructure
                  year-round. Students investigate gender equity, resource
                  management, and grassroots leadership.
                </p>
                <p className="text-white/60 text-sm mb-4">
                  SDGs: 5, 6, 8, 10, 17 | CAS: Creativity, Activity, Service
                </p>
                <span className="flex items-center text-kapes-orange font-semibold">
                  Explore programme
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

// ─── Section 8: Educator Trips ───────────────────────────────────────────────
const EducatorTripsSection = () => (
  <section className="py-24 md:py-32 bg-white">
    <div className="container-wide">
      <div className="max-w-5xl mx-auto">
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
                alt="Matthew Benjamin with educators and community partners in Kenya"
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
            <div className="flex items-center gap-3 mb-4">
              <Plane className="w-5 h-5 text-kapes-orange" />
              <span className="text-kapes-orange font-semibold text-sm uppercase tracking-wider">
                Educator reconnaissance trips
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-academy text-kapes-charcoal mb-6">
              See it yourself before you bring your students
            </h2>

            <div className="space-y-4 text-lg text-dragon-gray leading-relaxed">
              <p>
                We know you cannot champion a programme you have not experienced.
                That is why Kapes offers dedicated{' '}
                <strong className="text-kapes-charcoal">
                  educator reconnaissance trips
                </strong>{' '}
                — short, focused visits to Kenya designed specifically for
                teachers and department heads.
              </p>
              <p>
                Walk the ground. Meet the community partners. See the programmes
                in action. Ask every question. Then decide whether Kapes is the
                right fit for your school.
              </p>
              <p>
                No pressure. No obligation.{' '}
                <strong className="text-kapes-charcoal">
                  Just professional due diligence.
                </strong>
              </p>
            </div>

            <div className="mt-8">
              <Button className="btn-action text-lg px-8 py-5" asChild>
                <Link to="/educator-trips">
                  Learn About Educator Trips
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

// ─── Section 9: Scorecard CTA ────────────────────────────────────────────────
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
            Free assessment for educators
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-academy mt-3 mb-6 leading-tight">
            How does your current
            <br />
            <span className="text-kapes-orange">programme score?</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-4">
            Most school trip programmes score well on logistics but poorly on
            curriculum integration, community impact, and long-term outcomes.
            Find out where yours stands.
          </p>
          <p className="text-white/60 mb-10">
            20 questions. 5 minutes. Designed by educators, for educators.
          </p>

          <Button className="btn-action text-lg px-12 py-6" asChild>
            <Link to="/scorecard">
              Take the 5-Min Assessment
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>

          <p className="text-white/40 text-sm mt-4">
            Free. No credit card. Results and recommendations delivered
            instantly.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

// ─── Section 10: Final CTA ──────────────────────────────────────────────────
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
          Ready to build a
          <br />
          <span className="text-kapes-orange">real partnership?</span>
        </h2>
        <p className="text-xl text-white/80 mb-10">
          Speak directly with our education team. No sales pitch — just a
          conversation between educators about what is possible for your
          students and your curriculum.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <CalendlyEmbed
            url="https://calendly.com/kapesuniforms/kapes-uniforms-consultation-clone"
            text="Talk to Our Education Team"
            className="btn-action text-lg px-10 py-6"
          />
          <Button className="btn-ghost text-lg px-10 py-6" asChild>
            <Link to="/scorecard">Take the 5-Min Assessment</Link>
          </Button>
        </div>

        <p className="text-white/40 text-sm mt-6">
          No commitment. No generic brochure. A conversation tailored to your
          school's goals.
        </p>
      </motion.div>
    </div>
  </section>
);

// ─── Page Assembly ───────────────────────────────────────────────────────────
const LPEducators = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Educator Partnerships | Kapes Adventures"
        description="Built with educators, for educators. Multi-year curriculum partnerships embedding global citizenship into your teaching — starting with Kenya. Pre-trip modules, SDG alignment, IB CAS hours, and post-trip reflection frameworks included."
        keywords="educator partnerships Kenya, school trip curriculum, IB CAS service learning, SDG aligned trips, teacher trip planning, experiential learning Kenya, curriculum integrated travel"
      />
      <Header />

      <main>
        <HeroSection />
        <ProblemSection />
        <DifferenceSection />
        <PartnershipSection />
        <DeliverablesSection />
        <TestimonialSection />
        <ProgramsSection />
        <EducatorTripsSection />
        <ScorecardSection />
        <FinalCTASection />
      </main>

      <Footer />
    </div>
  );
};

export default LPEducators;
