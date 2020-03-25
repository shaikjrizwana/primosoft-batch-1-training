import React, { Component } from "react";
import "./App.css";

class App extends Component{
  constructor(props){
    super(props);
    this.onSubmit=this.onSubmit.bind(this)
  }
  onSubmit(event){
    event.preventDefault();
    console.log(this.input.value);
  }
  render(){
    return(
      <div className="App">
        <h1>constructor and binding methods</h1>
        <form onSubmit={this.onSubmit}>
          <input  ref={input=>this.input=input}/>
        </form>
      </div>
    )
  }
}

export default App;
