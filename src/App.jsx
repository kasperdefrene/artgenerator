import './App.css'
import Artwork from './components/Artwork';
import Slider from './components/Slider';
import ColorPicker from './components/ColorPicker';
import Counter from './components/Counter';
import { useState } from 'react';

function App() {
  const [radius, setRadius] = useState(1);
  const handleSetRadius = (e) => {
    setRadius(e);
  }
  
  const [background, setBackground] = useState({backgroundColor: 'red'});
  const handleSetBackground = (e) => {
    setBackground(e);
  }
    return (
        <div className="App">
          <h1>Art Generator</h1>
          <h2>change the sliders and start generating</h2>

          <h2>Circles</h2>
          <Slider label="Amount" min="1" max="50" />
          <Slider label="Size" min="1" max="10" onValueChange={handleSetRadius} />
          <Slider label="Distance" min="1" max="50" />

          <h2>Background</h2>
          <ColorPicker onValueChange={handleSetBackground}/>

        <div className='canvas' style={background}>
            <Artwork banaan={radius}  />
        </div>        
        </div>

        
      );
}

export default App
