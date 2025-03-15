import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import CanvasLoader from '../Loader';

const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf');

  return (
    <primitive 
      object={earth.scene} 
      scale={1.8} // Reduced size for performance 
      position-y={0} 
      rotation-y={0} 
    />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      frameloop="demand" // Renders only when needed, better for performance
      shadows
      dpr={[1, 1.5]} // Adjusts resolution dynamically for smoother rendering
      performance={{ min: 0.5, max: 1 }} // Helps reduce unnecessary rendering
      camera={{
        fov: 40,
        near: 0.1,
        far: 100, // Reduced to optimize rendering
        position: [-3, 2, 5],
      }}
      gl={{ antialias: true, powerPreference: 'low-power' }} // Optimized GPU settings
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.6} // Smoother rotation
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;
