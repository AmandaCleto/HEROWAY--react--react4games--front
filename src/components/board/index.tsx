import React from 'react';

import Hero from '../hero';
import { GAME_SIZE } from '../../settings/constants';

const Board = () => {
  return (
    <div>
      <Hero />
      <img src="./assets/tileset.gif" alt="" width={GAME_SIZE} height={GAME_SIZE} />
    </div>
  );
}

export default Board;