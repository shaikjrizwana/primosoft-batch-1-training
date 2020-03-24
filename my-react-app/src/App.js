import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  function onClick(){
    alert('clicked');
  }
  function onMouseOver(){
    alert('Mouse Entered');
  }
  function onChange(event){
    console.log(event.target.value)
  }
  const list = ['x','y','z'];
  return (
    <div className="App">
      <h1>
        {
          list.map(item => {
            return <div key = {item} onMouseOver = {onMouseOver}>{item}</div>
          })
        }
      </h1>
      <input onChange = {onChange}/>
    </div>
  );
}

export default App;
