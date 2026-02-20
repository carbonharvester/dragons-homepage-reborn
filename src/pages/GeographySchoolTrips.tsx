import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import {
  Waves,
  Droplets,
  TreePine,
  Leaf,
  Globe,
  Building2,
  ArrowRight,
  Clock,
  GraduationCap,
  BookOpen,
  MapPin,
  CheckCircle,
} from "lucide-react";

const curriculumTopics = [
  {
    title: "Coastal Landscapes",
    icon: Waves,
    description:
      "Study Mombasa's coral reef ecosystems, coastal erosion, and marine conservation in one of the world's most biodiverse coastlines.",
  },
  {
    title: "Water & The Water Cycle",
    icon: Droplets,
    description:
      "Visit women-led water cooperatives managing seasonal water scarcity. Study water harvesting, irrigation systems, and the human impact on water cycles.",
  },
  {
    title: "Ecosystems & Biodiversity",
    icon: TreePine,
    description:
      "Experience the Kasigau Corridor — a critical wildlife migration route between Tsavo East and West. Study savanna ecosystems and human-wildlife coexistence.",
  },
  {
    title: "Food Security & Agriculture",
    icon: Leaf,
    description:
      "Work in Seeds2Education permaculture gardens feeding 200+ children daily. Study food production, food miles, and sustainable agriculture in practice.",
  },
  {
    title: "Development & Globalisation",
    icon: Globe,
    description:
      "Meet communities navigating development on their own terms. Study economic indicators, quality of life measures, and the impact of tourism.",
  },
  {
    title: "Urbanisation & Population",
    icon: Building2,
    description:
      "Compare rural Kasigau communities with urban Mombasa. Study rural-urban migration, push-pull factors, and urbanisation challenges.",
  },
];

const examBoardData = [
  {
    board: "AQA",
    topics: [
      "Paper 1 Physical Geography",
      "Paper 2 Human Geography",
      "Fieldwork Component",
    ],
  },
  {
    board: "OCR",
    topics: ["Landscapes of the UK & Beyond", "People of the UK & Wider World", "Geographical Skills"],
  },
  {
    board: "Edexcel",
    topics: [
      "Physical Environments",
      "Human Environments",
      "Geographical Investigations",
    ],
  },
  {
    board: "IB Geography",
    topics: [
      "Core Theme — Global Change",
      "Optional Themes",
      "Internal Assessment Fieldwork",
    ],
  },
];

