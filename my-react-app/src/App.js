import React, { Component } from "react";
import "./App.css";

class App extends Component {
  onChange(event) {
    console.log(event.target.value);
  }
  onSubmit(event) {
    alert("submitted");
  }
  render() {
    const fruits = ["apple", "orange", "mango"];
    return (
      <div className="App">
        <h1>Displaying list of fruits</h1>
        <h2>
          {fruits.map(fruit => {
            return (
              <div key={fruit} onMouseOver={this.onMouseOver}>
                {" "}
                {fruit}
              </div>
            );
          })}
        </h2>
        <form onSubmit={this.onSubmit}>
          <input onChange={this.onChange}></input>
        </form>
      </div>
    );
  }
}

export default App;
