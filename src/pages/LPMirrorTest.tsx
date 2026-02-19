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
  ClipboardCheck,
  GraduationCap,
  Users,
  BarChart3,
  Scale,
  ChevronDown,
  Clock,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

// ─── Animation helpers ──────────────────────────────────────────────────────
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.6 },
};

const staggerChild = (index: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { delay: index * 0.1, duration: 0.5 },
});

// ─── Scorecard CTA Button (reused throughout) ──────────────────────────────
const ScorecardCTA = ({ size = 'lg', className = '' }: { size?: 'lg' | 'default'; className?: string }) => (
  <Button className={`btn-action text-lg px-10 py-6 ${className}`} size={size} asChild>
    <Link to="/scorecard">
      Take the Impact Scorecard
      <ArrowRight className="ml-2 w-5 h-5" />
    </Link>
  </Button>
);

// ─── Section 1: Hero (Hook) ─────────────────────────────────────────────────
const HeroSection = () => (
  <section className="relative bg-kapes-charcoal text-white py-24 md:py-36">
    <div className="absolute inset-0 bg-gradient-to-b from-kapes-charcoal via-kapes-charcoal to-dragon-dark opacity-80" />

    <div className="container-wide relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 mb-8"
        >
          <Clock className="w-4 h-4 text-kapes-orange" />
          <span className="text-sm font-semibold text-white/90">Free Assessment &bull; 5 Minutes &bull; 20 Questions</span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-academy leading-[0.9] tracking-tight mb-8">
          Are your school trips making
          <br />
          <span className="text-kapes-orange">a real difference?</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-4">
          Most trips create photos and memories. But do they create lasting change?
          Find out in 5 minutes.
        </p>

        <p className="text-white/50 mb-10">
          Free. 5 minutes. No sales pitch. Honest results.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <ScorecardCTA />
        </motion.div>

        <p className="text-white/40 text-sm mt-6">
          20 questions across 5 dimensions. Your results are delivered instantly.
        </p>
      </motion.div>
    </div>
  </section>
);

// ─── Section 2: The Question (Challenge) ────────────────────────────────────
const QuestionSection = () => (
  <section className="py-20 md:py-28 bg-white">
    <div className="container-wide">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-academy text-kapes-charcoal leading-tight mb-8">
          When was the last time you measured what your school trip{' '}
          <span className="text-kapes-orange">actually accomplished</span> &mdash;
          for the community, not just your students?
        </h2>

        <p className="text-lg md:text-xl text-dragon-gray leading-relaxed mb-6">
          It is a question most schools have never asked. Not because they do not care &mdash;
          but because no one has given them the tools to answer it honestly.
        </p>

        <p className="text-lg text-dragon-gray leading-relaxed">
          The Impact Scorecard is a free self-assessment that scores your current school
          trip programme across the 5 dimensions that separate meaningful travel from
          educational tourism.
        </p>
      </motion.div>
    </div>
  </section>
);

// ─── Section 3: The 5 Dimensions ────────────────────────────────────────────
const dimensions = [
  {
    icon: ClipboardCheck,
    title: 'Trip Structure & Design',
    description:
      'Is your trip built around community needs or student itineraries? We assess whether the programme design puts lasting outcomes first.',
    color: 'text-kapes-orange',
    bg: 'bg-kapes-orange/10',
  },
  {
    icon: GraduationCap,
    title: 'Student Learning Outcomes',
    description:
      'Are students gaining real skills and perspective shifts &mdash; or just checking a box? We measure depth of engagement, not hours logged.',
    color: 'text-dragon',
    bg: 'bg-dragon/10',
  },
  {
    icon: Users,
    title: 'Community Relationships',
    description:
      'Are local people partners or props? This dimension evaluates whether communities have genuine agency in how your trip operates.',
    color: 'text-impact-purple',
    bg: 'bg-impact-purple/10',
  },
  {
    icon: BarChart3,
    title: 'Measurable Impact',
    description:
      'Can you point to specific, tangible outcomes that persist after students leave? We look at what the data actually says.',
    color: 'text-impact-blue',
    bg: 'bg-impact-blue/10',
  },
  {
    icon: Scale,
    title: 'Ethics & Accountability',
    description:
      'Where does the money go? Who benefits most? This dimension holds the mirror up to power dynamics and financial transparency.',
    color: 'text-impact-rose',
    bg: 'bg-impact-rose/10',
  },
];

