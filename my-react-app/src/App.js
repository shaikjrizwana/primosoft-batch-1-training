import React, {Component} from 'react';
import MyComponent from './MyComponent';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      count : 0,
      title: 'App Title',
    };
  }
  onMouseOver(){
    alert("Mouse overed");
  }

  onSubmit(event){
    event.preventDefault();
    console.log(this.input.value);
  }
  updateCount(){
    this.setState({
      title : 'New App Title'
    }
    );
  }
  render(){
    return(
      <div className="App" >
          <h1>Learning React</h1>
          <h1>My first react app</h1>
          <h1>{this.state.title}</h1>
          <MyComponent />
      </div>
    )
  }
}
export default App;
