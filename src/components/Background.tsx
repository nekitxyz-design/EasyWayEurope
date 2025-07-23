import React from 'react';
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10">
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

          // View (camera) props
          cAzimuthAngle={180}
          cPolarAngle={80}
          cDistance={1.4}
          cameraZoom={40.1}

          // Effect props
          lightType="3d"
          brightness={1}
          envPreset="city"
          grain="off"

          // Tool props
          toggleAxis={false}
          zoomOut={false}
          hoverState=""

          // Optional - if using transition features
          enableTransition={false}
        />
      </ShaderGradientCanvas>
    </div>
  );
};

export default Background; 