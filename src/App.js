import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Calculator from './Calculator';
//const calcFunction = require('./Calculator.js');


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Calculator /> 
        <Counter />
      
      </header>
    </div>
  );
}

//calcFunction("5 8 +");

export default App;
