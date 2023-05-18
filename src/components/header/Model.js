import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import glb from "../../assets/model.glb";
import { a, useSpring } from "@react-spring/three";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(glb);
  const { actions, names } = useAnimations(animations, group);
  const [index, setIndex] = useState(0);
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
          setIndex((index + 1) % 3);
        }}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <primitive object={nodes.Hips} />
        <skinnedMesh
          geometry={nodes["Wolf3D_Body"].geometry}
          material={materials["Wolf3D_Body.004"]} //materials["Wolf3D_Body.003"]
          skeleton={nodes["Wolf3D_Body"].skeleton}
        />
        <skinnedMesh
          geometry={nodes["Wolf3D_Glasses"].geometry}
          material={materials["Wolf3D_Glasses.004"]}
          skeleton={nodes["Wolf3D_Glasses"].skeleton}
        />
        <skinnedMesh
          geometry={nodes["Wolf3D_Hair"].geometry}
          material={materials["Wolf3D_Hair.004"]}
          skeleton={nodes["Wolf3D_Hair"].skeleton}
        />
        <skinnedMesh
          geometry={nodes["Wolf3D_Outfit_Bottom"].geometry}
          material={materials["Wolf3D_Outfit_Bottom.004"]}
          skeleton={nodes["Wolf3D_Outfit_Bottom"].skeleton}
        />
        <skinnedMesh
          geometry={nodes["Wolf3D_Outfit_Footwear"].geometry}
          material={materials["Wolf3D_Outfit_Footwear.004"]}
          skeleton={nodes["Wolf3D_Outfit_Footwear"].skeleton}
        />
        <skinnedMesh
          geometry={nodes["Wolf3D_Outfit_Top"].geometry}
          material={materials["Wolf3D_Outfit_Top.004"]}
          skeleton={nodes["Wolf3D_Outfit_Top"].skeleton}
        />
        <skinnedMesh
          name="EyeLeft"
          geometry={nodes["EyeLeft"].geometry}
          material={materials["Wolf3D_Eye.004"]}
          skeleton={nodes["EyeLeft"].skeleton}
          morphTargetDictionary={nodes["EyeLeft"].morphTargetDictionary}
          morphTargetInfluences={nodes["EyeLeft"].morphTargetInfluences}
        />
        <skinnedMesh
          name="EyeRight"
          geometry={nodes["EyeRight"].geometry}
          material={materials["Wolf3D_Eye.004"]}
          skeleton={nodes["EyeRight"].skeleton}
          morphTargetDictionary={nodes["EyeRight"].morphTargetDictionary}
          morphTargetInfluences={nodes["EyeRight"].morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Head"
          geometry={nodes["Wolf3D_Head"].geometry}
          material={materials["Wolf3D_Skin.004"]}
          skeleton={nodes["Wolf3D_Head"].skeleton}
          morphTargetDictionary={nodes["Wolf3D_Head"].morphTargetDictionary}
          morphTargetInfluences={nodes["Wolf3D_Head"].morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Teeth"
          geometry={nodes["Wolf3D_Teeth"].geometry}
          material={materials["Wolf3D_Teeth.004"]}
          skeleton={nodes["Wolf3D_Teeth"].skeleton}
          morphTargetDictionary={nodes["Wolf3D_Teeth"].morphTargetDictionary}
          morphTargetInfluences={nodes["Wolf3D_Teeth"].morphTargetInfluences}
        />
      </group>

      <a.mesh receiveShadow position={[0, 1, -1]} scale={scale}>
        <circleGeometry args={[0.8, 32]} />
        <a.meshStandardMaterial color={color} />
      </a.mesh>
    </>
  );
}

useGLTF.preload("../../assets/model.glb");