const DimensionsSection = () => (
  <section className="py-20 md:py-28 bg-kapes-cream">
    <div className="container-wide">
      <motion.div {...fadeUp} className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-academy text-kapes-charcoal mb-4">
          5 dimensions. <span className="text-kapes-orange">20 questions.</span> One honest score.
        </h2>
        <p className="text-lg text-dragon-gray max-w-2xl mx-auto">
          The scorecard evaluates your current school trip programme across the areas
          that matter most for genuine social impact.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {dimensions.map((dim, index) => {
          const Icon = dim.icon;
          return (
            <motion.div
              key={dim.title}
              {...staggerChild(index)}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className={`w-14 h-14 ${dim.bg} rounded-xl flex items-center justify-center mb-5`}>
                <Icon className={`w-7 h-7 ${dim.color}`} />
              </div>
              <h3 className="text-xl font-bold text-kapes-charcoal mb-3">{dim.title}</h3>
              <p
                className="text-dragon-gray leading-relaxed text-sm"
                dangerouslySetInnerHTML={{ __html: dim.description }}
              />
            </motion.div>
          );
        })}

        {/* CTA card */}
        <motion.div
          {...staggerChild(5)}
          className="bg-kapes-charcoal rounded-2xl p-8 flex flex-col items-center justify-center text-center text-white"
        >
          <Sparkles className="w-10 h-10 text-kapes-orange mb-4" />
          <h3 className="text-xl font-bold mb-3">See where you stand</h3>
          <p className="text-white/70 text-sm mb-6">
            Takes 5 minutes. Results are instant and actionable.
          </p>
          <ScorecardCTA className="text-base px-8 py-4" />
        </motion.div>
      </div>
    </div>
  </section>
);

// ─── Section 4: How It Works ────────────────────────────────────────────────
const steps = [
  {
    number: '01',
    title: 'Take the quiz',
    description: '20 multiple-choice questions. No trick answers. Just honest self-reflection about your current programme.',
    time: '5 minutes',
  },
  {
    number: '02',
    title: 'Get your score',
    description: 'Receive an instant score across all 5 dimensions with a clear breakdown of where you are strong and where there are gaps.',
    time: 'Instant results',
  },
  {
    number: '03',
    title: 'See where you can improve',
    description: 'Actionable insights for each dimension. No sales pitch &mdash; just honest next steps to make your trips more meaningful.',
    time: 'Personalised report',
  },
];

const HowItWorksSection = () => (
  <section className="py-20 md:py-28 bg-white">
    <div className="container-wide">
      <motion.div {...fadeUp} className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-academy text-kapes-charcoal mb-4">
          How it works
        </h2>
        <p className="text-lg text-dragon-gray">
          Three steps. Five minutes. Complete clarity.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <motion.div key={step.number} {...staggerChild(index)} className="text-center md:text-left">
            <span className="text-5xl font-gothic font-bold text-kapes-orange/20 block mb-2">
              {step.number}
            </span>
            <h3 className="text-xl font-bold text-kapes-charcoal mb-3">{step.title}</h3>
            <p
              className="text-dragon-gray leading-relaxed text-sm mb-2"
              dangerouslySetInnerHTML={{ __html: step.description }}
            />
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-kapes-orange">
              <Clock className="w-3 h-3" />
              {step.time}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.div {...fadeUp} className="text-center mt-14">
        <ScorecardCTA />
      </motion.div>
    </div>
  </section>
);

// ─── Section 5: What You'll Learn ───────────────────────────────────────────
const insights = [
  'Whether your trips are truly community-led or school-driven',
  'If your programmes would continue running without you',
  'Where your money actually goes once it reaches the ground',
  'How students are learning vs. how they think they are learning',
  'Whether your community partners see you as allies or inconveniences',
  'The gap between your trip brochure and your trip reality',
];

