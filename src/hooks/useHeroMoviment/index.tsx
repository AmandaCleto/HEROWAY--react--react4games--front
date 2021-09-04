import useEventListener from '@use-it/event-listener';
import React from 'react';
import { EDirection, EWalker } from '../../settings/constants';

import { CanvasContext } from '../../context/canvas';
import { ChestsContext } from '../../context/chest';


function useHeroMoviment(initialPosition) {
  const canvasContext = React.useContext(CanvasContext);
  const chestsContext = React.useContext(ChestsContext);

  const [positionState, updatePositionState] = React.useState(initialPosition);
  const [direction, updateDirectionState] = React.useState(EDirection.RIGHT);

  useEventListener('keydown', (event: React.KeyboardEvent<HTMLDivElement>) => {
    const direction = event.key as EDirection;

    if (direction.indexOf('Arrow') === -1) {
      return;
    }

    const { nextMove, nextPosition } = canvasContext.updateCanvas(direction, positionState, EWalker.HERO);

    if (nextMove.valid) {
      updatePositionState(nextPosition);
      updateDirectionState(direction);
    }

    if (nextMove.dead) {
      setTimeout(() => {
        alert("Morreu! 👻")
      })
      window.location.reload();
    }

    if(nextMove.chest) {
      chestsContext.updateOpenedChests(nextPosition);
    }

    //ganha
    if (chestsContext.totalChests === chestsContext.openedChests.total && nextMove.door) {
      alert('Venceu! 🚀');
    }
  });

  return {
    position: positionState,
    direction: direction,
  }
}

export default useHeroMoviment;