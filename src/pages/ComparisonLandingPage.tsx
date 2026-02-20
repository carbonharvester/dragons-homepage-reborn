import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import NotFound from '@/pages/NotFound';
import CalendlyEmbed from '@/components/CalendlyEmbed';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { getComparisonBySlug } from '@/services/comparisonPageService';

const ComparisonLandingPage = () => {
  const location = useLocation();
  const slug = location.pathname.replace(/^\//, '');
  const data = getComparisonBySlug(slug);

  if (!data) {
    return <NotFound />;
  }

  // Build FAQ JSON-LD
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  // Helper to render H1 with highlighted word
  const renderH1 = () => {
    const { h1, h1Highlight } = data;
    const idx = h1.toLowerCase().indexOf(h1Highlight.toLowerCase());
    if (idx === -1) {
      return <>{h1}</>;
    }
    const before = h1.slice(0, idx);
    const match = h1.slice(idx, idx + h1Highlight.length);
    const after = h1.slice(idx + h1Highlight.length);
    return (
      <>
        {before}
        <span className="text-kapes-orange">{match}</span>
        {after}
      </>
    );
  };

  // Helper to render content as paragraphs split on double newlines
  const renderContent = (content: string) => {
    const paragraphs = content.split('\n\n');
    return paragraphs.map((p, i) => {
      // Check if paragraph has line breaks for list-like content
      const lines = p.split('\n');
      if (lines.length > 1) {
        return (
          <div key={i} className="mb-4">
            {lines.map((line, j) => (
              <p key={j} className="text-kapes-charcoal/80 leading-relaxed mb-1">
                {line}
              </p>
            ))}
          </div>
        );
      }
      return (
        <p key={i} className="text-kapes-charcoal/80 leading-relaxed mb-4">
          {p}
        </p>
      );
    });
  };

  const isCalendly = (url: string) => url === 'calendly';

  const renderCTAButton = (
    cta: { label: string; url: string },
    variant: 'primary' | 'secondary'
  ) => {
    if (isCalendly(cta.url)) {
      return (
        <CalendlyEmbed
          text={cta.label}
          className={
            variant === 'primary'
              ? 'btn-action text-lg h-14 px-10'
              : 'btn-ghost text-lg h-14 px-10'
          }
        />
      );
    }
    return (
      <Button
        className={
          variant === 'primary'
            ? 'btn-action text-lg h-14 px-10'
            : 'btn-ghost text-lg h-14 px-10'
        }
        asChild
      >
        <Link to={cta.url}>
          {cta.label}
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </Button>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={data.pageTitle}
        description={data.metaDescription}
        canonicalUrl={`https://kapesadventures.com/${data.slug}`}
        ogUrl={`https://kapesadventures.com/${data.slug}`}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>
      <Header />

      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 bg-kapes-charcoal overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,107,53,0.3),_transparent_70%)]" />
          </div>
          <div className="container-wide relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <span className="text-kapes-orange font-semibold text-sm uppercase tracking-wider">
                {data.eyebrow}
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-academy text-white mt-3 mb-6">
                {renderH1()}
              </h1>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                {data.heroSubtitle}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Comparison Table (if first section references it) */}
        {data.comparisonTable && (
          <section className="py-24 md:py-32 bg-white">
            <div className="container-wide max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-kapes-cream">
                        {data.comparisonTable.headers.map((header, i) => (
                          <th
                            key={i}
                            className="px-6 py-4 text-sm font-semibold text-kapes-charcoal uppercase tracking-wider"
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {data.comparisonTable.rows.map((row, i) => (
                        <tr
                          key={i}
                          className={
                            i % 2 === 0 ? 'bg-white' : 'bg-kapes-cream/30'
                          }
                        >
                          {row.cells.map((cell, j) => (
                            <td
                              key={j}
                              className={`px-6 py-4 text-sm ${
                                j === 0
                                  ? 'font-medium text-kapes-charcoal'
                                  : 'text-kapes-charcoal/70'
                              }`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Content Sections */}
        {data.sections.map((section, index) => {
          const isAlt = data.comparisonTable
            ? index % 2 === 0
            : index % 2 === 1;
          const bgClass = isAlt ? 'bg-kapes-cream' : 'bg-white';

          return (
            <section key={index} className={`py-24 md:py-32 ${bgClass}`}>
              <div className="container-wide max-w-4xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <h2 className="text-3xl md:text-4xl font-academy text-kapes-charcoal mb-8">
                    {section.title}
                  </h2>
                  {renderContent(section.content)}
                  {section.highlight && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="mt-8 pl-6 border-l-4 border-kapes-orange bg-kapes-orange/5 rounded-r-xl py-4 pr-6"
                    >
                      <p className="text-kapes-charcoal font-medium text-lg italic">
                        {section.highlight}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </section>
          );
        })}

        {/* Checklist Section (if present) */}
        {data.checklist && (
          <section className="py-24 md:py-32 bg-kapes-cream">
            <div className="container-wide max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-academy text-kapes-charcoal mb-10 text-center">
                  {data.checklist.title}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Green Flags */}
                  <div className="bg-white rounded-2xl p-6 md:p-8 border-2 border-impact-green">
                    <h3 className="font-semibold text-lg mb-6 text-impact-green flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Green Flags
                    </h3>
                    <div className="space-y-4">
                      {data.checklist.items.map((item, i) => (
                        <div key={i} className="flex gap-3">
                          <span className="text-impact-green mt-1 shrink-0">
                            ✓
                          </span>
                          <div>
                            <p className="font-medium text-kapes-charcoal text-sm">
                              {item.text}
                            </p>
                            <p className="text-impact-green text-sm">
                              {item.good}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Red Flags */}
                  <div className="bg-white rounded-2xl p-6 md:p-8 border-2 border-impact-rose">
                    <h3 className="font-semibold text-lg mb-6 text-impact-rose flex items-center gap-2">
                      <XCircle className="w-5 h-5" />
                      Red Flags
                    </h3>
                    <div className="space-y-4">
                      {data.checklist.items.map((item, i) => (
                        <div key={i} className="flex gap-3">
                          <span className="text-impact-rose mt-1 shrink-0">
                            ✗
                          </span>
                          <div>
                            <p className="font-medium text-kapes-charcoal text-sm">
                              {item.text}
                            </p>
                            <p className="text-impact-rose text-sm">
                              {item.bad}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Scorecard CTA Section */}
        <section className="py-24 md:py-32 bg-kapes-charcoal">
          <div className="container-wide max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-academy text-white mb-4">
                {data.ctaHeadline}
              </h2>
              <p className="text-white/80 text-lg mb-10 leading-relaxed">
                {data.ctaSubtext}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {renderCTAButton(data.primaryCTA, 'primary')}
                {renderCTAButton(data.secondaryCTA, 'secondary')}
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container-wide max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-academy text-kapes-charcoal mb-10 text-center">
                Frequently Asked Questions
              </h2>
              <Accordion
                type="single"
                collapsible
                className="w-full space-y-4"
              >
                {data.faqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`faq-${i}`}
                    className="border border-gray-200 rounded-xl px-6 bg-white shadow-sm"
                  >
                    <AccordionTrigger className="text-left font-medium text-kapes-charcoal hover:text-kapes-orange transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-kapes-charcoal/70 pb-4 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 md:py-32 bg-kapes-charcoal">
          <div className="container-wide max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-academy text-white mb-4">
                Ready to take the next step?
              </h2>
              <p className="text-white/80 text-lg mb-10 leading-relaxed">
                Whether you're just starting to research or ready to book,
                we're here to help you plan a school trip that creates real
                impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CalendlyEmbed
                  text="Schedule a Consultation"
                  className="btn-action text-lg h-14 px-10"
                />
                <Button className="btn-ghost text-lg h-14 px-10" asChild>
                  <Link to="/scorecard">
                    Take the Impact Scorecard
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
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

export default ComparisonLandingPage;
