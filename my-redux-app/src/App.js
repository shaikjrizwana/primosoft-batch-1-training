import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { updateUser } from "./actions/user-actions"
import { bindActionCreators } from "redux";
class App extends Component {
  constructor(props) {
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this)
  }
  onUpdateUser(event) {
    this.props.onUpdateUser(event.target.value)
  }
  render() {
   // console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <input type="text" onChange={this.onUpdateUser} />
        {this.props.user}
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    products: state.products,
    user: state.user,
    userPlusProps: `${state.user} ${ownProps.randomProps}`
  }
};

const mapActionsToProps = (disptach, props) => {
  console.log(props)
  return bindActionCreators({
    onUpdateUser: updateUser
  }, disptach);
};

export default connect(mapStateToProps, mapActionsToProps)(App);
