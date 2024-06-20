/* eslint-disable react/no-unknown-property */


import { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { a } from '@react-spring/three'
import { tween } from '@theatre/core';

import voidScene from '../assets/3d/void.glb';

let sceneRotation = 0; 
const defaultYPos = 0;

const Void = ({isRotating, ...props }) => {
  const voidRef = useRef();

  const { gl, viewport } = useThree();
  const { nodes, materials } = useGLTF(voidScene);

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  // Controls the smooth slow scroll of Void
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

    // touches 0 is the first finger
    if(isRotating){
      const clientX = e.touches 
    ? e.touches[0].clientX 
    : e.clientX;

    // this is the change in the horizontal position, when we move the pointer up
    const delta = (clientX - lastX.current) / viewport.width;

    // use pi cause its a circle object, .rotation is a property in three fiber objects
    voidRef.current.rotation.y += delta * 0.01 * Math.PI;
    lastX.current = clientX;
    // update speed
    rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  }
  // on every single frame, hook comes from react three fiber
  useFrame(() => {
    // Automatic rotation (only when not interacting)
    if (!isRotating) {
      rotationSpeed.current = 0; // Stops the rotation by setting speed to zero
    } else {
      // Continues or starts rotation
      sceneRotation += 0.003; // You can adjust this value for different rotation speeds
    }
    // Apply combined rotation
    voidRef.current.rotation.y = sceneRotation + rotationSpeed.current;

    if (!isRotating) {
      // Apply default rotation when not rotating
      voidRef.current.rotation.y = defaultYPos;
      
    } else {
      // Continue applying dynamic rotation based on user interaction or automatic animation
      voidRef.current.rotation.y += rotationSpeed.current;
    }

    if(!isRotating) {
      // Calculate correct direction based on existing rotation speed
      let direction = Math.sign(rotationSpeed.current); 
      if (direction === 0 ) { // Handle case where speed is exactly 0 
          direction = 1;  // Default to positive rotation.
      }

      // Apply damping and preserve direction
      rotationSpeed.current = Math.abs(rotationSpeed.current) * dampingFactor * direction;

      if (Math.abs(rotationSpeed.current) < 0.001) {
          rotationSpeed.current = 0;
      }

      voidRef.current.rotation.y += rotationSpeed.current;
    } else {
      const rotation = voidRef.current.rotation.y;

      // math for ensuring we stay with in 2pi radians
      const normalizedRotation = ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

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
    return () => {
      // removing events once we exit page
      canvas.removeEventListener('pointerdown', handlePointerDown);
      canvas.removeEventListener('pointerup', handlePointerUp);
      canvas.removeEventListener('pointermove', handlePointerMove);
    }
  }, [ gl, handlePointerDown, handlePointerUp, handlePointerMove ]);

  return (
    <a.group ref={voidRef} {...props}>
    <group scale={0.05} rotation={[0,5.9,0]}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.body_Material001_0.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.body_Material002_0.geometry} material={materials['Material.002']} />
      </group>
      <group position={[-357.404, 392.646, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={39.706}>
        <mesh
          geometry={nodes.Sphere002_Material001_0.geometry}
          material={materials['Material.001']}
        />
        <mesh
          geometry={nodes.Sphere002_Material002_0.geometry}
          material={materials['Material.002']}
        />
      </group>
      <group
        position={[199.634, 566.883, -221.001]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={39.706}>
        <mesh
          geometry={nodes.Sphere007_Material001_0.geometry}
          material={materials['Material.001']}
        />
        <mesh
          geometry={nodes.Sphere007_Material002_0.geometry}
          material={materials['Material.002']}
        />
      </group>
      <mesh
        geometry={nodes.waves_Material002_0.geometry}
        material={materials['Material.002']}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 1.891]}
      />
      <mesh
        geometry={nodes.waves1_Material002_0.geometry}
        material={materials['Material.002']}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 1.891]}
      />
      <mesh
        geometry={nodes.waves2_Material002_0.geometry}
        material={materials['Material.002']}
        position={[92.464, 15.529, 2.112]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 1.891]}
      />
      <mesh
        geometry={nodes.particles_Material002_0.geometry}
        material={materials['Material.002']}
        position={[489.69, 793.811, 355.293]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={20.408}
      />
      <mesh
        geometry={nodes.Sphere_Material001_0.geometry}
        material={materials['Material.001']}
        position={[375.469, 427.948, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={62.402}
      />
      <mesh
        geometry={nodes.Sphere001_Material002_0.geometry}
        material={materials['Material.002']}
        position={[375.469, 427.948, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={60.324}
      />
      <mesh
        geometry={nodes.Sphere004_Material002_0.geometry}
        material={materials['Material.002']}
        position={[375.469, 427.948, 0]}
        rotation={[-0.688, 0, 0]}
        scale={[104.129, 81.609, 0]}
      />
      <mesh
        geometry={nodes.Sphere005_Material001_0.geometry}
        material={materials['Material.001']}
        position={[-341.988, 460.196, -117.028]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={62.402}
      />
      <mesh
        geometry={nodes.Sphere006_Material002_0.geometry}
        material={materials['Material.002']}
        position={[-341.988, 460.196, -117.028]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={60.324}
      />
      <mesh
        geometry={nodes.Sphere009_Material002_0.geometry}
        material={materials['Material.002']}
        position={[507.522, 667.594, -214.475]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={16.881}
      />
      <mesh
        geometry={nodes.Sphere010_Material002_0.geometry}
        material={materials['Material.002']}
        position={[-287.442, 585.792, -311.857]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={16.881}
      />
      <mesh
        geometry={nodes.Sphere011_Material002_0.geometry}
        material={materials['Material.002']}
        position={[-553.462, 331.074, -379.067]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={11.437}
      />
      <mesh
        geometry={nodes.Cube_Material001_0.geometry}
        material={materials['Material.001']}
        position={[0, -101.673, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1120.013, 1120.013, 100]}
      />
      <mesh
        geometry={nodes.Sphere003_Material002_0.geometry}
        material={materials['Material.002']}
        position={[-357.404, 392.646, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={41.075}
      />
      <mesh
        geometry={nodes.Sphere008_Material002_0.geometry}
        material={materials['Material.002']}
        position={[199.634, 566.883, -221.001]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={41.075}
      />
    </group>
  </a.group>
  );
}


export default Void;