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
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen 
            ? 'bg-brand-red/90 backdrop-blur-md shadow-lg border-b border-pale/10' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-serif font-semibold tracking-wider text-pale cursor-pointer flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-gold block"></span>
            PRABHAAV
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 items-center text-sm font-medium tracking-wide text-pale/80">
            <a href="#hero" className="hover:text-gold transition-colors">Home</a>
            <a href="#shop" className="hover:text-gold transition-colors">Shop</a>
            <a href="#journaling" className="hover:text-gold transition-colors">Journaling</a>
            <a href="#about" className="hover:text-gold transition-colors">Our Story</a>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-6 text-pale">
            <Search className="w-5 h-5 cursor-pointer hover:text-gold transition-colors hidden sm:block" />
            <div className="relative cursor-pointer hover:text-gold transition-colors">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-gold rounded-full border border-brand-red"></span>
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 w-full bg-brand-red/95 backdrop-blur-xl z-40 border-b border-pale/10 md:hidden"
          >
            <div className="flex flex-col p-6 gap-4 text-center font-serif text-lg text-pale">
              <a href="#hero" onClick={() => setMobileMenuOpen(false)}>Home</a>
              <a href="#shop" onClick={() => setMobileMenuOpen(false)}>Shop Collections</a>
              <a href="#journaling" onClick={() => setMobileMenuOpen(false)}>Inspiration</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>About Prabhaav</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;