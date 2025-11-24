import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import InteractiveViewer from './components/InteractiveViewer';
import { CATEGORIES, PRODUCTS, INSTAGRAM_FEED } from './constants';
import { motion } from 'framer-motion';
import { ArrowRight, Instagram, Heart } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="font-sans text-charcoal selection:bg-softbrown/30 selection:text-charcoal">
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
          <span className="text-softbrown font-bold tracking-widest text-xs uppercase">Curated Collections</span>
          <h2 className="text-3xl md:text-4xl font-serif mt-3 text-charcoal">Shop by Category</h2>
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
              <div className="relative h-80 rounded-2xl overflow-hidden mb-4 shadow-md group-hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors z-10" />
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-6 left-6 z-20 text-white">
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif text-charcoal">Best Sellers</h2>
                <p className="text-gray-500 mt-2">Favorites loved by the community.</p>
              </div>
              <a href="#" className="hidden md:flex items-center gap-2 text-softbrown font-medium hover:underline decoration-1 underline-offset-4">
                View All <ArrowRight className="w-4 h-4" />
              </a>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {PRODUCTS.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
           </div>
           
           <div className="mt-12 text-center md:hidden">
              <button className="px-6 py-3 border border-softbrown text-softbrown rounded-full w-full hover:bg-softbrown hover:text-white transition-colors">
                View All Products
              </button>
           </div>
        </div>
      </section>

      {/* Journaling Inspiration - Pinterest Grid */}
      <section id="journaling" className="py-24 bg-cream relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-nude/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blush/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal">Journaling Inspiration</h2>
            <p className="text-gray-500 mt-3 max-w-lg mx-auto">Create beautiful spreads and find your daily flow. Join our community of dreamers.</p>
          </div>

          <div className="columns-1 md:columns-3 gap-6 space-y-6">
            <motion.div className="bg-white p-4 rounded-xl shadow-sm break-inside-avoid" whileHover={{ y: -5 }}>
              <img src="https://picsum.photos/seed/j1/400/500" className="w-full rounded-lg mb-4" alt="Inspo" />
              <p className="text-sm font-serif italic text-gray-600">"The beginning is always today."</p>
            </motion.div>
            <motion.div className="bg-white p-4 rounded-xl shadow-sm break-inside-avoid" whileHover={{ y: -5 }}>
              <img src="https://picsum.photos/seed/j2/400/300" className="w-full rounded-lg mb-4" alt="Inspo" />
              <p className="text-sm font-serif italic text-gray-600">Minimalist weekly spread ideas.</p>
            </motion.div>
             <motion.div className="bg-white p-4 rounded-xl shadow-sm break-inside-avoid" whileHover={{ y: -5 }}>
              <div className="h-64 bg-nude/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-4xl font-serif text-softbrown">June</span>
              </div>
              <p className="text-sm font-serif italic text-gray-600">Cover page aesthetics.</p>
            </motion.div>
             <motion.div className="bg-white p-4 rounded-xl shadow-sm break-inside-avoid" whileHover={{ y: -5 }}>
              <img src="https://picsum.photos/seed/j3/400/600" className="w-full rounded-lg mb-4" alt="Inspo" />
              <p className="text-sm font-serif italic text-gray-600">Mood tracking with watercolors.</p>
            </motion.div>
            <motion.div className="bg-softbrown p-8 rounded-xl shadow-sm break-inside-avoid text-center text-white flex flex-col items-center justify-center">
                <h3 className="font-serif text-2xl mb-2">Join the Club</h3>
                <p className="text-sm opacity-90 mb-4">Get weekly prompts & freebies.</p>
                <button className="px-4 py-2 bg-white text-softbrown text-xs font-bold uppercase tracking-wider rounded-md">Subscribe</button>
            </motion.div>
            <motion.div className="bg-white p-4 rounded-xl shadow-sm break-inside-avoid" whileHover={{ y: -5 }}>
              <img src="https://picsum.photos/seed/j4/400/400" className="w-full rounded-lg mb-4" alt="Inspo" />
              <p className="text-sm font-serif italic text-gray-600">Study notes essentials.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer / Instagram */}
      <footer className="bg-charcoal text-cream pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-2xl font-serif flex items-center gap-2">
              <Instagram className="w-6 h-6" />
              Follow @prabhaav.co
            </h2>
            <button className="mt-4 md:mt-0 px-6 py-2 border border-white/20 rounded-full text-sm hover:bg-white hover:text-charcoal transition-colors">
              View on Instagram
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            {INSTAGRAM_FEED.map((post) => (
              <div key={post.id} className="group relative aspect-square overflow-hidden rounded-lg bg-gray-800">
                <img src={post.image} alt="Insta" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <Heart className="w-5 h-5 fill-white text-white" />
                  <span className="font-bold">{post.likes}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="flex flex-col md:flex-row gap-8 mb-6 md:mb-0 text-center md:text-left">
              <a href="#" className="hover:text-white transition-colors">Shipping & Returns</a>
              <a href="#" className="hover:text-white transition-colors">Track Order</a>
              <a href="#" className="hover:text-white transition-colors">FAQ</a>
              <a href="#" className="hover:text-white transition-colors">Contact Us</a>
            </div>
            <p>&copy; 2024 Prabhaav Stationery. Made with ♥ in India.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
