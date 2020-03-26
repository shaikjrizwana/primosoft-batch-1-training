import React, { Component } from "react";
import "./App.css";
import MyComponent from "./MyComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      title: "Initial Title",
      name: "Initial Name"
    };
  }

  onClick() {
    this.setState({
      name: "New App name ",
      title: "New App title"
    });
  }
  render() {
    return (
      <div className="App">
        <MyComponent
          name={this.state.name}
          title={this.state.title}
          onClick={this.onClick}
        />
      </div>
    );
  }
}

export default App;
