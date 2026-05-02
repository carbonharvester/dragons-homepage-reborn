import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";
import { Leaf, ArrowRight, Users, Award, Globe } from "lucide-react";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import WaitingListForm from "@/components/WaitingListForm";

const AdultPrograms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const programs = [
    {
      title: "Permaculture Design and Impact",
      duration: "10 Days",
      season: "Year Round",
      location: "Various locations in Kenya",
      description: "Immerse yourself in permaculture principles while contributing to sustainable food systems in local Kenyan communities. Learn design techniques and practical skills with real-world impact.",
      image: "/lovable-uploads/15e3c0c3-6461-43da-866c-88c8a2129885.png",
      link: "/programs/permaculture-design-course",
      icon: Leaf,
      impactColor: "bg-impact-green/10 text-impact-green"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Adult Trips"
        description="Engage in transformative learning experiences that combine cultural immersion, skill development, and meaningful contribution to local communities."
        keywords="adult trips, educational travel, cultural immersion, skill development, Kenya, Africa"
      />
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 bg-dragon-dark overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-70"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1603202662747-00e33e7d1468?q=80&w=2069&auto=format')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-dragon-dark/20 to-dragon-dark/60" />
          </div>

          <div className="container-wide relative z-10 pt-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <span className="text-kapes-orange font-semibold text-sm uppercase tracking-wider">
                For Curious Adults
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-academy text-white mt-3 mb-6">
                Educational Adventures <span className="text-kapes-orange">For Adults</span>
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mb-8">
                Engage in transformative learning experiences that combine cultural immersion,
                skill development, and meaningful contribution to local communities.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <WaitingListForm>
                  <Button className="btn-action text-lg h-14 px-8">
                    Apply Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </WaitingListForm>
                <CalendlyEmbed
                  url="https://calendly.com/kapesuniforms/kapes-uniforms-consultation-clone"
                  text="Schedule a Consultation"
                >
                  <Button
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-dragon text-lg h-14 px-8"
                  >
                    Schedule a Consultation
                  </Button>
                </CalendlyEmbed>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-wrap gap-8 mt-12"
              >
                {[
                  { number: '10-14 Days', label: 'Duration' },
                  { number: '21+', label: 'Age Range' },
                  { number: 'Flexible', label: 'Year Round' },
                  { number: 'Kenya', label: 'Location' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-gothic text-kapes-orange">{stat.number}</div>
                    <div className="text-sm text-white/70">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-academy text-kapes-charcoal mb-4">
                Transformative Trips for Adults
              </h2>
              <p className="text-lg text-dragon-gray max-w-2xl mx-auto">
                Our adult trips are designed for curious minds seeking authentic experiences
                that combine learning, adventure, and positive impact.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {programs.map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col rounded-2xl">
                    <div className="relative h-56 overflow-hidden">
                      <AspectRatio ratio={16 / 9} className="bg-muted">
                        <img
                          src={program.image}
                          alt={program.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          onError={(e) => {
                            e.currentTarget.src = "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2071&auto=format";
                          }}
                        />
                      </AspectRatio>
                      <div className="absolute top-4 left-4">
                        <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${program.impactColor}`}>
                          <program.icon className="w-4 h-4" />
                          {program.duration}
                        </span>
                      </div>
                    </div>

                    <CardContent className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl md:text-2xl font-bold mb-3 text-kapes-charcoal">{program.title}</h3>
                      <p className="text-dragon-gray mb-6 flex-grow">{program.description}</p>

                      <Button className="w-full btn-action" asChild>
                        <Link to={program.link}>
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Custom Trips CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-dragon to-dragon-dark rounded-2xl p-8 md:p-12 text-white"
            >
              <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-academy mb-4">Custom Trips for Groups</h3>
                <p className="text-lg text-white/80 max-w-2xl mx-auto">
                  Looking for a specialized experience for your organization, professional group,
                  or circle of friends? We design custom trips tailored to your interests and objectives.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-10">
                {[
                  {
                    icon: Users,
                    title: "Team Building",
                    description: "Strengthen bonds through shared meaningful experiences."
                  },
                  {
                    icon: Globe,
                    title: "Custom Itineraries",
                    description: "Design trips around your group's specific interests."
                  },
                  {
                    icon: Award,
                    title: "Professional Development",
                    description: "Gain new skills while making an impact."
                  }
                ].map((item) => (
                  <div key={item.title} className="text-center">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-6 h-6 text-kapes-orange" />
                    </div>
                    <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                    <p className="text-white/70">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="flex justify-center flex-wrap gap-4">
                <CalendlyEmbed
                  url="https://calendly.com/kapesuniforms/kapes-uniforms-consultation-clone"
                  text="Schedule a Consultation"
                >
                  <Button className="btn-action text-lg h-14 px-10">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </CalendlyEmbed>
                <WaitingListForm>
                  <Button
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-dragon text-lg h-14 px-8"
                  >
                    Apply Now
                  </Button>
                </WaitingListForm>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AdultPrograms;
