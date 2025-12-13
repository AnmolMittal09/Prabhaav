import React, { useState, useEffect } from 'react';
import { Menu, ShoppingBag, Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={`fixed top-0 left-0 w-full z-50 flex justify-center transition-all duration-500 ${scrolled ? 'pt-4' : 'pt-0'}`}>
        <nav 
          className={`
            transition-all duration-500 ease-out
            ${scrolled 
              ? 'w-[90%] md:w-auto md:min-w-[600px] rounded-full bg-brand-red/60 backdrop-blur-xl border border-pale/10 shadow-2xl shadow-black/20 px-8 py-3' 
              : 'w-full px-6 py-6 bg-transparent border-none'
            }
          `}
        >
          <div className={`flex justify-between items-center ${!scrolled && 'max-w-7xl mx-auto'}`}>
            {/* Logo */}
            <div className="text-2xl font-serif font-semibold tracking-wider text-pale cursor-pointer flex items-center gap-3">
              <span className={`w-2 h-2 rounded-full bg-gold block shadow-[0_0_10px_#D4AF37] ${scrolled ? 'animate-pulse' : ''}`}></span>
              PRABHAAV
            </div>

            {/* Desktop Links - Centered when scrolled */}
            <div className={`hidden md:flex items-center text-xs font-medium tracking-[0.15em] uppercase text-pale/80 ${scrolled ? 'mx-8 gap-8' : 'gap-10 absolute left-1/2 -translate-x-1/2'}`}>
              <a href="#hero" className="hover:text-gold transition-colors relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all group-hover:w-full"></span>
              </a>
              <a href="#shop" className="hover:text-gold transition-colors relative group">
                Shop
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all group-hover:w-full"></span>
              </a>
              <a href="#journaling" className="hover:text-gold transition-colors relative group">
                Stories
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all group-hover:w-full"></span>
              </a>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-6 text-pale">
              <Search className="w-5 h-5 cursor-pointer hover:text-gold transition-colors hidden sm:block" />
              <div className="relative cursor-pointer group">
                <ShoppingBag className="w-5 h-5 group-hover:text-gold transition-colors" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-gold rounded-full shadow-[0_0_5px_#D4AF37]"></span>
              </div>
              <button 
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-brand-red/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center"
          >
            <div className="flex flex-col gap-8 text-center font-serif text-3xl text-pale">
              <a href="#hero" onClick={() => setMobileMenuOpen(false)}>Home</a>
              <a href="#shop" onClick={() => setMobileMenuOpen(false)}>Collections</a>
              <a href="#journaling" onClick={() => setMobileMenuOpen(false)}>Journaling</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>Our Story</a>
            </div>
            
            <div className="mt-12 flex gap-6 text-pale/50">
                <span className="text-xs uppercase tracking-widest">Instagram</span>
                <span className="text-xs uppercase tracking-widest">Facebook</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;