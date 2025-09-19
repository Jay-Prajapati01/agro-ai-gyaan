import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Text3D, Environment, Stars } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

// Agricultural 3D Models
const Seed = ({ position, color }: { position: [number, number, number]; color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.2} />
      </mesh>
    </Float>
  );
};

const Plant = ({ position }: { position: [number, number, number] }) => {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <group position={position}>
        {/* Stem */}
        <mesh position={[0, -0.5, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 1]} />
          <meshStandardMaterial color="#2d7d0f" />
        </mesh>
        {/* Leaves */}
        <mesh position={[-0.3, 0, 0]} rotation={[0, 0, Math.PI / 6]}>
          <planeGeometry args={[0.6, 0.3]} />
          <meshStandardMaterial color="#4ade80" side={THREE.DoubleSide} />
        </mesh>
        <mesh position={[0.3, 0.2, 0]} rotation={[0, 0, -Math.PI / 6]}>
          <planeGeometry args={[0.6, 0.3]} />
          <meshStandardMaterial color="#4ade80" side={THREE.DoubleSide} />
        </mesh>
      </group>
    </Float>
  );
};

const WeatherIcon = ({ position, type }: { position: [number, number, number]; type: 'sun' | 'cloud' | 'rain' }) => {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={3} rotationIntensity={2} floatIntensity={3}>
      <group ref={meshRef} position={position}>
        {type === 'sun' && (
          <mesh>
            <sphereGeometry args={[0.4]} />
            <meshStandardMaterial color="#fbbf24" emissive="#fbbf24" emissiveIntensity={0.3} />
          </mesh>
        )}
        {type === 'cloud' && (
          <>
            <mesh position={[0, 0, 0]}>
              <sphereGeometry args={[0.3]} />
              <meshStandardMaterial color="#e5e7eb" />
            </mesh>
            <mesh position={[-0.2, 0.1, 0]}>
              <sphereGeometry args={[0.25]} />
              <meshStandardMaterial color="#e5e7eb" />
            </mesh>
            <mesh position={[0.2, 0.1, 0]}>
              <sphereGeometry args={[0.25]} />
              <meshStandardMaterial color="#e5e7eb" />
            </mesh>
          </>
        )}
        {type === 'rain' && (
          <>
            <mesh position={[0, 0, 0]}>
              <sphereGeometry args={[0.3]} />
              <meshStandardMaterial color="#6b7280" />
            </mesh>
            {Array.from({ length: 6 }).map((_, i) => (
              <mesh key={i} position={[Math.random() * 0.6 - 0.3, -0.5 - Math.random() * 0.5, Math.random() * 0.6 - 0.3]}>
                <cylinderGeometry args={[0.02, 0.02, 0.2]} />
                <meshStandardMaterial color="#3b82f6" />
              </mesh>
            ))}
          </>
        )}
      </group>
    </Float>
  );
};

const TechSphere = ({ position, color }: { position: [number, number, number]; color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2.5}>
      <mesh ref={meshRef} position={position}>
        <icosahedronGeometry args={[0.4, 1]} />
        <meshStandardMaterial 
          color={color} 
          emissive={color} 
          emissiveIntensity={0.2}
          wireframe={true}
        />
      </mesh>
    </Float>
  );
};

const ParticleField = () => {
  const particlesRef = useRef<THREE.Points>(null);
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  const particles = new Float32Array(200 * 3);
  for (let i = 0; i < 200; i++) {
    particles[i * 3] = (Math.random() - 0.5) * 20;
    particles[i * 3 + 1] = (Math.random() - 0.5) * 20;
    particles[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={particles} count={200} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#4ade80" transparent opacity={0.6} />
    </points>
  );
};

export const Scene3D = () => {
  return (
    <div className="scene-container">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <Suspense fallback={null}>
          <Environment preset="night" />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          
          {/* Lighting */}
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#4ade80" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
          
          {/* Agricultural Elements */}
          <Seed position={[-4, 2, -2]} color="#4ade80" />
          <Seed position={[4, -2, 2]} color="#22c55e" />
          <Plant position={[-3, -1, 3]} />
          <Plant position={[3, 1, -3]} />
          
          {/* Weather Icons */}
          <WeatherIcon position={[-2, 3, 1]} type="sun" />
          <WeatherIcon position={[2, -3, -1]} type="cloud" />
          <WeatherIcon position={[0, 2, 3]} type="rain" />
          
          {/* Tech Elements */}
          <TechSphere position={[-5, 0, 0]} color="#a855f7" />
          <TechSphere position={[5, 0, 0]} color="#3b82f6" />
          <TechSphere position={[0, 0, -5]} color="#f59e0b" />
          
          {/* Particle Field */}
          <ParticleField />
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            autoRotate 
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};