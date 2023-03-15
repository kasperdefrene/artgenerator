import './App.css'
import Artwork from './components/Artwork';
import Slider from './components/Slider';
import ColorPicker from './components/ColorPicker';
import { useState } from 'react';

function App() {
  const [radius, setRadius] = useState(125);
  const handleSetRadius = (e) => {
    setRadius(e);
  }

  const [background, setBackground] = useState('azure');
  const handleSetBackground = (e) => {
    setBackground(e);
  }

  const [colorOne, setColorOne] = useState('yellow');
  const handleSetColorOne = (e) => {
    setColorOne(e);
  }

  const[offsetOne, setOffsetOne] = useState(0);
  const handleSetOffsetOne = (e) => {
    setOffsetOne(e);
  }

  const offsetOnePercentage = offsetOne + '%';

  const [colorTwo, setColorTwo] = useState('orange');
  const handleSetColorTwo = (e) => {
    setColorTwo(e);
  }

  const [offsetTwo, setOffsetTwo] = useState(100);
  const handleSetOffsetTwo = (e) => {
    setOffsetTwo(e);
  }

  const offsteTwoPercentage = offsetTwo + '%';

  const [rotation, setRotation] = useState(90);
  const handleSetRotation = (e) => {
    setRotation(e);
  }

  const rotationResult = 'rotate(' + rotation + ')';


  const backgroundStyle = {
    backgroundColor: background
  }

    return (
        <div className="App">
          <h1>Gradient Generator</h1>
          <h2>change the sliders and start generating</h2>

          <h2>Gradient circle</h2>
          <Slider label="Size" min="0" max="250" onValueChange={handleSetRadius} />
          <div className='Gradient'>
            <p>Color One</p>
            <ColorPicker label="colorOne" onValueChange={handleSetColorOne}/>
            <p>Color Two</p>
            <ColorPicker label="colorTwo" onValueChange={handleSetColorTwo}/>
          </div>
          <Slider label="offsetOne" min="0" max="100" onValueChange={handleSetOffsetOne}/>
          <Slider label="offsetTwo" min="0" max="100" onValueChange={handleSetOffsetTwo}/>
          <Slider label="Rotation" min="0" max="360" onValueChange={handleSetRotation}/>

          <h2>Background</h2>
          <ColorPicker onValueChange={handleSetBackground}/>


          <div className='canvas' style={backgroundStyle}>
              <Artwork radius={radius} colorOne={colorOne} colorTwo={colorTwo} rotation={rotationResult} offsetOne={offsetOnePercentage} offsetTwo={offsteTwoPercentage}/>
          </div>        
        </div>

        
      );
}

export default App
