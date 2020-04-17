import React from 'react';

import Hero from '../hero';
import MiniDemon from '../miniDemon';
import Demon from '../demon';
import Chest from '../chest';
import Trap from '../trap';
import { GAME_SIZE } from '../../settings/constants';

const Board = () => {
  return (
    <div>
      <Trap />
      <Chest />
      <Demon />
      <MiniDemon />
      <Hero />
      <img src="./assets/tileset.gif" alt="" width={GAME_SIZE} height={GAME_SIZE} />
    </div>
  );
}

export default Board;