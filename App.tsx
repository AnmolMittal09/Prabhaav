import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import InteractiveViewer from './components/InteractiveViewer';
import InstagramFeed from './components/InstagramFeed';
import { CATEGORIES, PRODUCTS } from './constants';
import { motion } from 'framer-motion';
import { ArrowRight, Instagram } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="font-sans text-pale selection:bg-gold/30 selection:text-pale bg-brand-red">
      <Navigation />
      
      <Hero />

      {/* Categories Section */}
      <section id="shop" className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold font-bold tracking-widest text-xs uppercase">Curated Collections</span>
          <h2 className="text-3xl md:text-4xl font-serif mt-3 text-pale">Shop by Category</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, index) => (
            <motion.div 
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-80 rounded-2xl overflow-hidden mb-4 shadow-md group-hover:shadow-xl transition-all duration-300 border border-pale/10">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors z-10" />
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-6 left-6 z-20 text-pale">
                  <h3 className="text-xl font-serif">{cat.name}</h3>
                  <p className="text-xs opacity-90 mt-1">{cat.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Interactive 3D Section */}
      <InteractiveViewer />

      {/* Best Sellers */}
      <section className="py-24 bg-brand-red relative">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-red via-brand-red-light/20 to-brand-red opacity-50 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
           <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif text-pale">Best Sellers</h2>
                <p className="text-pale/60 mt-2">Favorites loved by the community.</p>
              </div>
              <a href="#" className="hidden md:flex items-center gap-2 text-gold font-medium hover:underline decoration-1 underline-offset-4">
                View All <ArrowRight className="w-4 h-4" />
              </a>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {PRODUCTS.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
           </div>
           
           <div className="mt-12 text-center md:hidden">
              <button className="px-6 py-3 border border-gold text-gold rounded-full w-full hover:bg-gold hover:text-brand-red transition-colors">
                View All Products
              </button>
           </div>
        </div>
      </section>

      {/* Journaling Inspiration - Pinterest Grid */}
      <section id="journaling" className="py-24 bg-brand-red relative overflow-hidden border-t border-pale/5">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red-light rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 opacity-40" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-red-light rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 opacity-40" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-pale">Journaling Inspiration</h2>
            <p className="text-pale/70 mt-3 max-w-lg mx-auto">Create beautiful spreads and find your daily flow. Join our community of dreamers.</p>
          </div>

          <div className="columns-1 md:columns-3 gap-6 space-y-6">
            <motion.div className="bg-white/10 border border-pale/10 p-4 rounded-xl shadow-lg break-inside-avoid backdrop-blur-md" whileHover={{ y: -5 }}>
              <img src="https://images.unsplash.com/photo-1578357078586-491e6fb5b530?auto=format&fit=crop&q=80&w=600" className="w-full rounded-lg mb-4 opacity-90" alt="Inspo" />
              <p className="text-sm font-serif italic text-pale/80">"The beginning is always today."</p>
            </motion.div>
            <motion.div className="bg-white/10 border border-pale/10 p-4 rounded-xl shadow-lg break-inside-avoid backdrop-blur-md" whileHover={{ y: -5 }}>
              <img src="https://images.unsplash.com/photo-1543615124-b52dc66c5d1e?auto=format&fit=crop&q=80&w=600" className="w-full rounded-lg mb-4 opacity-90" alt="Inspo" />
              <p className="text-sm font-serif italic text-pale/80">Minimalist weekly spread ideas.</p>
            </motion.div>
             <motion.div className="bg-white/10 border border-pale/10 p-4 rounded-xl shadow-lg break-inside-avoid backdrop-blur-md" whileHover={{ y: -5 }}>
              <div className="h-64 bg-brand-red-light/50 rounded-lg flex items-center justify-center mb-4">
                <span className="text-4xl font-serif text-gold">June</span>
              </div>
              <p className="text-sm font-serif italic text-pale/80">Cover page aesthetics.</p>
            </motion.div>
             <motion.div className="bg-white/10 border border-pale/10 p-4 rounded-xl shadow-lg break-inside-avoid backdrop-blur-md" whileHover={{ y: -5 }}>
              <img src="https://images.unsplash.com/photo-1515003508493-27774488340d?auto=format&fit=crop&q=80&w=600" className="w-full rounded-lg mb-4 opacity-90" alt="Inspo" />
              <p className="text-sm font-serif italic text-pale/80">Mood tracking with watercolors.</p>
            </motion.div>
            <motion.div className="bg-gold p-8 rounded-xl shadow-lg break-inside-avoid text-center text-brand-red flex flex-col items-center justify-center">
                <h3 className="font-serif text-2xl mb-2 font-bold">Join the Club</h3>
                <p className="text-sm opacity-90 mb-4 font-medium">Get weekly prompts & freebies.</p>
                <button className="px-4 py-2 bg-brand-red text-pale text-xs font-bold uppercase tracking-wider rounded-md hover:bg-brand-red-light transition-colors">Subscribe</button>
            </motion.div>
            <motion.div className="bg-white/10 border border-pale/10 p-4 rounded-xl shadow-lg break-inside-avoid backdrop-blur-md" whileHover={{ y: -5 }}>
              <img src="https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&q=80&w=600" className="w-full rounded-lg mb-4 opacity-90" alt="Inspo" />
              <p className="text-sm font-serif italic text-pale/80">Study notes essentials.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer / Instagram */}
      <footer className="bg-[#4A0404] text-pale pt-20 pb-10 border-t border-pale/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-2xl font-serif flex items-center gap-2">
              <Instagram className="w-6 h-6 text-gold" />
              Follow @prabhaav.official
            </h2>
            <a 
              href="https://www.instagram.com/prabhaav.official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 md:mt-0 px-6 py-2 border border-pale/20 rounded-full text-sm hover:bg-pale hover:text-brand-red transition-colors inline-block text-center"
            >
              View on Instagram
            </a>
          </div>

          {/* Dynamic Instagram Feed */}
          <InstagramFeed />

          <div className="border-t border-pale/10 pt-10 flex flex-col md:flex-row justify-between items-center text-sm text-pale/50">
            <div className="flex flex-col md:flex-row gap-8 mb-6 md:mb-0 text-center md:text-left">
              <a href="#" className="hover:text-pale transition-colors">Shipping & Returns</a>
              <a href="#" className="hover:text-pale transition-colors">Track Order</a>
              <a href="#" className="hover:text-pale transition-colors">FAQ</a>
              <a href="#" className="hover:text-pale transition-colors">Contact Us</a>
            </div>
            <p>&copy; 2026 Prabhaav Stationery. Made with ♥ in India.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;