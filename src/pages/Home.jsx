import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader  from '../components/Loader';

import Island from '../models/Island';



{/*<div className="className absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        POPUP
      </div>*/}

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustIslandForScreenSize = () => {
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

  const [ islandScale, islandPosition, islandRotation ] = adjustIslandForScreenSize();
  const [ planeScale, planePosition ] = adjustPlaneForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      <Canvas 
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near:0.1, far: 1000 }}
      >
      <Suspense fallback={<Loader />}>
        <hemisphereLight skyColor="#050510" groundColor="#010105" intensity={0.1} /> {/* Subtle Starry Background */}
        <directionalLight position={[5, -10, 20]} intensity={2} color="#0243ff" /> {/* Main "Sunlight" */}
        <directionalLight position={[5, 10, 2]} intensity={1} color="white"/>
        <spotLight position={[2, 10, -5]} intensity={0.4} angle={0.2} penumbra={0.8} color="white" />
        <pointLight position={[-5, 2, -10]} intensity={0.2} color="#00bbff" /> {/* Rim Lighting */}
        <ambientLight intensity={0.1} />
        <fog attach="fog" color="#332255" near={30} far={750} /> 
        <hemisphereLight skyColor="#00076f" groundColor="#e54ed0" intensity={1} />

        <Island 
          position = {islandPosition}
          scale = {islandScale}
          rotation = {islandRotation}
          isRotating = {isRotating}
          setIsRotating = {setIsRotating}
          setCurrentStage = {setCurrentStage}
        />
        
      </Suspense>
      </Canvas>
    </section>
  )
}

export default Home