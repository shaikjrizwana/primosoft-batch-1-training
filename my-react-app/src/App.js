import React, { Component } from "react";
import "./App.css";
import MyComponent from "./MyComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      title: "App Title"
    };
  }

  onClick() {
    this.setState({
      title: "New App Title"
    });
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <MyComponent
          title="The is the newly created component title."
          onClick={this.onClick}
        />
      </div>
    );
  }
}

export default App;
