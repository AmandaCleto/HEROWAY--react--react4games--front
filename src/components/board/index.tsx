import React from 'react';
import Hero from '../hero';
import { GAME_SIZE } from '../../settings/constants';
import MiniDemon from '../miniDemon';
import Demon from '../demon';
import Chest from '../chest';
import Trap from '../trap';

const Board = () => {
  return (
    <div>
      <MiniDemon initialPosition={{ x: 10, y: 8 }} />
      <MiniDemon initialPosition={{ x: 10, y: 10 }} />

      <Demon />
      <Hero />
      <Chest />
      <Trap />
      <img src="./assets/tileset.gif" alt="" width={GAME_SIZE} height={GAME_SIZE} />
    </div>
  );
}

export default Board;