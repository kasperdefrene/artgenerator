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

  const [background, setBackground] = useState('white');
  const handleSetBackground = (e) => {
    setBackground(e);
  }

  const [colorOne, setColorOne] = useState('black');
  const handleSetColorOne = (e) => {
    setColorOne(e);
  }

  const [colorTwo, setColorTwo] = useState('black');
  const handleSetColorTwo = (e) => {
    setColorTwo(e);
  }

  const[strokeWidth, setStrokeWidth] = useState(1);
  const handleSetStrokeWidth = (e) => {
    setStrokeWidth(e);
  }


  const backgroundStyle = {
    backgroundColor: background
  }

    return (
        <div className="App">
          <h1>Gradient Generator</h1>
          <h2>change the sliders and start generating</h2>

          <h2>Circles</h2>
          <Slider label="Size" min="0" max="250" onValueChange={handleSetRadius} />
          <Slider label="Distance" min="1" max="50" />
          <div className='Gradient'>
            <p>Color One</p>
            <ColorPicker label="colorOne" onValueChange={handleSetColorOne}/>
            <p>Color Two</p>
            <ColorPicker label="colorTwo" onValueChange={handleSetColorTwo}/>
          </div>
          <Slider label="Outline Width" min="1" max="50" onValueChange={handleSetStrokeWidth} />

          <h2>Background</h2>
          <ColorPicker onValueChange={handleSetBackground}/>


          <div className='canvas' style={backgroundStyle}>
              <Artwork radius={radius} colorOne={colorOne} colorTwo={colorTwo}/>
          </div>        
        </div>

        
      );
}

export default App
