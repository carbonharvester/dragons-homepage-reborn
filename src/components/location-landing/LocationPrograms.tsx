import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sprout, Droplets, UtensilsCrossed, TreePine } from "lucide-react";
import type { LocationPageData } from "@/data/locationPages";

interface LocationProgramsProps {
  data: LocationPageData;
}

const programs = [
  {
    icon: Sprout,
    title: "Seeds2Education",
    description:
      "Year-round permaculture gardens feeding 200+ children daily at partner schools. Students help expand gardens, install water systems, and work alongside Kenyan-led teams.",
    link: "/programs/seeds2education",
  },
  {
    icon: Droplets,
    title: "Water Empowering Women",
    description:
      "Women-led cooperatives building water access year-round. When women have water, girls stay in school. Students work alongside the women leading this.",
    link: "/programs/empowering-women",
  },
  {
    icon: UtensilsCrossed,
    title: "Feeding the Future",
    description:
      "School feeding programs tackling hunger — the #1 barrier to learning in rural Kenya. Students cook, serve, and help scale what's already working.",
    link: "/programs/feeding-the-future",
  },
  {
    icon: TreePine,
    title: "Community Conservation",
    description:
      "Conservation in the Kasigau Corridor — home to the world's first REDD+ carbon project. Wildlife protection, community development, environmental education.",
    link: "/programs/community-conservation",
  },
];

export default function LocationPrograms({ data }: LocationProgramsProps) {
  return (
    <section className="py-20 md:py-28 bg-dragon-beige/30">
      <div className="container-wide">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-academy text-3xl md:text-4xl text-kapes-charcoal text-center mb-6"
        >
          Programs Your Students Can Join
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-600 text-center max-w-2xl mx-auto mb-14"
        >
          Every program runs year-round, led by Kenyan communities. Your
          students from {data.city} join work that continues long after they
          leave.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {programs.map((program, i) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-kapes-orange/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-kapes-orange" />
                  </div>
                  <h3 className="font-semibold text-lg text-kapes-charcoal">
                    {program.title}
                  </h3>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                  {program.description}
                </p>

                <Link
                  to={program.link}
                  className="text-kapes-orange font-medium text-sm hover:underline inline-flex items-center gap-1"
                >
                  Learn more
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
