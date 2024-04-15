import { useThree } from '@react-three/fiber';
import { Color } from 'three';

function BlackSkybox() {
  const { scene } = useThree();
  scene.background = new Color('black');

  return null; // Don't render anything here
}

export default BlackSkybox;
