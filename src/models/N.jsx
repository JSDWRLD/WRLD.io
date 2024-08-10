
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber';

import nScene from '../assets/3d/n.glb'

// To do clean up new lines

const N = () => {
  const nRef = useRef();

  const { gl, viewport } = useThree();
  const { nodes, materials } = useGLTF(nScene);

  return (
    <group ref= {nRef} position={[0, -0.5, 0]} rotation={[0, 0.5, 0]}>
      <group position={[0, 1.802, 0.638]} rotation={[-0.764, 0, 0]}>
        <mesh
          geometry={nodes.Object_496.geometry}
          material={materials['Material.008']}
          material-transparent={true} // Enable transparency
          material-opacity={0.2} // Set opacity to 50%
        />
        <mesh
          geometry={nodes.Object_497.geometry}
          material={materials['Material.001']}
        />
      </group>
      <group scale={0.225}>
        <group scale={4.45}>
          <mesh
            geometry={nodes.Object_520.geometry}
            material={materials['Material.009']}
          />
          <mesh
            geometry={nodes.Object_521.geometry}
            material={materials['Material.021']}
          />
        </group>
      </group>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials['Material.002']}
        position={[0.178, 1.39, 1.481]}
        scale={0.009}
      />
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials['Material.002']}
        position={[0.009, 1.469, 1.279]}
        scale={0.006}
      />
      <mesh
        geometry={nodes.Object_8.geometry}
        material={materials['Material.002']}
        position={[0.125, 1.518, 0.977]}
        scale={0.011}
      />
      <mesh
        geometry={nodes.Object_10.geometry}
        material={materials['Material.002']}
        position={[-0.211, 1.62, 0.381]}
        rotation={[-3.115, 0, 0]}
        scale={0.007}
      />
      <mesh
        geometry={nodes.Object_12.geometry}
        material={materials['Material.002']}
        position={[0.055, 1.405, 1.153]}
        rotation={[-3.115, 0, 0]}
        scale={0.009}
      />
      <mesh
        
        
        geometry={nodes.Object_14.geometry}
        material={materials['Material.002']}
        position={[0.138, 1.275, 1.63]}
        rotation={[-3.115, 0, 0]}
        scale={0.009}
      />
      <mesh
        geometry={nodes.Object_16.geometry}
        material={materials['Material.002']}
        position={[-0.109, 1.101, 1.044]}
        rotation={[-3.115, 0, 0]}
        scale={0.013}
      />
      <mesh
        geometry={nodes.Object_18.geometry}
        material={materials['Material.002']}
        position={[-0.249, 1.243, 0.873]}
        rotation={[-3.115, 0, 0]}
        scale={0.013}
      />
      <mesh
        geometry={nodes.Object_20.geometry}
        material={materials['Material.002']}
        position={[-0.256, 1.504, 0.354]}
        rotation={[1.624, 0, 0]}
        scale={0.009}
      />
      <mesh
        geometry={nodes.Object_22.geometry}
        material={materials['Material.002']}
        position={[-0.385, 1.804, 1.145]}
        rotation={[0, 0, -3.117]}
        scale={0.009}
      />
      <mesh
        geometry={nodes.Object_24.geometry}
        material={materials['Material.002']}
        position={[-0.136, 1.672, 0.943]}
        rotation={[0, 0, -3.117]}
        scale={0.006}
      />
      <mesh
        geometry={nodes.Object_26.geometry}
        material={materials['Material.002']}
        position={[-0.354, 1.49, 0.68]}
        rotation={[0, 0, -3.117]}
        scale={0.011}
      />
      <mesh
        geometry={nodes.Object_28.geometry}
        material={materials['Material.002']}
        position={[-0.215, 1.816, 0.85]}
        rotation={[3.115, 0.001, 3.117]}
        scale={0.009}
      />
      <mesh
        geometry={nodes.Object_30.geometry}
        material={materials['Material.002']}
        position={[0.028, 1.732, 0.107]}
        rotation={[-1.624, -0.025, 3.14]}
        scale={0.009}
      />
      <mesh
        geometry={nodes.Object_32.geometry}
        material={materials['Material.002']}
        position={[0.21, 1.535, 1.203]}
        rotation={[0, 0, 0.024]}
        scale={0.009}
      />
      <mesh
        geometry={nodes.Object_34.geometry}
        material={materials['Material.002']}
        position={[0.032, 1.619, 1.001]}
        rotation={[0, 0, 0.024]}
        scale={0.006}
      />
      <mesh
        geometry={nodes.Object_36.geometry}
        material={materials['Material.002']}
        position={[0.138, 1.652, 0.705]}
        rotation={[0, 0, 0.024]}
        scale={0.011}
      />
      <mesh
        geometry={nodes.Object_38.geometry}
        material={materials['Material.002']}
        position={[-0.044, 1.596, 0.874]}
        rotation={[-3.115, -0.001, -0.024]}
        scale={0.009}
      />
      <mesh
        geometry={nodes.Object_40.geometry}
        material={materials['Material.002']}
        position={[-0.141, 1.546, 0.165]}
        rotation={[1.624, 0.024, -0.001]}
        scale={0.009}
      />
      <mesh
        geometry={nodes.Object_42.geometry}
        material={materials['Material.002']}
        position={[0.251, 2.14, 0.871]}
        scale={0.011}
      />
      <mesh
        
        
        geometry={nodes.Object_44.geometry}
        material={materials['Material.002']}
        position={[-0.033, 1.929, 0.348]}
        rotation={[-3.115, 0, 0]}
        scale={0.005}
      />
      <mesh
        
        
        geometry={nodes.Object_46.geometry}
        material={materials['Material.002']}
        position={[0.11, 2.011, 0.971]}
        rotation={[-3.115, 0, 0]}
        scale={0.009}
      />
      <mesh
        
        
        geometry={nodes.Object_48.geometry}
        material={materials['Material.002']}
        position={[0.205, 1.786, 0.999]}
        rotation={[-3.115, 0, 0]}
        scale={0.014}
      />
      <mesh
        
        
        geometry={nodes.Object_50.geometry}
        material={materials['Material.002']}
        position={[-0.093, 1.789, 0.654]}
        rotation={[-3.115, 0, 0]}
        scale={0.013}
      />
      <mesh
        
        
        geometry={nodes.Object_52.geometry}
        material={materials['Material.002']}
        position={[0.19, 2.225, 0.819]}
        rotation={[0, 0, 0.024]}
        scale={0.006}
      />
      <mesh
        
        
        geometry={nodes.Object_54.geometry}
        material={materials['Material.002']}
        position={[-0.233, 2.775, 0.964]}
        scale={0.011}
      />
      <mesh
        
        
        geometry={nodes.Object_56.geometry}
        material={materials['Material.002']}
        position={[-0.896, 4.625, -0.501]}
        rotation={[-3.115, 0, 0]}
        scale={0.015}
      />
      <mesh
        
        
        geometry={nodes.Object_58.geometry}
        material={materials['Material.002']}
        position={[-0.542, 2.505, 1.063]}
        rotation={[-3.115, 0, 0]}
        scale={0.009}
      />
      <mesh
        
        
        geometry={nodes.Object_60.geometry}
        material={materials['Material.002']}
        position={[-0.485, 2.322, 1.091]}
        rotation={[-3.115, 0, 0]}
        scale={0.014}
      />
      <mesh
        
        
        geometry={nodes.Object_62.geometry}
        material={materials['Material.002']}
        position={[-0.39, 2.395, 0.783]}
        rotation={[-3.115, 0, 0]}
        scale={0.013}
      />
      <mesh
        
        
        geometry={nodes.Object_64.geometry}
        material={materials['Material.002']}
        position={[-0.109, 2.771, 0.911]}
        rotation={[0, 0, 0.024]}
        scale={0.006}
      />
      <mesh
        
        
        geometry={nodes.Object_66.geometry}
        material={materials['Material.002']}
        position={[-0.205, 2.038, 1.252]}
        rotation={[0, 0, -3.073]}
        scale={0.005}
      />
      <mesh
        
        
        geometry={nodes.Object_68.geometry}
        material={materials['Material.002']}
        position={[-0.297, 1.933, 1.312]}
        rotation={[3.115, 0.002, 3.073]}
        scale={0.021}
      />
      <mesh
        
        
        geometry={nodes.Object_70.geometry}
        material={materials['Material.002']}
        position={[-0.458, 1.941, 1.063]}
        rotation={[3.115, 0.002, 3.073]}
        scale={0.009}
      />
      <mesh
        
        
        geometry={nodes.Object_72.geometry}
        material={materials['Material.002']}
        position={[-0.561, 2.159, 1.091]}
        rotation={[3.115, 0.002, 3.073]}
        scale={0.014}
      />
      <mesh
        
        
        geometry={nodes.Object_74.geometry}
        material={materials['Material.002']}
        position={[-0.303, 2.106, 0.669]}
        rotation={[3.115, 0.002, 3.073]}
        scale={0.013}
      />
      <mesh
        
        
        geometry={nodes.Object_76.geometry}
        material={materials['Material.002']}
        position={[0.089, 1.799, 1.199]}
        rotation={[0, 0, 3.11]}
        scale={0.006}
      />
      <mesh
        
        
        geometry={nodes.Object_78.geometry}
        material={materials['Material.002']}
        position={[-0.045, 1.351, 1.212]}
        rotation={[-3.115, 0, 0]}
        scale={0.011}
      />
      <mesh
        
        
        geometry={nodes.Object_80.geometry}
        material={materials['Material.002']}
        position={[0.41, 2.011, 0.56]}
        rotation={[-3.115, 0, 0]}
        scale={0.009}
      />
      <mesh
        
        
        geometry={nodes.Object_82.geometry}
        material={materials['Material.002']}
        position={[-0.036, 2.294, 0.28]}
        rotation={[-3.115, 0, 0]}
        scale={0.007}
      />
      <mesh
        
        
        geometry={nodes.Object_84.geometry}
        material={materials['Material.002']}
        position={[0.477, 1.949, 0.841]}
        rotation={[0, 0, -3.073]}
        scale={0.011}
      />
      <mesh
        
        
        geometry={nodes.Object_86.geometry}
        material={materials['Material.002']}
        position={[0.465, 1.882, 0.44]}
        rotation={[0, 0, -3.049]}
        scale={0.006}
      />
      <mesh
        
        
        geometry={nodes.Object_88.geometry}
        material={materials['Material.002']}
        position={[0.88, 2.867, -0.06]}
        rotation={[-3.115, 0, 0]}
        scale={0.013}
      />
      <mesh
        
        
        geometry={nodes.Object_90.geometry}
        material={materials['Material.002']}
        position={[-0.135, 1.308, 1.373]}
        rotation={[-3.115, 0, 0]}
        scale={0.005}
      />
      <mesh
        
        
        geometry={nodes.Object_92.geometry}
        material={materials['Material.002']}
        position={[-0.089, 1.192, 1.387]}
        rotation={[-3.115, 0, 0]}
        scale={0.007}
      />
      <mesh
        
        
        geometry={nodes.Object_94.geometry}
        material={materials['Material.002']}
        position={[-0.168, 1.225, 1.229]}
        rotation={[-3.115, 0, 0]}
        scale={0.007}
      />
      <mesh
        
        
        geometry={nodes.Object_96.geometry}
        material={materials['Material.002']}
        position={[0.039, 1.276, 1.518]}
        rotation={[0, 0, -3.073]}
        scale={0.005}
      />
      <mesh
        
        
        geometry={nodes.Object_98.geometry}
        material={materials['Material.002']}
        position={[-0.087, 1.235, 1.491]}
        rotation={[0, 0, -3.049]}
        scale={0.003}
      />
      <mesh
        
        
        geometry={nodes.Object_100.geometry}
        material={materials['Material.002']}
        position={[-0.321, 2.573, 0.608]}
        scale={0.011}
      />
      <mesh
        
        
        geometry={nodes.Object_102.geometry}
        material={materials['Material.002']}
        position={[-0.873, 2.832, 0.602]}
        rotation={[0, 0, -3.117]}
        scale={0.009}
      />
      <mesh
        
        
        geometry={nodes.Object_104.geometry}
        material={materials['Material.002']}
        position={[-0.568, 3.938, -0.668]}
        rotation={[0, 0, -3.117]}
        scale={0.006}
      />
      <mesh
        
        
        geometry={nodes.Object_106.geometry}
        material={materials['Material.002']}
        position={[-0.786, 2.69, 0.175]}
        rotation={[0, 0, -3.117]}
        scale={0.011}
      />
      <mesh
        
        
        geometry={nodes.Object_108.geometry}
        material={materials['Material.002']}
        position={[-0.647, 2.823, 0.274]}
        rotation={[3.115, 0.001, 3.117]}
        scale={0.009}
      />
      <mesh
        
        
        geometry={nodes.Object_110.geometry}
        material={materials['Material.002']}
        position={[-0.403, 2.772, -0.513]}
        rotation={[-1.624, -0.025, 3.14]}
        scale={0.009}
      />
      <mesh
        
        
        geometry={nodes.Object_112.geometry}
        material={materials['Material.002']}
        position={[-0.172, 2.609, 0.66]}
        rotation={[0, 0, 0.024]}
        scale={0.009}
      />
      <mesh
        
        
        geometry={nodes.Object_114.geometry}
        material={materials['Material.002']}
        position={[-0.4, 2.207, 0.358]}
        rotation={[0, 0, 0.024]}
        scale={0.006}
      />
      <mesh
        
        
        geometry={nodes.Object_116.geometry}
        material={materials['Material.002']}
        position={[-0.294, 3.394, -0.163]}
        rotation={[0, 0, 0.024]}
        scale={0.011}
      />
      <mesh
        
        
        geometry={nodes.Object_118.geometry}
        material={materials['Material.002']}
        position={[-0.475, 3.356, -0.006]}
        rotation={[-3.115, -0.001, -0.024]}
        scale={0.009}
      />
      <mesh
        
        
        geometry={nodes.Object_120.geometry}
        material={materials['Material.002']}
        position={[-0.572, 2.62, -0.378]}
        rotation={[1.624, 0.024, -0.001]}
        scale={0.009}
      />
      <mesh
        
        
        geometry={nodes.Object_122.geometry}
        material={materials['Material.002']}
        position={[-0.18, 3.215, 0.329]}
        scale={0.011}
      />
      <mesh
        
        
        geometry={nodes.Object_124.geometry}
        material={materials['Material.002']}
        position={[0.195, 3.303, -0.447]}
        rotation={[-3.115, 0, 0]}
        scale={0.021}
      />
      <mesh
        
        
        geometry={nodes.Object_126.geometry}
        material={materials['Material.002']}
        position={[-0.322, 3.085, 0.428]}
        rotation={[-3.115, 0, 0]}
        scale={0.009}
      />
      <mesh
        
        
        geometry={nodes.Object_128.geometry}
        material={materials['Material.002']}
        position={[-0.111, 2.86, 0.456]}
        rotation={[-3.115, 0, 0]}
        scale={0.014}
      />
      <mesh
        
        
        geometry={nodes.Object_130.geometry}
        material={materials['Material.002']}
        position={[-0.525, 3.055, -0.658]}
        rotation={[-3.115, 0, 0]}
        scale={0.013}
      />
      <mesh
        
        
        geometry={nodes.Object_132.geometry}
        material={materials['Material.002']}
        position={[-0.242, 3.299, 0.276]}
        rotation={[0, 0, 0.024]}
        scale={0.006}
      />
      <mesh
        
        
        geometry={nodes.Object_134.geometry}
        material={materials['Material.002']}
        position={[-0.764, 3.779, 0.19]}
        rotation={[-3.115, 0, 0]}
        scale={0.021}
      />
      <mesh
        
        
        geometry={nodes.Object_136.geometry}
        material={materials['Material.002']}
        position={[-0.621, 3.631, 0.52]}
        rotation={[-3.115, 0, 0]}
        scale={0.009}
      />
      <mesh
        
        
        geometry={nodes.Object_138.geometry}
        material={materials['Material.002']}
        position={[-0.533, 3.406, 0.548]}
        rotation={[-3.115, 0, 0]}
        scale={0.014}
      />
      <mesh
        
        
        geometry={nodes.Object_140.geometry}
        material={materials['Material.002']}
        position={[-0.822, 3.469, 0.241]}
        rotation={[-3.115, 0, 0]}
        scale={0.013}
      />
      <mesh
        
        
        geometry={nodes.Object_142.geometry}
        material={materials['Material.002']}
        position={[-0.641, 3, 0.71]}
        rotation={[0, 0, -3.073]}
        scale={0.011}
      />
      <mesh
        
        
        geometry={nodes.Object_144.geometry}
        material={materials['Material.002']}
        position={[-0.749, 2.899, 0.758]}
        rotation={[3.115, 0.002, 3.073]}
        scale={0.021}
      />
      <mesh
        
        
        geometry={nodes.Object_146.geometry}
        material={materials['Material.002']}
        position={[-0.89, 3.015, 0.52]}
        rotation={[3.115, 0.002, 3.073]}
        scale={0.009}
      />
      <mesh
        
        
        geometry={nodes.Object_148.geometry}
        material={materials['Material.002']}
        position={[-0.993, 3.233, 0.548]}
        rotation={[3.115, 0.002, 3.073]}
        scale={0.014}
      />
      <mesh
        
        
        geometry={nodes.Object_150.geometry}
        material={materials['Material.002']}
        position={[1.419, 4.909, -3.2]}
        rotation={[3.115, 0.002, 3.073]}
        scale={0.013}
      />
      <mesh
        
        
        geometry={nodes.Object_152.geometry}
        material={materials['Material.002']}
        position={[-0.388, 2.957, 0.657]}
        rotation={[0, 0, -3.049]}
        scale={0.006}
      />
      <mesh
        
        
        geometry={nodes.Object_154.geometry}
        material={materials['Material.002']}
        position={[-0.165, 3.749, -0.542]}
        rotation={[-3.115, 0, 0]}
        scale={0.014}
      />
      <mesh
        
        
        geometry={nodes.Object_156.geometry}
        material={materials['Material.002']}
        position={[-0.022, 3.085, 0.017]}
        rotation={[-3.115, 0, 0]}
        scale={0.009}
      />
      <mesh
        
        
        geometry={nodes.Object_158.geometry}
        material={materials['Material.002']}
        position={[-0.201, 3.023, -0.295]}
        rotation={[-3.115, 0, 0]}
        scale={0.013}
      />
      <mesh
        
        
        geometry={nodes.Object_160.geometry}
        material={materials['Material.002']}
        position={[0.045, 3.138, 0.102]}
        rotation={[0, 0, -3.073]}
        scale={0.011}
      />
      <mesh
        
        
        geometry={nodes.Object_162.geometry}
        material={materials['Material.002']}
        position={[0.033, 4.244, -0.575]}
        rotation={[0, 0, -3.049]}
        scale={0.006}
      />
      <mesh
        
        
        geometry={nodes.Object_164.geometry}
        material={materials['Material.002']}
        position={[-0.19, 2.449, -1.448]}
        rotation={[-3.115, 0, 0]}
        scale={0.016}
      />
      <mesh
        
        
        geometry={nodes.Object_166.geometry}
        material={materials['Material.002']}
        position={[0.089, 2.819, 0.031]}
        rotation={[-3.115, 0, 0]}
        scale={0.009}
      />
      <mesh
        
        
        geometry={nodes.Object_168.geometry}
        material={materials['Material.002']}
        position={[0.002, 2.628, 0.312]}
        rotation={[0, 0, -3.073]}
        scale={0.011}
      />
      <mesh
        
        
        geometry={nodes.Object_170.geometry}
        material={materials['Material.002']}
        position={[0.084, 2.175, 0.256]}
        rotation={[0, 0, -1.574]}
        scale={0.011}
      />
      <mesh
        
        
        geometry={nodes.Object_172.geometry}
        material={materials['Material.002']}
        position={[0.26, 2.981, -1.623]}
        rotation={[0, 0, 1.683]}
        scale={0.009}
      />
      <mesh
        
        
        geometry={nodes.Object_174.geometry}
        material={materials['Material.002']}
        position={[0.201, 2.49, 0.142]}
        rotation={[0, 0, 1.683]}
        scale={0.006}
      />
      <mesh
        
        
        geometry={nodes.Object_176.geometry}
        material={materials['Material.002']}
        position={[0.126, 3.202, -0.859]}
        rotation={[0, 0, 1.683]}
        scale={0.011}
      />
      <mesh
        
        
        geometry={nodes.Object_178.geometry}
        material={materials['Material.002']}
        position={[0.271, 2.576, 0.016]}
        rotation={[3.139, -0.027, -1.683]}
        scale={0.009}
      />
      <mesh
        
        
        geometry={nodes.Object_180.geometry}
        material={materials['Material.002']}
        position={[0.275, 2.331, -0.694]}
        rotation={[-2.016, 1.447, -2.699]}
        scale={0.009}
      />
      <mesh
        
        
        geometry={nodes.Object_182.geometry}
        material={materials['Material.002']}
        position={[0.189, 2.062, 0.402]}
        rotation={[0, 0, -1.594]}
        scale={0.009}
      />
      <mesh
        
        
        geometry={nodes.Object_184.geometry}
        material={materials['Material.002']}
        position={[0.163, 2.318, 0.2]}
        rotation={[0, 0, -1.459]}
        scale={0.006}
      />
      <mesh
        
        
        geometry={nodes.Object_186.geometry}
        material={materials['Material.002']}
        position={[0.267, 3.598, 0.044]}
        rotation={[0, 0, -1.459]}
        scale={0.011}
      />
      <mesh
        
        
        geometry={nodes.Object_188.geometry}
        material={materials['Material.002']}
        position={[0.133, 2.391, 0.074]}
        rotation={[-3.139, 0.027, 1.459]}
        scale={0.009}
      />
      <mesh
        
        
        geometry={nodes.Object_190.geometry}
        material={materials['Material.002']}
        position={[0.075, 2.483, -0.636]}
        rotation={[2.018, -1.447, 0.444]}
        scale={0.009}
      />
      <mesh
        
        
        geometry={nodes.Object_192.geometry}
        material={materials['Material.002']}
        position={[0.519, 2.707, -1.171]}
        rotation={[-3.139, 0.027, 1.483]}
        scale={0.01}
      />
      <mesh
        
        
        geometry={nodes.Object_194.geometry}
        material={materials['Material.002']}
        position={[0.572, 2.646, -1.772]}
        rotation={[-3.139, 0.027, 1.483]}
        scale={0.009}
      />
      <mesh
        
        
        geometry={nodes.Object_196.geometry}
        material={materials['Material.002']}
        position={[-0.047, 4.115, -0.389]}
        rotation={[-3.139, 0.027, 1.483]}
        scale={0.014}
      />
      <mesh
        
        
        geometry={nodes.Object_198.geometry}
        material={materials['Material.002']}
        position={[0.332, 2.459, -0.11]}
        rotation={[-3.139, 0.027, 1.483]}
        scale={0.013}
      />
      <mesh
        
        
        geometry={nodes.Object_200.geometry}
        material={materials['Material.002']}
        position={[1.295, 3.789, -0.852]}
        rotation={[-3.139, 0.027, 1.483]}
        scale={0.021}
      />
      <mesh
        
        
        geometry={nodes.Object_202.geometry}
        material={materials['Material.002']}
        position={[1.077, 3.034, -0.437]}
        rotation={[-3.139, 0.027, 1.483]}
        scale={0.009}
      />
      <mesh
        
        
        geometry={nodes.Object_204.geometry}
        material={materials['Material.002']}
        position={[0.861, 2.313, 0.508]}
        rotation={[-3.139, 0.027, 1.483]}
        scale={0.014}
      />
      <mesh
        
        
        geometry={nodes.Object_206.geometry}
        material={materials['Material.002']}
        position={[0.899, 3.073, -0.146]}
        rotation={[-3.139, 0.027, 1.483]}
        scale={0.013}
      />
      <mesh
        
        
        geometry={nodes.Object_208.geometry}
        material={materials['Material.002']}
        position={[0.448, 2.514, 0.444]}
        rotation={[0, 0, 1.726]}
        scale={0.011}
      />
      <mesh
        
        
        geometry={nodes.Object_210.geometry}
        material={materials['Material.002']}
        position={[1.562, 3.668, -0.216]}
        rotation={[-3.141, -0.027, -1.567]}
        scale={0.021}
      />
      <mesh
        
        
        geometry={nodes.Object_212.geometry}
        material={materials['Material.002']}
        position={[0.44, 2.918, 0.039]}
        rotation={[3.137, -0.027, -1.727]}
        scale={0.009}
      />
      <mesh
        
        
        geometry={nodes.Object_214.geometry}
        material={materials['Material.002']}
        position={[0.649, 4.177, -0.812]}
        rotation={[3.137, -0.027, -1.727]}
        scale={0.014}
      />
      <mesh
        
        
        geometry={nodes.Object_216.geometry}
        material={materials['Material.002']}
        position={[0.426, 2.329, 0.398]}
        rotation={[0, 0, 1.751]}
        scale={0.006}
      />
      <mesh
        
        
        geometry={nodes.Object_218.geometry}
        material={materials['Material.002']}
        position={[1.305, 3.27, -0.689]}
        rotation={[-3.141, 0.027, 1.558]}
        scale={0.011}
      />
      <mesh
        
        
        geometry={nodes.Object_220.geometry}
        material={materials['Material.002']}
        position={[0.305, 1.958, -0.428]}
        rotation={[-3.139, 0.027, 1.483]}
        scale={0.009}
      />
      <mesh
        
        
        geometry={nodes.Object_222.geometry}
        material={materials['Material.002']}
        position={[0.293, 2.052, -0.745]}
        rotation={[-3.139, 0.027, 1.483]}
        scale={0.013}
      />
      <mesh
        
        
        geometry={nodes.Object_224.geometry}
        material={materials['Material.002']}
        position={[-0.096, 2.13, 0.04]}
        rotation={[0, 0, 1.587]}
        scale={0.011}
      />
      <mesh
        
        
        geometry={nodes.Object_226.geometry}
        material={materials['Material.002']}
        position={[0.098, 1.902, -0.013]}
        rotation={[0, 0, 1.751]}
        scale={0.006}
      />
      <mesh
        
        
        geometry={nodes.Object_228.geometry}
        material={materials['Material.002']}
        position={[0.308, 3.082, -0.994]}
        rotation={[-3.139, 0.027, 1.483]}
        scale={0.012}
      />
      <mesh
        material-color={"#ffffff"} 
        geometry={nodes.Object_230.geometry}
        material={materials['Material.002']}
        position={[0.299, 2.231, -0.2]}
        rotation={[-3.139, 0.027, 1.483]}
        scale={0.009}
      />
      <mesh
        
        
        geometry={nodes.Object_232.geometry}
        material={materials['Material.002']}
        position={[0.188, 1.928, 0.212]}
        rotation={[0, 0, 1.549]}
        scale={0.011}
      />
      <mesh
        
        
        geometry={nodes.Object_234.geometry}
        material={materials['Material.002']}
        position={[-0.424, 1.564, -0.092]}
        rotation={[0, 0, 3.062]}
        scale={0.011}
      />
      <mesh
        
        
        geometry={nodes.Object_236.geometry}
        material={materials['Material.002']}
        position={[-0.254, 2.257, -0.483]}
        rotation={[3.115, 0, 3.13]}
        scale={0.01}
      />
      <mesh
        
        
        geometry={nodes.Object_238.geometry}
        material={materials['Material.002']}
        position={[-0.278, 1.703, -0.108]}
        rotation={[3.115, -0.002, -3.062]}
        scale={0.009}
      />
      <mesh
        
        
        geometry={nodes.Object_240.geometry}
        material={materials['Material.002']}
        position={[0.296, 2.712, -0.65]}
        rotation={[3.115, -0.002, -3.062]}
        scale={0.007}
      />
      <mesh
        
        
        geometry={nodes.Object_242.geometry}
        material={materials['Material.002']}
        position={[-0.121, 2.243, -0.971]}
        rotation={[0, 0, -1.617]}
        scale={0.011}
      />
      <mesh
        
        
        geometry={nodes.Object_244.geometry}
        material={materials['Material.002']}
        position={[-0.165, 1.394, 0.668]}
        rotation={[-3.115, 0, 0]}
        scale={0.007}
      />
      <mesh
        
        
        geometry={nodes.Object_246.geometry}
        material={materials['Material.002']}
        position={[0.702, 2.606, -0.165]}
        rotation={[-3.115, 0, 0]}
        scale={0.009}
      />
      <mesh
        
        
        geometry={nodes.Object_248.geometry}
        material={materials['Material.002']}
        position={[0.804, 2.563, -0.333]}
        rotation={[0, 0, -3.049]}
        scale={0.006}
      />
      <mesh
        
        
        geometry={nodes.Object_250.geometry}
        material={materials['Material.002']}
        position={[-0.478, 1.727, -0.696]}
        rotation={[-3.139, 0.027, 1.483]}
        scale={0.009}
      />
      <mesh
        
        
        geometry={nodes.Object_252.geometry}
        material={materials['Material.002']}
        position={[-0.121, 1.978, -1.19]}
        rotation={[0, 0, -1.605]}
        scale={0.011}
      />
      <mesh
        
        
        geometry={nodes.Object_254.geometry}
        material={materials['Material.002']}
        position={[-0.1, 5.263, -2.899]}
        rotation={[-3.115, 0, 0]}
        scale={0.013}
      />
      <mesh
        
        
        geometry={nodes.Object_256.geometry}
        material={materials['Material.002']}
        position={[-0.86, 4.676, -1.322]}
        rotation={[0, 0, -3.117]}
        scale={0.006}
      />
      <mesh
        
        
        geometry={nodes.Object_258.geometry}
        material={materials['Material.002']}
        position={[-1.078, 4.619, -1.547]}
        rotation={[0, 0, -3.117]}
        scale={0.011}
      />
      <mesh
        
        
        geometry={nodes.Object_260.geometry}
        material={materials['Material.002']}
        position={[-0.939, 4.753, -1.448]}
        rotation={[3.115, 0.001, 3.117]}
        scale={0.009}
      />
      <mesh
        
        
        geometry={nodes.Object_262.geometry}
        material={materials['Material.002']}
        position={[-0.619, 4.736, -2.158]}
        rotation={[-1.624, -0.025, 3.14]}
        scale={0.009}
      />
      <mesh
        
        
        geometry={nodes.Object_264.geometry}
        material={materials['Material.002']}
        position={[-0.509, 5.324, -1.886]}
        rotation={[0, 0, 0.024]}
        scale={0.011}
      />
      <mesh
        
        
        geometry={nodes.Object_266.geometry}
        material={materials['Material.002']}
        position={[0.37, 5.285, -1.728]}
        rotation={[-3.115, -0.001, -0.024]}
        scale={0.009}
      />
      <mesh
        
        
        geometry={nodes.Object_268.geometry}
        material={materials['Material.002']}
        position={[-0.617, 4.538, -2.1]}
        rotation={[1.624, 0.024, -0.001]}
        scale={0.009}
      />
      <mesh
        
        
        geometry={nodes.Object_270.geometry}
        material={materials['Material.002']}
        position={[-0.236, 5.048, -1.393]}
        scale={0.011}
      />
      <mesh
        
        
        geometry={nodes.Object_272.geometry}
        material={materials['Material.002']}
        position={[0.359, 5.699, -2.169]}
        rotation={[-3.115, 0, 0]}
        scale={0.015}
      />
      <mesh
        
        
        geometry={nodes.Object_274.geometry}
        material={materials['Material.002']}
        position={[-0.537, 5.065, -0.94]}
        rotation={[-3.115, 0, 0]}
        scale={0.009}
      />
      <mesh
        
        
        geometry={nodes.Object_276.geometry}
        material={materials['Material.002']}
        position={[-0.483, 4.652, -1.266]}
        rotation={[-3.115, 0, 0]}
        scale={0.014}
      />
      <mesh
        
        
        geometry={nodes.Object_278.geometry}
        material={materials['Material.002']}
        position={[-0.741, 4.985, -2.38]}
        rotation={[-3.115, 0, 0]}
        scale={0.013}
      />
      <mesh
        
        
        geometry={nodes.Object_280.geometry}
        material={materials['Material.002']}
        position={[-0.36, 5.132, -1.446]}
        rotation={[0, 0, 0.024]}
        scale={0.006}
      />
      <mesh
        
        
        geometry={nodes.Object_282.geometry}
        material={materials['Material.002']}
        position={[-1.056, 5.694, -1.648]}
        rotation={[-3.115, 0, 0]}
        scale={0.014}
      />
      <mesh
        
        
        geometry={nodes.Object_284.geometry}
        material={materials['Material.002']}
        position={[-0.749, 5.42, -1.174]}
        rotation={[-3.115, 0, 0]}
        scale={0.014}
      />
      <mesh
        
        
        geometry={nodes.Object_286.geometry}
        material={materials['Material.002']}
        position={[-1.114, 5.398, -1.481]}
        rotation={[-3.115, 0, 0]}
        scale={0.013}
      />
      <mesh
        
        
        geometry={nodes.Object_288.geometry}
        material={materials['Material.002']}
        position={[-1.182, 4.944, -1.202]}
        rotation={[3.115, 0.002, 3.073]}
        scale={0.009}
      />
      <mesh
        
        
        geometry={nodes.Object_290.geometry}
        material={materials['Material.002']}
        position={[-1.285, 5.163, -1.174]}
        rotation={[3.115, 0.002, 3.073]}
        scale={0.014}
      />
      <mesh
        
        
        geometry={nodes.Object_292.geometry}
        material={materials['Material.002']}
        position={[-0.993, 5.102, -1.633]}
        rotation={[3.115, 0.002, 3.073]}
        scale={0.013}
      />
      <mesh
        
        
        geometry={nodes.Object_294.geometry}
        material={materials['Material.002']}
        position={[0.039, 4.96, -1.751]}
        rotation={[-3.115, 0, 0]}
        scale={0.009}
      />
      <mesh
        
        
        geometry={nodes.Object_296.geometry}
        material={materials['Material.002']}
        position={[-0.323, 4.889, -1.985]}
        rotation={[-3.115, 0, 0]}
        scale={0.013}
      />
      <mesh
        
        
        geometry={nodes.Object_298.geometry}
        material={materials['Material.002']}
        position={[0.253, 4.862, -0.816]}
        rotation={[0, 0, -3.073]}
        scale={0.011}
      />
      <mesh
        
        
        geometry={nodes.Object_300.geometry}
        material={materials['Material.002']}
        position={[0.24, 4.648, -1.157]}
        rotation={[0, 0, -3.049]}
        scale={0.006}
      />
      <mesh
        
        
        geometry={nodes.Object_302.geometry}
        material={materials['Material.002']}
        position={[-0.242, 4.487, -1.94]}
        rotation={[-3.115, 0, 0]}
        scale={0.016}
      />
      <mesh
        
        
        geometry={nodes.Object_304.geometry}
        material={materials['Material.002']}
        position={[-0.06, 4.618, -1.737]}
        rotation={[-3.115, 0, 0]}
        scale={0.009}
      />
      <mesh
        
        
        geometry={nodes.Object_306.geometry}
        material={materials['Material.002']}
        position={[1.041, 4.419, -1.09]}
        rotation={[0, 0, -3.073]}
        scale={0.011}
      />
      <mesh
        
        
        geometry={nodes.Object_308.geometry}
        material={materials['Material.002']}
        position={[1.264, 4.702, -1.059]}
        rotation={[0, 0, 1.683]}
        scale={0.009}
      />
      <mesh
        
        
        geometry={nodes.Object_310.geometry}
        material={materials['Material.002']}
        position={[0.154, 4.567, -1.852]}
        rotation={[0, 0, 1.683]}
        scale={0.011}
      />
      <mesh
        
        
        geometry={nodes.Object_312.geometry}
        material={materials['Material.002']}
        position={[0.524, 4.451, -1.753]}
        rotation={[3.139, -0.027, -1.683]}
        scale={0.009}
      />
      <mesh
        
        
        geometry={nodes.Object_314.geometry}
        material={materials['Material.002']}
        position={[1.56, 5.553, -3.282]}
        rotation={[-3.139, 0.027, 1.483]}
        scale={0.021}
      />
      <mesh
        
        
        geometry={nodes.Object_316.geometry}
        material={materials['Material.002']}
        position={[1.6, 4.549, -1.46]}
        rotation={[-3.139, 0.027, 1.483]}
        scale={0.009}
      />
      <mesh
        
        
        geometry={nodes.Object_318.geometry}
        material={materials['Material.002']}
        position={[1.421, 5.002, -1.868]}
        rotation={[-3.139, 0.027, 1.483]}
        scale={0.013}
      />
      <mesh
        
        
        geometry={nodes.Object_320.geometry}
        material={materials['Material.002']}
        position={[0.659, 4.503, -0.903]}
        rotation={[3.137, -0.027, -1.727]}
        scale={0.021}
      />
      <mesh
        
        
        geometry={nodes.Object_322.geometry}
        material={materials['Material.002']}
        position={[0.694, 4.794, -1.729]}
        rotation={[3.137, -0.027, -1.727]}
        scale={0.009}
      />
      <mesh
        
        
        geometry={nodes.Object_324.geometry}
        material={materials['Material.002']}
        position={[0.9, 4.927, -1.432]}
        rotation={[3.137, -0.027, -1.727]}
        scale={0.014}
      />
      <mesh
        
        
        geometry={nodes.Object_326.geometry}
        material={materials['Material.002']}
        position={[0.88, 4.707, -2.657]}
        rotation={[-3.139, 0.027, 1.483]}
        scale={0.021}
      />
      <mesh
        
        
        geometry={nodes.Object_328.geometry}
        material={materials['Material.002']}
        position={[-0.357, 5.719, -2.976]}
        rotation={[-3.139, 0.027, 1.483]}
        scale={0.013}
      />
      <mesh
        
        
        geometry={nodes.Object_330.geometry}
        material={materials['Material.002']}
        position={[0.411, 4.588, -2.418]}
        rotation={[3.115, -0.002, -3.062]}
        scale={0.007}
      />
      <mesh
        
        
        geometry={nodes.Object_332.geometry}
        material={materials['Material.002']}
        position={[-0.022, 3.581, -2.665]}
        rotation={[3.115, 0.002, 3.085]}
        scale={0.021}
      />
      <mesh
        
        
        geometry={nodes.Object_334.geometry}
        material={materials['Material.002']}
        position={[0.523, 4.13, -1.322]}
        rotation={[0, 0, 0.082]}
        scale={0.006}
      />
      <mesh
        
        
        geometry={nodes.Object_336.geometry}
        material={materials['Material.002']}
        position={[0.923, 4.231, -1.547]}
        rotation={[0, 0, 0.082]}
        scale={0.011}
      />
      <mesh
        
        
        geometry={nodes.Object_338.geometry}
        material={materials['Material.002']}
        position={[0.607, 4.057, -1.448]}
        rotation={[-3.115, -0.002, -0.082]}
        scale={0.009}
      />
      <mesh
        
        
        geometry={nodes.Object_340.geometry}
        material={materials['Material.002']}
        position={[0.286, 4.056, -2.158]}
        rotation={[1.624, 0.082, -0.004]}
        scale={0.009}
      />
      <mesh
        
        
        geometry={nodes.Object_342.geometry}
        material={materials['Material.002']}
        position={[0.21, 3.463, -1.886]}
        rotation={[0, 0, -3.06]}
        scale={0.011}
      />
      <mesh
        
        
        geometry={nodes.Object_344.geometry}
        material={materials['Material.002']}
        position={[-0.671, 3.451, -1.728]}
        rotation={[3.115, 0.002, 3.06]}
        scale={0.009}
      />
      <mesh
        
        
        geometry={nodes.Object_346.geometry}
        material={materials['Material.002']}
        position={[0.521, 4.256, -2.1]}
        rotation={[-1.624, -0.081, 3.137]}
        scale={0.009}
      />
      <mesh
        
        
        geometry={nodes.Object_348.geometry}
        material={materials['Material.002']}
        position={[-0.078, 3.716, -1.554]}
        rotation={[0, 0, -3.085]}
        scale={0.011}
      />
      <mesh
        
        
        geometry={nodes.Object_350.geometry}
        material={materials['Material.002']}
        position={[0.543, 3.644, -2.169]}
        rotation={[3.115, 0.002, 3.085]}
        scale={0.021}
      />
      <mesh
        
        
        geometry={nodes.Object_352.geometry}
        material={materials['Material.002']}
        position={[0.22, 3.773, -1.294]}
        rotation={[3.115, 0.002, 3.085]}
        scale={0.009}
      />
      <mesh
        
        
        geometry={nodes.Object_354.geometry}
        material={materials['Material.002']}
        position={[0.056, 4.367, -1.298]}
        rotation={[3.115, 0.002, 3.085]}
        scale={0.014}
      />
      <mesh
        
        
        geometry={nodes.Object_356.geometry}
        material={materials['Material.002']}
        position={[0.422, 3.814, -2.38]}
        rotation={[3.115, 0.002, 3.085]}
        scale={0.013}
      />
      <mesh
        
        
        geometry={nodes.Object_358.geometry}
        material={materials['Material.002']}
        position={[0.05, 3.177, -1.952]}
        rotation={[0, 0, -3.06]}
        scale={0.006}
      />
      <mesh
        
        
        geometry={nodes.Object_360.geometry}
        material={materials['Material.002']}
        position={[0.61, 3.046, -1.238]}
        rotation={[3.115, 0.002, 3.085]}
        scale={0.021}
      />
      <mesh
        
        
        geometry={nodes.Object_362.geometry}
        material={materials['Material.002']}
        position={[0.454, 3.38, -1.174]}
        rotation={[3.115, 0.002, 3.085]}
        scale={0.014}
      />
      <mesh
        
        
        geometry={nodes.Object_364.geometry}
        material={materials['Material.002']}
        position={[0.936, 3.423, -1.481]}
        rotation={[3.115, 0.002, 3.085]}
        scale={0.013}
      />
      <mesh
        
        
        geometry={nodes.Object_366.geometry}
        material={materials['Material.002']}
        position={[0.86, 3.88, -1.202]}
        rotation={[-3.115, -0.003, -0.125]}
        scale={0.009}
      />
      <mesh
        
        
        geometry={nodes.Object_368.geometry}
        material={materials['Material.002']}
        position={[0.975, 3.668, -1.174]}
        rotation={[-3.115, -0.003, -0.125]}
        scale={0.014}
      />
      <mesh
        
        
        geometry={nodes.Object_370.geometry}
        material={materials['Material.002']}
        position={[0.681, 2.786, -1.375]}
        rotation={[-3.115, -0.003, -0.125]}
        scale={0.013}
      />
      <mesh
        
        
        geometry={nodes.Object_372.geometry}
        material={materials['Material.002']}
        position={[-0.359, 3.794, -1.751]}
        rotation={[3.115, 0.002, 3.085]}
        scale={0.009}
      />
      <mesh
        
        
        geometry={nodes.Object_374.geometry}
        material={materials['Material.002']}
        position={[0.179, 3.933, -1.985]}
        rotation={[3.115, 0.002, 3.085]}
        scale={0.013}
      />
      <mesh
        
        
        geometry={nodes.Object_376.geometry}
        material={materials['Material.002']}
        position={[-0.581, 3.942, -1.104]}
        rotation={[0, 0, 0.125]}
        scale={0.011}
      />
      <mesh
        
        
        geometry={nodes.Object_378.geometry}
        material={materials['Material.002']}
        position={[-0.577, 4.094, -1.157]}
        rotation={[0, 0, 0.15]}
        scale={0.006}
      />
      <mesh
        
        
        geometry={nodes.Object_380.geometry}
        material={materials['Material.002']}
        position={[-0.279, 4.142, -1.737]}
        rotation={[3.115, 0.002, 3.085]}
        scale={0.009}
      />
      <mesh
        
        
        geometry={nodes.Object_382.geometry}
        material={materials['Material.002']}
        position={[-0.715, 4.157, -1.059]}
        rotation={[0, 0, -1.402]}
        scale={0.009}
      />
      <mesh
        
        
        geometry={nodes.Object_384.geometry}
        material={materials['Material.002']}
        position={[-0.496, 4.181, -1.852]}
        rotation={[0, 0, -1.402]}
        scale={0.011}
      />
      <mesh
        
        
        geometry={nodes.Object_386.geometry}
        material={materials['Material.002']}
        position={[-0.267, 4.006, -2.976]}
        rotation={[3.138, -0.027, -1.715]}
        scale={0.021}
      />
      <mesh
        
        
        geometry={nodes.Object_388.geometry}
        material={materials['Material.002']}
        position={[-0.751, 4.145, -2.418]}
        rotation={[-3.115, 0.001, 0.023]}
        scale={0.007}
      />
      <mesh
        
        
        geometry={nodes.Object_390.geometry}
        material={materials['Material.002']}
        position={[-0.786, 1.861, -0.575]}
        rotation={[0, 0, -3.117]}
        scale={0.011}
      />
      <mesh
        
        
        geometry={nodes.Object_392.geometry}
        material={materials['Material.002']}
        position={[0.002, 1.841, -0.266]}
        rotation={[0, 0, -3.073]}
        scale={0.011}
      />
      <mesh
        
        
        geometry={nodes.Object_394.geometry}
        material={materials['Material.002']}
        position={[-0.047, 1.689, -0.254]}
        rotation={[-3.139, 0.027, 1.483]}
        scale={0.006}
      />
      <mesh
        
        
        geometry={nodes.Object_396.geometry}
        material={materials['Material.002']}
        position={[1.424, 3.525, -0.743]}
        rotation={[-3.139, 0.027, 1.483]}
        scale={0.009}
      />
      <mesh
        
        
        geometry={nodes.Object_398.geometry}
        material={materials['Material.002']}
        position={[1.172, 2.955, -0.694]}
        rotation={[-2.862, -1.515, 1.851]}
        scale={0.009}
      />
      <mesh
        
        
        geometry={nodes.Object_400.geometry}
        material={materials['Material.002']}
        position={[1.1, 2.753, -0.277]}
        rotation={[-3.141, -0.027, -1.531]}
        scale={0.013}
      />
      <mesh
        
        
        geometry={nodes.Object_402.geometry}
        material={materials['Material.002']}
        position={[0.809, 2.923, -0.354]}
        rotation={[-3.141, 0.027, 1.542]}
        scale={0.013}
      />
      <mesh
        
        
        geometry={nodes.Object_404.geometry}
        material={materials['Material.002']}
        position={[1.172, 3.52, -1.472]}
        rotation={[-2.899, -1.515, 1.851]}
        scale={0.009}
      />
      <mesh
        
        
        geometry={nodes.Object_406.geometry}
        material={materials['Material.002']}
        position={[1.352, 3.346, -1.408]}
        rotation={[2.815, 1.515, -1.281]}
        scale={0.009}
      />
      <mesh
        
        
        geometry={nodes.Object_408.geometry}
        material={materials['Material.002']}
        position={[1.1, 3.422, -0.884]}
        rotation={[3.106, -0.027, -1.531]}
        scale={0.013}
      />
      <mesh
        
        
        geometry={nodes.Object_410.geometry}
        material={materials['Material.002']}
        position={[0.809, 3.5, -1.131]}
        rotation={[3.106, 0.027, 1.542]}
        scale={0.013}
      />
      <mesh
        
        
        geometry={nodes.Object_412.geometry}
        material={materials['Material.002']}
        position={[0.869, 3.19, -1.732]}
        rotation={[3.108, -0.027, -1.457]}
        scale={0.01}
      />
      <mesh
        
        
        geometry={nodes.Object_414.geometry}
        material={materials['Material.002']}
        position={[1.943, 4.368, -1.701]}
        rotation={[3.132, 0.002, 0.07]}
        scale={0.021}
      />
      <mesh
        
        
        geometry={nodes.Object_416.geometry}
        material={materials['Material.002']}
        position={[0.352, 4.236, -3.006]}
        rotation={[-3.115, 0, 0]}
        scale={0.016}
      />
      <mesh
        
        
        geometry={nodes.Object_418.geometry}
        material={materials['Material.002']}
        position={[0.154, 4.421, -2.526]}
        rotation={[0, 0, 1.683]}
        scale={0.011}
      />
      <mesh
        
        
        geometry={nodes.Object_420.geometry}
        material={materials['Material.002']}
        position={[0.054, 5.658, -2.231]}
        rotation={[-3.115, 0, 0]}
        scale={0.013}
      />
      <mesh
        
        
        geometry={nodes.Object_422.geometry}
        material={materials['Material.002']}
        position={[0.618, 5.554, -2.561]}
        rotation={[-3.115, 0, 0]}
        scale={0.013}
      />
      <mesh
        
        
        geometry={nodes.Object_424.geometry}
        material={materials['Material.002']}
        position={[0.708, 5.185, -2.532]}
        rotation={[-3.115, 0, 0]}
        scale={0.013}
      />
      <mesh
        
        
        geometry={nodes.Object_426.geometry}
        material={materials['Material.002']}
        position={[-0.141, 5.611, -1.941]}
        rotation={[-3.115, 0, 0]}
        scale={0.012}
      />
      <mesh
        
        
        geometry={nodes.Object_428.geometry}
        material={materials['Material.002']}
        position={[-0.703, 4.395, -0.162]}
        rotation={[-3.115, 0, 0]}
        scale={0.015}
      />
      <mesh
        
        
        geometry={nodes.Object_430.geometry}
        material={materials['Material.002']}
        position={[-0.896, 4.14, -0.118]}
        rotation={[-3.115, 0, 0]}
        scale={0.015}
      />
      <mesh
        
        
        geometry={nodes.Object_432.geometry}
        material={materials['Material.002']}
        position={[-0.896, 4.439, -0.639]}
        rotation={[-3.115, 0, 0]}
        scale={0.009}
      />
      <mesh
        
        
        geometry={nodes.Object_434.geometry}
        material={materials['Material.002']}
        position={[-0.961, 4.854, -0.845]}
        rotation={[-3.115, 0, 0]}
        scale={0.009}
      />
      <mesh
        
        
        geometry={nodes.Object_436.geometry}
        material={materials['Material.002']}
        position={[-1.331, 5.549, -2.406]}
        rotation={[-3.115, 0, 0]}
        scale={0.017}
      />
      <mesh
        
        
        geometry={nodes.Object_438.geometry}
        material={materials['Material.002']}
        position={[1.576, 4.14, -2.087]}
        rotation={[3.132, 0.002, 0.07]}
        scale={0.012}
      />
      <mesh
        
        
        geometry={nodes.Object_440.geometry}
        material={materials['Material.002']}
        position={[0.137, 2.681, -2.004]}
        rotation={[-3.115, 0, 0]}
        scale={0.012}
      />
      <mesh
        
        
        geometry={nodes.Object_442.geometry}
        material={materials['Material.002']}
        position={[0.711, 2.874, -1.77]}
        rotation={[-3.115, 0, 0]}
        scale={0.012}
      />
      <mesh
        
        
        geometry={nodes.Object_444.geometry}
        material={materials['Material.002']}
        position={[0.535, 2.413, -1.688]}
        rotation={[-3.115, 0, 0]}
        scale={0.012}
      />
      <mesh
        
        
        geometry={nodes.Object_446.geometry}
        material={materials['Material.002']}
        position={[1.174, 4.734, -4.05]}
        rotation={[3.115, 0.002, 3.085]}
        scale={0.015}
      />
      <mesh
        
        
        geometry={nodes.Object_448.geometry}
        material={materials['Material.002']}
        position={[0.304, 2.911, -2.103]}
        rotation={[3.115, 0.002, 3.085]}
        scale={0.015}
      />
      <mesh
        
        
        geometry={nodes.Object_450.geometry}
        material={materials['Material.002']}
        position={[-0.846, 5.115, -1.251]}
        rotation={[-3.115, 0, 0]}
        scale={0.014}
      />
      <mesh
        
        
        geometry={nodes.Object_452.geometry}
        material={materials['Material.002']}
        position={[-0.431, 6.634, -1.799]}
        rotation={[-3.115, 0, 0]}
        scale={0.014}
      />
      <mesh
        
        
        geometry={nodes.Object_454.geometry}
        material={materials['Material.002']}
        position={[-1.084, 5.719, -1.605]}
        rotation={[-3.115, 0, 0]}
        scale={0.008}
      />
      <mesh
        
        
        geometry={nodes.Object_456.geometry}
        material={materials['Material.002']}
        position={[-1.056, 5.967, -2.024]}
        rotation={[-3.115, 0, 0]}
        scale={0.008}
      />
      <mesh
        
        
        geometry={nodes.Object_458.geometry}
        material={materials['Material.002']}
        position={[-0.905, 5.849, -1.657]}
        rotation={[-3.115, 0, 0]}
        scale={0.008}
      />
      <mesh
        
        
        geometry={nodes.Object_460.geometry}
        material={materials['Material.002']}
        position={[-0.147, 6.392, -1.867]}
        rotation={[-3.115, 0, 0]}
        scale={0.014}
      />
      <mesh
        
        
        geometry={nodes.Object_462.geometry}
        material={materials['Material.002']}
        position={[0.041, 6.161, -1.458]}
        rotation={[-3.115, 0, 0]}
        scale={0.014}
      />
      <mesh
        
        
        geometry={nodes.Object_464.geometry}
        material={materials['Material.002']}
        position={[0.461, 6.02, -1.841]}
        rotation={[-3.115, 0, 0]}
        scale={0.014}
      />
      <mesh
        
        
        geometry={nodes.Object_466.geometry}
        material={materials['Material.002']}
        position={[0.732, 5.857, -2.698]}
        rotation={[-3.139, 0.027, 1.483]}
        scale={0.013}
      />
      <mesh
        
        
        geometry={nodes.Object_468.geometry}
        material={materials['Material.002']}
        position={[0.299, 6.327, -2.184]}
        rotation={[-3.139, 0.027, 1.483]}
        scale={0.013}
      />
      <mesh
        
        
        geometry={nodes.Object_470.geometry}
        material={materials['Material.002']}
        position={[1.108, 5.409, -2.976]}
        rotation={[-3.139, 0.027, 1.483]}
        scale={0.013}
      />
      <mesh
        
        
        geometry={nodes.Object_472.geometry}
        material={materials['Material.002']}
        position={[1.121, 5.927, -2.404]}
        rotation={[-3.139, 0.027, 1.483]}
        scale={0.013}
      />
      <mesh
        
        
        geometry={nodes.Object_474.geometry}
        material={materials['Material.002']}
        position={[1.604, 6.245, -2.414]}
        rotation={[-3.139, 0.027, 1.483]}
        scale={0.013}
      />
      <mesh
        
        
        geometry={nodes.Object_476.geometry}
        material={materials['Material.002']}
        position={[0.71, 6.395, -2.169]}
        rotation={[-3.115, 0, 0]}
        scale={0.021}
      />
      <mesh
        
        
        geometry={nodes.Object_478.geometry}
        material={materials['Material.002']}
        position={[1.125, 6.335, -2.169]}
        rotation={[-3.115, 0, 0]}
        scale={0.012}
      />
      <mesh
        
        
        geometry={nodes.Object_480.geometry}
        material={materials['Material.002']}
        position={[-0.308, 6.04, -2.169]}
        rotation={[-3.115, 0, 0]}
        scale={0.014}
      />
      <mesh
        
        
        geometry={nodes.Object_482.geometry}
        material={materials['Material.002']}
        position={[-1.538, 5.801, -1.838]}
        rotation={[-3.115, 0, 0]}
        scale={0.017}
      />
      <mesh
        
        
        geometry={nodes.Object_484.geometry}
        material={materials['Material.002']}
        position={[1.194, 4.638, -3.395]}
        rotation={[3.115, 0.002, 3.073]}
        scale={0.013}
      />
      <mesh
        
        
        geometry={nodes.Object_486.geometry}
        material={materials['Material.002']}
        position={[0.216, 4.578, -3.534]}
        rotation={[3.115, 0.002, 3.073]}
        scale={0.013}
      />
      <mesh
        
        
        geometry={nodes.Object_488.geometry}
        material={materials['Material.002']}
        position={[0.489, 4.924, -3.17]}
        rotation={[3.115, 0.002, 3.073]}
        scale={0.013}
      />
      <mesh
        
        
        geometry={nodes.Object_490.geometry}
        material={materials['Material.002']}
        position={[0.009, 5.239, -3.443]}
        rotation={[3.115, 0.002, 3.073]}
        scale={0.009}
      />
      <mesh
        
        
        geometry={nodes.Object_492.geometry}
        material={materials['Material.002']}
        position={[0.106, 4.887, -3.592]}
        rotation={[3.115, 0.002, 3.073]}
        scale={0.026}
      />
      <mesh
        
        
        geometry={nodes.Object_494.geometry}
        material={materials['Material.002']}
        position={[-0.988, 4.997, -3.77]}
        rotation={[3.115, 0.002, 3.073]}
        scale={0.009}
      />
      <mesh
        
        
        geometry={nodes.Object_499.geometry}
        material={materials['Material.010']}
        position={[0.003, 0.199, 2.278]}
        scale={0.064}
      />
      <mesh
        
        
        geometry={nodes.Object_501.geometry}
        material={materials['Material.015']}
        position={[-0.679, 0.026, 2.416]}
        scale={0.016}
      />
      <mesh
        
        
        geometry={nodes.Object_503.geometry}
        material={materials['Material.013']}
        position={[-0.789, 0.357, 1.962]}
        scale={0.016}
      />
      <mesh
        
        
        geometry={nodes.Object_505.geometry}
        material={materials['Material.011']}
        position={[0.791, 0.236, 2.002]}
        scale={0.016}
      />
      <mesh
        
        
        geometry={nodes.Object_507.geometry}
        material={materials['Material.012']}
        position={[0.569, 0.331, 1.76]}
        scale={0.016}
      />
      <mesh
        
        
        geometry={nodes.Object_509.geometry}
        material={materials['Material.017']}
        position={[-0.03, 0.078, 1.953]}
        scale={0.011}
      />
      <mesh
        
        
        geometry={nodes.Object_511.geometry}
        material={materials['Material.012']}
        position={[0.495, 0.146, 2.499]}
        scale={0.016}
      />
      <mesh
        
        
        geometry={nodes.Object_513.geometry}
        material={materials['Material.016']}
        position={[-0.027, -0.067, 2.746]}
        scale={0.016}
      />
      <mesh
        
        
        geometry={nodes.Object_515.geometry}
        material={materials['Material.014']}
        position={[-0.417, 0.146, 1.822]}
        scale={0.016}
      />
      <mesh
        
        
        geometry={nodes.Object_517.geometry}
        material={materials['Material.011']}
        position={[0.039, 0.279, 2.675]}
        scale={0.018}
      />
    </group>
  )
}

export default N
