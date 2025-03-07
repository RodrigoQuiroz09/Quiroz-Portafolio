import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import CanvasLoader from "./Loader";
const Model = React.lazy(() => import("./Model"));
//<CanvasLoader />
const Scene = () => {
  return (
    <Canvas camera={{ position: [1, 5, 12.5], fov: 10 }} className="canvas">
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={0.5} />

        <group position={[0, -1, 0]}>
          <Model />
        </group>

        <OrbitControls
          maxDistance={15}
          minDistance={5}
          enableZoom={false}
          enablePan={false}
        />
      </Suspense>
    </Canvas>
  );
};

export default Scene;
