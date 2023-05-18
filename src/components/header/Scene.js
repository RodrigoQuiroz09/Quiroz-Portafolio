import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";

import CanvasLoader from "./Loader";
const Model = React.lazy(() => import("./Model"));
//<CanvasLoader />
const Scene = () => {
  return (
    <Canvas camera={{ position: [1, 5, 12.5], fov: 11 }} className="canvas">
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={0.5} />
        <ambientLight intensity={0.1} />
        <directionalLight intensity={0.4} />
        <group position={[0, -1, 0]}>
          <Model />
        </group>

        <OrbitControls />
      </Suspense>
    </Canvas>
  );
};

export default Scene;
