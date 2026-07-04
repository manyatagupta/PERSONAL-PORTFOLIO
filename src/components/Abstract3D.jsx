import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { InstancedMesh, Object3D, MathUtils } from 'three';

const FallingLeaves = () => {
  const meshRef = useRef();
  const leafCount = 150;
  
  // Dummy object to calculate matrix transformations for each leaf
  const dummy = useMemo(() => new Object3D(), []);

  // Generate initial positions, rotations, and speeds for the leaves
  const leavesData = useMemo(() => {
    const data = [];
    for (let i = 0; i < leafCount; i++) {
      data.push({
        x: MathUtils.randFloatSpread(20), // spread across x
        y: MathUtils.randFloat(5, 15),    // start high up
        z: MathUtils.randFloatSpread(10), // spread across depth
        speedY: MathUtils.randFloat(0.01, 0.03), // falling speed
        speedX: MathUtils.randFloat(-0.01, 0.01), // wind drifting
        rotationSpeed: {
          x: MathUtils.randFloat(0.01, 0.05),
          y: MathUtils.randFloat(0.01, 0.05),
          z: MathUtils.randFloat(0.01, 0.05),
        },
        phase: MathUtils.randFloat(0, Math.PI * 2) // for sine wave swaying
      });
    }
    return data;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    leavesData.forEach((leaf, i) => {
      // Falling logic
      leaf.y -= leaf.speedY;
      
      // Wind/Swaying logic (sine wave based on time and phase)
      const swayX = Math.sin(time + leaf.phase) * 0.02;
      const swayZ = Math.cos(time + leaf.phase) * 0.01;

      leaf.x += leaf.speedX + swayX;
      leaf.z += swayZ;

      // Reset leaf to top if it falls below screen
      if (leaf.y < -10) {
        leaf.y = MathUtils.randFloat(10, 15);
        leaf.x = MathUtils.randFloatSpread(20);
      }

      // Update dummy object
      dummy.position.set(leaf.x, leaf.y, leaf.z);
      dummy.rotation.x += leaf.rotationSpeed.x;
      dummy.rotation.y += leaf.rotationSpeed.y;
      dummy.rotation.z += leaf.rotationSpeed.z;
      dummy.updateMatrix();
      
      // Apply to instanced mesh
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, leafCount]}>
      {/* A simple curved shape representing a leaf/petal */}
      <coneGeometry args={[0.1, 0.3, 3]} />
      <meshStandardMaterial 
        color="#838282" 
        transparent 
        opacity={0.6}
        roughness={0.8} 
        side={2} // DoubleSide
      />
    </instancedMesh>
  );
};

export const Abstract3D = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 10]} intensity={2} />
        <FallingLeaves />
      </Canvas>
    </div>
  );
};