const InsightsSection = () => (
  <section className="py-20 md:py-28 bg-kapes-charcoal text-white">
    <div className="container-wide">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <motion.div {...fadeUp}>
          <h2 className="text-3xl md:text-4xl font-academy leading-tight mb-6">
            What you will <span className="text-kapes-orange">actually learn</span>
          </h2>
          <p className="text-white/70 leading-relaxed mb-8">
            The scorecard does not tell you what you want to hear. It tells you what you
            need to know. Here is what the results reveal:
          </p>

          <ScorecardCTA />

          <p className="text-white/40 text-sm mt-4">
            Free. No email required to start. Results delivered instantly.
          </p>
        </motion.div>

        <motion.div {...fadeUp} className="space-y-4">
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              {...staggerChild(index)}
              className="flex items-start gap-3 bg-white/5 rounded-xl px-5 py-4"
            >
              <CheckCircle2 className="w-5 h-5 text-kapes-orange shrink-0 mt-0.5" />
              <p className="text-white/85 text-sm leading-relaxed">{insight}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

// ─── Section 6: Credibility (Why Kapes Built This) ──────────────────────────
const CredibilitySection = () => (
  <section className="py-20 md:py-28 bg-white">
    <div className="container-wide">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <span className="text-kapes-orange font-semibold text-sm uppercase tracking-wider">
          Why we built this
        </span>
        <h2 className="text-3xl md:text-4xl font-academy text-kapes-charcoal mt-3 mb-6">
          We run year-round programmes in Kenya. We have seen what works{' '}
          <span className="text-kapes-orange">&mdash; and what does not.</span>
        </h2>
        <p className="text-lg text-dragon-gray leading-relaxed mb-4">
          Kapes Adventures operates feeding programmes, water access initiatives, and
          conservation projects across Kenya 365 days a year. We built the Impact
          Scorecard because we believe every school deserves the tools to evaluate
          whether their trips are creating real change.
        </p>
        <p className="text-dragon-gray leading-relaxed">
          This is not about proving we are better. It is about giving you the mirror to
          decide for yourself. The best schools are already asking these questions. The
          question is whether you are asking them too.
        </p>
      </motion.div>
    </div>
  </section>
);

// ─── Section 7: FAQ ─────────────────────────────────────────────────────────
const faqItems = [
  {
    q: 'Is the scorecard really free?',
    a: 'Yes, completely free. No credit card, no hidden fees. We built this as a resource for schools who want honest answers about their trip programmes.',
  },
  {
    q: 'How long does it take?',
    a: 'About 5 minutes. There are 20 multiple-choice questions across 5 dimensions. Most people finish in under 5 minutes.',
  },
  {
    q: 'What do you do with my data?',
    a: 'Your responses are used solely to generate your score and personalised recommendations. We do not sell your data or share it with third parties. You can read our full privacy policy for details.',
  },
  {
    q: 'Who should take the scorecard?',
    a: 'Any educator, head of year, or school leader involved in planning or approving school trips. It is especially useful for trip coordinators, heads of global citizenship, and senior leadership teams evaluating their programmes.',
  },
  {
    q: 'Will this try to sell me a Kapes trip?',
    a: 'No. The scorecard scores your current trips — it does not pitch ours. Your results include practical recommendations you can implement regardless of who operates your trips. If you want to learn about our programmes afterward, that option is there, but there is no sales pitch baked into the assessment.',
  },
  {
    q: 'What if we score poorly?',
    a: 'Most schools land in "Room to Grow" territory — and that is perfectly normal. The scorecard is designed to be challenging because the standard for genuine social impact is high. A lower score is not a failure; it is a starting point for improvement.',
  },
];

const FAQSection = () => (
  <section className="py-20 md:py-28 bg-kapes-cream">
    <div className="container-wide">
      <motion.div {...fadeUp} className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-academy text-kapes-charcoal mb-4">
          Questions about the scorecard
        </h2>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-5">
        {faqItems.map((item, index) => (
          <motion.details
            key={item.q}
            {...staggerChild(index)}
            className="group bg-white rounded-xl p-6 cursor-pointer shadow-sm"
          >
            <summary className="flex items-center justify-between font-bold text-lg text-kapes-charcoal list-none">
              {item.q}
              <ChevronDown className="w-5 h-5 text-dragon-gray group-open:rotate-180 transition-transform shrink-0 ml-4" />
            </summary>
            <p className="mt-4 text-dragon-gray leading-relaxed">{item.a}</p>
          </motion.details>
        ))}
      </div>
    </div>
  </section>
);

// ─── Section 8: Final CTA ───────────────────────────────────────────────────
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
          The best schools are already
          <br />
          <span className="text-kapes-orange">asking these questions.</span>
        </h2>
        <p className="text-xl text-white/80 mb-4">
          The question is whether you are asking them too.
        </p>
        <p className="text-white/50 mb-10">
          5 minutes. 20 questions. Complete honesty about your school trips.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <ScorecardCTA />
          <CalendlyEmbed
            url="https://calendly.com/kapesuniforms/kapes-uniforms-consultation-clone"
            text="Talk to Our Kenya Team"
            className="btn-action text-lg px-10 py-6"
          />
        </div>

        <p className="text-white/40 text-sm mt-6">
          Free. No sales pitch. Honest results delivered instantly.
        </p>
      </motion.div>
    </div>
  </section>
);

// ─── Page Assembly ──────────────────────────────────────────────────────────
const LPMirrorTest = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Impact Scorecard: Are Your School Trips Making a Real Difference? | Kapes Adventures"
        description="Free 5-minute self-assessment that scores your school trip programme across 5 dimensions of genuine social impact. 20 questions. Honest results. No sales pitch."
      />
      <Header />

      <main>
        <HeroSection />
        <QuestionSection />
        <DimensionsSection />
        <HowItWorksSection />
        <InsightsSection />
        <CredibilitySection />
        <FAQSection />
        <FinalCTASection />
      </main>

      <Footer />
    </div>
  );
};

export default LPMirrorTest;
