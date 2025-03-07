import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import glb from "../../assets/test_clean_model.glb";
import { a, useSpring } from "@react-spring/three";

export default function Model({ ...props }) {
  const [index, setIndex] = useState(0);
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(glb);
  const { actions, names } = useAnimations(animations, group);
  const [hovered, setHovered] = useState(false);
  const { color, scale } = useSpring({
    scale: hovered ? [1.1, 1.1, 1] : [0.8, 0.8, 0.8],
    color: hovered ? "#fff" : "#4db5ff",
  });

  useEffect(() => {
    actions[names[index]].reset().fadeIn(0.5).play();

    return () => actions[names[index]].fadeOut(0.5);
  }, [index, actions, names]);

  return (
    <>
      <group
        ref={group}
        {...props}
        dispose={null}
        onClick={() => {
          setIndex((index + 1) % 2);
        }}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <primitive object={nodes.Hips} />
        <skinnedMesh
          geometry={nodes["Wolf3D_Body004"].geometry}
          material={materials["Wolf3D_Body.004"]} //materials["Wolf3D_Body.003"]
          skeleton={nodes["Wolf3D_Body004"].skeleton}
        />
        <skinnedMesh
          geometry={nodes["Wolf3D_Glasses004"].geometry}
          material={materials["Wolf3D_Glasses.004"]}
          skeleton={nodes["Wolf3D_Glasses004"].skeleton}
        />
        <skinnedMesh
          geometry={nodes["Wolf3D_Hair004"].geometry}
          material={materials["Wolf3D_Hair.004"]}
          skeleton={nodes["Wolf3D_Hair004"].skeleton}
        />
        <skinnedMesh
          geometry={nodes["Wolf3D_Outfit_Bottom004"].geometry}
          material={materials["Wolf3D_Outfit_Bottom.004"]}
          skeleton={nodes["Wolf3D_Outfit_Bottom004"].skeleton}
        />
        <skinnedMesh
          geometry={nodes["Wolf3D_Outfit_Footwear004"].geometry}
          material={materials["Wolf3D_Outfit_Footwear.004"]}
          skeleton={nodes["Wolf3D_Outfit_Footwear004"].skeleton}
        />
        <skinnedMesh
          geometry={nodes["Wolf3D_Outfit_Top004"].geometry}
          material={materials["Wolf3D_Outfit_Top.004"]}
          skeleton={nodes["Wolf3D_Outfit_Top004"].skeleton}
        />
        <skinnedMesh
          name="EyeLeft"
          geometry={nodes["EyeLeft004"].geometry}
          material={materials["Wolf3D_Eye.004"]}
          skeleton={nodes["EyeLeft004"].skeleton}
          morphTargetDictionary={nodes["EyeLeft004"].morphTargetDictionary}
          morphTargetInfluences={nodes["EyeLeft004"].morphTargetInfluences}
        />
        <skinnedMesh
          name="EyeRight"
          geometry={nodes["EyeRight004"].geometry}
          material={materials["Wolf3D_Eye.004"]}
          skeleton={nodes["EyeRight004"].skeleton}
          morphTargetDictionary={nodes["EyeRight004"].morphTargetDictionary}
          morphTargetInfluences={nodes["EyeRight004"].morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Head"
          geometry={nodes["Wolf3D_Head004"].geometry}
          material={materials["Wolf3D_Skin.004"]}
          skeleton={nodes["Wolf3D_Head004"].skeleton}
          morphTargetDictionary={nodes["Wolf3D_Head004"].morphTargetDictionary}
          morphTargetInfluences={nodes["Wolf3D_Head004"].morphTargetInfluences}
        />
      </group>

      <a.mesh position={[0, 1, -1]} scale={scale}>
        <circleGeometry args={[0.8, 32]} />
        <a.meshStandardMaterial color={color} />
      </a.mesh>
    </>
  );
}

useGLTF.preload("../../assets/model.glb");
