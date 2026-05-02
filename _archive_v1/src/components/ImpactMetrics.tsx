import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Utensils, Droplets, GraduationCap, Users } from 'lucide-react';

// Animated counter hook
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

// Education-barrier focused metrics
const impactMetrics = [
  {
    icon: Utensils,
    number: 5000,
    suffix: "+",
    label: "school meals provided",
    color: "text-impact-green",
  },
  {
    icon: Droplets,
    number: 50,
    suffix: "+",
    label: "women with water access",
    color: "text-impact-rose",
  },
  {
    icon: GraduationCap,
    number: 350,
    suffix: "+",
    label: "students transformed",
    color: "text-impact-purple",
  },
  {
    icon: Users,
    number: 8,
    suffix: "",
    label: "school gardens built",
    color: "text-impact-green",
  },
];

const ImpactMetrics = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="impact-metrics"
      ref={ref}
      className="py-24 md:py-32 bg-kapes-charcoal text-white"
    >
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-academy leading-tight">
            Every trip removes
            <br />
            <span className="text-kapes-orange">barriers</span>
          </h2>
          <p className="text-xl text-white/70 mt-6 max-w-2xl mx-auto">
            When students travel with us, they don't just learn. They create
            measurable change that keeps children in school.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto">
          {impactMetrics.map((metric, index) => (
            <MetricItem
              key={metric.label}
              metric={metric}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface MetricItemProps {
  metric: typeof impactMetrics[0];
  index: number;
  isInView: boolean;
}

const MetricItem: React.FC<MetricItemProps> = ({ metric, index, isInView }) => {
  const count = useAnimatedCounter(metric.number, 2, isInView);
  const Icon = metric.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="text-center"
    >
      {/* Icon */}
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
        <Icon className={`w-8 h-8 ${metric.color}`} />
      </div>

      {/* Number */}
      <div className="text-4xl md:text-5xl font-gothic text-white mb-2">
        {count.toLocaleString()}{metric.suffix}
      </div>

      {/* Label */}
      <div className="text-white/70 text-sm md:text-base">
        {metric.label}
      </div>
    </motion.div>
  );
};

export default ImpactMetrics;
