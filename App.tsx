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
    <div className="font-sans text-pale selection:bg-gold/30 selection:text-pale bg-brand-red relative">
      {/* Global Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[60] opacity-[0.07] mix-blend-overlay" 
           style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}>
      </div>

      <Navigation />
      
      <Hero />

      {/* Categories Section */}
      <section id="shop" className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold font-bold tracking-[0.2em] text-xs uppercase block mb-3">Curated Collections</span>
          <h2 className="text-4xl md:text-5xl font-serif text-pale">Shop by Category</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, index) => (
            <motion.div 
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer relative"
            >
              <div className="relative h-96 rounded-full overflow-hidden mb-4 shadow-2xl shadow-black/20 border border-pale/10 transform transition-all duration-700 group-hover:rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-red via-transparent to-transparent opacity-80 z-10" />
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
                <div className="absolute bottom-8 left-0 w-full text-center z-20 text-pale px-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-serif mb-2">{cat.name}</h3>
                  <p className="text-xs font-sans tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-gold">View Collection</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Interactive 3D Section */}
      <InteractiveViewer />

      {/* Best Sellers */}
      <section className="py-32 bg-brand-red relative overflow-hidden">
        {/* Decorative Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-red-light rounded-full blur-[150px] opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
           <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif text-pale mb-4">Best Sellers</h2>
                <p className="text-pale/60 max-w-sm text-lg font-light">Meticulously crafted pieces that our community cherishes the most.</p>
              </div>
              <a href="#" className="hidden md:flex items-center gap-2 text-gold font-medium uppercase text-xs tracking-widest hover:text-white transition-colors group">
                View All Products <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {PRODUCTS.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
           </div>
           
           <div className="mt-12 text-center md:hidden">
              <button className="px-8 py-4 border border-gold/30 text-gold rounded-full w-full hover:bg-gold hover:text-brand-red transition-all uppercase text-xs tracking-widest font-bold">
                View All Products
              </button>
           </div>
        </div>
      </section>

      {/* Journaling Inspiration - Mosaic Grid */}
      <section id="journaling" className="py-32 bg-[#520a0a] relative overflow-hidden border-t border-pale/5">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-pale mb-4">The Art of Journaling</h2>
            <p className="text-pale/70 text-lg font-light">Find your flow in the pages of Prabhaav.</p>
          </div>

          <div className="columns-1 md:columns-3 gap-8 space-y-8">
            <motion.div className="relative group overflow-hidden rounded-2xl break-inside-avoid" whileHover={{ scale: 1.02 }}>
              <img src="https://images.unsplash.com/photo-1578357078586-491e6fb5b530?auto=format&fit=crop&q=80&w=600" className="w-full object-cover" alt="Inspo" />
              <div className="absolute inset-0 bg-brand-red/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                 <p className="font-serif italic text-xl text-pale">Daily Reflections</p>
              </div>
            </motion.div>

            <motion.div className="bg-brand-red-light p-8 rounded-2xl break-inside-avoid text-center border border-pale/10">
                <h3 className="font-serif text-3xl mb-4 text-gold">Join the Club</h3>
                <p className="text-pale/80 mb-6 font-light">Weekly prompts, exclusive stickers, and a community of dreamers.</p>
                <div className="flex gap-2">
                    <input type="email" placeholder="Your email" className="bg-brand-red border border-pale/20 rounded-lg px-4 py-2 w-full text-sm text-pale placeholder:text-pale/30 focus:outline-none focus:border-gold" />
                    <button className="bg-gold text-brand-red px-4 py-2 rounded-lg font-bold hover:bg-white transition-colors">Join</button>
                </div>
            </motion.div>

            <motion.div className="relative group overflow-hidden rounded-2xl break-inside-avoid" whileHover={{ scale: 1.02 }}>
              <img src="https://images.unsplash.com/photo-1543615124-b52dc66c5d1e?auto=format&fit=crop&q=80&w=600" className="w-full object-cover" alt="Inspo" />
            </motion.div>
             
            <motion.div className="relative group overflow-hidden rounded-2xl break-inside-avoid" whileHover={{ scale: 1.02 }}>
              <div className="aspect-[4/5] bg-[#E8DCC4] flex items-center justify-center p-8 text-center">
                <div>
                    <span className="text-brand-red text-6xl font-serif block mb-2">“</span>
                    <p className="text-brand-red font-serif text-xl italic leading-relaxed">
                        Fill your paper with the breathings of your heart.
                    </p>
                    <span className="text-brand-red text-xs font-bold uppercase tracking-widest mt-4 block">— William Wordsworth</span>
                </div>
              </div>
            </motion.div>

            <motion.div className="relative group overflow-hidden rounded-2xl break-inside-avoid" whileHover={{ scale: 1.02 }}>
              <img src="https://images.unsplash.com/photo-1515003508493-27774488340d?auto=format&fit=crop&q=80&w=600" className="w-full object-cover" alt="Inspo" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3D0808] text-pale pt-24 pb-10 border-t border-pale/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-10">
            <div>
                 <div className="text-3xl font-serif font-semibold tracking-wider text-pale flex items-center gap-2 mb-6">
                    <span className="w-3 h-3 rounded-full bg-gold block shadow-[0_0_15px_rgba(212,175,55,0.6)]"></span>
                    PRABHAAV
                </div>
                <p className="text-pale/60 max-w-xs font-light leading-relaxed">
                    Premium stationery designed for the mindful creators. 
                    Made with recycled paper and sustainable practices in Jaipur, India.
                </p>
            </div>
            
            <div className="flex gap-4">
                 <a href="#" className="w-12 h-12 rounded-full border border-pale/20 flex items-center justify-center hover:bg-gold hover:text-brand-red hover:border-gold transition-all duration-300">
                    <Instagram className="w-5 h-5" />
                 </a>
                 <a href="#" className="w-12 h-12 rounded-full border border-pale/20 flex items-center justify-center hover:bg-gold hover:text-brand-red hover:border-gold transition-all duration-300">
                    <ExternalLink className="w-5 h-5" />
                 </a>
            </div>
          </div>

          <InstagramFeed />

          <div className="border-t border-pale/5 pt-10 flex flex-col md:flex-row justify-between items-center text-xs text-pale/40 uppercase tracking-widest">
            <div className="flex gap-6 mb-6 md:mb-0">
              <a href="#" className="hover:text-gold transition-colors">Shipping</a>
              <a href="#" className="hover:text-gold transition-colors">Privacy</a>
              <a href="#" className="hover:text-gold transition-colors">Contact</a>
            </div>
            <p>&copy; 2026 Prabhaav Stationery.</p>
          </div>
        </div>
      </footer>
      
      {/* Sticky Bottom Bar for Mobile (Optional UX enhancement) */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-lg border border-pale/10 rounded-full px-6 py-3 flex items-center gap-4 z-40 shadow-2xl">
        <ShoppingBag className="w-5 h-5 text-gold" />
        <div className="h-4 w-[1px] bg-pale/20"></div>
        <span className="text-xs font-bold uppercase tracking-widest">Shop Now</span>
      </div>
    </div>
  );
};

// Import necessary icon for footer
import { ShoppingBag, ExternalLink } from 'lucide-react';

export default App;