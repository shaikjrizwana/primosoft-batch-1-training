import React, { Component } from "react";
import "./App.css";

class App extends Component{
  constructor(props){
    super(props);
    this.onClick=this.onClick.bind(this)
    this.state={
      title:'App Title'
    }
  }
 
  onClick(){
    this.setState({
      title: 'New App Title'
    })
  }
  render(){
    return(
      <div className="App">
        <h1>{this.state.title}</h1>
        <button onClick={this.onClick}> Click Me!</button>
      </div>
    )
  }
}

export default App;
