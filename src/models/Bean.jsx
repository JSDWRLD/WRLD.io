import { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

import beanScene from '../assets/3d/bean.glb'

const Bean = () => {
  const beanRef = useRef();
  const { scene, animations } = useGLTF(beanScene);
  const { actions } = useAnimations(animations, beanRef);


  // this allows for movement animating key frames
  useFrame(({ clock, camera }) => {
    // this updates y position to simulate the flight in a sin wave
    beanRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2

    if(beanRef.current.position.x > camera.position.x + 25){
      // if it reaches the end of screem we turn it around
      beanRef.current.rotation.y = Math.PI;
    } else if (beanRef.current.position.x < camera.position.x - 10){
      // if it is not at the end we keep the y rotation the same and move forward
      beanRef.current.rotation.y = 0;
    }

    // moving the x and z position in accordance to the y position
    if(beanRef.current.rotation.y === 0){
      // moving forward
      beanRef.current.position.x += 0.01;
      beanRef.current.position.z -= 0.01;
    } else {
      // moving backward
      beanRef.current.position.x -= 0.01;
      beanRef.current.position.z += 0.01;
    }

    // Rotation and Spin
    const spinSpeed = 0.02; 
    beanRef.current.rotation.x += spinSpeed; 
    beanRef.current.rotation.z += spinSpeed * 0.5;
  })

  return (
   <mesh ref={beanRef} position={[-5,2,1]} scale={[0.1, 0.1, 0.1]}>
    <primitive object={scene} />
   </mesh>
  )
}

export default Bean