const faqItems = [
  {
    question: "Does this trip count as GCSE Geography fieldwork?",
    answer:
      "Yes. The trip is designed to satisfy fieldwork requirements across AQA, OCR, and Edexcel specifications. Students collect primary data in the field through transect surveys, questionnaire design, data logging, and landscape analysis — all mapped to your exam board's fieldwork criteria.",
  },
  {
    question: "What geographical skills do students develop?",
    answer:
      "Students develop a wide range of practical skills including primary data collection, GIS mapping, photography analysis, transect surveys, questionnaire design, landscape sketching, statistical analysis, and field note-taking. These skills directly support both GCSE and A-Level assessment objectives.",
  },
  {
    question: "Can you provide a curriculum mapping document?",
    answer:
      "Yes. We provide a detailed curriculum mapping document that shows exactly how each day of the trip connects to specific GCSE and A-Level Geography topics across AQA, OCR, Edexcel, and IB specifications. You can review this before you book.",
  },
  {
    question: "Is Kenya safe for school geography trips?",
    answer:
      "We take safety seriously. We share full risk assessments and emergency protocols with schools and parents well in advance. Our team has years of experience running school trips in Kenya and maintains 24/7 support throughout. Visit our Health and Safety page for full details.",
    link: "/health-and-safety",
    linkText: "Health and Safety page",
  },
  {
    question: "How much does a geography trip to Kenya cost?",
    answer:
      "The cost depends on group size, duration, and specific programme elements. We share line-item budgets with full transparency before booking — no hidden fees. 72% of your programme fee stays in Kenya, supporting the communities you visit.",
  },
  {
    question: "What flights work from the UK?",
    answer:
      "Direct flights run from London Heathrow to Nairobi (approximately 8.5 hours) via Kenya Airways and British Airways. Connecting options are available from Manchester, Edinburgh, Birmingham, and other UK airports. We can advise on the best routing for your group.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const GeographySchoolTrips = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="GCSE Geography School Trips to Kenya | Curriculum-Aligned Field Study"
        description="Plan a GCSE or A-Level Geography field trip to Kenya with real curriculum integration. Students study coastal ecosystems, water management, food security, and sustainable development — not voluntourism with a geography sticker."
        keywords="GCSE geography trip Kenya, geography field trip Kenya, A-Level geography trip Africa, geography school expedition Kenya, field study Kenya, physical geography trip"
        ogUrl="https://kapesadventures.com/geography-school-trips-to-kenya"
        canonicalUrl="https://kapesadventures.com/geography-school-trips-to-kenya"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <Header />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative bg-kapes-charcoal overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://res.cloudinary.com/dng12bd0a/image/upload/v1747160176/Collection_5_s7opwi.jpg"
              alt="Students on a geography field trip in Kenya"
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
                CURRICULUM-ALIGNED FIELD STUDY
              </p>

              <h1 className="font-academy text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
                Geography comes alive in{" "}
                <span className="text-kapes-orange">Kenya</span>
              </h1>

              <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-3xl">
                GCSE and A-Level Geography field trips with real curriculum
                integration. Your students study coastal ecosystems, water
                management, and sustainable development — led by the communities
                living it.
              </p>

              {/* Stats Row */}
              <div className="flex flex-wrap gap-6 md:gap-10 mb-10">
                {[
                  { icon: Clock, label: "7-10 Days" },
                  { icon: GraduationCap, label: "GCSE + A-Level" },
                  { icon: BookOpen, label: "AQA, OCR, Edexcel" },
                  { icon: MapPin, label: "Kenya" },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center gap-2">
                    <stat.icon className="w-5 h-5 text-kapes-orange" />
                    <span className="text-white/90 text-sm font-medium">
                      {stat.label}
                    </span>
                  </div>
                ))}
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

        {/* Section 2: Curriculum Mapping */}
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
                Every day in the field maps directly to GCSE and A-Level
                Geography topics across all UK exam boards.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {curriculumTopics.map((topic, index) => (
                <motion.div
                  key={topic.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-kapes-cream rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-kapes-orange/10 flex items-center justify-center mb-5">
                    <topic.icon className="w-6 h-6 text-kapes-orange" />
                  </div>
                  <h3 className="text-xl font-academy text-kapes-charcoal mb-3">
                    {topic.title}
                  </h3>
                  <p className="text-dragon-gray leading-relaxed">
                    {topic.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Not a Safari With a Worksheet */}
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
                Not a safari with a worksheet
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
                  This is not adventure tourism with a geography add-on. Every
                  trip includes structured pre-trip preparation, on-ground
                  fieldwork led by local experts, and post-trip assessment
                  designed to produce coursework-ready outputs.
                </p>

                <div className="space-y-8">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-kapes-orange text-white flex items-center justify-center text-sm font-bold">
                        1
                      </div>
                      <h3 className="text-lg font-academy text-kapes-charcoal">
                        Pre-Trip (4-6 weeks)
                      </h3>
                    </div>
                    <p className="text-dragon-gray ml-11">
                      Curriculum modules covering Kenya's physical and human
                      geography. Students frame research questions before they
                      travel.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-kapes-orange text-white flex items-center justify-center text-sm font-bold">
                        2
                      </div>
                      <h3 className="text-lg font-academy text-kapes-charcoal">
                        On-Ground (7-10 days)
                      </h3>
                    </div>
                    <p className="text-dragon-gray ml-11">
                      Daily fieldwork sessions led by local experts. Students
                      collect primary data, conduct surveys, photograph
                      landscapes, and apply geographic skills in real contexts.
                    </p>
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
                    <p className="text-dragon-gray ml-11">
                      Structured reflection connecting fieldwork to exam content.
                      Students produce coursework-ready data analysis and
                      geographical investigations.
                    </p>
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
                    src="https://res.cloudinary.com/dng12bd0a/image/upload/v1747200052/IMG_0252_gstfij.jpg"
                    alt="Students conducting geography fieldwork in Kenya"
                    className="w-full h-[400px] md:h-[500px] object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 4: Exam Board Alignment */}
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

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {examBoardData.map((board, index) => (
                <motion.div
                  key={board.board}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-kapes-cream rounded-2xl p-6"
                >
                  <h3 className="text-xl font-academy text-kapes-charcoal mb-4 pb-3 border-b border-gray-200">
                    {board.board}
                  </h3>
                  <ul className="space-y-3">
                    {board.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-start gap-2 text-dragon-gray"
                      >
                        <CheckCircle className="w-4 h-4 text-kapes-orange mt-1 flex-shrink-0" />
                        <span className="text-sm">{topic}</span>
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
                We provide a curriculum mapping document showing exactly how each
                day connects to your specification.{" "}
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

        {/* Section 5: Scorecard CTA */}
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
                How does your current geography trip compare?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Most geography field trips tick the curriculum box. But do they
                create lasting impact for the communities you visit? Score your
                programme in 5 minutes.
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

        {/* Section 6: FAQ */}
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
                {faqItems.map((item, index) => (
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
                      {item.link && (
                        <>
                          {" "}
                          <Link
                            to={item.link}
                            className="text-kapes-orange hover:underline"
                          >
                            {item.linkText}
                          </Link>
                          .
                        </>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* Section 7: Final CTA */}
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
                Ready to take geography beyond the classroom?
              </h2>
              <p className="text-xl text-white/80 mb-10">
                Your students don't need another textbook case study. They need
                to stand in a permaculture garden, talk to the women managing
                water cooperatives, and see geography happening in real time.
              </p>
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
                <p className="text-white/50 text-sm mb-4">
                  Explore related pages
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <Link
                    to="/school-trips"
                    className="text-white/70 hover:text-kapes-orange transition-colors"
                  >
                    School Trips
                  </Link>
                  <span className="text-white/30">|</span>
                  <Link
                    to="/programs/seeds2education"
                    className="text-white/70 hover:text-kapes-orange transition-colors"
                  >
                    Seeds2Education
                  </Link>
                  <span className="text-white/30">|</span>
                  <Link
                    to="/programs/empowering-women"
                    className="text-white/70 hover:text-kapes-orange transition-colors"
                  >
                    Empowering Women
                  </Link>
                  <span className="text-white/30">|</span>
                  <Link
                    to="/health-and-safety"
                    className="text-white/70 hover:text-kapes-orange transition-colors"
                  >
                    Health & Safety
                  </Link>
                  <span className="text-white/30">|</span>
                  <Link
                    to="/scorecard"
                    className="text-white/70 hover:text-kapes-orange transition-colors"
                  >
                    Impact Scorecard
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GeographySchoolTrips;
