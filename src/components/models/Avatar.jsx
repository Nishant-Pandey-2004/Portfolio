"use client"
import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function Avatar(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('models/scene.gltf');
  const { actions } = useAnimations(animations, group);
  
  const scale = 2.5;

  // Rotate the group in the animation loop
  useFrame((state, delta) => {
    group.current.rotation.y += delta * 0.5; // Adjust the speed as needed
  });

  return (
    <group ref={group} scale={[scale, scale, scale]} {...props} dispose={null} position-y={-2} >
      <group name="Scene">
        <group name="sceneglb">
          <group name="Armature">
            <primitive object={nodes.Hips} />
            <skinnedMesh name="avaturn_body" geometry={nodes.avaturn_body.geometry} material={materials.avaturn_body_material} skeleton={nodes.avaturn_body.skeleton} />
            <skinnedMesh name="avaturn_hair_0" geometry={nodes.avaturn_hair_0.geometry} material={materials.avaturn_hair_0_material} skeleton={nodes.avaturn_hair_0.skeleton} />
            <skinnedMesh name="avaturn_shoes_0" geometry={nodes.avaturn_shoes_0.geometry} material={materials.avaturn_shoes_0_material} skeleton={nodes.avaturn_shoes_0.skeleton} />
            <skinnedMesh name="avaturn_look_0" geometry={nodes.avaturn_look_0.geometry} material={materials.avaturn_look_0_material} skeleton={nodes.avaturn_look_0.skeleton} />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('models/scene.gltf');
