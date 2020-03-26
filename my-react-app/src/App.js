import React, {Component} from 'react';
import './App.css';

class App extends Component{ 
  componentWillMount(){
    console.log("Before the component gets mounted");
  }
  componentDidMount(){
    console.log('After the component gets mounted');
  }
  onMouseOver(){
    alert("Mouse overed");
  }
  onSubmit(event){
    event.preventDefault();
    console.log(this.input.value);
  }
  onClick(){
    this.setState({
      title : 'New App Title',
      name : 'New App Name',
    }
    );
  }
  render(){
    return(
      <div className="App" >
          <h1>Learning React</h1>
          <h1>My first react app</h1>
      </div>
    )
  }
}

export default App;
