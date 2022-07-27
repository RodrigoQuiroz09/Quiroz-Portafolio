import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useLoading, BallTriangle } from "@agney/react-loading";
const Model = React.lazy(() => import("./Model"));
//"#1f1f38"
const Scene = () => {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <BallTriangle width="50" />,
  });
  return (
    <Suspense fallback={<section {...containerProps}>{indicatorEl}</section>}>
      <Canvas camera={{ position: [1, 5, 12.5], fov: 11 }} className="canvas">
        <ambientLight intensity={0.5} />
        <ambientLight intensity={0.1} />
        <directionalLight intensity={0.4} />
        <group position={[0, -1, 0]}>
          <Model />
        </group>

        <OrbitControls />
      </Canvas>
    </Suspense>
  );
};

export default Scene;
