
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Frequently Asked Questions"
        description="Find answers to the most common questions about our programs, travel logistics, and experiences in Kenya."
        keywords="FAQ, travel questions, Kenya travel, educational programs, trip preparation"
      />
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-dragon-beige py-16">
          <div className="container-wide">
            <h1 className="text-4xl md:text-5xl font-academy text-dragon-dark mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-dragon-gray max-w-3xl">
              Find answers to the most common questions about our programs, travel logistics, and experiences.
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16">
          <div className="container-wide max-w-4xl">
            <div className="mb-12">
              <h2 className="text-2xl font-academy text-dragon-dark mb-6">Program Questions</h2>
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-1" className="border rounded-lg p-2">
                  <AccordionTrigger className="text-left font-medium text-dragon-dark">
                    What kinds of educational programs do you offer?
                  </AccordionTrigger>
                  <AccordionContent className="text-dragon-gray">
                    Kapes Adventures offers a range of immersive educational programs including Food for Education, Community Conservation, Empowering Young Women, Capturing Kenya photography tours, and Permaculture Design courses. Our programs range from school trips to adult-focused learning experiences.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2" className="border rounded-lg p-2">
                  <AccordionTrigger className="text-left font-medium text-dragon-dark">
                    How long do your programs typically last?
                  </AccordionTrigger>
                  <AccordionContent className="text-dragon-gray">
                    Our programs range from 5-14 days depending on the specific curriculum and goals. School trips are typically 7-10 days, while our adult programs can be customized to fit your schedule. We can also design multi-week experiences for more in-depth education.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3" className="border rounded-lg p-2">
                  <AccordionTrigger className="text-left font-medium text-dragon-dark">
                    What age groups do you accommodate?
                  </AccordionTrigger>
                  <AccordionContent className="text-dragon-gray">
                    We design programs for middle and high school students (ages 12-18), as well as separate programs for university students and adults. Each program is tailored to be age-appropriate and educationally suitable for the intended participants.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-academy text-dragon-dark mb-6">Travel & Logistics</h2>
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-4" className="border rounded-lg p-2">
                  <AccordionTrigger className="text-left font-medium text-dragon-dark">
                    What does the program fee include?
                  </AccordionTrigger>
                  <AccordionContent className="text-dragon-gray">
                    Program fees typically include all accommodation, meals, ground transportation, activities, guides, educational materials, and entrance fees to sites. International airfare, travel insurance, and personal expenses are usually not included. Each program proposal includes a detailed breakdown of what's included.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5" className="border rounded-lg p-2">
                  <AccordionTrigger className="text-left font-medium text-dragon-dark">
                    Do I need a visa to travel to Kenya?
                  </AccordionTrigger>
                  <AccordionContent className="text-dragon-gray">
                    Most travelers need a visa to enter Kenya. As of 2024, Kenya has implemented an electronic visa system where visitors can apply online prior to travel. We provide detailed visa guidance to all program participants well in advance of the trip.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-6" className="border rounded-lg p-2">
                  <AccordionTrigger className="text-left font-medium text-dragon-dark">
                    What vaccinations or health precautions are needed?
                  </AccordionTrigger>
                  <AccordionContent className="text-dragon-gray">
                    Travelers to Kenya typically need vaccinations such as Yellow Fever, and medications for malaria prevention are recommended. We advise all participants to consult with a travel health specialist or their physician at least 8 weeks before departure. More details can be found on our Health and Safety page.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-academy text-dragon-dark mb-6">Program Details</h2>
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-7" className="border rounded-lg p-2">
                  <AccordionTrigger className="text-left font-medium text-dragon-dark">
                    How do you ensure safety during trips?
                  </AccordionTrigger>
                  <AccordionContent className="text-dragon-gray">
                    Safety is our top priority. We have comprehensive risk management protocols, work with vetted local partners, maintain 24/7 emergency support, and provide thorough pre-departure preparation. Our staff are trained in first aid and emergency procedures. Visit our Health and Safety page for more details.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-8" className="border rounded-lg p-2">
                  <AccordionTrigger className="text-left font-medium text-dragon-dark">
                    How are groups accommodated?
                  </AccordionTrigger>
                  <AccordionContent className="text-dragon-gray">
                    We work with a variety of accommodations ranging from hotels and eco-lodges to homestays, depending on the program's educational goals. All accommodations are vetted for safety, cleanliness, and appropriateness for the group. Students typically share rooms with 2-4 people of the same gender.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-9" className="border rounded-lg p-2">
                  <AccordionTrigger className="text-left font-medium text-dragon-dark">
                    Can you accommodate dietary restrictions?
                  </AccordionTrigger>
                  <AccordionContent className="text-dragon-gray">
                    Yes, we accommodate common dietary restrictions such as vegetarian, vegan, gluten-free, and most food allergies. We collect this information during registration and communicate with all accommodation providers to ensure proper meals are prepared. Please inform us of any severe allergies or restrictions during the application process.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            <div className="text-center mt-16">
              <h3 className="text-xl font-academy text-dragon-dark mb-4">Still have questions?</h3>
              <p className="text-dragon-gray mb-6">
                Contact us directly and our team will be happy to help you.
              </p>
              <div className="flex justify-center">
                <Button 
                  className="bg-dragon text-white hover:bg-dragon-dark"
                  asChild
                >
                  <a href="mailto:info@kapesadventures.com">
                    Email Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
