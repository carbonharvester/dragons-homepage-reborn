import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import CalendlyEmbed from '@/components/CalendlyEmbed';
import GatedDownloadForm from '@/components/lead-magnets/GatedDownloadForm';
import { generateImpactReport } from '@/utils/leadMagnetPdfGenerators';
import { Button } from '@/components/ui/button';
import {
  Utensils,
  Calendar,
  Users,
  Sprout,
  FileText,
  Leaf,
  Droplets,
  DollarSign,
  GraduationCap,
  Target,
  CheckCircle2,
} from 'lucide-react';

// ─── Section 1: Hero (Dark Green) ───────────────────────────────────────────
const HeroSection = () => (
  <section className="relative py-24 md:py-32 lg:py-40 bg-[#1A6D50]">
    <div className="container-wide relative z-10 text-white text-center">
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
          2025 Annual Report
        </motion.p>

        <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-academy leading-[0.88] tracking-tight mb-8">
          Where Your Partnership Goes
        </h1>

        <p className="text-xl md:text-2xl text-white/85 mb-12 max-w-3xl mx-auto leading-relaxed">
          Every meal served. Every garden planted. Every woman empowered.
          Here's what happened in Kenya this year.
        </p>
      </motion.div>
    </div>
  </section>
);

// ─── Section 2: Highlight Stats (Ungated Preview) ───────────────────────────
const StatsSection = () => (
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
          Impact at a glance
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-academy text-kapes-charcoal mt-3 mb-6 leading-tight">
          The year at a glance
        </h2>
      </motion.div>

      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          { stat: '200+', label: 'children fed daily', Icon: Utensils },
          { stat: '365', label: 'days our programs ran', Icon: Calendar },
          { stat: '50+', label: 'women in water cooperatives', Icon: Users },
          { stat: '8', label: 'school gardens established', Icon: Sprout },
        ].map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
            className="bg-kapes-cream rounded-xl p-8 text-center"
          >
            <div className="w-12 h-12 bg-[#1A6D50] rounded-xl flex items-center justify-center mx-auto mb-4">
              <item.Icon className="w-6 h-6 text-white" />
            </div>
            <span className="block text-4xl md:text-5xl font-gothic text-kapes-orange mb-2">
              {item.stat}
            </span>
            <span className="text-sm text-dragon-gray">{item.label}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="max-w-3xl mx-auto bg-kapes-charcoal text-white rounded-2xl p-8 md:p-10 text-center"
      >
        <p className="text-xl md:text-2xl font-academy leading-relaxed">
          The most important number:{' '}
          <span className="text-kapes-orange">365</span>. Our programs ran
          every single day. Student visits happened during scheduled windows.
          The work never stopped.
        </p>
      </motion.div>
    </div>
  </section>
);

// ─── Section 3: Report Preview ──────────────────────────────────────────────
const reportSections = [
  { icon: FileText, title: 'Executive Summary' },
  { icon: Leaf, title: 'Seeds2Education Program Update' },
  { icon: Droplets, title: 'Water Empowering Women Update' },
  { icon: DollarSign, title: 'Financial Transparency', highlight: '72% stays in Kenya' },
  { icon: GraduationCap, title: 'Partner School Highlights' },
  { icon: Target, title: '2026 Goals & Accountability' },
];

const ReportPreviewSection = () => (
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
          Full report contents
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-academy text-kapes-charcoal mt-3 mb-6 leading-tight">
          What's in the report
        </h2>
      </motion.div>

      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {reportSections.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 bg-[#1A6D50] rounded-xl flex items-center justify-center mb-4">
              <item.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-kapes-charcoal mb-1">
              {item.title}
            </h3>
            {item.highlight && (
              <span className="inline-block mt-1 text-sm font-semibold text-kapes-orange bg-kapes-orange/10 px-3 py-1 rounded-full">
                {item.highlight}
              </span>
            )}
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-center text-lg text-dragon-gray max-w-2xl mx-auto"
      >
        Full report includes data, financial breakdowns, and photos from the
        ground.
      </motion.p>
    </div>
  </section>
);

// ─── Section 4: With and Without Students ───────────────────────────────────
const ComparisonSection = () => (
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
          Year-round impact
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-academy text-kapes-charcoal mt-3 mb-6 leading-tight">
          What happens when students aren't there?
        </h2>
      </motion.div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-kapes-cream rounded-2xl p-8 md:p-10 border-2 border-[#1A6D50]/20"
        >
          <h3 className="text-2xl font-academy text-[#1A6D50] mb-6">
            During student visits
          </h3>
          <ul className="space-y-4">
            {[
              'Students join existing programs',
              'Work alongside local teams',
              'Learn from community experts',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#1A6D50] mt-0.5 shrink-0" />
                <span className="text-dragon-gray">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-kapes-cream rounded-2xl p-8 md:p-10 border-2 border-kapes-orange/20"
        >
          <h3 className="text-2xl font-academy text-kapes-orange mb-6">
            Rest of the year
          </h3>
          <ul className="space-y-4">
            {[
              'Gardens keep feeding',
              'Cooperatives keep operating',
              'Staff stay employed',
              'New schools added',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-kapes-orange mt-0.5 shrink-0" />
                <span className="text-dragon-gray">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="max-w-3xl mx-auto bg-kapes-charcoal text-white rounded-2xl p-8 md:p-10 text-center"
      >
        <p className="text-xl md:text-2xl font-academy leading-relaxed">
          Student visits are windows into continuous work.{' '}
          <span className="text-kapes-orange">
            They amplify the impact — they don't define it.
          </span>
        </p>
      </motion.div>
    </div>
  </section>
);

// ─── Section 5: Form Capture ────────────────────────────────────────────────
const FormSection = () => (
  <section className="py-24 md:py-32 bg-kapes-charcoal">
    <div className="container-wide">
      <GatedDownloadForm
        leadMagnetType="impact-report"
        title="Download the Report"
        description="The full 2025 Community Impact Report. Instant PDF download."
        buttonText="Download Impact Report"
        onDownload={() => generateImpactReport()}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-academy text-white mb-8 leading-tight">
            Get the full 2025 report
          </h2>
          <ul className="space-y-4">
            {[
              'Complete program data and outcomes',
              'Financial transparency breakdown',
              'Partner school testimonials',
              'Photos from the ground',
              '2026 goals and accountability commitments',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#1A6D50] mt-0.5 shrink-0" />
                <span className="text-white/90 text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </GatedDownloadForm>
    </div>
  </section>
);

// ─── Section 6: Why + CTA ───────────────────────────────────────────────────
const WhyCTASection = () => (
  <section className="py-24 md:py-32 bg-kapes-cream">
    <div className="container-wide text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <p className="text-xl md:text-2xl text-dragon-gray leading-relaxed mb-10">
          We publish this report because we believe trip providers should show
          their work. This is our accountability to you, to the communities we
          serve, and to the students who join our programs.
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
const ImpactReport = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="2025 Annual Community Impact Report | Kapes Adventures"
        description="Every meal served. Every garden planted. Every woman empowered. Download the full 2025 Community Impact Report and see where your partnership goes."
        keywords="impact report, community impact, Kenya programs, Kapes Adventures, annual report 2025, Seeds2Education, Water Empowering Women"
        ogUrl="https://kapesadventures.com/resources/impact-report"
        canonicalUrl="https://kapesadventures.com/resources/impact-report"
      />
      <Header />

      <main>
        <HeroSection />
        <StatsSection />
        <ReportPreviewSection />
        <ComparisonSection />
        <FormSection />
        <WhyCTASection />
      </main>

      <Footer />
    </div>
  );
};

export default ImpactReport;
