import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import ThreeScene from './ThreeScene';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      
      {/* 1. Background Layers */}
      <div className="absolute inset-0 bg-[#5D0E0E] -z-30" />
      
      {/* Spotlight Glow behind the 3D notebook area (Right side) */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-l from-[#7F1D1D] to-transparent rounded-full blur-[120px] opacity-60 -z-20 pointer-events-none translate-x-1/3" />
      
      {/* Grain Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] -z-10 mix-blend-overlay"></div>

      {/* 2. 3D Scene Layer (Full Screen, but content is positioned to the right) */}
      <ThreeScene />

      {/* 3. Content Overlay Layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full h-full flex flex-col justify-center pointer-events-none">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full h-full items-center">
            
            {/* Left Column: Text Content */}
            <div className="flex flex-col justify-center items-start text-left pointer-events-auto md:pr-10">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="flex items-center gap-3 mb-6"
                >
                    <span className="w-8 h-[1px] bg-gold"></span>
                    <span className="text-gold text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">
                    Premium Stationery
                    </span>
                </motion.div>
                
                <motion.h1 
                    initial={{ opacity: 0, y: 40, scale: 0.95, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                    transition={{ delay: 0.7, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-pale leading-[1.0] mb-6 tracking-tight drop-shadow-xl origin-left"
                >
                    Design <br />
                    <span className="italic font-light opacity-90">Your</span> Legacy.
                </motion.h1>

                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.8 }}
                    className="text-lg text-pale/80 max-w-md mb-10 leading-relaxed font-sans font-light"
                >
                    Where Indian craftsmanship meets modern minimalism. 
                    Elevate your daily rituals with our handcrafted journals.
                </motion.p>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3, duration: 0.8 }}
                    className="flex flex-wrap gap-4"
                >
                    <button className="group relative px-8 py-4 bg-pale text-brand-red rounded-full font-bold text-xs tracking-widest uppercase overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]">
                        <span className="relative z-10 flex items-center gap-2">
                            Shop Collection <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>
                    
                    <button className="px-8 py-4 bg-transparent border border-pale/20 text-pale rounded-full font-bold text-xs tracking-widest uppercase hover:bg-pale/10 hover:border-pale/40 transition-all backdrop-blur-sm">
                        View Lookbook
                    </button>
                </motion.div>
            </div>

            {/* Right Column: Empty to allow 3D model visibility */}
            <div className="hidden md:block">
                {/* The 3D model sits here visually */}
            </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 2, duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-pale/40 to-transparent"></div>
        <span className="text-[9px] uppercase tracking-[0.3em] text-pale/40">Explore</span>
      </motion.div>
    </section>
  );
};

export default Hero;