import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Shovel, Truck, Home, Hammer } from 'lucide-react';

const services = [
  {
    title: 'Natural Grass Installation',
    description: 'Lush, green, and perfectly laid sod for an instantly beautiful lawn that thrives in your local climate.',
    icon: Leaf,
    image: 'https://images.unsplash.com/photo-1558904541-efa843a96f09?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Backyard Landscaping',
    description: 'Complete design and finishing, including planting, mulching, and creating beautiful garden beds.',
    icon: Shovel,
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4ce88?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Concrete Driveways',
    description: 'Durable and aesthetically pleasing concrete work for driveways, walkways, and backyard foundations.',
    icon: Truck,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Patio Installation',
    description: 'Custom stone, paver, or concrete patios designed for entertaining and relaxing outdoors.',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Deck Construction',
    description: 'Premium wooden and composite decks built to last, expanding your usable outdoor living space.',
    icon: Hammer,
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-neutral-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-accent mb-4"
          >
            Our Expert Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            We provide comprehensive landscaping and hardscaping solutions to bring your dream backyard to life.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 left-0 bg-white p-3 rounded-tr-2xl z-20">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-accent mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
