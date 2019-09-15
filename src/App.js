import React from 'react';
import logo from './logo.svg';
import kiwi from './kiwi.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <h1>
          Galleri
        </h1>
        <div className="Frame">
        <img src={kiwi} className="kiwi-bird" alt="kiwi" />
        </div>
       

        {/*<a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello world
        </a>*/}
      </header>
      <form>
          <label>
          Tema:
          <input
            name="isGoing"
            type="checkbox"
             />
        </label>
        </form>
    
      
    </div>
  );
}



export default App;
