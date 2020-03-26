import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Mahendra",
      isLoggedIn: true
    }
    this.renderName=this.renderName.bind(this)
  }
  renderName() {
    if (!this.state.isLoggedIn) {
      return <h1>Please Login!</h1>
    }
    return <h1>Welcome {this.state.name}</h1>
  }

  render() {
    return (
      <div className="App">
        {
          this.renderName()
        }
      </div>
    );
  }
}

export default App;
