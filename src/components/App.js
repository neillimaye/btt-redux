import React from 'react';
import '../App.css';
import TempSlider from '../containers/TempSlider'
import TerpReport from '../containers/TerpReport'

function App() {
  return (
    <div className="App">
     <h1 className="display-2">Better Temp Tool</h1>
     <p></p>
     <h1 className="display-4">A prototype tool by Neil to help medical cannabis patients optimize their vaporizer use.</h1>
     <p></p>
     <TempSlider />
     <TerpReport />
    </div>
  );
}

export default App;
