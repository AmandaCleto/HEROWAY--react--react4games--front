import React from 'react';
import CanvasProvider from '../context/canvas';
import Debugger from './debugger';
import Board from './board';
import ChestsProvider from '../context/chest';

function Game() {
    return (
    <CanvasProvider>
        <ChestsProvider>
            {/* <Debugger/> */}
            <Board />
        </ChestsProvider>
    </CanvasProvider>
    );
}

export default Game;