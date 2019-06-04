import React from 'react';
import './App.css';
import TempSlider from './TempSlider'

function App() {
  return (
    <div className="App">
      <h1 class="display-2">Better Temp Tool</h1>
      <p></p>
      <h1 class="display-4">A prototype tool by Neil to help medical cannabis patients optimize their vaporizer use.</h1>
      <p></p>
      <TempSlider />
    </div>
  );
}

export default App;
