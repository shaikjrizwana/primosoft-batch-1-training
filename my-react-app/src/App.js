import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "mahendra",
      checked: true
    }
    this.updateName = this.updateName.bind(this);
    this.updateCheck = this.updateCheck.bind(this);
  }

  updateName(event) {
    this.setState({
      name: event.target.value
    })
  }

  updateCheck(event) {
      this.setState({
        checked: !this.state.checked
      })
  }
  render() {
    return (
      <div className="App">
        <input
          onChange={this.updateName}
          value={this.state.name}
        />
        <div>
          <input
            type="checkbox"
            onChange={this.updateCheck}
            checked={this.state.checked}
          />
        </div>
      </div>
    );
  }
}

export default App;
