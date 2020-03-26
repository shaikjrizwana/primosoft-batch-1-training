import React, { Component } from "react";
import "./App.css";
import MyComponent from "./MyComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      title: "Initial Title",
      name: 2
    };
  }

  onClick() {
    this.setState({
      name: "Updated name ",
      title: "Updated title"
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
