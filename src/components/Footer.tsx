import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-accent text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <a href="#" className="text-2xl font-bold tracking-tighter text-white mb-4 block">
              Green<span className="text-primary">Scape</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Transforming ordinary backyards into extraordinary outdoor living spaces with premium landscaping and hardscaping services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors text-sm">Our Services</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-primary transition-colors text-sm">Portfolio</a></li>
              <li><a href="#process" className="text-gray-400 hover:text-primary transition-colors text-sm">How It Works</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-primary transition-colors text-sm">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-primary transition-colors text-sm">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">Natural Grass Installation</li>
              <li className="text-gray-400 text-sm">Backyard Landscaping</li>
              <li className="text-gray-400 text-sm">Concrete Driveways</li>
              <li className="text-gray-400 text-sm">Patio Installation</li>
              <li className="text-gray-400 text-sm">Deck Construction</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe to get landscaping tips and special offers.</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/5 border border-white/10 rounded-l-lg px-4 py-2 w-full text-sm outline-none focus:border-primary text-white"
              />
              <button type="submit" className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-r-lg text-sm font-medium transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} GreenScape Landscaping. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
