import { motion } from "framer-motion";
import { Plane, Globe, Calendar, BookOpen } from "lucide-react";
import type { LocationPageData } from "@/data/locationPages";

interface LocationLogisticsProps {
  data: LocationPageData;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function LocationLogistics({ data }: LocationLogisticsProps) {
  const cards = [
    {
      icon: Plane,
      title: `Getting There from ${data.city}`,
      content: (
        <ul className="space-y-3 text-gray-600 text-sm">
          <li>
            <span className="font-medium text-gray-800">Airports:</span>{" "}
            {data.airports.join(", ")}
          </li>
          <li>
            <span className="font-medium text-gray-800">Flight time:</span>{" "}
            {data.flightTime}
          </li>
          <li>
            <span className="font-medium text-gray-800">Airlines:</span>{" "}
            {data.airlines.join(", ")}
          </li>
          <li>
            <span className="font-medium text-gray-800">Cost range:</span>{" "}
            {data.flightCostRange}
          </li>
        </ul>
      ),
    },
    {
      icon: Globe,
      title: "Time Zone & Visa",
      content: (
        <ul className="space-y-3 text-gray-600 text-sm">
          <li>
            <span className="font-medium text-gray-800">Time difference:</span>{" "}
            {data.timeZoneDiff}
          </li>
          <li>
            <span className="font-medium text-gray-800">Visa:</span>{" "}
            {data.visaInfo}
          </li>
          <li>
            <span className="font-medium text-gray-800">Currency:</span>{" "}
            {data.currency}
          </li>
        </ul>
      ),
    },
    {
      icon: Calendar,
      title: "Best Travel Windows",
      content: (
        <div className="text-gray-600 text-sm space-y-2">
          <p>{data.schoolCalendar}</p>
          <p>
            Kenya's dry seasons (January–March, July–October) offer the best
            conditions for school groups. We run programs year-round, so there's
            always meaningful work to join.
          </p>
        </div>
      ),
    },
    {
      icon: BookOpen,
      title: "Curriculum Alignment",
      content: (
        <div className="text-gray-600 text-sm space-y-2">
          <ul className="space-y-1">
            {data.curriculumLinks.map((link, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-kapes-orange mt-0.5">-</span>
                <span>{link}</span>
              </li>
            ))}
          </ul>
          <p className="pt-1">
            Every program maps directly to curriculum outcomes — from geography
            fieldwork to global citizenship and sustainability goals.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container-wide">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-academy text-3xl md:text-4xl text-kapes-charcoal text-center mb-14"
        >
          Travel Logistics from {data.city}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-6 h-6 text-kapes-orange flex-shrink-0" />
                  <h3 className="font-semibold text-lg text-kapes-charcoal">
                    {card.title}
                  </h3>
                </div>
                {card.content}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
