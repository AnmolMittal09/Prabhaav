import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows, PresentationControls, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

// Procedural 3D Notebook Component
const Notebook = (props: any) => {
  const group = useRef<THREE.Group>(null);
  
  // Floating animation
  useFrame((state) => {
    if (group.current) {
      const t = state.clock.getElapsedTime();
      // Gentle floating motion
      group.current.position.y = props.position[1] + Math.sin(t / 2) * 0.15;
      
      // Gentle multi-axis rotation for "alive" feel
      group.current.rotation.z = Math.sin(t / 3) * 0.02;
      group.current.rotation.y = Math.sin(t / 4) * 0.08; // Subtle side-to-side
      group.current.rotation.x = Math.sin(t / 5) * 0.03; // Subtle forward-back
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      {/* Cover (Front) - Pale White Texture */}
      <mesh position={[0, 0, 0.15]} castShadow receiveShadow>
        <boxGeometry args={[3, 4.2, 0.05]} />
        <meshStandardMaterial color="#FAF9F6" roughness={0.6} metalness={0.1} />
      </mesh>
      
      {/* Pages block */}
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[2.9, 4.1, 0.25]} />
        <meshStandardMaterial color="#FFFBF0" roughness={0.9} />
      </mesh>
      
      {/* Cover (Back) */}
      <mesh position={[0, 0, -0.15]} castShadow receiveShadow>
        <boxGeometry args={[3, 4.2, 0.05]} />
        <meshStandardMaterial color="#FAF9F6" roughness={0.6} metalness={0.1} />
      </mesh>

      {/* Binding / Spine - Brushed Gold */}
      <mesh position={[-1.5, 0, 0]} rotation={[0, 0, 0]}>
         <cylinderGeometry args={[0.15, 0.15, 4.2, 32]} />
         <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.3} />
      </mesh>

      {/* Label on Cover - Embossed Effect */}
      <mesh position={[0, 0.8, 0.18]}>
        <planeGeometry args={[1.2, 0.6]} />
        <meshStandardMaterial color="#FDFBF7" roughness={0.4} />
      </mesh>
      
      {/* Decorative elastic band - Brand Red */}
      <mesh position={[0, -1.2, 0.18]}>
        <boxGeometry args={[3.05, 0.1, 0.02]} />
        <meshStandardMaterial color="#5D0E0E" roughness={0.5} />
      </mesh>
    </group>
  );
};

const Pen = (props: any) => {
    const group = useRef<THREE.Group>(null);
    useFrame((state) => {
        if(group.current) {
            const t = state.clock.getElapsedTime();
            
            // Pen floats independently nearby with complex rotation
            // Base Z is -0.5 (approx -28 degrees)
            group.current.rotation.z = -0.5 + Math.sin(t * 0.5) * 0.1;
            group.current.position.y = props.position[1] + Math.cos(t * 0.5) * 0.05;

            // Add subtle secondary rotations
            group.current.rotation.x = Math.sin(t * 0.3) * 0.05;
            group.current.rotation.y = Math.sin(t * 0.4) * 0.05;
        }
    })

    return (
        <group ref={group} {...props}>
             <mesh castShadow>
                <cylinderGeometry args={[0.08, 0.08, 3, 32]} />
                <meshStandardMaterial color="#1a1a1a" roughness={0.2} metalness={0.8} />
            </mesh>
            {/* Gold accents on pen */}
            <mesh position={[0, 1.5, 0]}>
                 <cylinderGeometry args={[0.08, 0.08, 0.5, 32]} />
                 <meshStandardMaterial color="#D4AF37" metalness={1} roughness={0.1} />
            </mesh>
            <mesh position={[0, -1.4, 0]}>
                 <cylinderGeometry args={[0.07, 0.04, 0.2, 32]} />
                 <meshStandardMaterial color="#D4AF37" metalness={1} roughness={0.1} />
            </mesh>
        </group>
    )
}

const SceneContent = () => {
    // Responsive logic inside the canvas context
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Desktop: Shift right (x=3). Mobile: Center (x=0) and lower (y=-1)
    const notebookPos: [number, number, number] = isMobile ? [0, -0.5, 0] : [3, 0, 0];
    const penPos: [number, number, number] = isMobile ? [1.5, -1, 0.5] : [5.2, -1, 0.5];
    const scale = isMobile ? 0.8 : 1.1;

    return (
        <PresentationControls
          global
          snap={false}
          speed={1.5}
          zoom={1}
          rotation={[0, 0, 0]}
          polar={[-Math.PI / 6, Math.PI / 6]} // Vertical movement limits
          azimuth={[-Math.PI / 6, Math.PI / 6]} // Horizontal movement limits
        >
          <Float rotationIntensity={0.5} floatIntensity={0.5} floatingRange={[-0.1, 0.1]}>
             <group scale={scale} rotation={[0.1, -0.4, 0.05]}> 
                <Notebook position={notebookPos} />
                <Pen position={penPos} rotation={[0, 0, -0.5]} />
             </group>
          </Float>
        </PresentationControls>
    );
}

const ThreeScene: React.FC = () => {
  return (
    <div className="w-full h-full absolute top-0 left-0 z-0">
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 8], fov: 45 }}>
        {/* Cinematic High-Contrast Lighting */}
        <ambientLight intensity={0.4} color="#FFE4E1" />
        
        {/* Main Key Light - Warm Gold */}
        <spotLight 
            position={[5, 5, 5]} 
            angle={0.25} 
            penumbra={1} 
            intensity={2} 
            castShadow 
            color="#FFF5E0" 
            shadow-bias={-0.0001}
        />
        
        {/* Rim Light - Cool Blueish to contrast red */}
        <pointLight position={[-5, 5, -5]} intensity={0.5} color="#E0F7FA" />
        
        {/* Fill Light - Reddish from bottom */}
        <pointLight position={[0, -5, 2]} intensity={0.8} color="#800000" />

        <Environment preset="city" />
        
        {/* Floating dust particles for atmosphere */}
        <Sparkles count={40} scale={12} size={3} speed={0.4} opacity={0.4} color="#F3E5AB" />

        <SceneContent />
        
        {/* Ground shadow to ground the floating objects slightly */}
        <ContactShadows position={[3, -4, 0]} opacity={0.4} scale={20} blur={2.5} far={5} color="#1a0505" />
      </Canvas>
    </div>
  );
};

export default ThreeScene;