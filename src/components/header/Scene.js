import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ReactLoading from "react-loading";

const Model = React.lazy(() => import("./Model"));
const Loading = ({ type, color }) => (
  <ReactLoading type={type} color={color} height={50} width={50} />
);
const Scene = () => {
  return (
    <Suspense
      fallback={
        <div
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {" "}
          <Loading type="spin" color="#fff" />
        </div>
      }
    >
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
