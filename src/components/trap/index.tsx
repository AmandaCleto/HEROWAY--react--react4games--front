
import React from 'react';
import { TILE_SIZE, HEAD_OFFSET } from '../../settings/constants';

import './index.css';

const Trap = () => {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: TILE_SIZE * 8,
        left: TILE_SIZE * 8,
        width: TILE_SIZE,
        height: 100,
        backgroundImage: "url(./assets/TRAP.png)",
        backgroundRepeat: 'no-repeat',
        animation: 'trap-animation 1s steps(8) infinite'
      }}
    />
  )
}

export default Trap;