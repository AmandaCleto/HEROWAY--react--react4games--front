import React from 'react';

import Tile from './tile'

import { canvas } from '../../context/canvas/helpers'

function getCanvasMap() {
    const tilesArray = [];
  
    for (let y = 0; y < canvas.length; y++) {
    const canvasY = canvas[y];
  
      for (let x = 0; x < canvasY.length; x++) {
        const canvasYX = canvasY[x];
  
        const position = { x: x, y: y };
        const text = canvas[y][x] || canvasYX;
  
        tilesArray.push(<Tile position={position} text={text} />)
      }
    }
  
    return tilesArray;
}

function Debugger() {
    const tiles = getCanvasMap();
    return (
        <div>
            {tiles}
        </div>
    )
}


export default Debugger