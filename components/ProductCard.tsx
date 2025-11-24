import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative bg-white/40 backdrop-blur-sm border border-white/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
    >
      {/* Badge */}
      {product.isNew && (
        <span className="absolute top-3 left-3 bg-softbrown text-cream text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider z-10">
          New Arrival
        </span>
      )}

      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        {/* Quick Add Button */}
        <button className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg translate-y-12 group-hover:translate-y-0 transition-transform duration-300 text-softbrown hover:bg-softbrown hover:text-white">
          <Plus className="w-5 h-5" />
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">{product.category}</div>
        <h3 className="text-lg font-serif font-medium text-charcoal mb-1">{product.name}</h3>
        <div className="flex justify-between items-end">
          <p className="text-sm text-gray-500 line-clamp-1">{product.description}</p>
          <span className="font-semibold text-softbrown">₹{product.price}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
