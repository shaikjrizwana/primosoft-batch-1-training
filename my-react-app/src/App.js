import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      shouldrenderTitle : true,
    };
  }
  renderTitle(){
    if(!this.state.shouldrenderTitle){
      return null
    }
    return <h1>Title</h1>
  }
  
  render(){
    return(
      <div className="App" >
        {this.renderTitle()}
      </div>
    )
  }
}

export default App;
