"use client";
import { motion } from 'framer-motion';

interface Product {
  title: string;
  description: string;
}

const products: Product[] = [
  {
    title: 'Product One',
    description:
      'An overview of the first product or venture, outlining its purpose and unique selling points.',
  },
  {
    title: 'Product Two',
    description:
      'A short description of the second product or venture with key highlights and outcomes.',
  },
  {
    title: 'Product Three',
    description:
      'Summary of the third product or venture, focusing on its innovation and impact.',
  },
];

export default function ProductsSection() {
  return (
    <section
      id="products"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-800 px-4"
    >
      <h2 className="text-3xl font-semibold mb-8 text-center">Products / Ventures</h2>
      <div className="space-y-12 w-full max-w-3xl">
        {products.map((product, idx) => (
          <motion.div
            key={product.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
          >
            <h3 className="text-2xl font-semibold mb-2">{product.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{product.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
