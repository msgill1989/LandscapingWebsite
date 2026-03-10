import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, PenTool, HardHat, Sparkles } from 'lucide-react';

const steps = [
  {
    title: 'Free Consultation',
    description: 'We meet at your property to discuss your vision, assess the space, and provide a detailed estimate.',
    icon: MessageSquare,
  },
  {
    title: 'Design & Planning',
    description: 'Our experts create a custom design plan, selecting the best materials and layout for your backyard.',
    icon: PenTool,
  },
  {
    title: 'Construction',
    description: 'Our experienced crew executes the project with precision, keeping you updated every step of the way.',
    icon: HardHat,
  },
  {
    title: 'Final Transformation',
    description: 'We do a final walkthrough to ensure every detail is perfect and your new outdoor space is ready to enjoy.',
    icon: Sparkles,
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-accent text-white overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-secondary blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our Simple 4-Step Process
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-300"
          >
            From concept to completion, we make upgrading your backyard a seamless and stress-free experience.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-white/20" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-6 relative z-10 shadow-xl">
                  <step.icon className="w-10 h-10 text-secondary" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm border-2 border-accent">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
