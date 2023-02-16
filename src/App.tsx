import React from 'react';
import logo from './logo.svg';
import './App.css';

import FancyButton from './Components/UI/FancyButton/FancyButton';

function App() {
  return (
    <div className="App">
      <FancyButton design='accent' size='medium' outlined={true} label="test"/>
    </div>
  );
}

export default App;
