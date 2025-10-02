"use client";
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
}

const projects: Project[] = [
  {
    title: 'Project One',
    description:
      'A brief description of project one showcasing its features and the role I played in building it.',
  },
  {
    title: 'Project Two',
    description:
      'A brief description of project two highlighting technologies used and key takeaways.',
  },
  {
    title: 'Project Three',
    description:
      'A brief description of project three with insights into the problem solved and the impact achieved.',
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center px-4"
    >
      <h2 className="text-3xl font-semibold mb-8 text-center">Projects</h2>
      <div className="space-y-12 w-full max-w-3xl">
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
          >
            <h3 className="text-2xl font-semibold mb-2">{proj.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{proj.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
