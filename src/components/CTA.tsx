import React from 'react';
import { motion } from 'motion/react';

export default function CTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop"
          alt="Beautiful backyard"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-accent/80 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Ready to Upgrade Your Backyard?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto"
        >
          Contact us today for a free, no-obligation estimate. Let's build the outdoor space you've always dreamed of.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-accent bg-secondary hover:bg-yellow-300 rounded-full transition-all duration-300 shadow-xl hover:shadow-secondary/40 hover:-translate-y-1"
          >
            Get Free Estimate
          </a>
        </motion.div>
      </div>
    </section>
  );
}
