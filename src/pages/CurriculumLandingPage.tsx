import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import NotFound from "@/pages/NotFound";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import { getCurriculumBySlug } from "@/services/curriculumPageService";
import type { CurriculumPageData } from "@/data/curriculumPages";
import {
  TreePine,
  Leaf,
  Users,
  Dna,
  Factory,
  ClipboardList,
  Palette,
  Hammer,
  Heart,
  BookOpen,
  Target,
  Globe,
  Goal,
  Network,
  Shield,
  HandHelping,
  Brain,
  Thermometer,
  Droplets,
  Sprout,
  AlertTriangle,
  Recycle,
  Scale,
  Landmark,
  Building2,
  Ship,
  Mic,
  Flower2,
  PenLine,
  ShieldCheck,
  Handshake,
  Crown,
  GraduationCap,
  Briefcase,
  FileText,
  Clock,
  MapPin,
  ArrowRight,
  CheckCircle,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  TreePine,
  Leaf,
  Users,
  Dna,
  Factory,
  ClipboardList,
  Palette,
  Hammer,
  Heart,
  BookOpen,
  Target,
  Globe,
  Goal,
  Network,
  Shield,
  HandHelping,
  Brain,
  Thermometer,
  Droplets,
  Sprout,
  AlertTriangle,
  Recycle,
  Scale,
  Landmark,
  Building2,
  Ship,
  Mic,
  Flower2,
  PenLine,
  ShieldCheck,
  Handshake,
  Crown,
  GraduationCap,
  Briefcase,
  FileText,
};

const statIconMap: Record<string, LucideIcon> = {
  Duration: Clock,
  Level: GraduationCap,
  Boards: BookOpen,
  Location: MapPin,
  Coverage: BookOpen,
  Framework: BookOpen,
  Includes: BookOpen,
  Ages: Users,
  Approach: BookOpen,
  Grades: GraduationCap,
  Integration: GraduationCap,
};

function highlightText(text: string, highlight: string) {
  if (!highlight) return text;
  const index = text.toLowerCase().indexOf(highlight.toLowerCase());
  if (index === -1) return text;
  const before = text.slice(0, index);
  const match = text.slice(index, index + highlight.length);
  const after = text.slice(index + highlight.length);
  return (
    <>
      {before}
      <span className="text-kapes-orange">{match}</span>
      {after}
    </>
  );
}

const CurriculumLandingPage = () => {
  const location = useLocation();
  const slug = location.pathname.replace(/^\//, "");
  const data = getCurriculumBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!data) {
    return <NotFound />;
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={data.pageTitle}
        description={data.metaDescription}
        keywords={`${data.subject} school trips Kenya, ${data.slug.replace(/-/g, " ")}, ethical school trips Kenya, ${data.targetAudience}`}
        ogUrl={`https://kapesadventures.com/${data.slug}`}
        canonicalUrl={`https://kapesadventures.com/${data.slug}`}
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <Header />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <HeroSection data={data} />

        {/* Curriculum Topics Grid */}
        <CurriculumTopicsSection data={data} />

        {/* Three Phases Section */}
        <ThreePhasesSection data={data} />

        {/* Exam Board Alignment (if applicable) */}
        {data.examBoards && data.examBoards.length > 0 && (
          <ExamBoardSection data={data} />
        )}

        {/* Scorecard CTA */}
        <ScorecardCTASection data={data} />

        {/* FAQ Section */}
        <FAQSection data={data} />

        {/* Final CTA */}
        <FinalCTASection data={data} />
      </main>
      <Footer />
    </div>
  );
};

