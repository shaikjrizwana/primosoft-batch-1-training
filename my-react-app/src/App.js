import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    const age = 17;
    const major = "Person is Major";
    const minor = "Person is Minor";
    const fruits = ["apple", "orange", "mango"];
    return (
      <div className="App">
        <h1>This is my first App</h1>
        <h1> {age > 18 ? major : minor} </h1>
        <h1>Displaying list of fruits</h1>
        <h2>
          {fruits.map(fruit => {
            return <div>{fruit}</div>;
          })}
        </h2>
      </div>
    );
  }
}

export default App;
