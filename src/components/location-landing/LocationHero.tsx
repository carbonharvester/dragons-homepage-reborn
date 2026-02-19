import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import type { LocationPageData } from "@/data/locationPages";

interface LocationHeroProps {
  data: LocationPageData;
}

export default function LocationHero({ data }: LocationHeroProps) {
  const highlightKenya = (text: string) => {
    const parts = text.split(/(Kenya)/gi);
    return parts.map((part, i) =>
      part.toLowerCase() === "kenya" ? (
        <span key={i} className="text-kapes-orange">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <section className="relative bg-kapes-charcoal overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-kapes-charcoal via-kapes-charcoal/95 to-kapes-charcoal/80 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />

      <div className="container-wide relative z-20 py-24 md:py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-kapes-orange font-semibold tracking-widest text-sm mb-4">
            ETHICAL {data.tripTerm.toUpperCase()}S FROM {data.city.toUpperCase()}
          </p>

          <h1 className="font-academy text-4xl md:text-5xl text-white mb-6 leading-tight">
            {highlightKenya(data.h1)}
          </h1>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
            Planning a {data.tripTerm} to Kenya from {data.city}? Kapes
            Adventures runs year-round community programs in Kenya — your
            students join work that's already making a difference. Not projects
            invented for visitors.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="btn-action">
              <Link to="/scorecard">Score My Trip Program</Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="border border-white text-white hover:bg-white/10"
            >
              <Link to="/contact">Talk to Our Kenya Team</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
