
import useEventListener from '@use-it/event-listener'
import React, {useState} from 'react';
import { TILE_SIZE, HEAD_OFSET } from '../../settings/constants';

import './index.css';

const initialPosition = {
  x: 15,
  y: 15,
};


const Hero = () => {
  const [positionState, updatePositionState] = useState(initialPosition);
  const [direction, updateDirectionState] = useState('RIGHT');

  useEventListener("keydown", (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      updatePositionState({ x: positionState.x, y: positionState.y - 1});
      updateDirectionState("LEFT");
    } else if (event.key === "ArrowRight") {
      updatePositionState({ x: positionState.x, y: positionState.y + 1});
      updateDirectionState("RIGHT");
    } else if (event.key === "ArrowDown") {
      updatePositionState({ x: positionState.x - 1, y: positionState.y });
    } else if (event.key === "ArrowUp") {
      updatePositionState({ x: positionState.x + 1, y: positionState.y });
    }
  });


  return (
    <div
      style={{
        position: 'absolute',
        bottom: TILE_SIZE * positionState.x,
        left: TILE_SIZE * positionState.y,
        width: TILE_SIZE,
        height: TILE_SIZE + HEAD_OFSET,
        backgroundImage: "url(./assets/HERO.png)",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: `0px -${TILE_SIZE - HEAD_OFSET}px`,
        animation: 'hero-animation 1s steps(4) infinite',
        transform: `scaleX(${direction === 'RIGHT' ? 1 : -1})`
      }}
    />
  )
}

export default Hero;