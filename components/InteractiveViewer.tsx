import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import { motion } from 'framer-motion';

const InteractiveBook = () => {
    return (
        <group>
            <mesh castShadow receiveShadow>
                <boxGeometry args={[3, 4.2, 0.3]} />
                <meshStandardMaterial color="#D3A29D" roughness={0.5} />
            </mesh>
            <mesh position={[0, 0, 0.16]} castShadow>
                 <planeGeometry args={[2, 1]} />
                 <meshStandardMaterial color="#FDFBF7" />
            </mesh>
            {/* Pages side texture simulation */}
            <mesh position={[1.51, 0, 0]} rotation={[0, Math.PI/2, 0]}>
                <planeGeometry args={[0.3, 4.2]} />
                <meshStandardMaterial color="#fff" />
            </mesh>
        </group>
    )
}

const InteractiveViewer: React.FC = () => {
  return (
    <section className="py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        <div className="order-2 md:order-1 h-[500px] w-full bg-nude/20 rounded-3xl overflow-hidden relative cursor-move">
            <div className="absolute top-4 left-4 z-10 bg-white/50 px-3 py-1 rounded-full text-xs font-bold text-softbrown backdrop-blur-md pointer-events-none">
                360° View - Drag to Rotate
            </div>
            <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 50 }}>
                <Stage environment="city" intensity={0.6}>
                    <InteractiveBook />
                </Stage>
                <OrbitControls autoRotate autoRotateSpeed={2} enableZoom={false} />
            </Canvas>
        </div>

        <div className="order-1 md:order-2">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-serif text-charcoal mb-6"
            >
                The Blush <span className="italic text-softbrown">Hardcover</span>
            </motion.h2>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-gray-600 mb-8 leading-relaxed"
            >
                Experience the premium texture of our best-selling hardcover notebook. 
                Featuring 120gsm ivory paper, lay-flat binding, and a smooth matte finish 
                that feels like a dream in your hands. Perfect for bullet journaling, 
                sketching, or planning your next big idea.
            </motion.p>

            <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
                 className="space-y-4"
            >
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#D3A29D] border-2 border-white shadow-sm"></div>
                    <div>
                        <p className="font-semibold text-charcoal">Blush Pink</p>
                        <p className="text-xs text-gray-500">Limited Edition Color</p>
                    </div>
                </div>
                
                <div className="pt-6">
                    <button className="w-full md:w-auto px-10 py-3 bg-charcoal text-white rounded-xl hover:bg-softbrown transition-colors">
                        Customize & Buy - ₹1,499
                    </button>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveViewer;
