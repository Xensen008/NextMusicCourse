"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    title: "Expert-Led Masterclasses",
    description: "Learn directly from Grammy-winning artists and industry veterans through exclusive masterclasses and workshops.",
    delay: 0.2,
  },
  {
    title: "Interactive Learning",
    description: "Practice with real-time feedback and engage with our innovative learning tools designed for maximum retention.",
    delay: 0.4,
  },
  {
    title: "Personalized Path",
    description: "Follow a customized curriculum that adapts to your skill level, goals, and preferred learning style.",
    delay: 0.6,
  },
  {
    title: "Community Support",
    description: "Join a vibrant community of musicians, collaborate on projects, and grow together through peer feedback.",
    delay: 0.8,
  }
];

function FeatureCard({ title, description, delay }: { title: string; description: string; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, delay }}
      className="bg-neutral-900/50 backdrop-blur-sm p-6 rounded-lg border border-neutral-800"
    >
      <h3 className="text-xl font-semibold text-gradient mb-3">{title}</h3>
      <p className="text-neutral-400">{description}</p>
    </motion.div>
  );
}

function WhyChooseUs() {
  return (
    <section className="py-20 bg-dark-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gradient mb-4">Why Choose Us</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Experience the difference with our innovative approach to music education
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;