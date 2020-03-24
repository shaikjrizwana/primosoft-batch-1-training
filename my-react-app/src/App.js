import React, { Component } from "react";
import "./App.css";

class App extends Component{
  constructor(props){
    super(props);
    this.onSubmit=this.onSubmit.bind(this)
  }
  onSubmit(event){
    event.preventDefault();
    alert("submitted");
  }
  render(){
    return(
      <div className="App">
        <h1>constructor and binding methods</h1>
        <form onSubmit={this.onSubmit}>
          <input/>
        </form>
      </div>
    )
  }
}

export default App;
