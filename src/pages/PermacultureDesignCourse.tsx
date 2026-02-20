
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import KenyaMap from '@/components/KenyaMap';
import ProgramBrochure from '@/components/ProgramBrochure';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Leaf, Calendar, Clock, Users, TreeDeciduous, GraduationCap, BookOpen, ArrowRight } from "lucide-react";
import ParentPageNavigation from '@/components/navigation/ParentPageNavigation';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: GraduationCap,
    title: "Certified Training",
    description: "Receive internationally recognized permaculture certification while learning from experienced instructors with expertise in East African ecosystems.",
  },
  {
    icon: Users,
    title: "Community Impact",
    description: "Directly contribute to sustainable food systems that benefit local schools and communities while building meaningful cross-cultural connections.",
  },
  {
    icon: TreeDeciduous,
    title: "Practical Application",
    description: "Move beyond theory with hands-on experience implementing regenerative agriculture techniques in real-world situations with immediate results.",
  },
];

const schedule = [
  {
    value: "days1-3",
    label: "Days 1-3",
    title: "Days 1-3: Foundations and Principles",
    items: [
      "Introduction to permaculture ethics and design principles",
      "Site assessment and analysis techniques",
      "Reading landscape patterns and ecological systems",
      "Visit to established permaculture sites in Kenya",
      "Beginning community needs assessment at partner school",
    ],
  },
  {
    value: "days4-6",
    label: "Days 4-6",
    title: "Days 4-6: Design and Planning",
    items: [
      "Water management systems and harvesting techniques",
      "Soil building and regeneration practices",
      "Food forest design and perennial systems",
      "Creating implementation plans for school garden project",
      "Design presentations and feedback sessions",
    ],
  },
  {
    value: "days7-10",
    label: "Days 7-10",
    title: "Days 7-10: Implementation and Service",
    items: [
      "Installation of water harvesting systems at school site",
      "Establishing garden beds and planting key crops",
      "Building compost systems and soil fertility banks",
      "Training sessions with teachers and community members",
      "Final project completion and handover ceremony",
    ],
  },
  {
    value: "certification",
    label: "Certification",
    title: "Certification & Beyond",
    items: [
      "Receive internationally recognized Permaculture Design Certificate",
      "Ongoing support through our online community platform",
      "Option to return as a mentor for future courses",
      "Access to our global network of permaculture practitioners",
      "Resources for implementing projects in your home community",
    ],
  },
];

