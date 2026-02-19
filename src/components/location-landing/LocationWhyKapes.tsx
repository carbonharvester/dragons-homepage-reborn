import { motion } from "framer-motion";
import { Clock, BarChart3, Users } from "lucide-react";
import { getCurrencyWord, type LocationPageData } from "@/data/locationPages";

interface LocationWhyKapesProps {
  data: LocationPageData;
}

function getFeatures(data: LocationPageData) {
  return [
    {
      icon: Clock,
      title: "Year-Round Programs, Not Pop-Up Projects",
      description:
        "We run Seeds2Education, school feeding, and water programs 365 days a year. Your students join work that's already changing communities.",
    },
    {
      icon: BarChart3,
      title: "Full Financial Transparency",
      description: `See where every ${getCurrencyWord(data.currency)} goes. We publish cost breakdowns, community investment figures, and measurable outcomes. No hidden margins.`,
    },
    {
      icon: Users,
      title: "Community-Led, Not Student-Designed",
      description:
        "Kenyan communities set the priorities. Local teams lead the work. Your students arrive as learners and participants — not saviours.",
    },
  ];
}

export default function LocationWhyKapes({ data }: LocationWhyKapesProps) {
  return (
    <section className="py-20 md:py-28 bg-kapes-charcoal">
      <div className="container-wide">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-academy text-3xl md:text-4xl text-white text-center mb-14"
        >
          Why Schools from {data.city} Choose Kapes
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {getFeatures(data).map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-full bg-kapes-orange flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="font-semibold text-lg text-white mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
