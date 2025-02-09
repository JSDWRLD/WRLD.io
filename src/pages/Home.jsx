import { Suspense, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Scroll, ScrollControls, useScroll, Text } from '@react-three/drei';
import { getProject, val } from '@theatre/core';
import { SheetProvider, PerspectiveCamera, useCurrentSheet, editable } from '@theatre/r3f';

import { EffectComposer, Bloom } from '@react-three/postprocessing';
import Loader from '../components/Loader';

import Void from '../models/Void';
import Bean from '../models/Bean';
import BlackSkybox from '../models/BlackSkybox';
import planets from '../assets/flyplanets.json';

import { useNavigate } from 'react-router-dom';

import { motion } from 'framer-motion';  // Ensure framer-motion is imported


const Home = () => {
  const sheet = getProject('Scroll Planet', { state: planets }).sheet('Scene')
  const navigate = useNavigate();

  const [isRotating, setIsRotating] = useState(false);

  const adjustVoidForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation]
  }

  const [voidScale, voidPosition, voidRotation] = adjustVoidForScreenSize();


  // Animated Text
  const TheatreText = editable(Text, "mesh");
  const handleAbout = () => {
    navigate('/about')
  }
  const handleProjects = () => {
    navigate('/projects')
  }
  const handleContact = () => {
    navigate('/contact')
  }

  const [showScrollIndicator, setShowScrollIndicator] = useState(false);

  return (
    <section className='w-full h-screen relative'>
      <div className="className absolute top-28 left-0 right-0 z-10 flex items-center justify-center" style={{ color: 'white' }}>
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent`}
        gl={{ preserveDrawingBuffer: true }}
      >
        <ScrollControls pages={5} damping={0.75}>
          <SheetProvider sheet={sheet}>
            <Scene
              voidScale={voidScale}
              voidPosition={voidPosition}
              voidRotation={voidRotation}
              isRotating={isRotating}
              setIsRotating={setIsRotating}
              setShowScrollIndicator={setShowScrollIndicator}
            />
            <TheatreText
              theatreKey='TEXT'
              text="Welcome to My World"
              position={[-0.577, 9.66, -35.22]}
              rotation={[0, 0.35, 0]}
              scale={1}
              color="white"
              font='src/assets/fonts/Neuropol.otf'
            />
            <TheatreText
              theatreKey='ABOUT'
              text="Learn About Me"
              position={[-19.38, 21.76, -50.9]}
              rotation={[0.48, 0.59, 0]}
              scale={1}
              color="white"
              font='src/assets/fonts/Neuropol.otf'
              onClick={handleAbout}
              onPointerOver={e => e.stopPropagation() || (document.body.style.cursor = 'pointer')}
              onPointerOut={e => document.body.style.cursor = 'auto'}
            />
            <TheatreText
              theatreKey='Projects'
              text="View my Projects"
              position={[13.789, 25.262, -48.818]}
              rotation={[-0.37, -1, 0]}
              scale={1}
              color="white"
              font='src/assets/fonts/Neuropol.otf'
              onClick={handleProjects}
              onPointerOver={e => e.stopPropagation() || (document.body.style.cursor = 'pointer')}
              onPointerOut={e => document.body.style.cursor = 'auto'}
            />
            <TheatreText
              theatreKey='CONTACT'
              text="Contact Me"
              position={[16.693, 17.477, -32.65]}
              rotation={[0, -0.7, 0]}
              scale={1}
              color="white"
              font='src/assets/fonts/Neuropol.otf'
              onClick={handleContact}
              onPointerOver={e => e.stopPropagation() || (document.body.style.cursor = 'pointer')}
              onPointerOut={e => document.body.style.cursor = 'auto'}
            />
          </SheetProvider>
        </ScrollControls>
      </Canvas>
      {/* Scroll to start indicator */}
      {showScrollIndicator && (
        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0], // Vertical animation
                }}
                transition={{
                  duration: 1.5, // Time taken for the animation to complete
                  repeat: Infinity, // Repeat the animation forever
                  repeatType: "loop", // Loop the animation
                }}
                className="w-3 h-3 rounded-full bg-white mb-1" // Use white for better contrast
              />
            </div>
          </a>
        </div>
      )}

    </section>
  )
}

export default Home

function Scene({ voidScale, voidPosition, voidRotation, isRotating, setIsRotating, setCurrentStage, setShowScrollIndicator }) {
  const sheet = useCurrentSheet()
  const scroll = useScroll()

  

  useFrame((state, delta) => {
    const sequenceLength = val(sheet.sequence.pointer.length);
    sheet.sequence.position = scroll.offset * sequenceLength;

    // Disable rotation when scrolling
    if (scroll.offset !== 0 && isRotating) {
      setIsRotating(false);
      setShowScrollIndicator(false);
    } else if (scroll.offset === 0 && !isRotating) {
      setIsRotating(true);
      setShowScrollIndicator(true);
    }
  });

  return (
    <>
      <Suspense fallback={<Loader />}>
        <hemisphereLight skyColor="#000000" groundColor="#000000" intensity={0.1} /> {/* Subtle Starry Background */}
        <directionalLight position={[5, 10, 2]} intensity={1} color="white" />
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
          position={voidPosition}
          scale={voidScale}
          rotation={voidRotation}
          isRotating={isRotating}
          setIsRotating={setIsRotating}
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