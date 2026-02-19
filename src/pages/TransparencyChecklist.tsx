import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import GatedDownloadForm from '@/components/lead-magnets/GatedDownloadForm';
import { generateTransparencyChecklist } from '@/utils/leadMagnetPdfGenerators';
import CalendlyEmbed from '@/components/CalendlyEmbed';
import { Button } from '@/components/ui/button';
import {
  CheckCircle2,
  DollarSign,
  Clock,
  Users,
  Quote,
  ArrowRight,
} from 'lucide-react';

// ─── Section 1: Hero (Dark bg-kapes-charcoal) ──────────────────────────────
const HeroSection = () => (
  <section className="relative py-24 md:py-32 bg-kapes-charcoal text-white">
    <div className="container-wide text-center">
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
          FREE CHECKLIST
        </motion.p>

        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-academy leading-[0.88] tracking-tight mb-8">
          7 Questions Your Trip Provider{' '}
          <span className="text-kapes-orange">Hopes You Never Ask</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/85 mb-12 max-w-3xl mx-auto leading-relaxed">
          Most schools pick a trip provider without asking the questions that
          matter. This checklist changes that.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button className="btn-action text-lg px-10 py-6" asChild>
            <a href="#get-checklist">
              Get the Free Checklist
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 text-white/60 text-sm"
        >
          <span className="flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-kapes-orange" />
            Used by international schools across the Middle East, Asia &amp; Africa
          </span>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

// ─── Section 2: Problem Section (bg-white) ──────────────────────────────────
const problemCards = [
  {
    icon: DollarSign,
    question: 'Where does the money go?',
    text: '70% of revenue leaves communities. Most providers won\u2019t share a budget.',
  },
  {
    icon: Clock,
    question: 'What happens when students leave?',
    text: 'If the project stops, it was built for visitors, not communities.',
  },
  {
    icon: Users,
    question: 'Who actually runs the program?',
    text: 'If the answer is \u201cinternational staff,\u201d the community isn\u2019t leading.',
  },
];

const ProblemSection = () => (
  <section className="py-24 md:py-32 bg-white">
    <div className="container-wide">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-academy text-kapes-charcoal leading-tight">
            The trip industry doesn&rsquo;t reward{' '}
            <span className="text-kapes-orange">transparency</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problemCards.map((card, index) => (
            <motion.div
              key={card.question}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="bg-kapes-cream rounded-2xl p-8 text-center"
            >
              <div className="w-14 h-14 bg-kapes-charcoal rounded-xl flex items-center justify-center mx-auto mb-5">
                <card.icon className="w-7 h-7 text-kapes-orange" />
              </div>
              <h3 className="text-xl font-bold text-kapes-charcoal mb-3">
                {card.question}
              </h3>
              <p className="text-dragon-gray">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// ─── Section 3: Preview Section (bg-kapes-cream) ────────────────────────────
const previewQuestions = [
  {
    number: 1,
    question: 'Can you share a line-item budget for this trip?',
    why: 'If they can\u2019t tell you where the money goes, that\u2019s your first red flag.',
  },
  {
    number: 2,
    question: 'What happens to the project when our students leave?',
    why: 'Programs built for communities continue. Projects built for visitors don\u2019t.',
  },
  {
    number: 3,
    question: 'Are local community members paid and in leadership roles?',
    why: 'If locals aren\u2019t leading, it\u2019s not a partnership \u2014 it\u2019s a performance.',
  },
  {
    number: 4,
    question: 'Can we speak to a community leader, not just a past client?',
    why: 'References from other schools don\u2019t tell you how the community feels.',
  },
];

const PreviewSection = () => (
  <section className="py-24 md:py-32 bg-kapes-cream">
    <div className="container-wide">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-kapes-orange font-semibold text-sm uppercase tracking-wider">
            Sneak peek
          </span>
          <h2 className="text-4xl md:text-5xl font-academy text-kapes-charcoal mt-3 mb-4">
            What&rsquo;s inside
          </h2>
        </motion.div>

        <div className="space-y-4">
          {previewQuestions.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-xl p-6 md:p-8 flex items-start gap-5"
            >
              <span className="text-4xl font-gothic text-kapes-orange/30 leading-none shrink-0">
                {String(item.number).padStart(2, '0')}
              </span>
              <div>
                <h3 className="text-lg font-bold text-kapes-charcoal mb-1">
                  {item.question}
                </h3>
                <p className="text-dragon-gray text-sm">{item.why}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-8 text-lg font-semibold text-kapes-orange"
        >
          ...plus 3 more questions most schools never think to ask
        </motion.p>
      </div>
    </div>
  </section>
);

// ─── Section 4: Form Capture Section (bg-white) ─────────────────────────────
const FormCaptureSection = () => (
  <section id="get-checklist" className="py-24 md:py-32 bg-white">
    <div className="container-wide">
      <div className="max-w-5xl mx-auto">
        <GatedDownloadForm
          leadMagnetType="transparency-checklist"
          title="Get Your Free Checklist"
          description="Enter your details and download the checklist instantly."
          buttonText="Download the Checklist"
          onDownload={() => generateTransparencyChecklist()}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-kapes-orange font-semibold text-sm uppercase tracking-wider">
              What you get
            </span>
            <h2 className="text-3xl md:text-4xl font-academy text-kapes-charcoal mt-3 mb-8">
              7 questions.{' '}
              <span className="text-kapes-orange">Zero guesswork.</span>
            </h2>

            <ul className="space-y-4">
              {[
                'Takes 5 minutes to use in any vendor meeting',
                'Instantly reveals red flags in provider responses',
                'Works for any destination, not just Kenya',
                'Includes \u201cgood answer\u201d and \u201cred flag\u201d benchmarks for each question',
                'Shareable with colleagues, parents, and board members',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-kapes-orange mt-0.5 shrink-0" />
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

// ─── Section 5: Social Proof (bg-dragon-dark) ───────────────────────────────
const SocialProofSection = () => (
  <section className="py-24 md:py-32 bg-dragon-dark text-white">
    <div className="container-wide">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 rounded-3xl p-8 md:p-12 relative"
        >
          <Quote className="w-12 h-12 text-kapes-orange/20 mb-6" />
          <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-8 font-light italic">
            "Experiential learning helps bring to life the things we can only do
            in theory. Seeing these enterprises firsthand, understanding how they
            contribute to a better world — the children can only do that
            firsthand, and it will change them as much as it's changed me."
          </blockquote>
          <div>
            <div className="font-bold text-lg text-white">Brett Girven</div>
            <div className="text-white/60">
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
          { number: '15+', label: 'Partner schools' },
          { number: '100%', label: 'Kenyan-led' },
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
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-academy text-kapes-charcoal leading-tight mb-6">
          Want to see how we answer{' '}
          <span className="text-kapes-orange">all 7 questions?</span>
        </h2>
        <p className="text-xl text-dragon-gray mb-10 max-w-2xl mx-auto">
          We built Kapes to pass every question on this checklist. Talk to our
          team or take our free assessment to see for yourself.
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

        <p className="text-dragon-gray/60 text-sm mt-6">
          No commitment. No sales pitch. Just a conversation about what's
          possible.
        </p>
      </motion.div>
    </div>
  </section>
);

// ─── Page Assembly ──────────────────────────────────────────────────────────
const TransparencyChecklist = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="7 Questions to Ask Your Trip Provider | Free Checklist | Kapes Adventures"
        description="Download the free checklist: 7 questions your trip provider hopes you never ask. Instantly reveal red flags before you book. Used by international schools across the Middle East, Asia & Africa."
        keywords="trip provider checklist, school trip transparency, ethical travel questions, voluntourism red flags, Kapes Adventures"
        ogUrl="https://missionkapes.com/resources/transparency-checklist"
        canonicalUrl="https://missionkapes.com/resources/transparency-checklist"
      />
      <Header />

      <main>
        <HeroSection />
        <ProblemSection />
        <PreviewSection />
        <FormCaptureSection />
        <SocialProofSection />
        <SecondaryCTASection />
      </main>

      <Footer />
    </div>
  );
};

export default TransparencyChecklist;
