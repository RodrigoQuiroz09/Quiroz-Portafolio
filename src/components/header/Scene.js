import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Model from "./Model";

const Scene = () => {
  return (
    <Canvas
      camera={{ position: [0, 6, 15.25], fov: 15 }}
      style={{
        backgroundColor: "#1f1f38",
        width: "50rem",
        height: "50rem",
      }}
    >
      <ambientLight intensity={0.25} />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={0.4} />
      <Suspense fallback={null}>
        <Model position={[-0.125, 0, 0]} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default Scene;
