import React, { Component } from "react";
import "./App.css";

class App extends Component {
   onMouseOver(){
    alert('Mouse is moved')
  }
  render() {
    const fruits = ["apple", "orange", "mango"];
    return (
      <div className="App">
        <h1>Displaying list of fruits</h1>
        <h2>
          {fruits.map(fruit => {
            return <div key={fruit} onMouseOver={this.onMouseOver}> {fruit}</div>
          })}
        </h2>
      </div>
    );
  }
}

export default App;