const PermacultureDesignCourse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const programData = {
    title: "Permaculture Design Course",
    description: "An immersive 10-day program that combines permaculture education with community service. Learn design principles and practical skills while contributing to sustainable food systems in local Kenyan communities. This comprehensive course offers internationally recognized certification while making a lasting impact.",
    duration: "10 Days",
    season: "Year Round",
    location: "Nairobi, Kenya",
    goals: [
      "Gain practical permaculture design skills and certification",
      "Contribute to sustainable food systems in local communities",
      "Implement regenerative agriculture techniques",
      "Connect with like-minded sustainable living enthusiasts"
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Permaculture Design Course"
        description="An immersive 10-day permaculture design course in Kenya. Earn internationally recognized certification while building sustainable food systems for local communities."
        keywords="permaculture design course, PDC Kenya, sustainable agriculture, permaculture certification, service learning, regenerative agriculture"
      />
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-32 md:py-40 bg-kapes-charcoal overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/lovable-uploads/15e3c0c3-6461-43da-866c-88c8a2129885.png"
              alt="Permaculture garden with students working"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-kapes-charcoal/70 via-black/30 to-transparent" />
          </div>
          <div className="container-wide relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-academy text-white leading-[0.95] mb-6">
                Permaculture
                <br />
                <span className="text-kapes-orange">Design Course</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-3xl mb-8">
                Learn, design, and implement sustainable food systems while making a positive impact on Kenyan communities.
              </p>
              <div className="flex flex-wrap gap-6 md:gap-10">
                <div>
                  <span className="font-gothic text-3xl md:text-4xl text-kapes-orange">10</span>
                  <span className="block text-white/70 text-sm">Days</span>
                </div>
                <div>
                  <span className="font-gothic text-3xl md:text-4xl text-kapes-orange">Year Round</span>
                  <span className="block text-white/70 text-sm">Season</span>
                </div>
                <div>
                  <span className="font-gothic text-3xl md:text-4xl text-kapes-orange">PDC</span>
                  <span className="block text-white/70 text-sm">Certification</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="container-wide py-8">
          <ParentPageNavigation parentPath="/adult-programs" parentName="Adult Programs" />
        </div>

        {/* Overview Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-academy text-kapes-charcoal mb-6">Course Overview</h2>
                <p className="text-lg text-dragon-gray mb-6">
                  This 10-day Permaculture Design Course (PDC) combines traditional permaculture education with hands-on service projects that directly benefit local Kenyan communities. Unlike standard PDCs, this unique program allows you to immediately apply your knowledge to real-world challenges.
                </p>
                <p className="text-lg text-dragon-gray mb-6">
                  Working alongside local experts and community members, you'll help expand our Seeds2Education initiative by designing and implementing sustainable food systems. This course offers internationally recognized certification while making a lasting difference in areas facing food insecurity.
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <div className="flex items-center bg-kapes-cream px-4 py-2 rounded-full">
                    <Clock size={18} className="text-kapes-orange mr-2" />
                    <span className="text-kapes-charcoal">10 Days</span>
                  </div>
                  <div className="flex items-center bg-kapes-cream px-4 py-2 rounded-full">
                    <Calendar size={18} className="text-kapes-orange mr-2" />
                    <span className="text-kapes-charcoal">Year Round</span>
                  </div>
                  <div className="flex items-center bg-kapes-cream px-4 py-2 rounded-full">
                    <GraduationCap size={18} className="text-kapes-orange mr-2" />
                    <span className="text-kapes-charcoal">Certification</span>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1604014935903-c9920c277a2e?auto=format&fit=crop&q=80"
                  alt="Permaculture garden design"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </motion.div>

            {/* Program Brochure */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-12 mb-8"
            >
              <ProgramBrochure program={programData} />
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-12"
            >
              <h3 className="text-xl font-academy text-kapes-charcoal mb-4">Course Location</h3>
              <p className="text-lg text-dragon-gray mb-6">
                The Permaculture Design Course is based at our sustainable learning center near Nairobi, with field trips to various project sites throughout Kenya.
              </p>
              <KenyaMap />
            </motion.div>
          </div>
        </section>

        {/* Course Features */}
        <section className="py-24 md:py-32 bg-kapes-cream">
          <div className="container-wide">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-academy text-kapes-charcoal text-center mb-12"
            >
              Course Features
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-kapes-orange flex items-center justify-center mb-4">
                      <Icon size={32} className="text-white" />
                    </div>
                    <h3 className="text-lg font-academy text-kapes-charcoal mb-3">{feature.title}</h3>
                    <p className="text-dragon-gray">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Course Content */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-academy text-kapes-charcoal mb-4">Course Content</h2>
              <p className="text-lg text-dragon-gray max-w-2xl mx-auto">A comprehensive curriculum that balances theory, design, and practical application</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="bg-kapes-cream p-6 rounded-2xl">
                <h3 className="text-xl font-academy text-kapes-charcoal mb-4 flex items-center">
                  <BookOpen className="mr-2 text-kapes-orange" size={24} />
                  <span>Permaculture Principles</span>
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-dragon-gray">
                  <li>Ethics and principles of permaculture design</li>
                  <li>Reading landscapes and pattern recognition</li>
                  <li>Water harvesting and management systems</li>
                  <li>Soil regeneration and fertility building</li>
                  <li>Food forest design and implementation</li>
                </ul>
              </div>

              <div className="bg-kapes-cream p-6 rounded-2xl">
                <h3 className="text-xl font-academy text-kapes-charcoal mb-4 flex items-center">
                  <Leaf className="mr-2 text-kapes-orange" size={24} />
                  <span>Service Components</span>
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-dragon-gray">
                  <li>Designing school garden systems for maximum yield</li>
                  <li>Installing water catchment and irrigation systems</li>
                  <li>Creating community compost networks</li>
                  <li>Training local educators on permaculture basics</li>
                  <li>Establishing perennial food production systems</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Course Schedule */}
        <section className="py-24 md:py-32 bg-kapes-cream">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-academy text-kapes-charcoal mb-4">Course Schedule</h2>
              <p className="text-lg text-dragon-gray max-w-2xl mx-auto">A day-by-day overview of our 10-day immersive permaculture experience</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <Tabs defaultValue="days1-3" className="w-full">
                <TabsList className="grid grid-cols-2 sm:grid-cols-4 mb-8">
                  {schedule.map((s) => (
                    <TabsTrigger key={s.value} value={s.value}>{s.label}</TabsTrigger>
                  ))}
                </TabsList>

                {schedule.map((s) => (
                  <TabsContent key={s.value} value={s.value}>
                    <div className="bg-white rounded-2xl shadow-sm p-6">
                      <h3 className="text-xl font-academy text-kapes-charcoal mb-4">{s.title}</h3>
                      <ul className="list-disc pl-5 space-y-2 text-dragon-gray">
                        {s.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32 bg-kapes-charcoal text-white text-center">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-academy mb-6">
                Ready to <span className="text-kapes-orange">design for change?</span>
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
                Join our next Permaculture Design Course and help create sustainable food systems while earning your certification.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="btn-action text-lg px-10 py-6" asChild>
                  <a
                    href="https://calendly.com/kapesuniforms/kapes-uniforms-consultation-clone"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apply Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button className="btn-ghost text-lg px-8 py-6" asChild>
                  <Link to="/adult-programs">
                    View All Programs
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

export default PermacultureDesignCourse;
