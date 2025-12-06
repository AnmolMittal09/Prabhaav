import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows, PresentationControls } from '@react-three/drei';
import * as THREE from 'three';

// Procedural 3D Notebook Component
const Notebook = (props: any) => {
  const group = useRef<THREE.Group>(null);
  
  // Animate the notebook slightly
  useFrame((state) => {
    if (group.current) {
      const t = state.clock.getElapsedTime();
      group.current.rotation.z = Math.sin(t / 4) * 0.1;
      group.current.rotation.y = Math.sin(t / 2) * 0.1;
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      {/* Cover (Front) - Updated to Pale White #FAF9F6 */}
      <mesh position={[0, 0, 0.15]} castShadow receiveShadow>
        <boxGeometry args={[3, 4.2, 0.05]} />
        <meshStandardMaterial color="#FAF9F6" roughness={0.6} metalness={0.1} />
      </mesh>
      
      {/* Pages block */}
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[2.9, 4.1, 0.25]} />
        <meshStandardMaterial color="#FDFBF7" roughness={0.9} />
      </mesh>
      
      {/* Cover (Back) - Updated to Pale White #FAF9F6 */}
      <mesh position={[0, 0, -0.15]} castShadow receiveShadow>
        <boxGeometry args={[3, 4.2, 0.05]} />
        <meshStandardMaterial color="#FAF9F6" roughness={0.6} metalness={0.1} />
      </mesh>

      {/* Binding / Spine */}
      <mesh position={[-1.5, 0, 0]} rotation={[0, 0, 0]}>
         <cylinderGeometry args={[0.15, 0.15, 4.2, 32]} />
         <meshStandardMaterial color="#C5A059" metalness={0.6} roughness={0.2} />
      </mesh>

      {/* Label on Cover */}
      <mesh position={[0, 1, 0.18]}>
        <planeGeometry args={[1.5, 0.8]} />
        <meshStandardMaterial color="#FDFBF7" />
      </mesh>
      
      {/* Decorative elastic band - Brand Red */}
      <mesh position={[0, -1, 0.18]}>
        <boxGeometry args={[3.05, 0.1, 0.02]} />
        <meshStandardMaterial color="#5D0E0E" />
      </mesh>
    </group>
  );
};

const Pen = (props: any) => {
    return (
        <group {...props}>
             <mesh castShadow>
                <cylinderGeometry args={[0.08, 0.08, 3, 32]} />
                <meshStandardMaterial color="#2D2D2D" roughness={0.3} metalness={0.5} />
            </mesh>
            <mesh position={[0, 1.5, 0]}>
                 <cylinderGeometry args={[0.08, 0.08, 0.5, 32]} />
                 <meshStandardMaterial color="#C5A059" metalness={0.8} roughness={0.2} />
            </mesh>
        </group>
    )
}

const ThreeScene: React.FC = () => {
  return (
    <div className="w-full h-full absolute top-0 left-0 z-0">
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.7} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={2048} intensity={2} castShadow />
        <Environment preset="city" />
        
        <PresentationControls
          global
          snap={true}
          rotation={[0, 0.3, 0]}
          polar={[-Math.PI / 4, Math.PI / 4]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}
        >
          <Float rotationIntensity={0.4} floatIntensity={1} floatingRange={[-0.2, 0.2]}>
            <Notebook position={[0, 0, 0]} rotation={[0.2, -0.3, 0]} />
            <Pen position={[2, -1, 0.5]} rotation={[0, 0, -0.5]} />
          </Float>
        </PresentationControls>
        
        <ContactShadows position={[0, -3, 0]} opacity={0.6} scale={20} blur={2.5} far={4} color="#000000" />
      </Canvas>
    </div>
  );
};

export default ThreeScene;