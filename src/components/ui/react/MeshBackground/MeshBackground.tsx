import { useIsMobile } from "@/hooks/useIsMobile";
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";
import staticMeshBackground from "@assets/static-mesh-bg.webp";

interface Props {
  color1?: string;
  color2?: string;
  color3?: string;
}

export const MeshBackground: React.FC<Props> = ({
  color1 = "#00D8C0",
  color2 = "#043B35",
  color3 = "#0E1718",
}) => {
  const getIsMobile = useIsMobile();
  const isMobile = getIsMobile();

  if (isMobile)
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <img
          width="100%"
          height="auto"
          src={staticMeshBackground.src}
          alt="Static Mesh Background"
        />
      </div>
    );

  return (
    <ShaderGradientCanvas
      style={{
        width: "100%",
        height: "100%",
      }}
      lazyLoad={true}
      fov={undefined}
      pixelDensity={1}
      pointerEvents="none"
    >
      <ShaderGradient
        animate="on"
        type="waterPlane"
        wireframe={false}
        shader="defaults"
        uTime={8}
        uSpeed={0.2}
        uStrength={1.5}
        uDensity={1.5}
        uFrequency={0}
        uAmplitude={0}
        positionX={0}
        positionY={0}
        positionZ={0}
        rotationX={50}
        rotationY={0}
        rotationZ={-60}
        color1={color1}
        color2={color2}
        color3={color3}
        reflection={0.1}
        // View (camera) props
        cAzimuthAngle={180}
        cPolarAngle={80}
        cDistance={2.8}
        cameraZoom={9.1}
        // Effect props
        lightType="3d"
        brightness={1}
        envPreset="city"
        grain="on"
        // Tool props
        toggleAxis={false}
        zoomOut={false}
        hoverState=""
        // Optional - if using transition features
        enableTransition={false}
      />
    </ShaderGradientCanvas>
  );
};

export default MeshBackground;
