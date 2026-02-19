import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const useAnimatedCounter = (end: number, duration: number = 2, isInView: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, isInView]);

  return count;
};

const metrics = [
  { number: 200, suffix: "+", label: "children fed daily" },
  { number: 72, suffix: "%", label: "revenue stays in Kenya" },
  { number: 365, suffix: "", label: "days/year operations" },
  { number: 12, suffix: "", label: "Kenyan staff year-round" },
];

const ImpactStrip = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-12 md:py-16 bg-kapes-sand">
      <div className="container-wide">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-4xl mx-auto">
          {metrics.map((metric, index) => {
            const count = useAnimatedCounter(metric.number, 1.8, isInView);
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-academy text-kapes-orange mb-1">
                  {count.toLocaleString()}{metric.suffix}
                </div>
                <div className="text-sm md:text-base text-dragon-gray font-medium">
                  {metric.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImpactStrip;
