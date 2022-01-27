import React from 'react';
import { useState } from 'react';
import './App.css';
import VehicleList from './VehicleList';
import TrafficLight from './TrafficLight';

function App() {
  const [lightColor, setLightColor] = useState('red');
  const [lizardSize, setLizardSize] = useState(10);
  const [alienSize, setAlienSize] = useState(10);
  const [traffic, setTraffic] = useState(['car', 'truck']);

  function handleIncrementLizardWidth() {
    setLizardSize(lizardSize + 1);
  }

  function handleIncrementAlienWidth() {
    setAlienSize(alienSize + 1);
  }

  function handleDecrementLizardWidth() {
    while (lizardSize) return setLizardSize(lizardSize - 1);
  }

  function handleDecrementAlienWidth() {
    while (alienSize) return setAlienSize(alienSize - 1);
  }

  function handleTraffic(vehicle) {
    setTraffic([...traffic, vehicle]);
  }

  return (
    <div className="App">

      <div className="fight">
        <div className="monster">
          <img src="alien.png" width={(alienSize * 10)} />
          <div className='buttons'>
            <button onClick={handleIncrementAlienWidth}>Oh no! The alien is gobbling up all the electricity!</button>
            <button onClick={handleDecrementLizardWidth}>Amazing! The alien zapped the lizard!</button>
          </div>
        </div>
        
        <div className="monster">
          <img src="lizard.png" width={(lizardSize * 10)} />
          <div className="buttons">
            <button onClick={handleIncrementLizardWidth}>Yegads! The lizard is ramping up to its final form!</button>
            <button onClick={handleDecrementAlienWidth}>Oh my! The lizard chomped down on the alien!</button>
          </div>
        </div>
      </div>
      
      <TrafficLight color={lightColor} />
      <div className="buttons">
        <button onClick={() => setLightColor('red')}>Red</button>
        <button onClick={() => setLightColor('yellow')}>Yellow</button>
        <button onClick={() => setLightColor('green')}>Green</button>
      </div>

      <VehicleList vehicles={traffic} />
      <div className='buttons'>
        <button onClick={() => handleTraffic('car')}>Car</button>
        <button onClick={() => handleTraffic('bus')}>Bus</button>
        <button onClick={() => handleTraffic('truck')}>Truck</button>
        <button onClick={() => handleTraffic('motorcycle')}>Motorcycle</button>
      </div>
    </div>
  );
}

export default App;

