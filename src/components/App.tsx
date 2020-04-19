import React from 'react';
import './App.css';

import Board from './board';
import { GAME_SIZE } from '../settings/constants';

import Debugger from './debugger';

function App() {
  return (
    <div className="App">
      <div
        style={{
          position: 'relative',
          width: GAME_SIZE,
          height: GAME_SIZE,
        }}
      >
      <Debugger/>
      <Board />
      </div>
    </div>
  );
}

export default App;