function HeroSection({ data }: { data: CurriculumPageData }) {
  return (
    <section className="relative bg-kapes-charcoal overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={data.heroImage}
          alt={`${data.subject} school trip in Kenya`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-kapes-charcoal via-kapes-charcoal/90 to-kapes-charcoal/70 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />

      <div className="container-wide relative z-20 py-24 md:py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <p className="text-kapes-orange font-semibold tracking-widest text-sm mb-4">
            {data.eyebrow}
          </p>

          <h1 className="font-academy text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
            {highlightText(data.h1, data.h1Highlight)}
          </h1>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-3xl">
            {data.heroSubtitle}
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap gap-6 md:gap-10 mb-10">
            {data.stats.map((stat) => {
              const IconComp = statIconMap[stat.label] || MapPin;
              return (
                <div key={stat.label} className="flex items-center gap-2">
                  <IconComp className="w-5 h-5 text-kapes-orange" />
                  <span className="text-white/90 text-sm font-medium">
                    {stat.value}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <CalendlyEmbed
              text="Book a Call"
              className="btn-action"
            />
            <Button
              asChild
              variant="ghost"
              className="border border-white text-white hover:bg-white/10"
            >
              <Link to="/scorecard">Score My Trip Program</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CurriculumTopicsSection({ data }: { data: CurriculumPageData }) {
  return (
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
            Curriculum Integration
          </span>
          <h2 className="text-3xl md:text-5xl font-academy text-kapes-charcoal mt-3 mb-4">
            Built for your specification, not bolted on
          </h2>
          <p className="text-lg text-dragon-gray max-w-2xl mx-auto">
            Every day in the field maps directly to {data.subject} curriculum
            topics — designed for {data.targetAudience.toLowerCase()}.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.curriculumTopics.map((topic, index) => {
            const IconComp = iconMap[topic.icon] || Globe;
            return (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-kapes-cream rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-kapes-orange/10 flex items-center justify-center mb-5">
                  <IconComp className="w-6 h-6 text-kapes-orange" />
                </div>
                <h3 className="text-xl font-academy text-kapes-charcoal mb-3">
                  {topic.title}
                </h3>
                <p className="text-dragon-gray leading-relaxed">
                  {topic.description}
                </p>
                {topic.examBoardLinks && topic.examBoardLinks.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {topic.examBoardLinks.map((link) => (
                      <span
                        key={link}
                        className="text-xs bg-kapes-orange/10 text-kapes-orange px-2 py-1 rounded-full font-medium"
                      >
                        {link}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ThreePhasesSection({ data }: { data: CurriculumPageData }) {
  return (
    <section className="py-24 md:py-32 bg-kapes-cream">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-kapes-orange font-semibold text-sm uppercase tracking-wider">
            Real Fieldwork
          </span>
          <h2 className="text-3xl md:text-5xl font-academy text-kapes-charcoal mt-3">
            Not a holiday with a worksheet
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-dragon-gray leading-relaxed mb-8">
              {data.threePhasesDescription}
            </p>

            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-kapes-orange text-white flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <h3 className="text-lg font-academy text-kapes-charcoal">
                    Pre-Trip
                  </h3>
                </div>
                <p className="text-dragon-gray ml-11">{data.preTrip}</p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-kapes-orange text-white flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <h3 className="text-lg font-academy text-kapes-charcoal">
                    On-Ground
                  </h3>
                </div>
                <p className="text-dragon-gray ml-11">{data.onGround}</p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-kapes-orange text-white flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <h3 className="text-lg font-academy text-kapes-charcoal">
                    Post-Trip
                  </h3>
                </div>
                <p className="text-dragon-gray ml-11">{data.postTrip}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={data.heroImage}
                alt={`Students on a ${data.subject} trip in Kenya`}
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ExamBoardSection({ data }: { data: CurriculumPageData }) {
  if (!data.examBoards) return null;

  return (
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
            Exam Board Coverage
          </span>
          <h2 className="text-3xl md:text-5xl font-academy text-kapes-charcoal mt-3 mb-4">
            Aligned to every major exam board
          </h2>
        </motion.div>

        <div className={`grid md:grid-cols-2 ${data.examBoards.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-" + data.examBoards.length} gap-6 mb-12`}>
          {data.examBoards.map((board, index) => (
            <motion.div
              key={board.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-kapes-cream rounded-2xl p-6"
            >
              <h3 className="text-xl font-academy text-kapes-charcoal mb-4 pb-3 border-b border-gray-200">
                {board.name}
              </h3>
              <ul className="space-y-3">
                {board.alignments.map((alignment) => (
                  <li
                    key={alignment}
                    className="flex items-start gap-2 text-dragon-gray"
                  >
                    <CheckCircle className="w-4 h-4 text-kapes-orange mt-1 flex-shrink-0" />
                    <span className="text-sm">{alignment}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-kapes-cream rounded-2xl p-8 text-center max-w-2xl mx-auto"
        >
          <p className="text-dragon-gray">
            We provide a curriculum mapping document showing exactly how each day
            connects to your specification.{" "}
            <Link
              to="/resources/ethical-planning-guide"
              className="text-kapes-orange hover:underline font-medium"
            >
              Download it before you book
            </Link>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ScorecardCTASection({ data }: { data: CurriculumPageData }) {
  return (
    <section className="py-24 md:py-32 bg-kapes-charcoal">
      <div className="container-wide text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-academy text-white mb-6">
            How does your current {data.subject.toLowerCase()} trip compare?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Most school trips tick the curriculum box. But do they create lasting
            impact for the communities you visit? Score your programme in 5
            minutes.
          </p>
          <Button className="btn-action text-lg h-14 px-10" asChild>
            <Link to="/scorecard">
              Take the Free Assessment
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function FAQSection({ data }: { data: CurriculumPageData }) {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container-wide max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-kapes-orange font-semibold text-sm uppercase tracking-wider">
            Common Questions
          </span>
          <h2 className="text-3xl md:text-5xl font-academy text-kapes-charcoal mt-3 mb-4">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion
            type="single"
            collapsible
            className="w-full space-y-4"
          >
            {data.faqs.map((item, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border border-gray-200 rounded-xl px-6 bg-white shadow-sm"
              >
                <AccordionTrigger className="text-left font-medium text-kapes-charcoal hover:text-kapes-orange transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-dragon-gray pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

function FinalCTASection({ data }: { data: CurriculumPageData }) {
  return (
    <section className="py-24 md:py-32 bg-kapes-charcoal">
      <div className="container-wide text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-academy text-white mb-6">
            {data.ctaHeadline}
          </h2>
          <p className="text-xl text-white/80 mb-10">{data.ctaSubtext}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CalendlyEmbed
              text="Book a Call"
              className="btn-action text-lg h-14 px-10"
            />
            <Button
              asChild
              variant="ghost"
              className="border border-white text-white hover:bg-white/10 text-lg h-14 px-10"
            >
              <Link to="/resources/ethical-planning-guide">
                Download Curriculum Guide
              </Link>
            </Button>
          </div>

          {/* Internal Links */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-white/50 text-sm mb-4">Explore related pages</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {data.internalLinks.map((link, index) => (
                <React.Fragment key={link.url}>
                  {index > 0 && <span className="text-white/30">|</span>}
                  <Link
                    to={link.url}
                    className="text-white/70 hover:text-kapes-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </React.Fragment>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CurriculumLandingPage;
