import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import ThreeScene from './ThreeScene';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      
      {/* 1. Background Gradient Layer (Deepest) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#420a0a] via-[#5D0E0E] to-[#420a0a] -z-20" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] -z-10 mix-blend-overlay"></div>

      {/* 2. 3D Background Layer (Middle) */}
      <ThreeScene />

      {/* 3. Content Overlay Layer (Front) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-12 pointer-events-none">
        
        <div className="md:col-span-7 flex flex-col justify-center items-start text-left pointer-events-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-12 h-[1px] bg-gold/50"></span>
            <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase">
              Handcrafted in India
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-9xl font-serif font-medium text-pale leading-[0.9] mb-8 tracking-tight"
          >
            Make Your <br />
            <span className="italic text-gold/90 font-light">Mark</span> Beautifully.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-lg md:text-xl text-pale/70 max-w-lg mb-12 leading-relaxed font-sans font-light"
          >
            Premium stationery designed for the mindful creators, dreamers, and doers. Experience the art of writing with Prabhaav.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <button className="group relative px-10 py-4 bg-pale text-brand-red rounded-full font-bold text-sm tracking-widest uppercase overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(250,249,246,0.3)]">
              <span className="relative z-10 flex items-center gap-2">
                Shop Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            </button>
            
            <button className="px-10 py-4 bg-transparent border border-pale/30 text-pale rounded-full font-bold text-sm tracking-widest uppercase hover:bg-pale/10 transition-colors">
              Explore Diaries
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-pale/50">Scroll</span>
        <ChevronDown className="w-4 h-4 text-pale/50" />
      </motion.div>

      {/* Decorative Floating Elements */}
      <div className="absolute bottom-10 left-10 hidden md:block opacity-30 z-10">
        <p className="text-xs font-serif italic text-gold transform -rotate-90 origin-bottom-left whitespace-nowrap">
          Prabhaav Stationery Collection © 2026
        </p>
      </div>
    </section>
  );
};

export default Hero;