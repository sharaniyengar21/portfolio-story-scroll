"use client";
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-800 px-4"
    >
      <motion.div
        className="max-w-2xl text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-600 dark:text-gray-400">
          I’m a passionate developer with a love for creating immersive experiences. This
          website tells my story as you scroll through. Here, you’ll find details about
          my background, skills and interests — presented in a minimal, story‑driven
          format.
        </p>
      </motion.div>
    </section>
  );
}
