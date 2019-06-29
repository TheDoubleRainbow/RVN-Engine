import React, { useState } from 'react';
import './App.css';

function App() {
  const [appName, setTest] = useState('RVN Engine');
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to {appName}</p>
      </header>
    </div>
  );
}

export default App;
