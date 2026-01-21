import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight, HelpCircle, Plane, Shield, Mail } from "lucide-react";

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Frequently Asked Questions"
        description="Find answers to the most common questions about our programs, travel logistics, and experiences in Kenya."
        keywords="FAQ, travel questions, Kenya travel, educational programs, trip preparation"
      />
      <Header />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-dragon-dark overflow-hidden">
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
                Get Answers
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-academy text-white mt-3 mb-6">
                Frequently Asked <span className="text-kapes-orange">Questions</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80">
                Find answers to the most common questions about our programs, travel logistics, and experiences.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-wide max-w-4xl">
            {/* Program Questions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-impact-purple/10 flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-impact-purple" />
                </div>
                <h2 className="text-2xl font-academy text-kapes-charcoal">Program Questions</h2>
              </div>
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-1" className="border border-gray-200 rounded-xl px-6 bg-white shadow-sm">
                  <AccordionTrigger className="text-left font-medium text-kapes-charcoal hover:text-kapes-orange transition-colors">
                    What kinds of educational programs do you offer?
                  </AccordionTrigger>
                  <AccordionContent className="text-dragon-gray pb-4">
                    Kapes Adventures offers a range of immersive educational programs including Food for Education, Community Conservation, Empowering Young Women, Capturing Kenya photography tours, and Permaculture Design courses. Our programs range from school trips to adult-focused learning experiences.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border border-gray-200 rounded-xl px-6 bg-white shadow-sm">
                  <AccordionTrigger className="text-left font-medium text-kapes-charcoal hover:text-kapes-orange transition-colors">
                    How long do your programs typically last?
                  </AccordionTrigger>
                  <AccordionContent className="text-dragon-gray pb-4">
                    Our programs range from 5-14 days depending on the specific curriculum and goals. School trips are typically 7-10 days, while our adult programs can be customized to fit your schedule. We can also design multi-week experiences for more in-depth education.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border border-gray-200 rounded-xl px-6 bg-white shadow-sm">
                  <AccordionTrigger className="text-left font-medium text-kapes-charcoal hover:text-kapes-orange transition-colors">
                    What age groups do you accommodate?
                  </AccordionTrigger>
                  <AccordionContent className="text-dragon-gray pb-4">
                    We design programs for middle and high school students (ages 12-18), as well as separate programs for university students and adults. Each program is tailored to be age-appropriate and educationally suitable for the intended participants.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>

            {/* Travel & Logistics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-impact-blue/10 flex items-center justify-center">
                  <Plane className="w-5 h-5 text-impact-blue" />
                </div>
                <h2 className="text-2xl font-academy text-kapes-charcoal">Travel & Logistics</h2>
              </div>
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-4" className="border border-gray-200 rounded-xl px-6 bg-white shadow-sm">
                  <AccordionTrigger className="text-left font-medium text-kapes-charcoal hover:text-kapes-orange transition-colors">
                    What does the program fee include?
                  </AccordionTrigger>
                  <AccordionContent className="text-dragon-gray pb-4">
                    Program fees typically include all accommodation, meals, ground transportation, activities, guides, educational materials, and entrance fees to sites. International airfare, travel insurance, and personal expenses are usually not included. Each program proposal includes a detailed breakdown of what's included.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border border-gray-200 rounded-xl px-6 bg-white shadow-sm">
                  <AccordionTrigger className="text-left font-medium text-kapes-charcoal hover:text-kapes-orange transition-colors">
                    Do I need a visa to travel to Kenya?
                  </AccordionTrigger>
                  <AccordionContent className="text-dragon-gray pb-4">
                    Most travelers need a visa to enter Kenya. As of 2024, Kenya has implemented an electronic visa system where visitors can apply online prior to travel. We provide detailed visa guidance to all program participants well in advance of the trip.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border border-gray-200 rounded-xl px-6 bg-white shadow-sm">
                  <AccordionTrigger className="text-left font-medium text-kapes-charcoal hover:text-kapes-orange transition-colors">
                    What vaccinations or health precautions are needed?
                  </AccordionTrigger>
                  <AccordionContent className="text-dragon-gray pb-4">
                    Travelers to Kenya typically need vaccinations such as Yellow Fever, and medications for malaria prevention are recommended. We advise all participants to consult with a travel health specialist or their physician at least 8 weeks before departure. More details can be found on our <Link to="/health-and-safety" className="text-kapes-orange hover:underline">Health and Safety page</Link>.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>

            {/* Program Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-impact-green/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-impact-green" />
                </div>
                <h2 className="text-2xl font-academy text-kapes-charcoal">Program Details</h2>
              </div>
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-7" className="border border-gray-200 rounded-xl px-6 bg-white shadow-sm">
                  <AccordionTrigger className="text-left font-medium text-kapes-charcoal hover:text-kapes-orange transition-colors">
                    How do you ensure safety during trips?
                  </AccordionTrigger>
                  <AccordionContent className="text-dragon-gray pb-4">
                    Safety is our top priority. We have comprehensive risk management protocols, work with vetted local partners, maintain 24/7 emergency support, and provide thorough pre-departure preparation. Our staff are trained in first aid and emergency procedures. Visit our <Link to="/health-and-safety" className="text-kapes-orange hover:underline">Health and Safety page</Link> for more details.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8" className="border border-gray-200 rounded-xl px-6 bg-white shadow-sm">
                  <AccordionTrigger className="text-left font-medium text-kapes-charcoal hover:text-kapes-orange transition-colors">
                    How are groups accommodated?
                  </AccordionTrigger>
                  <AccordionContent className="text-dragon-gray pb-4">
                    We work with a variety of accommodations ranging from hotels and eco-lodges to homestays, depending on the program's educational goals. All accommodations are vetted for safety, cleanliness, and appropriateness for the group. Students typically share rooms with 2-4 people of the same gender.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9" className="border border-gray-200 rounded-xl px-6 bg-white shadow-sm">
                  <AccordionTrigger className="text-left font-medium text-kapes-charcoal hover:text-kapes-orange transition-colors">
                    Can you accommodate dietary restrictions?
                  </AccordionTrigger>
                  <AccordionContent className="text-dragon-gray pb-4">
                    Yes, we accommodate common dietary restrictions such as vegetarian, vegan, gluten-free, and most food allergies. We collect this information during registration and communicate with all accommodation providers to ensure proper meals are prepared. Please inform us of any severe allergies or restrictions during the application process.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-kapes-cream to-white rounded-2xl p-8 md:p-12 text-center mt-16"
            >
              <div className="w-16 h-16 rounded-full bg-kapes-orange/10 flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-kapes-orange" />
              </div>
              <h3 className="text-2xl font-academy text-kapes-charcoal mb-4">Still Have Questions?</h3>
              <p className="text-dragon-gray mb-8 max-w-md mx-auto">
                Contact us directly and our team will be happy to help you with any questions you may have.
              </p>
              <Button className="btn-action text-lg h-14 px-10" asChild>
                <a href="mailto:info@kapesadventures.com">
                  Email Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
