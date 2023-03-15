import './App.css'

function App() {
    return (
        <div className="App">
          <h1>Art Generator</h1>
          <h2>change the sliders and start generating</h2>
    
          <input
            type="range"
            value={radius}
            onChange={(e) => handleRadiusChange(e.target.value)}
            min="1"
            max="10"
          />
          
        </div>
      );
}

export default App
