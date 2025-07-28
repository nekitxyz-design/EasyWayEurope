import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';
import * as THREE from 'three';

interface FluidGlassBackgroundProps {
  mode?: 'lens' | 'bar' | 'cube';
  isScrolled?: boolean;
}

function GlassObject({ mode = 'lens', isScrolled = false }: { mode: string; isScrolled: boolean }) {
  const ref = useRef<THREE.Mesh>(null!);
  const { viewport, pointer } = useThree();

  useFrame((state, delta) => {
    const { camera } = state;
    const v = viewport.getCurrentViewport(camera, [0, 0, 15]);

    if (ref.current) {
      // Показываем объект только при скролле
      if (isScrolled) {
        ref.current.visible = true;
        // Движение в нижней части экрана
        const destX = (pointer.x * v.width) / 2;
        const destY = -v.height / 2 + 0.2;
        
        // Плавное движение
        ref.current.position.x += (destX - ref.current.position.x) * 0.1;
        ref.current.position.y += (destY - ref.current.position.y) * 0.1;
      } else {
        ref.current.visible = false;
      }
    }
  });

  return (
    <mesh
      ref={ref}
      scale={0.2}
      rotation-x={Math.PI / 2}
      visible={false}
    >
      {mode === 'lens' && <cylinderGeometry args={[1, 1, 2, 32]} />}
      {mode === 'cube' && <boxGeometry args={[2, 2, 2]} />}
      {mode === 'bar' && <boxGeometry args={[4, 0.5, 0.5]} />}
      <meshStandardMaterial 
        color="#ffffff" 
        transparent 
        opacity={0.15}
        metalness={0.9}
        roughness={0.1}
      />
    </mesh>
  );
}

export default function FluidGlassBackground({ 
  mode = 'lens', 
  isScrolled = false 
}: FluidGlassBackgroundProps) {
  return (
    <div className="fixed inset-0 z-0">
      {/* Оригинальный фон */}
      <ShaderGradientCanvas
        style={{
          width: '100%',
          height: '100%',
        }}
        lazyLoad={undefined}
        fov={100}
        pixelDensity={1}
        pointerEvents="none"
      >
        <ShaderGradient
          animate="on"
          type="sphere"
          wireframe={false}
          shader="defaults"
          uTime={8}
          uSpeed={0.2}
          uStrength={1.5}
          uDensity={1.5}
          uFrequency={0}
          uAmplitude={0.6}
          positionX={0}
          positionY={0}
          positionZ={0}
          rotationX={50}
          rotationY={0}
          rotationZ={-60}
          color1="#0024E9"
          color2="#314199"
          color3="#111111"
          reflection={1.1}
          cAzimuthAngle={180}
          cPolarAngle={80}
          cDistance={1.4}
          cameraZoom={40.1}
          lightType="3d"
          brightness={1}
          envPreset="city"
          grain="off"
          toggleAxis={false}
          zoomOut={false}
          hoverState=""
          enableTransition={false}
        />
      </ShaderGradientCanvas>
      
      {/* Эффект React Bits поверх */}
      <div className="absolute inset-0 z-10">
        <Canvas camera={{ position: [0, 0, 20], fov: 15 }} gl={{ alpha: true }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <GlassObject mode={mode} isScrolled={isScrolled} />
        </Canvas>
      </div>
    </div>
  );
} 