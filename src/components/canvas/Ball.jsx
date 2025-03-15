import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import CanvasLoader from '../Loader';

const Earth = () => {
  const earth = useGLTF('/planet/scene.glb'); // GLB use karo (faster & lightweight)
  return <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />;
};

const EarthCanvas = () => {
  return (
    <Canvas
      frameloop="demand" // Optimize rendering (better performance)
      shadows
      dpr={[1, 1.5]} // Adjust resolution for better performance
      camera={{
        fov: 35,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.5} // Slow rotation to avoid high GPU usage
          enableZoom={false}
          enableDamping={true} // Smooth rotation
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
