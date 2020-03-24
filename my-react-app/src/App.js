import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const list = ['x','y','z'];
  return (
    <div className="App">
      <h1>
        {
          list.map(item => {
            return <div>{item}</div>
          })
        }
      </h1>
    </div>
  );
}

export default App;
