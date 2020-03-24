import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const value = "Equal";
  const value1 = "Not Equal";
  return (
    <div className="App">
      <h1>
      {(4 === 1+2) ? value : value1}
      </h1>
    </div>
  );
}

export default App;
