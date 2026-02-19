import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import CalendlyEmbed from '@/components/CalendlyEmbed';
import GatedDownloadForm from '@/components/lead-magnets/GatedDownloadForm';
import { generateEthicalPlanningGuide } from '@/utils/leadMagnetPdfGenerators';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  CheckCircle2,
  BookOpen,
  Users,
  DollarSign,
  BarChart3,
} from 'lucide-react';

// ─── Section 1: Hero (Dark bg-dragon-dark) ──────────────────────────────────
const HeroSection = () => (
  <section className="relative py-32 md:py-40 bg-dragon-dark text-white">
    <div className="container-wide relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-kapes-orange font-semibold text-sm md:text-base uppercase tracking-widest mb-6"
        >
          Free Planning Guide
        </motion.p>

        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-academy leading-[0.88] tracking-tight mb-8">
          The Ethical School Trip
          <br />
          <span className="text-kapes-orange">Planning Guide</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/85 mb-6 max-w-3xl mx-auto leading-relaxed">
          Everything your school needs to plan trips that create real impact
          — without the voluntourism pitfalls.
        </p>

        <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto">
          8 chapters. 40+ pages of frameworks, checklists, and practical tools.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button className="btn-action text-lg px-10 py-6" asChild>
            <a href="#download">
              Download the Free Guide
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
          <Button className="btn-ghost text-lg px-10 py-6" asChild>
            <a href="#whats-inside">See What's Inside</a>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

// ─── Section 2: Problem Section (bg-white) ──────────────────────────────────
const ProblemSection = () => (
  <section className="py-24 md:py-32 bg-white">
    <div className="container-wide">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-academy text-kapes-charcoal mb-8 leading-tight">
            Good intentions{' '}
            <span className="text-kapes-orange">aren't enough</span>
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
            The voluntourism industry is worth $173 billion — and it runs almost
            entirely on good intentions with poor outcomes. Schools send students
            abroad to "make a difference," but most trips are designed for the
            student experience, not the community.
          </p>
          <p>
            Projects get built for visitors, money flows to international
            operators, and communities are left performing gratitude for groups
            that will never return.{' '}
            <strong className="text-kapes-charcoal">
              This guide exists to help you do it differently.
            </strong>
          </p>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {[
            { stat: '$173B', label: 'voluntourism industry' },
            { stat: '70%', label: 'of revenue leaves communities' },
            { stat: '1 in 3', label: 'children go to school hungry' },
            { stat: '0', label: 'Most trips have zero community outcome data' },
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
      </div>
    </div>
  </section>
);

// ─── Section 3: Table of Contents Preview (bg-kapes-cream) ──────────────────
const chapters = [
  {
    number: '01',
    title: 'The Voluntourism Problem (And How to Avoid It)',
    description:
      'Understand why good intentions lead to bad outcomes — and what ethical travel actually looks like.',
  },
  {
    number: '02',
    title: 'Community-Led vs. Student-Led — Why It Matters',
    description:
      'The critical distinction between programs built for communities and programs built for visitors.',
  },
  {
    number: '03',
    title: 'The Pre-Trip Curriculum Framework',
    description:
      'How to prepare students with context, history, and ethical grounding before they travel.',
  },
  {
    number: '04',
    title: 'Choosing the Right Partner (Due Diligence Checklist)',
    description:
      'A 20-point checklist for evaluating trip providers and spotting red flags.',
  },
  {
    number: '05',
    title: 'Budgeting for Real Impact — Where Should Money Go?',
    description:
      'How to ensure your trip budget reaches the community, not just international operators.',
  },
  {
    number: '06',
    title: 'On-Ground Best Practices',
    description:
      'Ethical photography, student behaviour, community interaction protocols, and more.',
  },
  {
    number: '07',
    title: 'Post-Trip Reflection and Measurement',
    description:
      'Frameworks for measuring genuine impact and helping students process their experience.',
  },
  {
    number: '08',
    title: 'Making the Case to Parents and Administration',
    description:
      'Templates and talking points for justifying ethical trips to stakeholders.',
  },
];

const TableOfContentsSection = () => (
  <section id="whats-inside" className="py-24 md:py-32 bg-kapes-cream">
    <div className="container-wide">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-kapes-orange font-semibold text-sm uppercase tracking-wider">
          8 chapters of practical tools
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-academy text-kapes-charcoal mt-3 mb-6 leading-tight">
          What's inside the guide
        </h2>
      </motion.div>

      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {chapters.map((chapter, index) => (
          <motion.div
            key={chapter.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
          >
            <span className="text-4xl font-gothic text-kapes-orange/30">
              {chapter.number}
            </span>
            <h3 className="text-lg font-bold text-kapes-charcoal mt-3 mb-2">
              {chapter.title}
            </h3>
            <p className="text-sm text-dragon-gray leading-relaxed">
              {chapter.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ─── Section 4: Form Capture Section (bg-white) ─────────────────────────────
const FormCaptureSection = () => (
  <section id="download" className="py-24 md:py-32 bg-white">
    <div className="container-wide">
      <div className="max-w-5xl mx-auto">
        <GatedDownloadForm
          leadMagnetType="ethical-planning-guide"
          title="Download the Free Guide"
          description="8 chapters of practical frameworks and checklists. Instantly downloadable."
          buttonText="Download the Guide"
          onDownload={() => generateEthicalPlanningGuide()}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-4xl font-academy text-kapes-charcoal mb-8">
              This guide is for you if:
            </h3>
            <ul className="space-y-4">
              {[
                "You're planning your first ethical school trip",
                'You want to audit your current trip provider',
                'You need to justify the trip to parents or administration',
                "You're looking for curriculum integration frameworks",
                'You want a due diligence checklist for vendor evaluation',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                  <span className="text-dragon-gray text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </GatedDownloadForm>
      </div>
    </div>
  </section>
);

// ─── Section 5: Credibility Section (bg-kapes-charcoal) ─────────────────────
const CredibilitySection = () => (
  <section className="py-24 md:py-32 bg-kapes-charcoal text-white">
    <div className="container-wide">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-kapes-orange font-semibold text-sm uppercase tracking-wider">
            Built from experience, not theory
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-academy mt-3 mb-8 leading-tight">
            Written from 3+ years of running{' '}
            <span className="text-kapes-orange">
              year-round programs in Kenya
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-16 leading-relaxed">
            Kapes Adventures runs Seeds2Education gardens, water cooperatives,
            and school feeding programs 365 days a year. This guide isn't theory
            — it's how we operate.
          </p>
        </motion.div>

        {/* Stat row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { number: '200+', label: 'Children fed daily' },
            { number: '365', label: 'Days a year' },
            { number: '50+', label: 'Women in cooperatives' },
            { number: '15+', label: 'Partner schools' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <span className="block text-4xl md:text-5xl font-gothic text-kapes-orange">
                {stat.number}
              </span>
              <span className="text-white/60 mt-1 block">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

// ─── Section 6: Secondary CTA (bg-kapes-cream) ─────────────────────────────
const SecondaryCTASection = () => (
  <section className="py-24 md:py-32 bg-kapes-cream">
    <div className="container-wide text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-academy text-kapes-charcoal leading-tight mb-6">
          Prefer to{' '}
          <span className="text-kapes-orange">talk to someone?</span>
        </h2>
        <p className="text-xl text-dragon-gray mb-10">
          Our Kenya team can walk you through the guide, answer questions about
          ethical trip planning, or help you evaluate your current provider.
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
      </motion.div>
    </div>
  </section>
);

// ─── Page Assembly ──────────────────────────────────────────────────────────
const EthicalPlanningGuide = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="The Ethical School Trip Planning Guide | Kapes Adventures"
        description="Download the free 40+ page guide with 8 chapters of frameworks, checklists, and practical tools to plan school trips that create real community impact — without the voluntourism pitfalls."
        keywords="ethical school trip planning, voluntourism guide, school trip checklist, responsible travel education, Kapes Adventures"
        ogUrl="https://missionkapes.com/resources/ethical-planning-guide"
        canonicalUrl="https://missionkapes.com/resources/ethical-planning-guide"
      />
      <Header />

      <main>
        <HeroSection />
        <ProblemSection />
        <TableOfContentsSection />
        <FormCaptureSection />
        <CredibilitySection />
        <SecondaryCTASection />
      </main>

      <Footer />
    </div>
  );
};

export default EthicalPlanningGuide;
