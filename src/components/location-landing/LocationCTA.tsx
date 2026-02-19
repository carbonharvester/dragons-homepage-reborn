import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import type { LocationPageData } from "@/data/locationPages";

interface LocationCTAProps {
  data: LocationPageData;
  variant?: "scorecard" | "final";
}

export default function LocationCTA({
  data,
  variant = "scorecard",
}: LocationCTAProps) {
  if (variant === "final") {
    return (
      <section className="py-20 md:py-28 bg-kapes-charcoal">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-academy text-3xl md:text-4xl text-white mb-6">
                Ready to plan an ethical {data.tripTerm} from {data.city}?
              </h2>
              <p className="text-gray-300 mb-8">
                Speak directly with our Kenya-based team. No sales pitch — just
                honest answers about what your students will experience and what
                impact they'll contribute to.
              </p>
              <CalendlyEmbed />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <h3 className="font-semibold text-xl text-white mb-6">
                Free resources for school leaders
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/resources/ethical-planning-guide"
                    className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full bg-kapes-orange flex-shrink-0" />
                    <span className="group-hover:underline">
                      Ethical Trip Planning Guide
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/resources/transparency-checklist"
                    className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full bg-kapes-orange flex-shrink-0" />
                    <span className="group-hover:underline">
                      Transparency Checklist
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/scorecard"
                    className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full bg-kapes-orange flex-shrink-0" />
                    <span className="group-hover:underline">
                      Impact Scorecard
                    </span>
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-dragon-beige via-dragon-beige/80 to-dragon-beige/60">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-academy text-3xl md:text-4xl text-kapes-charcoal mb-4">
            Is your school trip actually making an impact?
          </h2>

          <p className="text-gray-600 text-lg mb-8">
            Take the free 5-minute Impact Scorecard. Get a personalised score
            across 5 dimensions.
          </p>

          <Button asChild className="btn-action">
            <Link to="/scorecard">Score My Trip Program</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
