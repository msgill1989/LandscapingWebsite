import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const features = [
  'Experienced & Professional Team',
  'Premium Quality Materials',
  'Affordable & Transparent Pricing',
  'Fast & Efficient Project Completion',
  'Local, Trusted Landscapers',
  'Fully Licensed & Insured',
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-neutral-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&w=1000&auto=format&fit=crop" 
                alt="Landscaping team at work" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/40 to-transparent" />
              
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">15+</span>
                </div>
                <div>
                  <p className="font-bold text-accent">Years of</p>
                  <p className="text-sm text-gray-500">Experience</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6">
              Why Choose GreenScape for Your Backyard?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We don't just build backyards; we create outdoor living spaces where memories are made. Our commitment to quality craftsmanship and customer satisfaction sets us apart.
            </p>

            <ul className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center text-gray-700 font-medium"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary mr-3 flex-shrink-0" />
                  {feature}
                </motion.li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-primary hover:bg-primary-dark rounded-full transition-colors shadow-lg shadow-primary/30"
            >
              Discuss Your Project
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
