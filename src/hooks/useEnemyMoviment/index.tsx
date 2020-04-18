  
import useInterval from '@use-it/interval';
import React from 'react';
import { EDirection } from '../../settings/constants';
import { handleNextPosition } from '../../context/canvas/helpers'

function useEnemyMoviment(initialPosition) {
  const [positionState, updatePositionState] = React.useState(initialPosition);
  const [direction, updateDirectionState] = React.useState(EDirection.RIGHT);

  useInterval(function move() {
    var random = Math.floor(Math.random() * 4);
    var directionArray = Object.values(EDirection);
    const randomDirection = directionArray[random];

    const nextMoviment = handleNextPosition(randomDirection, positionState);

    updateDirectionState(randomDirection);
    updatePositionState(nextMoviment);
  }, 2000);

  return {
    position: positionState,
    direction: direction,
  }
}

export default useEnemyMoviment;