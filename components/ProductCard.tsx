import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const ref = useRef<HTMLDivElement>(null);

  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div 
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group relative perspective-1000"
    >
      <div 
        className="relative bg-white/5 backdrop-blur-md border border-pale/10 rounded-2xl overflow-hidden shadow-xl transition-all duration-300"
        style={{ transform: "translateZ(0px)" }}
      >
        {/* Badge */}
        {product.isNew && (
            <span className="absolute top-4 left-4 bg-gold text-brand-red text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest z-20 shadow-lg">
            New
            </span>
        )}

        {/* Image Container */}
        <div className="relative h-72 overflow-hidden bg-brand-red-light">
            <motion.div 
                className="w-full h-full"
                style={{ transform: "translateZ(20px)" }} // Pop out effect
            >
                <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
            </motion.div>
            
            {/* Quick Add Button */}
            <button className="absolute bottom-4 right-4 w-12 h-12 bg-pale/90 backdrop-blur rounded-full flex items-center justify-center shadow-2xl translate-y-16 group-hover:translate-y-0 transition-transform duration-500 text-brand-red hover:bg-gold z-30">
            <Plus className="w-5 h-5" />
            </button>
        </div>

        {/* Content */}
        <div className="p-6 relative bg-gradient-to-t from-black/20 to-transparent">
            <div className="text-[10px] text-gold uppercase tracking-[0.2em] mb-2 opacity-80">{product.category}</div>
            <h3 className="text-xl font-serif font-medium text-pale mb-2">{product.name}</h3>
            <div className="flex justify-between items-end border-t border-pale/10 pt-3 mt-2">
                <p className="text-xs text-pale/60 line-clamp-1 max-w-[60%] font-light">{product.description}</p>
                <span className="font-serif text-lg text-gold">₹{product.price}</span>
            </div>
        </div>
        
        {/* Shine Effect */}
        <div className="absolute inset-0 z-40 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ mixBlendMode: 'overlay' }} />
      </div>
    </motion.div>
  );
};

export default ProductCard;