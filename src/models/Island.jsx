/* eslint-disable react/no-unknown-property */


import { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { a } from '@react-spring/three'

import islandScene from '../assets/3d/island.glb';

const Island = ({isRotating, setIsRotating, ...props }) => {
  const islandRef = useRef();

  const { gl, viewport } = useThree();
  const { nodes, materials } = useGLTF(islandScene);

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  // Controls the smooth slow scroll of island
  const dampingFactor = 0.95;

  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

    const clientX = e.touches 
    ? e.touches[0].clientX 
    : e.clientX;

    // update position X
    lastX.current = clientX;
  }
  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);

  }
  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if(isRotating){
      const clientX = e.touches 
    ? e.touches[0].clientX 
    : e.clientX;

    // this is the change in the horizontal position, when we move the pointer up
    const delta = (clientX - lastX.current) / viewport.width;

    // use pi cause its a circle object, .rotation is a property in three fiber objects
    islandRef.current.rotation.y += delta * 0.01 * Math.PI;
    lastX.current = clientX;
    // update speed
    rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  }

  // handles keyboard down or up
  const handleKeyDown = (e) => {
    if(e.key === 'ArrowLeft') {
      if(!isRotating) setIsRotating(true);
      islandRef.current.rotation.y += 0.01 * Math.PI;
    } else if (e.key === 'ArrowRight') {
      if(!isRotating) setIsRotating(true);
      islandRef.current.rotation.y -= 0.01 * Math.PI;
    }
  } 
  const handleKeyUp = (e) => {
    if(e.key === 'ArrowLeft' || e.key === 'ArrowRight') setIsRotating(false);
  }

  // on every single frame, hook comes from react three fiber
  useFrame(() => {
    if(!isRotating) {
      // if it is not rotating apply damping factor to slow down
      rotationSpeed.current *= dampingFactor;

      if(Math.abs(rotationSpeed.current < 0.001)) rotationSpeed.current = 0;

      islandRef.current.rotation.y += rotationSpeed.current;
    } else {
      const rotation = islandRef.current.rotation.y;

      // math for ensuring we stay with in 2pi radians
      const normalizedRotation = ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      // Set the current stage based on the island's orientation, stages are text popup
      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }
    }
  });

  // only happesn when a variable in the dependency array changes
  // doesnt happen often, only at the beginning
  useEffect(() => {
    const canvas = gl.domElement;
    // adding events to our canvas dom, not the regular dom
    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointerup', handlePointerUp);
    canvas.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      // removing events once we exit page
      canvas.removeEventListener('pointerdown', handlePointerDown);
      canvas.removeEventListener('pointerup', handlePointerUp);
      canvas.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    }
  }, [ gl, handlePointerDown, handlePointerUp, handlePointerMove ]);

  return (
    <a.group ref={islandRef} {...props}>
      <mesh
        geometry={nodes.polySurface944_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface945_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface946_tree2_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface947_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface948_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface949_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.pCube11_rocks1_0.geometry}
        material={materials.PaletteMaterial001}
      />
    </a.group>
  );
}


export default Island;