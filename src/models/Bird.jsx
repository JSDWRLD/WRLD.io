import { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

import birdScene from '../assets/3d/bird.glb'

const Bird = () => {
  const birdRef = useRef();
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    actions['Take 001'].play();
  }, []);

  // this allows for movement animating key frames
  useFrame(({ clock, camera }) => {
    // this updates y position to simulate the flight in a sin wave
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2

    if(birdRef.current.position.x > camera.position.x + 10){
      // if it reaches the end of screem we turn it around
      birdRef.current.rotation.y = Math.PI;
    } else if (birdRef.current.position.x < camera.position.x - 10){
      // if it is not at the end we keep the y rotation the same and move forward
      birdRef.current.rotation.y = 0;
    }

    // moving the x and z position in accordance to the y position
    if(birdRef.current.rotation.y === 0){
      // moving forward
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.01;
    } else {
      // moving backward
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.z += 0.01;
    }
  })

  return (
   <mesh ref={birdRef} position={[-5,2,1]} scale={[0.003, 0.003, 0.003]}>
    <primitive object={scene} />
   </mesh>
  )
}

export default Bird