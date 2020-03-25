import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onMouseOver(){
    alert("Mouse overed");
  }

  onSubmit(event){
    event.preventDefault();
    console.log(this.input.value);
  }
  render(){
    const list = ['x','y','z'];
    return(
      <div className="App" >
          <h1>Learning React</h1>
          <h1>My first react app</h1>
          <h1>
            {
              list.map(item => {
                return <div key = {item} onMouseOver = {this.onMouseOver}>{item}</div>
              })
            }
          </h1>
          <form onSubmit = {this.onSubmit}>
            <input onChange = {this.onChange} ref = {input => this.input = input}/>
          </form>
          
      </div>
    )
  }
}
export default App;
