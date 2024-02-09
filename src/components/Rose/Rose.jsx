/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 rose/scene.gltf -r public 
Author: alban (https://sketchfab.com/alban)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/rose-fba071e7dece4d3c9dde49a0b8b64c0e
Title: Rose
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Rose(props) {
  const meshRef = useRef(null)
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
    }
  })
  const { nodes, materials } = useGLTF('/rose/scene.gltf')
  return (
    <group {...props} dispose={null} scale={500}>
      <group rotation={[0, 0, 0]}>
        <mesh ref={meshRef} geometry={nodes.Object_4.geometry} material={materials.material_0} rotation={[-1,1,0]} />
      </group>
    </group>
  )
}

useGLTF.preload('/rose/scene.gltf')