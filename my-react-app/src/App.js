import React, {Component} from 'react';
import MyComponent from './MyComponent';
import './App.css';


class App extends Component{
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      title: 'App Title',
      name : 'App Name',
    };
  }
  onMouseOver(){
    alert("Mouse overed");
  }
  onChange(event){
    this.setState({
      name : event.target.value
    });
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
          <h1>{this.state.title}</h1>
          <MyComponent 
          title = {this.state.title}
          name = {this.state.name}
          onClick = {this.onClick}/>
          <input defaultValue = "Divya"/>
      </div>
    )
  }
}

export default App;
