"use client";
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4"
    >
      <motion.h1
        className="mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="block text-4xl md:text-6xl font-bold mb-2">
          Hello, I’m Your Name
        </span>
        <span className="block text-xl md:text-2xl text-gray-600 dark:text-gray-400">
          Crafting digital experiences through storytelling
        </span>
      </motion.h1>
      <motion.p
        className="mt-6 max-w-xl text-gray-500 dark:text-gray-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Scroll down to explore my journey, projects and ventures. This section is just the
        beginning of an immersive story‑scroll experience.
      </motion.p>
    </section>
  );
}
