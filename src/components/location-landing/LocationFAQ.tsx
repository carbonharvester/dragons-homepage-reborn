import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { getCurrencyWord, type LocationPageData } from "@/data/locationPages";

interface LocationFAQProps {
  data: LocationPageData;
}

export default function LocationFAQ({ data }: LocationFAQProps) {
  const faqs = [
    {
      question: `How much does a ${data.tripTerm} to Kenya from ${data.city} cost?`,
      answer: `Flights from ${data.city} typically cost ${data.flightCostRange} per person. Program costs depend on group size, duration, and which programs you join. We publish full cost breakdowns upfront — you'll see exactly where every ${getCurrencyWord(data.currency)} goes, including the percentage that goes directly to community projects. Contact us for a detailed quote tailored to your school.`,
    },
    {
      question: `How long is the flight from ${data.city} to Kenya?`,
      answer: `The flight from ${data.city} to Kenya takes approximately ${data.flightTime}. You can fly from ${data.airports.join(" or ")} with airlines including ${data.airlines.join(", ")}. Most routes connect through a major hub with one stop, though direct options may be available seasonally.`,
    },
    {
      question: "Do students need a visa to visit Kenya?",
      answer: `${data.visaInfo} We provide full visa guidance as part of your trip planning, including step-by-step instructions and timelines so there are no surprises.`,
    },
    {
      question: "What makes Kapes different from other trip providers?",
      answer:
        "Three things set us apart. First, our programs run year-round — Seeds2Education, school feeding, and water projects operate 365 days a year with or without visiting students. Second, every programme is community-led: Kenyan teams set the priorities and lead the work. Third, we publish full financial transparency — you see exactly where your money goes, what percentage reaches communities, and what measurable outcomes result.",
    },
    {
      question: `How do trips align with the ${data.curriculumLinks[0] || "national"} curriculum?`,
      answer: `Our programs are designed to map directly to curriculum outcomes. Students engage with real-world geography, sustainability, global citizenship, and development studies. We provide pre-trip lesson plans, on-the-ground learning journals, and post-trip reflection frameworks that teachers can use for assessment. Every activity connects back to specific curriculum objectives.`,
    },
    {
      question: "Is Kenya safe for school groups?",
      answer:
        "Student safety is our top priority. We have full-time local staff based in Kenya who know the communities and terrain. Every trip includes comprehensive risk assessments, 24/7 in-country support, medical protocols, and emergency evacuation plans. We work in established communities where we have deep, long-standing relationships. Our safety record reflects years of hosting school groups responsibly.",
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
          Frequently Asked Questions
        </motion.h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <motion.details
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group rounded-xl border border-gray-200 p-5 [&[open]]:pb-5"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none font-semibold text-kapes-charcoal text-base md:text-lg">
                <span className="pr-4">{faq.question}</span>
                <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
