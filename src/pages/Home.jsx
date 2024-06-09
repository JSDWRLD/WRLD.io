import { Suspense, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Scroll, ScrollControls, useScroll } from '@react-three/drei';
import { getProject, val } from '@theatre/core';
import { SheetProvider, PerspectiveCamera, useCurrentSheet } from '@theatre/r3f';

import { EffectComposer, Bloom } from '@react-three/postprocessing';
import Loader  from '../components/Loader';
import HomeInfo from '../components/HomeInfo';

import Void from '../models/Void';
import Bean from '../models/Bean';
import BlackSkybox from '../models/BlackSkybox';


const Home = () => {
  const sheet = getProject('Scroll Planet').sheet('Scene')

  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustVoidForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if(window.innerWidth < 768){
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [ screenScale, screenPosition, rotation ]
  }

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;


    if(window.innerWidth < 768){
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [ screenScale, screenPosition ]
  }

  const [ voidScale, voidPosition, voidRotation ] = adjustVoidForScreenSize();
  const [ planeScale, planePosition ] = adjustPlaneForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      <div className="className absolute top-28 left-0 right-0 z-10 flex items-center justify-center"  style={{ color: 'white' }}>
          {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas 
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        gl = {{ preserveDrawingBuffer: true }}
      >
        <ScrollControls>
          <SheetProvider sheet={sheet}>
            <Scene 
              voidScale={voidScale}
              voidPosition={voidPosition}
              voidRotation={voidRotation}
              isRotating={isRotating}
              setIsRotating={setIsRotating}
              setCurrentStage={setCurrentStage}
            />
          </SheetProvider>
        </ScrollControls>
      </Canvas>
    </section>
  )
}

export default Home

//
//

function Scene({ voidScale, voidPosition, voidRotation, isRotating, setIsRotating, setCurrentStage }) {
  const sheet = useCurrentSheet()
  const scroll = useScroll()

  useFrame(() => {
    const sequenceLength = val (sheet.sequence.pointer.length)

    sheet.sequence.position = scroll.offset * sequenceLength
  })

  

  return (
    <>
        <Suspense fallback={<Loader />}>
          <hemisphereLight skyColor="#000000" groundColor="#000000" intensity={0.1} /> {/* Subtle Starry Background */}
          <directionalLight position={[5, 10, 2]} intensity={1} color="white"/>
          <spotLight position={[2, 10, -5]} intensity={0.1} angle={0.2} penumbra={0.8} color="white" />
          <pointLight position={[-5, 2, -10]} intensity={0.5} color="#00bbff" /> {/* Rim Lighting */}
          <ambientLight intensity={0.3} />
          <BlackSkybox />
          <EffectComposer>
              <Bloom 
                luminanceThreshold={0.8} // Adjust to target brighter areas
                luminanceSmoothing={0.06} // Adjust for desired bloom softness
              />
          </EffectComposer>
          <Bean />
          <Void 
            position = {voidPosition}
            scale = {voidScale}
            rotation = {voidRotation}
            isRotating = {isRotating}
            setIsRotating = {setIsRotating}
            setCurrentStage = {setCurrentStage}
          />
        </Suspense>
        <PerspectiveCamera 
          theatreKey='Camera'
          makeDefault
          position={[0, 0, 0]}
          fov={90}
          near={0.1}
          far={70}
        />
    </>
  )
}