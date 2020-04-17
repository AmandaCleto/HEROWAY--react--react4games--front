import React from 'react';
import { TILE_SIZE } from '../../settings/constants';

import './index.css';

const miniDemon = () => {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: TILE_SIZE * 8,
        left: TILE_SIZE * 4,
        width: TILE_SIZE,
        height: 100,
        backgroundImage: "url(./assets/MINI-DEMON.png)",
        backgroundRepeat: 'no-repeat',
        animation: 'miniDemon-animation 1s steps(4) infinite'
      }}
    />
  )
}

export default miniDemon;