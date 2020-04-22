import React from 'react';
import Hero from '../hero';
import { GAME_SIZE } from '../../settings/constants';
import MiniDemon from '../miniDemon';
import Demon from '../demon';
import Chest from '../chest';
import Trap from '../trap';
import { canvas, ECanvas } from '../../context/canvas/helpers';
import { ChestsContext } from '../../context/chest';

function getCanvasMap() {
  const array = [];

  for (let y = 0; y < canvas.length; y++) {
  const canvasY = canvas[y];

    for (let x = 0; x < canvasY.length; x++) {
      const canvasYX = canvasY[x];

      const position = { x: x, y: y };
      const text = canvas[y][x] || canvasYX;
      const key = `${x}-${y}`;

      /*
      if (text === ECanvas.DOOR) {
        array.push(<Hero key={key} initialPosition={position} />);
      }
      */
      if (text === ECanvas.TRAP) {
        array.push(<Trap key={key} initialPosition={position} />);
      }

      if (text === ECanvas.MINIDEMON) {
        array.push(<MiniDemon key={key} initialPosition={position} />);
      }

      if (text === ECanvas.DEMON) {
        array.push(<Demon key={key} initialPosition={position} />);
      }

      if (text === ECanvas.CHEST) {
        array.push(<Chest key={key} initialPosition={position} />);
      }

      if (text === ECanvas.HERO) {
        array.push(<Hero key={key} initialPosition={position} />);
      }
    }
  }

  return array;
}

const elements = getCanvasMap();

const Board = () => {
  const chestsContext = React.useContext(ChestsContext);

  return (
    <div>
      {elements}
      {
        chestsContext.totalChests === chestsContext.openedChests.total && (
          <img src="./assets/DOOR-OPEN.png" alt="door opened" style={{position: "absolute", top: 0, left: "578px"}}/>
        )
      }
      <img src="./assets/tileset.gif" alt="" width={GAME_SIZE} height={GAME_SIZE} />
    </div>
  );
}

export default Board;