import React from 'react';
import { TILE_SIZE, HEAD_OFSET } from '../../settings/constants';
import useHeroMoviment from '../../hooks/useHeroMoviment';

import './index.css';

const initialPosition = {
  x: 15,
  y: 15,
};

const Hero = () => {
  const moviment = useHeroMoviment(initialPosition);

  return (
    <div
      style={{
        position: 'absolute',
        bottom: TILE_SIZE * moviment.position.x,
        left: TILE_SIZE * moviment.position.y,
        width: TILE_SIZE,
        height: TILE_SIZE + HEAD_OFSET,
        backgroundImage: "url(./assets/HERO.png)",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: `0px -${TILE_SIZE - HEAD_OFSET}px`,
        animation: 'hero-animation 1s steps(4) infinite',
        transform: `scaleX(${moviment.direction === 'RIGHT' ? 1 : -1})`,
        zIndex: 1
      }}
    />
  )
}

export default Hero;