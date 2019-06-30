import React, { useState } from 'react';
import StartView from './views/StartView/StartView';
import GameView from './views/GameView/GameView';
import './App.css';

// background list
import mainMenuBg from './images/backgrounds/mainMenu.jpg';
import bg1 from './images/backgrounds/bg1.jpg';

const backgrounds = {
  'mainMenuBg' : mainMenuBg,
  'bg1' : bg1,
}

function App() {
  const [bg, setBg] = useState(backgrounds.mainMenuBg);
  const [state, setState] = useState('startView');

  const changeBg = (bgName) => {
    setBg(backgrounds[bgName])
  }

  return (
    <div className="App" style={{backgroundImage: `url(${bg})`}}>
      { state === 'gameView' ? <GameView changeBg = {changeBg} /> : <StartView setAppState = { setState.bind(this) } /> }
    </div>
  );
}

export default App;
