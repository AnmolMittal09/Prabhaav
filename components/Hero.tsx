import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ThreeScene from './ThreeScene';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-red via-[#4A0404] to-brand-red">
      
      {/* 3D Background */}
      <ThreeScene />

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 pointer-events-none">
        <div className="flex flex-col justify-center items-start text-left pointer-events-auto">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="inline-block px-4 py-1 mb-6 rounded-full border border-pale/20 bg-white/5 backdrop-blur-sm text-gold text-xs font-bold tracking-[0.2em] uppercase"
          >
            Est. 2026 • Handcrafted in India
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-pale leading-[1.1] mb-6"
          >
            Make Your <br />
            <span className="italic text-gold">Mark</span> Beautifully.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-lg md:text-xl text-pale/80 max-w-md mb-10 leading-relaxed font-sans"
          >
            Premium stationery designed for the mindful creators, dreamers, and doers. Experience the art of writing with Prabhaav.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="group relative px-8 py-4 bg-pale text-brand-red rounded-full font-medium tracking-wide overflow-hidden transition-all hover:shadow-lg hover:shadow-gold/20">
              <span className="relative z-10 flex items-center gap-2">
                Shop Collection <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            </button>
            <button className="px-8 py-4 bg-transparent border border-pale/50 text-pale rounded-full font-medium tracking-wide hover:bg-pale/10 transition-colors">
              Explore Diaries
            </button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Floating Elements */}
      <div className="absolute bottom-10 left-10 hidden md:block opacity-40">
        <p className="text-xs font-serif italic text-gold transform -rotate-90 origin-bottom-left">
          Prabhaav Stationery © 2026
        </p>
      </div>
    </section>
  );
};

export default Hero;