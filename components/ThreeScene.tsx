import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows, PresentationControls, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

// Procedural 3D Notebook Component
const Notebook = (props: any) => {
  const group = useRef<THREE.Group>(null);
  
  // Animate the notebook slightly for a breathing effect
  useFrame((state) => {
    if (group.current) {
      const t = state.clock.getElapsedTime();
      group.current.rotation.z = Math.sin(t / 3) * 0.05;
      group.current.position.y = Math.sin(t / 2) * 0.1;
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      {/* Cover (Front) - Updated to Pale White #FAF9F6 with Texture roughness */}
      <mesh position={[0, 0, 0.15]} castShadow receiveShadow>
        <boxGeometry args={[3, 4.2, 0.05]} />
        <meshStandardMaterial color="#FAF9F6" roughness={0.8} metalness={0.1} />
      </mesh>
      
      {/* Pages block */}
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[2.9, 4.1, 0.25]} />
        <meshStandardMaterial color="#FDFBF7" roughness={0.9} />
      </mesh>
      
      {/* Cover (Back) */}
      <mesh position={[0, 0, -0.15]} castShadow receiveShadow>
        <boxGeometry args={[3, 4.2, 0.05]} />
        <meshStandardMaterial color="#FAF9F6" roughness={0.8} metalness={0.1} />
      </mesh>

      {/* Binding / Spine - Gold Accent */}
      <mesh position={[-1.5, 0, 0]} rotation={[0, 0, 0]}>
         <cylinderGeometry args={[0.15, 0.15, 4.2, 32]} />
         <meshStandardMaterial color="#D4AF37" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Label on Cover */}
      <mesh position={[0, 1, 0.18]}>
        <planeGeometry args={[1.5, 0.8]} />
        <meshStandardMaterial color="#FDFBF7" />
      </mesh>
      
      {/* Decorative elastic band - Brand Red */}
      <mesh position={[0, -1, 0.18]}>
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
            group.current.rotation.z = -0.5 + Math.sin(t / 2 + 1) * 0.05;
        }
    })

    return (
        <group ref={group} {...props}>
             <mesh castShadow>
                <cylinderGeometry args={[0.08, 0.08, 3, 32]} />
                <meshStandardMaterial color="#2D2D2D" roughness={0.3} metalness={0.5} />
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

const ThreeScene: React.FC = () => {
  return (
    <div className="w-full h-full absolute top-0 left-0 z-0">
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 8], fov: 40 }}>
        {/* Cinematic Lighting */}
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow color="#F3E5AB" />
        <pointLight position={[-10, -5, -10]} intensity={1} color="#5D0E0E" />
        <Environment preset="city" />
        
        {/* Atmospheric Particles (Dust Motes) */}
        <Sparkles count={50} scale={10} size={2} speed={0.4} opacity={0.5} color="#F3E5AB" />

        <PresentationControls
          global
          snap={true}
          speed={1.5}
          zoom={1}
          rotation={[0, 0.3, 0]}
          polar={[-Math.PI / 6, Math.PI / 6]}
          azimuth={[-Math.PI / 6, Math.PI / 6]}
        >
          <Float rotationIntensity={0.5} floatIntensity={1} floatingRange={[-0.2, 0.2]}>
            <Notebook position={[0, 0, 0]} rotation={[0.2, -0.3, 0]} />
            <Pen position={[2.2, -1, 0.5]} rotation={[0, 0, -0.5]} />
          </Float>
        </PresentationControls>
        
        <ContactShadows position={[0, -3, 0]} opacity={0.5} scale={20} blur={3} far={4.5} color="#2a0606" />
      </Canvas>
    </div>
  );
};

export default ThreeScene;