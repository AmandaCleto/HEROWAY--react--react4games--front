import useEventListener from '@use-it/event-listener'
import React, {useState} from 'react';

function useHeroMoviment(initialPosition) {
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

    return {
        position: positionState,
        direction: direction
    }
}

export default useHeroMoviment