import React, { useState } from 'react';
import StartView from './views/StartView/StartView';
import GameView from './views/GameView/GameView';
import './App.css';
import { appContext } from './appContext';

import mainMenuBg from './images/backgrounds/mainMenu.jpg'

function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${mainMenuBg})`}}>
      <StartView />
      <GameView />
    </div>
  );
}

export default App;
