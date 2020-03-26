import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.logName = this.logName.bind(this);
  }

  logName() {
    console.log(this.name.value)
  }
  render() {
    return (
      <div className="App">
        <input
          defaultValue="mahendra"
          ref={input => this.name = input}
          onChange={this.logName}
        />
      </div>
    );
  }
}

export default App;
