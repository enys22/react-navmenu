import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dropdown from './Dropdown'

const menu = [
  {title:"Home"},
  {title:"Service",drop:["For","For","For"]},
  {title:"Contact"}
]

function App() {
  return (
    <div className="App">
      <Dropdown menu={menu}/>
      {/* <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
