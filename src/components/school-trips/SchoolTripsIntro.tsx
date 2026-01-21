import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Utensils, Droplets, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SchoolTripsIntro = () => {
  return (
    <div className="py-16">
      {/* Education-First Messaging */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-academy text-kapes-charcoal mb-6">
          Breaking down barriers
          <span className="text-kapes-orange"> to education</span>
        </h2>
        <p className="text-xl text-dragon-gray max-w-3xl mx-auto">
          In Kenya, hunger and lack of water access keep millions of children from learning.
          Our programs tackle these barriers directly. Your students don't just
          witness change, they create it.
        </p>
      </motion.div>

      {/* Two Programs */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* Seeds2Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl overflow-hidden shadow-sm"
        >
          <div className="aspect-video relative">
            <img
              src="https://res.cloudinary.com/dng12bd0a/image/upload/v1747160268/WhatsApp_Image_2025-05-13_at_12.07.56_m0epad.jpg"
              alt="Seeds2Education program"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-impact-green text-white px-4 py-2 rounded-full flex items-center gap-2">
              <Utensils className="w-4 h-4" />
              <span className="font-semibold text-sm">Food Security</span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-academy text-kapes-charcoal mb-3">
              Seeds2Education
            </h3>
            <p className="text-dragon-gray mb-4">
              <strong>The barrier:</strong> Hungry children can't concentrate, leading to poor
              attendance and dropouts. <strong>The solution:</strong> Students build permaculture
              gardens that provide 200+ daily meals, transforming school nutrition permanently.
            </p>
            <div className="flex items-center justify-between">
              <Button className="btn-action" asChild>
                <Link to="/programs/seeds2education">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <span className="text-impact-green font-gothic">5,000+ meals</span>
            </div>
          </div>
        </motion.div>

        {/* Water Empowering Women */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl overflow-hidden shadow-sm"
        >
          <div className="aspect-video relative">
            <img
              src="https://res.cloudinary.com/dng12bd0a/image/upload/v1747159769/Filip-C-Agoo-Everland-Marketing-Kenya-13983_atg3tn.jpg"
              alt="Water Empowering Women program"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-impact-rose text-white px-4 py-2 rounded-full flex items-center gap-2">
              <Droplets className="w-4 h-4" />
              <span className="font-semibold text-sm">Water Access</span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-academy text-kapes-charcoal mb-3">
              Water Empowering Women
            </h3>
            <p className="text-dragon-gray mb-4">
              <strong>The barrier:</strong> Girls miss school to collect water, often walking
              hours daily. <strong>The solution:</strong> Partner with women-led cooperatives
              building water infrastructure that frees girls to learn.
            </p>
            <div className="flex items-center justify-between">
              <Button className="btn-action" asChild>
                <Link to="/programs/empowering-women">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <span className="text-impact-rose font-gothic">50+ women</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* How It Works */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-kapes-charcoal rounded-3xl p-8 md:p-12 text-white"
      >
        <h3 className="text-2xl md:text-3xl font-academy mb-8 text-center">
          How your <span className="text-kapes-orange">journey</span> creates change
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl font-gothic text-kapes-orange mb-4">01</div>
            <h4 className="font-semibold text-lg mb-2">Prepare</h4>
            <p className="text-white/70">
              Students learn about food insecurity and water access challenges in Kenya.
              They arrive ready to make a difference.
            </p>
          </div>

          <div className="text-center">
            <div className="text-5xl font-gothic text-kapes-orange mb-4">02</div>
            <h4 className="font-semibold text-lg mb-2">Build</h4>
            <p className="text-white/70">
              8 days of hands-on work: planting gardens, meeting women's cooperatives,
              and seeing the real impact of their efforts.
            </p>
          </div>

          <div className="text-center">
            <div className="text-5xl font-gothic text-kapes-orange mb-4">03</div>
            <h4 className="font-semibold text-lg mb-2">Transform</h4>
            <p className="text-white/70">
              Students return with CAS hours, changed perspectives, and ongoing updates
              about the communities they've helped.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SchoolTripsIntro;
