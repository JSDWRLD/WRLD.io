import React, { useRef, useEffect, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

import fairyScene from '../assets/3d/navi.glb'
import { useFrame } from '@react-three/fiber';

const Fairy = () => {
  const fairyRef = useRef();
  const [pointer] = useState(() => new THREE.Vector3())
  
  const { nodes, materials, animations } = useGLTF(fairyScene);
  const { actions } = useAnimations(animations, fairyRef);

  useEffect(() => {
    actions['idle'].play();
  }, [actions])

  return (
    <group 
        ref={fairyRef}
        onPointerMove={onMouseMove}
    >
      <group name="Scene">
        <group
          name="Model"
          position={[0, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.05}>
          <group name="Navifbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.fairy_wings}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials.fairy_navi}
                    skeleton={nodes.Object_8.skeleton}
                  />
                  <group name="Object_6" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="fairy_reference_001" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

export default Fairy