import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader } from '@react-three/drei';
import Experience from './components/Experience';
import Overlay from './components/Overlay';

const App: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-arix-black">
      <Canvas
        shadows
        // Camera at z=14 is the sweet spot: immersive but fits the tree well on most screens
        camera={{ position: [0, 0, 14], fov: 45 }}
        dpr={[1, 2]} 
        gl={{ 
          antialias: false, 
          stencil: false,
          depth: true,
          powerPreference: "high-performance"
        }}
      >
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
      </Canvas>
      
      {/* Loading Overlay */}
      <Loader 
        containerStyles={{ backgroundColor: '#0a0f0d' }}
        innerStyles={{ width: '200px', height: '10px', backgroundColor: '#333' }}
        barStyles={{ backgroundColor: '#D4AF37', height: '100%' }}
        dataStyles={{ color: '#D4AF37', fontFamily: 'Cinzel' }}
        dataInterpolation={(p) => `Loading Luxury ${p.toFixed(0)}%`}
      />

      {/* UI Overlay */}
      <Overlay />
    </div>
  );
};

export default App;