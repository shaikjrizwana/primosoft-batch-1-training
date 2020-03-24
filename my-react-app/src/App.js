import React, {Component} from 'react';
import './App.css';

class App extends Component{
  onMouseOver(){
    alert("Mouse overed");
  }
  onChange(input){
    console.log(input.target.value);
  }
  onSubmit(input){
    input.preventDefault();
    alert('Submitted');
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
            <input onChange = {this.onChange}/>
          </form>
          
      </div>
    )
  }
}
export default App;
