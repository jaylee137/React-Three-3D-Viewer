import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import './App.css'

function Model() {
  // const group = useRef();
  const { scene } = useGLTF('704_01.glb'); // Replace with your GLB model path

  // Set up rotating animation
  // useFrame(() => {
  //   group.current.rotation.y += 0.01; // Adjust rotation speed as needed
  // });

  return <primitive object={scene} />;
}

// function Scene() {
//   const colorMap = useLoader(TextureLoader, '704_01-.webp');
//   return (
//     <>
//       <ambientLight intensity={0.2} />
//       <directionalLight />
//       <mesh>
//         <sphereGeometry args={[1, 32, 32]} />
//         <meshStandardMaterial map={colorMap} />
//       </mesh>
//     </>
//   )
// }

function App() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 0.4], fov: 45 }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]}/>
      <directionalLight  color={0xffffff} intensity={Math.PI * 1.5} castShadow/>
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}

export default App;
