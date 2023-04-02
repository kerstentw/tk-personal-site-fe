import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame} from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { Sprite, SpriteMaterial, SphereGeometry } from 'three';

const SEPARATION = 10,
  AMOUNTX = 50,
  AMOUNTY = 2;

const Particles = React.memo(({ count }) => {
  const particles = useRef();

  useEffect(() => {
    const material = new SpriteMaterial({ color: 0x111111 });

    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        const particle = new Sprite(material);
        particle.position.x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
        particle.position.z = iy * SEPARATION - (AMOUNTY * SEPARATION);
        particles.current.add(particle);
      }
    }
  }, []);

  useFrame(() => {
    let i = 0;
    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        const particle = particles.current.children[i++];
        particle.position.y = (Math.sin((ix + count) * 0.5) * 5);
        particle.scale.set(0.5,0.5);
      }
    }
  });

  return <group ref={particles}></group>;
});

const WaveParticles = () => {
  const [count, setCount] = React.useState(0);

  const SPEED = 0.05;
  const FRAME_RATE = 10

  useEffect(() => {
    const animation = setInterval(() => setCount((c) => c + SPEED), FRAME_RATE);
    return () => clearInterval(animation);
  }, []);

  return (
    <Canvas
      style={
        { 

        }
      }
    >
      <Particles count={count}/>
    </Canvas>
  );
};

export default WaveParticles;