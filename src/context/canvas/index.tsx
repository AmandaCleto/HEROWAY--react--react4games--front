import React from 'react'
import { canvas, handleNextPosition, checkValidMoviment, ECanvas } from './helpers';

interface IProps {
    children: React.ReactNode;
}

export const CanvasContext = React.createContext({
    canvas: [],
    updateCanvas: (direction, currentPosition, walker) => null

});

function CanvasProvider(props: IProps) {
    const [canvasState, updateCanvasState] = React.useState({
        canvas: canvas,
        updateCanvas: (direction, currentPosition, walker) => {
            const nextPosition = handleNextPosition(direction, currentPosition);
            const nextMove = checkValidMoviment(nextPosition, walker);

            if (nextMove.valid) {
                updateCanvasState((prevState) => {
                    const newCanvas = Object.assign([], prevState.canvas);
                    const currentValue = newCanvas[currentPosition.y][currentPosition.x];

                    //muda pra floor o lugar q pisou
                    newCanvas[currentPosition.y][currentPosition.x] = ECanvas.FLOOR;

                    newCanvas[nextPosition.y][nextPosition.x] = currentValue;

                    return {
                        canvas: newCanvas,
                        updateCanvas: prevState.updateCanvas,
                    }

                });
            }

            return {
                nextPosition,
                nextMove
            }
        }
    });

    return (
        <CanvasContext.Provider value={canvasState}>
            {props.children}
        </CanvasContext.Provider>
    )
}

export default CanvasProvider;

























